import { Request, Response } from 'express';
import { CreateCategoryInput, UpdateCategoryInput, ReadCategoryInput, DeleteCategoryInput } from '../../validations/category/category.validation';
import { createCategory, deleteCategory, findAndUpdateCategory, findCategory, getCategories } from '../../service/category/category.service';
import { findProductsByCategory } from '../../service/product/product.service';
import { STATUS_CODES } from '../../utils/status';


export async function createCategoryHandler(req: Request<{}, {}, CreateCategoryInput['body']>, res: Response) {
    const userId = res.locals.user._id

    const body = req.body
    const category = await createCategory({...body, user: userId})
    return res.send(category)
}

export async function updateCategoryHandler(req: Request<UpdateCategoryInput['params']>, res: Response) {
    
    const userId = res.locals.user._id
    
    const categoryId = req.params.categoryId
    const update = req.body

    const category = await findCategory({categoryId})
    if(!category) return res.sendStatus(STATUS_CODES.NOT_FOUND)
    if(String(category.user) !== userId) return res.sendStatus(STATUS_CODES.UNAUTHORIZED)
    const updatedCategory = await findAndUpdateCategory({ categoryId }, update, {
        new: true,
    })

    return res.send(updatedCategory)
    
}

export async function getAllCategoryHandler(req: Request, res: Response) {
    
    const categories = await getCategories()

    return res.send(categories)
}

export async function getCategoryHandler(req: Request<ReadCategoryInput['params']>, res: Response) {

    const categoryId = req.params.categoryId

    const category = await findCategory({categoryId})
    if(!category) return res.sendStatus(STATUS_CODES.NOT_FOUND)

    return res.send(category)
}

export async function getProductsByCategoryHandler(req: Request<ReadCategoryInput['params']>, res: Response) {

    const categoryId = req.params.categoryId

    const category = await findCategory({categoryId})
    if(!category) return res.sendStatus(STATUS_CODES.NOT_FOUND)

    const products = await findProductsByCategory(category._id)
    return res.send(products)
    
}

export async function deleteCategoryHandler(req: Request<DeleteCategoryInput['params']>, res: Response) {
    const userId = res.locals.user._id
    
    const categoryId = req.params.categoryId

    const category = await findCategory({categoryId})
    if(!category) return res.sendStatus(STATUS_CODES.NOT_FOUND)
    if(String(category.user) !== userId) return res.sendStatus(STATUS_CODES.UNAUTHORIZED)
    await deleteCategory({categoryId})

    return res.sendStatus(STATUS_CODES.NO_CONTENT)
}