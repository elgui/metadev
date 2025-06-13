# Surgical Bug Resolution Prompt

Use this template when you need to fix specific bugs quickly and reliably without breaking existing functionality.

## Template

```markdown
MISSION: Fix bug where [specific issue occurs] causing [specific user impact]

WORKSPACE: [client-workspace | admin-workspace | backend-workspace]

BUG REPRODUCTION:
- Steps to reproduce:
  1. [exact step-by-step sequence]
  2. [include specific data/inputs used]
  3. [environment details: browser, device, OS]
- Expected behavior: [what should happen]
- Actual behavior: [what actually happens]
- Frequency: [always/sometimes/rarely - percentage if known]
- User impact: [how many users affected, business impact]

EVIDENCE COLLECTED:
- Error messages: [exact error text/codes]
- Console logs: [relevant browser/server logs]
- Network requests: [API calls involved]
- User reports: [customer feedback or support tickets]
- Monitoring data: [performance metrics, error rates]

WORKSPACE CONTEXT:
- Related systems: [which other components are involved]
- Recent changes: [deployments, updates that might be related]
- Similar issues: [check KNOWLEDGE.md for patterns]
- Risk level: [high/medium/low impact if fix goes wrong]

SUCCESS CRITERIA:
- Bug resolved: [specific behavior that confirms fix]
- No regression: [existing functionality that must remain working]
- Performance impact: [fix must not slow down system]
- Testing validation: [how to prove the fix works]

AI AGENT INSTRUCTIONS:
1. REPRODUCE: Set up monitoring and reproduce the bug reliably
2. INVESTIGATE: Use debugging tools to trace the root cause
3. ISOLATE: Identify minimal code change to fix the issue
4. VALIDATE: Test fix thoroughly with original reproduction steps
5. REGRESSION TEST: Verify no existing functionality is broken
6. DOCUMENT: Record root cause and prevention in KNOWLEDGE.md
7. MONITOR: Watch system behavior after fix deployment

Begin by reproducing the bug in your monitored environment.
```

## Example Usage

### Frontend Bug Example
```markdown
MISSION: Fix bug where user login form hangs on mobile Safari causing 15% of mobile users to abandon signup

WORKSPACE: client-workspace

BUG REPRODUCTION:
- Steps to reproduce:
  1. Open signup form on iPhone Safari (iOS 15+)
  2. Fill in email and password fields
  3. Tap "Sign Up" button
  4. Form becomes unresponsive, spinner shows indefinitely
- Expected behavior: User should be logged in within 2-3 seconds
- Actual behavior: Form hangs, no error message, no response
- Frequency: 85% of mobile Safari users (from analytics)
- User impact: 150+ users/day affected, 15% signup abandonment rate

EVIDENCE COLLECTED:
- Error messages: No JavaScript errors in console
- Console logs: "Uncaught TypeError: Cannot read property 'json' of undefined"
- Network requests: POST /api/auth/signup returns 200 but response never processes
- User reports: "Signup broken on my iPhone", "Can't create account"
- Monitoring data: 85% failure rate on iOS Safari, 0% on other browsers

WORKSPACE CONTEXT:
- Related systems: Authentication API, form validation, loading states
- Recent changes: Updated fetch() implementation 3 days ago
- Similar issues: Check for other mobile-specific API handling problems
- Risk level: Medium - auth is critical but fix should be isolated

SUCCESS CRITERIA:
- Bug resolved: Mobile Safari users can complete signup successfully
- No regression: Desktop and other mobile browsers continue working
- Performance impact: No change to signup speed on working browsers
- Testing validation: 95%+ success rate on iOS Safari test devices

AI AGENT INSTRUCTIONS:
[Follow template instructions above]
```

### Backend Bug Example
```markdown
MISSION: Fix bug where API returns 500 error on concurrent user creation requests causing signup failures

WORKSPACE: backend-workspace

BUG REPRODUCTION:
- Steps to reproduce:
  1. Send 5+ concurrent POST requests to /api/users/create
  2. Use different email addresses for each request
  3. All requests sent within 100ms window
  4. 2-3 requests fail with 500 Internal Server Error
- Expected behavior: All requests should succeed with 201 Created
- Actual behavior: Some requests fail with database constraint violation
- Frequency: 30% failure rate when 3+ concurrent signups happen
- User impact: 20+ failed signups per day during peak hours

EVIDENCE COLLECTED:
- Error messages: "IntegrityError: duplicate key value violates unique constraint"
- Console logs: Database deadlock detection in PostgreSQL logs
- Network requests: Race condition in user creation transaction
- User reports: "Got error during signup, tried again and it worked"
- Monitoring data: Error rate spikes correlate with traffic bursts

WORKSPACE CONTEXT:
- Related systems: PostgreSQL database, user authentication, email verification
- Recent changes: Optimized database queries last week
- Similar issues: Previous race conditions in order processing (see KNOWLEDGE.md)
- Risk level: High - signup failures directly impact business

SUCCESS CRITERIA:
- Bug resolved: 100% success rate for concurrent user creation
- No regression: Signup performance remains under 200ms
- Performance impact: No degradation in database performance
- Testing validation: Load test with 20 concurrent signups succeeds

AI AGENT INSTRUCTIONS:
[Follow template instructions above]
```

