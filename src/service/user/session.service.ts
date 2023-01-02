import { FilterQuery, UpdateQuery } from 'mongoose';
import { SessionModel } from '../../models/user/session.model';
import { SessionInterface } from '../../contracts/session.interface';
import { verifyJwt, signJwt } from '../../utils/jwt.utils';
import { get } from 'lodash';
import { findUser } from './user.service';
import config from 'config';

export async function createSession(userId: string, userAgent: string) {
    const session = await SessionModel.create({ user: userId, userAgent })

    return session.toJSON()
}

export async function findSessions(query: FilterQuery<SessionInterface>) {
    return SessionModel.find(query).lean()
}

export async function updateSession(query: FilterQuery<SessionInterface>, update: UpdateQuery<SessionInterface>) { 
    return SessionModel.updateOne(query, update)
}

export async function reIssueAccessToken({refreshToken}: {
    refreshToken: string
}) {
    const { decoded } = verifyJwt(refreshToken)
    if(!decoded || !get(decoded, 'session')) return false

    const session = await SessionModel.findById(get(decoded, 'session'))

    if(!session || !session.valid) return false

    const user = await findUser({ _id: session.user })

    if(!user) return false

    // Create an access token
    const accessToken = signJwt(
        {...user, session: session._id},
        {expiresIn: config.get("accessTokenTTL")} // 30 minutes
    )
    return accessToken
}