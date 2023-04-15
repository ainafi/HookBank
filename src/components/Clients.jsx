import React from 'react'
import styles from '../style'
import {clients} from "../constants"
const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={ `${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client,index) =>(
          <img className='w-[200px] mx-6 mb-5' src={client.logo} alt={`client ${client.logo}`}/>
        ))}
      </div>

      
      
    </section>
  )
}

export default Clients