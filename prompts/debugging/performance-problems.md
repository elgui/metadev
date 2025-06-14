# Performance Problems Prompt

Use this when something is too slow and you need to figure out why.

## Basic Template

```
I'm working in [client-workspace/admin-workspace/backend-workspace].

Please read the AI-CONTEXT.md file to understand our setup. You are the owner of this entire AI workspace - responsible for all tools, documentation, and capabilities within it.

PERFORMANCE ISSUE:
[What's slow and how slow it is]

WHEN IT'S SLOW:
[Under what conditions - many users, large data, specific actions]

CURRENT SPEED:
[How long things take now - be specific with numbers if you have them]

TARGET SPEED:
[How fast it should be]

AS THE AI WORKSPACE OWNER:

**PHASE 1: TOOL INVENTORY & DEPLOYMENT**
1. **Audit existing performance tools**: Review the AI-CONTEXT.md tool catalog - which tools can measure this performance issue?
2. **Deploy relevant monitoring**: Start existing performance tools that apply to this bottleneck
3. **Identify measurement gaps**: What performance data is missing that existing tools don't provide?

**PHASE 2: TOOL ENHANCEMENT OR CREATION**
4. **Enhance existing tools FIRST**: Can current performance tools be improved to provide needed metrics?
5. **Create new tools only if necessary**: Build new performance tools only when existing ones cannot be enhanced
6. **Follow performance tool standards**: Ensure all tools provide actionable performance insights

**PHASE 3: DATA-DRIVEN OPTIMIZATION**
7. **Analyze with performance data**: Use comprehensive tool outputs to identify actual bottlenecks
8. **Optimize with monitoring**: Implement performance fixes while tools provide real-time feedback
9. **Validate with measurements**: Prove optimizations work using before/after tool measurements

**PHASE 4: WORKSPACE MAINTENANCE (MANDATORY)**
10. **Update performance tool catalog**: Add new tools and document enhancements in AI-CONTEXT.md
11. **Enhance documentation**: Improve KNOWLEDGE.md with both optimization AND performance tooling evolution
12. **Maintain workspace authority**: Ensure all performance documentation is clean, accurate, and authoritative

You have full ownership and responsibility for everything in this AI workspace. BEGIN with Phase 1: audit existing performance tools before creating anything new.
```

## Real Examples

### Slow Frontend
```
I'm working in client-workspace.

Please read the AI-CONTEXT.md file to understand our React setup. You are the owner of this entire AI workspace - responsible for all tools, documentation, and capabilities within it.

PERFORMANCE ISSUE:
Our dashboard page takes 8-10 seconds to load and users are complaining

WHEN IT'S SLOW:
Always slow, but worse when users have lots of data

CURRENT SPEED:
- Page takes 8-10 seconds to show content
- During loading, page is completely blank
- Users think the app is broken

TARGET SPEED:
- Page should show content within 2-3 seconds
- Should show loading state immediately
- Should feel responsive

AS THE AI WORKSPACE OWNER:

**PHASE 1: TOOL INVENTORY & DEPLOYMENT**
1. **Audit existing performance tools**: Review the AI-CONTEXT.md tool catalog - which tools can measure this performance issue?
2. **Deploy relevant monitoring**: Start existing performance tools that apply to this bottleneck
3. **Identify measurement gaps**: What performance data is missing that existing tools don't provide?

**PHASE 2: TOOL ENHANCEMENT OR CREATION**
4. **Enhance existing tools FIRST**: Can current performance tools be improved to provide needed metrics?
5. **Create new tools only if necessary**: Build new performance tools only when existing ones cannot be enhanced
6. **Follow performance tool standards**: Ensure all tools provide actionable performance insights

**PHASE 3: DATA-DRIVEN OPTIMIZATION**
7. **Analyze with performance data**: Use comprehensive tool outputs to identify actual bottlenecks
8. **Optimize with monitoring**: Implement performance fixes while tools provide real-time feedback
9. **Validate with measurements**: Prove optimizations work using before/after tool measurements

**PHASE 4: WORKSPACE MAINTENANCE (MANDATORY)**
10. **Update performance tool catalog**: Add new tools and document enhancements in AI-CONTEXT.md
11. **Enhance documentation**: Improve KNOWLEDGE.md with both optimization AND performance tooling evolution
12. **Maintain workspace authority**: Ensure all performance documentation is clean, accurate, and authoritative

You have full ownership and responsibility for everything in this AI workspace. BEGIN with Phase 1: audit existing performance tools before creating anything new.
```

