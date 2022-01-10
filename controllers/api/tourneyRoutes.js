const router = require("express").Router();
const {Wallet, Tourney } = require("../../models");
const withAuth = require('../../utils/auth');
// need to figure out how to add wallet id when creating new tournament
router.post('/', withAuth, async (req, res) =>{
    try {
        const tourneyData = await Tourney.create({
            // need to figure out how we are going to create a tourney and make wallet id in same route
            ...req.body, user_id: req.session.user_id,
        })
        res.status(200).json(tourneyData)
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
})
// need to see how to include wallet id when adding someone to tournament
router.put('/:id', async (req, res) =>{
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