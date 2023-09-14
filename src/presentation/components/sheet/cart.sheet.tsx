// "use client"
import React from 'react'
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/presentation/components/ui/sheet"

const CartComponent = () => {
    <div className=' bg-dark-gray w-full h-screen text-white px-4 flex flex-col '>
        {/* <h2 className=' py-6 uppercase  border-normal-gray border-b font-semibold text-lg flex justify-between items-center h-20'>
                        <div>
                            <span>your cart</span>
                            <span className='ml-3 text-sm font-normal lowercase text-slate-300'>{`(${cart.cartProducts.length} items)`}</span>
                        </div>
                        <button
                            onClick={() => { dispatch(cartActions.hideCart()) }}
                            className='cursor-pointer text-2xl mr-2 p-2 border-none'
                        >
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                    </h2>

                    {
                        cart.cartProducts.length === 0
                            ? <p className='text-sm pt-4'>Your cart is currently empty</p>
                            : <div
                                className='flex flex-col justify-between h-full '
                            >

                                <div className='cart-items flex flex-col overflow-auto '
                                    style={{ maxHeight: "calc(100vh - 240px)" }}
                                >
                                    {cart.cartProducts.map((cartProduct, ind) => (
                                        <CartProduct key={ind} productData={cartProduct} />
                                    ))}
                                    <style jsx="true">
                                        {`
                                .cart-items::-webkit-scrollbar {
                                    width: 5px;
                                  }
                                `}
                                    </style>
                                </div>
                                <div className='border-t border-normal-gray h-40'>
                                    <div className='flex justify-between items-center py-2' >
                                        <span className='uppercase'>subtotal</span>
                                        <span>{cart.totalPrice} $</span>
                                    </div>
                                    <p className="text-center italic text-slate-400">Shipping, taxes, and discounts calculated at checkout</p>
                                    <button
                                        className='uppercase bg-primary w-full py-2 my-3 border-none'
                                    >
                                        <span className='mr-3'>check out</span>
                                        <FontAwesomeIcon icon={faArrowRightLong} />

                                    </button>
                                </div>
                            </div>



                    } */}

    </div>
}

function CartContent() {
    return (
        <SheetHeader>
            <SheetTitle className='text-left border-b pb-3'>
                <div className='text-'>
                    <span className='font-bold'>Your Cart</span>
                    <span className='text-sm inline-block ml-3'>(0 items)</span>
                </div>
            </SheetTitle>
            <SheetDescription>
                Your cart is currently empty
            </SheetDescription>
        </SheetHeader>
    )
}

function CartSheet() {
    return (
        <>
            <div className='md:hidden'>
                <Sheet>
                    <SheetTrigger>
                        <FontAwesomeIcon
                            width={20}
                            height={20}
                            icon={faCartShopping}
                            className="text-primary"
                        />


                    </SheetTrigger>
                    <SheetContent side='bottom' className="rounded-xl h-[calc(85%)] xl:m-4">
                        <CartContent />
                    </SheetContent>
                </Sheet>
            </div>
            <div className='hidden md:block'>
                <Sheet>
                    <SheetTrigger>
                        <FontAwesomeIcon
                            width={20}
                            height={20}
                            icon={faCartShopping}
                            className="text-primary"
                        />


                    </SheetTrigger>
                    <SheetContent side='right'>
                        <CartContent />
                    </SheetContent>
                </Sheet>
            </div>
        </>
    )
}

export default CartSheet
