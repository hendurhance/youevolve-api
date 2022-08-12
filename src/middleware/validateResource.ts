import { AnyZodObject } from "zod";
import { Request, Response, NextFunction } from "express"
import { STATUS_CODES } from '../utils/status';

export const validate = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
    try {
        schema.parse({
            body: req.body,
            params: req.params,
            query: req.query
        })
    }catch(err: any) {
        res.status(STATUS_CODES.BAD_REQUEST).send(err.errors)
    }
}