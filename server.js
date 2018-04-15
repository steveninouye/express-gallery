const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'hbs');
app.engine('hbs', hbs.__express);

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/gallery', require('./routes/gallery'));
app.use(express.static(__dirname + '/public'));
app.use(require('express-method-override')());

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('capitalFirstLetter', str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
});

app.get('/', (req, res) => res.render('home'));

app.listen(PORT, () => {
  console.log(`Server up on port ${PORT}`);
});
