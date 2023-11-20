import { Box, Divider, Stack } from "@mui/material";
import { MarketSelector } from "./MarketSelector";
import { LimitOrderForm } from "./LimitOrderForm";
import { Market } from "../types";

export interface TradeWidgetProps {
  market: Market;
  markets: Market[];
  onUpdateMarket(market: Market): void;

  price: string;
  amount: string;
  onUpdatePrice(price: string): void;
  onUpdateAmount(amount: string): void;
}

export function TradeWidget({
  market,
  markets,
  price,
  amount,
  onUpdatePrice,
  onUpdateAmount,
  onUpdateMarket,
}: TradeWidgetProps) {
  return (
    <Stack spacing={2} alignItems="center">
      <MarketSelector
        market={market}
        markets={markets}
        onUpdateMarket={onUpdateMarket}
      />
      <LimitOrderForm
        price={price}
        amount={amount}
        onUpdateAmount={onUpdateAmount}
        onUpdatePrice={onUpdatePrice}
      />
      <Divider />
      {/* <TradeWidget /> */}
      <Box width={450} height={640} sx={{ border: "2px solid" }}>
        {JSON.stringify(market)} @ {price} * {amount}
      </Box>
    </Stack>
  );
}
