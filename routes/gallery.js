const router = require('express').Router();
const Users = require('../db/models/Users');
const Pictures = require('../db/models/Pictures');

const combineAttributes = fetchedData => {
  return fetchedData.models.map(e =>
    Object.assign(e.attributes, e.relations.author.attributes)
  );
};

const findPictureByID = (array, id) => {
  return array.filter(e => e.picture_id === id)[0];
};

router.post('/', (req, res) => {
  //create a new gallery photo
});

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

router.put('/:id', (req, res) => {
  //updates a single gallergy photo identified by the :id param
});

router.get('/:id/edit', (req, res) => {
  //see a form to edit a gallery photo identified by the :id
  //form fields are author, link, description
});

router.delete('/:id', (req, res) => {
  //delete a single gallery photo identified by the :id
});

module.exports = router;
