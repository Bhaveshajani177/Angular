# Angular <img align="right" src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" width="50" height="50"/>

### TypeScript:
- Typescript is a Javascript superset.
- It offers more features than Javascript like classes, interfaces, types.
- Uses strong typing(you define if something is a string, number etc).
- TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor.
- TypeScript code converts to JavaScript, which runs anywhere JavaScript runs.
- Advantages of TypeScript:
  - **Strict typing**
  - **Type annotations:** A handy way of saying explicitly what type should be used.
  - **Type inference:** Implicit typing performed by TypeScript itself, so that your developers don’t need to provide types where the compiler can find them on its own.
  - **Types make code management easier**

### Type Assertion:
- type assertion is a mechanism which tells the compiler about the type of a variable.
- Type assertion is explicitly telling the compiler that we want to treat the entity as a different type. It allows us to treat any as a number, or number as a string. 
- Type assertion is commonly used when we are migrating over code from JavaScript to TypeScript.
- TypeScript provides two ways to do Type Assertion. They are
  - Using Angular Bracket <>
  - Using **as** keyword
- Angular Bracket <>:
  ```ts
  let code: any = 123;
  let employeeCode = <number> code;
  console.log(typeof(employeeCode)); //Output: number
  ```
- Using **as** keyword:
  ```ts
  let code: any = 123;
  let employeeCode = code as number;
  ```
