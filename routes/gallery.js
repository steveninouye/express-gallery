const router = require('express').Router();
const bodyParser = require('body-parser');
const Users = require('../db/models/Users');
const Pictures = require('../db/models/Pictures');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(require('express-method-override')());

const combineAttributes = fetchedData => {
  return fetchedData.models.map(e =>
    Object.assign(e.attributes, e.relations.author.attributes)
  );
};

const findPictureByID = (array, id) => {
  return array.filter(e => e.picture_id === id)[0];
};

router.get('/new', (req, res) => {
  res.render('newPicture');
});

router.get('/:id', (req, res) => {
  Pictures.fetchAll({ withRelated: ['author'] })
    .then(result => {
      const allPictures = combineAttributes(result);
      const selectedPicture = findPictureByID(
        allPictures,
        Number(req.params.id)
      );
      res.render('picture_detail', { selectedPicture, allPictures });
      //   res.render('index', { result });
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

router.get('/:id/edit', (req, res) => {
  Pictures.where({ picture_id: req.params.id })
    .fetch()
    .then(result => {
      res.render('editPicture', { picture: result.attributes });
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

router.post('/', (req, res) => {
  //create a new gallery photo
});

router.put('/:id', (req, res) => {
  //updates a single gallergy photo identified by the :id param
  Pictures.where({ picture_id: req.params.id })
    .fetch()
    .then(result => {
      return result.save(req.body);
    })
    .then(result => {
      res.redirect(`/gallery/${req.params.id}`);
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    });
});

router.delete('/:id', (req, res) => {
  //delete a single gallery photo identified by the :id
});

module.exports = router;
