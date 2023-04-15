import React from 'react'
import { quotes } from '../assets'

const FeedbackCard = ({content,name,title,img}) => {
  return (
    <div className='flex justify-between flex-col px-10 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card pt-4'>
      <img className='w-[50px] h-[27px]'  src={quotes} alt="quotes" />
      <p className={ " font-poppins text-white leading-[20px] max-w-[370px] mt-12 mb-7"} >{content}</p>
      <div className='flex flex-wrap mx-1 pb-5 '>
        <img src={img} className="w-[40px] mx-5 object-contain" alt={`user +${img}`} />
        <div className='flex flex-col ml-4'>
          <h4 className='text-white font-medium text-[20px]'>{name}</h4>
          <p className='text-gray-400 text-[15px]'>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard