exports.up = (knex, Promise) => {
  return knex.schema.createTable('vegeta', (table) => {
    table.increments('id').primary()
    table.string('command')
    table.string('dogName')
    table.string('language')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('vegeta')
}
