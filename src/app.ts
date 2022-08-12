import express from 'express'
import config from 'config'
import { connect } from './utils/connect'
import { loggerInstance } from './utils/logger'
import { routes } from './router/routes'


const app = express()

const PORT = config.get<number>('port')

app.listen(PORT, async () => {
    // Log the server is running
    loggerInstance.info(`Server started on port : http://localhost:${PORT}`)

    // Connect to mongodb
    await connect();

    // Register routes
    routes(app)
})