const express = require('express');
const hbs = require('hbs');

const app = express();
const PORT = process.env.PORT || 3000;
const Pictures = require('./db/models/Pictures');

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.engine('hbs', hbs.__express);
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper(
  'capitalFirstLetter',
  str => str.charAt(0).toUpperCase() + str.slice(1)
);
hbs.registerHelper('getUsername', str => str.split('@')[0]);
hbs.registerHelper('shortenURL', str => {
  str = str.length > 50 ? str.slice(0, 50) + '...' : str;
  return str;
});

const { combineAttributes, randomArraySort } = require('./functions');

app.use('/gallery', require('./routes/gallery'));

app.get('/', (req, res) => {
  Pictures.fetchAll({ withRelated: ['author'] })
    .then(result => {
      const allPictures = combineAttributes(result);
      const randomAllPictures = randomArraySort(allPictures);
      res.render('index', { randomAllPictures });
      //   res.render('index', { result });
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

app.get('/api', (req, res) => {
  //responds with knex query
  Pictures.fetchAll({ withRelated: ['author'] })
    .then(result => {
      const allPictures = combineAttributes(result);
      res.json(allPictures);
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
