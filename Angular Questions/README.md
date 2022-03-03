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
