import { useState } from "react"
import {logo,close,menu} from "../assets"
import {navLinks} from "../constants"
// import Close from "../assets/close.svg"
import { motion } from "framer-motion"
const Navbar = () => {
  const [nav, setnav] = useState(false)
  return (
    <nav className="w-full flex-6 flex justify-between items-center navbar mt-7">
      <img src={logo} className="w-[190px]" alt="hookbank" />
      <ul className="list-none justify-end items-center flex-1  sm:flex hidden">
        {navLinks.map((nav) =>(
          <li key={nav.id} className="text-[16px] font-normal font-poppins mr-10 " >
            <a className="text-white " href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
        <div className="sm:hidden flex flex-1 justify-end items-end">
          <img className="w-[30px] object-contain " src={nav ? close : menu}
          onClick={()=>setnav(!nav)}
           alt={nav ? close : menu}
            />
            <motion.div whileInView={{y:[-100,0],opacity:[0,1]}} 
             transition={{duration:1 , ease:'easeIn'}}
              className={`${nav ? 'flex' : 'hidden '}p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 max-w-[146px] rounded-lg px-6 ease`}>
         {navLinks.map((nav) =>(
              <li key={nav.id} className="list-none text-[16px] font-normal font-poppins mr-10 " >
                <a className="text-white mb-5 " href={`#${nav.id}`}>{nav.title}</a>
              </li>
          ))}
            </motion.div>
         
             
        </div>
    </nav>
  )
}

export default Navbar