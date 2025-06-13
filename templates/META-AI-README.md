# Project Overview (META-AI-README)

## Project: [Your Project Name]

**Type**: [Web app / API / Dashboard / etc.]  
**Architecture**: Client + Admin + Backend  
**Current Focus**: [What you're primarily working on right now]

## Quick Project Summary

**What it does**: [Brief description of what users can do with your app]  
**Tech stack**: [Main technologies - React + Django, Vue + FastAPI, etc.]  
**Current status**: [Development / Testing / Production / etc.]  
**Team size**: [Solo / 2-3 people / larger team]

## Workspace Status

### 🎨 Frontend (client-workspace/)
- **Technology**: [React 18, Vue 3, Angular, etc.]
- **Current work**: [What's being built or fixed]
- **Status**: [Working well / Has issues / Under development]
- **Performance**: [Page load times, any known issues]

### 🎛️ Admin Panel (admin-workspace/)
- **Technology**: [Admin framework or custom-built]
- **Current work**: [What admin features are being built/fixed]
- **Status**: [Working well / Has issues / Under development]  
- **Usage**: [How often admins use it, any pain points]

### ⚙️ Backend (backend-workspace/)
- **Technology**: [Django + PostgreSQL, FastAPI + MongoDB, etc.]
- **Current work**: [What APIs or features are being built/fixed]
- **Status**: [Working well / Has issues / Under development]
- **Performance**: [API response times, any bottlenecks]

## How Everything Connects

### Main Data Flow
1. **Users interact with**: Frontend (client-workspace)
2. **Frontend talks to**: Backend APIs (backend-workspace)
3. **Admins manage via**: Admin panel (admin-workspace)
4. **Admin panel also uses**: Backend APIs

### Shared Systems
- **Database**: [PostgreSQL, MySQL, etc.] - managed by backend-workspace
- **Authentication**: [How users and admins log in] - managed by backend-workspace
- **File storage**: [Where images/files are stored] - managed by backend-workspace
- **External services**: [Payment, email, etc.] - integrated in backend-workspace

## Current Focus Areas

### High Priority
1. **[Task/Feature Name]**
   - **What**: [Brief description]
   - **Workspace**: [Which workspace is handling this]
   - **Why urgent**: [Business reason or user impact]
   - **Due**: [Timeline if any]

2. **[Task/Feature Name]**
   - **What**: [Brief description]
   - **Workspace**: [Which workspace is handling this]
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
- [Note which workspace owns each issue]

## When Workspaces Need to Coordinate

### Changes That Affect Multiple Workspaces

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

### How to Request Help from Another Workspace

**Template for coordination requests**:

```markdown
## Cross-Workspace Request: [Brief Description]

**From**: [Your workspace]
**To**: [Which workspace you need help from]  
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
1. **Plan**: Decide which workspace(s) are involved
2. **Design**: Figure out the user experience and technical approach
3. **Coordinate**: If multiple workspaces, plan the integration
4. **Build**: Implement in the appropriate workspace(s)
5. **Test**: Verify everything works together
6. **Deploy**: Release to users

### For Bug Fixes
1. **Identify**: Which workspace owns the problematic code
2. **Investigate**: Use the workspace's tools and knowledge base
3. **Fix**: Implement solution in the appropriate workspace
4. **Validate**: Ensure fix works and doesn't break anything else
5. **Document**: Update the workspace's KNOWLEDGE.md

### For Performance Issues
1. **Measure**: Get concrete numbers about the slowness
2. **Locate**: Identify which workspace/layer is the bottleneck
3. **Optimize**: Apply performance improvements in that workspace
4. **Verify**: Confirm measurable improvement
5. **Monitor**: Keep an eye on performance going forward

## Quick Commands

### Start Development Environment
```bash
# Frontend
cd client-workspace && npm start

# Backend  
cd backend-workspace && python manage.py runserver  # or equivalent

# Admin (if separate)
cd admin-workspace && npm start  # or equivalent
```

### Check System Health
```bash
# Test API endpoints
curl http://localhost:8000/api/health/

# Check frontend builds
cd client-workspace && npm run build

# Run tests
cd backend-workspace && python manage.py test
```

## Knowledge Sharing

### Key Patterns We've Learned
1. **[Pattern Name]**: [Brief description] - discovered in [workspace]
2. **[Pattern Name]**: [Brief description] - discovered in [workspace]

### Reusable Solutions
1. **[Solution Name]**: [What it solves] - from [workspace], can be used in [other workspaces]
2. **[Solution Name]**: [What it solves] - from [workspace], can be used in [other workspaces]

### Things to Avoid
1. **[Anti-pattern]**: [Why it causes problems] - learned from [experience]
2. **[Anti-pattern]**: [Why it causes problems] - learned from [experience]

## Getting Help

### When You Need Cross-Workspace Help
1. **Update this file** with your coordination request
2. **Be specific** about what you need and when
3. **Provide context** about what you're trying to accomplish
4. **Include success criteria** so the other workspace knows when they're done

### When Working Solo
- Use the individual workspace AI-README files to give AI assistants proper context
- Document discoveries in the workspace KNOWLEDGE.md files
- Update this file when you complete major work that affects multiple workspaces

### When Working with a Team
- Use this file to coordinate who's working on what
- Update workspace status when you start/finish major work
- Share patterns and solutions across workspaces

---

**Last Updated**: [Date]  
**Next Review**: [When you plan to update this file]  
**Overall Status**: [Green: everything good / Yellow: some issues / Red: major problems]

**Remember**: This file helps coordinate work across different parts of your project. Keep it updated so AI assistants and team members understand how everything fits together.
