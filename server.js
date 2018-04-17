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

app.use('/gallery', require('./routes/gallery'));

app.get('/', (req, res) => {
  Pictures.fetchAll({ withRelated: ['author'] })
    .then(result => {
      const allPictures = result.models.map(e =>
        Object.assign(e.attributes, e.relations.author.attributes)
      );
      res.render('index', { allPictures });
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
