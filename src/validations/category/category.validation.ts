import { object, number, string, TypeOf } from 'zod'

const payload = {
    body: object({
        title: string({
            required_error: 'Title is required and cannot be empty.'
        })
    })
}

const params = {
    params: object({
        categoryId: string({
            required_error: 'categoryId is required and cannot be empty'
        })
    })
}

export const createCategoryValidation = object({
    ...payload
})

export const updateCategoryValidation = object({
    ...payload,
    ...params
})

export const deleteCategoryValidation = object({
    ...params
})

export const getCategoryValidation = object({
    ...params
})

export type CreateCategoryInput = TypeOf<typeof createCategoryValidation>
export type UpdateCategoryInput = TypeOf<typeof updateCategoryValidation>
export type ReadCategoryInput = TypeOf<typeof getCategoryValidation>
export type DeleteCategoryInput = TypeOf<typeof deleteCategoryValidation>
