const express = require("express");
const expressConfigurator = require("./config/expressConfig");
const handlebarsConfigurator = require("./config/handlebars");
const routes = require('./routes')
const path = require("path");
const PORT = 4040;

// Express config
const app = express();
expressConfigurator(app);

//Handlebars config
handlebarsConfigurator(app);

//Routes
app.use(routes);

app.listen(PORT, () => {
  console.log(`Express app running on port:${PORT}`);
});
