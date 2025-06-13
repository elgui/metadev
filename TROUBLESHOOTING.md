# Troubleshooting Guide

Common issues when setting up and using AI workspaces, with practical solutions.

## Setup Issues

### "AI Assistant Isn't Reading My AI-README.md"

**Symptoms**: AI gives generic advice that doesn't match your tech stack or setup.

**Solutions**:

1. **Be more explicit in your request**:
   ```
   Before helping me, please read the AI-README.md file in this workspace to understand our project setup. After reading it, confirm you understand we're using [your tech stack] and then help me with [your problem].
   ```

2. **Check your AI-README.md format**:
   - Make sure headings are clear (use `##` for main sections)
   - Include specific technology names (React 18, Django 4.2, etc.)
   - List your actual problems, not template examples

3. **Test with a simple request first**:
   ```
   I'm working in client-workspace. Please read the AI-README.md file and tell me what framework we're using and what our main performance target is.
   ```

### "Not Sure What to Put in AI-README.md"

**Start minimal**:
```markdown
# Frontend Workspace Guide (client-workspace)

## Your Project Setup
**Framework**: React 18
**Main Technologies**: TypeScript, Tailwind CSS
**Current Status**: Working but slow on mobile

## Common Problems We Face
- Dashboard takes 7 seconds to load on mobile
- Users report login button doesn't work on iPhone

## What Good Success Looks Like
- Pages load under 3 seconds on mobile
- All features work on iOS Safari
```

**Add more as you use it**:
- After solving problems, add them to "Common Problems"
- Update with specific performance numbers you discover
- Include patterns that work well for your project

### "This Feels Like Too Much Work for One Problem"

**Start small**:
- Create just one workspace (the one you use most)
- Copy the template and change only the obvious parts
- Try it on one real problem
- Expand if it helps

**Remember the payoff**:
- First conversation: 5 minutes to set up + solve problem
- Later conversations: Just solve the problem (context already exists)
- Knowledge builds up over time instead of starting from scratch

## AI Assistant Issues

### "AI Suggests Technologies We're Not Using"

**Problem**: AI suggests "try using Redux" when you're using Vue, or "add this Django middleware" when you're using FastAPI.

**Solutions**:

1. **Be more specific about your stack**:
   ```
   I'm working in backend-workspace. We're using FastAPI with SQLAlchemy and PostgreSQL (NOT Django). Read the AI-README.md for our specific setup.
   ```

2. **Add constraints to your request**:
   ```
   CONSTRAINTS:
   - Must work with our existing FastAPI setup
   - Cannot add new major dependencies
   - Must be compatible with SQLAlchemy ORM
   ```

3. **Correct the AI when it goes off-track**:
   ```
   That suggestion is for Django, but we're using FastAPI. Please read our AI-README.md again and suggest a FastAPI-specific solution.
   ```

### "AI Wants to Rewrite Everything"

**Problem**: AI suggests rebuilding large parts of your application instead of fixing the specific issue.

**Solutions**:

1. **Emphasize minimal changes**:
   ```
   HELP ME:
   1. Find the smallest possible change to fix this
   2. Keep all existing functionality working
   3. Don't suggest rewriting components unless absolutely necessary
   ```

2. **Ask for incremental steps**:
   ```
   Break this down into the smallest possible steps. I want to test after each change to make sure nothing breaks.
   ```

3. **Set clear boundaries**:
   ```
   CONSTRAINTS:
   - Cannot change the API response format (frontend depends on it)
   - Must keep the existing component structure
   - Changes should be reversible if they don't work
   ```

### "AI Isn't Asking About My Specific Constraints"

**Problem**: AI gives solutions that won't work in your environment.

**Include constraints upfront**:
```
CONSTRAINTS:
- Timeline: Need to finish this week
- Technology: Must work with Python 3.8 (can't upgrade)
- Performance: Cannot slow down existing features
- Users: Solution must work for 1000+ concurrent users
- Team: Only one developer available (me)
```

## Performance Issues

### "AI Suggestions Don't Actually Improve Performance"

**Problem**: AI recommends optimizations that don't help with your specific bottleneck.

**Solutions**:

1. **Measure first, then ask for help**:
   ```
   CURRENT PERFORMANCE:
   - Page load time: 7.2 seconds (measured with Chrome DevTools)
   - Largest Contentful Paint: 5.8 seconds
   - Main JavaScript bundle: 850KB
   - Time to Interactive: 9.1 seconds
   
   TARGET: Load time under 3 seconds
   ```

2. **Identify the actual bottleneck**:
   ```bash
   # Use tools to find the real problem
   npm run build && npx bundlesize              # Check bundle size
   npx lighthouse http://localhost:3000 --view  # Get performance report
   ```

3. **Test one change at a time**:
   ```
   Please suggest ONE specific optimization to try first. After I implement and test it, I'll ask for the next step.
   ```

### "Performance Improvements Break Other Things"

**Prevention strategies**:

