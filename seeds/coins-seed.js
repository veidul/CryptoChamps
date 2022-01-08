const { Coins } = require('../models');

const coinData = [

    {
        name: "Bitcoin",
        ticker: "BTC",
        img: "../public/imgs/BTC-logo.png"
    },
    {
        name: "Ethereum",
        ticker: "ETH",
        img: "../public/imgs/ETH-logo.png"
    },
    {
        name: "Tether",
        ticker: "USDT",
        img: "../public/imgs/USDT-logo.png"
    },
    {
        name: "Binance Coin",
        ticker: "BNB",
        img: "../public/imgs/BNB-logo.png"
    },
    {
        name: "Solana",
        ticker: "SOL",
        img: "../public/imgs/SOL-logo.png"
    },
    {
        name: "USD Coin",
        ticker: "USDC",
        img: "../public/imgs/USDC-logo.png"
    },
    {
        name: "Cardano",
        ticker: "ADA",
        img: "../public/imgs/ADA-logo.png"
    },
    {
        name: "XRP",
        ticker: "XRP",
        img: "../public/imgs/XRP-logo.png"
    },
    {
        name: "Terra",
        ticker: "LUNA",
        img: "../public/imgs/LUNA-logo.png"
    },
    {
        name: "Polkadot",
        ticker: "DOT",
        img: "../public/imgs/DOT-logo.png"
    },
]

const seedCoins = () => {
    Coins.bulkCreate(coinData);
}

module.exports = seedCoins;

