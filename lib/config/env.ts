import { z } from 'zod';

export const envSchema = z.object({
    DATABASE_URL: z.string({ required_error: 'DATABASE_URL is required' }),
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string({
        required_error: 'NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY is required',
    }),
    CLERK_SECRET_KEY: z.string({ required_error: 'CLERK_SECRET_KEY is required' }),
    NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY: z.string({
        required_error: 'NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY is required',
    }),
    IMAGEKIT_PRIVATE_KEY: z.string({ required_error: 'IMAGEKIT_PRIVATE_KEY is required' }),
    NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT: z.string({
        required_error: 'NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT is required',
    }),
    NEXT_PUBLIC_CLERK_SIGN_IN_URL: z.string({ required_error: 'NEXT_PUBLIC_CLERK_SIGN_IN_URL is required' }),
    NEXT_PUBLIC_CLERK_SIGN_UP_URL: z.string({ required_error: 'NEXT_PUBLIC_CLERK_SIGN_UP_URL is required' }),
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL: z.string({
        required_error: 'NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL is required',
    }),
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL: z.string({
        required_error: 'NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL is required',
    }),
    NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL: z.string({
        required_error: 'NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL is required',
    }),
    NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL: z.string({
        required_error: 'NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL is required',
    }),
    NEXT_PUBLIC_APP_URL: z.string({ required_error: 'NEXT_PUBLIC_APP_URL is required' }),
});

export default envSchema.parse(process.env);
