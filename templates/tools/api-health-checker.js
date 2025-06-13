#!/usr/bin/env node

/**
 * API Health Checker
 * 
 * A simple tool to check if your API endpoints are working correctly.
 * Useful for backend workspace monitoring and debugging.
 */

const fs = require('fs');
const path = require('path');

class APIHealthChecker {
  constructor(options = {}) {
    this.baseUrl = options.baseUrl || 'http://localhost:8000';
    this.timeout = options.timeout || 5000; // 5 seconds
    this.logFile = options.logFile || path.join(__dirname, '../logs/api-health.log');
    
    // Ensure log directory exists
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  // Check a single endpoint
  async checkEndpoint(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    const method = options.method || 'GET';
    const expectedStatus = options.expectedStatus || 200;
    const headers = options.headers || {};
    const body = options.body;
    
    const startTime = Date.now();
    
    try {
      // Use native fetch or require a lightweight alternative
      const response = await this.makeRequest(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...headers
        },
        body: body ? JSON.stringify(body) : undefined,
        timeout: this.timeout
      });
      
      const duration = Date.now() - startTime;
      const success = response.status === expectedStatus;
      
      const result = {
        endpoint,
        url,
        method,
        status: response.status,
        duration,
        success,
        timestamp: new Date().toISOString(),
        error: success ? null : `Expected ${expectedStatus}, got ${response.status}`
      };
      
      this.logResult(result);
      return result;
      
    } catch (error) {
      const duration = Date.now() - startTime;
      
      const result = {
        endpoint,
        url,
        method,
        status: null,
        duration,
        success: false,
        timestamp: new Date().toISOString(),
        error: error.message
      };
      
      this.logResult(result);
      return result;
    }
  }

  // Simple HTTP request implementation
  async makeRequest(url, options) {
    // If running in Node.js, you might need to install node-fetch or use built-in fetch
    if (typeof fetch === 'undefined') {
      try {
        const fetch = require('node-fetch');
        return await fetch(url, options);
      } catch (err) {
        console.log('💡 Install node-fetch for better compatibility: npm install node-fetch');
        throw new Error('fetch is not available. Install node-fetch or use Node 18+');
      }
    }
    
    return await fetch(url, options);
  }

  // Check multiple endpoints
  async checkMultipleEndpoints(endpoints) {
    const results = [];
    
    for (const config of endpoints) {
      const endpoint = typeof config === 'string' ? config : config.endpoint;
      const options = typeof config === 'object' ? config : {};
      
      console.log(`🔍 Checking ${endpoint}...`);
      const result = await this.checkEndpoint(endpoint, options);
      results.push(result);
      
      // Show immediate feedback
      if (result.success) {
        console.log(`✅ ${endpoint} - ${result.duration}ms`);
      } else {
        console.log(`❌ ${endpoint} - ${result.error}`);
      }
    }
    
    return results;
  }

  // Log result to file
  logResult(result) {
    const status = result.success ? 'SUCCESS' : 'FAILED';
    const logLine = `${result.timestamp} | ${result.method} ${result.endpoint} | ${result.duration}ms | ${status} | ${result.error || ''}\n`;
    fs.appendFileSync(this.logFile, logLine);
  }

  // Get health summary
  getHealthSummary(results) {
    const total = results.length;
    const successful = results.filter(r => r.success).length;
    const failed = total - successful;
    const avgDuration = results.reduce((sum, r) => sum + r.duration, 0) / total;
    
    const summary = {
      total,
      successful,
      failed,
      successRate: Math.round((successful / total) * 100),
      avgDuration: Math.round(avgDuration),
      status: failed === 0 ? 'HEALTHY' : failed < total / 2 ? 'DEGRADED' : 'UNHEALTHY'
    };
    
    return summary;
  }

  // Continuous monitoring
  async startMonitoring(endpoints, intervalMinutes = 5) {
    console.log(`🔄 Starting API health monitoring every ${intervalMinutes} minutes`);
    console.log(`📁 Logging to: ${this.logFile}`);
    
    const runCheck = async () => {
      console.log(`\n📊 Health check at ${new Date().toLocaleTimeString()}`);
      const results = await this.checkMultipleEndpoints(endpoints);
      const summary = this.getHealthSummary(results);
      
      console.log(`📈 Summary: ${summary.successful}/${summary.total} healthy, avg ${summary.avgDuration}ms, status: ${summary.status}`);
      
      if (summary.status !== 'HEALTHY') {
        console.log('⚠️  Some endpoints are having issues. Check the logs for details.');
      }
    };
    
    // Run immediately, then at intervals
    await runCheck();
    setInterval(runCheck, intervalMinutes * 60 * 1000);
  }
}

// Example endpoint configurations
const defaultEndpoints = [
  '/api/health',
  '/api/users',
  {
    endpoint: '/api/auth/login',
    method: 'POST',
    body: { email: 'test@example.com', password: 'testpass' },
    expectedStatus: 400 // Expecting validation error, not 200
  }
];

// CLI usage
if (require.main === module) {
  const command = process.argv[2];
  const baseUrl = process.argv[3] || 'http://localhost:8000';
  
  const checker = new APIHealthChecker({ baseUrl });
  
  if (command === 'check') {
    console.log(`🏥 API Health Check for ${baseUrl}`);
    
    checker.checkMultipleEndpoints(defaultEndpoints)
      .then(results => {
        const summary = checker.getHealthSummary(results);
        console.log('\n📊 Overall Health Summary:');
        console.log(`Status: ${summary.status}`);
        console.log(`Success Rate: ${summary.successRate}%`);
        console.log(`Average Response Time: ${summary.avgDuration}ms`);
        console.log(`Check logs for details: ${checker.logFile}`);
      })
      .catch(error => {
        console.error('❌ Health check failed:', error.message);
      });
      
  } else if (command === 'monitor') {
    const interval = parseInt(process.argv[4]) || 5;
    checker.startMonitoring(defaultEndpoints, interval);
    
  } else if (command === 'single') {
    const endpoint = process.argv[4] || '/api/health';
    console.log(`🔍 Checking single endpoint: ${baseUrl}${endpoint}`);
    
    checker.checkEndpoint(endpoint)
      .then(result => {
        if (result.success) {
          console.log(`✅ Success: ${result.duration}ms`);
        } else {
          console.log(`❌ Failed: ${result.error}`);
        }
      })
      .catch(error => {
        console.error('❌ Check failed:', error.message);
      });
      
  } else {
    console.log('🏥 API Health Checker');
    console.log('');
    console.log('Usage:');
    console.log('  node api-health-checker.js check [baseUrl]           # Check all endpoints once');
    console.log('  node api-health-checker.js monitor [baseUrl] [mins]  # Monitor continuously');
    console.log('  node api-health-checker.js single [baseUrl] [path]   # Check single endpoint');
    console.log('');
    console.log('Examples:');
    console.log('  node api-health-checker.js check http://localhost:8000');
    console.log('  node api-health-checker.js monitor http://localhost:8000 10');
    console.log('  node api-health-checker.js single http://localhost:8000 /api/users');
    console.log('');
    console.log('Customize endpoints by editing the defaultEndpoints array in this file.');
  }
}

module.exports = APIHealthChecker;
