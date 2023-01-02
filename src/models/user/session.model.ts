import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import config from 'config';
import { UserInterface } from '../../contracts/user.interface';
import { SessionSchema } from '../../schema/session.schema';
import { SessionInterface } from '../../contracts/session.interface';


export const SessionModel = mongoose.model<SessionInterface>('Session', SessionSchema)

