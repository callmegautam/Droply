'use client';

import { useForm } from 'react-hook-form';
import { useSignUp } from '@clerk/nextjs';
import { z } from 'zod';
import { signUpSchema } from '@/schemas/signUpSchema';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

export default function SignUpForm() {
    const [verifying, setVerifying] = useState(false);
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
    const onSubmit = async () => {};
    const handleVerificationSubmit = async () => {};

    if (verifying) {
        return <div>verifying</div>;
    }

    return (
        <>
            <h1>Signup form with email and all</h1>
        </>
    );
}
