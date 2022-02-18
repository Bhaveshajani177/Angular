# Angular <img align="right" src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" width="50" height="50"/>

1. [Angular CLI Cheat Sheet](https://github.com/Bhaveshajani177/Angular/blob/main/Angular%20CLI%20Cheat%20Sheet/README.md)
2. [main.ts file explanation](https://github.com/Bhaveshajani177/Angular/blob/main/Main.ts%20File/README.md)
3. [Different Ways to Use Interpolation](https://stackblitz.com/edit/angular-ivy-9omnsc?file=src%2Fapp%2Fapp.component.ts)
4. [Angular Style Guide](https://github.com/Bhaveshajani177/Angular/blob/main/Angular%20Style%20Guide/README.md)
5. [Property Binding Example](https://stackblitz.com/edit/angular-ivy-9omnsc?file=src%2Fapp%2Fapp.component.ts)
6. [Event Binding Example](https://stackblitz.com/edit/angular-ivy-9omnsc?file=src%2Fapp%2Fapp.component.ts)
7. [Ways To Convert String Into Number](https://github.com/Bhaveshajani177/Angular/blob/main/Ways%20To%20Convert%20String%20Into%20Number/script.js)<br />
8. TypeSscript:<br />
    &nbsp;8.1. [Variables](https://github.com/Bhaveshajani177/Angular/blob/main/TypeSscript%20Code%20Practice/Variables/variables.ts)<br />
    &nbsp;8.2. [Array](https://github.com/Bhaveshajani177/Angular/blob/main/TypeSscript%20Code%20Practice/Array/array.ts)<br />
    &nbsp;8.3. [Classes](https://github.com/Bhaveshajani177/Angular/blob/main/TypeSscript%20Code%20Practice/Classes/BankAccount.ts)<br />
    &nbsp;8.4. [Objects](https://github.com/Bhaveshajani177/Angular/tree/main/TypeSscript%20Code%20Practice/Objects)<br />
    &nbsp;8.5. [Interface](https://github.com/Bhaveshajani177/Angular/blob/main/TypeSscript%20Code%20Practice/Interface/interface.ts)<br />
    &nbsp;8.6. [Generics](https://github.com/Bhaveshajani177/Angular/blob/main/TypeSscript%20Code%20Practice/Generics/Queue.ts)<br />

# Notes:

### platformBrowserDynamic:
- platformBrowserDynamic is a function used to bootstrap an Angular application.
- contains the client side code that processes templates (bindings, components, ...) and reflective dependency injection.
- Using the dynamic platform makes angular sending the Just-in-Time compiler to the front-end as well as your application. Which means your application is being compiled on client-side.

### CommonModule:
- Exports all the basic Angular directives and pipes, such as NgIf, NgForOf, DecimalPipe and so on.
- CommonModule is a module that provides all kinds of services and directives.
- Re-exported by BrowserModule, which is included automatically in the root AppModule when you create a new app with the CLI new command.
- CommonModule is platform-independent.
- CommonModule can be imported everywhere.

### BrowserModule:
- Exports required infrastructure for all Angular apps.
- BrowserModule exports CommonModule and provides a few services, specific to the browser platform.
- BrowserModule should only be imported in AppModule.

### NgModules:
- An NgModule is a class marked by the @NgModule decorator.
- @NgModule takes a metadata object that describes how to compile a component's template and how to create an injector at runtime.
- NgModules consolidate components, directives, and pipes into cohesive blocks of functionality.
- Modules can also add services to the application.
- List of Decorator that marks a class as an NgModule:
  - ```providers```: The set of injectable objects that are available in the injector of this module.
  - ```declarations```: The set of components, directives, and pipes (declarables) that belong to this module.
  - ```imports```: The set of NgModules whose exported declarables are available to templates in this module.
  - ```bootstrap```: The set of components that are bootstrapped when this module is bootstrapped.
  - ```entryComponents```: The set of components to compile when this NgModule is defined, so that they can be dynamically loaded into the view.

### polyfills:
- Angular is built on the latest standards of the web platform. Targeting such a wide range of browsers is challenging because they do not support all features of modern browsers. You compensate by loading polyfill scripts ("polyfills") for the browsers that you must support.

### Interpolation "{{}}":
- Text interpolation lets you incorporate dynamic string values into your HTML templates.
- Use interpolation to dynamically change what appears in an application view.
- [Read More](https://angular.io/guide/interpolation#resolving-expressions-with-interpolation)

### Just-in-Time:
- Larger file size
- Loads slower since compiler needs to run in browser.
- Catch errors in browser

### Ahead-of-Time:
- Small file size
- Loads faster since the app is compiled on delivery to the browser.
- Catch errors on the server

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

# Important Points:
- ng serve -> call ```environment.ts file``` -> production: false
- ng build	-> call ```environment.prod.ts``` -> production: true
- main.ts -> entry point
- first priority is ```templateUrl``` rather than ```template```.
- first priority is ```styles``` rather than ```styleUrls```.
- ```npm start``` == ```ng serve```
- Use brackets [] instead of new Array().
- Use curly braces {} instead of new Object().
- ```|``` = Pipe character
- ```?``` = optional parameter
- Prefix ```ng``` stands for ```Angular```
