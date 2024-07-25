
import Link from "next/link"
import Links from "./links/Links"
import style from'./navbar.module.css'

const Navbar = () => {
  return (
    <div>
        <div className= {style.container}>
          <Link href='/' className={style.logo}>  logo</Link>
          <div>
            <Links/>
            </div>
         </div>
    </div>
  )
}

export default Navbar