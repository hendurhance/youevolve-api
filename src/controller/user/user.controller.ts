import { Request, Response } from "express";
import { loggerInstance } from '../../utils/logger'
import { STATUS_CODES } from "../../utils/status";
import { createUser } from "../../service/user/user.service";

export async function createUserHandler(req: Request, res: Response){
    try{
        const user = await createUser(req.body)
        return user
    }catch (e){
        loggerInstance.error(e)
        return res.status(STATUS_CODES.CONFLICT).send(e.message)
    }
}