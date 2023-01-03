import { object, number, string, TypeOf } from 'zod'

const payload = {
    body: object({
        title: string({
            required_error: 'Title is required and cannot be empty.'
        }),
        description: string({
            required_error: 'Description is required and cannot be empty.'
        }).max(255, 'Description must be no more than 255 characters long.'),
        price: number({
            required_error: 'Price is required and must be a number'
        }).min(100, 'Price must be greater than NGN100'),
        image: string({
            required_error: 'Image is required and cannot be empty.'
        }),
        categoryId: string({
            required_error: 'categoryId is required and cannot be empty.'
        })
    })
}

const params = {
    params: object({
        productId: string({
            required_error: 'productId is required and cannot be empty'
        })
    })
}

export const createProductValidation = object({
    ...payload
})

export const updateProductValidation = object({
    ...payload,
    ...params
})

export const deleteProductValidation = object({
    ...params
})

export const getProductValidation = object({
    ...params
})

export type CreateProductInput = TypeOf<typeof createProductValidation>
export type UpdateProductInput = TypeOf<typeof updateProductValidation>
export type ReadProductInput = TypeOf<typeof getProductValidation>
export type DeleteProductInput = TypeOf<typeof deleteProductValidation>
