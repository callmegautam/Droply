import { PassThrough } from 'stream';
import { z } from 'zod';

export const signUpSchema = z
    .object({
        email: z
            .string()
            .email({ message: 'Please enter a valid email' })
            .min(1, { message: 'Email is required' }),
        password: z
            .string()
            .min(1, { message: 'Password is required' })
            .min(8, { message: 'Password must be at least 8 characters' }),
        passwordConfirmation: z
            .string()
            .min(1, { message: 'Password is required' })
            .min(8, { message: 'Password must be at least 8 characters' }),
    })
    .refine((data) => data.password === data.passwordConfirmation, {
        message: 'Passwords do not match',
        path: ['passwordConfirmation'],
    });
