const router = require("express").Router();
const {Wallet, Tourney , Coins, User} = require("../../models");
const withAuth = require('../../utils/auth');
// need to figure out how to add wallet id when creating new tournament
router.get("/", withAuth, async (req, res) => {
    try {
        const userData = await User.findOne({ where: { id: req.session.user_id }
          }); 
          const user = userData.get({ plain: true });
        const tourneyId = req.query.id
        console.log(tourneyId)
      // Find the logged in user based on the session ID
      const coinsData = await Coins.findAll();
      const coins = coinsData.map((coins) => coins.get({ plain: true }));
      const apiData = await axios.get(apiKey);
      for (let i = 0; i < coins.length; i++) {
        coins[i].currentPrice = apiData.data[coins[i].ticker].USD;console.log(coins)
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
  
router.post('/', withAuth, async (req, res) =>{
    try {
        const tourneyData = await Tourney.create({
            // need to figure out how we are going to create a tourney and make wallet id in same route
            ...req.body,
        })
        res.status(200).json(tourneyData)
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
})
// need to see how to include wallet id when adding someone to tournament
router.put('/:', withAuth, async (req, res) =>{
    try{
        const tourneyData = await Tourney.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(tourneyData)
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
})


module.exports = router;