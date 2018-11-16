exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('vegeta').del()
    .then(function () {
      // Inserts seed entries
      return knex('vegeta').insert([
        {id: 1, command: 'Sit', dogName: 'Silvie', russian: 'Sidet', maori: 'E Noho', bahasa: 'duduk', korean: 'anza', samoan: 'nofo', dutch: 'zitten'},
        {id: 2, command: 'Down', dogName: 'Watson', russian: 'Lezhat', maori: 'Ki raro', bahasa: 'turun', korean: 'updureo', samoan: 'lalo', dutch: 'naar beneden'},
        {id: 3, command: 'Stay', dogName: 'Luna', russian: 'Stoy', maori: 'Noho', bahasa: 'sini', korean: 'kidareo', samoan: 'nofo', dutch: 'blijven'},
        {id: 4, command: 'Fetch', dogName: 'Obi', russian: 'Paday', maori: 'Tiki', bahasa: 'ambil', korean: 'kajyowa', samoan: 'mai i', dutch: 'halen'},
        {id: 5, command: 'Heel', dogName: 'Sara Jessica Barker', russian: 'Ryadom', maori: 'Rekereke', bahasa: 'ninjit', korean: 'suh', samoan: 'mulivae', dutch: 'hiel'},
        {id: 6, command: 'Get me a beer', dogName: 'Chew Barka', russian: 'Prinesi pivo', maori: 'Tiki mai he pia', bahasa: 'minta bir', korean: 'mekju gajyowa', samoan: 'aumai ia au se pia', dutch: 'haal een pintje voor me'}

      ])
    })
}
