This is a minimal reproduction of an issue I'm running into with styled-components.

To reproduce, use `yarn` to set up and build:

```sh
yarn
yarn build
```

The build invocation does a few things:

- Sets `NODE_ENV` to `development`—this is important, as it causes context PropTypes to be checked in styled-components
- Invokes webpack to create `./bundle.js`—note, this webpack config also defines `NODE_ENV` as `development`
- Executes `./server.js`, which requires the React app from the bundle and attempts to render to string, causing an error in styled-components
