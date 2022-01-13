const tickers = [];
let walletTotalCost = 0
  var bank = 75000


  const updateCost = (event) =>{ 
  const val = event.target.value;
  const price = event.target.dataset.price
  const total = val*price;
  const costOutput = event.target.parentElement.lastElementChild.textContent = `$ ${total}`
  }

const walletCost = (tickers) => {
    let total = 0
    for(let i = 0; i < tickers.length; i++){
        
       total = total + (tickers[i].price*tickers[i].quantity) 
       console.log(total,"total")

       
    }
    //return the total 
    return total
    
    }
 const bankCost = (total) => {
     bank=bank-total
     return bank
 }  
const tickerChecker = ({ticker,price,quantity,total}) => {
    console.log(tickers)
    for(let i = 0; i < tickers.length; i++){
        if(ticker === tickers[i].ticker){
          tickers[i].quantity =  Number(quantity)+Number(tickers[i].quantity);
          tickers[i].total = Number(total)+Number(tickers[i].total);
          return
        }
    }
    
  tickers.push({ticker,price,quantity, total});

}
const walletDisplay = (tickers) => {
    let string = ""
    for(let i = 0; i < tickers.length; i++){
        string += `<li><h1>Ticker: ${tickers[i].ticker}</p><p>Purchase Price:$ ${tickers[i].price}</p><p>Total Cost:$ ${tickers[i].total}</p><p>Quantity: ${tickers[i].quantity}<p><li>`
    }
    return string
}

const addToWallet = (event) => {
    console.log(bank,"bank log")
    let val = event.target.parentElement.children[2].children[3].value;
    let wallet = document.querySelector('.wallet-list')
    let price = event.target.dataset.price
    let ticker = event.target.dataset.ticker
    const total = val*price;
    if(bank < total) return alert("NOT ENOUGH!");
    tickerChecker({ticker,price,quantity:val,total})
    var div = document.createElement('div');
    div.innerHTML = walletDisplay(tickers);
    document.querySelector('.walletTotal').textContent = (`$ ${walletCost(tickers)}`)
    document.querySelector('.bankTotal').textContent = (`$ ${bankCost(total,bank)}`)
    console.log(bank,"bank log#2")
    wallet.innerHTML = "";
    wallet.append(div)
  }
