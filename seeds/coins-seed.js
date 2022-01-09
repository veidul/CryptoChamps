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
        name: "Tether",
        ticker: "USDT",
        img: "/imgs/USDT-logo.png"
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
        name: "USD Coin",
        ticker: "USDC",
        img: "/imgs/USDC-logo.png"
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

