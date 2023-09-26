import { prismaClient } from '@/config/db/prisma-client'
import AddToWishlistButton from '@/presentation/components/button/addToWishlist.button'
import Navbar from '@/presentation/components/shared/navbar.component'
import React from 'react'

async function ProductDetailsPage({ params }: { params: { id: string } }) {
  const bookDetails = await prismaClient.book.findUnique({
    where: {
      id: params.id
    }
  })
  console.log(bookDetails)
  return (
    <>
        <Navbar />
        <div>ProductDetailsPage {params.id}</div>
        <div>
          {bookDetails?.name}
        </div>
        <AddToWishlistButton />
    </>
  )
}

export default ProductDetailsPage