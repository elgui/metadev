# Simple Monitoring Tools

Practical, lightweight tools for AI workspaces. Copy these to your workspace's `tools/` directory and customize for your project.

## Philosophy

These tools are designed to be:
- **Simple**: Easy to understand and modify
- **Practical**: Solve real problems developers face
- **Lightweight**: No heavy dependencies
- **Customizable**: Templates you can adapt to your needs

## Available Tools

### 1. Simple Performance Monitor (`simple-performance-monitor.js`)

**What it does**: Measures how long operations take and tracks performance over time.

**Good for**:
- Measuring API response times
- Tracking database query performance
- Monitoring page load times
- Identifying performance regressions

**Basic usage**:
```bash
# Test API response time
node tools/simple-performance-monitor.js test-api http://localhost:8000/api/users

# Start continuous monitoring
node tools/simple-performance-monitor.js monitor
```

**In your code**:
```javascript
const { measureApiCall } = require('./tools/simple-performance-monitor');

// Measure an API call
const userData = await measureApiCall('http://localhost:8000/api/users');

// Check logs/performance.log for timing data
```

### 2. API Health Checker (`api-health-checker.js`)

**What it does**: Checks if your API endpoints are responding correctly.

**Good for**:
- Verifying backend is working after changes
- Monitoring API health in development
- Checking multiple endpoints at once
- Debugging API connectivity issues

**Basic usage**:
```bash
# Check all configured endpoints
node tools/api-health-checker.js check

# Monitor continuously (every 5 minutes)
node tools/api-health-checker.js monitor

# Check single endpoint
node tools/api-health-checker.js single http://localhost:8000 /api/health
```

**Customize endpoints** by editing the `defaultEndpoints` array in the file.

### 3. Bundle Analyzer (`bundle-analyzer.js`)

**What it does**: Analyzes your JavaScript bundle size and identifies optimization opportunities.

**Good for**:
- Checking if bundles are getting too large
- Finding files that need code splitting
- Monitoring bundle size over time
- CI/CD pipeline size checks

**Basic usage**:
```bash
# Analyze build directory
npm run build
node tools/bundle-analyzer.js

# Quick status check
node tools/bundle-analyzer.js check

# Analyze specific directory
node tools/bundle-analyzer.js analyze dist
```

**Add to package.json**:
```json
{
  "scripts": {
    "analyze": "npm run build && node tools/bundle-analyzer.js",
    "build:check": "npm run build && node tools/bundle-analyzer.js check"
  }
}
```

## Installation and Setup

### 1. Copy Tools to Your Workspace

```bash
# In your workspace directory
mkdir tools logs
cd tools

# Copy the tools you want
curl -O https://raw.githubusercontent.com/yourusername/metadev/main/templates/tools/simple-performance-monitor.js
curl -O https://raw.githubusercontent.com/yourusername/metadev/main/templates/tools/api-health-checker.js
curl -O https://raw.githubusercontent.com/yourusername/metadev/main/templates/tools/bundle-analyzer.js

# Make them executable
chmod +x *.js
```

### 2. Install Dependencies (if needed)

Most tools work without additional dependencies, but for Node.js < 18:

```bash
# For API health checker (if fetch is not available)
npm install node-fetch
```

### 3. Customize for Your Project

Edit the configuration sections in each tool:

**For API Health Checker**:
```javascript
// Edit defaultEndpoints array
const defaultEndpoints = [
  '/api/health',
  '/api/users',
  '/api/your-specific-endpoint'
];
```

**For Performance Monitor**:
```javascript
// Adjust thresholds
const monitor = new SimplePerformanceMonitor({
  logFile: '../logs/performance.log',
  interval: 10000  // 10 seconds instead of 5
});
```

**For Bundle Analyzer**:
```javascript
// Adjust size thresholds
const analyzer = new SimpleBundleAnalyzer({
  warningSizeKB: 150,  // Warn at 150KB instead of 200KB
  errorSizeKB: 300     // Error at 300KB instead of 500KB
});
```

## How to Use with AI Assistance

### Before Making Changes
```
I'm working in [workspace]. Start monitoring with these tools:

1. node tools/simple-performance-monitor.js monitor
2. node tools/api-health-checker.js monitor

Then help me [describe your task]. I want to see the performance impact of any changes we make.
```

### After Making Changes
```
I just implemented [your change]. Let's check the impact:

1. Run bundle analysis to check size impact
2. Test API health to make sure nothing broke
3. Check performance logs for any regressions

Here are the results: [paste results]

What do you think? Any concerns about these metrics?
```

