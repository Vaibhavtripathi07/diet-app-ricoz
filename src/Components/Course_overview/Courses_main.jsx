// import React, { useState } from "react";
// import Nutritional_Fundamentals from "../../asset/Nutritional_Fundamentals.png";
// import ratings_full from "../../asset/ratings_full.png";
// import { Line } from "rc-progress";
// import Nav from "../Top_Nav/Nav";
// import time from "../../asset/time.png";
// import CourseOutlineData from "./CourseOutlineData.json";
// import { Link } from "react-router-dom";

// const Courses_main = () => {
//   const [rotation, setRotation] = useState(0);
//   const [showDetails, setShowDetails] = useState(true);

//   const CourseOverview = () => {
//     // Please sync "Courses" to the project
//     const newRotation = rotation === 0 ? -180 : 0;
//     setRotation(newRotation);
//     setShowDetails(!showDetails);
//   }
// return (
//   <section className="relative w-[1512px] h-[2926px] overflow-hidden xl:w-full">
//     <Nav />
//     <h1
//       className="m-0 absolute top-[208px] left-[calc(50%_-_396px)] text-[48px] tracking-[0.53em] leading-[133%] text-stroke-green-color whitespace-pre-wrap font-inherit "
//       id="stayfit learning"
//     >
//       <i className="font-semibold">StayFIT</i>
//       <span className="font-semibold"> Learning</span>
//     </h1>
//     <section className="flex my-[264px] mt-[394px] ml-[100px] gap-12 items-center">
//       <img
//         src={Nutritional_Fundamentals}
//         className="rounded-[10px] h-[280px] w-[280px]"
//         alt=""
//       />
//       <section>
//         <p className="w-[455px] text-black text-4xl  font-extrabold font-sans leading-[56.24px]">
//           Nutritional Fundamentals
//         </p>
//         <img src={ratings_full} alt="" />
//         <p className="text-black font-sans mt-[20px] font-normal text-13xl leading-[156.227%]">
//           Learn the basics of nutrition and develop a solid foundation for a{" "}
//           <br />
//           healthy diet.
//         </p>
//         <section className="flex justify-evenly mt-[45px]">
//           <p className=" text-5xl font-sans leading-[156.227%] font-normal">
//             Rs. 1,299.00
//             <span className="text-[#f00] pl-3 open-sans text-5xl  leading-[156.227%] line-through">
//               3,499.00
//             </span>
//           </p>
//           <p className="text-5xl font-normal leading-[156.227%]">
//             Instructor:
//             <span className="text-black text-5xl open-sans  font-bold">
//               David Hemsworth
//             </span>
//           </p>
//           <section className="flex gap-2 items-center">
//             <img src={time} className="w-[23px] h-6 items-center" alt="" />
//             <p className="text-black font-sans text-5xl  font-bold leading-[156.227%]">
//               4weeks
//             </p>
//           </section>
//         </section>
//       </section>
//     </section>
//     {/* progress */}
//     <section className="flex gap-3 items-center ">
//       <p className="text-5xl  font-bold text-black leading-[156.227%] ml-[435px] top-[753px] ">
//         progress:
//       </p>

//       <Line
//         percent={8}
//         strokeWidth={2}
//         strokeColor="#88A0FB"
//         trailColor="#D7DDF4"
//         trailWidth={2}
//         className="w-[808px] "
//       />

//     </section>
//       <p className="text-base font-normal leading-[156.227%] text-grey-color font-sans ml-[558px] -mt-1">8%  of 100%</p>
//     {/* <Line percent={8} strokeWidth={4} strokeColor="#88A0FB" trailColor="#D7DDF4" trailWidth={4} className="absolute top-[0px] left-[0px] box-border w-[42px] h-4 border-[1px] border-solid border-grey-color" /> */}
//     {/* progress */}

//     {/* button */}
//     <button className="text-5xl font-sans rounded-2xl mx-auto block  text-dark-green-color font-semibold py-7 px-[73px] [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))] rounded-4 border border-solid border-[#CFF7AA]">Start Learning</button>

//     {/* course outline   */}
//     <h1 className="text-center text-[46px] leading-[156.227%] text-black font-sans font-bold ">
//       Course Outline
//     </h1>
//     {/* course outline   */}

