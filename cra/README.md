# CoW Widget - Webpack

Example on a Create React App web using the Widget.

The widget is initialised in [src/index.js](src/index.js).

It basically creates an empty div, which acts as the widget container, and then uses the `cowSwapWidget` function, which is exported in `@cowprotocol/widget-lib`) to initialise it.

```js
// Add empty div
const cowWidgetContainer = document.createElement("div");
document.body.appendChild(cowWidgetContainer);

cowSwapWidget({
  container: cowWidgetContainer,
  // ...
});
```

## Test it

```bash
# Install dependencies
yarn

# Run dev server
yarn start

# build
yarn build
```
