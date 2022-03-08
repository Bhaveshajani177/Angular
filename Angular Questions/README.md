# Angular Projects <img align="right" src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" width="50" height="50"/>

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

```html
<!-- * way - 1 -->
<h3>{{ name ? name : 'default name' }}</h3>

<!-- * way - 2 -->
<h3>{{ name || 'default name' }}</h3>

<!-- * way - 3 -->
<h3>{{ name === null || name === undefined || name === '' ? 'default name' : name }}</h3>

```

### 4. How do you chain pipes?

- You can chain pipes together in potentially useful combinations as per the needs. Let's take a birthday property which uses date pipe(along with parameter) and uppercase pipes as below
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
