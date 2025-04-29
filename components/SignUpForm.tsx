'use client';

import { useForm } from 'react-hook-form';
import { useSignUp } from '@clerk/nextjs';
import { z } from 'zod';
import { signUpSchema } from '@/schemas/signUpSchema';
import { useState } from 'react';

export default function SignUpForm() {
    const [verifying, setVerifying] = useState(false);
    const { signUp, isLoaded, setActive } = useSignUp();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<z.infer<typeof signUpSchema>>({});
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
