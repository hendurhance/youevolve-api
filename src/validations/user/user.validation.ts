import { object, string } from 'zod'

export const createUserRequest = object({
    body: object({
        name: string({
            required_error: 'Name is required and cannot be empty.'
        }),
        password: string({
            required_error: 'Password is required and cannot be empty.'
        }).min(8, 'Password must be at least 8 characters long.'),
        passwordConfirmation: string({
            required_error: 'Password Confirmation is required and cannot be empty.'
        }),
        email: string({
            required_error: 'Email is required and cannot be empty.'
        }).email('Please enter a valid email address in the email field')
    }).refine((data) => data.password = data.passwordConfirmation, {
        message: 'Passwords do not match.',
        path: ['passwordConfirmation'],
    })
})
