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
  const game = games.find(el => el.id === id)

  let response
  if (!game) {
    response = { errors: { message: "Could not find that game"} }
  } else {
    response = game
  }
  return response
}

function create(body) {
  const name = body.name
  const weight = body.weight
  const own = body.own
  const id = uuid()

  let response
  if (!name || !weight || !own) {
    response = { errors: { message: "Must include name, weight, and ownership (true/false)"} }
  } else {
    const game = { name, weight, own, id }
    games.push(game)
    response = game
  }
  return response
}

function update(id, body) {
  const game = games.find(game => game.id === id)

  let response
  if (!game) {
    response = { errors: { message: "Could not find that game"} }
  } else if (!body.name || !body.weight || body.own === undefined) {
    response = { errors: { message: "Must include name, weight, and ownership (true/false)"} }
  } else {
    console.log(body.own);
    game.name = body.name
    game.weight = body.weight
    game.own = body.own
    response = game
  }
  return response
}

function destroy(id) {
  const game = games.find(game => game.id === id)

  let response
  if (!game) {
    response = { errors: { message: "Could not find that game"} }
  } else {
    let index = games.indexOf(game)
    let deletedGame = games.splice(index, 1)
    response = deletedGame
  }
  return response
}

module.exports = { getAll, getOne, create, update, destroy }
