import { Express, Request, Response } from "express"
import { STATUS_CODES } from "../utils/status"
import { createUserHandler } from "../controller/user/user.controller"
import { validate } from "../middleware/validateResource"
import { createUserValidation } from '../validations/user/user.validation';
import { createUserSessionHandler, deleteSessionHandler, getUserSessionHandler } from "../controller/user/session.controller";
import { createSessionValidation } from "../validations/user/session.validation";
import requireUser from '../middleware/requireUser';
import { createCategoryValidation, updateCategoryValidation, getCategoryValidation, deleteCategoryValidation, getCategoryProductsValidation } from '../validations/category/category.validation';
import { createCategoryHandler, deleteCategoryHandler, getAllCategoryHandler, getCategoryHandler, updateCategoryHandler } from "../controller/category/category.controller";
import { createProductValidation } from '../validations/product/product.validation';
import { createProductHandler } from "../controller/product/product.controller";
export const routes = (app: Express) => {

    app.get('/test', (req: Request, res: Response) => {
        res.sendStatus(STATUS_CODES.OK)
    })

    app.post('/api/users', validate(createUserValidation), createUserHandler)

    app.post('/api/sessions', validate(createSessionValidation), createUserSessionHandler)

    app.get('/api/sessions', requireUser, getUserSessionHandler)

    app.delete('/api/sessions', requireUser, deleteSessionHandler)


    // Category Routes
    app.post('/api/categories', [requireUser, validate(createCategoryValidation)], createCategoryHandler)

    app.put('/api/categories/:categoryId', [requireUser, validate(updateCategoryValidation)], updateCategoryHandler)

    app.get('/api/categories', getAllCategoryHandler)

    app.get('/api/categories/:categoryId', [validate(getCategoryValidation)], getCategoryHandler)

    app.delete('/api/categories/:categoryId', [requireUser, validate(deleteCategoryValidation)], deleteCategoryHandler)

    // Product Routes
    app.post('/api/products', [requireUser, validate(createProductValidation)], createProductHandler)

    app.put('/api/products/:productId', [requireUser, validate(updateCategoryValidation)], updateCategoryHandler)

    app.get('/api/products/:productId', [validate(getCategoryValidation)], getCategoryHandler)

    app.get('/api/products/:productId', [validate(getCategoryValidation)], getCategoryHandler)

    app.delete('/api/products/:productId', [requireUser, validate(deleteCategoryValidation)], deleteCategoryHandler)


}