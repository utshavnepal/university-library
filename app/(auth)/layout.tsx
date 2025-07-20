import { auth } from '@/auth'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React, { ReactNode } from 'react'

const layout =async ({children}:{children:ReactNode}) => {
  const session = await auth()
  if (session) redirect('/')
  return <main className='relative flex flex-col-reverse text-lime-100 sm:flex-row' >
    <section className='my-auto flex h-full min-h-screen flex-1 items-center bg-pattern bg-cover bg-top bg-dark-100 px-5 py-10'>
       <div className='gradient-vertical mx-auto flex max-w-xl flex-col gap-6 rounded-lg p-1'>
        <div className="flex flex-row gap-3">
 <Image src='/icons/logo.svg' alt='logo' width={37} height={37}/>
      <h1 className='text-2xl font-semibold text-white'>Bookwise</h1>

        </div>
      <div>
        {children}
       </div>
       </div>
      
    </section>

    <section className='sticky h-40 w-full sm:top-0 sm:h-screen sm:flex-1'>
<Image src='/images/auth-illustration.png' alt='alt illustrator' height={100} width={100} className='size-full object-cover'/>
    </section>
  </main>
}

export default layout