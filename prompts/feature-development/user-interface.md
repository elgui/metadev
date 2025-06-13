# High-Impact Feature Development Prompt

Use this template when building new features that span multiple layers or have significant user impact.

## Template

```markdown
MISSION: Build [specific feature] that [specific user outcome]

WORKSPACE: [client-workspace | admin-workspace | backend-workspace]

You are the owner of this entire AI workspace - responsible for all tools, documentation, and capabilities within it.

CONTEXT:
- Current user pain point: [describe the problem users are experiencing]
- Business impact: [why this feature matters to the business]
- Technical constraints: [any limitations to consider]
- Integration points: [which other workspaces this affects]

SUCCESS METRICS:
- Performance: [specific numbers - response times, load times]
- Functionality: [specific behaviors that must work]
- Quality: [testing coverage, error handling requirements]
- User Experience: [usability improvements, user satisfaction targets]

TECHNICAL REQUIREMENTS:
- [Specific technical requirements relevant to your workspace]
- [Integration requirements with other layers]
- [Security/compliance requirements]
- [Scalability/performance requirements]

CONSTRAINTS:
- Must integrate with: [existing systems, APIs, databases]
- Cannot break: [existing functionality that must remain stable]
- Timeline: [deadline or urgency level]
- Resources: [any resource limitations]

AS THE AI WORKSPACE OWNER:

**PHASE 1: TOOL INVENTORY & CAPABILITY ASSESSMENT**
1. **Audit existing tools**: Review the AI-CONTEXT.md tool catalog - which tools can support this feature development?
2. **Deploy relevant tools**: Start existing monitoring and development tools that apply to this feature domain
3. **Identify capability gaps**: What development/testing capabilities are missing that existing tools don't provide?

**PHASE 2: TOOL ENHANCEMENT OR CREATION**
4. **Enhance existing tools FIRST**: Can current tools be improved to support this feature development?
5. **Create new tools only if necessary**: Build new development tools only when existing ones cannot be enhanced
6. **Follow development tool standards**: Ensure all tools support feature validation and monitoring

**PHASE 3: FEATURE DEVELOPMENT WITH MONITORING**
7. **Develop with tool validation**: Build feature incrementally while tools provide real-time feedback
8. **Test with comprehensive tooling**: Validate feature works using full tool suite
9. **Performance validate**: Ensure feature meets performance targets using measurement tools

**PHASE 4: WORKSPACE MAINTENANCE (MANDATORY)**
10. **Update tool catalog**: Add new tools and document enhancements in AI-CONTEXT.md
11. **Enhance documentation**: Improve KNOWLEDGE.md with both feature implementation AND development tooling evolution
12. **Maintain workspace authority**: Ensure all development documentation is clean, accurate, and authoritative
13. **Feature integration documentation**: Update AI-CONTEXT.md with new capabilities and usage patterns

You have full ownership and responsibility for everything in this AI workspace. BEGIN with Phase 1: audit existing development tools before creating anything new.
```

## Example Usage

### Frontend Feature Example
```markdown
MISSION: Build real-time notification system that keeps users engaged with timely updates

WORKSPACE: client-workspace

CONTEXT:
- Current user pain point: Users miss important updates and don't return to the app
- Business impact: 40% improvement in user retention expected
- Technical constraints: Must work on mobile with poor network connections
- Integration points: Requires backend WebSocket support, admin notification management

SUCCESS METRICS:
- Performance: Notifications appear within 100ms of server event
- Functionality: Push notifications, in-app notifications, notification history
- Quality: 100% delivery rate, graceful offline handling
- User Experience: Non-intrusive, customizable notification preferences

TECHNICAL REQUIREMENTS:
- WebSocket connection with automatic reconnection
- Service Worker for push notifications when app is closed
- Local storage for offline notification queue
- Responsive notification UI for all device sizes

CONSTRAINTS:
- Must integrate with: Existing user authentication system
- Cannot break: Current app performance (maintain 60fps)
- Timeline: 2 weeks for MVP
- Resources: Cannot increase bundle size by more than 50KB

AI AGENT INSTRUCTIONS:
[Follow template instructions above]
```

