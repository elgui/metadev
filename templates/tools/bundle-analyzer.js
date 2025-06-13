#!/usr/bin/env node

/**
 * Simple Bundle Analyzer
 * 
 * A basic tool to analyze your JavaScript bundle size and find optimization opportunities.
 * Works with most frontend build systems (Vite, Create React App, Webpack, etc.)
 */

const fs = require('fs');
const path = require('path');

class SimpleBundleAnalyzer {
  constructor(options = {}) {
    this.buildDir = options.buildDir || this.findBuildDirectory();
    this.logFile = options.logFile || path.join(__dirname, '../logs/bundle-analysis.log');
    this.warningSizeKB = options.warningSizeKB || 200; // 200KB warning threshold
    this.errorSizeKB = options.errorSizeKB || 500; // 500KB error threshold
    
    // Ensure log directory exists
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  // Try to find common build directories
  findBuildDirectory() {
    const commonPaths = ['build', 'dist', 'public/build'];
    
    for (const dirPath of commonPaths) {
      if (fs.existsSync(dirPath)) {
        return dirPath;
      }
    }
    
    return 'build'; // Default fallback
  }

  // Get file size in a human-readable format
  formatFileSize(bytes) {
    if (bytes === 0) return '0 B';
    
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  }

  // Analyze a single file
  analyzeFile(filePath) {
    const stats = fs.statSync(filePath);
    const sizeBytes = stats.size;
    const sizeKB = sizeBytes / 1024;
    const relativePath = path.relative(this.buildDir, filePath);
    
    let status = 'good';
    if (sizeKB > this.errorSizeKB) {
      status = 'error';
    } else if (sizeKB > this.warningSizeKB) {
      status = 'warning';
    }
    
    return {
      path: relativePath,
      fullPath: filePath,
      sizeBytes,
      sizeKB: Math.round(sizeKB),
      sizeFormatted: this.formatFileSize(sizeBytes),
      status,
      isCompressed: filePath.endsWith('.gz') || filePath.endsWith('.br')
    };
  }

  // Find all JavaScript and CSS files in build directory
  findBundleFiles(directory = this.buildDir) {
    const files = [];
    
    if (!fs.existsSync(directory)) {
      throw new Error(`Build directory not found: ${directory}`);
    }
    
    const scanDirectory = (dir) => {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          scanDirectory(fullPath);
        } else if (this.isBundleFile(item)) {
          files.push(fullPath);
        }
      }
    };
    
