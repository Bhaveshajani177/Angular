# Angular <img align="right" src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" width="50" height="50"/>

1. [Angular CLI Cheat Sheet](https://github.com/Bhaveshajani177/Angular/blob/main/Angular%20CLI%20Cheat%20Sheet/README.md)
2. [main.ts file explanation](https://github.com/Bhaveshajani177/Angular/blob/main/Main.ts%20File/README.md)
3. [Different Ways to Use Interpolation](https://stackblitz.com/edit/angular-ivy-9omnsc?file=src%2Fapp%2Fapp.component.ts)

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

# Important Points:
- ng serve -> call ```environment.ts file``` -> production: false
- ng build	-> call ```environment.prod.ts``` -> production: true
- main.ts -> entry point
- first priority is ```templateUrl``` rather than ```template```.
- first priority is ```styles``` rather than ```styleUrls```.
- ```npm start``` == ```ng serve```
