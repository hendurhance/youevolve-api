import { Express, Request, Response } from "express"
import { STATUS_CODES } from "../utils/status"
import { createUserHandler } from "../controller/user/user.controller"
import { validate } from "../middleware/validateResource"
import { createUserValidation } from '../validations/user/user.validation';
import { createUserSessionHandler, deleteSessionHandler, getUserSessionHandler } from "../controller/user/session.controller";
import { createSessionValidation } from "../validations/user/session.validation";
import requireUser from '../middleware/requireUser';
export const routes = (app: Express) => {

    app.get('/test', (req: Request, res: Response) => {
        res.sendStatus(STATUS_CODES.OK)
    })

    app.post('/api/users', validate(createUserValidation), createUserHandler)

    app.post('/api/sessions', validate(createSessionValidation), createUserSessionHandler)

    app.get('/api/sessions', requireUser, getUserSessionHandler)

    app.delete('/api/sessions', requireUser, deleteSessionHandler)

}