//run this file in order to grab all the new data in the database and return it to the console as an object
var knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'user3',
    password: 'password',
    database: 'express_gallery'
  }
});

knex.raw('SELECT author,url,description FROM pictures').then(data => {
  console.log(data.rows);
});
