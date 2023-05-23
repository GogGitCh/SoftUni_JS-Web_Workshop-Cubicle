const path = require('path');
const PORT = 4040;

// Express config
const express = require("express");
const expressConfigurator = require('./config/expressConfig')
const app = express();
expressConfigurator(app);

//Handlebars config
const handlebarsConfigurator = require('./config/handlebars');
handlebarsConfigurator(app);

//Routes
app.get("/", (req, res) => {
  res.render('index');
});

app.listen(PORT,()=>{
    console.log(`Express app running on port:${PORT}`);
})
