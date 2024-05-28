import React from 'react'
import {  Line } from 'rc-progress';

const Macros = () => {
  return (
    <div> {/* 4th section editable */}
    <section>
        <p className='absolute left-[1284px] w-[136px] leading-[21px] top-[330px] text-inherit text-black text-[18px] font-semibold'>Macros Ratios</p>
          {/* proteins */}
        <p className='absolute text-[13px] text-[#333] w-[116px] font-inter left-[1284px] top-[376px] font-semibold leading-[20.31px]'>Proteins - 40.2 g</p>
        <Line percent={30} strokeWidth={7} strokeColor="#F299EF" trailWidth={7} trailColor='#F299EF5C' className='w-[188px] h-[12px] absolute top-[400px] left-[1284px] rounded-[5px]  '/>
          {/* proteins */}
          {/* carbs */}
        <p className='absolute text-[13px] text-[#333] w-[116px] font-inter left-[1284px] top-[421px] font-semibold leading-[20.31px]'>Carbs - 13.42 g</p>
        <Line percent={20} trailColor='#E1EFFF' trailWidth={7} strokeWidth={7} strokeColor="#89B1ED"  className='w-[188px] h-[12px] absolute top-[445px] left-[1284px] rounded-[5px] '/>
          {/* car10s */}
          {/* fats */}
        <p className='absolute text-[13px] text-[#333] w-[116px] font-inter left-[1284px] top-[466px] font-semibold leading-[20.31px]'>Fats - 45.3 g</p>
        <Line percent={40} trailColor='#FEE8C8' trailWidth={7} strokeWidth={7} strokeColor="#F9A322"  className='w-[188px] h-[12px] absolute top-[490px] left-[1284px] rounded-[5px]  bg-[#FEE8C8]'/>
          {/* fats */}
    </section>
    {/* 4th section editable */}</div>
  )
}

export default Macros