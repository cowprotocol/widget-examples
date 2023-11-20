import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Layout from "./Layout";
import { Paper } from "@mui/material";
import { TradeWidget } from "./TradeWidget";
import { useState } from "react";
import { MARKETS } from "./data";
import { Kind } from "./types";

function App() {
  const [kind, setKind] = useState<Kind>("sell");
  const [market, setMarket] = useState(MARKETS[0]);
  const [amount, setAmount] = useState(""); // TODO: use better types
  const [price, setPrice] = useState("");

  const tradeWidget = (
    <TradeWidget
      kind={kind}
      markets={MARKETS}
      market={market}
      amount={amount}
      price={price}
      onUpdateAmount={(amount) => setAmount(amount)}
      onUpdatePrice={(price) => setPrice(price)}
      onUpdateMarket={(market) => setMarket(market)}
      onUpdateKind={(kind) => setKind(kind)}
    />
  );
  return (
    <Layout sidebar={tradeWidget}>
      <Paper sx={{ minHeight: "70vh" }}>
        KIND: {kind}
        <br />
        MARKET: {JSON.stringify(market)}
        <br />
        PRICE: {price} <br />
        AMOUNT: {amount}
      </Paper>
    </Layout>
  );
}

export default App;
