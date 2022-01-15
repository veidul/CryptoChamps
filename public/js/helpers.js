let walletTotalCost = 0;
var bank = 75000;

const updateCost = (event) => {
  const val = event.target.value;
  const price = event.target.dataset.price;
  const total = val * price;
  const costOutput =
    (event.target.parentElement.lastElementChild.textContent = `$ ${total}`);
};

const walletCost = (tickers) => {
  let total = 0;
  for (let i = 0; i < tickers.length; i++) {
    total = total + tickers[i].purchasePrice * tickers[i].quantity;
    console.log(total, "total");
  }
  //return the total
  return total;
};
const bankCost = (total) => {
  bank = bank - total;
  return bank;
};
const tickerChecker = ({ ticker, purchasePrice, quantity, total, userId }) => {
  console.log(tickers);
  for (let i = 0; i < tickers.length; i++) {
    if (ticker === tickers[i].ticker) {
      tickers[i].quantity = Number(quantity) + Number(tickers[i].quantity);
      tickers[i].total = Number(total) + Number(tickers[i].total);
      return;
    }
  }

  tickers.push({ ticker, purchasePrice, quantity, total, userId });
  console.log(tickers);
};
const walletDisplay = (tickers) => {
  let string = "";
  for (let i = 0; i < tickers.length; i++) {
    string += `<div style="outline: 2px solid white; padding: 1rem"><h1>Ticker: ${tickers[i].ticker}</h1><p>Purchase Price:$ ${tickers[i].purchasePrice}<br>Total Cost:$ ${tickers[i].total}<br>Quantity: ${tickers[i].quantity}</p></div>`;
  }
  return string;
};

const addToWallet = (event) => {
  console.log(bank, "bank log");
  let val = event.target.parentElement.children[2].children[3].value;
  let wallet = document.querySelector(".wallet-list");
  let purchasePrice = event.target.dataset.price;
  let ticker = event.target.dataset.ticker;
  const total = val * purchasePrice;
  console.log(total);
  if (bank < total) return alert("NOT ENOUGH!");
  tickerChecker({ ticker, purchasePrice, quantity: val, total, userId });
  var div = document.createElement("div");
  div.innerHTML = walletDisplay(tickers);
  document.querySelector(".walletTotal").textContent = `$ ${walletCost(
    tickers
  )}`;
  document.querySelector(".bankTotal").textContent = `$ ${bankCost(
    total,
    bank
  )}`;
  console.log(bank, "bank log#2");
  wallet.innerHTML = "";
  wallet.append(div);
};
