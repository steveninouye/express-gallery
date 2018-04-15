exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('users', table => {
      table.increments('user_id').primary();
      table.string('email').notNullable();
      table.string('password').notNullable();
      // table.timestamp('created_at').defaultTo(knex.fn.now());
      // table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.timestamps(true, true);
    })
    .createTable('pictures', table => {
      table.increments('picture_id').primary();
      table
        .integer('author')
        .references('user_id')
        .inTable('users')
        .unsigned()
        .notNullable()
        .onDelete('cascade');
      table.string('url').notNullable();
      table.text('description');
      table.timestamps(true, true);
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pictures').dropTable('users');
};
