const router = require('express').Router();

router.get('/:id', (req, res) => {
  //see a single gallery photo
  res.send('testing');
});

router.get('/new', (req, res) => {
  //see a new photo form
  //fields author, link, description
});

router.post('/', (req, res) => {
  //create a new gallery photo
});

router.get('/:id/edit', (req, res) => {
  //see a form to edit a gallery photo identified by the :id
  //form fields are author, link, description
});

router.put('/:id', (req, res) => {
  //updates a single gallergy photo identified by the :id param
});

router.delete('/:id', (req, res) => {
  //delete a single gallery photo identified by the :id
});

module.exports = router;
