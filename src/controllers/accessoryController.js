const router = require("express").Router();

const accessoryManager = require("../services/accessoryManager");

router.get("/create", (req, res) => {
  res.render("accessory/create");
});

router.post("/create", async (req, res) => {
  const { name, description, imageUrl } = req.body;

  await accessoryManager.create({ name, description, imageUrl });

  res.redirect("/");
});

router.get('/cubeId/attach-accessory', (req, res) => {
    res.render('accessory/attach');
})

module.exports = router;
