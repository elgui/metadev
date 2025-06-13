# Backend AI Context & Tool Catalog (ai-agents/backend/)

**Purpose**: This file serves as both context about your backend and a catalog of AI-built monitoring and automation tools. Save this as `ai-agents/backend/AI-CONTEXT.md` in your project.

**Your Role as AI Agent**: You're the guardian of backend performance, reliability, and security. Build tools that provide real-time visibility into API performance, database efficiency, and system health. Every tool should prevent problems before they affect users.

**Important**: This is SEPARATE from your actual code. Your normal backend folders stay exactly where they are. This exists solely for AI agent collaboration and tooling.

## Your Project Setup

**Framework**: [Django 4.2 / FastAPI / Node.js + Express / Flask / etc.]  
**Database**: [PostgreSQL / MySQL / MongoDB / SQLite]  
**Main Technologies**: [Python 3.11, Redis, Celery, etc.]  
**Deployment**: [Heroku / AWS / DigitalOcean / Docker / etc.]  
**Current Status**: [Brief description of the API's current state]

### Key API Endpoints
1. **Authentication**: `/api/auth/` - User login, registration, password reset
2. **User management**: `/api/users/` - User profiles, settings, data
3. **Core functionality**: `/api/[main-feature]/` - [What your app primarily does]
4. **Admin operations**: `/api/admin/` - Admin-only functionality

### Performance Targets
- **Response time**: Under 200ms for 95% of requests
- **Throughput**: Handle 1000+ requests/second
- **Database queries**: Under 50ms average
- **Uptime**: 99.9% availability

## Your Actual Code Structure

**Note**: This describes your existing backend structure to help AI understand your project. Don't reorganize your actual code.

```
app/
├── models/              # Database models and schemas
├── views/               # API endpoints and business logic
├── serializers/         # Data validation and formatting (Django/DRF)
├── urls/                # URL routing
├── utils/               # Helper functions and utilities
├── tests/               # API and unit tests
├── migrations/          # Database migration files
└── settings/            # Configuration files
```

## Common Problems We Face

### Performance Issues
- **Slow queries**: Database operations taking too long
- **N+1 problems**: Making too many database calls
- **Memory usage**: Server running out of memory under load
- **Cache misses**: Expensive operations not being cached

### Database Problems
- **Query optimization**: Slow or inefficient SQL queries
- **Migration issues**: Database schema changes causing problems
- **Connection limits**: Too many database connections
- **Data consistency**: Race conditions or transaction issues

### Integration Issues
- **API errors**: Endpoints returning wrong data or error codes
- **Authentication failures**: Users can't log in or permissions are wrong
- **External API problems**: Third-party services failing or slow
- **Frontend compatibility**: API changes breaking frontend functionality

## What Good Success Looks Like

### For New API Endpoints
- Handles all expected inputs correctly
- Returns consistent, well-formatted responses
- Includes proper error handling for edge cases
- Performs well under realistic load (multiple concurrent users)
- Includes authentication/authorization as needed

### For Bug Fixes
- Issue is completely resolved for all affected users
- Root cause is identified and documented
- Fix doesn't introduce performance regressions
- Similar issues can be prevented in the future

### For Performance Work
- Measurable improvement (response times, throughput, etc.)
- No negative impact on functionality or reliability
- Improvement holds up under realistic load testing
- Optimization technique can be applied elsewhere

## How to Help Me Effectively

### When You're Helping with Backend Issues
1. **Read this file first** so you understand our backend setup
2. **Include specific error messages** - exact text from logs or error responses
3. **Describe the conditions** - when does this happen, how often, which users
4. **Show what I've investigated** - what logs I checked, what I tested

### Example of a Good Request to You
```
I'm working with the backend of our application. I've read the AI context - you know we use Django with PostgreSQL.

PROBLEM: When multiple users try to create accounts at the same time, 
some get "IntegrityError: duplicate key value violates unique constraint" 
even though they're using different email addresses.

WHEN IT HAPPENS:
- During peak signup times (3+ registrations within a few seconds)
- About 20% failure rate when this occurs
- Affected users can retry successfully a few seconds later

WHAT I'VE CHECKED:
- Database logs show constraint violation on email field
- User table has unique constraint on email column
- Frontend is sending different email addresses (checked request logs)
- Issue doesn't happen with single requests

WHAT SUCCESS LOOKS LIKE:
- 100% success rate for concurrent valid registrations
- Response time stays under 300ms
- No race conditions or duplicate key errors
- Existing single-user registration still works perfectly
```

## AI Tool Catalog & Backend Mastery

**Your Mission**: Build and maintain tools that ensure backend reliability, performance, and security. Each tool should provide actionable insights and prevent production issues through continuous monitoring and automated analysis.

### 🔧 Available Tools (tools/)

#### Core System Monitoring
- **`api-health-monitor.js`** - Monitors endpoint response times, error rates, uptime
  - **When to use**: Continuous monitoring, before/after deployments
  - **Usage**: `node tools/api-health-monitor.js watch --endpoints=/api/users,/api/auth`
  - **Maintenance**: Add new endpoints as APIs grow, update alert thresholds

- **`database-performance-tracker.py`** - Analyzes query performance, connection usage, slow queries
  - **When to use**: Daily health checks, performance optimization sessions
  - **Usage**: `python tools/database-performance-tracker.py analyze --duration=1h`
  - **Maintenance**: Update query analysis patterns, add new performance metrics

- **`load-tester.js`** - Simulates realistic user traffic and measures system behavior
  - **When to use**: Before major releases, capacity planning
  - **Usage**: `node tools/load-tester.js run --concurrent=50 --duration=300s`
  - **Maintenance**: Update test scenarios based on real usage patterns

#### Security & Reliability Tools
- **`security-scanner.py`** - Scans for common vulnerabilities, checks dependencies
  - **When to use**: Before deployments, after dependency updates
  - **Usage**: `python tools/security-scanner.py scan --full`
  - **Maintenance**: Update vulnerability patterns, add new security checks

- **`error-analyzer.js`** - Categorizes and analyzes backend errors and exceptions
  - **When to use**: Daily error review, incident investigation
  - **Usage**: `node tools/error-analyzer.js analyze --since=24h`
  - **Maintenance**: Improve error pattern recognition, add root cause analysis

#### Database & Query Optimization
- **`query-optimizer.py`** - Identifies slow queries and suggests optimizations
  - **When to use**: Performance optimization sessions, regular maintenance
  - **Usage**: `python tools/query-optimizer.py analyze --min-time=100ms`
  - **Maintenance**: Add new optimization strategies, update index recommendations

- **`migration-validator.py`** - Tests database migrations for safety and performance
  - **When to use**: Before applying database migrations
  - **Usage**: `python tools/migration-validator.py test --migration=0001_initial.py`
  - **Maintenance**: Add new validation rules, improve rollback safety checks

#### API Development & Testing
- **`api-contract-tester.js`** - Validates API responses match documented contracts
  - **When to use**: After API changes, continuous integration
  - **Usage**: `node tools/api-contract-tester.js validate --spec=openapi.json`
  - **Maintenance**: Update API specs, add new validation rules

- **`dependency-health-checker.js`** - Monitors external API dependencies and services
  - **When to use**: Continuous monitoring, troubleshooting integration issues
  - **Usage**: `node tools/dependency-health-checker.js monitor`
  - **Maintenance**: Add new dependencies, update health check criteria

### 🔄 Backend Tool Development Lifecycle

#### When to Build New Backend Tools
1. **Performance Blind Spots**: Need visibility into system bottlenecks
2. **Security Gaps**: Want to catch vulnerabilities before exploitation
3. **Reliability Issues**: Need to prevent or quickly detect outages
4. **Scale Preparation**: Want to understand system behavior under load
5. **Development Efficiency**: Automate repetitive backend tasks

#### Backend Tool Creation Template
```python
# Template for new backend monitoring tools
class NewBackendTool:
    def __init__(self, config):
        self.config = config
        self.metrics_collector = MetricsCollector()
        self.alerting = AlertingSystem()
        self.setup_logging()
    
    async def monitor(self):
        # Core monitoring logic
        # Always include: metrics collection, threshold checking, alerting
        pass
    
    async def analyze(self, timeframe):
        # Historical analysis and trend detection
        # Always include: pattern recognition, performance trends
        pass
    
    def generate_insights(self):
        # Actionable recommendations
        # Always include: specific actions, priority levels, impact estimates
        pass
```

#### Backend Tool Maintenance Standards
1. **Performance Aware**: Tools must not impact production performance
2. **Security Conscious**: Tools should enhance, not compromise, security
3. **Scale Ready**: Tools must work as the system grows
4. **Integration Friendly**: Easy to use in CI/CD and deployment workflows

### 📊 Backend Tool Usage Patterns

#### Daily Operations Workflow
```bash
# Morning health check
node tools/api-health-monitor.js status
python tools/database-performance-tracker.py overnight-summary
node tools/error-analyzer.js analyze --since=24h

# Before deployments
python tools/security-scanner.py scan
node tools/api-contract-tester.js validate
python tools/migration-validator.py test

# After deployments
node tools/load-tester.js quick-test
node tools/api-health-monitor.js post-deploy-check
```

#### Performance Optimization Sessions
```bash
# Identify bottlenecks
python tools/database-performance-tracker.py analyze --deep
python tools/query-optimizer.py recommendations
node tools/api-health-monitor.js performance-report

# Test optimizations
node tools/load-tester.js before-after --baseline=baseline.json
```

#### Incident Response
```bash
# When issues are detected
node tools/error-analyzer.js emergency --live
node tools/dependency-health-checker.js status
python tools/database-performance-tracker.py incident-mode
```

## AI Workspace Documentation Standards

**Your Responsibility**: Maintain this AI-CONTEXT.md file as the authoritative source of truth for this workspace. This file MUST be updated at the end of every session.

### Mandatory End-of-Session Updates

#### Tool Catalog Maintenance
- **New Tools**: Add any tools created during the session to the catalog
- **Tool Enhancements**: Document improvements made to existing tools
- **Usage Patterns**: Update tool usage examples based on new discoveries
- **Performance Insights**: Note any performance improvements or bottlenecks discovered

#### Documentation Quality Standards
- **Accuracy**: All information must be current and correct
- **Completeness**: No gaps in tool descriptions or usage instructions
- **Clarity**: All entries must be immediately actionable
- **Authority**: This file is the definitive reference for this workspace

#### Required Updates Checklist
```markdown
## Session Update: [Date]
### Tools Added/Enhanced:
- [Tool name]: [What was added/changed]

### System Insights Gained:
- [Key discoveries about backend performance, security, or reliability]

### Documentation Improvements:
- [How this file or KNOWLEDGE.md was enhanced]

### Infrastructure Evolution:
- [How the backend monitoring/tooling infrastructure became more capable]
```

### KNOWLEDGE.md Standards

Each entry in docs/KNOWLEDGE.md MUST include:
- **System Pattern**: What type of backend issue this solves
- **Tool Evolution**: How monitoring/analysis tools were enhanced or created
- **Solution Authority**: Definitive fix with clear implementation steps
- **Scalability Impact**: How this affects system performance under load
- **Security Considerations**: Any security implications or improvements
- **Tool Integration**: How new/enhanced tools fit into existing monitoring infrastructure

## AI Agent Backend Problem-Solving Methodology

### 1. Deploy Monitoring Arsenal
- **Immediate instrumentation**: Start all relevant monitoring tools
- **Capture baseline**: `node tools/api-health-monitor.js baseline`
- **Database analysis**: `python tools/database-performance-tracker.py current-state`
- **Error tracking**: `node tools/error-analyzer.js monitor --live`

### 2. Build Problem-Specific Tools
- **Reproduction tooling**: Create automated scripts to trigger the issue
- **Deep monitoring**: Build specialized tools for the specific problem domain
- **Example**: For auth issues, create `auth-flow-tracer.py`
```python
class AuthFlowTracer:
    async def trace_login_request(self, user_data):
        # Track full authentication flow
        # Measure timing at each step
        # Capture error conditions
        pass
```

### 3. Tool-Driven Investigation
- **Performance analysis**: Use query optimizer and performance tracker
- **Security scanning**: Run security tools to check for vulnerabilities
- **Load simulation**: Test under realistic conditions with load tester
- **Dependency health**: Check if external services are causing issues

### 4. Implement with Real-Time Feedback
- **Before changes**: Establish performance baselines with tools
- **During implementation**: Monitor tools for immediate impact feedback
- **Testing phase**: Use load tester and API contract tester for validation
- **Rollback readiness**: Have monitoring in place to detect issues quickly

### 5. Enhance Monitoring Infrastructure
- **Update existing tools**: Improve detection of similar issues
- **Create prevention tools**: Build monitoring to catch this class of problems
- **Automate checks**: Add new validations to deployment pipeline
- **Share learnings**: Update tool documentation and usage patterns

### 6. Tool-Enhanced Knowledge Capture
Update `docs/KNOWLEDGE.md` with:
```markdown
## Backend Issue: [Problem Name]
**Detection Tools**: Which monitoring caught this (or should have)
**Investigation Tools**: What specialized tools were needed
**Root Cause**: Technical explanation with supporting tool data
**Solution**: Implementation details and tool-measured improvements
**Prevention**: New monitoring/tools to prevent recurrence
**Tool Evolution**: How the monitoring infrastructure was enhanced
```

## Common Tools and Commands

### Development
```bash
python manage.py runserver    # Start development server (Django)
python manage.py test          # Run tests
python manage.py migrate       # Apply database migrations
python manage.py shell         # Interactive Python shell with Django context
```

### Database Operations
```bash
# Django examples
python manage.py dbshell           # Direct database access
python manage.py makemigrations    # Create new migrations
python manage.py showmigrations    # Show migration status

# Check slow queries (PostgreSQL)
# Add this to PostgreSQL config: log_min_duration_statement = 100
# Then check logs for slow queries
```

### Performance and Debugging
```bash
# Install and use Django Debug Toolbar for development
pip install django-debug-toolbar

# Profile database queries in Django shell
from django.db import connection
# ... run your code ...
print(connection.queries)

# Check API endpoint performance
curl -o /dev/null -s -w "Total time: %{time_total}s\n" http://localhost:8000/api/users/
```

## Common Backend Optimizations

### Query Optimization
```python
# Bad: N+1 query problem
users = User.objects.all()
for user in users:
    print(user.profile.bio)  # Triggers separate query for each user

# Good: Use select_related or prefetch_related
users = User.objects.select_related('profile').all()
for user in users:
    print(user.profile.bio)  # Single query with JOIN
```

### Indexing
```python
# Add database indexes for commonly queried fields
class User(models.Model):
    email = models.EmailField(unique=True, db_index=True)
    created_at = models.DateTimeField(auto_now_add=True, db_index=True)
    
    class Meta:
        indexes = [
            models.Index(fields=['email', 'created_at']),  # Composite index
        ]
```

### Caching
```python
# Cache expensive operations
from django.core.cache import cache

def get_user_stats(user_id):
    cache_key = f'user_stats_{user_id}'
    stats = cache.get(cache_key)
    if stats is None:
        stats = calculate_expensive_stats(user_id)
        cache.set(cache_key, stats, timeout=300)  # 5 minutes
    return stats
```

## API Design Patterns That Work

### Consistent Response Format
```python
# Always return consistent response structure
{
    "success": true,
    "data": { ... },
    "message": "Operation completed successfully",
    "errors": []
}
```

### Proper Error Handling
```python
# Include meaningful error messages and appropriate HTTP status codes
try:
    user = User.objects.get(email=email)
except User.DoesNotExist:
    return Response(
        {"success": false, "message": "User not found"}, 
        status=404
    )
```

### Pagination for Large Datasets
```python
# Don't return all records at once
from rest_framework.pagination import PageNumberPagination

class StandardResultsSetPagination(PageNumberPagination):
    page_size = 20
    page_size_query_param = 'page_size'
    max_page_size = 100
```

## Integration with Other AI Context Areas

### When Frontend Needs API Changes
Document the change clearly in AI-PROJECT-OVERVIEW.md:
```markdown
## API Update: [Endpoint Name]
**Change**: [What's being modified]
**Reason**: [Why this change is needed]
**Breaking Change**: [Yes/No - and migration plan if yes]
**New Response Format**: [Example of new response]
**Timeline**: [When this will be deployed]
```

### When Admin Context Area Needs New Data Access
Consider admin-specific endpoints:
```markdown
## Admin API: [Feature Name]
**Purpose**: [What admin functionality this enables]
**Endpoints**: [List of new admin-only endpoints]
**Security**: [Admin authentication/authorization requirements]
**Data Volume**: [Expected data sizes and performance considerations]
```

## Security Checklist

### Input Validation
- Validate all user inputs
- Sanitize data before database operations
- Use parameterized queries to prevent SQL injection
- Implement rate limiting for API endpoints

### Authentication & Authorization
- Require authentication for protected endpoints
- Implement proper role-based access control
- Use secure session management
- Log authentication events

### Data Protection
- Encrypt sensitive data in database
- Use HTTPS for all communications
- Implement proper CORS policies
- Handle user data according to privacy regulations

## Important Reminders

### This is AI Context Only
- This file exists to help AI assistants understand your backend
- Your actual code stays in your normal project structure
- Don't move your models, views, or other code here
- This `ai-agents/backend/` folder is separate from your development work

### Focus on Real Problems
- Include your actual issues, not hypothetical ones
- Update this file based on what actually helps with AI assistance
- Document real solutions that worked in your KNOWLEDGE.md

### Keep It Current
- Update this file when your tech stack changes
- Add new common problems as they emerge
- Remove outdated information that no longer applies
- Keep examples relevant to your current setup

---

**Remember**: This AI context area is about making your interactions with AI assistants more effective. Focus on providing the context that helps AI understand your specific backend setup and constraints.
