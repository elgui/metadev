# Building New Features Prompt

Use this when you need to add new functionality to your application.

## Basic Template

```
I'm working in [client-workspace/admin-workspace/backend-workspace].

Please read the AI-README.md file to understand our setup.

WHAT USERS NEED:
[Describe what users should be able to do]

WHY THEY NEED IT:
[What problem this solves for them]

WHAT SUCCESS LOOKS LIKE:
[How you'll know it's working well]

CONSTRAINTS:
[What can't break, timeline, any limitations]

HELP ME:
1. Plan how this fits into our current setup
2. Build it step by step
3. Test it properly
4. Update our documentation

Start by reviewing our workspace files and existing patterns.
```

## Examples That Work

### Frontend Feature
```
I'm working in client-workspace.

Please read the AI-README.md file to understand our React setup.

WHAT USERS NEED:
Users need to be able to upload profile pictures and see them immediately

WHY THEY NEED IT:
Right now profiles look generic and users can't personalize their accounts

WHAT SUCCESS LOOKS LIKE:
- Users can click to upload a photo
- Photo appears immediately after upload
- Photo shows up everywhere their profile is displayed
- Works on mobile and desktop

CONSTRAINTS:
- Can't break existing login/profile functionality
- Images should be reasonably sized (not huge files)
- Should work with our current user authentication
- Want to finish this in the next week

HELP ME:
1. Plan how this fits into our current setup
2. Build it step by step
3. Test it properly
4. Update our documentation

Start by reviewing our workspace files and existing patterns.
```

### Backend Feature
```
I'm working in backend-workspace.

Please read the AI-README.md file to understand our Django API setup.

WHAT USERS NEED:
Users need to be able to search for other users by name or email

WHY THEY NEED IT:
Currently users can't find each other easily, which limits collaboration

WHAT SUCCESS LOOKS LIKE:
- API endpoint that returns user search results
- Search should be fast (under 500ms)
- Should find partial matches (not just exact)
- Should respect privacy settings (don't show private users)

CONSTRAINTS:
- Can't break existing user API endpoints
- Should handle thousands of users efficiently
- Need to protect user privacy
- Should integrate with our current authentication

HELP ME:
1. Plan how this fits into our current setup
2. Build it step by step
3. Test it properly
4. Update our documentation

Start by reviewing our workspace files and existing patterns.
```

### Admin Feature
```
I'm working in admin-workspace.

Please read the AI-README.md file to understand our admin panel setup.

WHAT USERS NEED:
Admin users need to see charts showing user activity over time

WHY THEY NEED IT:
We need to understand how the app is being used to make better decisions

WHAT SUCCESS LOOKS LIKE:
- Chart showing daily active users over last 30 days
- Chart showing new signups over time
- Should update automatically with new data
- Should load quickly even with lots of data

CONSTRAINTS:
- Can't slow down the main app for regular users
- Should work with our existing admin authentication
- Charts should be easy to read and understand
- Need to finish this month

HELP ME:
1. Plan how this fits into our current setup
2. Build it step by step
3. Test it properly
4. Update our documentation

Start by reviewing our workspace files and existing patterns.
```

## Step-by-Step Development

### 1. Plan the Feature
- **Understand existing code**: What patterns are already in place?
- **Identify integration points**: What other parts of the app does this touch?
- **Break it into small pieces**: What can you build and test incrementally?
- **Consider edge cases**: What could go wrong?

### 2. Start Small
- Build the simplest version first
- Get it working before adding complexity
- Test each piece as you build it
- Make sure you're not breaking existing functionality

### 3. Build Incrementally
- Add one capability at a time
- Test after each addition
- Keep the app working throughout development
- Get feedback early if possible

### 4. Test Thoroughly
- Test the happy path (everything works perfectly)
- Test error cases (what if something goes wrong?)
- Test edge cases (unusual but possible scenarios)
- Test integration with existing features

## Common Feature Patterns

### Frontend Features Usually Need:
- **UI components** - Buttons, forms, displays
- **State management** - Keeping track of data
- **API integration** - Getting data from backend
- **Error handling** - What happens when things go wrong
- **Loading states** - What users see while waiting

### Backend Features Usually Need:
- **Database models** - How to store the data
- **API endpoints** - How frontend accesses the functionality
- **Business logic** - The rules and processing
- **Authentication** - Who can access what
- **Validation** - Making sure data is correct

### Admin Features Usually Need:
- **Data visualization** - Charts, tables, lists
- **Filtering and searching** - Finding specific information
- **CRUD operations** - Create, read, update, delete
- **Permissions** - Admin-only access
- **Export capabilities** - Getting data out of the system

## Integration Considerations

### Frontend ↔ Backend
- What new API endpoints do you need?
- How will you handle loading and error states?
- Does the frontend need real-time updates?

### Admin ↔ Backend
- What admin-specific data access do you need?
- How will you handle large datasets efficiently?
- What administrative controls are needed?

### Cross-Workspace Coordination
Update the META-AI-README.md when your feature affects multiple workspaces:

```markdown
## New Feature: [Feature Name]
**Lead Workspace**: [Your workspace]
**Other Workspaces Affected**: [List them]
**Coordination Needed**: [What other workspaces need to know]
**Timeline**: [When you need their input/changes]
```

## Testing Your Feature

### Frontend Testing
- Does it work on different screen sizes?
- Does it work on different browsers?
- Are there any JavaScript errors in the console?
- Is it accessible (keyboard navigation, screen readers)?
- Does it handle slow network connections gracefully?

### Backend Testing
- Does it handle invalid input properly?
- Are there any security vulnerabilities?
- Does it perform well under load?
- Are database queries efficient?
- Does it integrate properly with authentication?

### Admin Testing
- Can only authorized users access it?
- Does it handle large datasets without crashing?
- Are the visualizations accurate and useful?
- Does it export data correctly?
- Is it intuitive for non-technical users?

## Documentation Updates

### Update Your KNOWLEDGE.md:
```markdown
## Feature: [Feature Name]
**Date**: YYYY-MM-DD
**Purpose**: [What problem this solves]
**Implementation**: [Key technical decisions]
**Challenges**: [What was difficult and how you solved it]
**Integration**: [How it connects with other parts of the system]
**Future Improvements**: [What you'd do differently or add later]
```

### Update Your AI-README.md:
- Add the new feature to your workspace description
- Document any new patterns or conventions
- Update your success metrics if relevant
- Add any new monitoring or testing approaches

Building features systematically like this helps ensure they work well, integrate properly, and can be maintained by your future self and other developers.
