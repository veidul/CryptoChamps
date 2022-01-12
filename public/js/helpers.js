const getPrice = function(ticker){
    const data = ticker;
    const price = `{{coinPrice.${data}.USD}}`;
   return price
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
        string += `<li><h1>Ticker: ${tickers[i].ticker}</p><p>Purchase Price: ${tickers[i].price}</p><p>Total Cost: ${tickers[i].total}</p><p>Quantity: ${tickers[i].quantity}<p><li>`
    }
    return string
}