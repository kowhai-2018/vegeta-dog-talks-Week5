exports.up = (knex) => {
  return knex.schema.createTable('vegeta', (table) => {
    table.increments('id').primary()
    table.string('command')
    table.string('dogName')
    table.string('russian')
    table.string('maori')
    table.string('bahasa')
    table.string('korean')
    table.string('samoan')
    table.string('dutch')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('vegeta')
}
