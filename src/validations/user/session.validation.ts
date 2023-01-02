import {object, string} from 'zod'

export const createSessionValidation = object({
    body: object({
        email: string({
            required_error: 'Email is required and cannot be empty.'
        }),
        password: string({
            required_error: 'Password is required and cannot be empty.'
        })
    })
})