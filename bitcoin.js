const axios = require('axios')
const apiKey = "06cdcb1f8cd5ced9c1a2b7a5acf8be80d74315bd49d57263cfee49051f2460b3";
const coinData = async () => {
    const response = await axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,UDST,BNB,SOL,USDC,ADA,XRP,LUNA,DOT,AVAX,DOGE,SHIB,MATIC,BUSD,CRO,WBTC,LINK,UST,UNI&tsyms=USD,EUR&api_key=06cdcb1f8cd5ced9c1a2b7a5acf8be80d74315bd49d57263cfee49051f2460b3');
     //extract JSON from the http response
    // do something with myJson
    console.log(response.data)
  }
  coinData();