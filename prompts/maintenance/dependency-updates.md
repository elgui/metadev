# Dependency Updates and Maintenance Prompt

Use this when you need to update libraries, frameworks, or handle security updates safely.

## Basic Template

```
I'm working in [client-workspace/admin-workspace/backend-workspace].

Please read the AI-README.md file to understand our setup.

WHAT NEEDS UPDATING:
[Which libraries, frameworks, or dependencies need updates]

WHY UPDATE NOW:
[Security patches, bug fixes, new features, compatibility issues]

CURRENT SITUATION:
[What versions you're using now, any known issues]

CONCERNS:
[What you're worried might break, compatibility issues]

HELP ME:
1. Plan a safe update strategy
2. Update dependencies step by step
3. Test thoroughly after each update
4. Document any breaking changes

Start by reviewing our current dependency setup in the workspace.
```

## Examples That Work

### Frontend Dependency Updates
```
I'm working in client-workspace.

Please read the AI-README.md file to understand our React setup.

WHAT NEEDS UPDATING:
React and related packages - we're several versions behind

WHY UPDATE NOW:
- Security vulnerabilities in current React version
- Want access to new React features
- Some third-party libraries require newer React

CURRENT SITUATION:
- Using React 17.0.2, latest is 18.2.0
- Have about 15 React-related packages that might need updates
- App works fine currently but getting security warnings

CONCERNS:
- React 18 has some breaking changes
- Don't want to break existing user interface
- Some older components might not be compatible
- Timeline is flexible but want to finish this month

HELP ME:
1. Plan a safe update strategy
2. Update dependencies step by step
3. Test thoroughly after each update
4. Document any breaking changes

Start by reviewing our current dependency setup in the workspace.
```

### Backend Dependency Updates
```
I'm working in backend-workspace.

Please read the AI-README.md file to understand our Django API setup.

WHAT NEEDS UPDATING:
Several Python packages have security updates available

WHY UPDATE NOW:
- Got security alerts from GitHub about vulnerable packages
- Django security update available
- Some packages are reaching end-of-life

CURRENT SITUATION:
- Using Django 4.1, latest is 4.2
- Have security alerts for 3 different packages
- API is working fine but security is important

CONCERNS:
- Don't want to break existing API endpoints
- Some packages might have breaking changes
- Database migrations might be needed
- Can't have downtime during business hours

HELP ME:
1. Plan a safe update strategy
2. Update dependencies step by step
3. Test thoroughly after each update
4. Document any breaking changes

Start by reviewing our current dependency setup in the workspace.
```

### Admin Panel Updates
```
I'm working in admin-workspace.

Please read the AI-README.md file to understand our admin panel setup.

WHAT NEEDS UPDATING:
Chart.js and dashboard libraries are outdated

WHY UPDATE NOW:
- Want new chart types available in latest version
- Current version has performance issues with large datasets
- Better mobile support in newer versions

CURRENT SITUATION:
- Using Chart.js 3.8, latest is 4.2
- Admin dashboard works but charts are slow with lots of data
- Some admin users complain about mobile experience

CONCERNS:
- Chart configurations might need to change
- Don't want to break existing admin workflows
- Need to retrain admins if interface changes significantly
- Want to finish before quarterly admin training

HELP ME:
1. Plan a safe update strategy
2. Update dependencies step by step
3. Test thoroughly after each update
4. Document any breaking changes

Start by reviewing our current dependency setup in the workspace.
```

## Safe Update Strategy

### 1. Assess Current State
- **List all dependencies**: What you have and what versions
- **Check compatibility**: Which updates might conflict
- **Read changelogs**: What changed between versions
- **Identify breaking changes**: What might stop working

### 2. Plan Update Order
- **Security fixes first**: Address vulnerabilities immediately
- **Framework updates**: Core dependencies before peripheral ones
- **Major versions carefully**: Test thoroughly, plan for breaking changes
- **One at a time**: Don't update everything simultaneously

