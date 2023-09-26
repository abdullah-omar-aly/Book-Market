import BookCard from '@/presentation/components/card/book.card'
import Navbar from '@/presentation/components/shared/navbar.component'
import { Button } from '@/presentation/components/ui/button'
import { Input } from '@/presentation/components/ui/input'
import Link from 'next/link'
// import { products } from '../../dummyData'
import { prismaClient } from '@/config/db/prisma-client'
import TestVeiw from '@/presentation/views/test.view'



export default async function Home() {


  const products = await prismaClient.book.findMany()
  // console.log(data)

  return (
    <main>
      <Navbar />
      <section className="min-h-[400px] bg-[#c6ac9a] flex flex-col items-center justify-center gap-4 bg-[url('/banners/hero-banner.jpg')] bg-cover  bg-center lg:bg-top">
        <h2 className='font-bold text-3xl text-center text-white'>
          Find your favourite books with the lowest price

        </h2>
        <div className="flex w-full max-w-sm  items-center">
          <Input type="text" placeholder="Book title, Author, Publisher" className='rounded-e-none bg-white border-none' />
          <Button type="submit" className='rounded-s-none'>Search</Button>
        </div>
      </section>

      {/* featured books */}
      <TestVeiw />
    </main>
  )
}
