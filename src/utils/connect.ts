import mongoose from "mongoose";
import config from 'config';
import { loggerInstance } from './logger';


export const connect = async () => {
    const dbURI = config.get<string>('dbURI')

    // Connect to MongoDB
    try {
        await mongoose.connect(dbURI)
        loggerInstance.info(`Connected to MongoDB: ${dbURI}`)
    } catch (error) {
        loggerInstance.error(`Error connecting to MongoDB: ${error}`)
        process.exit(1)
    }
}