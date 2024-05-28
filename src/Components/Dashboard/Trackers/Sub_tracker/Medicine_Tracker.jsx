import React from 'react'

const Medicine_Tracker = () => {
  return (
    <>
    {/* med main */}
    <section className="  bg-green shadow-MedShadow font-sans h-[356px] w-[428px] rounded-[18px] left-[458px] top-[773px] overflow-hidden">
    <h2 className='mt-4 text-center  text-dark-green-color left-[73px]  top-[18px] font-sans text-13xl leading-7 font-semibold'>Medicine Tracker</h2>
    
    {/* med section  */}
  {/* 1 */}
<section className='flex items-center justify-between m-7'>
  <p className=' left-9 top-[111px] text-5xl font-inherit leading-7 font-normal text-dark-green-color'>Morning</p>
  <input type="checkbox" name="med_check" className='   left-[370px] top-[115px] rounded accent-dark-green-color w-[24px] h-[21px]' defaultChecked/>
</section>
  {/* 2 */}
  <section className='flex items-center justify-between m-7'>
  <p className=' left-9 top-[171px] text-5xl font-inherit leading-7 font-normal text-dark-green-color'>Afternoon</p>
  <input type="checkbox" name="med_check" className='   left-[370px] top-[175px] rounded accent-dark-green-color w-[24px] h-[21px]' checked />
</section>
  {/* 3 */}
  <section className='flex items-center justify-between m-7'>
  <p className=' left-9 top-[225px] text-5xl font-inherit leading-7 font-normal text-dark-green-color'>Evening</p>
  <input type="checkbox" name="med_check" className='   left-[370px] top-[229px] rounded accent-dark-green-color w-[24px] h-[21px]' />
  </section>
  {/* 4 */}
  <section className='flex items-center justify-between  m-7'>
  <p className=' left-9 top-[282px] text-5xl font-inherit leading-7 font-normal text-dark-green-color'>Night</p>
  <input type="checkbox" name="med_check" className='   left-[370px] top-[286px] rounded accent-dark-green-color w-[24px] h-[21px]' />
</section>

    {/* med section  */}
    </section>
    {/* med main */}
    </>
  )
}

export default Medicine_Tracker
