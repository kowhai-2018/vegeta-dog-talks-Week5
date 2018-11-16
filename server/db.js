const knex = require('knex')
const config = require('../knexfile.js').development
const connection = knex(config)

module.exports = {
  getVegeta,
  addVegeta
}

function getVegeta (db = connection) {
  return db('vegeta')
}

function addVegeta (command, name, db = connection) {
  return db('vegeta')
    .insert({command, name})
}
