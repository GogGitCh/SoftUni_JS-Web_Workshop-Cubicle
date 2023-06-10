const cubeManager = require("../services/cubeManager");
const accessoryManager = require("../services/accessoryManager");
const router = require("express").Router();
const generateDifficultyOptionsViewData = require('../utils/viewHelpers');
const { isAuth } = require('../middlewares/authmiddleware');

router.get("/create", isAuth, (req, res) => {
  res.render("cube/create");
});

router.post("/create", isAuth, async (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;

  await cubeManager.create({
    name,
    description,
    imageUrl,
    difficultyLevel: Number(difficultyLevel),
    owner: req.user._id,
  });
  res.redirect("/");
});

router.get("/:cubeId/details", async (req, res) => {
  const cube = await cubeManager.getOneWithAccessories(req.params.cubeId).lean();

  if (!cube) {
    return res.redirect("/404");
  }

  const isOwner = cube.owner?.toString() === req.user?._id

  res.render("cube/details", { cube, isOwner });
});

router.get("/:cubeId/attach-accessory", isAuth, async (req, res) => {
  const cube = await cubeManager.getOne(req.params.cubeId).lean();
  const accessories = await accessoryManager
    .getNonincludedYet(cube.accessories)
    .lean();

  const hasAccessories = accessories.length > 0;

  res.render("accessory/attach", { cube, accessories, hasAccessories });
});

router.post("/:cubeId/attach-accessory",isAuth, async (req, res) => {
  const { accessory } = req.body;
  const cubeId = req.params.cubeId;

  await cubeManager.attachAccessory(cubeId, accessory);

  res.redirect(`/cubes/${cubeId}/details`);
});

router.get("/:cubeId/delete", isAuth, async (req, res) => {
  const cube = await cubeManager.getOne(req.params.cubeId).lean();
  const options = generateDifficultyOptionsViewData(cube.difficultyLevel);
  res.render("cube/delete", { cube, options });
});

router.post("/:cubeId/delete", isAuth, async (req, res) => {
  await cubeManager.delete(req.params.cubeId);

  res.redirect("/");
});

router.get("/:cubeId/edit", isAuth, async (req, res) => {
  const cube = await cubeManager.getOne(req.params.cubeId).lean();

  if (cube.owner.toString() !== req.user?._id) {
    return res.redirect('404')
  }

  const options = generateDifficultyOptionsViewData(cube.difficultyLevel);

  res.render("cube/edit", { cube, options });
});

router.post("/:cubeId/edit", isAuth, async (req, res) => {
  const cubeData = req.body;

  await cubeManager.update(req.params.cubeId, cubeData);

  res.redirect(`/cubes/${req.params.cubeId}/details`);
});

module.exports = router;
