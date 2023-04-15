import React from 'react'
import styles from '../style'

const Button = () => {
  return (
    <button className={`py-3 px-4 bg-blue-gradient font-poppins font-semibold rounded-[10px] text-primary ${styles.paddingX}`}>
       Get Started
    </button>
  )
}

export default Button