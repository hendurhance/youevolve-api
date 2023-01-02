import { Request, Response } from "express";
import { omit } from "lodash";
import { loggerInstance } from '../../utils/logger'
import { STATUS_CODES } from "../../utils/status";
import { createUser } from "../../service/user/user.service";
import { CreateUserInput } from '../../validations/user/user.validation';

export async function createUserHandler(req: Request<{}, {}, CreateUserInput["body"]>, res: Response) {
    try {
        const user = await createUser(req.body)
        return res.send(omit(user.toJSON(), ['password']))
    } catch (e: any) {
        loggerInstance.error(e)
        return res.status(STATUS_CODES.CONFLICT).send(e.message)
    }
}