### Backend API Example
```markdown
MISSION: Build high-performance search API that enables instant results across large datasets

WORKSPACE: backend-workspace

CONTEXT:
- Current user pain point: Search takes 5+ seconds, users abandon searches
- Business impact: Search abandonment costs ~$50k/month in lost conversions
- Technical constraints: Database has 10M+ records and growing 100k/month
- Integration points: Frontend search interface, admin search analytics

SUCCESS METRICS:
- Performance: Search results in <100ms for 95% of queries
- Functionality: Full-text search, filters, pagination, autocomplete
- Quality: Relevant results ranked properly, no false positives
- User Experience: Instant search-as-you-type feedback

TECHNICAL REQUIREMENTS:
- Elasticsearch integration for full-text search
- Redis caching for popular searches
- Rate limiting to prevent abuse
- Comprehensive search analytics

CONSTRAINTS:
- Must integrate with: Existing PostgreSQL database, current authentication
- Cannot break: Current API endpoints (maintain backward compatibility)
- Timeline: 3 weeks including testing and deployment
- Resources: Cannot exceed current database connection limit

AI AGENT INSTRUCTIONS:
[Follow template instructions above]
```

### Admin Dashboard Example
```markdown
MISSION: Build admin analytics dashboard that provides actionable business insights

WORKSPACE: admin-workspace

CONTEXT:
- Current user pain point: Admins manually export data for analysis, takes hours
- Business impact: Real-time insights could improve decision speed by 5x
- Technical constraints: Need to handle 1M+ data points efficiently
- Integration points: Backend analytics APIs, export functionality

SUCCESS METRICS:
- Performance: Dashboard loads in <2s with 100k+ data points
- Functionality: Interactive charts, filtering, date ranges, export
- Quality: Data accuracy 100%, real-time updates every 30s
- User Experience: Intuitive navigation, mobile-responsive design

TECHNICAL REQUIREMENTS:
- Chart.js or D3.js for performant data visualization
- Virtual scrolling for large data tables
- WebSocket for real-time data updates
- CSV/PDF export for data sharing

CONSTRAINTS:
- Must integrate with: Backend analytics APIs, existing admin authentication
- Cannot break: Current admin panel functionality
- Timeline: 2 weeks for initial version
- Resources: Must work smoothly on admin team's older laptops

AI AGENT INSTRUCTIONS:
[Follow template instructions above]
```

## Customization Tips

### Adjust Success Metrics for Your Context
- **Startup/MVP**: Focus on functionality over performance initially
- **Enterprise**: Emphasize security, compliance, scalability
- **High-traffic**: Performance and reliability are paramount
- **B2B**: Admin experience and business intelligence features

### Modify Technical Requirements by Stack
- **React**: Component reusability, state management patterns
- **Vue**: Composition API usage, reactive data patterns  
- **Angular**: Service architecture, RxJS patterns
- **Django**: ORM optimization, caching strategies
- **FastAPI**: Async patterns, dependency injection
- **Node.js**: Event loop optimization, memory management

### Scale Constraints by Team Size
- **Solo developer**: Focus on rapid prototyping and learning
- **Small team**: Emphasize documentation and knowledge sharing
- **Large team**: Add coordination requirements and code review checkpoints
- **Distributed team**: Include communication and handoff protocols

## Common Variations

### MVP/Prototype Version
Add to constraints:
```
- MVP approach: Focus on core functionality, optimize later
- Learning goal: [specific technology or pattern to explore]
- Feedback target: [specific user group to validate with]
```

### Performance-Critical Version
Add to success metrics:
```
- Load testing: Must handle [X]x normal traffic without degradation
- Error tolerance: <0.01% error rate under peak load
- Resource efficiency: Memory usage must not exceed [X]MB
```

### Security-Sensitive Version
Add to technical requirements:
```
- Security audit: All inputs validated and sanitized
- Authentication: Multi-factor authentication support
- Compliance: [GDPR/HIPAA/SOC2] compliance requirements
- Audit trail: Complete logging of all user actions
```

This template provides a structured approach that gives AI agents clear direction while ensuring they have the context and constraints needed to deliver production-ready features.
