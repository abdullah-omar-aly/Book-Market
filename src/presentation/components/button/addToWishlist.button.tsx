"use client"
import React from 'react'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function AddToWishlistButton() {
  return (
    <button>
      <FontAwesomeIcon
        icon={faHeart}
        className='text-primary text-xl'
      />
    </button>
  )
}

export default AddToWishlistButton