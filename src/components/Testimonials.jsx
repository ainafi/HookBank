import React from 'react'
import styles from "../style";
import { feedback } from '../constants';
import FeedbackCard  from './FeedbackCard';
import { motion } from 'framer-motion';
const Testimonials = () => {
  return (
    <section
    id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
      <motion.div  whileInView={{x:[-100,0],opacity:[0,1]}} 
    transition={{duration:1 , ease:'easeIn'}} className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative' >
        <h3 className={`${styles.heading2}`} >
          what people are <br />
          saying about us
        </h3>
        <p className={`${styles.paragraph} max-w-[450px] text-left`}>every thing t oaccept card payments  nd grow your business anywhere on the planet</p>
      </motion.div>
      <motion.div 
       whileInView={{scale:[0,1]}}
       transition={{duration:1 , ease:'easeIn'}}  className=' md:flex sm:flex sm:justify-start justify-center w-full feedback-container relative z-[1]'>
        {feedback.map((feedbacks,index)=>(
          <FeedbackCard key={feedbacks.id} {...feedbacks} index={index}/>
        ))}
      </motion.div>
      

    </section>
  )
}

export default Testimonials