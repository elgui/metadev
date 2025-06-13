# Code Cleanup and Improvement Prompt

Use this when your code works but could be better - cleaner, more maintainable, or more efficient.

## Basic Template

```
I'm working in [client-workspace/admin-workspace/backend-workspace].

Please read the AI-README.md file to understand our setup.

WHAT NEEDS IMPROVEMENT:
[Describe what code/functionality feels messy or hard to work with]

WHY IT'S A PROBLEM:
[What difficulties this causes - hard to debug, slow, confusing, etc.]

WHAT GOOD LOOKS LIKE:
[How you want the code to be - cleaner, faster, easier to understand]

CONSTRAINTS:
[What can't break, timeline, any limitations]

HELP ME:
1. Identify the main issues with the current approach
2. Suggest specific improvements 
3. Refactor it step by step without breaking functionality
4. Document the improved patterns

Start by reviewing the current code in our workspace.
```

## Examples That Work

### Frontend Code Cleanup
```
I'm working in client-workspace.

Please read the AI-README.md file to understand our React setup.

WHAT NEEDS IMPROVEMENT:
Our user profile component is 300+ lines long and handles too many different things

WHY IT'S A PROBLEM:
- Hard to find specific functionality when debugging
- Changes in one part break other parts unexpectedly
- New developers get confused by the complexity
- Testing is difficult because everything is mixed together

WHAT GOOD LOOKS LIKE:
- Smaller, focused components that do one thing well
- Easy to test individual pieces
- Clear separation between data handling and display
- Easy for new developers to understand

CONSTRAINTS:
- Can't break existing profile functionality
- Users shouldn't notice any changes
- Want to keep current styling and behavior
- Need to finish this cleanup over a few weeks

HELP ME:
1. Identify the main issues with the current approach
2. Suggest specific improvements
3. Refactor it step by step without breaking functionality
4. Document the improved patterns

Start by reviewing the current code in our workspace.
```

### Backend Code Improvement
```
I'm working in backend-workspace.

Please read the AI-README.md file to understand our Django API setup.

WHAT NEEDS IMPROVEMENT:
Our user authentication logic is scattered across multiple files and hard to follow

WHY IT'S A PROBLEM:
- Same authentication code copied in multiple places
- Hard to update authentication rules consistently
- Security vulnerabilities could hide in the complexity
- New team members struggle to understand how auth works

WHAT GOOD LOOKS LIKE:
- Authentication logic in one place that's easy to understand
- Clear documentation of security rules
- Easy to test and verify security is working
- Simple for developers to use correctly

CONSTRAINTS:
- Can't break existing user logins
- Must maintain current security level
- Can't change external authentication APIs we use
- Want to improve this gradually over time

HELP ME:
1. Identify the main issues with the current approach
2. Suggest specific improvements
3. Refactor it step by step without breaking functionality
4. Document the improved patterns

Start by reviewing the current code in our workspace.
```

### Admin Code Organization
```
I'm working in admin-workspace.

Please read the AI-README.md file to understand our admin panel setup.

WHAT NEEDS IMPROVEMENT:
Our admin dashboard has the same data fetching code repeated in 5 different places

WHY IT'S A PROBLEM:
- Changes to data format require updates in multiple places
- Inconsistent loading states and error handling
- Performance issues from redundant API calls
- Bug fixes don't get applied everywhere

WHAT GOOD LOOKS LIKE:
- Shared data management that all components can use
- Consistent loading and error states throughout admin panel
- Single source of truth for data fetching logic
- Easy to add new admin features

CONSTRAINTS:
- Can't break existing admin functionality
- Admins need the dashboard to stay reliable
- Want to improve this without major UI changes
- Need to maintain performance

HELP ME:
1. Identify the main issues with the current approach
2. Suggest specific improvements
3. Refactor it step by step without breaking functionality
4. Document the improved patterns

Start by reviewing the current code in our workspace.
```

## Types of Code Improvements

