const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;
const Users = require('./db/models/Users');
const Pictures = require('./db/models/Pictures');

app.set('view engine', 'hbs');
app.engine('hbs', hbs.__express);
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('capitalFirstLetter', str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/gallery', require('./routes/gallery'));
app.use(express.static(__dirname + '/public'));
app.use(require('express-method-override')());

app.get('/', (req, res) => {
  Pictures.fetchAll({ withRelated: ['author'] })
    .then(result => {
      console.log(result.models[0].attributes);
      res.render('index', { data: result.models });
      //   res.render('index', { result });
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

app.listen(PORT, () => {
  console.log(`Server up on port ${PORT}`);
});
