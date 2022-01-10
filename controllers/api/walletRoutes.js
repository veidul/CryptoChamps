const router = require("express").Router();
const { Wallet, Coins, Tourney } = require("../../models");
// need to figure out how to add wallet to tourney when created
router.post('/', withAuth, async (req, res) =>{
    try {
        const walletData = await Wallet.create({
            ...req.body, user_id: req.session.user_id,
        })
        res.status(200).json(walletData)
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
})

router.put('/:id', async (req, res) =>{
    try{
        const walletData = await Wallet.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(walletData)
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
})
