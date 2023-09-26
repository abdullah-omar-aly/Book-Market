"use client"
import React from 'react'
import { Button } from '../ui/button'
import GoogleLogo from '@/presentation/assets/svgs/google-logo';
import { signIn } from "next-auth/react"

function SigninButton() {
    return (
        <Button onClick={() => signIn('google')}>
            <GoogleLogo />
            <span className='inline-block ml-3'>Sign in with Google</span>
        </Button>
    )
}

export default SigninButton