### For Performance Debugging
```
I'm seeing performance issues. Here's what the monitoring tools show:

[paste performance monitor output]
[paste API health check results]

The problem seems to be [describe symptoms]. Help me identify the root cause and fix it.
```

## Customization Examples

### Add Authentication to API Health Checker

```javascript
// In api-health-checker.js, modify checkEndpoint method
async checkEndpoint(endpoint, options = {}) {
  // Add your auth token
  const headers = {
    'Authorization': `Bearer ${process.env.API_TOKEN}`,
    ...options.headers
  };
  
  // Rest of the method...
}
```

### Add Custom Metrics to Performance Monitor

```javascript
// Add memory usage tracking
recordMetric(metric) {
  const memoryUsage = process.memoryUsage();
  const enhancedMetric = {
    ...metric,
    memoryMB: Math.round(memoryUsage.heapUsed / 1024 / 1024)
  };
  
  this.metrics.push(enhancedMetric);
  this.logMetric(enhancedMetric);
}
```

### Add File Type Analysis to Bundle Analyzer

```javascript
// Analyze different file types separately
generateReport(analysis) {
  const imageFiles = analysis.filter(f => /\.(jpg|png|gif|svg)$/.test(f.path));
  const fontFiles = analysis.filter(f => /\.(woff|woff2|ttf)$/.test(f.path));
  
  // Add to report
  report.imageSize = this.formatFileSize(imageFiles.reduce((sum, f) => sum + f.sizeBytes, 0));
  report.fontSize = this.formatFileSize(fontFiles.reduce((sum, f) => sum + f.sizeBytes, 0));
  
  return report;
}
```

## Integration with Package.json Scripts

Add these useful scripts to your `package.json`:

```json
{
  "scripts": {
    "monitor:api": "node tools/api-health-checker.js monitor",
    "monitor:perf": "node tools/simple-performance-monitor.js monitor",
    "check:health": "node tools/api-health-checker.js check",
    "check:bundle": "npm run build && node tools/bundle-analyzer.js check",
    "analyze:bundle": "npm run build && node tools/bundle-analyzer.js",
    "test:api": "node tools/api-health-checker.js check && node tools/simple-performance-monitor.js test-api",
    "precommit:check": "npm run check:bundle && npm run check:health"
  }
}
```

## Log Files and Data

All tools create log files in the `logs/` directory:

- `logs/performance.log` - Performance timing data
- `logs/api-health.log` - API health check results  
- `logs/bundle-analysis.log` - Bundle size analysis (JSON format)

### Reading Log Data

```bash
# Check recent performance issues
tail -50 logs/performance.log

# Find API failures
grep "FAILED" logs/api-health.log

# Check bundle size trends
tail -5 logs/bundle-analysis.log | jq '.totalSizeKB'
```

## Creating Your Own Tools

### Basic Tool Template

```javascript
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class YourCustomTool {
  constructor(options = {}) {
    this.logFile = options.logFile || path.join(__dirname, '../logs/your-tool.log');
    
    // Ensure log directory exists
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  async runYourCheck() {
    // Your tool logic here
    const result = { 
      success: true, 
      message: 'Check completed',
      timestamp: new Date().toISOString()
    };
    
    this.logResult(result);
    return result;
  }

  logResult(result) {
    const logLine = `${result.timestamp} | ${result.success ? 'SUCCESS' : 'FAILED'} | ${result.message}\n`;
    fs.appendFileSync(this.logFile, logLine);
  }
}

// CLI usage
if (require.main === module) {
  const tool = new YourCustomTool();
  tool.runYourCheck()
    .then(result => console.log(result.message))
    .catch(error => console.error('Tool failed:', error.message));
}

module.exports = YourCustomTool;
```

## Tips for Success

### Keep Tools Simple
- Focus on one specific problem per tool
- Avoid complex dependencies
- Make tools easy to understand and modify

### Make Them Observable
- Always log results to files
- Print clear status messages
- Include timestamps in all output

### Design for Automation
- Support command-line usage
- Return appropriate exit codes for CI/CD
- Make output machine-readable when needed

### Document Your Customizations
- Add comments explaining your project-specific changes
- Update your workspace's KNOWLEDGE.md with useful tool patterns
- Share successful tool modifications with the community

---

**Remember**: These tools are starting points. Customize them for your specific project needs. The goal is to give your AI assistant (and yourself) better visibility into what's happening in your system.
