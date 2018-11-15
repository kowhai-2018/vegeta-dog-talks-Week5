
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('vegeta').del()
    .then(function () {
      // Inserts seed entries
      return knex('vegeta').insert([
        {id: 1, command: 'Sit', dogName: 'Silvie', language: 'Russian'},
        {id: 2, command: 'Down', dogName: 'Watson', language: 'Maori'},
        {id: 3, command: 'Stay', dogName: 'Luna', language: 'Korean'},
        {id: 4, command: 'Fetch', dogName: 'Obi', language: 'Bahasa'},
        {id: 5, command: 'Heel', dogName: 'Sara Jessica Barker', language: 'Samoan'},
        {id: 6, command: 'Get me a beer', dogName: 'Chew Barka', language: 'Dutch'}

      ])
    })
}
