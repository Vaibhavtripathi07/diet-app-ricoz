// import React, { PureComponent } from 'react';
import React from "react"
import steps_chart from "../../../../asset/steps_chart.png"


const Steps_Tracker = () => {
  // const data = [

  //   {
  //     uv: 6.67,
  //     pv: 4800,
  //     fill: '#ffc658',
  //   },
  // ];
  
  // const style = {
  //   top: '50%',
  //   right: 0,
  //   transform: 'translate(0, -50%)',
  //   lineHeight: '24px',
  // };
  
  return (
    <>
    {/* main */}
    <section className=" shadow-DashShadow bg-yellow left-[1004px] top-[317px] font-sans h-[356px] w-[428px] rounded-[18px] overflow-hidden">
    <h2 className='  text-sand left-[103px] text-center mt-4 font-sans text-13xl leading-7 font-semibold'>Steps Tracker</h2>
    <p className=' left-[103px] text-sans mt-7 text-sand text-5xl font-sans text-center font-normal leading-7 '>Walked : 4200 steps</p>
    
  {/* steps total */}

<img src={steps_chart} alt="" className=" mx-auto left-[146px] top-[169px] mt-10" />

<section className="-mt-28">
  <p className=" left-[195px]  text-center text-[28px] text-sand font-inherit font-semibold ">7000</p>
  <p className=" left-[195px] top-[244px] text-sand text-5xl  text-center font-inherit font-semibold ">Steps</p>
  </section>
  {/* steps total */}

    {/* SVG chart radial */}
    </section>
    {/* main */}
    </>
  )
}

export default Steps_Tracker
