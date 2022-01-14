const router = require("express").Router();
const { Wallet, Tourney, Coins, User, TourneyUser } = require("../../models");
const withAuth = require("../../utils/auth");
// need to figure out how to add wallet id when creating new tournament
router.get("/", withAuth, async (req, res) => {
  try {
    const userData = await User.findOne({ where: { id: req.session.user_id } });
    const user = userData.get({ plain: true });
    const tourneyId = req.query.id;
    console.log(tourneyId);
    // Find the logged in user based on the session ID
    const coinsData = await Coins.findAll();
    const coins = coinsData.map((coins) => coins.get({ plain: true }));
    const apiData = await axios.get(apiKey);
    for (let i = 0; i < coins.length; i++) {
      coins[i].currentPrice = apiData.data[coins[i].ticker].USD;
      console.log(coins);
    }

    res.render("tournament", {
      tourneyId,
      user,
      coins,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    //look up tourney to get start/finish info
    const tourneyFind = await Tourney.findAll({
      where: { id: req.body.tourney_id },
    });
    console.log(req.body.tourney_id);
    if (!tourneyFind.length) {
      console.log("no tourneys found");
      return res.status(400);
    }
    const tourneyStart = tourneyFind[0].startTime;
    const tourneyFinish = tourneyFind[0].finishTime;
    // .get({
    //   plain: true,
    // });
    console.log(tourneyFind, "tourney find console.log");
    const tourneyData = await TourneyUser.create({
      ...req.body,
      startTime: tourneyStart,
      finishTime: tourneyFinish,
    });
    res.status(200).json(tourneyData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/create", async (req, res) => {
  try {
    //look up tourney to get start/finish info
    const tourney = await Tourney.create({
      startTime: req.body.startTime,
      finishTime: req.body.finishTime,
    });

    console.log(tourney);
    const tourneyData = await TourneyUser.create({
      ...req.body,
      tourney_id: tourney.id,
    });
    res.status(200).json(tourneyData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// need to see how to include wallet id when adding someone to tournament
router.put("/:", withAuth, async (req, res) => {
  try {
    const tourneyData = await Tourney.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(tourneyData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
