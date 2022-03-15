# Angular <img align="right" src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" width="50" height="50"/>

### 1. Why do we use @Injectable() decorator:

- We can create a service without Injectable() decorator.
- Injectable decorator or any other angular/custom decorator generates metadata. A special kind of metadata(design:paramtypes) is required to inject a service.
- You can configure injectors with providers at different levels of your app, by setting a metadata value in one of three places:
  - In the @Injectable() decorator for the service itself.
  - In the @NgModule() decorator for an NgModule.
  - In the @Component() decorator for a component.
- The @Injectable() decorator has the providedIn metadata option, where you can specify the provider of the decorated service class with the root injector, or with the injector for a specific NgModule.
- If you use @Injectable() you will not have to explicitly add MyServiceClass to the providers property of your module or component.
- In Summary @Injectable() is not mandatory because it is just another way of defining a provider. Likewise, if you add @Injectable({providedIn: 'root'}) to your service, you will not need to add the service to any providers property on any module or component.

### 2. SetValue Vs PatchValue

- SetValue:
  - A form control instance provides a setValue() method that updates the value of the form control and validates the structure of the value provided against the control's structure.
  - For example, when retrieving form data from a backend API or service, use the setValue() method to update the control to its new value, replacing the old value entirely.
  - We use the SetValue to update the FormControl , FormGroup or FormArray.
  - When we use it to update the FormGroup or FormArray the SetValue requires that the object must match the structure of the FormGroup or FormArray exactly. Otherwise, it will result in an error.
  - Use the setValue() method to set a new value for an individual control. The setValue() method strictly adheres to the structure of the form group and replaces the entire value for the control.
  - The strict checks of the setValue() method help catch nesting errors in complex forms, while patchValue() fails silently on those errors.

- PatchValue:
  - The PatchValue is used to update only a subset of the elements of the FormGroup or FormArray.
  - It will only update the matching objects and ignores the rest.
  - Use the patchValue() method to replace any properties defined in the object that have changed in the form model.
  - patchValue() method applies the update against the model structure. PatchValue() only updates properties that the form model defines.

### 3. Print 'default name' if name = null or undefined or ''

```ts
<!-- * way - 1 -->
<h3>{{ name ? name : 'default name' }}</h3>

<!-- * way - 2 -->
<h3>{{ name || 'default name' }}</h3>

<!-- * way - 3 -->
<h3>{{ name === null || name === undefined || name === '' ? 'default name' : name }}</h3>

```

### 4. How do you chain pipes?

You can chain pipes together in potentially useful combinations as per the needs. Let's take a birthday property which uses date pipe(along with parameter) and uppercase pipes as below
```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-birthday',
  template: `<p>Birthday is {{  birthday | date:'fullDate' | uppercase}} </p>` // THURSDAY, JUNE 18, 1987
})

export class BirthdayComponent {
  birthday = new Date(1987, 6, 18);
}
```

### 5. What is a custom pipe?
Apart from built-inn pipes, you can write your own custom pipe with the below key characteristics,
A pipe is a class decorated with pipe metadata @Pipe decorator, which you import from the core Angular library For example,
```ts
@Pipe({name: 'myCustomPipe'})
```
The pipe class implements the PipeTransform interface's transform method that accepts an input value followed by optional parameters and returns the transformed value. The structure of pipeTransform would be as below,
```ts
interface PipeTransform {
  transform(value: any, ...args: any[]): any
}
```
The @Pipe decorator allows you to define the pipe name that you'll use within template expressions. It must be a valid JavaScript identifier.
```ts
template: `{{someInputValue | myCustomPipe: someOtherValue}}`
```

### 6. What is reactive programming?
- Reactive programming describes a design paradigm that relies on asynchronous programming logic to handle real-time updates to otherwise static content.
- Reactive programming is an asynchronous programming paradigm concerned with data streams and the propagation of change.
- An Angular application is a reactive system. The user clicks on a button, the application reacts to this event and updates the model. The model gets updated, the application propagates the changes through the component tree.
- When handling events we often care about the time aspect, and that’s why Angular uses this type of reactive programming for managing events.

### 7. What is the use of observable?
- The basic usage of Observable in Angular is to create an instance to define a subscriber function.
- Whenever a consumer wants to execute the function the subscribe() method is called. This function defines how to obtain messages and values to be published.
- callback functions of observable are: **next** , **error**, **complete**

### 8. How to get data from observable in angular?
You need to subscribe to the observable and pass a callback that processes emitted values.
```ts
this.myService.getConfig().subscribe(val => console.log(val));
```

### 9. What is pipe in rxjs?
- RxJS' pipe() is both a standalone function and a method on the Observable interface that can be used to combine multiple RxJS operators to compose asynchronous operations. 
- The pipe() function takes one or more operators and returns an RxJS Observable.
- pipe() is a function/method that is used to chain multiple RxJS operators while map() and filter() are operators that operate and transform the values of an Observable (sequence of values). They are similar to the map() and filter() methods of JavaScript arrays.

### 10. How to sort array of object by date?
Sort by date (Ascending):
```ts
myArr.sort((a, b)=> {return new Date(a.CREATE_TS) - new Date(b.CREATE_TS)})
```
Sort by date (Descending):
```ts
myArr.sort((a, b)=> {return new Date(b.CREATE_TS) - new Date(a.CREATE_TS)})
```
Sort by time:
```ts
this.data.sort((a, b) => new Date(b.date1).getTime() - new Date(a.date1).getTime());
```

### 11. Error says localStorage.getItem() can return either a string or null.
JSON.parse() requires a string, so you should test the result of localStorage.getItem() before you try to use it.
```ts
this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
```
OR
```ts
const userJson = localStorage.getItem('currentUser');
this.currentUser = userJson !== null ? JSON.parse(userJson) : new User();
```
If you are confident that the localStorage.getItem() call can never return null you can use the non-null assertion operator to tell typescript that you know what you are doing:
```ts
this.currentUser = JSON.parse(localStorage.getItem('currentUser')!);
```

### 12. How to update local storage data?
You cant update specific value in localstorage. you have to update whole object because it stores it as Key:Value pair. Localstorage values are saved as strings. So you have to save it like this:
```ts
var kittens = [
    {"name": "abc", "color": "white" }, 
    {"name": "def", "color": "black" }
]

// Save array in local storage as string
localStorage.setItem("kittens",JSON.stringify(kittens));

// Get back item "kittens" from local storage
var kittensFromLocalStorage = JSON.parse(localStorage.getItem("kittens"));

// Change value
kittensFromLocalStorage[1].name = "jasmine";

// Save the new item with updated value
localStorage.setItem("kittens",JSON.stringify(kittensFromLocalStorage));
```

### 13. How do I test for an empty JavaScript object?
```ts
Object.keys(obj).length === 0;
```

### 14. How to prevent input type="number" getting negative values?
```html
<input type="number" min="0" oninput="this.value = Math.abs(this.value)">
```

### 15. How can I use "*ngIf else"?
```html
<div *ngIf="isValid; else templateName">
  If isValid is true
</div>

<ng-template #templateName>
  If isValid is false
</ng-template>
```

### 16. How to use If with Then?
```html
<div *ngIf="isValid; then templateName">
  Here is never showing
</div>

<ng-template #templateName>
  If isValid is true
</ng-template>
```

### 17. How to use If with Then and Else?
```html
<div *ngIf="isValid; then thenTemplateName else elseTemplateName">
  Here is never showing
</div>

<ng-template #thenTemplateName>
  If isValid is true
</ng-template>

<ng-template #elseTemplateName>
  If isValid is false
</ng-template>
```
