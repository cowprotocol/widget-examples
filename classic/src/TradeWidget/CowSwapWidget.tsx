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
  partnerFee: {
    bps: 50,
    recipient: "0x0000000000000000000000000000000000000000"
  }
};

export function CowSwapWidget() {
  return <CowSwapWidgetComponent params={params} provider={window.ethereum} />;
}
