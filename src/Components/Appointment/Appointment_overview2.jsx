import React,{useState} from 'react'
import previous from "../../asset/previous.png"
import Appoint_Doc from "../../asset/Appoint_Doc.png"
import red_Next from "../../asset/red_Next.png"
import date from "../../asset/date.png"
import call from "../../asset/call.png";
import videocall from "../../asset/videocall.png";
import CHATT from "../../asset/CHATT.png";
import rating from "../../asset/rating.png"
import time from "../../asset/time.png"
import Sidebar from '../ProPic/Sidebar'
import { Link } from 'react-router-dom'


const Appointment_overview2 = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick=() => {

    setShowDetails(!showDetails);
  }
  return (
    <div className="max-w-full  min-h-screen bg-whitesmoke overflow-hidden font-sans">
      {/* nav */}
      <Sidebar />
      {/* nav */}
      {/* upper part */}
      <section className="main  w-[calc(100%_-_20%)] float-right">
        <section className=" flex flex-row mx-2 md:mx-8 justify-between items-center mt-24">
          <section className="flex flex-row items-center gap-3 md:gap-5">
            <Link to="">
              <img src={previous} alt="" className='w-5 h-5 md:w-7 md:h-7 object-contain ' />
            </Link>
            <section>
              <h1 className="  font-inherit font-semibold text-dark-green-color text-xl md:text-13xl xl:text-17xl">
                My Appointments
              </h1>
              <p className="Date font-inher0it  text-grey-color font-normal text-lg md:text-5xl xl:text-9xl ">
                Tuesday, July 25, 2023
              </p>
            </section>
          </section>

          <section className="date">
            <img
              src={date}
              className=" w-6 h-6 md:h-10 md:w-10 object-contain "
              alt="date"
            />
          </section>
        </section>

        {/* upper part */}

        {/* main section */}
        <section className=" flex flex-row items-center gap-2 md:gap-4  mx-2 md:mx-36 mt-24">
          <section>
            <img
              src={Appoint_Doc}
              alt=""
              className="md:mx-0 w-20 h-20 rounded-lg md:rounded-2xl md:mt-2 md:h-[150px] object-contain md:w-[150px]"
            />
          </section>

          <section className=" rounded-xl border border-solid gap-2 md:gap-0 border-[#DC5C5C] flex flex-row items-center justify-between leading-7 py-2 md:w-80 px-1 md:px-2">
            <section >
              <h3 className="text-black text-base md:text-5xl font-semibold  font-sans leading-4 md:leading-7
              ">
                Dr. Tony Chopper
              </h3>

              <p className="text-grey-color font-normal text-base md:text-5xl font-sans leading-4 md:leading-7 my-1 ">
                Nutritionist
              </p>
            </section>
            <section>
              <img
                src={red_Next}
                alt=""
                className=" object-contain  w-6 h-6 md:w-10 md:h-10 "
                onClick={handleClick}
              />
            </section>
          </section>
        </section>


        {showDetails && (
          <div className="w-[257px] md:w-[672px] h-[460px]   border border-solid border-[#DC5C5C]  rounded-xl bg-[#FFF5F5]  md:-my-6 mb-5 mx-auto md:mx-[310px] ">
            <p className="text-black font-sans text-base md:text-5xl font-normal p-3 md:leading-7 md:pl-6 md:pt-6 rounded-xl md:pr-[14px] md:pb-[93px] whitespace-pre-wrap text-start inline-block ">
              <span className="block text-justify md:text-start leading-7 tracking-wide">
                Dr. Tony Chopper is a highly qualified and experienced
                professional nutritionist who is a dedicated to helping
                individuals achieve their health and wellness goals through
                evidence-based nutrition guidance.
              </span>
              <span className="block text-justify md:text-start tracking-wide mt-4">
                With a deep understanding of the impact of nutrition on overall
                well-being, our nutritionist provides personalized
                recommendations and practical strategies tailored to each
                individual's unique needs.
              </span>
            </p>
            <section className="flex items-center mt-2 gap-2 mx-1 md:mx-0 flex-row justify-evenly">
           
              <section>
                <p className="block text-black font-sans  text-base md:text-xl  font-semibold leading-6 md:leading-[156.227%]">  Experience:</p>
                <p className="text-black  font-sans text-center  text-base md:text-xl font-normal leading-6 md:leading-[156.227%]">8+ years</p>
              </section>
              <section>
                <p className="block text-black font-sans  text-base md:text-xl text-center font-semibold leading-6 md:leading-[156.227%]"> Treated:</p>
                <p className="text-black  text-start font-sans text-base md:text-xl font-normal leading-6 md:leading-[156.227%]">5k+ patients</p>
              </section>
              <section>
                <p className="block text-black font-sans  text-base md:text-xl  font-semibold leading-6 md:leading-[156.227%]">Rated:</p>
                <p className="text-black text-center  font-sans text-base md:text-xl font-normal leading-6 md:leading-[156.227%]">  4.5/5</p>
              </section>
            </section>
          </div>
        )}


{/* ratings */}
<img
            src={rating}
            alt=""
            className=" mx-5 w-24  md:w-[130px] md:h-6 md:mx-80 -my-2 md:mt-10 object-contain"
          />

        <section className="flex items-center justify-evenly flex-wrap mt-20 ">
          <section className="flex gap-1 md:gap-3 flex-row items-center">
            <img src={date} alt="" className="w-5 h-5 md:w-7 md:h-7" />
            <p className=" text-black text-lg md:text-5xl font-sans leading-7 font-normal">
              09/07/2023
            </p>
          </section>
          <section className="flex gap-1 md:gap-3 flex-row items-centerr">
            <img src={time} alt="" className="w-5 h5  object-contain md:w-7 md:h-7  " />
            <p className=" text-black text-lg md:text-5xl font-sans leading-7 font-normal]">
              13:30 PM
            </p>
          </section>
          <section className="flex gap-1 md:gap-3 flex-row items-center">
            <input
              type="radio"
              name="radio"
              id="radio"
              className="cursor-pointer h-5 w-5 md:w-5 md:h-5 accent-dark-green-color"
            />
            <span className="text-black font-sans text-lg md:text-5xl  font-normal  leading-7 cursor-pointer">
              Confirmed
            </span>
          </section>
        </section>

        {/* Nutritionaalist contact */}
        <section className="nutritionalist md:mx-auto text-center md:w-[447px] md:h-[139px] my-6 md:my-10">
          <h5 className="text-black text-lg  md:text-5xl font-sans leading-7 md:leading-[156.227%] font-normal">
            You can contact your nutritionist
          </h5>
          <section className="flex items-center justify-between flex-wrap mx-5 mt-9  ">
            <section className="">
              <img src={call} alt="" className="mx-auto w-6 md:w-7 md:h-7 object-contain" />
              <p className="font-sans text-black text-center text-lg md:text-xl leading-7 md:leading-[156.227%] font-normal ">
                Call
              </p>
            </section>
            <section>
              <img src={CHATT} alt="" className="mx-auto w-5 md:w-7 md:h-7 object-contain" />
              <p className="font-sans text-black text-center text-lg md:text-xl leading-7 md:leading-[156.227%] font-normal ">
                Chat
              </p>
            </section>
            <section>
              <img src={videocall} alt="" className="mx-auto w-5 md:w-7 md:h-7 object-contain" />
              <p className="font-sans text-black text-center text-lg md:text-xl leading-7 md:leading-[156.227%] font-normal">
                Video call
              </p>
            </section>
          </section>
        </section>

        {/* Nutritionaalist contact */}
        {/* main section */}
      </section>
    </div>
  );
}

export default Appointment_overview2