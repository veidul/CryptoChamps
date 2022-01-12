const getPrice = function(ticker){
    const data = ticker;
    const price = `{{coinPrice.${data}.USD}}`;
   return price
}

const walletCost = (tickers) => {
    const total = 0
    let newTotal = total;
    for(let i = 0; i < tickers.length; i++){
        let total = 0
       total + (tickers[i].price*tickers[i].quantity) 
       console.log(total,"total")
       console.log(newTotal,"new total")
    }
    
    return newTotal
    }