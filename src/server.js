require('dotenv').config();
const knex = require('knex')
const app = require('./app')

const { PORT, DB_URL } = require('./config')

const db = knex({
  client: 'pg',
  connection: DB_URL,
})

app.set('db', db)
app.listen(PORT, () => {
  console.log(`Server listening at https://brfebwbluaohdy:08d1425cecd1afafdf782fa501879757bd5e04ad5c2a92386262074e518b9d6a@ec2-50-19-95-77.compute-1.amazonaws.com:5432/debnapqhhptg4q:${PORT}`)
})
