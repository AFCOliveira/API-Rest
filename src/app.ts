import { transactionsRoutes } from './routes/transactions'
import fastify from 'fastify' // install fastify and import
import cookies from '@fastify/cookie'

export const app = fastify() // create a constate to receive the functions of fastify
app.register(cookies)

app.register(transactionsRoutes, {
  prefix: 'transactions',
})
