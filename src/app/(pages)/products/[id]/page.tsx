import React from 'react'
import { prismaClient } from '@/config/db/prisma-client'
import AddToWishlistButton from '@/presentation/components/button/addToWishlist.button'
import Navbar from '@/presentation/components/shared/navbar.component'
import AddToCartButton from '@/presentation/components/button/addToCart.button'


async function ProductDetailsPage({ params }: { params: { id: string } }) {
  const bookDetails = await prismaClient.book.findUnique({
    where: {
      id: params.id
    }
  })
  // console.log(bookDetails)
  return (
    <>
      <Navbar />
      {/* <div>ProductDetailsPage {params.id}</div> */}
      <div className='bg-gray-200 mx-5 p-5 rounded-xl mt-5'>
        <div className='mx-auto w-fit'>
          <img src={bookDetails?.img} alt={bookDetails?.name} />
        </div>
        <div className='flex py-5 items-center justify-between'>
          <p className='font-bold text-xl'>{bookDetails?.name}</p>
          <AddToWishlistButton />
        </div>
        <div>
          <AddToCartButton />
        </div>
        <div className='mt-5'>
          <h5 className='text-xl font-semibold border-b-2 border-b-primary'>Description</h5>
          <p className='line-clamp-6 pt-2'>{bookDetails?.description}</p>
        </div>

      </div>

    </>
  )
}

export default ProductDetailsPage