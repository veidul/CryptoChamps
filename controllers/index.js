const router = require('express').Router();
const seeder = require("../seeds");

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.get('/seeder', async(req,res)=> {
    if(req.query.secret === process.env.SECRET){
        await seeder();
        res.send("seeded!")
    }
})

module.exports = router;
