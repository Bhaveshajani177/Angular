# Angular Projects <img align="right" src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" width="50" height="50"/>

1. [Sharing Data Between Child And Parent Components (Input/Output)](https://stackblitz.com/edit/angular-ivy-wlzvkg)
2. [Content Projection **ng-content**](https://stackblitz.com/edit/angular-ivy-gy7waa)
3. [Lifecycle Hooks Example](https://stackblitz.com/edit/angular-ivy-nqrcwu?file=src%2Fapp%2Fchild%2Fchild.component.ts)
4. [Pipes Examples](https://stackblitz.com/edit/angular-ivy-kzczfk?file=src%2Fapp%2Fapp.component.html)
5. [Child to Parent Component Via ViewChild](https://stackblitz.com/edit/angular-ivy-xjtwoe?file=src%2Fapp%2Fapp.component.html)
6. [Directives Examples](https://stackblitz.com/edit/angular-ivy-x7xj4q?file=src%2Fapp%2Fapp.component.html)
7. [Services Examples](https://stackblitz.com/edit/angular-ivy-vzqzyi?file=src%2Fapp%2Fapp.component.html)
8. [Template Driven Forms Example](https://stackblitz.com/edit/angular-ivy-tmkokq?file=src%2Fapp%2Fapp.component.ts)

# Notes

1. [Angular CLI Cheat Sheet](https://github.com/Bhaveshajani177/Angular/blob/main/Angular%20CLI%20Cheat%20Sheet/README.md)
2. [main.ts file explanation](https://github.com/Bhaveshajani177/Angular/blob/main/Main.ts%20File/README.md)
3. [Different Ways to Use Interpolation](https://stackblitz.com/edit/angular-ivy-9omnsc?file=src%2Fapp%2Fapp.component.ts)
4. [Angular Style Guide](https://github.com/Bhaveshajani177/Angular/blob/main/Angular%20Style%20Guide/README.md)
5. [Property Binding Example](https://stackblitz.com/edit/angular-ivy-9omnsc?file=src%2Fapp%2Fapp.component.ts)
6. [Event Binding Example](https://stackblitz.com/edit/angular-ivy-9omnsc?file=src%2Fapp%2Fapp.component.ts)
7. [Ways To Convert String Into Number](https://github.com/Bhaveshajani177/Angular/blob/main/Ways%20To%20Convert%20String%20Into%20Number/script.js)<br />
8. TypeSscript:<br />
    &nbsp;8.1. [Basics](https://github.com/Bhaveshajani177/Angular/blob/main/TypeScript/README.md)<br />
    &nbsp;8.2. [Variables](https://github.com/Bhaveshajani177/Angular/blob/main/TypeScript%20Code%20Practice/Variables/variables.ts)<br />
    &nbsp;8.3. [Array](https://github.com/Bhaveshajani177/Angular/blob/main/TypeScript%20Code%20Practice/Array/array.ts)<br />
    &nbsp;8.4. [Classes](https://github.com/Bhaveshajani177/Angular/blob/main/TypeScript%20Code%20Practice/Classes/BankAccount.ts)<br />
    &nbsp;8.5. [Objects](https://github.com/Bhaveshajani177/Angular/tree/main/TypeScript%20Code%20Practice/Objects)<br />
    &nbsp;8.6. [Interface](https://github.com/Bhaveshajani177/Angular/tree/main/TypeScript%20Code%20Practice/Interface)<br />
    &nbsp;8.7. [Generics](https://github.com/Bhaveshajani177/Angular/blob/main/TypeScript%20Code%20Practice/Generics/Queue.ts)<br />
9. Angular:<br />
    &nbsp;9.1. [Basics](https://github.com/Bhaveshajani177/Angular/blob/main/Angular/README.md)<br />
    &nbsp;9.2. [Modules](https://github.com/Bhaveshajani177/Angular/tree/main/Angular/Modules)
    
# Important Questions:

- [What's the difference between tilde(~) and caret(^) in package.json?](https://github.com/Bhaveshajani177/Angular/blob/main/Angular/Difference%20between%20tilde(~)%20and%20caret(%5E)%20in%20package.json/README.md)
- [Why Use Services In Angular?](https://github.com/Bhaveshajani177/Angular/blob/main/Angular/Why%20Use%20Services%20In%20Angular/README.md)
- [Difference Between Reactive And Template Driven Forms](https://github.com/Bhaveshajani177/Angular/blob/main/Angular/Difference%20Between%20Reactive%20And%20Template%20Driven%20Forms/README.md)
- [Difference Between Relative Path Vs Absoulute Path](https://github.com/Bhaveshajani177/Angular/blob/main/Angular/Difference%20Between%20Relative%20Path%20Vs%20Absoulute%20Path/README.md)

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
- **Transpiler**: The compiler takes the TypeScript code and converts it into JavaScript. This process is commonly referred to as transpiling, and since the TypeScript compiler does it, it's called a transpiler.
- ```@Input()``` lets a parent component update data in the child component.
- ```@Output()``` lets the child send data to a parent component.
- ```:host``` selector only targets the host element of a component. Any styles within the :host block of a child component will not affect parent components.
- Different ways to pass data between components.
    1. Parent to Child: Via ```@Input```
    2. Child to Parent: Via ```@Output```
    3. Child to Parent: Via ```@ViewChild```
- Production Environment:
    1. development (local).
    2. stage.
    3. production. 
- ```ngClass```: Adds and removes CSS classes on an HTML element.
- ```<ng-template>```: defines a template that is not rendered by default. allowing you to have full control over how and when the content is displayed.
- asterisk(*): The ```*``` syntax is a shortcut that lets you avoid writing the whole ```<template>``` element.
- pipes: Pipes are simple functions to use in template expressions to accept an input value and return a transformed value.
- In Angular, we **cannot use two structural directives on the same element**. i.e., we cannot place *ngFor,*ngIf together on same element.
- Print mutiple objects in one ```console.log()```: ```console.log({obj1,obj2});```
- If you want to inject service at the global level then add in 'module.ts' under providers array.
- If you want to inject service at the local lavel or component lavel then add in @component decorator under providers array.
- ```ng-content```, called in: ngDoCheck() and ngAfterContentInit()
- ng server ->  it is an angular command
- npm -> it is node package manager command
- how to get index for ngfor:
    - ```*ngFor="let item of items; index as i;"```
    - ```*ngFor="let item of items; let i = index;"```
- **Type annotations:** Type annotations are a way to describe the data in our application.
- **Decorators** are functions for extending business logic or adding metadata.
- **Attribute Directives:** Changes the appearance or behavior of an element
- **Structural Directives:** Add or remove elements from the DOM
- **Garbage Collection:** a program that automates the task of freeing up memory.
- **Memory Leak:** a memory leak is when a variable is not uninitialized.
- **FormControl Properties:** value, touched, untouched, dirty, valid, errors, pristine.
