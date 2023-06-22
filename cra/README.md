# CoW Widget - Webpack

Example on a Create React App web using the Widget.

The widget is created as a React component in [src/CowSwapWidget.js](src/CowSwapWidget.js).

It basically:

- Renders an empty div, with a `ref` parameter, so we can get a reference to the div
- Adds an `useEffect` that would render in that div the widget using `cowSwapWidget` (imported from `@cowprotocol/widget-lib`)

```js
import { useEffect, useRef } from "react";

import { cowSwapWidget } from "@cowprotocol/widget-lib";

export function CowSwapWidget() {
  const cowWidgetRef = useRef(null);

  useEffect(() => {
    if (cowWidgetRef.current) {
      cowSwapWidget({
        container: cowWidgetRef.current,
        // ...
      });
    }
  }, [cowWidgetRef]);

  return <div ref={cowWidgetRef}></div>;
}
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
