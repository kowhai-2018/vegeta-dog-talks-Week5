const express = require('express')
const router = express.Router()

const db = require('../db')

router.get('/', (req, res) => {
  db.getVegeta()
    .then(vegeta => res.json(vegeta))
    .catch(err => res.status(400).json({ error: err.message }))
})

router.post('/', (req, res) => {
  db.addVegeta(req.body)
    .then(() => res.sendStatus(201))
    .catch(err => res.status(400).json({ error: err.message }))
})

module.exports = router