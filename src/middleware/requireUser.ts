import { Request, Response, NextFunction } from 'express';
import { STATUS_CODES } from '../utils/status';


const requireUser = (req: Request, res: Response, next: NextFunction) => {
    const user = res.locals.user

    if(!user){
        return res.sendStatus(STATUS_CODES.FORBIDDEN)
        return next()
    }

    return next();
}

export default requireUser