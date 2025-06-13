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
1. Understand what's actually causing this
2. Fix it step by step
3. Make sure it doesn't break again

Start by exploring the workspace files to understand our current setup.
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
1. Understand what's actually causing this
2. Fix it step by step  
3. Make sure it doesn't break again

Start by exploring the workspace files to understand our current setup.
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
1. Understand what's actually causing this
2. Fix it step by step
3. Make sure it doesn't break again

Start by exploring the workspace files to understand our current setup.
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
1. Understand what's actually causing this
2. Fix it step by step
3. Make sure it doesn't break again

Start by exploring the workspace files to understand our current setup.
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

## What the AI Should Do

1. **Read your workspace context** - Understand your specific setup
2. **Ask clarifying questions** if the problem isn't clear
3. **Identify the root cause** - Not just treat symptoms
4. **Suggest a specific fix** - With clear steps to implement
5. **Help you test the fix** - Make sure it actually works
6. **Update your KNOWLEDGE.md** - So you remember how to handle this type of issue

## Red Flags

If your AI assistant:
- Suggests generic solutions without reading your workspace context
- Wants to rewrite large parts of your code
- Doesn't ask about your specific setup
- Gives you code to copy-paste without explanation
- Doesn't help you understand what went wrong

...then try rephrasing your request to emphasize the workspace context and ask for step-by-step guidance.

## Building Your Debugging Skills

### Each time you solve a problem:
1. **Document it** - Add the solution to your KNOWLEDGE.md
2. **Look for patterns** - Is this similar to previous issues?
3. **Improve your setup** - Can you prevent this type of problem?
4. **Share what works** - Help other developers learn from your experience

### Questions to ask yourself:
- What could I have done to catch this earlier?
- Is there a pattern here I should watch for?
- How can I make this type of problem easier to debug next time?
- What would help other developers avoid this issue?

This approach builds your debugging skills over time instead of just fixing individual problems.
