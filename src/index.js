const express = require("express");
const dbConfig = require("./config/dbConfig");
const expressConfigurator = require("./config/expressConfig");
const handlebarsConfigurator = require("./config/handlebars");
const routes = require('./routes')
const PORT = 4040;

// Express config
const app = express();
expressConfigurator(app);

//Handlebars config
handlebarsConfigurator(app);

//DB Connection
dbConfig() 
.then(() => console.log('DB Sucseccfuly connected'))
.catch(err => console.log(`DB Error: `, err.message));

//Routes
app.use(routes);

app.listen(PORT, () => {
  console.log(`*************************************** Express app running on port:${PORT}**************************************************`);
});
