# Getting Started: Your First AI Workspace

This guide walks you through setting up your first AI workspace in 10-15 minutes.

## Step 1: Pick Your Starting Point (2 minutes)

Don't try to set up everything at once. Choose **one area** where you need the most help:

### Choose Frontend if:
- Users are reporting bugs with the interface
- Pages are loading slowly
- You're building new user-facing features
- Mobile experience has issues

### Choose Backend if:
- API responses are slow or error-prone
- Database queries need optimization
- You're adding new API endpoints
- Authentication/security needs work

### Choose Admin if:
- Admin panel is slow with large datasets
- You need new admin functionality
- Data visualization needs improvement
- Admin workflow could be more efficient

## Step 2: Create Your Workspace (3 minutes)

### Create the Directory Structure
```bash
# In your project root, create your chosen workspace
mkdir client-workspace     # or admin-workspace or backend-workspace
cd client-workspace

# Create the basic structure
mkdir docs tools tests logs
touch docs/KNOWLEDGE.md
```

### Copy the Template
```bash
# Download the appropriate template
curl -o AI-README.md https://raw.githubusercontent.com/yourusername/metadev/main/templates/client-ai-readme.md

# Or copy from this repo if you have it locally
cp ../metadev/templates/client-ai-readme.md AI-README.md
```

## Step 3: Customize for Your Project (5 minutes)

### Edit Your AI-README.md

Replace the placeholder sections with your actual setup:

```markdown
## Your Project Setup

**Framework**: React 18 with TypeScript    # Your actual framework
**Main Technologies**: Tailwind CSS, React Query, Vite
**Build Tool**: Vite
**Current Status**: Working but has performance issues on mobile

### Key User Flows
1. **User login**: Email/password, redirects to dashboard
2. **Main functionality**: Users can create and share documents
3. **Mobile experience**: Responsive design, works on phones

### Performance Targets
- **Page load time**: Under 3 seconds on mobile (currently 5-7 seconds)
- **JavaScript bundle**: Under 200KB gzipped (currently 350KB)
- **Core Web Vitals**: All green in PageSpeed Insights (currently failing)
```

### Add Your Common Problems

Replace the generic examples with issues you actually face:

```markdown
## Common Problems We Face

### Performance Issues
- **Large bundle size**: App.js is 350KB, too big for mobile
- **Slow initial load**: First page takes 5-7 seconds on mobile
- **Memory leaks**: App gets slower after 10+ minutes of use

### Mobile Problems
- **Touch interactions**: Some buttons require double-tap on iOS
- **Responsive design**: Sidebar overlaps content on small screens
- **Safari-specific**: Date picker doesn't work in iOS Safari

### Integration Issues
- **API timeouts**: Some API calls take 10+ seconds and time out
- **Authentication**: Users get logged out randomly
- **Real-time updates**: WebSocket disconnects frequently
```

## Step 4: Try It Out (5 minutes)

### Test with a Real Problem

Pick a current issue and try the workspace approach:

```
I'm working in client-workspace. Please read the AI-README.md file to understand our React setup.

PROBLEM: Our dashboard page takes 7 seconds to load on mobile and users are complaining.

WHEN IT'S SLOW:
- Always slow on mobile, but fine on desktop
- Slower on 3G connections
- Loading spinner shows for 7+ seconds before content appears

WHAT I'VE TRIED:
- Checked network tab in dev tools (lots of JavaScript files loading)
- Tested on different mobile devices (same issue on all)
- Asked other developers (they noticed it too but not sure how to fix)

WHAT SUCCESS LOOKS LIKE:
- Dashboard loads within 3 seconds on mobile
- Content appears progressively (not all at once)
- Works well on slower connections
- No change to desktop performance

HELP ME:
1. Identify what's causing the slow mobile loading
2. Fix the main bottleneck first
3. Measure the improvement
4. Document what we learn for future reference

Start by understanding our current setup from the workspace files.
```

### What Should Happen

A good AI assistant should:
1. Read your AI-README.md to understand your setup
2. Ask clarifying questions about your specific tech stack
3. Suggest specific optimizations (code splitting, image optimization, etc.)
4. Help you measure before/after performance
5. Guide you through implementing changes step by step

## Step 5: Document Your First Success

### Update docs/KNOWLEDGE.md

After you solve the problem, add what you learned:

```markdown
## Discovery: Mobile Performance Optimization
**Date**: 2024-03-20
**Mission**: Speed up dashboard loading on mobile
**Problem**: 7-second load time due to large JavaScript bundle
**Solution**: 
- Implemented code splitting with React.lazy()
- Compressed images and added WebP format
- Added service worker for caching
**Performance Impact**: 7s → 2.8s load time on mobile
**Reusability**: Code splitting technique can be applied to other heavy pages
**Cross-Layer Impact**: None - purely frontend optimization
```

## What You Should See After Setup

### Signs It's Working Well
- AI assistants understand your project context without you explaining it every time
- Solutions are specific to your tech stack and constraints
- AI asks relevant follow-up questions about your setup
- Suggestions include measuring and validating improvements
- You're building up useful knowledge in your KNOWLEDGE.md file

### Red Flags
- AI gives generic advice that could apply to any project
- Suggestions require technologies you're not using
- AI doesn't ask about your specific constraints or setup
- Solutions focus on rewriting large parts of your code
- No guidance on testing or measuring improvements

## Common First-Time Issues

### "The AI is still giving generic advice"
- Make sure your AI-README.md has specific details about your tech stack
- Include your actual problems, not the template examples
- Start your requests with "I'm working in [workspace-name]. Please read the AI-README.md..."

### "I don't know what to put in the AI-README.md"
- Start simple - just list your main technologies
- Add one real problem you're facing
- You can always add more details later as you use the workspace

### "This seems like a lot of setup for one problem"
- You only need to set up one workspace to start
- The setup pays off when you have multiple conversations about the same codebase
- Each problem you solve builds knowledge for the next one

## Next Steps

### After Your First Success
1. **Add more context** to your AI-README.md based on what was helpful
2. **Try a different type of problem** to see how versatile the approach is
3. **Share your results** with the community to help improve the templates

### Expanding to More Workspaces
1. **Set up a second workspace** if you're regularly working across multiple layers
2. **Create META-AI-README.md** when you need coordination between workspaces
3. **Adapt the templates** to better fit your specific project structure

### Building Team Habits
1. **Show teammates** how the workspace approach helps with AI assistance
2. **Share KNOWLEDGE.md discoveries** so everyone benefits from solutions
3. **Develop team conventions** for workspace organization and documentation

## Troubleshooting

### AI Assistant Isn't Reading the AI-README.md
Try being more explicit:
```
Before helping me, please read the AI-README.md file in this workspace to understand our project setup. Then help me with [your problem].
```

### AI-README.md Feels Too Complex
Start with just the basics:
- What framework/language you're using
- One or two common problems you face
- What good success looks like for your project

### Not Sure if It's Working
Compare these two approaches and see which gets better results:

**Without workspace context:**
"My React app is slow on mobile, how do I fix it?"

**With workspace context:**
"I'm working in client-workspace. Read the AI-README.md to understand our React setup. Our dashboard takes 7 seconds to load on mobile (currently loads in under 2 seconds on desktop). Help me identify and fix the main performance bottleneck."

The second approach should get much more specific, actionable advice.

---

**Remember**: The goal isn't perfect organization - it's giving AI assistants enough context to provide genuinely helpful assistance instead of generic advice. Start simple and improve as you go.
