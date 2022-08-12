import dotenv from 'dotenv';

dotenv.config();

export default {
    port: process.env.PORT || 3000,
    dbURI : process.env.DB_URI || 'mongodb://localhost:27017/test',
    saltWorkFactor: process.env.BCRYPT_ROUNDS || 10,
}