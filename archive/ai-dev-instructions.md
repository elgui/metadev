# AI Agent Instructions: Developing the AI Coding Strategy Framework

## Your Mission

You are developing the core AI Coding Strategy framework that enables AI agents to have full observability of their actions. Your workspace is `ai-workspace/` and you have complete autonomy within this directory.

## Core Principles

1. **Observability First**: Every tool must provide real-time feedback
2. **Self-Validation**: All changes must be testable programmatically  
3. **Knowledge Preservation**: Document findings in KNOWLEDGE.md
4. **Performance Awareness**: Track and optimize execution times
5. **Error Resilience**: Graceful handling of all failure modes

## Development Standards

### Tool Creation
```javascript
// Every tool must follow this pattern
class AITool {
  constructor(config) {
    this.config = config;
    this.metrics = { startTime: Date.now(), operations: 0 };
    this.initializeLogging();
    this.validateEnvironment();
  }
  
  async execute() {
    const operationId = this.startOperation();
    try {
      const result = await this.performTask();
      this.recordSuccess(operationId, result);
      return result;
    } catch (error) {
      this.recordFailure(operationId, error);
      throw error;
    }
  }
}
```

### Testing Requirements
- Create `test-[feature].js` for every new capability
- Include positive and negative test cases
- Test with real data whenever possible
- Measure performance impact
- Document edge cases discovered

### Documentation Protocol
Update these files with every change:
- `KNOWLEDGE.md` - Technical findings and insights
- `MISSION_COMPLETION_CHECKLIST.md` - Progress tracking
- `TESTING_STRATEGY.md` - Test approach for new features
- Tool-specific `.md` files for complex implementations

## Available Capabilities

### WebSocket Monitoring
- Real-time message inspection
- Client connection tracking
- Performance metrics collection
- Error pattern detection

### Performance Analysis
- Bottleneck identification
- Timing measurements
- Resource utilization tracking
- Optimization recommendations

### Testing Infrastructure
- Automated validation suites
- Load testing capabilities
- Integration test runners
- Regression detection

## Implementation Guidelines

### Adding New Monitoring Capabilities
1. Identify the observability gap
2. Create minimal proof-of-concept
3. Test with real project data
4. Measure performance overhead
5. Document configuration options
6. Update dashboard if applicable

### Enhancing Existing Tools
1. Run comprehensive validation first
2. Identify specific improvement areas
3. Implement changes incrementally
4. Validate each change independently
5. Update all affected documentation
6. Performance test before/after

### Creating Project Templates
1. Extract common patterns from successful implementations
2. Create configurable base tools
3. Document customization points
4. Include example configurations
5. Test across different project types

## Performance Targets

All tools must meet these criteria:
- Startup time: < 500ms
- Memory overhead: < 50MB
- CPU usage: < 5% during monitoring
- Network overhead: < 1% of monitored traffic
- Log file size: < 100MB per day

## Error Handling Standards

```javascript
// Required error handling pattern
try {
  await riskyOperation();
} catch (error) {
  logger.error('Operation failed', {
    error: error.message,
    stack: error.stack,
    context: currentContext,
    recovery: recoveryStrategy
  });
  
  if (isRecoverable(error)) {
    await attemptRecovery();
  } else {
    await gracefulShutdown();
  }
}
```

## Knowledge Management

### What to Document
- Root cause of issues discovered
- Performance optimization techniques
- Integration challenges and solutions
- Reusable patterns identified
- Tool limitation workarounds

### How to Document
```markdown
## Discovery: [Title]
**Date**: YYYY-MM-DD
**Context**: What led to this discovery
**Finding**: Detailed technical explanation
**Impact**: How this affects development
**Solution**: Implemented fix or workaround
**Future**: Recommendations for framework improvement
```

## Continuous Improvement

After each major feature:
1. Run full test suite
2. Measure performance impact
3. Update documentation
4. Create example usage
5. Consider abstraction opportunities
6. Plan next iteration

## Security Considerations

- Never log sensitive data
- Sanitize all user inputs
- Use secure WebSocket connections in production
- Implement rate limiting
- Add authentication where needed

Remember: Your work enables other AI agents to develop with confidence. Every tool you create should reduce debugging time and increase development velocity.