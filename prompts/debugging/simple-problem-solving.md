# Simple Problem Solving Prompt

Use this when something isn't working and you need help figuring out why.

## Basic Template

```
I'm working in [client-workspace/admin-workspace/backend-workspace].

Please read the AI-README.md file to understand our setup.

THE PROBLEM:
[Describe what's happening vs what should happen]

WHEN IT HAPPENS:
[Always? Sometimes? Specific conditions?]

WHAT I'VE TRIED:
[List what you already attempted]

HELP ME:
1. Build tools to observe what's actually happening in real-time
2. Use data from those tools to understand the root cause
3. Fix it step by step with continuous monitoring
4. Create tools to prevent this type of issue in the future
5. Document both the solution AND the new tooling capabilities

Start by deploying monitoring tools and building any missing observability for this specific issue.
```

## Examples That Work

### Frontend Problem
```
I'm working in client-workspace.

Please read the AI-README.md file to understand our React setup.

THE PROBLEM:
When users click the "Save" button on our form, nothing happens. The button should save the data and show a success message.

WHEN IT HAPPENS:
Only on mobile phones, works fine on desktop

WHAT I'VE TRIED:
- Checked the console for errors (no errors shown)
- Tested on different mobile browsers (same issue)
- Asked other developers (they're not sure either)

HELP ME:
1. Build tools to monitor this specific mobile interaction issue
2. Use real-time data to understand why Safari behaves differently
3. Fix it step by step with continuous mobile testing
4. Create tools to catch mobile Safari issues early in development
5. Document both the technical solution and the new mobile testing capabilities

Start by creating mobile Safari monitoring tools and observing the actual user interaction.
```

### Backend Problem
```
I'm working in backend-workspace.

Please read the AI-README.md file to understand our Django API setup.

THE PROBLEM:
Our API sometimes returns errors when multiple users try to create accounts at the same time. Should always work.

WHEN IT HAPPENS:
When 3+ people sign up within a few seconds of each other

WHAT I'VE TRIED:
- Looking at server logs (shows database errors)
- Googling the error message (found some suggestions but wasn't sure how to apply them)
- Restarting the server (temporarily fixes it)

HELP ME:
1. Build tools to monitor concurrent user registration requests
2. Use database monitoring to identify the exact race condition
3. Fix it step by step with load testing validation
4. Create tools to detect concurrency issues before they reach production
5. Document both the technical solution and the new concurrency testing tools

Start by building race condition monitoring tools and reproducing the issue with instrumentation.
```

### Admin Dashboard Problem
```
I'm working in admin-workspace.

Please read the AI-README.md file to understand our admin panel setup.

THE PROBLEM:
The user list page takes 30+ seconds to load when we have lots of users. Should load quickly.

WHEN IT HAPPENS:
When we have more than 1000 users in the database

WHAT I'VE TRIED:
- Waiting longer (it does eventually load)
- Refreshing the page (same slow loading)
- Checking if other admin pages are slow (they're not)

HELP ME:
1. Build tools to monitor admin panel performance with large datasets
2. Use real-time performance data to identify memory and rendering bottlenecks
3. Fix it step by step with performance testing on realistic data volumes
4. Create tools to prevent admin performance issues as data grows
5. Document both the technical solution and the new admin performance monitoring

Start by building large dataset monitoring tools and measuring actual admin panel resource usage.
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

1. **Deploy monitoring tools immediately** - Start observing the system in real-time
2. **Build missing observability tools** - Create custom monitoring for this specific issue
3. **Use data to understand root cause** - Not just treat symptoms
4. **Implement with continuous monitoring** - Watch tools for real-time feedback during fixes
5. **Validate with comprehensive tooling** - Test the solution thoroughly
6. **Enhance the tooling infrastructure** - Improve tools based on what was learned
7. **Document both solution and tooling** - Update KNOWLEDGE.md with technical fix AND new tool capabilities

## Red Flags

If your AI assistant:
- Suggests generic solutions without reading your workspace context
- Wants to rewrite large parts of your code
- Doesn't ask about your specific setup
- Gives you code to copy-paste without explanation
- Doesn't help you understand what went wrong

...then try rephrasing your request to emphasize the workspace context and ask for step-by-step guidance.

## Building Your AI Agent Tooling Skills

### Each time you solve a problem:
1. **Document both solution AND tooling** - Add the technical fix and new tool capabilities to KNOWLEDGE.md
2. **Identify tool patterns** - Can these monitoring approaches apply to similar issues?
3. **Enhance your observability infrastructure** - Build tools to prevent this class of problems
4. **Share tooling innovations** - Help other developers learn from your AI agent tools

### Questions to build better AI agent capabilities:
- What monitoring tools could have caught this earlier?
- Can I build automated detection for this pattern?
- How can I make this type of problem self-diagnosing?
- What observability gaps did this issue reveal?
- How can my AI agent tools become more proactive?

This approach builds your AI agent's diagnostic and preventive capabilities over time, creating a continuously improving development environment.
