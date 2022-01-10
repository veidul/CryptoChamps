const router = require("express").Router();
const { User, Coins, Tourney } = require("../models");
const withAuth = require("../utils/auth");

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
    const tourneyLive = await Tourney.findAll({where: {user: req.session.user_id}})
    need to find a way to see if the tournament has started or not yet
    const upcomingTourney = await Tourney.findAll({where: {startTime > timeNow}})
    const coinsData = await Coins.findAll();
    // const response = await axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,UDST,BNB,SOL,USDC,ADA,XRP,LUNA,DOT,USD&tsyms=USD&api_key=06cdcb1f8cd5ced9c1a2b7a5acf8be80d74315bd49d57263cfee49051f2460b3');
     //extract JSON from the http response
    // do something with myJson
    // const coinPrice = response.data
    // console.log(coinPrice)
    const coins = coinsData.map((coins) => coins.get({ plain: true }))

    console.log(coins)

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
router.get("/tournament/", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const coinsData = await Coins.findAll();
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
    });
    
    const coins = coinsData.map((coins) => coins.get({ plain: true }))
    const user = userData.get({ plain: true });

    res.render("tournament", {
      ...user,
      coins,
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
