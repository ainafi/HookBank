import React from 'react'
import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'
import { motion } from 'framer-motion'
const CardDeal = () => {
  return (
    <motion.div
    whileInView={{x:[-100,0],opacity:[0,1]}} 
    transition={{duration:1 , ease:'easeIn'}}
    className={`${layout.sectionReverse}`}>
      <div className={layout.sectionInfo}>
        <h4 className={`${styles.heading2}`}>Find a better card deal <br /> in few easy steps</h4>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        <div className='mt-5'>

        <Button />
        </div>
      </div>
      <div className={`${layout.sectionImg}`}>
        <img src={card} className={`${layout.sectionImgReverse} w-[100%] h-[100%]`} alt="" />
      </div>
    </motion.div>
  )
}

export default CardDeal