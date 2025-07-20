"use client"
import React from 'react'

const page = () => {
  return (
   <main className=' flex min-h-screen flex-1 flex-col bg-pattern bg-cover bg-top bg-dark-100 px-5 xs:px-10 md:px-16 items-center justify-center'>
     <h1 className='text-5xl font-bold font-sans text-lime-100' >
        Whoa, Slowdown there speedy!
     </h1>
     <p className='mt-3 text-center max-w-xl text-lime-100'>
        looks like you&apos;ve been little too eager. we&apos;ve put a temporary pause on your excitment. chill for a bit and try again shortly
     </p>
   </main>
  )
}

export default page