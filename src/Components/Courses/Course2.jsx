// import { useCallback } from "react";
// import Nav from "../Top_Nav/Nav";
// import left_hide from "../../asset/left_hide.png"
// import Accordian_arrow from "../../asset/Accordian_arrow.png"

// const Course2 = () => {
//   const onGroupContainerClick = useCallback(() => {
//     // Please sync "LANDING" to the project
//   }, []);

//   const onVectorIcon2Click = useCallback(() => {
//     // Please sync "Courses" to the project
//   }, []);

//   const onVectorIcon3Click = useCallback(() => {
//     // Please sync "Courses" to the project
//   }, []);

//   const onGroupIconClick = useCallback(() => {
//     // Please sync "Courses" to the project
//   }, []);

//   return (
//     <div className="relative bg-whitesmoke-100 w-full h-[1767px] overflow-hidden text-left text-5xl text-gray font-open-sans">
// <Nav/>
//       <h1
//         className="m-0 absolute top-[208px] left-[calc(50%_-_396px)] text-[48px] tracking-[0.53em] leading-[133%] text-stroke-green-color font-inherit"
//         id="stayfit_learning"
//       >
//         <i className="font-semibold">StayFIT</i>
//         <span className="font-semibold"> Learning</span>
//       </h1>
//       <p
//         className="m-0 absolute top-[392px] left-[calc(50%_-_289px)] text-[46px] leading-[156.23%] text-black font-bold font-sans-hebrew text-center"
//         id="intro_to_nutri"
//       >
//         Introduction to Nutrition
//       </p>
//       <div className="absolute top-[564px] left-[42px] w-[391px] h-[862px] text-9xl">
//         <div
//           className="absolute top-[-1px] left-[-1px] rounded-lg bg-whitesmoke-200 box-border w-[393px] h-[62px] border-[1px] border-solid border-whitesmoke-300"
//           id="parent_accordion"
//         />
//         <section
//           className="absolute top-[74px] left-[0px] rounded-lg bg-whitesmoke-100 shadow-[0px_0px_18px_rgba(0,_0,_0,_0.05)] w-[391px] h-[788px]"
//           id="child_accordion"
//         />
//         <div className="absolute top-[11px] left-[calc(50%_-_171.5px)] w-[349px] h-[137px]">
//           <div className="absolute top-[93px] left-[calc(50%_-_174.5px)] leading-[156.23%] font-semibold">
//             Module 1
//           </div>
//           <img
//             className="absolute top-[109.5px] left-[329.5px] w-[21px] h-[11px] cursor-pointer"
//             alt=""
//             src="/vector-168.svg"
//             onClick={onVectorIcon2Click}
//           />
//           <img
//             className="absolute top-[13.5px] left-[329.5px] w-[21px] h-[11px] cursor-pointer"
//             alt=""
//             src={Accordian_arrow}
//             onClick={onVectorIcon3Click}
//           />
//           <h1 className="absolute top-[0px] left-[calc(50%_-_174.5px)] text-5xl leading-[156.23%] font-semibold font-sans text-black">
//             Course Overview
//           </h1>
//         </div>
//         <div className="absolute top-[180px] left-[calc(50%_-_171.5px)] w-[349px] h-11">
//           <div className="absolute top-[0px] left-[calc(50%_-_174.5px)] leading-[156.23%] font-semibold">
//             Module 2
//           </div>
//           <img
//             className="absolute top-[19.5px] left-[329.5px] w-[21px] h-[11px]"
//             alt=""
//             src="/vector-168.svg"
//           />
//         </div>
//         <div className="absolute top-[256px] left-[calc(50%_-_171.5px)] w-[349px] h-11">
//           <div className="absolute top-[0px] left-[calc(50%_-_174.5px)] leading-[156.23%] font-semibold">
//             Module 3
//           </div>
//           <img
//             className="absolute top-[19.5px] left-[329.5px] w-[21px] h-[11px]"
//             alt=""
//             src="/vector-168.svg"
//           />
//         </div>
//         <div className="absolute top-[332px] left-[calc(50%_-_171.5px)] w-[349px] h-11">
//           <div className="absolute top-[0px] left-[calc(50%_-_174.5px)] leading-[156.23%] font-semibold">
//             Module 4
//           </div>
//           <img
//             className="absolute top-[19.5px] left-[329.5px] w-[21px] h-[11px]"
//             alt=""
//             src="/vector-168.svg"
//           />
//         </div>
//         <div className="absolute top-[408px] left-[calc(50%_-_171.5px)] w-[349px] h-11">
//           <div className="absolute top-[0px] left-[calc(50%_-_174.5px)] leading-[156.23%] font-semibold">
//             Module 5
//           </div>
//           <img
//             className="absolute top-[19.5px] left-[329.5px] w-[21px] h-[11px]"
//             alt=""
//             src="/vector-168.svg"
//           />
//         </div>
//         <div className="absolute top-[484px] left-[calc(50%_-_171.5px)] w-[349px] h-11">
//           <div className="absolute top-[0px] left-[calc(50%_-_174.5px)] leading-[156.23%] font-semibold">
//             Module 6
//           </div>
//           <img
//             className="absolute top-[19.5px] left-[329.5px] w-[21px] h-[11px]"
//             alt=""
//             src="/vector-168.svg"
//           />
//         </div>
//         <div className="absolute top-[560px] left-[calc(50%_-_171.5px)] w-[349px] h-11">
//           <div className="absolute top-[0px] left-[calc(50%_-_174.5px)] leading-[156.23%] font-semibold">
//             Module 7
//           </div>
//           <img
//             className="absolute top-[19.5px] left-[329.5px] w-[21px] h-[11px]"
//             alt=""
//             src="/vector-168.svg"
//           />
//         </div>
//         <div className="absolute top-[636px] left-[calc(50%_-_171.5px)] w-[349px] h-11">
//           <div className="absolute top-[0px] left-[calc(50%_-_174.5px)] leading-[156.23%] font-semibold">
//             Module 8
//           </div>
//           <img
//             className="absolute top-[19.5px] left-[329.5px] w-[21px] h-[11px]"
//             alt=""
//             src="/vector-168.svg"
//           />
//         </div>
//         <div className="absolute top-[712px] left-[calc(50%_-_171.5px)] w-[349px] h-11">
//           <div className="absolute top-[0px] left-[calc(50%_-_174.5px)] leading-[156.23%] font-semibold">
//             Module 9
//           </div>
//           <img
//             className="absolute top-[19.5px] left-[329.5px] w-[21px] h-[11px]"
//             alt=""
//             src="/vector-168.svg"
//           />
//         </div>
//         <div className="absolute top-[788px] left-[calc(50%_-_171.5px)] w-[349px] h-11">
//           <div className="absolute top-[0px] left-[calc(50%_-_174.5px)] leading-[156.23%] font-semibold">
//             Module 10
//           </div>
//           <img
//             className="absolute top-[19.5px] left-[329.5px] w-[21px] h-[11px]"
//             alt=""
//             src="/vector-168.svg"
//           />
//         </div>
//         <img
//           className="absolute top-[161.5px] left-[19.5px] w-[352px] h-px"
//           alt=""
//           src="/vector-1691.svg"
//         />
//         <img
//           className="absolute top-[237.5px] left-[19.5px] w-[352px] h-px"
//           alt=""
//           src="/vector-1691.svg"
//         />
//         <img
//           className="absolute top-[313.5px] left-[19.5px] w-[352px] h-px"
//           alt=""
//           src="/vector-1691.svg"
//         />
//         <img
//           className="absolute top-[389.5px] left-[19.5px] w-[352px] h-px"
//           alt=""
//           src="/vector-1691.svg"
//         />
//         <img
//           className="absolute top-[465.5px] left-[19.5px] w-[352px] h-px"
//           alt=""
//           src="/vector-1691.svg"
//         />
//         <img
//           className="absolute top-[541.5px] left-[19.5px] w-[352px] h-px"
//           alt=""
//           src="/vector-1691.svg"
//         />
//         <img
//           className="absolute top-[617.5px] left-[19.5px] w-[352px] h-px"
//           alt=""
//           src="/vector-1691.svg"
//         />
//         <img
//           className="absolute top-[693.5px] left-[19.5px] w-[352px] h-px"
//           alt=""
//           src="/vector-1691.svg"
//         />
//         <img
//           className="absolute top-[769.5px] left-[19.5px] w-[352px] h-px"
//           alt=""
//           src="/vector-1691.svg"
//         />
//       </div>
//       <div className="absolute top-[564px] left-[475px] shadow-[0px_0px_18px_rgba(0,_0,_0,_0.05)] w-[977px] h-[513px] text-xs text-white">
//         <img
//           className="absolute top-[-1px] left-[-1px] rounded-lg w-[979px] h-[512px] object-cover"
//           alt=""
//           src="/rectangle-224@2x.png"
//         />
//         <div className="absolute top-[453px] left-[0px] w-[977px] h-[60px]">
//           <img
//             className="absolute top-[0px] left-[0px] w-[977px] h-[60px]"
//             alt=""
//             src="/group-285.svg"
//           />
//           <div className="absolute top-[41px] left-[105px] leading-[156.23%] font-semibold inline-block w-8 h-4">
//             04:16
//           </div>
//           <div className="absolute top-[41px] left-[805px] leading-[156.23%] font-semibold inline-block w-[34px] h-4">
//             24:30
//           </div>
//         </div>
//       </div>
//       <div className="absolute top-[1101px] left-[1357px] leading-[156.23%] font-semibold text-blue">{`Next    >`}</div>
//       <img
//         className="absolute top-[496px] left-[45px] w-[42px] h-[42px] cursor-pointer"
//         alt=""
//         src={left_hide}
//         onClick={onGroupIconClick}
//       />
//     </div>
//   );
// };

// export default Course2;



import React from 'react'
import Courses from './Cours'
const Course2 = () => {
  return (
    <div>
      <Courses/>
    </div>
  )
}

export default Course2
