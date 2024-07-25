'use client'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'


const NavigationTestPage = () => {

// CLIENT SIDE NAVIGATION 
    const router = useRouter()
const pathname = usePathname()
const query = useSearchParams()


    const handleClick = () => {
        console.log('clicked')
        router.refresh('/')
    }
  return (
    <div> 
       <Link href='/' prefetch={false}>click here</Link>
       <button onClick={handleClick}>write and redirect</button> 
    </div>
  )
}

export default NavigationTestPage