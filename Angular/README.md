# Angular Notes: <img align="right" src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" width="50" height="50"/>

### History of Angular Versions:
- Angular version 1.0 which is known as AngularJS was released in 2010 by Google
- Angular version 2.0 was released in September 2016
- Angular 4.0 was released in March 2017
- Angular 5.0 was released in Nov 2017
- Angular 6.0 was released in May 2018
- Angular 7.0 was released in Oct 2018
- Angular 8.0 was released in May 2019
- Angular 9.0 was released in Feb 2020
- Angular 10.0 was released in June 2020
- Angular 11.0 was released in Nov 2020
- Angular 12.0 was released in May 2021
- Angular 13.0 was released in November 2021

### platformBrowserDynamic:
- platformBrowserDynamic is a function used to bootstrap an Angular application.
- contains the client side code that processes templates (bindings, components, ...) and reflective dependency injection.
- Using the dynamic platform makes angular sending the Just-in-Time compiler to the front-end as well as your application. Which means your application is being compiled on client-side.

### polyfills:
- Angular is built on the latest standards of the web platform. Targeting such a wide range of browsers is challenging because they do not support all features of modern browsers. You compensate by loading polyfill scripts ("polyfills") for the browsers that you must support.

### spec.ts

- This file contains unit tests for the main AppComponent.
- The spec files are unit tests for your source files. The convention for Angular applications is to have a .spec.ts file for each .ts file.
- They are run using the Jasmine javascript test framework through the Karma test runner when you use the (ng test) command.
- If you generate new angular project using "**ng new**", you may skip a generating of **spec.ts** files. For this you should apply **--skip-tests** option.
  ```
  ng new ng-app-name --skip-tests
  ```
- If you don't to get it generated just use --spec=false while creating new Component.
  ```
  ng generate component --spec=false mycomponentName
  ```

### CoreModule:
- Your CoreModule contains code that will be used to instantiate your app and load some core functionality.
- The Core Module is a module we create to define common services.
- The services defined in the Core Module are instantiated once.
- This type of module is imported only from the main module, as it contains singleton services that any element in the application can use. We do not want to import it in each module, as this will create additional instances.

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

### Content projection:
- Content projection is a pattern in which you insert, or project, the content you want to use inside another component.
- For example, you could have a Card component that accepts content provided by another component.
- common implementations of content projection in Angular:
  - Single-slot content projection
  - Multi-slot content projection
  - Conditional content projection.
- Multi-slot content projection:
  - A component can have multiple slots. Each slot can specify a CSS selector that determines which content goes into that slot. This pattern is referred to as multi-slot content projection.
  - With this pattern, you must specify where you want the projected content to appear.
  - You accomplish this task by using the select attribute of <ng-content>.
- Conditional content projection:
  - If your component needs to conditionally render content, or render content multiple times, you should configure that component to accept an <ng-template> element that contains the content you want to conditionally render.
  - Using an <ng-content> element in these cases is not recommended, because when the consumer of a component supplies the content, that content is always initialized, even if the component does not define an <ng-content> element or if that <ng-content> element is inside of an ngIf statement.
  - With an <ng-template> element, you can have your component explicitly render content based on any condition you want, as many times as you want. Angular will not initialize the content of an <ng-template> element until that element is explicitly rendered.
  
### ngClass:
- Adds and removes CSS classes on an HTML element.
- The CSS classes are updated as follows, depending on the type of the expression evaluation:
  - string 
  - Array 
  - Object 
- Methods: ngDoCheck()

### pipes:
- Pipes are simple functions to use in template expressions to accept an input value and return a transformed value.
- Use pipes to transform strings, currency amounts, dates, and other data for display.
- The following are commonly used built-in pipes for data formatting:
  - DatePipe: Formats a date value according to locale rules.
  - UpperCasePipe: Transforms text to all upper case.
  - LowerCasePipe: Transforms text to all lower case.
  - CurrencyPipe: Transforms a number to a currency string, formatted according to locale rules.
  - DecimalPipe: Transforms a number into a string with a decimal point, formatted according to locale rules.
  - PercentPipe: Transforms a number to a percentage string, formatted according to locale rules.

### services:
  - One of the best uses of services is to get data from a data source.
  - We can reuse the service at many places.
  - Angular services are singleton objects that get instantiated only once during the lifetime of an application.
  - The main objective of a service is to organize and share business logic, models, or data and functions with different components of an Angular application.
  
### View Encapsulation:
- The valid values for this config property are:
  - ViewEncapsulation.Native
  - ViewEncapsulation.Emulated
  - ViewEncapsulation.None
- The default value is ViewEncapsulation.Emulated and that is the behaviour we are currently seeing.
- ViewEncapsulation.Emulated:
  - Angular modifies the component's CSS selectors so that they are only applied to the component's view and do not affect other elements in the application
- ViewEncapsulation.None:
  - Angular does not apply any sort of view encapsulation meaning that any styles specified for the component are actually globally applied and can affect any HTML element present within the application. This mode is essentially the same as including the styles into the HTML itself.
- If you want styles that are added to Parent applied to Child you need to set ViewEncapsulation.None in the Child component so it doesn't prevent styles to bleed in.
- Emulated and Native are just two different ways to prevent styles to bleed in to and out from components. None is the only one that allows styles to cross component boundaries.
  
### One-way Data Binding:
- One-way data binding will bind the data from the component to the view (DOM) or from view to the component.
- One-way data binding is unidirectional. You can only bind the data from component to the view or from view to the component.
- Below are some of the techniques, which uses one-way data binding:
  - Interpolation Binding '{{}}'
  - Style Binding
  - Attribute Binding
  - Class Binding
  - Style Binding

### Two-way Data Binding:
- Two-way data binding in Angular will help users to exchange data from the component to view and from view to the component.
- It will help users to establish communication bi-directionally.
- Two-way data binding can be achieved using a ngModel directive in Angular.
- syntax: ```[(ngModel)]```

### ElementRef:
- Angular ElementRef is a wrapper around a native DOM element (HTML element) object. 
- It contains the property nativeElement, which holds the reference to the underlying DOM object.
- We use the ViewChild to get the ElementRef of an HTML element in the component class.
- Angular also inject ElementRef of the Host element of the component or directive when you request for it in the constructor.
  
### ngForm:
- It's simply a directive exported from FormsModule which gets automatically added to all <form> tags in your Angular templates once you import the module.
- the ngForm directive creates a top-level FormGroup instance and binds it to your <form> tag to enable you to work with the form. For example to access the aggregate form value or check validation status.

### @injectable:
- @Injectable is a decorator in Angular framework, it allows the service to be injected in Components or other service.
- Marking a class with @Injectable ensures that the compiler will generate the necessary metadata to create the class's dependencies when the class is injected.

### providedIn: 'root':
- specifies that Angular should provide the service in the root injector.
- When you add a service provider to the root application injector, it’s available throughout the application.
- You should always provide your service in the root injector unless there is a case where you want the service to be available only if the consumer imports a particular @NgModule.

### rxjs:
- Reactive Extensions for JavaScript
- RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code.
- The essential concepts in RxJS which solve async event management are:
  - **Observable**: RxJS introduces Observables, a new Push system for JavaScript. An Observable is a Producer of multiple values, "pushing" them to Observers (Consumers).
  - **Observer**: is a collection of callbacks that knows how to listen to values delivered by the Observable.
  - **Operators**: are pure functions that enable a functional programming style of dealing with collections with operations like map, filter, concat, reduce, etc.
