import { app } from './app'
import { env } from './env'

app
  .listen({
    // method listen: first parameter is the port number and second is a promise for informate that finish
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running...')
  })
