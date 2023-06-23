import { CowSwapWidget } from "@cowprotocol/widget-react";

function App() {
  const cowSwapWidgetParams = {
    width: 600,
    height: 700,
  };

  const cowSwapWidgetSettings = {
    urlParams: {
      chainId: 1,
      tradeType: "swap",
      env: "local",
      tradeAssets: {
        sell: { asset: "WETH", amount: "0.1" },
        buy: { asset: "DAI" },
      },
    },
    appParams: {},
  };

  return (
    <>
      <h1>CoW Widget - Create React App (CRA)</h1>
      <CowSwapWidget
        params={cowSwapWidgetParams}
        settings={cowSwapWidgetSettings}
      />
    </>
  );
}

export default App;
