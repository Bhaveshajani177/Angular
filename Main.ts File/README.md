# main.ts

- ```main.ts``` file is the entry point of our web-app.
- It compiles the web-app and bootstraps the **AppModule** to run in the browser.
- It starts with importing the basic module which we need.
  ```js
  platformBrowserDynamic().bootstrapModule(AppModule)
  ```
- This code has reference to the parent module i.e **AppModule**. Hence when it executes in the browser, the file that is called is ```index.html```. ```index.html``` internally refers to the ```main.ts``` file which calls the parent module i.e AppModule.
- When **AppModule** is called, it calls ```app.module.ts``` which further calls the **AppComponent** based on the bootstrap.
  ```js
  bootstrap:[AppComponent]
  ```
- In ```app.component.ts```, there is selector:"app-root" which is used in the ```index.html``` file. This will display the contents present in ```app.component.html```.
