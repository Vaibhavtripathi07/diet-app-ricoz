import React from 'react'
import ratings_full from "../../asset/ratings_full.png"

import MyMeals from "../../asset/MyMeals.png";


const MealFundamentals = () => {
  return (
    <section className='absolute flex gap-[46px] w-[781px] h-[389px] mt-[260px] ml-[100px]'>
      <img src={MyMeals} className="w-[280px] h-[280px] rounded-[10px]" alt=""/>
      <section>
        <h3 className='w-[455px] text-black text-4xl font-extrabold font-sans leading-[56.24px]'>Classic Meal Plan</h3>
        <img src={ratings_full} width={86} height={14} alt="" />
        <p className='text-black font-sans text-base font-normal w-[455px] mt-[18px] leading-[156%]'>Our Classic Meal Plan offers a balanced selection of meals designed to meet your nutritional needs. Enjoy a variety of delicious and healthy dishes carefully curated by our team of experts.</p>
        <p className='font-normal text-[20px] mt-[18px] font-sans text-[#83634A] leading-[156.227%]'>Starts @ <span className='text-[#83634A] font-bold font-sans'>599/-</span></p>
 
      </section>
    </section>
  )
}

export default MealFundamentals
