import logger from 'pino'
import dayjs from 'dayjs'

export const loggerInstance = logger({
    transport: {
        target: 'pino-pretty',
        options: {
          colorize: true
        }
      },
    base: {
        pid: false,
    },
    timestamp: () =>   `time:${dayjs().format('YYYY-MM-DD HH:mm:ss')}`,
})