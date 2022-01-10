const getPrice = function(ticker){
    const data = ticker;
    const price = `{{coinPrice.${data}.USD}}`;
   return price
}