const router = require("express").Router();
const axios = require('axios')
const { User, Coins, Tourney } = require("../models");
const withAuth = require("../utils/auth");
const apiKey =
  "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,USDT,BNB,SOL,USDC,ADA,XRP,LUNA,DOT,AVAX,DOGE,SHIB,MATIC,BUSD,CRO,WBTC,LINK,UST,UNI&tsyms=USD,EUR&api_key=06cdcb1f8cd5ced9c1a2b7a5acf8be80d74315bd49d57263cfee49051f2460b3";

router.get("/", async (req, res) => {
  try {
    res.render("homepage", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/homepage", withAuth, async (req, res) => {
  try {
    // const tourneyLive = await Tourney.findAll({where: {user: req.session.user_id}})
    // need to find a way to see if the tournament has started or not yet
    // const upcomingTourney = await Tourney.findAll({where: {startTime > timeNow}})

    // const coinsData = await Coins.findAll();

    res.render("homepage", {
      // tourneyLive,
      // upcomingTourney,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get("/tournament", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const coinsData = await Coins.findAll();
    const coins = coinsData.map((coins) => coins.get({ plain: true }));
    const apiData = await axios.get(apiKey);
    for (let i = 0; i < coins.length; i++) {
      coins[i].currentPrice = apiData.data[coins[i].ticker].USD;
    }

    res.render("tournament", {
      coins,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/homepage");
    return;
  }

  res.render("login");
});

module.exports = router;

const coin = {
  id: 4,
  img: "/imgs/BNB-logo.png",
  name: "Binance Coin",
  ticker: "BNB",
  walletId: null,
  wallet_id: null,
  newThing: "whatever",
  dynamicPrice: 414123,
};

coin.newThing = "whatever";
