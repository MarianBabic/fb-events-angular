# FbEventsAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

---------------------------------------------------------------------------------------------------------------------------------------------------------

The application was developed and running on Google Chrome 64.0.3282.119 with following dependencies:

Node.js 8.9.3  
NPM 5.6.0  
Angular CLI 1.6.2  
Angular 5.2.2  
Typescript 2.6.2  
bootstrap 3.3.7  
ng4-geoautocomplete (Google place autocomplete) 0.1.0  
Facebook Graph API 2.12

To use Google API:
- login to developers.google.com and get an api key
- insert key into index.html (line 15)

To use Facebook API:
- create new app on developers.facebook.com and get app id
- insert app id into header.component.ts (line 20)
- to use facebook login, enter app urls as 'Valid OAuth redirect URIs' - 'https://localhost/', 'http://udalosti.kapsa.sk:8080/'
