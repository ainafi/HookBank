import React from 'react';
import styles, { layout } from '../style';
import { apple, bill, google } from '../assets';
import { motion } from 'framer-motion';

const Billing = () => {
    return (
        <motion.section 
        whileInView={{y:[100,0],opacity:[0,1]}} 
        transition={{duration:1 , ease:'easeIn'}}
        id='product' className={`${layout.sectionReverse } mb-5 mt-5` } >
            
                <div className={`${layout.sectionImgReverse}`}>
                    <img className={`${layout.sectionImgReverse} w-[100%] h-[100%]`} src={bill}alt="bill" />  
                </div>
                <div className={`${layout.sectionInfo}`}>
                    <h2 className={`${styles.heading2}`}>
                        Easily control your  <br className='md:block hidden ' />
                        billing & invoicing .
                    </h2>
                    <p className={`${styles.paragraph} max-w-[470px]`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam incidunt ut laborum quas cupiditate vel ex! Earum dignissimos accusamus  </p>
                    <div className='flex flex-row items-start flex-wrap px-6 mt-7'>
                        <img  className='' src={apple} alt="apple store" />
                        <img src={google} alt="google playstore" className='mx-5' />
                    </div>
                </div>
            
        </motion.section>
    );
};

export default Billing;