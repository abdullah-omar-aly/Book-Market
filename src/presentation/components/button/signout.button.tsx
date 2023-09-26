"use client"

import React from 'react'
import { signOut, useSession } from 'next-auth/react'

function SignoutButton() {
  const session = useSession()
  console.log(session)

  return (
    <button onClick={() => signOut()} className='bg-red-300 block'>
        Sign Out
    </button>
  )
}

export default SignoutButton