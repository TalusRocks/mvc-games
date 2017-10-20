const uuid = require('uuid/v4')
const games = [
  {
    name: "Scythe",
    weight: 3.34,
    own: true,
    id: uuid()
  },
  {
    name: "Terraforming Mars",
    weight: 3.24,
    own: true,
    id: uuid()
  },
  {
    name: "Azul",
    weight: 2.00,
    own: false,
    id: 'd7a0ddfe-e5b8-44f5-a3e6-0fea59c53394'
  }
]

function getAll() {
  return games
}

function getOne(id) {
  return games.find(el => el.id === id)
}

function create(body) {
  const name = body.name
  const weight = body.weight
  const own = body.own
  const id = uuid()

  const game = { name, weight, own, id }
  games.push(game)
  return game
}

function update(id, body) {
  const game = games.find(game => game.id === id)

  game.name = body.name
  game.weight = body.weight
  game.own = body.own

  return game
}

function destroy(id) {
  const game = games.find(game => game.id === id)

  let index = games.indexOf(game)
  let deletedGame = games.splice(index, 1)

  return deletedGame
}

module.exports = { getAll, getOne, create, update, destroy }
