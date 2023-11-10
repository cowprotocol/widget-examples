import { cowSwapWidget } from "@cowprotocol/widget-lib";

// Add empty container
const container = document.createElement("div");
document.body.appendChild(container);

//  Fill this form https://cowprotocol.typeform.com/to/rONXaxHV once you pick your "appCode"
let params = {
  appCode: "Widget Examples: Webpack", // Name of your app (max 50 characters)
  width: "450px", // Width in pixels (or 100% to use all available space)
  height: "640px",
  provider: window.ethereum, // Ethereum EIP-1193 provider. For a quick test, you can pass `window.ethereum`, but consider using something like https://web3modal.com
  chainId: 1, // 1 (Mainnet), 5 (Goerli), 100 (Gnosis)
  tradeType: "swap", // swap, limit or advanced
  sell: {
    // Sell token. Optionally add amount for sell orders
    asset: "USDC",
    amount: "1000",
  },
  buy: {
    // Buy token. Optionally add amount for buy orders
    asset: "COW",
  },
  enabledTradeTypes: [
    // swap, limit and/or advanced
    "swap",
    "limit",
    "advanced",
  ],
  theme: "dark", // light/dark or provide your own color palette
  interfaceFeeBips: "50", // Fill the form above if you are interested
};

// Render widget
const updateWidget = cowSwapWidget(container, params);

// Update widget
//    - You can update the widget with new params any time
//    - For example, add a button to invert the token selection
const switchTokensBtn = document.createElement("button");
switchTokensBtn.innerText = "🔄 Invert token selection";
switchTokensBtn.style = "position";
switchTokensBtn.addEventListener("click", () => {
  params = {
    ...params,
    sell: params.buy,
    buy: params.sell,
  };
  console.log("switching tokens", params);
  updateWidget(params);
});

// Style HTML (no widget related)
//   Adds a header with a title, and some basic styles
switchTokensBtn.style = "padding: 10px; border-radius: 15px; margin: 20px; ";
document.body.style =
  "min-height: 700px; height: 100vh; display: flex; align-items: center; margin-top: 120px; justify-content: center; flex-direction: column-reverse; background-color: #06172e; padding: 10px;";
const title = document.createElement("h1");
title.innerText = "CoW Widget - Webpack example";
title.style = "color: #fff";
const header = document.createElement("header");
header.appendChild(title);
header.style = "text-align: center;";
header.appendChild(switchTokensBtn);
document.body.appendChild(header);
