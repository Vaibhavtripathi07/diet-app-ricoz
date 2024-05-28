import React from "react";
import high_stepping from "../../asset/high_stepping.gif"
import Black_right from "../../asset/Black_right.png"
import {  Circle } from 'rc-progress';
import { Link } from "react-router-dom";


const Workout = () => {
  return (
    <div className="absolute w-[1237px] h-[773px] text-right text-5xl top-[3933px] left-[94px] font-sans text-black">
      <p className="absolute top-[130px] left-[411px] text-17xl leading-[156.23%] font-semibold inline-block w-[157px]  text-inherit">Workout </p>
      <div className="absolute top-[238px] left-[0px] leading-[156.23%] text-5xl inline-block w-[568px] font-normal  text-inherit">Discover various workout routine, exercises, yoga & more to complement your diet and achieve your fitness goals.</div>
      <div className="absolute top-[0px] left-[835px] rounded-[21.32px] bg-white shadow-[-25px_19px_11px_rgba(0,_0,_0,_0.25)]  w-[402px] h-[781px] overflow-hidden text-left text-xl font-montserrat ">
        <div className="absolute top-[24px] left-[calc(50%_-_80px)] leading-[156.23%] font-semibold">
          High Stepping
        </div>
        <img
          className="absolute top-[103px] left-[calc(50%_-_200px)] w-[393px] h-[261px] object-cover"
          alt=""
          src={high_stepping}
        />
        <div className="absolute top-[431px] left-[calc(50%_-_80px)] rounded-[50%] w-[149px] h-[149px]" />
        <div className="absolute top-[424px] left-[189px] rounded-[11px] bg-lightpink w-2.5 h-[7px]" />
{/* progress */}
        <Circle percent={2} strokeWidth={7} trailWidth={7}  strokeColor="#FFA1A1" trailColor="rgba(255, 239, 239, 1.00)" className="w-[149px] h-[149px] mt-[431px]  ml-[121px]"/> 
{/* progress */}
        <div className="absolute top-[495px] left-[calc(50%_-_24px)] text-sm text-black leading-[156.23%] font-semibold cursor-pointer">
        {/* <div className="absolute top-[495px] left-[165px] text-sm text-black leading-[156.23%] font-semibold"> */}
          Start
        </div>
        <div className="absolute top-[604px] left-[calc(50%_-_36px)] text-sm font-montserrat text-black leading-[156.23%] font-medium">
        {/* <div className="absolute top-[604px] left-[165px] text-sm  font-montserrat text-black leading-[156.23%] font-medium"> */}
          1:00 min
        </div>
        <div className="absolute top-[719px] left-[calc(50%_+_92px)] w-[65px] h-[31px]">
          <div className="absolute top-[0px] left-[calc(50%_-_32.5px)] text-black text-[20px] font-montserrat leading-[156.23%] font-medium cursor-pointer ">
            Next
          </div>
          <Link to="/">
          <img
            className="absolute top-[9px] left-[55px] w-[6px] h-[10.5px]"
            alt=""
            src={Black_right}
          /></Link>
        </div>
        <div className="absolute top-[3534px] left-[-653px] text-17xl leading-[156.23%] font-semibold font-open-sans text-right inline-block w-[157px]">Workout</div>
      </div>
    </div>
  );
};

export default Workout;


// import React, { useState, useEffect } from "react";
// import high_stepping from "../../asset/high_stepping.gif";
// import Black_right from "../../asset/Black_right.png";
// import { Circle } from 'rc-progress';
// import { Link } from "react-router-dom";

// const Workout = () => {
//   const [timer, setTimer] = useState(60); // Initial timer value in seconds
//   const [isRunning, setIsRunning] = useState(false);

//   useEffect(() => {
//     let interval;

//     if (isRunning && timer > 0) {
//       interval = setInterval(() => {
//         setTimer((prevTimer) => prevTimer - 1);
//       }, 1000);
//     }

//     return () => clearInterval(interval);
//   }, [isRunning, timer]);

//   const toggleTimer = () => {
//     setIsRunning((prevIsRunning) => !prevIsRunning);
//   };

//   const resetTimer = () => {
//     setTimer(60); // Set the initial timer value
//     setIsRunning(false); // Stop the timer
//   };

//   return (
//     <div className="absolute w-[1237px] h-[773px] text-right text-5xl top-[3933px] left-[94px] font-sans text-black">
//           <p className="absolute top-[130px] left-[411px] text-17xl leading-[156.23%] font-semibold inline-block w-[157px]  text-inherit">Workout </p>
//        <div className="absolute top-[238px] left-[0px] leading-[156.23%] text-5xl inline-block w-[568px] font-normal  text-inherit">Discover various workout routine, exercises, yoga & more to complement your diet and achieve your fitness goals.</div>
//        <div className="absolute top-[0px] left-[835px] rounded-[21.32px] bg-white shadow-[-25px_19px_11px_rgba(0,_0,_0,_0.25)]  w-[402px] h-[781px] overflow-hidden text-left text-xl font-montserrat ">
//          <div className="absolute top-[24px] left-[calc(50%_-_80px)] leading-[156.23%] font-semibold">
//            High Stepping
//          </div>
//          <img
//            className="absolute top-[103px] left-[calc(50%_-_200px)] w-[393px] h-[261px] object-cover"
//            alt=""
//            src={high_stepping}
//          />
//          <div className="absolute top-[431px] left-[calc(50%_-_80px)] rounded-[50%] w-[149px] h-[149px]" />
//          <div className="absolute top-[424px] left-[189px] rounded-[11px] bg-lightpink w-2.5 h-[7px]" />
//  {/* progress */}
//         <Circle percent={2} strokeWidth={7} trailWidth={7}  strokeColor="#FFA1A1" trailColor="rgba(255, 239, 239, 1.00)" className="w-[149px] h-[149px] mt-[431px]  ml-[121px]"/> 
//  {/* progress */}

//  <div className="absolute top-[495px] left-[calc(50%_-_24px)] text-sm text-black leading-[156.23%] font-semibold cursor-pointer" onClick={toggleTimer}>
//         {isRunning ? "Pause" : "Start"}
//       </div>
//       <div className="absolute top-[604px] left-[calc(50%_-_36px)] text-sm font-montserrat text-black leading-[156.23%] font-medium">
//         {timer} sec
//       </div>
//       <div className="absolute top-[604px] left-[calc(50%_-_36px)] text-sm font-montserrat text-black leading-[156.23%] font-medium">
//          {/* <div className="absolute top-[604px] left-[165px] text-sm  font-montserrat text-black leading-[156.23%] font-medium"> */}
//            1:00 min
//          </div>
//          <div className="absolute top-[719px] left-[calc(50%_+_92px)] w-[65px] h-[31px]">
//            <div className="absolute top-[0px] left-[calc(50%_-_32.5px)] text-black text-[20px] font-montserrat leading-[156.23%] font-medium cursor-pointer ">
//              Next
//            </div>
//            <Link to="/">
//            <img
//              className="absolute top-[9px] left-[55px] w-[6px] h-[10.5px]"
//              alt=""
//              src={Black_right}
//            /></Link>
//          </div>
//          <div className="absolute top-[3534px] left-[-653px] text-17xl leading-[156.23%] font-semibold font-open-sans text-right inline-block w-[157px]">Workout</div>
//        </div>
//      </div>
//    );
//  };

//  export default Workout;