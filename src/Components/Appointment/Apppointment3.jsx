import React,{useState} from 'react'
import Nav from '../Top_Nav/Nav'
import previous_page from "../../asset/previous_page.png"
import Appoint_Doc from "../../asset/Appoint_Doc.png"
import red_Next from "../../asset/red_Next.png"
import date from "../../asset/date.png"
import call from "../../asset/call.png";
import videocall from "../../asset/videocall.png";
import CHATT from "../../asset/CHATT.png";
import rating from "../../asset/rating.png"
import time from "../../asset/time.png"


const Apppointment3 = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick=() => {

    setShowDetails(!showDetails);
  }
  return (
    <div className=" max-w-screen min-h-screen overflow-hidden bg-whitesmoke">
      {/* nav */}
      <Nav />
      {/* nav */}
      {/* upper part */}
      <section className="flex items-center mt-36 ">
        <img src={previous_page} alt="" className=" object-cover ml-3  " />
        <h1 className=" text-dark-green-color mx-auto   leading-7 tracking-[0.53em] font-semibold  font-sans text-13xl md:text-29xl">
          My Appointments
        </h1>
      </section>
      {/* upper part */}

      {/* main section */}
<section className='flex items-center gap-4 mx-36 mt-24'>
      <img
        src={Appoint_Doc}
        alt=""
        className="object-cover w-[208px] h-[208px]"
      />
      <section className=" rounded-xl border border-solid border-[#DC5C5C]  px-2">
        <section className='flex items-center justify-between '>
     
        <h3 className="text-black font-semibold text-17xl font-sans leading-[156.227%]">
          Dr. Tony Chopper
        </h3>
        
       
        <img
          src={red_Next}
          alt=""
          className=" object-contain px-1 "
          onClick={handleClick}
        />
        </section>
        <p className="text-grey-color font-normal text-13xl font-sans leading-7 my-1 mb-3  ">
          Nutritionist
        </p>
      </section>
      </section>
        <img src={rating} alt="" className='object-contain mx-72 px-2 -mt-10' />
      {showDetails && (
        <div className="w-[672px] h-[474px]   border border-solid border-[#DC5C5C]  rounded-xl bg-[#FFF5F5] -my-36 mx-[650px] ">
          <p className="text-black font-sans text-5xl font-normal leadin-7 pl-6 pt-6 rounded-xl pr-[14px] pb-[93px] whitespace-pre-wrap text-start inline-block ">
          <span className='block text-start'>
            Dr. Tony Chopper is a highly qualified and experienced professional
            nutritionist who is a dedicated to helping individuals achieve their
            health and wellness goals through evidence-based nutrition guidance.</span> 
          <span className='block text-start '>
            With a deep understanding of the impact of nutrition on overall
            well-being, our nutritionist provides personalized recommendations
            and practical strategies tailored to each individual's unique needs.
          </span></p>
          <section className="flex justify-evenly">
            <p className="text-black font-sans text-xl font-semibold leading-[156.227%]">
              Experience:{" "}
              <span className="text-black font-sans text-xl font-normal leading-[156.227%]">
                8+ years
              </span>
            </p>
            <p className="text-black font-sans text-xl font-semibold leading-[156.227%]">
              Treated:{" "}
              <span className="text-black font-sans text-xl font-normal leading-[156.227%]">
                5k+ patients
              </span>
            </p>
            <p className="text-black font-sans text-xl font-semibold leading-[156.227%]">
              Rated:{" "}
              <span
                className="text-black font-sans text-xl font-normal leading-[156.227%]"
                n
              >
                4.5/5
              </span>
            </p>
          </section>
        </div>
      )}

  <section className='flex justify-center gap-[132px] mt-40 '>
   <section className='flex items-center'><img src={date} alt="" className=' w-[30px] h-[30px]' /><span className=' text-black text-5xl font-sans leading-[156.227% font-normal pl-[18px]'>09/07/2023</span></section>
    <section className='flex items-center'><img src={time} alt="" className='w-[30px] h-[30px]'/><span className='pl-[18px] text-black text-5xl font-sans leading-[156.227% font-normal]'>13:30 PM</span></section>
    <section className='flex  items-center'><input type="radio" name="radio" id="radio" className='accent-dark-green-color w-[30px] h-[30px]' /><span className='pl-[18px] text-black text-5xl font-sans leading-[156.227%] font-normal'>Confirmed</span></section>
  </section>

{/* Nutritionaalist contact */}
<section className='nutritionalist mx-auto  block text-center w-[447px] h-[139px]  mt-[70px]'>
  <h5 className='text-black text-5xl font-sans leading-[156.227%] font-normal'>You can contact your nutritionist</h5>
  <section className='flex items-center justify-between  mx-auto mt-[37px] ml-[55px]'>
    <section className=''><img src={call} alt="" className='w-[30px] h-[12px]' /><p className='font-sans text-black text-xl leading-[156.227%] font-normal '>Call</p></section>
    <section><img src={CHATT} alt="" className='w-[30px] h-[26px]' /><p className='font-sans text-black text-xl leading-[156.227%] font-normal '>Chat</p></section>
    <section><img src={videocall} alt="" className='w-[30px] h-[24px]' /><p className='font-sans text-black text-xl leading-[156.227%] font-normal '>Video call</p></section>
  </section>
</section>

{/* Nutritionaalist contact */}
      {/* main section */}
    </div>
  );
}

export default Apppointment3