import React from 'react'
import Glass from "../../../../asset/Glass.png"

const Water_Tracker = () => {
  return (
    <>
    <section className="  shadow-DashShadow bg-gradient-to-b from-[#B6E0EE] to-[#6CD0F0]  font-sans h-[356px] w-[428px] rounded-[18px] overflow-hidden">
      <h2 className=' text-lightBlue text-center font-sans mt-4 text-13xl leading-7 font-semibold'>Water Tracker</h2>
    <p className='left-[144px] text-lightBlue top-[87px] text-center mt-7 text-5xl font-sans font-normal leading-7 '>Drank : 1.6 L</p>
    
    {/* glass */}
    <section className='relative z-30'>
    <img src={Glass} alt="" className=' mt-10 mx-auto '  /> 
    <p className='text-[#2A7AA7] font-semibold leading-[33px] font-inherit text-[28px] -mt-28 text-center'>2.8L</p>
    </section>
    {/* glass */}

    {/* water stroke */}
    <svg xmlns="http://www.w3.org/2000/svg" width="428" height="201" viewBox="0 0 428 201" fill="none" className=' -mt-16  '>
  <path d="M0.786058 182.134V4.82519C16.4994 1.9097 37.5292 0.0720369 58.1569 2.17347C79.0809 4.30511 99.4827 10.4784 113.54 23.5748C135.169 43.7243 156.182 63.028 178.249 72.6754C189.303 77.5083 200.649 79.9322 212.491 78.8215C224.334 77.7107 236.617 73.0699 249.552 63.8612C277.616 43.8814 311.546 38.2908 339.542 38.0565C367.541 37.8221 389.496 42.9458 393.512 44.2838C401.222 46.8533 405.826 48.5345 410.427 51.7757C415.007 55.0016 419.619 59.7979 427.214 68.6463V182.134C427.214 192.119 419.12 200.214 409.135 200.214H18.8654C8.88044 200.214 0.786058 192.119 0.786058 182.134Z" fill="url(#paint0_linear_1481_381)" stroke="#88C2E3" stroke-width="1.57212"/>
  <defs>
    <linearGradient id="paint0_linear_1481_381" x1="214" y1="82.9035" x2="214" y2="201" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B6E0EE"/>
      <stop offset="1" stop-color="#6CD0F0"/>
    </linearGradient>
  </defs>
</svg>
    {/* water stroke */}
    </section>
    </>
  )
}

export default Water_Tracker
