import { useEffect, useRef } from "react";

import { cowSwapWidget } from "@cowprotocol/widget-lib";

export function CowSwapWidget() {
  const cowWidgetRef = useRef(null);
  // const cowWidgetContainer = cowWidgetRef?.current;

  useEffect(() => {
    if (cowWidgetRef.current) {
      console.log("Render CoW Swap Widg");
      cowSwapWidget({
        container: cowWidgetRef.current,

        // Optional params:
        width: 600,
        height: 800,
        chainId: 1,

        // provider
        urlParams: {
          tradeAssets: {
            sell: { asset: "WETH", amount: "0.1" },
            buy: { asset: "DAI" },
          },
          theme: "dark",
        },
      });
    }
  }, [cowWidgetRef]);

  return <div ref={cowWidgetRef}></div>;
}
