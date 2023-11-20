import { Market, Token } from "./types";

const WETH: Token = {
  symbol: "WETH",
  name: "Wrapped Ether",
  address: "0x00",
  image: "dfddsds.png",
};
const BTC: Token = {
  symbol: "BTC",
  name: "Bitcoin",
  address: "0x00",
  image: "dfddsds.png",
};
const COW: Token = {
  symbol: "COW",
  name: "COW",
  address: "0x00",
  image: "dfddsds.png",
};
const DAI: Token = {
  symbol: "DAI",
  name: "DAI",
  address: "0x00",
  image: "dfddsds.png",
};

export const MARKETS: Market[] = [
  { baseToken: WETH, quoteToken: DAI, tradingViewId: "WETHDAI" },
  { baseToken: WETH, quoteToken: BTC, tradingViewId: "WETHBTC" },
  { baseToken: WETH, quoteToken: COW, tradingViewId: "WETHCOW" },
  { baseToken: BTC, quoteToken: DAI, tradingViewId: "BTCDAI" },
  { baseToken: COW, quoteToken: DAI, tradingViewId: "COWDAI" },
];
