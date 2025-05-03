'use client';

import { useForm } from 'react-hook-form';
import { useSignUp } from '@clerk/nextjs';
import { set, z } from 'zod';
import { signUpSchema } from '@/schemas/signUpSchema';
import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

export default function SignUpForm() {
    const [verifying, setVerifying] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [verificationCode, setVerificationCode] = useState('');
    const [authError, setAuthError] = useState(null);
    const { signUp, isLoaded, setActive } = useSignUp();

    // * SignUp Form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<z.infer<typeof signUpSchema>>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            email: '',
            password: '',
            passwordConfirmation: '',
        },
    });
    const onSubmit = async (data: z.infer<typeof signUpSchema>) => {
        if (!isLoaded) return;
        setIsSubmitting(true);
        setAuthError(null);
        try {
            await signUp.create({
                emailAddress: data.email,
                password: data.password,
            });
            await signUp.prepareEmailAddressVerification({
                strategy: 'email_code',
            });
            setVerifying(true);
        } catch (error: any) {
            console.error(error);
            setAuthError(error.errors?.[0]?.message);
        } finally {
            setIsSubmitting(false);
        }
    };
    const handleVerificationSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isLoaded || !signUp) return;
        setIsSubmitting(true);
        setAuthError(null);

        try {
            const result = await signUp.attemptEmailAddressVerification({
                code: verificationCode,
            });

            // todo: CONSOLE result

            if (result.status === 'complete') {
                await setActive({ session: result.createdSessionId });

                // todo: redirect to dashboard
            }
        } catch (error) {}
    };

    if (verifying) {
        return <div>verifying</div>;
    }

    return (
        <>
            <h1>Signup form with email and all</h1>
        </>
    );
}
