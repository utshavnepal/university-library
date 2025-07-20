'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn, getInitials } from '@/lib/utils'
import Image from 'next/image'
import { Session } from "next-auth"
const Header = ({session}:{session:Session}) => {
    const pathname = usePathname()
  return (
   <header className='my-10 flex justify-between gap-5'>
<Link href='/'>
<Image src='/icons/logo.svg' alt='logo' width={40} height={40}/>

</Link>

<ul className='flex flex-row items-center gap-8'>
    <li>
      <Link href='/library' className={cn(
        "text-base cursor-pointer capitalize",
        pathname === '/library'?"text-yellow-300":"text-amber-50"
      )} >
      Library
      </Link>
    </li>
    <li>
      <Link href='/myprofile'>
<Avatar>
 
  <AvatarFallback className="text-black bg-amber-100">{getInitials(session?.user?.name||"U N")}</AvatarFallback>
</Avatar>
      </Link>
    
    </li>
</ul>
   </header>
  
)}

export default Header