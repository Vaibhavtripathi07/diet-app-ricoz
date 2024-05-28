// import { useCallback } from "react";

// const Sleep_tracker = () => {
//   const onVectorIcon1Click = useCallback(() => {
//     // Please sync "Trackers" to the project
//   }, []);

//   const onGroupContainerClick = useCallback(() => {
//     // Please sync "LANDING" to the project
//   }, []);

//   return (
//     <div className="relative bg-whitesmoke w-full h-[1060px] overflow-hidden text-left text-xl text-gray font-open-sans">
//       <div className="absolute top-[0px] left-[0px] bg-beige w-[394px] h-[1286px]" />
//       <img
//         className="absolute top-[344.3px] left-[346.31px] w-[24.39px] h-[19.2px]"
//         alt=""
//         src="/vector-32.svg"
//       />
//       <img
//         className="absolute top-[168px] left-[122px] rounded-3xl w-[150px] h-[150px] object-cover"
//         alt=""
//         src="/rectangle-58@2x.png"
//       />
//       <div className="absolute top-[340px] left-[136px] text-5xl leading-[120%] font-semibold inline-block w-[122px]">
//         Yor Forger
//       </div>
//       <div className="absolute top-[170px] left-[512px] text-[36px] leading-[120%] font-semibold text-dark-green-color">
//         Sleep Tracker
//       </div>
//       <img
//         className="absolute top-[176.5px] left-[433.88px] w-[15.62px] h-[27px] cursor-pointer"
//         alt=""
//         src="/vector-39.svg"
//         onClick={onVectorIcon1Click}
//       />
//       <div className="absolute top-[224px] left-[512px] text-5xl leading-[120%] text-grey-color">
//         Tuesday, July 25, 2023
//       </div>
//       <img
//         className="absolute h-[3.77%] w-[2.65%] top-[16.13%] right-[2.65%] bottom-[80.09%] left-[94.71%] max-w-full overflow-hidden max-h-full"
//         alt=""
//         src="/group.svg"
//       />
//       <div className="absolute top-[0px] left-[0px] shadow-[0px_2px_8px_rgba(0,_0,_0,_0.07)] w-[1512px] h-32 text-5xl text-dark-green-color">
//         <div className="absolute top-[0px] left-[0px] bg-whitesmoke w-[756px] h-32" />
//         <div className="absolute top-[0px] left-[756px] bg-beige w-[756px] h-32" />
//         <div
//           className="absolute top-[17px] left-[56px] w-[132px] h-[94px] cursor-pointer text-center text-[35.22px] text-black font-roboto-flex"
//           onClick={onGroupContainerClick}
//         >
//           <div className="absolute top-[0px] left-[0px] leading-[150.19%] inline-block w-[124.67px] h-[59.68px]">
//             <i>stay</i>
//             <i className="text-[52.83px] font-roboto">FIT</i>
//           </div>
//           <img
//             className="absolute top-[65.65px] left-[5.87px] w-[126.13px] h-[28.35px]"
//             alt=""
//             src="/vector-5.svg"
//           />
//           <img
//             className="absolute top-[55.47px] left-[108.26px] w-[11.68px] h-[20.58px]"
//             alt=""
//             src="/vector-6.svg"
//           />
//           <img
//             className="absolute top-[73.66px] left-[109.59px] w-[22.52px] h-[10.04px]"
//             alt=""
//             src="/vector-7.svg"
//           />
//         </div>
//         <div className="absolute top-[47px] left-[calc(50%_+_580px)] leading-[156.23%] font-semibold">
//           My Account
//         </div>
//         <div className="absolute top-[47px] left-[calc(50%_-_298px)] w-[595px] h-[37px]">
//           <div className="absolute top-[0px] left-[calc(50%_-_297.5px)] w-[595px] h-[37px]">
//             <div className="absolute top-[0px] left-[calc(50%_+_235.5px)] leading-[156.23%] font-semibold">
//               Store
//             </div>
//             <div className="absolute top-[0px] left-[calc(50%_-_297.5px)] leading-[156.23%] font-semibold">
//               Home
//             </div>
//             <div className="absolute top-[0px] left-[calc(50%_+_38.5px)] leading-[156.23%] font-semibold">
//               Who we are
//             </div>
//             <div className="absolute top-[0px] left-[130px] w-[146px] h-[37px]">
//               <div className="absolute top-[0%] left-[0%] leading-[156.23%] font-semibold">
//                 Our Services
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="absolute top-[581px] left-[93px] rounded-[60px] bg-whitesmoke w-[342px] h-[74px]" />
//       <div className="absolute top-[462px] left-[118px] leading-[120%] font-semibold text-dark-green-color inline-block w-[115px]">
//         Overview
//       </div>
//       <div className="absolute top-[534px] left-[118px] leading-[120%] font-semibold inline-block w-[139px]">
//         Food Log
//       </div>
//       <div className="absolute top-[606px] left-[118px] leading-[120%] font-semibold inline-block w-[91px]">
//         Trackers
//       </div>
//       <div className="absolute top-[678px] left-[118px] leading-[120%] font-semibold inline-block w-[186px]">
//         My Appointments
//       </div>
//       <div className="absolute top-[750px] left-[118px] leading-[120%] font-semibold inline-block w-[109px]">
//         My Orders
//       </div>
//       <div className="absolute top-[822px] left-[118px] leading-[120%] font-semibold inline-block w-[173px]">
//         Payment History
//       </div>
//       <div className="absolute top-[889px] left-[118px] leading-[120%] font-semibold inline-block w-[139px]">
//         User Account
//       </div>
//       <div className="absolute top-[335px] left-[calc(50%_+_67px)] w-[260px] h-[260px] text-center text-[57.33px] text-darkslateblue-100 font-montserrat">
//         <div className="absolute top-[0px] left-[calc(50%_-_130px)] w-[260px] h-[260px]">
//           <div className="absolute top-[0px] left-[calc(50%_-_110.9px)] w-[240.9px] h-[260px]">
//             <div className="absolute top-[0px] left-[calc(50%_-_120.45px)] w-[240.9px] h-[260px]">
//               <div className="absolute top-[-17.92px] left-[calc(50%_-_138.37px)] rounded-[50%] box-border w-[276.73px] h-[295.83px] border-[17.9px] border-solid border-darkslateblue-200" />
//               <div className="absolute top-[71px] left-[calc(50%_-_40.55px)] w-[81.71px] h-[118.78px]">
//                 <div className="absolute top-[0px] left-[calc(50%_-_38.85px)] leading-[120.23%] font-semibold">
//                   08
//                 </div>
//                 <div className="absolute top-[86.78px] left-[calc(50%_-_40.85px)] text-[26.88px] leading-[120.23%] font-medium inline-block w-[81.71px]">
//                   Hours
//                 </div>
//               </div>
//             </div>
//           </div>
//           <img
//             className="absolute top-[129.58px] left-[0px] w-[21.63px] h-[27.19px]"
//             alt=""
//             src="/group-817.svg"
//           />
//         </div>
//       </div>
//       <div className="absolute top-[1101px] left-[848px] rounded-2xl [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))] overflow-hidden flex flex-row items-center justify-center py-7 px-[73px] text-5xl text-dark-green-color border-[1px] border-solid border-palegoldenrod">
//         <div className="relative leading-[120%] font-semibold">Reset</div>
//       </div>
//       <div className="absolute top-[364px] left-[566px] w-[157px] h-[177px] text-5xl">
//         <div className="absolute top-[0px] left-[32px] w-[125px] h-[63px]">
//           <b className="absolute top-[0px] left-[0px] leading-[120%]">
//             4280 steps
//           </b>
//           <img
//             className="absolute top-[32px] left-[1px] w-8 h-8"
//             alt=""
//             src="/drank.svg"
//           />
//         </div>
//         <div className="absolute top-[33px] left-[0px] w-[157px] h-36">
//           <b className="absolute top-[81px] left-[16px] leading-[120%]">
//             2720 steps
//           </b>
//           <div className="absolute top-[0px] left-[0px] w-[157px] h-36">
//             <div className="absolute top-[115px] left-[38px] leading-[120%]">{`Remaining `}</div>
//             <div className="absolute top-[0px] left-[71px] leading-[120%]">
//               Walked
//             </div>
//             <div className="absolute top-[113px] left-[-1px] rounded-[50%] bg-lightsteelblue box-border w-8 h-8 border-[1px] border-solid border-darkslateblue-100" />
//           </div>
//         </div>
//       </div>
//       <div className="absolute top-[735px] left-[715px] w-[476px] h-52 text-xs text-darkslateblue-100">
//         <div className="absolute top-[0px] left-[0px] rounded-xl bg-lavender shadow-[-4px_4px_11px_rgba(138,_75,_75,_0.13)] w-[476px] h-52" />
//         <img
//           className="absolute h-[2.3%] w-[84.08%] top-[82.05%] right-[5.04%] bottom-[15.65%] left-[10.88%] max-w-full overflow-hidden max-h-full"
//           alt=""
//           src="/group1.svg"
//         />
//         <img
//           className="absolute h-[53.64%] w-[1.19%] top-[28.48%] right-[89.3%] bottom-[17.88%] left-[9.51%] max-w-full overflow-hidden max-h-full"
//           alt=""
//           src="/group2.svg"
//         />
//         <div className="absolute h-[66.35%] w-[89.92%] top-[25%] right-[5.04%] bottom-[8.65%] left-[5.04%] text-right text-dodgerblue font-inter">
//           <img
//             className="absolute h-[81.43%] w-[93.39%] top-[4.56%] right-[0%] bottom-[14.02%] left-[6.61%] max-w-full overflow-hidden max-h-full"
//             alt=""
//             src="/group3.svg"
//           />
//           <img
//             className="absolute h-[80.7%] w-[93.57%] top-[4.92%] right-[-0.06%] bottom-[14.38%] left-[6.49%] max-w-full overflow-hidden max-h-full"
//             alt=""
//             src="/group4.svg"
//           />
//           <div className="absolute h-[10.95%] w-[8.87%] top-[89.05%] left-[8.47%] inline-block">
//             Sun
//           </div>
//           <div className="absolute h-[10.95%] w-[3.23%] top-[78.83%] left-[0%] inline-block">
//             0
//           </div>
//           <div className="absolute h-[10.95%] w-[3.23%] top-[59.12%] left-[0%] inline-block">
//             2
//           </div>
//           <div className="absolute h-[10.95%] w-[3.23%] top-[39.42%] left-[0%] inline-block">
//             4
//           </div>
//           <div className="absolute h-[10.95%] w-[3.23%] top-[19.71%] left-[0%] inline-block">
//             6
//           </div>
//           <div className="absolute h-[10.95%] w-[3.23%] top-[0%] left-[0%] inline-block">
//             8
//           </div>
//           <div className="absolute h-[10.95%] w-[10.08%] top-[89.05%] left-[22.18%] inline-block">
//             Mon
//           </div>
//           <div className="absolute h-[10.95%] w-[8.47%] top-[89.05%] left-[37.1%] inline-block">
//             Tue
//           </div>
//           <div className="absolute h-[10.95%] w-[10.48%] top-[89.05%] left-[50.4%] inline-block">
//             Wed
//           </div>
//           <div className="absolute h-[10.95%] w-[8.87%] top-[89.05%] left-[65.73%] inline-block">
//             Thu
//           </div>
//           <div className="absolute h-[10.95%] w-[6.05%] top-[89.05%] left-[79.44%] inline-block">
//             Fri
//           </div>
//           <div className="absolute h-[10.95%] w-[7.66%] top-[89.05%] left-[90.32%] inline-block">
//             Sat
//           </div>
//         </div>
//         <div className="absolute top-[12px] left-[24px] text-xl leading-[120%] font-semibold">
//           Sleep Analytics
//         </div>
//         <div className="absolute top-[5px] left-[280px] text-[14px] leading-[120%] inline-block w-[172px] h-[18px]">{`Avg sleep hours: 7.4 hours `}</div>
//         <img
//           className="absolute top-[51.34px] left-[55.01px] rounded-[7px] w-[399.64px] h-[89.53px]"
//           alt=""
//           src="/vector-185.svg"
//         />
//       </div>
//       <div className="absolute top-[0px] left-[-3px] bg-gainsboro w-[1512px] h-[1064px]" />
//       <div className="absolute top-[321px] left-[calc(50%_-_515px)] w-[1030px] h-[341px] text-5xl text-dark-green-color font-roboto">
//         <section
//           className="absolute top-[-2px] left-[calc(50%_-_517px)] rounded-lg bg-whitesmoke box-border w-[1034px] h-[345px] border-[2px] border-solid border-dark-green-color"
//           id="sleephoursSection"
//         />
//         <div className="absolute top-[30px] left-[calc(50%_-_491px)] w-[683px] h-[143px]">
//           <input
//             className="bg-whitesmoke absolute top-[-1px] left-[calc(50%_+_27.5px)] rounded-lg shadow-[0px_0px_5px_rgba(0,_0,_0,_0.1)] box-border w-[223px] h-[98px] border-[1px] border-solid border-stroke-green-color"
//             name="sleep_hours"
//             id="sleep_hours"
//             placeholder="0"
//             type="number"
//           />
//           <p
//             className="m-0 absolute top-[32px] left-[616px] tracking-[0.03em] leading-[120%]"
//             id="hours"
//           >
//             Hours
//           </p>
//           <p
//             className="m-0 absolute top-[114px] left-[372px] tracking-[0.03em] leading-[120%]"
//             id="0 - 24 hours"
//           >
//             (0-24 hours)
//           </p>
//           <p
//             className="m-0 absolute top-[29px] left-[0px] text-[32px] tracking-[0.03em] leading-[120%] font-semibold font-open-sans"
//             id="add_hors_of_sleep"
//           >
//             Add Hours of sleep
//           </p>
//         </div>
//         <button
//           className="cursor-pointer py-7 px-[73px] bg-[transparent] absolute top-[226px] left-[411px] rounded-2xl [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))] overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-palegoldenrod"
//           autoFocus={true}
//           id="Button"
//         >
//           <div className="relative text-5xl leading-[120%] font-semibold font-open-sans text-dark-green-color text-left">
//             Done
//           </div>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Sleep_tracker;
