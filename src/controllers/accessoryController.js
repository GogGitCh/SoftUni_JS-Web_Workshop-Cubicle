const router = require('express').Router();

router.get('/create', (req, res) => {
    res.render('accessory/create');
})


router.post('/create', (req, res) => {
    const body = req.body;
    console.log(body);
    // TODO: Add accessory data to DB
    res.redirect('/');
});

module.exports = router