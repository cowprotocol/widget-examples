import { Box, Button, Divider, Stack } from "@mui/material";
import { MarketSelector } from "./MarketSelector";
import { LimitOrderForm } from "./LimitOrderForm";
import { Kind, Market } from "../types";

export interface TradeWidgetProps {
  kind: Kind;
  market: Market;
  markets: Market[];
  price: string;
  amount: string;
  onUpdateKind(kind: Kind): void;
  onUpdateMarket(market: Market): void;
  onUpdatePrice(price: string): void;
  onUpdateAmount(amount: string): void;
}

export function TradeWidget({
  kind,
  market,
  markets,
  price,
  amount,
  onUpdateKind,
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

      <Box width={450} sx={{ border: "2px solid" }}>
        <Button onClick={() => onUpdateKind("sell")} disabled={kind === "sell"}>
          SELL
        </Button>
        <Button onClick={() => onUpdateKind("buy")} disabled={kind === "buy"}>
          BUY
        </Button>
      </Box>
      <Box width={450} height={640} sx={{ border: "2px solid" }}>
        {JSON.stringify(market)} @ {price} * {amount}
      </Box>
    </Stack>
  );
}
