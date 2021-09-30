# Micro front-end engineering challenge

This challenge is used by Didomi for evaluating candidates for Micro front-end development positions.

This challenge is a chance for engineers at Didomi to see how you code and organize a project to implement a specification.


## Codebase description

Current workspace is using monorepo structure with lerna. It has 6 packages.

3 packages for Micro front-end:
- root-config: [single-spa](https://single-spa.js.org/) root application(port: 9000).
- angular-spa: Angular application wrapped with single-spa that is used in the root-config(port: 9001).
- react-spa: React application wrapped with single-spa that is used in the root-config(port: 9002).

And 3 packages for ui-library components development that is used in the SPAs:
- ui-library: [Stencil](https://stenciljs.com/) web-components library for UI elements. Out of the box library has `ui-button` component. It also includes [Storybook](https://storybook.js.org/) (port: 6006).
- ui-library-angular: Angular wrapper for ui-library. It is injected into the angular-spa.
- ui-library-react: React wrapper for ui-library. It is injected into the react-spa.


### Getting started

Install dependencies:

```shell
$ yarn lerna-bootstrap
```

Start Micro front-end applications(root-config, angular-spa, react-spa). Open `localhost:9000` in the browser.

```shell
$ yarn micro-fe:start
```


### UI Library

Start UI library:

```shell
$ yarn ui-library:build:watch
```

Start Storybook for UI library. Open `localhost:6006` in the browser.

```shell
$ yarn storybook
```


#### Adding new component

Generate new Stencil component:

```shell
$ cd packages/ui-library && yarn generate
```

To be able to see new component in the micro front-end SPAs:

- Add it to the [Angular proxies list](packages/ui-library-angular/src/directives/proxy-list.ts).
- Rebuild UI library wrappers:

```shell
$ yarn ui-wrappers:build
```

- Stop and restart micro front-ends:

```shell
yarn micro-fe:start
```
