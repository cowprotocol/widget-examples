import { cowSwapWidget } from "@cowprotocol/widget-lib";

// Add Title
const title = document.createElement("h1");
title.innerText = "CoW Widget - Webpack example";
document.body.appendChild(title);

// Add empty div
const cowWidgetContainer = document.createElement("div");
document.body.appendChild(cowWidgetContainer);

// Render widget
cowSwapWidget({
  container: cowWidgetContainer,
  // Optional params:
  width: 600,
  height: 800,
  chainId: 1,

  // provider
  urlParams: {
    env: "local",
    tradeAssets: {
      sell: { asset: "WETH", amount: "0.1" },
      buy: { asset: "DAI" },
    },
    theme: "dark",
  },
});