### 3. Create Safety Net
- **Full backup**: Code and database before major updates
- **Comprehensive tests**: Automated tests for critical functionality
- **Staging environment**: Test updates before production
- **Rollback plan**: How to undo changes if needed

### 4. Update Process
- **Read update notes**: Understand what's changing
- **Update package files**: Package.json, requirements.txt, etc.
- **Install dependencies**: Let package manager handle downloads
- **Run tests**: Verify nothing broke
- **Manual testing**: Check features that don't have automated tests

## Common Update Scenarios

### Security Updates (High Priority)
```bash
# Check for security vulnerabilities
npm audit                    # For Node.js projects
pip-audit                   # For Python projects
bundle audit                # For Ruby projects

# Fix automatically when possible
npm audit fix               # Auto-fix compatible issues
npm audit fix --force       # Force fixes (be careful)
```

### Minor Version Updates (Medium Risk)
- Usually safe with same major version
- Check changelog for any notable changes
- Test key functionality after update
- Monitor for a few days after deployment

### Major Version Updates (High Risk)
- Always read migration guides
- Expect some breaking changes
- Plan dedicated time for testing
- Consider updating in stages

### Framework Updates (Very High Risk)
- React, Django, Angular, etc.
- Often require code changes
- May need to update related packages
- Thorough testing across all features

## Testing After Updates

### Automated Testing
```bash
# Run your existing test suite
npm test                    # Frontend tests
python manage.py test       # Django tests
pytest                     # Python tests

# Check for new warnings or errors
npm run build              # Build process still works
npm start                  # Application starts correctly
```

### Manual Testing Checklist
- **Core user flows**: Login, main features, critical paths
- **Admin functionality**: Key admin operations
- **Integration points**: External APIs, database operations
- **Performance**: No significant slowdowns
- **Browser compatibility**: Same browser support as before

### Monitoring After Deployment
- **Error tracking**: Watch for new errors in production
- **Performance monitoring**: Check for performance regressions
- **User feedback**: Any user reports of issues
- **Analytics**: Usage patterns haven't changed negatively

## Handling Breaking Changes

### Code Changes Needed
- **API changes**: Function signatures, parameter names
- **Configuration changes**: Config file formats, environment variables
- **Deprecated features**: Replace with recommended alternatives
- **New requirements**: Additional setup or configuration

### Documentation Updates
- **README updates**: New installation or setup steps
- **Code comments**: Update examples that use old APIs
- **Deployment notes**: Any production update requirements
- **Team communication**: Let everyone know about changes

### Gradual Migration Strategy
- **Feature flags**: Enable new behavior gradually
- **Parallel implementation**: Run old and new code side by side
- **User migration**: Move users to new features over time
- **Fallback options**: Keep old functionality available temporarily

## Documentation Updates

### Update Your KNOWLEDGE.md:
```markdown
## Dependency Update: [What You Updated]
**Date**: YYYY-MM-DD
**Packages Updated**: [List with old → new versions]
**Reason for Update**: [Security, features, compatibility]
**Breaking Changes**: [What changed in the code]
**Testing Done**: [How you verified it works]
**Issues Found**: [Any problems and how you solved them]
**Future Considerations**: [What to watch for, next updates needed]
```

### Update Your AI-README.md:
- Change version numbers in setup instructions
- Update any code examples that changed
- Note any new development workflow requirements
- Add any new testing or monitoring steps

## Staying Current

### Regular Maintenance Schedule
- **Weekly**: Check for security updates
- **Monthly**: Review minor version updates
- **Quarterly**: Plan major version updates
- **Annually**: Review overall dependency strategy

### Monitoring Tools
- **GitHub Dependabot**: Automated dependency update PRs
- **npm audit / pip-audit**: Security vulnerability scanning
- **Version monitoring services**: Get notified of new releases
- **Community resources**: Release notes, migration guides

### Team Practices
- **Update documentation**: Keep dependency lists current
- **Share knowledge**: Document upgrade experiences
- **Plan together**: Coordinate major updates across team
- **Learn from others**: Follow best practices from community

Regular dependency maintenance prevents security issues and keeps your development environment healthy and productive.