1. **Test incrementally**:
   ```
   HELP ME:
   1. Implement this optimization in the smallest possible way
   2. Show me how to test that existing functionality still works
   3. Give me a way to undo this change if it causes problems
   ```

2. **Ask for testing guidance**:
   ```
   After making this change, what should I test to make sure I didn't break anything? List specific things to check.
   ```

3. **Document what you're changing**:
   ```
   Before I make this change, help me document:
   - What the code currently does
   - What the change will do differently
   - How to verify it's working correctly
   ```

## Knowledge Management Issues

### "KNOWLEDGE.md Getting Too Long and Disorganized"

**Organization strategies**:

```markdown
# Frontend Workspace Knowledge

## Quick Reference
[Most-used solutions and patterns]

## Performance Optimizations
### Bundle Size Reduction
### Loading Speed Improvements
### Memory Leak Fixes

## Bug Fixes
### Mobile Safari Issues
### Cross-browser Compatibility
### API Integration Problems

## Patterns That Work
### Component Architecture
### State Management
### Error Handling

## Things to Avoid
[Anti-patterns and lessons learned]
```

### "Hard to Find Previous Solutions"

**Better documentation**:

```markdown
## Mobile Performance Fix (2024-03-15)
**Problem**: Dashboard slow on mobile (7s load time)
**Root Cause**: Large JavaScript bundle + unoptimized images
**Solution**: Code splitting + WebP images + lazy loading
**Result**: 7s → 2.8s load time
**Keywords**: mobile, performance, bundle-size, images
**Reusable for**: Any page with large initial payload
```

**Use clear keywords** so you can search the file later.

## Team Coordination Issues

### "Multiple People Working on Same Workspace"

**Strategies**:

1. **Use clear mission statements**:
   ```markdown
   ## Current Work (client-workspace)
   **Active Mission**: Fixing mobile performance issues
   **Developer**: Sarah
   **Timeline**: March 15-20
   **Status**: Testing code splitting implementation
   ```

2. **Document work-in-progress**:
   ```markdown
   ## Work in Progress
   - Mobile optimization (Sarah, 80% complete)
   - New user dashboard (Mike, planning phase)
   - API integration fixes (on hold, waiting for backend)
   ```

### "Workspaces Getting Out of Sync"

**Coordination practices**:

1. **Update META-AI-README.md regularly**:
   ```markdown
   ## Recent Changes
   **Frontend**: Fixed mobile performance, dashboard now loads in 2.8s
   **Backend**: Added pagination to user API, supports 1000+ users
   **Admin**: Added bulk user operations, 5x faster than before
   ```

2. **Cross-reference discoveries**:
   ```markdown
   ## Cross-Workspace Impact
   The mobile performance fix in client-workspace reduced API calls by 60%. 
   Backend-workspace should expect lower API traffic during peak hours.
   ```

## Getting Better Results

### "AI Gives Good Advice But I Want Even Better Help"

**Level up your requests**:

1. **Include success metrics upfront**:
   ```
   SUCCESS METRICS:
   - Page load time: < 3 seconds (currently 7s)
   - User satisfaction: Zero complaints about slow loading
   - Development time: Fix should take < 1 week
   - Maintenance: Solution should be maintainable by junior developers
   ```

2. **Describe the business impact**:
   ```
   BUSINESS CONTEXT:
   This slow loading is causing 15% of mobile users to abandon the app. 
   Even a 2-second improvement could significantly impact user retention.
   ```

3. **Ask for learning opportunities**:
   ```
   HELP ME LEARN:
   1. Fix this specific problem
   2. Understand why this type of problem happens
   3. Prevent similar issues in the future
   4. Apply this technique to other parts of the app
   ```

### "Want to Contribute Back to the Community"

**Share your successes**:

```markdown
## Workspace Success: Mobile Performance Fix

**Project Type**: React SPA with Django API
**Problem**: Dashboard took 7+ seconds to load on mobile
**AI Approach**: Used client-workspace context to understand React setup and constraints
**Solution**: Implemented code splitting, image optimization, and lazy loading
**Result**: 7s → 2.8s load time, zero user complaints since fix
**Time**: Solved in 3 hours vs typical 2-3 days for similar issues

### What Made This Work
- AI-README.md had specific performance targets and constraints
- Included real performance measurements in the request
- Asked for step-by-step approach with testing after each change

### Reusable Pattern
The code splitting + lazy loading pattern works for any React app with large initial bundles.
```

## Still Stuck?

### Check the Examples
- Look at [examples/todo-app-example.md](examples/todo-app-example.md) for real success stories
- See how problems were described and solved

### Start Over with Basics
- Use [GETTING_STARTED.md](GETTING_STARTED.md) to set up one simple workspace
- Try with a small, well-defined problem first
- Build up complexity gradually

### Share Your Experience
- Document what's not working in a GitHub issue
- Include what you tried and what results you got
- Help improve the templates and documentation

---

**Remember**: The workspace approach is about giving AI assistants better context, not perfect organization. Start simple, improve gradually, and focus on what actually helps you solve problems faster.
