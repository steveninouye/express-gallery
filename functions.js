const combineAttributes = fetchedData => {
  return fetchedData.models.map(e =>
    Object.assign(e.attributes, e.relations.author.attributes)
  );
};

const findPictureByID = (array, id) => {
  return array.filter(e => e.picture_id === id)[0];
};

const randomArraySort = array => {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

module.exports = {
  combineAttributes,
  findPictureByID,
  randomArraySort
};
