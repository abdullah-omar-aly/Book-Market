import React from 'react'
import WishlistSheet from '../sheet/wishlist.sheet'
import CartSheet from '../sheet/cart.sheet'
import { getServerSession } from "next-auth/next"
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import SigninModal from '../modals/auth.modal'
import UserNavMenu from '../menu/usernav.menu'

async function Navbar() {

    const session = await getServerSession(authOptions)
    console.log('session', session)

    return (
        <div className='container sticky top-0 bg-white z-10 h-16 border flex justify-between items-center '>
            <h1 className='font-bold text-lg text-primary'>Abdullah Omar</h1>
            <div className='flex gap-3 items-center'>
                <WishlistSheet />
                <CartSheet />
                {!session ? <SigninModal /> : <UserNavMenu />}
            </div>
        </div>
    )
}

export default Navbar