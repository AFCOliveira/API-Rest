import fastify from 'fastify' // install fastify and import
import cookies from '@fastify/cookie'
import { env } from './env'
import { transactionsRoutes } from './routes/transactions'

const app = fastify() // create a constate to receive the functions of fastify
app.register(cookies)

app.register(transactionsRoutes, {
  prefix: 'transactions',
})

app
  .listen({
    // method listen: first parameter is the port number and second is a promise for informate that finish
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running...')
  })
