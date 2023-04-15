import React from 'react'
import { stats } from '../constants'
import styles from '../style'
import { motion } from 'framer-motion'
const Stats = () => {
  return (
    <motion.section whileInView={{x:[-100,0],opacity:[0,1]}}
    transition={{duration:1 , ease:'easeIn'}} className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6` }>
      <div className='flex flex-row flex-wrap items-center justify-start  ' >
        {stats.map((stat)=>(
          <div key={stat.id} className='flex justify-between items-center px-4'>
            <h4 className='text-white font-poppins text-[30px] xs:text-[40px] font-semibold xs:leading-[53px]' >{stat.value}</h4>
            <p className={`${styles.paragraph} text-gradient uppercase text-[15px] ms-5 xs:ms-6 xs:text-[12px]`}>{stat.title}</p>
          </div>
        ))}
      </div>
    </motion.section>
  )
}

export default Stats