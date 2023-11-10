import { useState } from "react";
import "./App.css";
import { CowSwapWidget } from "@cowprotocol/widget-react";

//  Fill this form https://cowprotocol.typeform.com/to/rONXaxHV once you pick your "appCode"
const DEFAULT_PARAMS = {
  appCode: "My Cool App", // Name of your app (max 50 characters)
  width: "450px", // Width in pixels (or 100% to use all available space)
  height: "640px",
  provider: window.ethereum, // Ethereum EIP-1193 provider. For a quick test, you can pass `window.ethereum`, but consider using something like https://web3modal.com
  chainId: 1, // 1 (Mainnet), 5 (Goerli), 100 (Gnosis)
  tradeType: "swap", // swap, limit or advanced
  sell: {
    // Sell token. Optionally add amount for sell orders
    asset: "COW",
    amount: "100000",
  },
  buy: {
    // Buy token. Optionally add amount for buy orders
    asset: "USDC",
    amount: "0",
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

function App() {
  const [params, setParams] = useState(DEFAULT_PARAMS);

  // Invert token selection. Just an example on how top update the widget
  const switchTokens = () =>
    setParams((params) => ({
      ...params,
      sell: params.buy,
      buy: params.sell,
    }));

  return (
    <>
      <main>
        <header>
          <h1>CoW Widget - Create React App</h1>
        </header>
        <button id="switchTokensBtn" onClick={switchTokens}>
          🔄 Invert token selection
        </button>

        <CowSwapWidget params={params} />
      </main>
    </>
  );
}

export default App;
