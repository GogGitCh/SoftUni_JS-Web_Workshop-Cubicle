const path = require('path');

const PORT = 4040;

// Express config
const express = require("express");
const app = express();
app.use(express.static(path.resolve(__dirname, 'public'))) // setting middleware for the static files

// Handlebars config
const exphbs = require('express-handlebars');
const handlebars = exphbs.create({
    extname:'.hbs',
});

app.engine('.hbs', handlebars.engine);
app.set('view engine','.hbs');
app.set('views', 'src/views')


//Routes
app.get("/", (req, res) => {
  res.render('index');
});

app.listen(PORT,()=>{
    console.log(`Express app running on port:${PORT}`);
})
