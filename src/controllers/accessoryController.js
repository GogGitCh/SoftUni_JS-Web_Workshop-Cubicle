const router = require('express').Router();

router.get('/create', (req, res) => {
    res.render('accessory/create');
})


// router.post('/create', (req, res) => {
//     const accessoryData = req.body;
//     console.log(accessoryData);

// });

module.exports = router