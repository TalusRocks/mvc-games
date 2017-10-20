const model = require('../models/game')

function getAll(req, res, next) {
  const data = model.getAll()

  res.status(200).json({data})
}

function getOne(req, res, next) {
  const id = req.params.id
  console.log(req.params);
  const data = model.getOne(id)

  res.status(200).json({ data })
}

function create(req, res, next) {
  const data = model.create(req.body)

  res.status(201).json({ data })
}

function update(req, res, next) {
  const id = req.params.id
  const body = req.body
  const data = model.update(id, body)

  res.status(200).json({ data })
}

function destroy(req, res, next) {
  const id = req.params.id
  const data = model.destroy(id)

  res.status(200).json({ data })
}

module.exports = { getAll, getOne, create, update, destroy }
