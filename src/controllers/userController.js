const router = require('express').Router();
const userManager = require('../services/userManager');

router.get('/register', (req, res) => {
    res.render('user/register')
});

router.post('/register', async  (req, res) => {
    const { username, password, repassword } = req.body;

    await userManager.register({ username, password, repassword });

    res.redirect('/user/login');

});

router.get('/login', (req, res) => {
    res.render('user/login')
});

router.post('/login', async (req, res) => {
    const { username, password} = req.body;

    const user = await userManager.login(username, password);

    res.redirect('/')
});

module.exports = router;





