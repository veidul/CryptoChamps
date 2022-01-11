const router = require("express").Router();
const axios = require("axios");
const { User, Coins } = require("../models");
const withAuth = require("../utils/auth");
const apiKey = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,USDT,BNB,SOL,USDC,ADA,XRP,LUNA,DOT,AVAX,DOGE,SHIB,MATIC,BUSD,CRO,WBTC,LINK,UST,UNI&tsyms=USD,EUR&api_key=06cdcb1f8cd5ced9c1a2b7a5acf8be80d74315bd49d57263cfee49051f2460b3"

router.get('/', async (req, res) => {
  try {
    res.render('login')
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/homepage', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    // adding in axios call so we can use data to populate
    const coinsData = await Coins.findAll();

    const coins = coinsData.map((coins) => coins.get({ plain: true }))
    console.log(coins)
    const apiData = await axios.get(apiKey)
    console.log(apiData.data)
    for (let i = 0; i < coins.length; i++) {
      coins[i].currentPrice = apiData.data[coins[i].ticker].USD
    }

    res.render('homepage', {
      // coinPrice,
      coins,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
})


// Use withAuth middleware to prevent access to route
router.get("/profile", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render("profile", {
      ...user,
      logged_in: true,
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

  res.render("homepage");
});

module.exports = router;


const coin = {
  id: 4,
  img: '/imgs/BNB-logo.png',
  name: 'Binance Coin',
  ticker: 'BNB',
  walletId: null,
  wallet_id: null,
  newThing: 'whatever',
  dynamicPrice: 414123
}

coin.newThing = 'whatever'