//     {CourseOutlineData.Outline.map((Outline) => (
//       <section key={Outline.id}>
//         <section className="w-[855px]  h-[97px] mx-auto rounded-2xl  flex items-center justify-between px-4 bg-gradient-to-r  from-red-100 to-orange-50 my-[42px] ">
//           <h2 className="text-5xl font-bold text-black leading-[156.227%]">
//             {Outline.Module}
//           </h2>
//           <img
//             src={Outline.img}
//             alt={`Outline ${Outline.id}`}
//             onClick={CourseOverview}
//             style={{ transform: `rotate(${rotation}deg)` }}
//           />
//         </section>
//         {showDetails && (
//           <section className="rounded-[26px] w-[855px] mx-auto bg-[#F7FFF2] shadow-xl5">
//             <ol className="list-decimal h-[172px] mx-auto -mt-[30px] rounded-[26px] bg-[#F7FFF2] shadow-xl5  p-[30px] ">
//               <section className="flex justify-between px-3">
//               <li className="text-xl font-sans font-normal leading-[180%] text-left ">
//                 Understanding the importance of nutrition in overall health
//               </li>
//               <input type="checkbox" name="module_done" className="accent-dark-green-color w-6 h-[21px]" /></section>
//               <section className="flex justify-between px-3">
//               <li className="text-xl font-sans font-normal leading-[180%]">
//                 Exploring the essential nutrients and their roles in the body
//               </li>
//               <input type="checkbox" name="module_done" className="accent-dark-green-color w-6 h-[21px]" /></section>
//               <section className="flex justify-between px-3">
//               <li className="text-xl font-sans font-normal leading-[180%]">
//                 Distinguishing between macronutrients and micronutrients
//               </li>
//               <input type="checkbox" name="module_done" className="accent-dark-green-color w-6 h-[21px]" /></section>
//               <section className="flex justify-between px-3">
//               <li className="text-xl font-sans font-normal leading-[180%]">
//                 Identifying the key components of a balanced diet
//               </li>
//               <input type="checkbox" name="module_done" className="accent-dark-green-color w-6 h-[21px]" /></section>
//             </ol>
//           </section>
//         )}
//       </section>
//     ))}

//     {/* <Link to="/EnrollNow">
//       <button className="px-[73px] py-7 text-5xl text-dark-green-color mt-[100px] justify-center border border-solid rounded-2xl border-[#CFF7AA] [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))] font-semibold mx-auto block">
//         Enroll now
//       </button>
//     </Link> */}
//   </section>
// );
//         }

// export default Courses_main;


import React, { useState } from "react";
import Nutritional_Fundamentals from "../../asset/Nutritional_Fundamentals.png";
import ratings_full from "../../asset/ratings_full.png";
import Outline_Arrow from "../../asset/Outline_Arrow.png"
import Nav from "../Top_Nav/Nav";
import { Line } from "rc-progress";
import time from "../../asset/time.png";
import CourseOutlineData from "./CourseOutlineData.json";
import { Link } from "react-router-dom";

