import request from 'superagent'

const vegetaUrl = 'http://localhost:3000/api/v1/vegeta'

export function getVegeta () {
  return request
    .get(vegetaUrl)
    .then(res => res.body)
}

export function appendVegeta (details) {
  return request
    .post(vegetaUrl)
    .send(details)
    .then(res => res.body)
}

export function addVegeta (command, dogName) {
  return request
    .post(`${vegetaUrl}/`)
    .send({command, dogName})
    .then(console.log)
}
