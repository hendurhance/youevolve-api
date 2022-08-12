import { Express, Request, Response } from "express"
import { STATUS_CODES } from "../utils/status"
export const routes = (app: Express) => {

    app.get('/test', (req: Request, res: Response) => {
        res.sendStatus(STATUS_CODES.OK)
    })

}