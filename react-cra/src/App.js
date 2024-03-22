import { useState } from "react";
import "./App.css";
import { CowSwapWidget } from "@cowprotocol/widget-react";

// Ethereum EIP-1193 provider. For a quick test, you can pass `window.ethereum`, but consider using something like https://web3modal.com
const provider = window.ethereum;

//  Fill this form https://cowprotocol.typeform.com/to/rONXaxHV once you pick your "appCode"
const DEFAULT_PARAMS = {
  appCode: "My Cool App", // Name of your app (max 50 characters)
  width: "450px", // Width in pixels (or 100% to use all available space)
  height: "640px",
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
  partnerFee: {
    bps: 50,
    recipient: "0x0000000000000000000000000000000000000000"
  }
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
        <a
          href="https://github.com/cowprotocol/widget-examples/tree/main/react-cra"
          target="_blank"
          rel="noreferrer"
        >
          👀 Show me the code
        </a>
        <button id="switchTokensBtn" onClick={switchTokens}>
          🔄 Invert token selection
        </button>

        <CowSwapWidget params={params} provider={provider} />
      </main>
    </>
  );
}

export default App;
