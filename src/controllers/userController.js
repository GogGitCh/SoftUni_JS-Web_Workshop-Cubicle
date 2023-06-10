const router = require("express").Router();
const userManager = require("../services/userManager");
const { extractErrorMessages } = require('../utils/errorHelpers')

router.get("/register", (req, res) => {
  res.render("user/register");
});

router.post("/register", async (req, res) => {
  const { username, password, repassword } = req.body;
  try {
    await userManager.register({ username, password, repassword });
    res.redirect("/user/login");
    
  } catch (err) {
    const errorMessages = extractErrorMessages(err); // вариант изкарващ всички error съобщения на веднъж
    res.status(404).render("user/register",{ errorMessages })
  }

});

router.get("/login", (req, res) => {
  res.render("user/login");
});

router.post("/login", async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const token = await userManager.login(username, password);

    res.cookie("auth", token, { httpOnly: true });
  
    res.redirect("/");
  } catch (error) {
   next(error) 
  }
});

router.get('/logout', (req, res) => {
  res.clearCookie('auth');
  res.redirect('/')
})

module.exports = router;
