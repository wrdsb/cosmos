# C.O.S.M.O.S.

## Applications

### Codex
* [codex-console](https://github.com/wrdsb/cosmos/tree/master/apps/codex-console): Codex's frontend Angular app

### HAGAR
* [hagar-console](https://github.com/wrdsb/cosmos/tree/master/apps/hagar-console): HAGAR's frontend Angular app

### Houston
* [houston-console](https://github.com/wrdsb/cosmos/tree/master/apps/houston-console): Houston's frontend Angular app

### IGOR
* [igor-console](https://github.com/wrdsb/cosmos/tree/master/apps/igor-console): IGOR's frontend Angular app
* [igor-functions](https://github.com/wrdsb/cosmos/tree/master/apps/igor-functions): IGOR's backend Azure Functions app

### Panama
* [panama-console](https://github.com/wrdsb/cosmos/tree/master/apps/panama-console): Panama's frontend Angular app

### Sorting Hat
* [sorting-hat-console](https://github.com/wrdsb/cosmos/tree/master/apps/sorting-hat-console): the Sorting Hat's frontend Angular app
* [sorting-hat-functions](https://github.com/wrdsb/cosmos/tree/master/apps/sorting-hat-functions): the Sorting Hat's backend Azure Functions app

### Viewfinder
* [viewfinder-console](https://github.com/wrdsb/cosmos/tree/master/apps/viewfinder-console): Viewfinder's frontend Angular app


## End-to-End Testing Apps

### Codex
* [codex-console-e2e](https://github.com/wrdsb/cosmos/tree/master/apps/codex-console-e2e): E2E tests for Codex's frontend Angular app

### HAGAR
* [hagar-console-e2e](https://github.com/wrdsb/cosmos/tree/master/apps/hagar-console-e2e): E2E tests for HAGAR's frontend Angular app

### Houston
* [houston-console-e2e](https://github.com/wrdsb/cosmos/tree/master/apps/houston-console-e2e): E2E tests for Houston's frontend Angular app

### IGOR
* [igor-console-e2e](https://github.com/wrdsb/cosmos/tree/master/apps/igor-console-e2e): E2E tests for IGOR's frontend Angular app

### Panama
* [panama-console-e2e](https://github.com/wrdsb/cosmos/tree/master/apps/panama-console-e2e): E2E tests for Panama's frontend Angular app

### Sorting Hat
* [sorting-hat-console-e2e](https://github.com/wrdsb/cosmos/tree/master/apps/sorting-hat-console-e2e): E2E tests for the Sorting Hat's frontend Angular app

### Viewfinder
* [viewfinder-console-e2e](https://github.com/wrdsb/cosmos/tree/master/apps/viewfinder-console-e2e): E2E tests for Viewfinder's frontend Angular app


## Visual Studio Code Workspaces
In the .vscode folder, you'll find a number of .code-workspace files. These workspaces make it trivial to work with all of the assets associated with a particular application or project within the COSMOS mono repo, without having to load the entire repo into VS Code. If you find yourself working with a particular set of files and/or folders often, simply add a new workspace to this folder. This will make your life, and the lives of your colleagues, much easier.

For bonus points, add your frequently used workspaces to your launcher. (See https://css-tricks.com/some-little-improvements-to-my-vs-code-workflow-workspaces-icons-tasks/ for an example.)

## Notes
* Every Azure Function returns an HTTP response to original requester
* Also generates an event with a pointer to local storage which contains same response
* Requester always gets what they ask for, but any other interested parties can also get response

# Nx

This project was generated using [Nx](https://nx.dev). When using Nx, you can create multiple applications and libraries in the same workspace. Libraries are sharable across libraries and applications. They can be imported from `@cosmos/mylib`.

## Nx Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/angular/getting-started/what-is-nx)

[Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)

## Generate an application
* Run `ng g @nrwl/angular:app my-app` to generate an Angular application.
* Run `ng g @nrwl/node:app my-app` to generate a Node application. This is currently out starting point for an Azure Functions application. Once the application has been generated, an Azure Functions app generated in VS Code can be folded into the boilerplate Node app.

## Generate a library
* Run `ng g @nrwl/angular:lib my-lib` to generate an Angular library.
* Run `nx g lib mylib` to generate a generic TypeScript library

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.
