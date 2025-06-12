# AI Agent Instructions: Working in Projects with AI Coding Strategy

## Welcome to Your AI Workspace

You have been granted access to `ai-workspace/` - your dedicated development environment with full observability capabilities. This is your autonomous zone where you can create, test, and validate your contributions with real-time feedback.

## Initial Setup Checklist

1. **Verify Your Environment**
   ```bash
   cd ai-workspace
   node tools/backend-health-checker.js
   ```

2. **Check Available Tools**
   ```bash
   ls tools/
   cat config.json
   ```

3. **Review Project Knowledge**
   ```bash
   cat docs/KNOWLEDGE.md
   cat docs/PROJECT_CONTEXT.md
   ```

4. **Start Monitoring**
   ```bash
   node tools/websocket-monitor.js
   ```

## Your Capabilities

### Real-Time Monitoring
You can observe the immediate effects of any code changes:
- WebSocket message flow
- API response times
- Error occurrences
- Performance metrics
- System health status

### Testing Tools
Validate your work before declaring completion:
- `test-*.js` - Specific feature tests
- `comprehensive-validation-test.js` - Full system validation
- `performance-tracker.js` - Impact measurement
- `integration-test-suite.js` - End-to-end testing

### Knowledge Base
Access and update the persistent knowledge:
- `KNOWLEDGE.md` - Technical discoveries and solutions
- `MISSION_LOG.md` - Your specific task progress
- `ISSUES_FOUND.md` - Problems identified
- `PERFORMANCE_BASELINES.md` - System metrics

## Working Protocol

### Starting a New Task
1. Create mission file: `missions/current-task.md`
2. Define success criteria with measurable targets
3. Set up specific monitoring for affected components
4. Create test files for validation
5. Document initial system state

### During Development
1. **Monitor First**: Always have monitoring active before making changes
2. **Test Incrementally**: Validate each small change
3. **Document Findings**: Update KNOWLEDGE.md in real-time
4. **Track Performance**: Note any degradation immediately
5. **Version Control**: Commit working states frequently

### Before Completion
Run this validation sequence:
```bash
# 1. Comprehensive testing
node tools/comprehensive-validation-test.js

# 2. Performance impact
node tools/performance-comparison.js

# 3. Integration verification  
node tools/integration-test-suite.js

# 4. Knowledge documentation
node tools/generate-mission-report.js
```

## Best Practices

### Code Changes
- Always test in your workspace first
- Monitor the specific endpoints/features you're modifying
- Create reproduction scripts for bugs
- Validate fixes with real data
- Document the root cause, not just the fix

### Performance Optimization
- Baseline current performance before changes
- Set specific improvement targets (e.g., 14.4s → 2s)
- Test under various load conditions
- Monitor memory and CPU usage
- Document optimization techniques used

### Error Handling
- Reproduce errors in controlled environment
- Create specific error test cases
- Implement graceful degradation
- Add comprehensive logging
- Test error recovery paths

### Documentation
Update these sections in KNOWLEDGE.md:
```markdown
## Task: [Your Current Task]
### Problem Statement
[Clear description of the issue]

### Root Cause Analysis  
[Technical explanation of why it occurs]

### Solution Implemented
[Detailed description of your fix]

### Validation Results
[Test results proving the fix works]

### Performance Impact
[Before/after metrics]

### Future Recommendations
[Suggestions for prevention/improvement]
```

## Tool Usage Examples

### WebSocket Monitoring
```javascript
// Monitor specific message types
const monitor = new WebSocketMonitor({
  messageFilter: (msg) => msg.type === 'wheel_data',
  errorTracking: true,
  performanceMetrics: true
});
```

### Performance Testing
```javascript
// Measure operation performance
const perfTest = new PerformanceTest({
  operation: 'wheel_generation',
  iterations: 100,
  warmup: 10,
  metrics: ['time', 'memory', 'cpu']
});
```

### Integration Testing
```javascript
// Full user story validation
const integrationTest = new IntegrationTest({
  scenario: 'user_creates_wheel',
  steps: ['login', 'send_message', 'receive_wheel'],
  validateEachStep: true
});
```

## Common Patterns

### Debugging WebSocket Issues
1. Start packet inspector for detailed view
2. Filter by specific client or message type
3. Check message structure validation
4. Verify backend processing
5. Test with minimal reproduction

### Fixing Performance Problems
1. Identify bottleneck with profiling
2. Measure baseline performance
3. Test optimization hypothesis
4. Validate no functionality regression
5. Document improvement percentage

### Resolving Integration Errors
1. Trace full message flow
2. Identify breaking point
3. Check data structure compatibility
4. Validate error handling
5. Test edge cases

## Success Criteria

Your work is complete when:
- [ ] All tests pass (100% success rate)
- [ ] Performance meets or exceeds targets
- [ ] No regression in existing functionality
- [ ] Documentation is comprehensive
- [ ] Knowledge base is updated
- [ ] Validation scripts are created

## Important Reminders

1. **You own the ai-workspace directory** - Feel free to create any tools you need
2. **Real-time feedback is your superpower** - Use it constantly
3. **Document everything** - Your findings help future AI agents
4. **Test with real data** - Synthetic tests may miss edge cases
5. **Performance matters** - Always measure impact

## Getting Help

If you encounter issues:
1. Check `KNOWLEDGE.md` for similar problems
2. Use enhanced debugging tools for deep inspection  
3. Create minimal reproduction scripts
4. Document the issue clearly
5. Suggest potential solutions

Remember: With great observability comes great development velocity. Use your tools wisely and document your journey for others who follow.