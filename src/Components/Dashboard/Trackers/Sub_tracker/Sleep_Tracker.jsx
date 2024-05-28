import React from 'react'
import sleep_chart from "../../../../asset/sleep_chart.png"

const Sleep_Tracker = () => {
  return (
    <>
    {/* main */}
    <section className=" shadow-DashShadow bg-Lightpurple left-[1004px] top-[773px] font-sans h-[356px] w-[428px] rounded-[18px] overflow-hidden">
    <h2 className=' text-center mt-4 text-purple left-[103px] top-[18px] font-sans text-13xl leading-7 font-semibold'>Sleep Tracker</h2>
    <p className='text-center mt-7 left-[137px] text-purple top-[89px] text-5xl font-sans font-normal leading-7 '>Slept : 5h22m</p>


<img src={sleep_chart} alt="" className='mx-auto mt-10 left-[146px] top-[169px]' />
<section className='text-center -mt-28'>
<p className=" top-[202px] left-[210px] font-inherit text-[28px] text-purple leading-[33px] font-semibold">08</p>
<p className=' top-[244px] left-[195px] text-5xl font-inherit text-purple leading-7'>Hours</p>
</section>

{/* svg chart sleep */}

    </section>
    {/* main */}
    </>
  )
}

export default Sleep_Tracker
