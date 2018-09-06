# Day8Workshop

## Step by step
1. Create a new angular project

```bash
ng new day8-workshop
```

2. Change to the project directory, install all the dependencies

```bash
cd day8-workshop
npm i
```

3. Install Material Design on top of your project. Install hammerJS part of the dependencies.

```bash
ng add @angular/material
```

```bash
npm install --save hammerjs
```

4. Install Angular flex-layout

```bash
npm install @angular/flex-layout --save
```

5. Enable PWA 

```bash
ng add @angular/pwa
```

6. Test the app before making changes to the code
 
```bash
ng serve
```

7. Remove all the content on the app.component.html.

8. Generate 3 components under the star wars sub-folder.

```bash
ng generate component starwars/category
```

```bash
ng generate component starwars/character
```

```bash
ng generate component starwars/character/details
```

9. Generate a service to retrieve data from the sw api end point.

```bash
ng generate service services/starwarapi
```

10. 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
