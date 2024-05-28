import React from 'react';
import Nav from "../Top_Nav/Nav";
import Sidebar from "../ProPic/Sidebar";
import Profile_picture from "../../asset/Profile_picture.png";
import Date from "../../asset/Date.png";
import Macros from './Macros';
import { Link } from 'react-router-dom';
import Glass from "../../asset/Glass.png"

// import Water_Tracker from "../../Components/Dashboard/Trackers/Sub_tracker/Water_Tracker"
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

import { Circle } from 'rc-progress';

const yTicks = [0, 2, 4, 6, 8];

const ProfileOverview = () => {
const data =[
    {
    
          },
          {
            name: 'Sun',
            pv: 6,
          },
          {
            name: 'Mon',
            pv: 3.8,
          },
          {
            name: 'Tue',
            pv: 4,
          },
          {
            name: 'Wed',
            pv: 6.2,
          },
          {
            name: 'Thu',
            pv: 7.8,
          },
          {
            name: 'Fri',
            pv: 6.2,
          },
          {
            name: 'Sat',
            pv: 5.9,
          },
          {
          
          },
           
  ];

  const Water_TrackerStyle = {
    position: 'absolute',
    width: '250px',
    height: '208px',
    left: '458px',
    top: '701px',
  };


  return (
    <div className="relative w-[1512px] overflow-hidden bg-whitesmoke  h-[1286px] bg-whitesmokefont-sans xl:w-full">
      {/* navbar */}
      <Nav />
      {/* navbar */}

      {/* sidebar */}
      <Sidebar />
      {/* sidebar */}

      {/* upper section */}
      <h1 className="absolute left-[458px] top-[170px] font-sans text-dark-green-color text-17xl font-semibold">
        Hi Yor,
      </h1>
      <p className="absolute left-[458px] top-[224px] font-normal text-5xl text-grey-color leading-[28.8px] ">
        Tuesday, July 25, 2023
      </p>
      <img
        src={Date}
        alt="date"
        height={40}
        width={40}
        className="absolute left-[1432px] top-[171px] w-[40px] h-[40px]"
      />
      {/* upper section */}

      {/* main section */}
      <main className="z-50">
        {/* 1st section */}
        <section className="absolute w-[250px] h-[210px] left-[458px] top-[318px] bg-[#F5EEFF] font-inherit shadow-md rounded-xl ">
          <p className=" absolute left-[51px] text-pink font-inherit top-[12px] text-[18px] font-semibold leading-7">
            Body Mass Index
          </p>
          <p className="absolute left-[76px] text-center text-pink font-inherit top-[58px] text-5xl font-semibold leading-[19.2px]">
            18.6 kg/m
          </p>
          <p className="absolute left-[97px] text-center text-[#9877C8] font-inherit top-[111px] text-base font-normal leading-[19.2px]">
            Normal
          </p>
          <Link to="/Bmi">
            <button className="absolute text-[#9877C8] bg-[#E9DCFB] rounded-[9px] shadow-md-3 w-[100px] h-[30px] top-[168px] right-[76px] text-[14px] font-medium font-inherit leading-[19.2px]">
              Calculate
            </button>
          </Link>
        </section>
        {/* 1st section */}

        {/* 2nd section */}
        <section className="absolute w-[250px] h-[210px] bg-[#E5FFFB] font-inherit shadow-md4 rounded-xl left-[732px] top-[318px] ">
          <p className=" absolute left-[51px] text-[#2E8873] font-inherit top-[12px] text-[18px] font-semibold leading-7">
            Total Body Water %
          </p>
          <p className="absolute left-[76px] text-center text-[#2E8873] font-inherit top-[58px] text-5xl font-semibold leading-[19.2px]">
            18.6 kg/m
          </p>
          <p className="absolute left-[97px] text-center text-[#2E8873] font-inherit top-[111px] text-base font-normal leading-[19.2px]">
            Normal
          </p>
          <Link to="/TBW">
            <button className="absolute text-[#2E8873] bg-[#B1EEE4] rounded-[9px] shadow-md-4 w-[100px] h-[30px] top-[168px] right-[76px]  text-[14px] font-medium font-inherit leading-[19.2px]">
              Calculate
            </button>
          </Link>
        </section>
        {/* 2nd section */}

        {/* 3rd section */}
        <section className="absolute w-[250px] h-[210px] bg-whitesmoke font-inherit shadow-md3 shadow-md3 rounded-xl left-[1006px] top-[317px] shadow-xl2 ">
          <p className=" absolute left-[51px] text-black font-inherit top-[13px] text-[18px] font-semibold leading-7">
            Daily Calorie intake
          </p>
          {/* daily calorie svg */}

          {/* text in it */}
          <p className="text-[#D48181] text-[18px] font-montserrat font-semibold absolute mx-[104px] top-[105px]">
            1,641
          </p>
          <p className="text-[#D48181] text-[15px] font-montserrat font-medium absolute left-[107px] top-[131px]">
            kCal
          </p>
          <Circle
            percent={50}
            strokeWidth={7}
            trailWidth={7}
            trailColor="#EBA0A02E"
            strokeColor="#E34A4A"
            className="w-[100px] mx-auto my-[76px] h-[100px] "
          />
          {/* text in it */}
          {/* daily calorie svg */}
        </section>
        {/* 3rd section */}

        {/* 4th section editable */}
        <Macros />
        {/* 4th section editable */}
        {/* <section>
<p className='text-17xl font-sans text-semobold  leading-[120%] mt-[100px]'>Track your Activities</p></section> */}

  <p className='absolute text-17xl font-sans text-semobold text-black  leading-[120%] -mt-20 ml-[458px]'>Track your Activities</p>
<section>
        {/* mid section */}
        <section className="absolute shadow-DashShadow bg-gradient-to-b from-[#B6E0EE] to-[#6CD0F0] left-[458px] top-[701px] font-sans h-[208px] w-[250px] rounded-[18px] overflow-hidden">
          <h2 className="absolute  text-lightBlue left-[57px] top-[12px] font-sans text-[20px] leading-7 font-semibold">
            Water Tracker
          </h2>
          <p className="absolute left-[84px] text-lightBlue top-[52px] text-[14px] font-sans font-normal leading-7 ">
            Drank : 1.6 L
          </p>

          {/* glass */}
          <img
            src={Glass}
            alt=""
            className="absolute left-[88px] top-[93px] w-[74px] h-[97px] z-10 "
          />
          <p className="absolute text-[#2A7AA7] font-semibold leading-[33px] font-inherit text-[18px] top-[134px] left-[106px] z-20">
            2.8L
          </p>
          {/* glass */}

          {/* water stroke */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="250"
            height="118"
            viewBox="0 0 250 118"
            fill="none"
            className="absolute top-[90.84px] "
          >
            <path
              d="M0.5 106V3.41495C9.6718 1.71565 21.9364 0.64646 33.966 1.8723C46.184 3.11734 58.0905 6.72261 66.2924 14.3657C78.9245 26.1371 91.2037 37.4212 104.101 43.0612C110.563 45.8871 117.197 47.3052 124.123 46.6554C131.049 46.0056 138.23 43.291 145.79 37.9072C162.173 26.2404 181.982 22.9748 198.331 22.8379C214.682 22.7009 227.501 25.694 229.842 26.4742C234.346 27.9756 237.03 28.9563 239.712 30.8461C242.381 32.7262 245.07 35.5222 249.5 40.6849V106C249.5 112.351 244.351 117.5 238 117.5H12C5.64872 117.5 0.5 112.351 0.5 106Z"
              fill="url(#paint0_linear_1314_634)"
              stroke="#88C2E3"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1314_634"
                x1="125"
                y1="48.9999"
                x2="125"
                y2="118"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#B6E0EE" />
                <stop offset="1" stop-color="#6CD0F0" />
              </linearGradient>
            </defs>
          </svg>
          {/* water stroke */}

          {/* 5th sec */}
        </section>
        {/* 6th sec  steps tracker*/}
        <section className="w-[250px] h-[208px] shadow-DashShadow bg-[#FFF4E8] rounded-xl ml-[732px] mt-[701px]  overflow-hidden">
          <h1 className="font-sans text-xl font-semibold text-[#F18404] text-center mt-3">
            Steps Tracker
          </h1>
          <p className="text-[#F18404] font-sans text-center font-normal leading-[120%] mt-4 text-[14px]">
            Walked : 4200 steps
          </p>

          <p className="text-[#F18404] font-sans text-[18px] font-semibold leading-120% text-center mt-[50px]">
            7000
          </p>
          <p className="text-[#F18404] font-sans text-[12px] font-semibold leading-120% text-center ">
            Steps
          </p>
          <Circle
            percent={60}
            strokeWidth={7}
            strokeColor="#F18404"
            trailColor="#FFFFFF"
            trailWidth={7}
            className="-mt-[65px] w-20 h-20 mx-[85px]"
          />
        </section>
        {/* mid section */}

        {/* section 7 sleep analysis */}

        {/* Sleep Line Chart */}
        <section className="overflow-hidden  shadow-md w-[476px] h-[208px] bg-[#DFE5FA] -mt-[208px] ml-[1006px] rounded-xl">
          <h3 className='text-xl text-[#2C48AB] font-sans font-semibold leading-[120%] ml-6 mt-3 '>Sleep Analytics</h3>
          <p className='text-[14px] text-[#2C48AB] font-sans font-semibold leading-[120%]  -mt-[35px] ml-[280px]'>Avg sleep hours: 7.4 hours </p>
        <ResponsiveContainer width="100%" height="100%" className="mt-5 -ml-5 pb-2">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 22,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
          </ResponsiveContainer>
        </section>
        {/* Sleep Line Chart */}

        {/* section 7 sleep analysis */}
      
      </section>
      {/* last section medicine tracker */}
      {/* bottom section */}
      <section className=" absolute left-[458px] top-[951px] bg-[#E7FFE7] rounded-xl shadow-md w-[524px] h-[264px] ">
        <h2 className="absolute left-[179px] top-[12px] text-dark-green-color text-[20px] font-semibold leading-6 font-inherit">
          Medicine Tracker
        </h2>
        <section className="med_routine flex pt-[66px] justify-evenly ">
          <p className="font-inherit text-dark-green-color text-[18px]">
            Morning
          </p>
          <p className="font-inherit text-dark-green-color text-[18px]">
            Afternoon
          </p>
          <p className="font-inherit text-dark-green-color text-[18px]">
            Evening
          </p>
          <p className="font-inherit text-dark-green-color text-[18px]">
            Night
          </p>
        </section>
        <section className="took/skip flex pt-[24px] justify-evenly ">
          <p className="font-inherit text-dark-green-color text-base">Took</p>
          <p className="font-inherit text-dark-green-color text-base">Took</p>
          <p className="font-inherit text-dark-green-color text-base">
            <span>
              <input
                type="radio"
                id="med"
                name="med1"
                className="cursor-pointer accent-dark-greencolor"
              />
              Take
            </span>
            <br />
            <span>
              <input
                type="radio"
                name="med1"
                id="med"
                className="cursor-pointer text-[#f00]"
              />
              Skip
            </span>
          </p>
          <p className="font-inherit text-dark-green-color text-base">
            <span>
              <input type="radio" name="med2" />
              Take
            </span>
            <br />
            <span>
              <input type="radio" name="med2" className="text-[#f00]" />
              Skip
            </span>
          </p>
        </section>
        <section className="w-[238px] flex justify-evenly h-[60px] border-[#E8E8E8] rounded-xl shadow-md mt-6 mx-[143px] p-3">
  <section className=" bg-dark-green-color p-2 rounded-l-lg w-[25%]" ></section> <section className="border-r-2  border-black mx-2"></section>
  <section className=" rounded-lg border-[#E1F9E1] bg-dark-green-color p-2 w-[25%]" /><section className="border-r-2 mx-2 border-[#E8E8E8]"></section>
  <section className="border-r-2 border-[#E1F9E1]  p-2 w-[25%]" /><section className="border-r-2 mx-2  border-[#E8E8E8]"></section>
  <section className=" p-2 w-[25%] rounded-r-xl" />
</section>

      </section>
      {/* last section medicine tracker */}
      </main>
      {/* main section */}
    </div>
  );
}

export default ProfileOverview
