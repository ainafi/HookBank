import React from 'react'
import styles from '../style'
import Button from './Button'
const CTA = () => {
  return (
   <section className={` ${styles.paddingY}  ${styles.marginX} rounded-[20px] bg-black-gradient-2 ${styles.padding}` }>
    <div className='flex flex-wrap justify-between items-center feedback-container ' >
      <div className={`${styles.flexStart} flex-col`}>
        <h2 className={ `${styles.heading2}`}>Let's try our service now!</h2>
        <p className={ `${styles.paragraph} max-w-[430px]`}>Everything you need to accept card payments and grow your business anywhere on the planets</p>
      </div>
      <div className='my-5 text-left'>
        <Button/>
      </div>
    </div>
   </section>
  )
}

export default CTA