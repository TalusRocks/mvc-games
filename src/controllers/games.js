const model = require('../models/game')

function getAll(req, res, next) {
  res.status(200).json({message:"whatever"})
}

function getOne(req, res, next) {
  next()
}

function create(req, res, next) {
  next()
}

function update(req, res, next) {
  next()
}

function destroy(req, res, next) {
  next()
}

module.exports = { getAll, getOne, create, update, destroy }
