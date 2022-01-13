const router = require("express").Router();
const {Op} = require("sequelize");
const axios = require('axios')
const { User, Coins, Tourney, TourneyUser } = require("../models");
const withAuth = require("../utils/auth");
const apiKey =
  "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,AVAX,BNB,SOL,DOGE,ADA,XRP,LUNA,DOT&tsyms=USD,EUR&api_key=06cdcb1f8cd5ced9c1a2b7a5acf8be80d74315bd49d57263cfee49051f2460b3";

router.get("/", async (req, res) => {
  if( req.session.logged_in){
    res.redirect("/homepage")
  }else{
    res.render("login")
  }
});

router.get("/homepage", withAuth, async (req, res) => {
  try {
    const tourneyLive = await TourneyUser.findAll({where: {user_id: req.session.user_id}});
    // need to find a way to see if the tournament has started or not yet
    // const upcomingTourneyNull = await TourneyUser.findAll({where:  {user_id: null}});
    // const upcomingTourney = [...upcomingTourneyUser,...upcomingTourneyNull]
    const tourneyLiveData = tourneyLive.map((t) => t.get({ plain: true }));
    const liveTourneys = tourneyLiveData.map(({tourney_id})=> tourney_id);
    const upcomingTourneys = await Tourney.findAll({where:  {id: {[Op.notIn]:liveTourneys}}});
    const upcomingFiltered = upcomingTourneys.map(a=> a.get({plain: true}));
    // console.log(upcomingTourneyUser);

    // const upcomingTourneyData = upcomingTourney.map((coins) => coins.get({ plain: true }));

    res.render("homepage", {
      tourneyLiveData,
      upcomingFiltered,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.render("error")
  }
});

// Use withAuth middleware to prevent access to route
router.get("/tournament", withAuth, async (req, res) => {
  try {
    const userData = await User.findOne({ where: { id: req.session.user_id }
    }); 
    console.log(userData.dataValues.id, "before data.get")
    const user = userData.get({ plain: true });
    console.log(user, "after data.get")
    user_id = user.id
    const tourneyId = req.query.id
    console.log(tourneyId)
    // Find the logged in user based on the session ID
    const coinsData = await Coins.findAll();
    const coins = coinsData.map((coins) => coins.get({ plain: true }));
    const apiData = await axios.get(apiKey);
    for (let i = 0; i < coins.length; i++) {
      coins[i].currentPrice = apiData.data[coins[i].ticker].USD;
    }
    res.render("tournament", {
      user_id,
      tourneyId,
      coins,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/tournament/:', withAuth, async (req, res) =>{
  try{
      const tourneyData = await Tourney.update(req.body, {
          where: {
              id: req.query
          }
      })
      res.status(200).json(tourneyData)
  }catch(err){
      console.log(err)
      res.status(500).json(err)
  }
})

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/homepage");
    return;
  }

  res.render("login");
});

module.exports = router;




