# Naming Conventions

## UpperCamelCase For:
- class
- interface
- type
- enum
- decorator
- type parameters

## lowerCamelCase For:
- variable
- parameter
- function
- method
- property
- module alias

## CONSTANT_CASE:
- global constant values, including enum values

## Constants:
- CONSTANT_CASE indicates that a value is intended to not be changed
- the uppercase shows users to not modify it.
  ```ts
  const UNIT_SUFFIXES = {
    'milliseconds': 'ms',
    'seconds': 's',
  };
  ```

## Variables:
- Always use const or let to declare variables. Use const by default, unless a variable needs to be reassigned. Never use var.
  ```js
  const foo = otherValue;  // Use if "foo" never changes.
  let bar = someValue;     // Use if "bar" is ever assigned into later on.
  ```
- const and let are block scoped, like variables in most other languages.
- var in JavaScript is function scoped, which can cause difficult to understand bugs. Don't use it.

## Exceptions:
- Always use new Error() when instantiating exceptions, instead of just calling Error().
- Both forms create a new Error instance, but using new is more consistent with how other objects are instantiated.
  ```ts
  throw Error('Foo is not a valid bar.'); // bad
  throw new Error('Foo is not a valid bar.'); // good
  ```
## Component Files:
- Typically components have 3 files — .ts, .scss/css and .html files. If your component needs all 3 files then you should place them in a folder that corresponds with the component name, for example:
  ```ts
  user-list.component.ts
  user-list.component.css
  user-list.component.html
  ```
- All go in a folder named user-list.

## Comments:
- There are two types of comments, JSDoc (/** ... */) and non-JSDoc ordinary comments (// ... or /* ... */).
  - Use /** JSDoc */ comments for documentation, i.e. comments a user of the code should read.
  - Use // line comments for implementation comments, i.e. comments that only concern the implementation of the code itself.
- JSDoc comments are understood by tools (such as editors and documentation generators), while ordinary comments are only for other humans.

## Selectors:
- Selectors for your components should always be dash-delimited, like files, and contain the appropriate app prefix.
  ```ts
  <app-customer-navbar></app-customer-navbar>
  ```
- Module classes should always end with the term Module so that it is clear what functionality is encapsulated by this class/module.
  ```ts
  export class ShippingLaneModule {}
  ```
- All service classes should end with the term Service.
  ```ts
  export class ShippingLaneService {}
  ```

## Notes:
- Components should be suffixed with .component.ts;
- Directives should be suffixed with .directive.ts;
- Pipes should be suffixed with .pipe.ts;
- Guards should be suffixed with .guard.ts;
- Interceptors should be suffixed with .interceptor.ts;
- Modules should be suffixed with .module.ts;
- Routing Modules should be suffixed with -routing.module.ts;