### Admin Dashboard Bug Example
```markdown
MISSION: Fix bug where admin dashboard crashes when filtering large user datasets

WORKSPACE: admin-workspace

BUG REPRODUCTION:
- Steps to reproduce:
  1. Navigate to admin user management page
  2. Set date filter to "Last 6 months" (loads ~50k users)
  3. Apply additional filter for "Active users only"
  4. Browser tab crashes or becomes unresponsive
- Expected behavior: Filtered results should display within 2-3 seconds
- Actual behavior: Browser memory usage spikes to 2GB+, tab crashes
- Frequency: 100% when filtering large datasets (>10k users)
- User impact: Admin team cannot analyze user data effectively

EVIDENCE COLLECTED:
- Error messages: "Out of memory" in browser console
- Console logs: React component rendering 50k+ DOM elements simultaneously
- Network requests: API returns full dataset, client-side filtering
- User reports: "Admin panel keeps crashing when I try to filter users"
- Monitoring data: Memory usage spikes to 2GB+ during filtering

WORKSPACE CONTEXT:
- Related systems: User management API, data filtering components, pagination
- Recent changes: Added new user filter options last month
- Similar issues: Similar memory issues with transaction reports (see KNOWLEDGE.md)
- Risk level: Medium - admin functionality critical but isolated

SUCCESS CRITERIA:
- Bug resolved: Admin can filter 50k+ users without crashes
- No regression: Existing filter functionality continues working
- Performance impact: Memory usage stays under 500MB during filtering
- Testing validation: Filter operations complete within 3 seconds

AI AGENT INSTRUCTIONS:
[Follow template instructions above]
```

## Debugging Tool Recommendations by Workspace

### Client Workspace Tools
```javascript
// Browser debugging
- Chrome DevTools Performance tab for memory/CPU analysis
- React DevTools for component debugging
- Network tab for API request analysis
- Mobile device simulation for responsive issues

// Your workspace tools
node tools/performance-monitor.js     // Track Core Web Vitals
node tools/component-inspector.js    // React/Vue debugging
node tools/mobile-simulator.js       // Cross-device testing
```

### Backend Workspace Tools
```javascript
// Server debugging  
- Database query logs and EXPLAIN ANALYZE
- Application performance monitoring (APM)
- Memory profiling and heap dumps
- Load testing for concurrent request issues

// Your workspace tools
node tools/api-performance-tracker.js  // Monitor endpoint performance
node tools/database-query-analyzer.js  // SQL optimization
node tools/memory-profiler.js         // Resource usage tracking
```

### Admin Workspace Tools
```javascript
// Dashboard debugging
- Browser memory profiling for large datasets
- Chart rendering performance analysis
- Data table optimization monitoring
- User interaction tracking for workflow issues

// Your workspace tools
node tools/dashboard-performance.js      // Chart/table performance
node tools/large-dataset-simulator.js   // Test with realistic data
node tools/admin-auth-validator.js      // Permission boundary testing
```

## Bug Classification & Priority

### Critical Bugs (Fix immediately)
- Security vulnerabilities
- Data corruption or loss
- Complete feature breakdown affecting >50% users
- Payment/checkout failures

### High Priority Bugs (Fix within 24 hours)
- Performance degradation >50%
- Major workflow breakage for specific user segments
- Mobile-specific issues affecting large user base
- Admin panel functionality failures

### Medium Priority Bugs (Fix within 1 week)
- Minor performance issues
- Edge case failures affecting <10% users
- Non-critical UI/UX problems
- Admin convenience features

### Low Priority Bugs (Fix when convenient)
- Cosmetic issues with no functional impact
- Very rare edge cases
- Enhancement requests disguised as bugs
- Non-essential feature improvements

## Root Cause Analysis Template

After fixing the bug, document in KNOWLEDGE.md:

```markdown
## Bug Resolution: [Brief Description]
**Date**: YYYY-MM-DD
**Severity**: [Critical/High/Medium/Low]
**Affected Users**: [Number/percentage of users impacted]

### Root Cause
[Technical explanation of why the bug occurred]

### Contributing Factors
- [Code quality issues that allowed the bug]
- [Process failures that missed the bug]
- [Environmental factors that triggered the bug]

### Fix Implemented
[Detailed description of the solution]

### Prevention Measures
- [Code changes to prevent similar bugs]
- [Process improvements for detection]
- [Monitoring additions for early warning]

### Testing Strategy
[How to ensure this type of bug is caught in the future]

### Performance Impact
[Any performance changes resulting from the fix]
```

## Prevention Patterns

### Common Bug Patterns to Watch For

**Race Conditions**:
- Database constraint violations
- Concurrent API requests
- State management conflicts

**Memory Issues**:
- Large dataset rendering
- Infinite loops or recursion
- Memory leaks in long-running processes

**Integration Failures**:
- API contract mismatches
- Authentication/authorization edge cases
- Network timeout handling

**Mobile-Specific Issues**:
- iOS Safari compatibility
- Touch event handling
- Viewport and responsive design

This template helps AI agents approach bugs systematically while building knowledge to prevent similar issues in the future.
