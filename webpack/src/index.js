import { createCowSwapWidget } from "@cowprotocol/widget-lib"

// Ethereum EIP-1193 provider. For a quick test, you can pass `window.ethereum`, but consider using something like https://web3modal.com
const provider = window.ethereum

// 1️⃣ Add empty container
const container = document.createElement("div")

//  Fill this form https://cowprotocol.typeform.com/to/rONXaxHV once you pick your "appCode"
let params = {
  appCode: "Widget Examples: Webpack", // Name of your app (max 50 characters)
  width: "450px", // Width in pixels (or 100% to use all available space)
  height: "640px",
  chainId: 1, // 1 (Mainnet), 5 (Goerli), 100 (Gnosis)
  tradeType: "swap", // swap, limit or advanced
  sell: {
    // Sell token. Optionally add amount for sell orders
    asset: "USDC",
    amount: "1000",
  },
  buy: {
    // Buy token. Optionally add amount for buy orders
    asset: "COW",
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
    recipient: "0x0000000000000000000000000000000000000000",
  },
  // baseUrl: "http://localhost:3000",
}

// Create a form for editing params
const form = document.createElement("form")
form.style = "display: flex; flex-direction: column; margin-bottom: 20px;"

// Add input fields for each param
Object.keys(params).forEach((key) => {
  if (typeof params[key] !== "object") {
    const label = document.createElement("label")
    label.textContent = key
    const input = document.createElement("input")
    input.type = "text"
    input.value = params[key]
    input.name = key
    label.appendChild(input)
    form.appendChild(label)
  }
})

// Add button to update params
const updateButton = document.createElement("button")
updateButton.textContent = "Update Params"
updateButton.type = "submit"
form.appendChild(updateButton)

// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault()
  const formData = new FormData(form)
  const newParams = { ...params }
  for (let [key, value] of formData.entries()) {
    newParams[key] = value
  }
  params = newParams
  updateWidget()
})

// Function to update or create the widget
let widgetApi
function updateWidget(forceNew = false) {
  if (widgetApi && !forceNew) {
    widgetApi.updateParams(params)
  } else {
    // Remove the existing widget if it exists
    if (widgetApi) {
      container.innerHTML = ""
    }
    widgetApi = createCowSwapWidget(container, { params, provider })
  }
}

// 2️⃣ Update widget
//    - You can update the widget with new params any time
//    - For example, add a button to invert the token selection
const switchTokensBtn = document.createElement("button")
switchTokensBtn.innerText = "🔄 Invert token selection"
switchTokensBtn.addEventListener("click", () => {
  params = {
    ...params,
    sell: params.buy,
    buy: params.sell,
  }
  console.log("switching tokens", params)
  updateWidget()
})

const clearTokensBtn = document.createElement("button")
clearTokensBtn.innerText = "🧹 Clear tokens"
clearTokensBtn.addEventListener("click", () => {
  params = {
    ...params,
    sell: undefined,
    buy: undefined,
  }
  console.log("clearing tokens", params)
  updateWidget()
})

// New button to create a new widget instance
const newInstanceBtn = document.createElement("button")
newInstanceBtn.innerText = "🆕 Create New Instance"
newInstanceBtn.addEventListener("click", () => {
  console.log("Creating new widget instance")
  updateWidget(true)
})

// Create a container for the buttons
const buttonContainer = document.createElement("div")
buttonContainer.style =
  "display: flex; justify-content: center; margin: 30px 0;"

switchTokensBtn.style = "padding: 10px; border-radius: 15px; margin: 0 15px;"
clearTokensBtn.style = "padding: 10px; border-radius: 15px; margin: 0 15px;"
newInstanceBtn.style = "padding: 10px; border-radius: 15px; margin: 0 15px;"

// Add buttons to the button container
buttonContainer.appendChild(switchTokensBtn)
buttonContainer.appendChild(clearTokensBtn)
buttonContainer.appendChild(newInstanceBtn)

// 💅 Style HTML (not widget related)
//   Adds some <header /> <button /> , <main /> and some basic styles
const title = document.createElement("h1")
title.innerText = "CoW Widget - Webpack example"
const link = document.createElement("a")
link.href = "https://github.com/cowprotocol/widget-examples/tree/main/webpack"
link.target = "_blank"
link.rel = "noreferrer"
link.innerText = "👀 Show me the code"
link.style = "color: white"
const main = document.createElement("main")
title.style = "margin: 30px 30px 10px 30px"
main.style =
  "display:flex; flex-direction: column; margin-top: 0; align-items: center;"
document.body.style =
  "height: 100vh; display: flex; justify-content: center; color: #fff; background-color: #06172e; margin: 0;"
main.appendChild(title)
main.appendChild(link)
main.appendChild(form)
main.appendChild(buttonContainer)
main.appendChild(container)
document.body.appendChild(main)

// 3️⃣ Render widget
updateWidget()
