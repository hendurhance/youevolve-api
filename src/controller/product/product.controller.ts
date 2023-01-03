import { Request, Response } from 'express';
import { STATUS_CODES } from '../../utils/status';
import { CreateProductInput, ReadProductInput, UpdateProductInput, DeleteProductInput } from '../../validations/product/product.validation';
import { findCategory } from '../../service/category/category.service';
import { createProduct, deleteProduct, findAndUpdateProduct, findProduct, getProducts } from '../../service/product/product.service';
import { update } from 'lodash';


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

export async function getAllProductHandler(req: Request, res: Response) {
    
    const products = await getProducts()

    return res.send(products)
}

export async function updateProductHandler(req: Request<UpdateProductInput['params']>, res: Response) {
    
    const userId = res.locals.user._id
    
    const body = req.body
    const categoryId = body.categoryId
    const productId = req.params.productId
    const category = await findCategory({categoryId})
    const product = await findProduct({productId})
    if(!category || !product) return res.sendStatus(STATUS_CODES.FORBIDDEN)
    if(String(category.user) !== userId || String(product.user) !== userId) return res.sendStatus(STATUS_CODES.UNAUTHORIZED)

    const update = {
        ...body,
        category: category._id
    }
    const updatedProduct = await findAndUpdateProduct({ productId }, update, {
        new: true,
    })

    return res.send(updatedProduct)
}

export async function getProductHandler(req: Request, res: Response) {
    const productId = req.params.productId

    const product = await findProduct({productId})
    if(!product) return res.sendStatus(STATUS_CODES.FORBIDDEN)
    return res.send(product)
}


export async function deleteProductHandler(req: Request<DeleteProductInput['params']>, res: Response) {
    const userId = res.locals.user._id
    
    const productId = req.params.productId

    const product = await findCategory({productId})
    if(!product) return res.sendStatus(STATUS_CODES.NOT_FOUND)
    if(String(product.user) !== userId) return res.sendStatus(STATUS_CODES.UNAUTHORIZED)
    await deleteProduct({productId})

    return res.sendStatus(STATUS_CODES.NO_CONTENT)
}