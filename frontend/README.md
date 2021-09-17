# fulcrum-frontend
a responsive [`react`](https://reactjs.org/docs/getting-started.html) app.

## Overview

[`react-router`](https://reactrouter.com/) is used to navigate across "Page" components.
A Page component renders a "Layout" component.
A Layout component renders a collection of "Content" components.
Content components have a `title` and a `text` attribute.
The app entrypoint, App.js, leverages the "[React Hooks API](https://reactjs.org/docs/hooks-reference.html)" to communicate the window state (width and height) to Page components.
Pages forward window state to Layouts.
Layouts use window state to organize Content.

## Setup

Frontend progress can be displayed via [`npm`](https://www.npmjs.com/) using [the webpack devserver](https://webpack.js.org/configuration/dev-server/).
Dependencies will need to be built and can be done so using:
```
npm build
```
When in the "frontend/" directory, just run:
```
npm start
```

