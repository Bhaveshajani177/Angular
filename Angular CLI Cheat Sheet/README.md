# Angular CLI Cheat Sheet <img align="right" src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" width="50" height="50"/>
### Installing a specific version of angular with angular cli:
  ```
  npm install -g @angular/cli@wished.version.here
  ```
  Examples:
  ```
  npm install -g @angular/cli@8.3.19
  npm install -g @angular/cli@7
  npm install -g @angular/cli@6
  npm install -g @angular/cli@13.2.3
  ```
### Setup:
- Install latest version:
  ```
  npm i -g @angular/cli
  ```
- Check your CLI version:
  ```
  ng -v
  ```
- Show all commands in terminal:
  ```
  ng --help
  ```
- Open Angular documentation:
  ```
  ng doc
  ```

### ng update:
- Update core/rxJS/TScript:
  ```
  ng update @angular/core
  ```
- Update Material:
  ```
  ng update @angular/material
  ```
  
### Generate All The Things:
- Generate a component:
  ```
  ng g c componentName
  ```
- Generate a service:
  ```
  ng g s serviceName
  ```
- Generate a pipe:
  ```
  ng g pipe pipeName
  ```
- Generate a directive:
  ```
  ng g directive directiveName
  ```
- Generate an enum:
  ```
  ng g enum enumName
  ```
- Generate a module:
  ```
  ng g module moduleName
  ```
- Generate a class:
  ```
  ng g cl className
  ```
- Generate an interface:
  ```
  ng g interface interfaceName
  ```
- Generate a route guard:
  ```
  ng g guard guardName
  ```
  
### Serving:
- Serve your project:
  ```
  ng s
  ```
- Serve and open in your default browser automatically:
  ```
  ng s -o
  ```
- Serve to a different port:
  ```
  ng s --port 5555
  ```
