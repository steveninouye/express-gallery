const bookshelf = require('./bookshelf');
const Users = require('./Users');

const Pictures = bookshelf.Model.extend({
  tableName: 'pictures',
  idAttribute: 'picture_id',
  hasTimestamps: true,
  author: function() {
    return this.belongsTo(Users, 'author', 'user_id');
  }
});

module.exports = Pictures;
