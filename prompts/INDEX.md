# Prompt Template Index

Organized, tested prompt templates for effective AI collaboration in your workspaces.

## How to Use These Templates

1. **Choose the template** that matches your situation
2. **Copy the basic template** and fill in your specific details
3. **Customize for your project** - change examples to match your tech stack
4. **Include workspace context** - always mention your AI-README.md file
5. **Be specific** - the more context you provide, the better help you'll get

## 🐛 Debugging Templates

When something isn't working and you need help figuring out why.

### [Simple Problem Solving](debugging/simple-problem-solving.md)
**Use when**: Something is broken and you're not sure why  
**Good for**: Frontend bugs, backend errors, admin panel issues  
**Junior friendly**: ✅ Clear examples and step-by-step guidance

### [Performance Problems](debugging/performance-problems.md)
**Use when**: Something is too slow  
**Good for**: Slow pages, slow APIs, slow admin dashboards  
**Junior friendly**: ✅ Practical measurement techniques included

### [Frontend & Backend Issues](debugging/frontend-backend-issues.md)
**Use when**: Need comprehensive debugging approach  
**Good for**: Complex issues affecting multiple parts of the system  
**Junior friendly**: ⚠️ More advanced, but includes good examples

## ⚡ Feature Development Templates

When you need to build new functionality.

### [Building New Features](feature-development/building-new-features.md)
**Use when**: Adding new user-facing functionality  
**Good for**: UI features, API endpoints, admin tools  
**Junior friendly**: ✅ Breaks development into manageable steps

### [User Interface Features](feature-development/user-interface.md)
**Use when**: Building complex frontend features  
**Good for**: Multi-step features, cross-platform features  
**Junior friendly**: ⚠️ More comprehensive, good for bigger projects

## 🔧 Optimization Templates

When your code works but could be better.

### [Code Quality Improvement](optimization/code-quality.md)
**Use when**: Code is messy, hard to understand, or hard to maintain  
**Good for**: Refactoring, cleanup, organization  
**Junior friendly**: ✅ Practical examples of what "better code" looks like

### [Performance Tuning](optimization/performance-tuning.md) *Coming Soon*
**Use when**: Need to make specific parts of your system faster  
**Good for**: Database optimization, algorithm improvements  

### [Security Hardening](optimization/security-hardening.md) *Coming Soon*
**Use when**: Need to improve security without breaking functionality  
**Good for**: Authentication, input validation, access controls

## 🔄 Maintenance Templates

When you need to keep your system healthy and up-to-date.

### [Dependency Updates](maintenance/dependency-updates.md)
**Use when**: Need to update libraries, frameworks, or handle security patches  
**Good for**: Node.js updates, Python package updates, security fixes  
**Junior friendly**: ✅ Safe update strategies with concrete examples

### [Database Migrations](maintenance/database-migrations.md) *Coming Soon*
**Use when**: Need to change database structure safely  
**Good for**: Adding columns, changing relationships, data cleanup

### [Documentation Updates](maintenance/documentation-updates.md) *Coming Soon*
**Use when**: Need to keep project documentation current  
**Good for**: API docs, README updates, team onboarding guides

## Quick Reference by Workspace

### Frontend Developers (client-workspace)
Most useful templates:
- [Simple Problem Solving](debugging/simple-problem-solving.md) - For React/Vue/Angular issues
- [Performance Problems](debugging/performance-problems.md) - For slow pages and UI
- [Building New Features](feature-development/building-new-features.md) - For new UI functionality
- [Code Quality](optimization/code-quality.md) - For component cleanup

### Backend Developers (backend-workspace)
Most useful templates:
- [Simple Problem Solving](debugging/simple-problem-solving.md) - For API and database issues
- [Performance Problems](debugging/performance-problems.md) - For slow endpoints
- [Building New Features](feature-development/building-new-features.md) - For new API functionality
- [Dependency Updates](maintenance/dependency-updates.md) - For security and framework updates

### Admin Panel Developers (admin-workspace)
Most useful templates:
- [Simple Problem Solving](debugging/simple-problem-solving.md) - For dashboard issues
- [Performance Problems](debugging/performance-problems.md) - For slow data loading
- [Building New Features](feature-development/building-new-features.md) - For new admin tools
- [Code Quality](optimization/code-quality.md) - For dashboard code cleanup

## Tips for Better Results

### Make Your Prompts Specific
❌ "My app is broken"  
✅ "Users can't log in on mobile Safari - the login button doesn't respond when tapped"

### Include What You've Tried
❌ "Fix this"  
✅ "I tried refreshing the page and checking the console for errors, but no errors appear"

### Set Clear Success Criteria
❌ "Make it better"  
✅ "Login should work consistently on mobile Safari and complete within 3 seconds"

### Use Your Workspace Context
❌ "Help me with React"  
✅ "I'm working in client-workspace. Read the AI-README.md to understand our React setup."

## Contributing New Templates

Found a prompt pattern that works really well? Share it!

### Template Naming Convention
- `[category]/[specific-use-case].md`
- Use clear, descriptive names
- Include the technology when relevant

### What Makes a Good Template
- **Proven in practice** - You've used it successfully
- **Specific enough** - Addresses a particular problem type  
- **General enough** - Works for multiple projects
- **Junior friendly** - Clear examples and explanations
- **Includes success criteria** - How to know it's working

### Submission Format
```markdown
## Template Success: [Brief Description]

**Used On**: [Type of project/tech stack]
**Problem Type**: [What kind of issue this solves]
**AI Response Quality**: [How well the AI understood and helped]
**Time Saved**: [Compared to figuring it out yourself]
**Reusability**: [How this could help other developers]

### The Template
[Include your actual prompt template]

### Real Example
[Show a real example of using it successfully]
```

Submit new templates by creating a pull request with your template file and a brief explanation of when and how you used it successfully.

---

**Remember**: These templates work best when combined with well-organized workspaces that give your AI assistant the context it needs to understand your specific project setup.