    scanDirectory(directory);
    return files;
  }

  // Check if file is a bundle file we care about
  isBundleFile(filename) {
    const extensions = ['.js', '.css'];
    const excludePatterns = ['.map', '.txt', '.html'];
    
    // Must have relevant extension
    if (!extensions.some(ext => filename.endsWith(ext))) {
      return false;
    }
    
    // Must not be excluded
    if (excludePatterns.some(pattern => filename.includes(pattern))) {
      return false;
    }
    
    return true;
  }

  // Analyze all bundle files
  async analyzeBundles() {
    console.log(`📦 Analyzing bundles in ${this.buildDir}`);
    
    const bundleFiles = this.findBundleFiles();
    
    if (bundleFiles.length === 0) {
      throw new Error(`No bundle files found in ${this.buildDir}. Did you run 'npm run build'?`);
    }
    
    const analysis = bundleFiles.map(file => this.analyzeFile(file));
    
    // Sort by size (largest first)
    analysis.sort((a, b) => b.sizeBytes - a.sizeBytes);
    
    return analysis;
  }

  // Generate analysis report
  generateReport(analysis) {
    const totalSize = analysis.reduce((sum, file) => sum + file.sizeBytes, 0);
    const jsFiles = analysis.filter(f => f.path.endsWith('.js'));
    const cssFiles = analysis.filter(f => f.path.endsWith('.css'));
    const largeFiles = analysis.filter(f => f.status === 'error');
    const warningFiles = analysis.filter(f => f.status === 'warning');
    
    const report = {
      totalSize: this.formatFileSize(totalSize),
      totalSizeKB: Math.round(totalSize / 1024),
      fileCount: analysis.length,
      jsSize: this.formatFileSize(jsFiles.reduce((sum, f) => sum + f.sizeBytes, 0)),
      cssSize: this.formatFileSize(cssFiles.reduce((sum, f) => sum + f.sizeBytes, 0)),
      largeFiles: largeFiles.length,
      warningFiles: warningFiles.length,
      status: largeFiles.length > 0 ? 'error' : warningFiles.length > 0 ? 'warning' : 'good',
      files: analysis
    };
    
    return report;
  }

  // Print report to console
  printReport(report) {
    console.log('\n📊 Bundle Analysis Report');
    console.log('=========================');
    
    // Overall summary
    console.log(`📦 Total bundle size: ${report.totalSize} (${report.totalSizeKB} KB)`);
    console.log(`📄 Files analyzed: ${report.fileCount}`);
    console.log(`🟨 JavaScript: ${report.jsSize}`);
    console.log(`🎨 CSS: ${report.cssSize}`);
    
    // Status indicators
    if (report.status === 'error') {
      console.log(`❌ Status: ${report.largeFiles} files exceed ${this.errorSizeKB}KB threshold`);
    } else if (report.status === 'warning') {
      console.log(`⚠️  Status: ${report.warningFiles} files exceed ${this.warningSizeKB}KB threshold`);
    } else {
      console.log('✅ Status: All files within size limits');
    }
    
    // File breakdown
    console.log('\n📁 File Breakdown:');
    for (const file of report.files) {
      const icon = file.status === 'error' ? '❌' : file.status === 'warning' ? '⚠️ ' : '✅';
      console.log(`${icon} ${file.path} - ${file.sizeFormatted}`);
    }
    
    // Recommendations
    console.log('\n💡 Recommendations:');
    if (report.largeFiles > 0) {
      console.log('• Consider code splitting for large JavaScript files');
      console.log('• Use dynamic imports for non-critical code');
      console.log('• Check for duplicate dependencies in your bundle');
    }
    
    if (report.totalSizeKB > 300) {
      console.log('• Total bundle size is quite large. Consider:');
      console.log('  - Lazy loading components');
      console.log('  - Tree shaking unused code');
      console.log('  - Using a smaller UI library');
    }
    
    if (report.status === 'good') {
      console.log('• Bundle size looks healthy! 🎉');
    }
  }

  // Log analysis to file
  logAnalysis(report) {
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      totalSizeKB: report.totalSizeKB,
      fileCount: report.fileCount,
      status: report.status,
      files: report.files.map(f => ({
        path: f.path,
        sizeKB: f.sizeKB,
        status: f.status
      }))
    };
    
    fs.appendFileSync(this.logFile, JSON.stringify(logEntry) + '\n');
  }

  // Run full analysis
  async runAnalysis() {
    try {
      const analysis = await this.analyzeBundles();
      const report = this.generateReport(analysis);
      
      this.printReport(report);
      this.logAnalysis(report);
      
      return report;
    } catch (error) {
      console.error('❌ Bundle analysis failed:', error.message);
      throw error;
    }
  }
}

// CLI usage
if (require.main === module) {
  const command = process.argv[2];
  const buildDir = process.argv[3];
  
  const analyzer = new SimpleBundleAnalyzer({ buildDir });
  
  if (command === 'analyze' || !command) {
    analyzer.runAnalysis()
      .then(report => {
        console.log(`\n📄 Analysis logged to: ${analyzer.logFile}`);
        
        // Exit with error code if bundles are too large
        if (report.status === 'error') {
          process.exit(1);
        }
      })
      .catch(error => {
        console.error('Failed to analyze bundles:', error.message);
        process.exit(1);
      });
      
  } else if (command === 'check') {
    // Quick check mode - just report status
    analyzer.runAnalysis()
      .then(report => {
        console.log(`Bundle status: ${report.status.toUpperCase()}`);
        console.log(`Total size: ${report.totalSize}`);
        
        if (report.status !== 'good') {
          process.exit(1);
        }
      })
      .catch(() => process.exit(1));
      
  } else {
    console.log('📦 Simple Bundle Analyzer');
    console.log('');
    console.log('Usage:');
    console.log('  node bundle-analyzer.js [analyze] [buildDir]  # Full analysis (default)');
    console.log('  node bundle-analyzer.js check [buildDir]     # Quick status check');
    console.log('');
    console.log('Examples:');
    console.log('  node bundle-analyzer.js                     # Analyze default build directory');
    console.log('  node bundle-analyzer.js analyze dist        # Analyze specific directory');
    console.log('  node bundle-analyzer.js check               # Quick check for CI/CD');
    console.log('');
    console.log('Add to package.json scripts:');
    console.log('  "analyze": "node tools/bundle-analyzer.js"');
    console.log('  "build:check": "npm run build && node tools/bundle-analyzer.js check"');
  }
}

module.exports = SimpleBundleAnalyzer;
