import React from 'react'
import styles from '../style'
import { discount,robot} from '../assets'
import {motion} from 'framer-motion'
import GetStarted from "./GetStarted" 
const Hero = () => {
  return (
    <motion.section whileInView={{scale:[0,1]}}
    transition={{duration:1 , ease:'easeIn'}} id='home'className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div
      
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center bg-discount-gradient  rounded-xl py-[6px] px-3 '>
            <img src={discount} alt="discount" />
            <span className='text-white capitalize font-poppins'>20% Discount for <span className='font-medium'>1 moth</span> account</span>
        </div>

        <div className='flex flex-row justify-between items-center w-full '>
          <h1 className='text-white text-[52px] ss:text-[68px] capitalize font-semibold leading-[75px] ss:leading-[100px]'>the next <br className='md:block' /> <span className='text-gradient' >Generation {" "}  </span></h1>
          <div className='ss:flex hidden md:mr-4 mr-0'>
          <GetStarted />
          </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Payment Method.
        </h1>
          <p className={`${styles.paragraph}  py-4 max-w-[450px]`}>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.We examine annual percentage rates,annual fees.</p>
      </div>
      
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
        {/* gradient end */}
      </div>
      <div className='ss:hidden flex items-center justify-center  md:mr-4 mr-0'>
          <GetStarted />
        </div>

      
    </motion.section>
  )
}

export default Hero