### Slow API
```
I'm working in backend-workspace.

Please read the AI-CONTEXT.md file to understand our Django API setup. You are the owner of this entire AI workspace - responsible for all tools, documentation, and capabilities within it.

PERFORMANCE ISSUE:
API responses are taking 3-5 seconds during busy times

WHEN IT'S SLOW:
- During daytime when we have 50+ concurrent users
- Especially the /api/users/list endpoint
- Morning hours are the worst

CURRENT SPEED:
- Usually 3-5 seconds for user list
- Sometimes up to 10 seconds
- Other endpoints are much faster (under 1 second)

TARGET SPEED:
- All API calls should be under 500ms
- Even during busy periods
- Should handle 100+ concurrent users

AS THE AI WORKSPACE OWNER:
1. Build comprehensive monitoring tools to identify the actual bottlenecks
2. Use real-time performance data to understand root causes
3. Fix the main bottleneck first with continuous measurement
4. Create tools to prevent performance regressions
5. Document both the optimization AND the new monitoring capabilities
6. Maintain and enhance the AI workspace performance infrastructure

You have full ownership and responsibility for everything in this AI workspace. Start by deploying performance monitoring tools and building any missing observability for this specific issue.
```

### Slow Admin Panel
```
I'm working in admin-workspace.

Please read the AI-CONTEXT.md file to understand our admin dashboard setup. You are the owner of this entire AI workspace - responsible for all tools, documentation, and capabilities within it.

PERFORMANCE ISSUE:
User management page freezes browser when loading large datasets

WHEN IT'S SLOW:
- When we have more than 500 users
- Especially when using filters
- Browser sometimes crashes

CURRENT SPEED:
- Takes 15-30 seconds to load user list
- Browser becomes unresponsive during loading
- Sometimes runs out of memory

TARGET SPEED:
- Should load smoothly within 3 seconds
- Should stay responsive during loading
- Should handle 10,000+ users without issues

AS THE AI WORKSPACE OWNER:
1. Build comprehensive monitoring tools to identify the actual bottlenecks
2. Use real-time performance data to understand root causes
3. Fix the main bottleneck first with continuous measurement
4. Create tools to prevent performance regressions
5. Document both the optimization AND the new monitoring capabilities
6. Maintain and enhance the AI workspace performance infrastructure

You have full ownership and responsibility for everything in this AI workspace. Start by deploying performance monitoring tools and building any missing observability for this specific issue.
```

## Performance Debugging Steps

### 1. Measure First
Before fixing anything, get specific numbers:
- How long does it actually take?
- When is it fast vs slow?
- What's different about the slow cases?

### 2. Find the Bottleneck
Common causes by workspace:

**Frontend**:
- Large JavaScript bundles
- Too many API calls
- Inefficient rendering
- Large images or assets

**Backend**:
- Slow database queries
- Missing database indexes
- N+1 query problems
- External API calls

**Admin**:
- Loading too much data at once
- Inefficient table rendering
- Memory leaks
- Complex calculations in browser

### 3. Fix One Thing at a Time
- Start with the biggest bottleneck
- Measure after each change
- Keep changes small and focused
- Test with realistic data

### 4. Validate the Fix
- Test under the same conditions that were slow
- Make sure you didn't break anything else
- Get actual measurements, not just "feels faster"
- Document what you changed and why

## Measuring Performance

### Frontend Measurements
```javascript
// Basic timing
console.time('page-load');
// ... your code ...
console.timeEnd('page-load');

// More detailed measurement
const start = performance.now();
// ... your code ...
const end = performance.now();
console.log(`Operation took ${end - start} milliseconds`);
```

### Backend Measurements
```python
# Django example
import time
start = time.time()
# ... your code ...
end = time.time()
print(f"Operation took {end - start:.2f} seconds")

# Or use Django Debug Toolbar for database queries
```

### What to Track
- Time from user action to visible result
- Database query times
- API response times
- Memory usage during operations
- Number of network requests

## Common Performance Wins

### Quick Frontend Fixes
- **Lazy loading**: Only load what's visible
- **Code splitting**: Break up large JavaScript files
- **Image optimization**: Compress and resize images
- **Caching**: Store results that don't change often

### Quick Backend Fixes
- **Database indexes**: Speed up common queries
- **Query optimization**: Reduce database calls
- **Caching**: Store expensive calculations
- **Connection pooling**: Reuse database connections

### Quick Admin Fixes
- **Pagination**: Load data in chunks
- **Virtual scrolling**: Only render visible rows
- **Debounced search**: Don't search on every keystroke
- **Background loading**: Show results as they come in

## Building Performance Awareness

### After Each Performance Fix:
1. **Document the numbers** - Before and after measurements
2. **Explain the cause** - What was actually slow and why
3. **Share the technique** - How this applies to similar problems
4. **Add monitoring** - How to catch this type of issue early

### Questions for Your KNOWLEDGE.md:
- What was the root cause of the slowness?
- How did we identify it?
- What was the fix and why did it work?
- How can we prevent this type of performance issue?
- What tools or techniques helped us debug this?

Performance improvements compound over time - each fix makes your system faster and teaches you how to build faster systems in the future.
