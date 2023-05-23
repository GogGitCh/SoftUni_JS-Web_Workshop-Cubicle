const express = require("express");
const expressConfigurator = require("./config/expressConfig");
const handlebarsConfigurator = require("./config/handlebars");
const homeController = require("./controllers/homeController");
const cubeController = require("./controllers/cubeController");
const path = require("path");
const PORT = 4040;

// Express config
const app = express();
expressConfigurator(app);

//Handlebars config
handlebarsConfigurator(app);

//Routes
app.use(homeController);
app.use('/cubes', cubeController);

app.listen(PORT, () => {
  console.log(`Express app running on port:${PORT}`);
});
