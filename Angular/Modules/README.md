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