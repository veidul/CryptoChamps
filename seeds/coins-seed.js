const { Coins } = require('../models');

const coinData = [

    {
        name: "Bitcoin",
        ticker: "BTC",
        img: "/imgs/BTC-logo.png"
    },
    {
        name: "Ethereum",
        ticker: "ETH",
        img: "/imgs/ETH-logo.png"
    },
    {
        name: "Avalanche",
        ticker: "AVAX",
        img: "/imgs/AVAX-logo.png"
    },
    {
        name: "Binance Coin",
        ticker: "BNB",
        img: "/imgs/BNB-logo.png"
    },
    {
        name: "Solana",
        ticker: "SOL",
        img: "/imgs/SOL-logo.png"
    },
    {
        name: "Dogecoin",
        ticker: "DOGE",
        img: "/imgs/DOGE-logo.png"
    },
    {
        name: "Cardano",
        ticker: "ADA",
        img: "/imgs/ADA-logo.png"
    },
    {
        name: "XRP",
        ticker: "XRP",
        img: "/imgs/XRP-logo.png"
    },
    {
        name: "Terra",
        ticker: "LUNA",
        img: "/imgs/LUNA-logo.png"
    },
    {
        name: "Polkadot",
        ticker: "DOT",
        img: "/imgs/DOT-logo.png"
    },
]

const seedCoins = async () => {
    await Coins.bulkCreate(coinData);
}

module.exports = seedCoins;

