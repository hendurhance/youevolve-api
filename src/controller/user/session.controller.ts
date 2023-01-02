import { Request, Response } from "express";
import { validatePassword } from "../../service/user/user.service";
import { STATUS_CODES } from '../../utils/status';
import { createSession, findSessions, updateSession } from "../../service/user/session.service";
import { signJwt } from '../../utils/jwt.utils';
import config from 'config';

export async function createUserSessionHandler(req: Request, res: Response) {

    // Validate the user password
    const user = await validatePassword(req.body)
    if(!user){
        res.status(STATUS_CODES.UNAUTHORIZED).send('Invalid email or password')
    }
    // Create a session
    const session = await createSession(user._id, req.get("user-agent") || "")
    // Create an access token
    const accessToken = signJwt(
        {...user, session: session._id},
        {expiresIn: config.get("accessTokenTTL")} // 30 minutes
    )
    // Create a refresh token
    const refreshToken = signJwt(
        {...user, session: session._id},
        {expiresIn: config.get("refreshTokenTTL")} // 1 year
    )
    // Return access and refresh tokens
    return res.send({
        accessToken,
        refreshToken
    })
}

export async function getUserSessionHandler(req: Request, res: Response) {
    const userId = res.locals.user._id

    const sessions = await findSessions({user: userId, valid: true})

    return res.send(sessions);
}

export async function deleteSessionHandler(req: Request, res: Response) {
    const sessionId = res.locals.user.session

    await updateSession({_id: sessionId}, {valid: false})

    return res.send({
        accessToken: null,
        refreshToken: null
    })
}