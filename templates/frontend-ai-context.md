# Frontend AI Context & Tool Catalog (ai-agents/frontend/)

**Purpose**: This file serves as both context about your frontend and a catalog of AI-built tools. Save this as `ai-agents/frontend/AI-CONTEXT.md` in your project.

**Your Role as AI Agent**: You're not just here to write code - you're here to build, maintain, and continuously improve tools that give you real-time insight into the frontend system. Every tool you create should solve a specific observability or automation need.

**Important**: This is SEPARATE from your actual code. Your normal `src/`, `components/`, etc. folders stay exactly where they are. This exists solely for AI agent collaboration and tooling.

## Your Project Setup

**Framework**: [React 18 / Vue 3 / Angular 15 / Vanilla JS]  
**Main Technologies**: [TypeScript, Tailwind CSS, etc.]  
**Build Tool**: [Vite / Create React App / Webpack / etc.]  
**Current Status**: [Brief description of the app's current state]

### Key User Flows
1. **User registration/login**: [Describe how users sign up and log in]
2. **Main functionality**: [What users primarily do in your app]
3. **Mobile experience**: [How the mobile version works]

### Performance Targets
- **Page load time**: Under 3 seconds on mobile
- **JavaScript bundle**: Under 200KB gzipped
- **Core Web Vitals**: All green in PageSpeed Insights

## Your Actual Code Structure

**Note**: This describes your existing code structure to help AI understand your project. Don't reorganize your actual code.

```
src/
├── components/           # Reusable UI components
├── pages/               # Main application pages  
├── hooks/               # Custom React hooks (if using React)
├── utils/               # Helper functions
├── styles/              # CSS/styling files
├── api/                 # API integration code
└── assets/              # Images, fonts, etc.
```

## Common Problems We Face

### Performance Issues
- **Bundle size**: JavaScript files getting too large
- **Slow loading**: Pages taking too long to show content
- **Memory leaks**: App getting slower over time

### Mobile Problems  
- **Touch interactions**: Buttons not working properly on mobile
- **Responsive design**: Layout breaking on different screen sizes
- **Safari-specific**: Issues that only happen on iOS Safari

### Integration Issues
- **API errors**: When backend calls fail or return unexpected data
- **Authentication**: Login/logout flow problems
- **Real-time updates**: WebSocket or live data issues

## What Good Success Looks Like

### For New Features
- Works consistently across Chrome, Firefox, Safari, and mobile browsers
- Loads quickly (under 2 seconds to show content)
- Accessible to users with screen readers and keyboard navigation
- Doesn't break existing functionality

### For Bug Fixes
- Problem is completely resolved for all affected users
- No new issues introduced by the fix
- Root cause is identified and documented
- Similar issues can be prevented in the future

### For Performance Work
- Measurable improvement (specific numbers, not just "feels faster")
- No negative impact on functionality
- Improvement applies to real user conditions (not just development)
- Technique can be applied to similar problems

## How to Help Me Effectively

### When You're Helping with Frontend Issues
1. **Read this file first** so you understand our frontend setup
2. **Be specific about the problem** - which browsers, which users, what exactly happens
3. **Include what I've already tried** - saves time and shows what doesn't work
4. **Describe what success looks like** - how we'll know when it's fixed

### Example of a Good Request to You
```
I'm working with the frontend of our application. I've read the AI context - you know we use React 18 with TypeScript and Vite.

PROBLEM: When users try to upload a profile picture on mobile Safari, 
the file picker opens but after selecting a photo, nothing happens. 
The upload should show a preview and save the image.

WHAT I'VE TRIED:
- Tested on desktop Safari (works fine)
- Checked browser console (no errors shown)
- Tested the API endpoint directly (works correctly)

WHAT SUCCESS LOOKS LIKE:
- Mobile Safari users can upload photos successfully
- Preview shows immediately after selection
- Upload completes within 5 seconds
- No change to desktop functionality
```

## AI Tool Catalog & Capabilities

**Your Mission**: Build and maintain tools that provide real-time visibility into frontend performance, behavior, and issues. Each tool should solve a specific observability gap and continuously improve based on findings.

### 🔧 Available Tools (tools/)

#### Core Monitoring Tools
- **`performance-monitor.js`** - Tracks Core Web Vitals, bundle size, load times
  - **When to use**: Before/after any performance changes, continuous monitoring
  - **Usage**: `node tools/performance-monitor.js watch` or integrate into build process
  - **Maintenance**: Update thresholds based on performance discoveries

- **`bundle-analyzer.js`** - Analyzes JavaScript bundle size and composition
  - **When to use**: After adding dependencies, before major releases
  - **Usage**: `npm run build && node tools/bundle-analyzer.js`
  - **Maintenance**: Add new file type analysis as the app grows

- **`error-tracker.js`** - Captures and categorizes frontend errors
  - **When to use**: During development, user testing, production monitoring
  - **Usage**: `node tools/error-tracker.js monitor` 
  - **Maintenance**: Update error patterns as you discover new failure modes

#### User Experience Tools
- **`mobile-tester.js`** - Simulates mobile conditions and interactions
  - **When to use**: After UI changes, before mobile releases
  - **Usage**: `node tools/mobile-tester.js test [url]`
  - **Maintenance**: Add new mobile scenarios based on user reports

- **`accessibility-checker.js`** - Validates WCAG compliance and keyboard navigation
  - **When to use**: After UI changes, during feature development
  - **Usage**: `node tools/accessibility-checker.js scan`
  - **Maintenance**: Update rules based on accessibility feedback

#### Development Workflow Tools
- **`component-analyzer.js`** - Analyzes component usage and optimization opportunities
  - **When to use**: During refactoring, before major component changes
  - **Usage**: `node tools/component-analyzer.js analyze src/components`
  - **Maintenance**: Add new analysis patterns as architecture evolves

### 🔄 Tool Development Lifecycle

#### When to Build New Tools
1. **Observability Gap**: You need insights that existing tools don't provide
2. **Repetitive Tasks**: You're manually checking the same things repeatedly
3. **Problem Prevention**: You want to catch issues before they affect users
4. **Performance Tracking**: You need to measure improvements over time

#### Tool Creation Process
```javascript
// Template for new tools
class NewFrontendTool {
  constructor(config) {
    this.projectContext = this.loadProjectContext();
    this.setupLogging();
    this.validateEnvironment();
  }
  
  async monitor() {
    // Core monitoring logic
    // Always include: measurement, logging, alerting
  }
  
  async analyze() {
    // Analysis and recommendations
    // Always include: trend analysis, actionable insights
  }
  
  generateReport() {
    // Human-readable outputs
    // Always include: current state, changes needed, next steps
  }
}
```

#### Tool Maintenance Principles
1. **Responsive to Findings**: Update tools based on what you discover
2. **Performance Conscious**: Tools shouldn't slow down development
3. **Self-Documenting**: Clear usage instructions and examples
4. **Integration Ready**: Easy to use in CI/CD and development workflows

### 📊 Tool Usage Patterns

#### Daily Development Workflow
```bash
# Morning routine - check system health
node tools/performance-monitor.js status
node tools/error-tracker.js overnight-summary

# Before making changes - baseline measurement
node tools/performance-monitor.js baseline

# After changes - impact measurement
node tools/performance-monitor.js compare
node tools/bundle-analyzer.js check
```

#### Pre-Release Validation
```bash
# Comprehensive testing suite
node tools/mobile-tester.js full-suite
node tools/accessibility-checker.js complete
node tools/performance-monitor.js release-check
node tools/component-analyzer.js optimization-report
```

#### Problem Investigation
```bash
# When issues are reported
node tools/error-tracker.js analyze [time-range]
node tools/performance-monitor.js investigate [specific-metric]
node tools/mobile-tester.js reproduce [user-scenario]
```

### 🧰 Knowledge Base (docs/)

#### KNOWLEDGE.md Structure
```markdown
## Tool Development History
- [Date] Created performance-monitor.js to track Core Web Vitals
- [Date] Enhanced bundle-analyzer.js with tree-shaking recommendations
- [Date] Built mobile-tester.js after iOS Safari issues

## Frontend Discoveries
- Performance optimizations that worked
- Browser-specific issues and solutions
- Component patterns that scale well

## Tool Effectiveness Metrics
- Problems caught before production: X%
- Average time to identify performance issues: X minutes
- Tools that provided actionable insights: [list]
```

## AI Agent Problem-Solving Methodology

### 1. Tool-First Investigation
- **Start monitoring immediately**: `node tools/performance-monitor.js watch` + `node tools/error-tracker.js monitor`
- **Gather baseline data**: Run relevant tools to understand current state
- **Reproduce with instrumentation**: Use tools to capture the issue happening
- **Check tool history**: Review logs for patterns or previous occurrences

### 2. Build Investigation Tools (if needed)
- **Observability gap?** Create custom monitoring for this specific issue
- **Repetitive testing?** Build automated reproduction scripts
- **Complex debugging?** Create specialized analysis tools
- **Example**: If mobile Safari issues, build `mobile-safari-debugger.js`

### 3. Tool-Guided Analysis
```javascript
// Example: Creating issue-specific tooling
class MobileSafariDebugger {
  async captureUserAgent() { /* ... */ }
  async simulateTouch() { /* ... */ }
  async measureInteractionDelay() { /* ... */ }
  async generateReport() { /* ... */ }
}
```

### 4. Implement with Continuous Validation
- **Before changes**: Use tools to establish performance baseline
- **During changes**: Monitor tools for real-time impact feedback
- **After changes**: Run full tool suite to validate improvements
- **Document in tools**: Update tool thresholds and patterns based on findings

### 5. Enhance Tooling Based on Learnings
- **Update existing tools**: Improve detection of similar issues
- **Create new tools**: Build monitoring for newly discovered problem areas
- **Share tool improvements**: Document new tool capabilities in KNOWLEDGE.md
- **Automate prevention**: Add checks to prevent this type of issue

### 6. Tool-Enhanced Documentation
Update `docs/KNOWLEDGE.md` with:
```markdown
## Issue: [Problem Name]
**Detection**: Which tools caught this (or should have)
**Investigation**: What new tools were needed
**Solution**: Technical fix implemented
**Prevention**: New monitoring/tools to prevent recurrence
**Tool Updates**: How existing tools were improved
```

## Common Tools and Commands

### Development
```bash
npm start                # Start development server
npm run build           # Build for production
npm test                # Run tests
npm run lint            # Check code quality
```

### Debugging
```bash
# Check bundle size
npm run build && npx bundlesize

# Analyze what's in the bundle
npx webpack-bundle-analyzer build/static/js/*.js

# Test on different devices (using browser dev tools)
# 1. Open Chrome DevTools
# 2. Click device icon (mobile view)
# 3. Test on different screen sizes
```

### Performance Checking
```bash
# Run Lighthouse audit
npx lighthouse http://localhost:3000 --view

# Check Core Web Vitals
# Use PageSpeed Insights: https://pagespeed.web.dev/
```

## Integration with Other AI Context Areas

### When You Need Backend Changes
Create an issue in the AI-PROJECT-OVERVIEW.md:
```markdown
## Frontend Request: [Brief Description]
**Need**: [What the backend needs to provide]
**Why**: [What frontend feature this enables]
**Format**: [Expected API response format]
**Timeline**: [When you need this to continue frontend work]
```

### When Admin Context Area Could Use Your Work
Document reusable components:
```markdown
## Shareable Component: [Component Name]
**What it does**: [Brief description]
**How to use**: [Basic usage example]
**Customizable**: [What can be changed]
**Good for**: [What admin use cases this helps]
```

## Important Reminders

### This is AI Context Only
- This file exists to help AI assistants understand your frontend
- Your actual code stays in your normal project structure
- Don't move your components, pages, or other code here
- This `ai-agents/frontend/` folder is separate from your development work

### Focus on Real Problems
- Include your actual issues, not hypothetical ones
- Update this file based on what actually helps with AI assistance
- Document real solutions that worked in your KNOWLEDGE.md

### Keep It Current
- Update this file when your tech stack changes
- Add new common problems as they emerge
- Remove outdated information that no longer applies
- Keep examples relevant to your current setup

---

**Remember**: This AI context area is about making your interactions with AI assistants more effective. Focus on providing the context that helps AI understand your specific frontend setup and constraints.
