import { createCowSwapWidget } from "@cowprotocol/widget-lib";

// Ethereum EIP-1193 provider. For a quick test, you can pass `window.ethereum`, but consider using something like https://web3modal.com
const provider = window.ethereum;

// 1️⃣ Add empty container
const container = document.createElement("div");

//  Fill this form https://cowprotocol.typeform.com/to/rONXaxHV once you pick your "appCode"
let params = {
  appCode: "Widget Examples: Webpack", // Name of your app (max 50 characters)
  width: "450px", // Width in pixels (or 100% to use all available space)
  height: "640px",
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
  partnerFee: {
    bps: 50,
    recipient: "0x0000000000000000000000000000000000000000"
  }
};

// 2️⃣ Update widget
//    - You can update the widget with new params any time
//    - For example, add a button to invert the token selection
const switchTokensBtn = document.createElement("button");
switchTokensBtn.innerText = "🔄 Invert token selection";
switchTokensBtn.addEventListener("click", () => {
  params = {
    ...params,
    sell: params.buy,
    buy: params.sell,
  };
  console.log("switching tokens", params);
  updateParams(params);
});

// 💅 Style HTML (no widget related)
//   Adds some <header /> <button /> , <main /> and some basic styles
const title = document.createElement("h1");
title.innerText = "CoW Widget - Webpack example";
const link = document.createElement("a");
link.href = "https://github.com/cowprotocol/widget-examples/tree/main/webpack";
link.target = "_blank";
link.rel = "noreferrer";
link.innerText = "👀 Show me the code";
link.style = "color: white";
// const header = document.createElement("header");
const main = document.createElement("main");
// header.style = "text-align: center;";
title.style = "margin: 30px 30px 10px 30px";
switchTokensBtn.style =
  "padding: 10px; border-radius: 15px; margin: 30px 15px; ";
main.style =
  "display:flex; flex-direction: column; margin-top: 0; align-items: center;";
document.body.style =
  "height: 100vh; display: flex; justify-content: center; color: #fff; background-color: #06172e; margin: 0;";
// container.style = `width: ${params.width}`;
// header.appendChild(title);
// header.appendChild(link);
main.appendChild(title);
main.appendChild(link);
main.append(switchTokensBtn);
main.appendChild(container);
document.body.appendChild(main);

// 3️⃣ Render widget
const {updateParams} = createCowSwapWidget(container, {params, provider});