### Readability Improvements
- **Clear naming**: Variables and functions that explain what they do
- **Consistent patterns**: Same approach for similar problems
- **Good comments**: Explain why, not just what
- **Logical organization**: Related code grouped together

### Maintainability Improvements
- **Single responsibility**: Each function/component does one thing
- **Reduce duplication**: Shared code in reusable functions
- **Clear dependencies**: Obvious what each part needs
- **Easy testing**: Code that's simple to test

### Performance Improvements
- **Efficient algorithms**: Better approaches to common problems
- **Reduce unnecessary work**: Don't calculate things you don't need
- **Better caching**: Store results that are expensive to compute
- **Optimize hot paths**: Make the most-used code faster

### Security Improvements
- **Input validation**: Check all user input
- **Clear permissions**: Obvious who can access what
- **Secure defaults**: Safe behavior when things go wrong
- **Audit trails**: Log important actions

## Refactoring Safely

### 1. Understand Current Behavior
- What does the code actually do now?
- What are the edge cases and error conditions?
- What other parts of the system depend on this?
- Are there any existing tests?

### 2. Make Small Changes
- Change one thing at a time
- Test after each change
- Keep the application working throughout the process
- Don't change behavior and structure at the same time

### 3. Add Safety Nets
- Write tests for the current behavior before changing it
- Add monitoring to catch issues early
- Have a rollback plan if something goes wrong
- Get code review from another developer if possible

### 4. Validate Improvements
- Confirm the code still works the same way
- Verify that your improvements actually help
- Test edge cases and error conditions
- Check performance impact

## Common Refactoring Patterns

### Frontend Refactoring
- **Extract components**: Break large components into smaller ones
- **Custom hooks**: Share logic between React components
- **State management**: Move complex state to context or state management library
- **Utility functions**: Extract common calculations and transformations

### Backend Refactoring
- **Service classes**: Group related business logic
- **Middleware**: Handle cross-cutting concerns like authentication
- **Repository pattern**: Separate data access from business logic
- **Configuration**: Move settings to configuration files

### Admin Refactoring
- **Data services**: Centralize API calls and data management
- **Reusable components**: Share UI patterns across admin pages
- **Form helpers**: Standardize form handling and validation
- **Dashboard widgets**: Modular components for different data views

## Measuring Improvement

### Before Refactoring, Measure:
- How long does it take to understand the code?
- How long does it take to make typical changes?
- How often do changes break other functionality?
- How difficult is it to test the code?

### After Refactoring, Verify:
- Is the code easier to read and understand?
- Are changes less likely to introduce bugs?
- Is it easier to add new features?
- Is testing more straightforward?

### Concrete Metrics:
- Lines of code per function/component
- Number of responsibilities per function
- Amount of duplicated code
- Test coverage percentage
- Time to implement new features

## Documentation Updates

### Update Your KNOWLEDGE.md:
```markdown
## Refactoring: [What You Improved]
**Date**: YYYY-MM-DD
**Original Problem**: [What made the code difficult to work with]
**Refactoring Approach**: [How you improved it]
**Key Changes**: [Specific changes made]
**Benefits Achieved**: [How it's better now]
**Patterns Learned**: [Techniques that could apply elsewhere]
**Metrics**: [Before/after measurements if available]
```

### Create Coding Standards:
Document the improved patterns so future code follows the same approach:
- Naming conventions that worked well
- Code organization patterns that made things clearer
- Common utilities and helpers that reduce duplication
- Testing approaches that caught issues effectively

## Building Better Code Habits

### Questions to Ask During Development:
- Would another developer understand this code easily?
- Am I solving this problem the same way I solved similar problems?
- Is this function/component doing too many different things?
- Would this be easy to test?

### Regular Code Review Questions:
- What parts of our codebase are most painful to work with?
- Where do we spend the most time debugging?
- What types of bugs do we see repeatedly?
- Where is code duplication causing maintenance problems?

Consistent code improvement makes development faster and more enjoyable over time. Each cleanup makes the next feature easier to build.
