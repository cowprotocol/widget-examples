import {
  CowSwapWidget as CowSwapWidgetComponent,
  CowSwapWidgetParams,
  TradeType,
} from "@cowprotocol/widget-react";

//  Fill this form https://cowprotocol.typeform.com/to/rONXaxHV once you pick your "appCode"
const params: CowSwapWidgetParams = {
  appCode: "Classic CoW",
  width: "450px",
  height: "640px",
  provider: window.ethereum, // Ethereum EIP-1193 provider. For a quick test, you can pass `window.ethereum`, but consider using something like https://web3modal.com
  chainId: 1, // 1 (Mainnet), 5 (Goerli), 100 (Gnosis)
  tradeType: TradeType.SWAP,
  sell: {
    asset: "WETH",
    amount: "10",
  },
  buy: {
    asset: "DAI",
  },
  enabledTradeTypes: [
    // swap, limit and/or advanced
    TradeType.SWAP,
  ],
  theme: "dark", // light/dark or provide your own color palette
  interfaceFeeBips: "50", // Fill the form above if you are interested
};

export function CowSwapWidget() {
  return <CowSwapWidgetComponent params={params} />;
}
