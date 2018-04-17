const router = require('express').Router();
const bodyParser = require('body-parser');
const Users = require('../db/models/Users');
const Pictures = require('../db/models/Pictures');
const knex = require('../db/knex');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(require('express-method-override')());

const {
  combineAttributes,
  findPictureByID,
  randomArraySort
} = require('../functions');

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
      const randomAllPictures = randomArraySort(allPictures);
      res.render('picture_detail', { selectedPicture, randomAllPictures });
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
  Pictures.forge(req.body)
    .save()
    .then(result => {
      return Pictures.where('picture_id', result.attributes.picture_id).fetch();
    })
    .then(result => {
      res.redirect(`/gallery/${result.attributes.picture_id}`);
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    });
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
  Pictures.where({ picture_id: req.params.id })
    .destroy()
    .then(result => {
      res.redirect('/');
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    });
});

module.exports = router;
