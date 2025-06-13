# Example: Todo App with Real-time Collaboration

This example shows how the AI workspace strategy works for a real project - a todo app where multiple users can collaborate on shared task lists.

## Project Overview

**What it does**: Users can create todo lists, invite others to collaborate, and see real-time updates when teammates add or complete tasks.

**Tech Stack**: React frontend, Django backend, PostgreSQL database, WebSocket for real-time updates

**Team**: 2 developers working part-time

## AI Agent Context Setup

```
todo-app/
├── src/                              # Actual React code (unchanged)
├── api/                              # Actual Django code (unchanged)
├── components/                       # Actual components (unchanged)
└── ai-agents/                        # AI context areas (NEW)
    ├── AI-PROJECT-OVERVIEW.md        # Project coordination for AI
    ├── frontend/                     # Frontend AI context
    │   ├── AI-CONTEXT.md            # Frontend context for AI
    │   ├── docs/KNOWLEDGE.md        # Frontend discoveries
    │   └── tools/performance-check.js # Simple performance monitoring
    ├── admin/                        # Admin panel AI context
    │   ├── AI-CONTEXT.md            # Admin context for AI
    │   ├── docs/KNOWLEDGE.md        # Admin discoveries
    │   └── tools/user-analytics.js   # User behavior tracking
    └── backend/                      # Backend AI context
        ├── AI-CONTEXT.md            # Backend context for AI
        ├── docs/KNOWLEDGE.md        # Backend discoveries
        └── tools/api-monitor.py      # API performance monitoring
```

## Real Problems Solved Using This Approach

### Problem 1: Real-time Updates Not Working on Mobile

**AI Context Area**: ai-agents/frontend/  
**Original Issue**: Users on mobile Safari weren't seeing real-time todo updates

**AI Conversation**:
```
I'm working with the frontend of our application. Please read the ai-agents/frontend/AI-CONTEXT.md file to understand our React setup.

PROBLEM: WebSocket connections are dropping on mobile Safari after a few minutes. 
Users add todos but other team members on mobile don't see the updates.

WHEN IT HAPPENS:
- Only on mobile Safari (works fine on desktop)
- After 3-5 minutes of inactivity
- WiFi and cellular both affected

WHAT I'VE TRIED:
- Checked WebSocket server logs (connections show as closed)
- Tested other mobile browsers (Chrome mobile works fine)
- Added connection status indicator (shows "disconnected")

HELP ME:
1. Understand what's causing Safari to drop WebSocket connections
2. Implement automatic reconnection that works reliably
3. Make sure todos sync when reconnection happens
4. Test that it works under real mobile conditions

Start by exploring our workspace files to understand our current WebSocket setup.
```

**AI Response**: 
- Identified Safari's aggressive background tab handling as the cause
- Implemented heartbeat mechanism to keep connections alive
- Added automatic reconnection with exponential backoff
- Created offline queue for actions during disconnection

**Result**: Mobile users now maintain reliable real-time connections. Solution documented in ai-agents/frontend/docs/KNOWLEDGE.md for future reference.

### Problem 2: Database Slowdown with Large Todo Lists

**AI Context Area**: ai-agents/backend/  
**Original Issue**: Users with 500+ todos were experiencing 3-5 second load times

**AI Conversation**:
```
I'm working with the backend of our application. Please read the ai-agents/backend/AI-CONTEXT.md to understand our Django setup.

PERFORMANCE ISSUE: Todo list loading is very slow for users with lots of todos

WHEN IT'S SLOW:
- Users with 500+ todos experience 3-5 second loading
- Smaller lists (under 100 todos) load fine in under 500ms
- Affects both API and admin panel

CURRENT SPEED:
- Large lists: 3-5 seconds
- Database query time: 2.8 seconds average
- Most time spent in database operations

TARGET SPEED:
- All lists should load under 1 second
- Database queries under 100ms
- Pagination if needed for huge lists

HELP ME:
1. Identify what's making the database queries slow
2. Optimize the queries without changing the API response format
3. Implement pagination if necessary
4. Test with realistic data volumes

Start by understanding our current database monitoring setup from the workspace files.
```

**AI Response**:
- Analyzed Django ORM queries and found N+1 query problem
- Added `select_related()` for user and list relationships
- Implemented database indexes on frequently queried fields
- Added pagination for lists over 200 items

**Result**: Load times improved from 3-5 seconds to under 400ms. Database optimization patterns documented in ai-agents/backend/docs/KNOWLEDGE.md.

### Problem 3: Admin Panel Memory Issues

