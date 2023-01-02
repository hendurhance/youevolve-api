import { FilterQuery } from 'mongoose';
import { SessionModel } from '../../models/user/session.model';
import { SessionInterface } from '../../contracts/session.interface';

export async function createSession(userId: string, userAgent: string) {
    const session = await SessionModel.create({ user: userId, userAgent })

    return session.toJSON()
}

export async function findSessions(query: FilterQuery<SessionInterface>) {
    return SessionModel.find(query).lean()
}