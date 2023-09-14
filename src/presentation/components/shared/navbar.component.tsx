import React from 'react'
import WishlistSheet from '../sheet/wishlist.sheet'
import CartSheet from '../sheet/cart.sheet'

function Navbar() {
    return (
        <div className='h-16 border flex justify-between items-center container'>
            <h1 className='font-bold text-lg text-primary'>Abdullah Omar</h1>
            <div className='flex gap-3'>
                <WishlistSheet />
                <CartSheet />
            </div>
        </div>
    )
}

export default Navbar