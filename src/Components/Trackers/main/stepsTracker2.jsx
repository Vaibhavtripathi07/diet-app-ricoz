import React from 'react'
import StepsTracker from './StepsTracker'

const stepsTracker2 = () => {
  return (
    <div>
      <StepsTracker className="bg-blur-10"/> 
<section className='relative w-[1030px] h-[341px] left-[241px] top-[325px]'>
<p className='absolute text-dark-green-color font-semibold  text-13xl font-sans'>Add number of Steps</p>
<p className='absolute text-dark-green-color leading-7 text-5xl font-normal font-sans'>(per day)</p>
<input type="text" placeholder='0'className='absolute left-[394px] top-[30px] placeholder:text-center text-center w-[221px] h-[96px] rounded' />
</section>
    
    </div>
  )
}

export default stepsTracker2
