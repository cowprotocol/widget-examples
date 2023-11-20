import { Autocomplete, Box, Input } from "@mui/material";
import { Market } from "../types";

export interface LimitOrderFormProps {
  market: Market;
  markets: Market[];
  onUpdateMarket(market: Market): void;
}

export function MarketSelector({
  market,
  markets,
  onUpdateMarket,
}: LimitOrderFormProps) {
  return (
    <>
      <Autocomplete
        autoComplete
        autoHighlight
        autoSelect
        value={market}
        onChange={onUpdateMarket}
        options={markets}
        renderInput={() => <Input type="text"></Input>}
      />
    </>
  );
}
