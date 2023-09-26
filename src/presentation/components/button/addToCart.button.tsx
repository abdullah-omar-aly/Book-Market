"use client";
import React from 'react'
import { Button } from '@/presentation/components/ui/button'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function AddToCartButton() {
  return (
    <Button className='w-full'>
    <FontAwesomeIcon
      width={20}
      height={20}
      icon={faCartShopping}
    />
    <span className='pl-3'>Add to cart</span>
  </Button>
  )
}

export default AddToCartButton