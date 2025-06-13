# Simple Problem Solving Prompt

Use this when something isn't working and you need help figuring out why.

## Basic Template

```
I'm working in [client-workspace/admin-workspace/backend-workspace].

Please read the AI-CONTEXT.md file to understand our setup. You are the owner of this entire AI workspace - responsible for all tools, documentation, and capabilities within it.

THE PROBLEM:
[Describe what's happening vs what should happen]

WHEN IT HAPPENS:
[Always? Sometimes? Specific conditions?]

WHAT I'VE TRIED:
[List what you already attempted]

AS THE AI WORKSPACE OWNER:

**PHASE 1: TOOL INVENTORY & DEPLOYMENT**
1. **Audit existing tools**: Review the AI-CONTEXT.md tool catalog - which tools can help with this issue?
2. **Deploy relevant tools**: Start existing monitoring tools that apply to this problem domain
3. **Identify tool gaps**: What observability is missing that existing tools don't provide?

**PHASE 2: TOOL ENHANCEMENT OR CREATION**
4. **Enhance existing tools FIRST**: Can current tools be improved to provide needed insights?
5. **Create new tools only if necessary**: Build new tools only when existing ones cannot be enhanced
6. **Follow tool development standards**: Ensure all tools meet workspace quality standards

**PHASE 3: DATA-DRIVEN PROBLEM SOLVING**
7. **Analyze with tool data**: Use comprehensive tool outputs to understand root cause
8. **Implement with monitoring**: Fix step-by-step while tools provide real-time feedback
9. **Validate with tools**: Prove the solution works using tool measurements

**PHASE 4: WORKSPACE MAINTENANCE (MANDATORY)**
10. **Update tool catalog**: Add new tools and document enhancements in AI-CONTEXT.md
11. **Enhance documentation**: Improve KNOWLEDGE.md with both solution AND tool evolution
12. **Maintain workspace authority**: Ensure all documentation is clean, accurate, and authoritative

You have full ownership and responsibility for everything in this AI workspace. BEGIN with Phase 1: audit existing tools before creating anything new.
```

## Examples That Work

### Frontend Problem
```
I'm working in client-workspace.

Please read the AI-CONTEXT.md file to understand our React setup. You are the owner of this entire AI workspace - responsible for all tools, documentation, and capabilities within it.

THE PROBLEM:
When users click the "Save" button on our form, nothing happens. The button should save the data and show a success message.

WHEN IT HAPPENS:
Only on mobile phones, works fine on desktop

WHAT I'VE TRIED:
- Checked the console for errors (no errors shown)
- Tested on different mobile browsers (same issue)
- Asked other developers (they're not sure either)

AS THE AI WORKSPACE OWNER:

**PHASE 1: TOOL INVENTORY & DEPLOYMENT**
1. **Audit existing tools**: Review the AI-CONTEXT.md tool catalog - which tools can help with this issue?
2. **Deploy relevant tools**: Start existing monitoring tools that apply to this problem domain
3. **Identify tool gaps**: What observability is missing that existing tools don't provide?

**PHASE 2: TOOL ENHANCEMENT OR CREATION**
4. **Enhance existing tools FIRST**: Can current tools be improved to provide needed insights?
5. **Create new tools only if necessary**: Build new tools only when existing ones cannot be enhanced
6. **Follow tool development standards**: Ensure all tools meet workspace quality standards

**PHASE 3: DATA-DRIVEN PROBLEM SOLVING**
7. **Analyze with tool data**: Use comprehensive tool outputs to understand root cause
8. **Implement with monitoring**: Fix step-by-step while tools provide real-time feedback
9. **Validate with tools**: Prove the solution works using tool measurements

**PHASE 4: WORKSPACE MAINTENANCE (MANDATORY)**
10. **Update tool catalog**: Add new tools and document enhancements in AI-CONTEXT.md
11. **Enhance documentation**: Improve KNOWLEDGE.md with both solution AND tool evolution
12. **Maintain workspace authority**: Ensure all documentation is clean, accurate, and authoritative

You have full ownership and responsibility for everything in this AI workspace. BEGIN with Phase 1: audit existing tools before creating anything new.
```

### Backend Problem
```
I'm working in backend-workspace.

Please read the AI-CONTEXT.md file to understand our Django API setup. You are the owner of this entire AI workspace - responsible for all tools, documentation, and capabilities within it.

THE PROBLEM:
Our API sometimes returns errors when multiple users try to create accounts at the same time. Should always work.

WHEN IT HAPPENS:
When 3+ people sign up within a few seconds of each other

WHAT I'VE TRIED:
- Looking at server logs (shows database errors)
- Googling the error message (found some suggestions but wasn't sure how to apply them)
- Restarting the server (temporarily fixes it)

AS THE AI WORKSPACE OWNER:

**PHASE 1: TOOL INVENTORY & DEPLOYMENT**
1. **Audit existing tools**: Review the AI-CONTEXT.md tool catalog - which tools can help with this issue?
2. **Deploy relevant tools**: Start existing monitoring tools that apply to this problem domain
3. **Identify tool gaps**: What observability is missing that existing tools don't provide?

**PHASE 2: TOOL ENHANCEMENT OR CREATION**
4. **Enhance existing tools FIRST**: Can current tools be improved to provide needed insights?
5. **Create new tools only if necessary**: Build new tools only when existing ones cannot be enhanced
6. **Follow tool development standards**: Ensure all tools meet workspace quality standards

**PHASE 3: DATA-DRIVEN PROBLEM SOLVING**
7. **Analyze with tool data**: Use comprehensive tool outputs to understand root cause
8. **Implement with monitoring**: Fix step-by-step while tools provide real-time feedback
9. **Validate with tools**: Prove the solution works using tool measurements

**PHASE 4: WORKSPACE MAINTENANCE (MANDATORY)**
10. **Update tool catalog**: Add new tools and document enhancements in AI-CONTEXT.md
11. **Enhance documentation**: Improve KNOWLEDGE.md with both solution AND tool evolution
12. **Maintain workspace authority**: Ensure all documentation is clean, accurate, and authoritative

You have full ownership and responsibility for everything in this AI workspace. BEGIN with Phase 1: audit existing tools before creating anything new.
```