const Courses_main = () => {
  // const [rotation, setRotation] = useState(0);
  // const [showDetails, setShowDetails] = useState(false);

  // const CourseOverview = () => {
  //   // Please sync "Courses" to the project
  //   const newRotation = rotation === 0 ? -180 : 0;
  //   setRotation(newRotation);
  //   setShowDetails(!showDetails);
  // }

  const [openSectionId, setOpenSectionId] = useState(null);

  const toggleSection = (id) => {
    setOpenSectionId(id === openSectionId ? null : id);
  };
return (
  <div className="w-[1512px] h-[2926px] overflow-hidden xl:w-full">
    <Nav />

    <h1 className="text-29xl font-sans text-center tracking-[0.53em] my-36 text-strokegreen-color leading-[133%] font-semibold">
      <span className="italic">StayFIT</span> Learning
    </h1>

    <section className="flex my-36 flex-row justify-center gap-12 items-center">
      <img
        src={Nutritional_Fundamentals}
        className="rounded-[10px] h-[280px] w-[280px]"
        alt=""
      />
      <section>
        <p className="w-[455px] text-black text-4xl  font-extrabold font-sans leading-[56.24px]">
          Nutritional Fundamentals
        </p>
        <img src={ratings_full} alt="" />
        <p className="text-black font-sans mt-[20px] font-normal text-13xl leading-[156.227%]">
          Learn the basics of nutrition and develop a solid foundation for a{" "}
          <br />
          healthy diet.
        </p>
        <section className="flex justify-evenly mt-11">
          <p className=" text-5xl font-sans leading-[156.227%] font-normal">
            Rs. 1,299.00
            <span className="text-[#f00] pl-3 font-sans text-5xl  leading-[156.227%] line-through">
              3,499.00
            </span>
          </p>
          <p className="text-5xl font-normal leading-[156.227%]">
            Instructor:
            <span className="text-black text-5xl open-sans  font-bold">
              David Hemsworth
            </span>
          </p>
          <section className="flex gap-2 items-center">
            <img src={time} className="w-[23px] h-6 items-center" alt="" />
            <p className="text-black font-sans text-5xl  font-bold leading-[156.227%]">
              4weeks
            </p>
          </section>
    

          {/* progress */}

          {/* button */}
        </section>
        <section className="">
            <p className="text-3xl">Progress:</p>
            <section>
              <Line
                percent={8}
                strokeWidth={4}
                strokeColor="#88A0FB"
                trailColor="#D7DDF4"
                trailWidth={4}
                className=" top-[0px] left-[0px] box-border h-5 items-center  w-5/6"
              />
              <p className="text-base font-normal leading-7 font-sans ">
                8% of 100%
              </p>
            </section>
          </section>
          <button className="text-5xl font-sans rounded-2xl mx-auto block  text-dark-green-color font-semibold py-7 px-[73px] [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))] rounded-4 border border-solid border-[#CFF7AA]">
            Start Learning
          </button>
      </section>
    </section>

    {/* course outline   */}
    <h1 className="text-center text-29xl leading-[156.227%] text-black font-sans font-bold">
      Course Outline
    </h1>
    {/* course outline   */}
    {/* <section className='w-[855px]  h-[97px]  bg-gradient-to-r  from-red-100 to-orange-50 rounded-2xl mx-auto mt-[200px] border border-black'>
{CourseOutlineData.Outline.map((Outline,id)=>{
<section key={id} >
<p className='5xl font-bold text-black leading-[156.227%]'>{Outline.Module}</p>
<img src={Outline.img} alt="" />
</section>
})}
</section> */}

    {CourseOutlineData.Outline.map((Outline) => (
      <section key={Outline.id}>
        <section
          className="max-w-4xl min-h-[97px] mx-auto rounded-2xl flex items-center justify-between px-5 bg-gradient-to-r from-red-100 to-orange-50 my-10"
          onClick={() => toggleSection(Outline.id)}
        >
          <h2 className="text-5xl font-bold text-black leading-[156.227%]">
            {Outline.Module}
          </h2>
          <img
            src={Outline_Arrow}
            alt="Outline"
            style={{
              transform: `rotate(${openSectionId === Outline.id ? -180 : 0}deg)`,
            }}
          />
        </section>
        {openSectionId === Outline.id && (
          <section className="rounded-[26px] max-w-4xl mx-auto bg-[#F7FFF2] shadow-xl5">
            <ol className="list-decimal min-h-fit mx-auto -mt-7 rounded-3xl bg-[#F7FFF2] shadow-xl5 p-[30px]">
              <li className="text-xl font-sans font-normal leading-[180%] text-left">
                Understanding the importance of nutrition in overall health
              </li>
              <li className="text-xl font-sans font-normal leading-[180%]">
                Exploring the essential nutrients and their roles in the body
              </li>
              <li className="text-xl font-sans font-normal leading-[180%]">
                Distinguishing between macronutrients and micronutrients
              </li>
              <li className="text-xl font-sans font-normal leading-[180%]">
                Identifying the key components of a balanced diet
              </li>
            </ol>
          </section>
        )}
      </section>
    ))}

    <Link to="/EnrollNow">
      <button className="px-16 py-7 text-5xl text-dark-green-color mt-[100px] justify-center border border-solid rounded-2xl border-[#CFF7AA] [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))] font-semibold mx-auto block">
        Enroll now
      </button>
    </Link>
  </div>
);
        }

export default Courses_main;

