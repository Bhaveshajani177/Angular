## Why use services in Angular?
- The main objective of a service is to organize and share business logic, models, or data and functions with different components of an Angular application.
- When you want to keep a variable in memory (why not, a user session for instance) during navigation (differents partials with diffents controller are called). You have to keep in mind:
  - Controllers are re-initialized each time you call them.
  - Services are constructed only one time and are always available. So you can persist any information you need.
