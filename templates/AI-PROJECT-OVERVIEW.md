# AI Project Overview (ai-agents/)

**Purpose**: This file helps AI assistants understand how all parts of your project connect. Save this as `ai-agents/AI-PROJECT-OVERVIEW.md` in your project.

**Important**: This is for AI agent coordination only. Your actual code stays in its normal project structure. This exists solely to help AI assistants understand your overall project when working across multiple areas.

## Project: [Your Project Name]

**Type**: [Web app / API / Dashboard / etc.]  
**Architecture**: Frontend + Admin + Backend  
**Current Focus**: [What you're primarily working on right now]

## Quick Project Summary

**What it does**: [Brief description of what users can do with your app]  
**Tech stack**: [Main technologies - React + Django, Vue + FastAPI, etc.]  
**Current status**: [Development / Testing / Production / etc.]  
**Team size**: [Solo / 2-3 people / larger team]

## AI Context Areas Status

### 🎨 Frontend (ai-agents/frontend/)
- **Technology**: [React 18, Vue 3, Angular, etc.]
- **Current work**: [What's being built or fixed]
- **Status**: [Working well / Has issues / Under development]
- **Performance**: [Page load times, any known issues]

### 🎛️ Admin Panel (ai-agents/admin/)
- **Technology**: [Admin framework or custom-built]
- **Current work**: [What admin features are being built/fixed]
- **Status**: [Working well / Has issues / Under development]  
- **Usage**: [How often admins use it, any pain points]

### ⚙️ Backend (ai-agents/backend/)
- **Technology**: [Django + PostgreSQL, FastAPI + MongoDB, etc.]
- **Current work**: [What APIs or features are being built/fixed]
- **Status**: [Working well / Has issues / Under development]
- **Performance**: [API response times, any bottlenecks]

## How Everything Connects

### Main Data Flow
1. **Users interact with**: Frontend (ai-agents/frontend/)
2. **Frontend talks to**: Backend APIs (ai-agents/backend/)
3. **Admins manage via**: Admin panel (ai-agents/admin/)
4. **Admin panel also uses**: Backend APIs

### Shared Systems
- **Database**: [PostgreSQL, MySQL, etc.] - managed by backend
- **Authentication**: [How users and admins log in] - managed by backend
- **File storage**: [Where images/files are stored] - managed by backend
- **External services**: [Payment, email, etc.] - integrated in backend

## Current Focus Areas

### High Priority
1. **[Task/Feature Name]**
   - **What**: [Brief description]
   - **AI Context Area**: [Which area is handling this]
   - **Why urgent**: [Business reason or user impact]
   - **Due**: [Timeline if any]

2. **[Task/Feature Name]**
   - **What**: [Brief description]
   - **AI Context Area**: [Which area is handling this]
   - **Why urgent**: [Business reason or user impact]
   - **Due**: [Timeline if any]

### Medium Priority
- [List medium priority items]

### Nice to Have Later
- [List future improvements]

## Performance Targets

### Current Performance
- **Frontend load time**: [X seconds] (goal: under 3s)
- **API response time**: [X ms] (goal: under 200ms)
- **Admin dashboard**: [X seconds] (goal: under 5s)

### Known Issues
- [List any current performance problems]
- [Note which AI context area owns each issue]

## When AI Context Areas Need to Coordinate

### Changes That Affect Multiple Areas

**Frontend + Backend coordination needed when**:
- Adding new API endpoints
- Changing existing API response formats
- Adding real-time features (WebSockets)
- Authentication flow changes

**Admin + Backend coordination needed when**:
- Adding new admin features
- Changing data models that affect admin views
- Adding new reporting capabilities
- Bulk operations or data exports

**Frontend + Admin coordination needed when**:
- Sharing UI components
- Consistent styling or user experience
- Similar functionality in both interfaces

### How to Request Help from Another AI Context Area

**Template for coordination requests**:

```markdown
## Cross-Area Request: [Brief Description]

**From**: [Your AI context area]
**To**: [Which area you need help from]  
**What you need**: [Specific request]
**Why**: [What you're trying to build/fix]
**Timeline**: [When you need this]
**Impact if delayed**: [What happens if this is delayed]

### Context
[Brief explanation of what you're working on]

### Specific Requirements
- [List specific requirements]
- [Include any constraints or limitations]

### Success Criteria
[How you'll know the request is complete]
```

## Project Health Check

### What's Working Well
- [List things that are currently stable and working]

### Current Pain Points
- [List things that are causing problems or frustration]

### Recent Wins
- [List recent improvements or successful features]

## Development Workflow

### For New Features
1. **Plan**: Decide which AI context area(s) are involved
2. **Design**: Figure out the user experience and technical approach
3. **Coordinate**: If multiple areas, plan the integration
4. **Build**: Implement in the appropriate area(s)
5. **Test**: Verify everything works together
6. **Deploy**: Release to users

### For Bug Fixes
1. **Identify**: Which AI context area owns the problematic code
2. **Investigate**: Use the area's tools and knowledge base
3. **Fix**: Implement solution in the appropriate area
4. **Validate**: Ensure fix works and doesn't break anything else
5. **Document**: Update the area's KNOWLEDGE.md

### For Performance Issues
1. **Measure**: Get concrete numbers about the slowness
2. **Locate**: Identify which area/layer is the bottleneck
3. **Optimize**: Apply performance improvements in that area
4. **Verify**: Confirm measurable improvement
5. **Monitor**: Keep an eye on performance going forward

## Quick Commands

### Start Development Environment
```bash
# Frontend
cd [your-project] && npm start

# Backend  
cd [your-project] && python manage.py runserver  # or equivalent

# Admin (if separate)
cd [your-project] && [admin start command]
```

### Check System Health
```bash
# Test API endpoints
curl http://localhost:8000/api/health/

# Check frontend builds
cd [your-project] && npm run build

# Run tests
cd [your-project] && [test command]
```

## Knowledge Sharing

### Key Patterns We've Learned
1. **[Pattern Name]**: [Brief description] - discovered in [AI context area]
2. **[Pattern Name]**: [Brief description] - discovered in [AI context area]

### Reusable Solutions
1. **[Solution Name]**: [What it solves] - from [area], can be used in [other areas]
2. **[Solution Name]**: [What it solves] - from [area], can be used in [other areas]

### Things to Avoid
1. **[Anti-pattern]**: [Why it causes problems] - learned from [experience]
2. **[Anti-pattern]**: [Why it causes problems] - learned from [experience]

## Getting Help

### When You Need Cross-Area Help
1. **Update this file** with your coordination request
2. **Be specific** about what you need and when
3. **Provide context** about what you're trying to accomplish
4. **Include success criteria** so the other area knows when they're done

### When Working Solo
- Use the individual AI context files to give AI assistants proper context
- Document discoveries in the area KNOWLEDGE.md files
- Update this file when you complete major work that affects multiple areas

### When Working with a Team
- Use this file to coordinate who's working on what
- Update area status when you start/finish major work
- Share patterns and solutions across areas

## Important Reminders

### This is AI Coordination Only
- This file exists to help AI assistants understand your overall project
- Your actual code stays in its normal project structure
- The ai-agents/ folders are separate from your development work
- This is for AI context and coordination, not project management

### Focus on Real Information
- Include your actual project details, not template examples
- Update this file based on what actually helps with AI assistance
- Keep information current as your project evolves

### Keep It Simple
- Don't overcomplicate the coordination
- Focus on information that helps AI assistants work across areas
- Update when there are real changes that affect multiple areas

---

**Last Updated**: [Date]  
**Next Review**: [When you plan to update this file]  
**Overall Status**: [Green: everything good / Yellow: some issues / Red: major problems]

**Remember**: This file helps AI assistants understand how different parts of your project connect when you need help that spans multiple areas (frontend + backend, admin + backend, etc.).
