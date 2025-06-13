# Frontend Workspace Guide (client-workspace)

## What This Workspace Is For

This workspace helps AI assistants understand your **frontend/client-side code** - the React, Vue, Angular, or vanilla JavaScript that users interact with in their browsers.

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

## Project Structure

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

### When Asking for Help
1. **Read this file first** so you understand our frontend setup
2. **Be specific about the problem** - which browsers, which users, what exactly happens
3. **Include what you've already tried** - saves time and shows what doesn't work
4. **Describe what success looks like** - how we'll know when it's fixed

### Example of a Good Request
```
I'm working on the user profile page in our React app. 

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

## Workspace Files

### docs/KNOWLEDGE.md
Where we document:
- Solutions to problems we've solved before
- Performance optimizations that worked
- Browser-specific issues and workarounds
- Code patterns that work well for our project

### tests/ (if available)
- Automated tests for critical user flows
- Performance tests for key pages
- Accessibility validation scripts

### tools/ (if available)
- Scripts for measuring performance
- Development utilities
- Build and deployment helpers

## Getting Started on a Problem

### 1. Understand the Current State
- What exactly is happening vs. what should happen?
- Can you reproduce the problem consistently?
- Which browsers/devices are affected?
- Are there any error messages in the browser console?

### 2. Check Our Knowledge Base
- Look in `docs/KNOWLEDGE.md` for similar issues
- Check if we've solved this type of problem before
- See what patterns or solutions have worked

### 3. Plan the Approach
- What's the smallest change that could fix this?
- How will you test the fix?
- What could this change break?
- How will you measure success?

### 4. Implement and Validate
- Make the change
- Test thoroughly (including edge cases)
- Check that existing functionality still works
- Measure the improvement if it's performance-related

### 5. Document the Solution
- Update `docs/KNOWLEDGE.md` with what you learned
- Include the problem, solution, and why it worked
- Note any patterns that could apply to future issues

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

# Test on different devices (if using browser dev tools)
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

## Integration with Other Workspaces

### When You Need Backend Changes
Create an issue in the META-AI-README.md:
```markdown
## Frontend Request: [Brief Description]
**Need**: [What the backend needs to provide]
**Why**: [What frontend feature this enables]
**Format**: [Expected API response format]
**Timeline**: [When you need this to continue frontend work]
```

### When Admin Workspace Could Use Your Work
Document reusable components:
```markdown
## Shareable Component: [Component Name]
**What it does**: [Brief description]
**How to use**: [Basic usage example]
**Customizable**: [What can be changed]
**Good for**: [What admin use cases this helps]
```

---

**Remember**: This workspace is about making the user-facing parts of the application work well. Focus on user experience, performance, and reliability. Every change should make the app better for actual users.
