import React from 'react'
import Nav from "../Top_Nav/Nav";
import Sidebar from "../ProPic/Sidebar";
import Date from "../../asset/Date.png"
import macros from "../../asset/macros.png"
import cal from "../../asset/cal.png"
import Next from "../../asset/Next.png"

import calorieProg from "./calorieProg"
import { Line } from 'rc-progress';
import FoodCal from './FoodCal';

const Foodlog = () => {
  return (
    <div className="relative w-[1512px]  bg-whitesmoke overflow-hidden h-[1423px] font-sans xl:w-full">
      {/* navbar */}
      <Nav />
      {/* navbar */}

      {/* sidebar */}
      <Sidebar />
      {/* sidebar */}

      {/* upper section */}
      <h1 className="absolute left-[458px] top-[170px] font-sans text-dark-green-color text-17xl font-semibold">
        Food Log
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

      {/* total calories -upper section */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="254"
        height="254"
        viewBox="0 0 254 254"
        fill="none"
        className="absolute top-[320px] left-[458px] w-[254px] h-[254px]"
      >
        <circle
          cx="127"
          cy="127"
          r="119.38"
          stroke="url(#paint0_linear_1444_803)"
          stroke-width="15.24"
        />
        <circle
          cx="127"
          cy="127"
          r="119.38"
          stroke="#EBA0A0"
          stroke-opacity="0.18"
          stroke-width="15.24"
        />
        <path
          d="M119 246.438C119 242.42 122.143 239.103 126.155 238.888L129 238.734V254H126.562C122.385 254 119 250.614 119 246.438Z"
          fill="#E34A4A"
        />
        <circle cx="127" cy="246.4" r="4" fill="white" />
        <defs>
          <linearGradient
            id="paint0_linear_1444_803"
            x1="127.969"
            y1="110.519"
            x2="78.5267"
            y2="110.519"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#E13737" />
            <stop offset="0.0001" stop-color="white" />
          </linearGradient>
        </defs>
      </svg>

      {/* text in it */}
      <p className="text-[#D48181] text-[45px] font-montserrat font-semibold absolute left-[531px] top-[385px]">
        1,641
      </p>
      <p className="text-[#D48181] text-[38px] font-montserrat font-medium absolute left-[545px] top-[451px]">
        kCal
      </p>
      {/* text in it */}
      {/* total calories -upper section */}

      {/* calorie  */}
      <img
        src={macros}
        alt=""
        className="absolute top-[317px] left-[832px] w-[260px] h-[260px]"
      />
{/* FoodCal */}
<FoodCal/>
{/* FoodCal */}
  

      {/* calorie  */}
    </div>
  );
}

export default Foodlog


// import React from "react";
// import Nav from "../Top_Nav/Nav";
// import Sidebar from "../ProPic/Sidebar";
// import Date from "../../asset/Date.png";
// import FoodlogCard from "./FoodlogCard";

// const Foodlog = () => {
//   return (
//     <div>
//       {/* Nav */}
//       <Nav />
//       {/* Nav */}

//       {/* sidebar */}
//       <Sidebar />
//       {/* sidebar */}

//       {/* upper section */}
//       <h1 className="absolute left-[458px] top-[170px] font-sans text-dark-green-color text-17xl font-semibold">
//         Food Log
//       </h1>
//       <p className="absolute left-[458px] top-[224px] font-normal text-5xl text-grey-color leading-[28.8px] ">
//         Tuesday, July 25, 2023
//       </p>
//       <img
//         src={Date}
//         alt="date"
//         height={40}
//         width={40}
//         className="absolute left-[1432px] top-[171px] w-[40px] h-[40px]"
//       />
//       {/* upper section */}

//       {/* main */}
//       <FoodlogCard />
//       {/* main */}
//     </div>
//   );
// };

// export default Foodlog;


  
