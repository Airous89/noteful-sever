const jsonServer = require('json-server')
const db = require('./db')

const server = jsonServer.create()
const router = jsonServer.router(db())
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

server.listen(5432, () => {
  console.log('Noteful json-server started at https://brfebwbluaohdy:08d1425cecd1afafdf782fa501879757bd5e04ad5c2a92386262074e518b9d6a@ec2-50-19-95-77.compute-1.amazonaws.com:5432/debnapqhhptg4q')
})
