# Backend AI Context (ai-agents/backend/)

**Purpose**: This file gives AI assistants context about your backend/server-side code. Save this as `ai-agents/backend/AI-CONTEXT.md` in your project.

**Important**: This is SEPARATE from your actual code. Your normal backend folders stay exactly where they are. This exists solely to help AI assistants understand your backend setup.

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

## AI Context Files in This Area

### docs/KNOWLEDGE.md
Where we document:
- Database optimization techniques that worked
- Common API patterns and solutions
- Performance improvements and their impact
- Security lessons learned
- Integration challenges and solutions

### tests/ (if available)
- API endpoint tests
- Database operation tests
- Load testing scripts
- Integration tests with frontend

### tools/ (if available)
- Database query analyzers
- Performance monitoring scripts
- Load testing utilities
- Development and deployment helpers

## Getting Started on a Problem

### 1. Gather Information
- What exact error messages or symptoms are you seeing?
- Can you reproduce the issue consistently?
- What do the server logs show?
- Are there specific conditions that trigger the problem?

### 2. Check Our Knowledge Base
- Look in `docs/KNOWLEDGE.md` for similar backend issues
- Check if we've optimized similar functionality before
- See what database patterns have worked well
- Review any security or performance lessons

### 3. Investigate the Root Cause
- Use logging to trace the request flow
- Check database query performance
- Monitor resource usage (CPU, memory, database connections)
- Test with realistic data volumes

### 4. Implement and Test the Fix
- Make minimal, focused changes
- Test with single requests first, then concurrent requests
- Verify no existing functionality is broken
- Load test if it's a performance issue

### 5. Document the Solution
- Update `docs/KNOWLEDGE.md` with what was learned
- Include the problem, investigation process, and solution
- Note any patterns that could apply to future work

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