### Admin Dashboard Problem
```
I'm working in admin-workspace.

Please read the AI-CONTEXT.md file to understand our admin panel setup. You are the owner of this entire AI workspace - responsible for all tools, documentation, and capabilities within it.

THE PROBLEM:
The user list page takes 30+ seconds to load when we have lots of users. Should load quickly.

WHEN IT HAPPENS:
When we have more than 1000 users in the database

WHAT I'VE TRIED:
- Waiting longer (it does eventually load)
- Refreshing the page (same slow loading)
- Checking if other admin pages are slow (they're not)

AS THE AI WORKSPACE OWNER:

**PHASE 1: TOOL INVENTORY & DEPLOYMENT**
1. **Audit existing tools**: Review the AI-CONTEXT.md tool catalog - which tools can help with this issue?
2. **Deploy relevant tools**: Start existing monitoring tools that apply to this problem domain
3. **Identify tool gaps**: What observability is missing that existing tools don't provide?

**PHASE 2: TOOL ENHANCEMENT OR CREATION**
4. **Enhance existing tools FIRST**: Can current tools be improved to provide needed insights?
5. **Create new tools only if necessary**: Build new tools only when existing ones cannot be enhanced
6. **Follow tool development standards**: Ensure all tools meet workspace quality standards

**PHASE 3: DATA-DRIVEN PROBLEM SOLVING**
7. **Analyze with tool data**: Use comprehensive tool outputs to understand root cause
8. **Implement with monitoring**: Fix step-by-step while tools provide real-time feedback
9. **Validate with tools**: Prove the solution works using tool measurements

**PHASE 4: WORKSPACE MAINTENANCE (MANDATORY)**
10. **Update tool catalog**: Add new tools and document enhancements in AI-CONTEXT.md
11. **Enhance documentation**: Improve KNOWLEDGE.md with both solution AND tool evolution
12. **Maintain workspace authority**: Ensure all documentation is clean, accurate, and authoritative

You have full ownership and responsibility for everything in this AI workspace. BEGIN with Phase 1: audit existing tools before creating anything new.
```

## Making It Work

### Be Specific About the Problem
Instead of: "My app is broken"
Try: "Users can't log in on mobile Safari - the login button doesn't respond when tapped"

### Describe What You Expected
Instead of: "It doesn't work"
Try: "I expected the form to submit and show a success message, but instead nothing happens"

### Include What You've Tried
This helps the AI avoid suggesting things you already attempted and shows what didn't work.

### Ask for Step-by-Step Help
AI assistants work better when they can break problems down into smaller parts.

## What the AI Agent Should Do

1. **Start with tool inventory** - Always review existing tools before building new ones
2. **Deploy existing tools first** - Use current monitoring capabilities immediately
3. **Enhance before creating** - Improve existing tools rather than building from scratch
4. **Follow systematic phases** - Complete each phase before moving to the next
5. **Maintain authoritative documentation** - Keep AI-CONTEXT.md and KNOWLEDGE.md clean and current
6. **Update tool catalog religiously** - Document every tool enhancement and addition
7. **Think infrastructure, not just solutions** - Build capabilities that compound over time

## Red Flags

If your AI assistant:
- Suggests generic solutions without reading your workspace context
- Wants to rewrite large parts of your code
- Doesn't ask about your specific setup
- Gives you code to copy-paste without explanation
- Doesn't help you understand what went wrong

...then try rephrasing your request to emphasize the workspace context and ask for step-by-step guidance.

## Building Systematic AI Agent Capabilities

### After each problem-solving session:
1. **Tool Catalog Maintenance** - Update AI-CONTEXT.md with new/enhanced tools and their capabilities
2. **Documentation Authority** - Ensure KNOWLEDGE.md entries are clean, accurate, and reusable
3. **Tool Evolution Tracking** - Document how existing tools were enhanced, not just new ones created
4. **Capability Compounding** - Identify patterns that make future problems easier to solve

### Questions for continuous improvement:
- Which existing tools could be enhanced to prevent similar issues?
- How can the tool catalog be organized for faster problem-solving?
- What documentation gaps make problem-solving harder than it should be?
- How can tool reuse be maximized while capability growth continues?
- Are the workspace documentation standards being maintained at high quality?

### Systematic Workspace Enhancement:
1. **Tool Reuse Rate** - Measure how often existing tools solve new problems
2. **Documentation Quality** - Ensure all entries are authoritative and actionable
3. **Capability Growth** - Track how tool enhancements compound over time
4. **Knowledge Accessibility** - Organize information for rapid retrieval and application

This systematic approach builds an increasingly powerful AI agent workspace that becomes more capable with each problem solved.
