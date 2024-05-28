import React from 'react'

const CourseLearn = () => {
  return (
    <section className=' w-[502px] h-[559px] accent-strokegreen-color bg-[#EEF0FE] ml-24 my-36 '>
       {/* <h3
          className=" mt-[50px] text-black accent-strokegreen-color left-[110px] text-center text-13xl leading-[156.23%] font-bold font-sans  w-[282px]"
          id="what you learn"
        >
          What you’ll Learn
        </h3> */}
        <h3 className='text-center font-sans text-13xl  m-12  font-bold leadng-[156.227%]'>What you’ll Learn</h3>
        <section className=' space-y-6 m-12'>
        <section className=" flex items-center gap-5">
          <input
            className="cursor-pointer w-[24px] h-[24px] accent-[#4A5083] border-[#4A5083]"
            id="intro_radio"
            type="radio"
          />
          <p
            className=" text-5xl left-[65px] leading-[156%]  max-w-[303px]"
            id="1"
          >
            Introduction to basic nutrition principles
          </p>
        </section >
        <section className=" flex items-center gap-5  w-[368px] h-[74px]">
          <input
            className="cursor-pointer w-[24px] h-[24px] accent-[#4A5083] border-[#4A5083]"
            id="intro_radio"
            type="radio"
          />
          <p
            className="  text-5xl left-[65px] leading-[156.227%] inline-block w-[349px]"
            id="2"
          >
           Understanding macronutrients and micronutrients
          </p>
        </section>
        <section className=" flex items-center gap-5 w-[342px] h-[37px]">
          <input
            className="cursor-pointer w-[24px] h-[24px] accent-[#4A5083] border-[#4A5083]"
            id="3"
            type="radio"
          />
          <p
            className=" top-[0px] text-5xl left-[65px] leading-[156.227%] inline-block w-[277px]"
            id="3 build"
          >
            Building a balanced diet
          </p>
        </section>
        <section className=" flex items-center gap-5  w-[368px] h-[70px]">
          <input
            className="cursor-pointer w-[24px] h-[24px] accent-[#4A5083] border-[#4A5083]"
            id="4 portion"
            type="radio"
          />
          <p
            className=" top-[0px] text-5xl left-[65px] leading-[156%] inline-block w-[303px] h-[70px]"
            id="4"
          >
            Portion control and mindful eating
          </p>
        </section>
        </section>
    </section>
  )
}

export default CourseLearn
