
import {features} from '../constants';
import styles,{layout} from '../style';
import Button from './Button';
import { motion } from 'framer-motion';
const FeaturesCard=({icon,title,content,index})=>
  
(
  <div className={`flex flex-row p-6 rounded-[30px]  ${index !== features.length -1 ?"mb-6" : "mb-0"}  feature-card`}>
        <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter}`}>
            <img className='w-[50%] h-[50%] object-contain' src={icon} alt='icon' />   
           
        </div>
        <div className='flex-1 flex flex-col ml-6'>
              <h3 className='font-poppins font-semibold text-white text-[18px]'>{title}</h3>
             <p className='font-poppins font-normal text-white text-[18px]'>{content}</p>
          </div>
       
    </div>
)
const Business = () => {
  
  return (
    <motion.section
     whileInView={{y:[0,100],opacity:[0,1]}} 
    transition={{duration:1 , ease:'easeIn'}}
    id='features' className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>You do the business ,<br className='sm:block hidden' />
           we'll handle the money
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card,you can improve your financial life by building credit earing and saving money .But with hundreds of credit cards on the market.
        </p>
        <div className={`${styles.paddingY} mx-4`}>
          <Button/>
        </div>
      </div>
        <div className={`${layout.sectionImg} flex-col`}>
           {features.map((feature,index)=>(
            <FeaturesCard key={feature.id} {...feature} index={index}/>
           ))}
        </div>
      
    </motion.section>
  )
}

export default Business