const getPrice = function(ticker){
    const data = ticker;
    const price = `{{coinPrice.${data}.USD}}`;
   return price
}

const walletCost = (tickers) => {
    console.log(tickers[0].price,tickers[0].quantity,tickers.length);
    let total = 0
    for(let i = 0; i < tickers.length; i++){
        
       total = total + (tickers[i].price*tickers[i].quantity) 
       console.log(total,"total")

       
    }
    //return the total 
    return total
    
    }
 const bankCost = (total, bank) => {
     bank=bank-total
     return bank
 }  
