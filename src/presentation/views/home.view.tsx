import React from 'react'
import { Button } from '@/presentation/components/ui/button'
import { Input } from '@/presentation/components/ui/input'
import Link from 'next/link'
import BookCard from '../components/card/book.card'
import { prismaClient } from '@/config/db/prisma-client'
async function HomePage() {

    const products = await prismaClient.book.findMany()

    return (
        <div>

            {/* Hero banner */}
            <section className="min-h-[400px] bg-[#c6ac9a] flex flex-col items-center justify-center gap-4 bg-[url('/banners/hero-banner.jpg')] bg-cover  bg-center lg:bg-top">
                <h2 className='font-bold text-3xl text-center text-white'>
                    Find your favourite books with the lowest price

                </h2>
                <div className="flex w-full max-w-sm  items-center">
                    <Input type="text" placeholder="Book title, Author, Publisher" className='rounded-e-none bg-white border-none' />
                    <Button type="submit" className='rounded-s-none'>Search</Button>
                </div>
            </section>

            {/* featured books section */}
            <section>
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">Featured Books</h2>

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => (
                            <Link href={`/books/${product.id}`} key={product.id} className="group relative block" >
                                <BookCard product={product} />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage