# Angular <img align="right" src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" width="50" height="50"/>


# Notes:

### platformBrowserDynamic:
- platformBrowserDynamic is a function used to bootstrap an Angular application.
- contains the client side code that processes templates (bindings, components, ...) and reflective dependency injection.
- Using the dynamic platform makes angular sending the Just-in-Time compiler to the front-end as well as your application. Which means your application is being compiled on client-side.

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

### @ViewChild:
- Property decorator that configures a view query.
- The ViewChild decorator is used to gain access to a child component, found in the template, so that you can access its properties and methods.

### ng-content
- The ng-content tag acts as a placeholder for inserting external or dynamic content.
- The Parent component passes the external content to the child component.
- That does not create a real DOM element.

### Angular Lifecycle Hooks:
- Lifecycle hooks are timed methods. 
- All lifecycle methods are available from @angular/core.
- ngOnInit:
  - ngOnInit fires once upon initialization of a component’s input-bound (@Input) properties.
  - The hook does not fire as ChildComponent receives the input data.
  - ngOnInit is a one-and-done hook. Initialization is its only concern.
- ngOnChanges:
  - ngOnChanges triggers following the modification of @Input bound class members.
  - It also fires upon initialization of input data.
  - Data bound by the @Input() decorator come from an external source. When the external source alters that data in a detectable manner, it passes through the @Input property again. With this update, ngOnChanges immediately fires.
  - The hook receives one optional parameter of type SimpleChanges. This value contains information on the changed input-bound properties.
- ngOnDestroy:
  - ngOnDestroy fires upon a component’s removal from the view and subsequent DOM.
  - This hook provides a chance to clean up any loose ends before a component’s deletion.
