const exphbs = require('express-handlebars');

// Handlebars configurator
function handlebarsConfigurator(app) {
const handlebars = exphbs.create({
    extname:'.hbs',
});

app.engine('.hbs', handlebars.engine);
app.set('view engine','.hbs');
app.set('views', 'src/views')
}

module.exports = handlebarsConfigurator;