**AI Context Area**: ai-agents/admin/  
**Original Issue**: Admin panel crashed when viewing user analytics for large datasets

**AI Conversation**:
```
I'm working with the admin panel of our application. Please read the ai-agents/admin/AI-CONTEXT.md to understand our admin setup.

PERFORMANCE ISSUE: Admin analytics page crashes browser when loading user data

WHEN IT HAPPENS:
- When viewing analytics for more than 1000 users
- Browser tab becomes unresponsive
- Sometimes shows "out of memory" error

CURRENT BEHAVIOR:
- Loads all user data at once into charts
- Memory usage spikes to 1GB+
- Page becomes unusable

TARGET BEHAVIOR:
- Should handle 10,000+ users smoothly
- Memory usage stays reasonable
- Charts load progressively
- Page stays responsive during loading

HELP ME:
1. Find out why the browser is running out of memory
2. Implement data loading that doesn't crash the browser
3. Make charts render efficiently with large datasets
4. Keep all the same functionality admins currently use

Start by reviewing our workspace setup and current admin implementation.
```

**AI Response**:
- Identified that Chart.js was rendering all data points simultaneously
- Implemented virtual scrolling for data tables
- Added data sampling for charts (show trends, not every point)
- Created progressive loading with loading indicators

**Result**: Admin panel now handles 10,000+ users without crashing. Chart rendering optimizations documented in ai-agents/admin/docs/KNOWLEDGE.md.

## Key Patterns Discovered

### Cross-Area Coordination

**Pattern**: When fixing the WebSocket issues, we discovered the backend needed to handle connection drops more gracefully too.

**Coordination Used**:
1. Frontend team documented the mobile Safari behavior in ai-agents/AI-PROJECT-OVERVIEW.md
2. Backend team implemented better connection cleanup
3. Both teams tested the complete flow together
4. Both AI context area KNOWLEDGE.md files were updated with the full solution

### Reusable Solutions

**Performance Monitoring**: The simple performance monitoring script created for the frontend AI context proved useful for the admin panel too. It was adapted and shared between AI context areas.

**Database Optimization**: The query optimization techniques from the backend AI context helped solve similar issues in the admin panel's user analytics.

## Lessons Learned

### What Worked Well

1. **Focused Context**: AI assistants understood each AI context area's specific setup and constraints
2. **Incremental Progress**: Each area could make progress independently while staying coordinated
3. **Knowledge Building**: Solutions to similar problems got faster over time
4. **Cross-pollination**: Optimizations in one AI context area often helped others

### What Could Be Improved

1. **Testing Coordination**: Need better process for testing changes that span AI context areas
2. **Documentation Sync**: Sometimes KNOWLEDGE.md files got out of sync between areas
3. **Tool Sharing**: Could create more shared tools and utilities

### Metrics

**Before AI Context Areas**:
- Average debugging session: 2-3 hours
- Context switching time: 15-20 minutes to understand unfamiliar code
- Knowledge retention: Limited, mostly in developers' heads

**After AI Context Areas**:
- Average debugging session: 30-45 minutes
- Context switching time: 5 minutes to read AI context files
- Knowledge retention: Documented and searchable in KNOWLEDGE.md files

## File Examples

### ai-agents/frontend/docs/KNOWLEDGE.md (excerpt)
```markdown
## Mobile WebSocket Reliability
**Date**: 2024-03-15
**Problem**: Safari drops WebSocket connections after background/foreground transitions
**Solution**: Heartbeat + reconnection with exponential backoff + offline queue
**Code Pattern**: 
```javascript
// Heartbeat every 30 seconds
setInterval(() => {
  if (ws.readyState === WebSocket.OPEN) {
    ws.send(JSON.stringify({type: 'ping'}));
  }
}, 30000);
```
**Reusability**: Same pattern works for any real-time WebSocket feature
```

### ai-agents/backend/docs/KNOWLEDGE.md (excerpt)
```markdown
## Django ORM N+1 Query Optimization
**Date**: 2024-03-12
**Problem**: Todo list queries were making separate database calls for each todo's user
**Solution**: Use select_related() for foreign key relationships
**Performance Impact**: 2.8s → 0.3s for 500+ todo lists
**Code Pattern**:
```python
# Bad: N+1 queries
todos = Todo.objects.filter(list_id=list_id)  # Gets todos without users

# Good: Single query with JOIN
todos = Todo.objects.filter(list_id=list_id).select_related('user', 'assigned_to')
```
**Reusability**: Apply select_related() to any model with foreign key relationships
```

This example shows how the AI context area approach helps teams build up institutional knowledge while giving AI assistants the context they need to provide genuinely helpful assistance.
