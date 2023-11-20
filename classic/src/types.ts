export interface ERC20 {
  symbol: string;
  name: string;
  decimals: number;
  address: string;
  image: string;
}

export interface Token extends ERC20 {
  image: string;
}

export interface Market {
  baseToken: Token;
  quoteToken: Token;
  tradingViewId: string;
}
