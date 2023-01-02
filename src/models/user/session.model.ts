import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import config from 'config';
import { UserInterface } from '../../contracts/user.interface';
import { SessionSchema } from '../../schema/session.schema';





export const SessionModel = mongoose.model('Session', SessionSchema)

