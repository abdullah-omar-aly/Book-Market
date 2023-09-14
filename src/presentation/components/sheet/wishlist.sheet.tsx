import React from 'react'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/presentation/components/ui/sheet"

function Wishlist() {
    return (
        <SheetHeader>
            <SheetTitle className='text-left border-b pb-3'>
                <div className='text-'>
                    <span className='font-bold'>Your Wishlist</span>
                    <span className='text-sm inline-block ml-3'>(0 items)</span>
                </div>
            </SheetTitle>
            <SheetDescription>
                Your Wishlist is currently empty
            </SheetDescription>
        </SheetHeader>
    )
}

function WishlistSheet() {
    return (
        <>
            <div className='md:hidden'>
                <Sheet>
                    <SheetTrigger>
                        <FontAwesomeIcon
                            width={20}
                            height={20}
                            icon={faHeart}
                            className="text-primary"
                        />

                    
                    </SheetTrigger>
                    <SheetContent side='bottom' className="rounded-xl h-[calc(85%)] xl:m-4">
                        <Wishlist />
                    </SheetContent>

                </Sheet>
            </div>
            <div className='hidden md:block'>
                <Sheet>
                    <SheetTrigger>
                        <FontAwesomeIcon
                            width={20}
                            height={20}
                            icon={faHeart}
                            className="text-primary"
                        />
                    </SheetTrigger>
                    <SheetContent side='right'>
                        <Wishlist />
                    </SheetContent>

                </Sheet>
            </div>
        </>
    )
}

export default WishlistSheet
