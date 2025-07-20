
import { signOut } from '@/auth'
import BookList from '@/components/BookList'
import { Button } from '@/components/ui/button'
import { sampleBooks } from '@/constants'
import React from 'react'

const page = () => {
  return (
    <div>
        <form action={async()=>{
            "use server"
            await signOut()
        }}>
<Button style={{background:'#EED1AC', color:'black'}}>
    Logout
</Button>
        </form>
        <BookList title="borrowed books " books={sampleBooks} />
    </div>
  )
}

export default page