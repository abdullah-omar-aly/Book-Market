"use client"
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
  } from "@/presentation/components/ui/dialog"
import { Button } from '../ui/button'
import Image from 'next/image'
import SigninButton from '../button/signin.button'

  
function SigninModal() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Sign In</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-center">Sign In</DialogTitle>
                    <DialogDescription className="text-center">
                       Join <span className='font-bold text-black'>Waie</span> commuity with your social media account
                    </DialogDescription>
                </DialogHeader>
                <div className='flex flex-col items-center'>
                    {/* <Button variant='outline' className='border border-black'> */}
                    <SigninButton />
                </div>
            </DialogContent>
        </Dialog>

    )
}

export default SigninModal

