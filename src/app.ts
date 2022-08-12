import express from 'express'
import config from 'config'
import { connect } from './utils/connect'
import { loggerInstance } from './utils/logger'
const app = express()

const PORT = config.get<number>('port')

app.listen(PORT, async () => {
    loggerInstance.info(`Server started on port : http://localhost:${PORT}`)

    await connect();
})