#!/usr/bin/env node

/**
 * Simple Performance Monitor
 * 
 * A basic tool to measure and track performance metrics for your application.
 * Customize this for your specific needs - it's meant to be simple and practical.
 */

const fs = require('fs');
const path = require('path');

class SimplePerformanceMonitor {
  constructor(options = {}) {
    this.name = options.name || 'performance-monitor';
    this.logFile = options.logFile || path.join(__dirname, '../logs/performance.log');
    this.interval = options.interval || 5000; // 5 seconds
    this.metrics = [];
    
    // Ensure log directory exists
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  // Measure how long something takes
  async measureOperation(name, operation) {
    const startTime = Date.now();
    const startMemory = process.memoryUsage().heapUsed;
    
    try {
      const result = await operation();
      const endTime = Date.now();
      const endMemory = process.memoryUsage().heapUsed;
      
      const metric = {
        name,
        duration: endTime - startTime,
        memoryDelta: endMemory - startMemory,
        timestamp: new Date().toISOString(),
        success: true
      };
      
      this.recordMetric(metric);
      return result;
    } catch (error) {
      const endTime = Date.now();
      
      const metric = {
        name,
        duration: endTime - startTime,
        error: error.message,
        timestamp: new Date().toISOString(),
        success: false
      };
      
      this.recordMetric(metric);
      throw error;
    }
  }

  // Record a metric manually
  recordMetric(metric) {
    this.metrics.push(metric);
    this.logMetric(metric);
  }

  // Log to file
  logMetric(metric) {
    const logLine = `${metric.timestamp} | ${metric.name} | ${metric.duration}ms | ${metric.success ? 'SUCCESS' : 'ERROR'}\n`;
    fs.appendFileSync(this.logFile, logLine);
  }

  // Get summary of recent metrics
  getSummary(minutes = 10) {
    const cutoff = new Date(Date.now() - minutes * 60 * 1000);
    const recentMetrics = this.metrics.filter(m => new Date(m.timestamp) > cutoff);
    
    if (recentMetrics.length === 0) {
      return { message: 'No recent metrics' };
    }

    const successful = recentMetrics.filter(m => m.success);
    const failed = recentMetrics.filter(m => !m.success);
    
    const durations = successful.map(m => m.duration);
    const avgDuration = durations.reduce((a, b) => a + b, 0) / durations.length;
    const maxDuration = Math.max(...durations);
    const minDuration = Math.min(...durations);

    return {
      total: recentMetrics.length,
      successful: successful.length,
      failed: failed.length,
      avgDuration: Math.round(avgDuration),
      maxDuration,
      minDuration,
      timeWindow: `${minutes} minutes`
    };
  }

  // Start continuous monitoring (if you have background operations)
  startMonitoring() {
    console.log(`📊 Performance monitoring started (${this.name})`);
    console.log(`📁 Logging to: ${this.logFile}`);
    
    setInterval(() => {
      const summary = this.getSummary(5);
      if (summary.total > 0) {
        console.log(`📈 Last 5 min: ${summary.total} ops, avg ${summary.avgDuration}ms, ${summary.failed} failed`);
      }
    }, this.interval);
  }
}

// Example usage functions

// Measure API response time
async function measureApiCall(url) {
  const monitor = new SimplePerformanceMonitor();
  
  return await monitor.measureOperation('api-call', async () => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    return await response.json();
  });
}

// Measure database query time (example with a promise)
async function measureDatabaseQuery(queryPromise) {
  const monitor = new SimplePerformanceMonitor();
  
  return await monitor.measureOperation('database-query', () => queryPromise);
}

// Measure page load time (for frontend)
function measurePageLoad() {
  if (typeof window === 'undefined') {
    console.log('Page load measurement only works in browser');
    return;
  }

  const monitor = new SimplePerformanceMonitor({ name: 'page-load' });
  
  window.addEventListener('load', () => {
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    monitor.recordMetric({
      name: 'page-load',
      duration: loadTime,
      timestamp: new Date().toISOString(),
      success: true
    });
    
    console.log(`📊 Page loaded in ${loadTime}ms`);
  });
}

// Simple CLI usage
if (require.main === module) {
  const command = process.argv[2];
  
  if (command === 'test-api') {
    const url = process.argv[3] || 'http://localhost:8000/api/health';
    console.log(`🧪 Testing API: ${url}`);
    
    measureApiCall(url)
      .then(data => {
        console.log('✅ API call successful');
        console.log('📊 Check logs/performance.log for timing data');
      })
      .catch(error => {
        console.error('❌ API call failed:', error.message);
      });
  } else if (command === 'monitor') {
    const monitor = new SimplePerformanceMonitor();
    monitor.startMonitoring();
  } else {
    console.log('📊 Simple Performance Monitor');
    console.log('');
    console.log('Usage:');
    console.log('  node performance-monitor.js test-api [url]    # Test API response time');
    console.log('  node performance-monitor.js monitor           # Start continuous monitoring');
    console.log('');
    console.log('Examples:');
    console.log('  node performance-monitor.js test-api http://localhost:3000/api/users');
    console.log('  node performance-monitor.js monitor');
  }
}

module.exports = { SimplePerformanceMonitor, measureApiCall, measureDatabaseQuery, measurePageLoad };
