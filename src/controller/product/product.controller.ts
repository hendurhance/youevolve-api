import { Request, Response } from 'express';
import { STATUS_CODES } from '../../utils/status';
import { CreateProductInput } from '../../validations/product/product.validation';
import { findCategory } from '../../service/category/category.service';
import { createProduct } from '../../service/product/product.service';


export async function createProductHandler(req: Request<{}, {}, CreateProductInput['body']>, res: Response) {
    const userId = res.locals.user._id

    const body = req.body
    const categoryId = body.categoryId

    const category = await findCategory({categoryId})
    if(!category) return res.sendStatus(STATUS_CODES.FORBIDDEN)
    if(String(category.user) !== userId) return res.sendStatus(STATUS_CODES.UNAUTHORIZED)

    const product = await createProduct({...body, user: userId, category: category._id})
    return res.send(product)
}

export async function updateProductHandler(req: Request, res: Response) {
    
    const userId = res.locals.user._id
    
    const categoryId = req.params.categoryId
    const update = req.body
    
}

export async function getProductHandler(req: Request, res: Response) {

}

export async function getProductByCategoryHandler(req: Request, res: Response) {

}


export async function deleteProductHandler(req: Request, res: Response) {
    const userId = res.locals.user._id
    
}