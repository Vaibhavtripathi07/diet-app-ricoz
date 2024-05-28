import React,{ useState } from "react";

import Nav from "../Top_Nav/Nav";
import Footer from "../Footer/Footer";
import Search from "../../asset/Search.png";
import CourceData from "./CourceData.json";
import Testimonial from "../Welcome/Testimonial";

import NutritionFundamentals from "./NutritionFundamentals";
import CourseLearn from "./CourseLearn";
import ratings_full from "../../asset/ratings_full.png";
import blue_inverted from "../../asset/blue_inverted.png";
import Arrow from "../../asset/Arrow.png";
import jade from "../../asset/jade.png";
import user from "../../asset/user.png";
import Profile from "../../asset/Profile.png";
import Award from "../../asset/Award.png";
import Zero2Hero from "../../asset/Zero2Hero.png";
import link from "../../asset/link.png";
import statusInc from "../../asset/statusInc.png";
import sadie from "../../asset/sadie.png";
// import course from "./../asset/course.png";
// import Searching from "../MealPlans/Searching";


const COURCES = () => {
  const [expanded, setExpanded] = useState(false);


  const toggleExpansion1 = () => {
    setExpanded(!expanded);
  };
  const toggleExpansion2 = () => {
    setExpanded(!expanded);
  };
  const toggleExpansion3 = () => {
    setExpanded(!expanded);
  };

  

  return (
    <div className=" bg-whitesmoke min-w-[1512px] min-h-[5859px] overflow-hidden   text-gray-200 font-sans">
      <Nav />

      {/* <h1
        className="top-[208px] left-[calc(50%_-_396px)] text-29xl tracking-[0.53em] leading-[133%] text-stroke-green-color whitespace-pre-wrap font-inherit "
        
      >
        <i className="font-semibold">StayFIT</i>
        <span className="font-semibold"> Learning</span>
      </h1> */}

      <h1 className="text-29xl font-sans text-center tracking-[0.53em] my-36 text-strokegreen-color leading-[133%] font-semibold">
        <span className="italic">StayFIT</span> Learning
      </h1>
      {/* input */}

      <secton>
        <Searching />

        {/* <img
        src={course}
        alt=""
        className="w-[60px] h-[60px] absolute top-[360px] right-[40px] "
      /> */}
      </secton>
      {/* input */}
      <h1 className="text-center font-inherit text-29xl text-black leading-[133%] font-semibold my-36">
        Featured Courses
      </h1>

      {/* featured courses */}
      <section className="flex justify-evenly">
        {CourceData.course.map((course) => (
          <section className="w-[330px] h-[480px] rounded-[20px] border-2 border-solid border-[#999] ">
            <img
              src={course.img}
              className="w-[320px] h-[200px] object-contain"
              alt="img"
            />
            <section className="flex justify-between">
              <p className="text-black w-[165px] text-5xl font-sans font-bold leading-[156.227%] ml-5 mt-3">
                {course.Course_Name}
              </p>
              <section>
                <img
                  src={course.star}
                  className="h-5 w-5 mr-7 mt-5 mix-blend-color-burn"
                  alt="star"
                />
                <p className="w-[18px] h-[15px] text-[12px] ml-1 text-black font-sans font-normal leading-[156.227%]">
                  {course.rating}
                </p>
              </section>
            </section>
            <p className="text-5xl font-sans text-black leading-[156.227%] mt-8 font-semibold ml-5 ">
              {course.Instructor}
            </p>
            <section className="flex items-center gap-3 ml-5">
              <img
                src={course.Time_img}
                className="w-6 h-6 object-contain mt-12  object-center"
                alt="time"
              />
              <p className="font-sans text-[#747272] text-xl font-semibold mt-12 leading-[133%] ">
                {course.Duration}
              </p>
            </section>
          </section>
        ))}
      </section>

      {/* featured courses */}

      <h1 className="text-center font-inherit text-[46px] text-black leading-[156.226%] font-semibold my-36">
        Explore Courses
      </h1>
      {/* Explore courses */}
      <section className="flex justify-evenly ">
        {CourceData.Explore.map((Explore) => (
          <section 
          key={Explore.id} // Make sure each item has a unique key
          className="w-[190px] h-[270px] rounded-2xl border border-[#E8DDDD] hover:scale-150 transition-transform duration-300 ease "
          style={{ backgroundImage: `url(${Explore.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            {/* <img src={Explore.img} className="object-contain" alt="img" /> */}
            
            <section className="bg-[#FDF3FF] mt-28 border border-[#E8DDDD] rounded-2xl w-48 -ml-0 hover:bg-[#EEF0FE] ">
            <section className="flex  items-center justify-between ">
              <p className="text-sm text-black font-bold leading-[133%] ml-2 mt-3 font-sans">
                {Explore.Course_Name}
              </p>
              <section>
                <img
                  src={Explore.star}
                  className="w-5 h-5 mr-2 mt-5  "
                  alt="star "
                />
                <p className="text-black text-sm font-sans ">
                  {Explore.rating}
                </p>
              </section>
            </section>
            <p className="text-3xs font-normal leading-[156.227%] text-black min-w-[141px] mt-1 mx-2 whitespace-pre-wrap font-sans">
              {Explore.Info}
            </p>
            <section className="flex items-center gap-2 mt-1 ml-1">
              <img
                src={Explore.Time_img}
                className="w-6 h-6 object-fit "
                alt=""
              />
              <p className="flex item-center text-base font-normal text-[#747272] font-sans leading-[133%]">
                {Explore.Duration}
              </p>
            </section>
            <section className="flex justify-center items-center mb-2 gap-2 text-5xs font-bold font-sans leading-[133%] mt-3">
              <p className="text-[#7C5185] font-sans text-4xs-5 font-bold leading-[156.227%]">
                {Explore.Cost}
              </p>
              <p className="text-red-700 text-4xs-5 line-through">{Explore.Actual_Cost}</p>
            </section>
            </section>
          </section>
        ))}
      </section>

      {/* Explore courses */}
      <section className="flex items-center flex-row md:flex-row flex-wrap ">
        {/* nutritient fundamental */}
        <NutritionFundamentals />
        <CourseLearn />
        {/* nutritient fundamental */}
      </section>
      {/* feedback */}

      <h3 className="text-center text-dark font-sans text-29xl font-semibold leading-[133%]">
        Hear from our Students who took our courses!
      </h3>
      {/* for creating scroo on click */}
      <section className="flex items-center justify-evenly flex-row  min-w-[1372px]  min-h-[647px]  ">
        <section className=" w-[536px] h-[412px] mt-[120px]  ml-12">
          <img src={sadie} alt="" className=" -ml-16" />
          <section className=" border border-solid border-grey-color max-w-[471px] min-h-[346px] rounded-[36px] -mt-[155px]  ">
            <h5 className=" font-sans text-black text-9xl ml-56 mt-9 leading-[133%]  font-semibold">
              Saddie Warren
            </h5>
            <img
              src={ratings_full}
              height={14}
              width={86}
              alt=""
              className="ml-56 mt-2 "
            />
            <section className="my-14">
              <img
                src={blue_inverted}
                width={24}
                height={24}
                alt=""
                className=" ml-6"
              />
              <p className=" w-[397px] font-sans text-xl leading-6 tracking-[0.6px] font-normal ml-12 ">
                The Nutrition Fundamentals course exceeded my expectations! It
                covered all the essential topics in a comprehensive yet
                easy-to-understand manner. Highly recommended!
              </p>
            </section>
          </section>
        </section>

        <section className=" w-[536px] h-[412px] mt-[120px]  ml-12">
          <img src={jade} alt="" className=" -ml-16" />
          <section className=" border border-solid border-grey-color max-w-[471px] min-h-[346px] rounded-[36px] -my-36  ">
            <h5 className=" font-sans text-black text-9xl leading-[133%] ml-56 mt-9 font-semibold">
              Jade Williams
            </h5>
            <img
              src={ratings_full}
              height={14}
              width={86}
              alt=""
              className="ml-56 mt-2 "
            />

            <section className="my-14">
              <img
                src={blue_inverted}
                width={24}
                height={24}
                alt=""
                className=" ml-6"
              />
              <p className="w-[397px] font-sans text-xl leading-6 tracking-[0.6px] font-normal ml-12">
                The course materials were top-notch and the interactive
                exercises made learning enjoyable. I'm grateful for the valuable
                insights I gained from this course.
              </p>
            </section>
          </section>
        </section>

</section>
      <section className="my-36">
        <h1 className="text-center text-dark font-sans text-29xl my-36  font-semibold leading-[133%] tracking-widest">
          Why <span className="italic">StayFIT</span> Learning?
        </h1>

        <section className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-y-64">
          <section className="  flex flex-col items-center justify-center">
            <img src={user} alt="" className="bg-[#FDD3D3] rounded-full px-3 py-3" />
            <p className="font-sans text-5xl text-center font-semibold leading-7">Best Educators</p>
          </section>
          <section className="  flex flex-col items-center justify-center">
            <img src={Zero2Hero} alt="" className="bg-[#E2EFFF] rounded-full px-3 py-3" />
            <p className="font-sans text-5xl font-semibold text-center leading-7">Zero to Hero Learning</p>
            <p className="font-sans text-5xl font-semibold text-center leading-7">(Beginner to Advance)</p>
          </section>
          <section className=" flex flex-col items-center justify-center">
            <img src={Award} alt=""  className="bg-[#FFF4CF] rounded-full px-3 py-3"/>
            <p className="font-sans text-5xl font-semibold text-center leading-7">Certification</p>
          </section>
          <section className="  flex flex-col items-center justify-center">
            <img src={Profile} alt=""  className="bg-[#F1FFEA] rounded-full px-3 py-3"/>
            <p className="font-sans text-5xl font-semibold leading-7 text-center ">1-1 Problem Solving</p>
          </section>
          <section className="  flex flex-col items-center justify-center">
            <img src={link} alt=""  className="bg-[#FFF0EC] rounded-full px-3 py-3"/>
            <p className="font-sans text-5xl text-center font-semibold leading-7">Interactive with <br />hands on activities</p>
          </section>
          <section className="  flex flex-col items-center justify-center">
            <img src={statusInc} alt=""  className="bg-[#FEE3FF] rounded-full px-3 py-3 "/>
            <p className="font-sans text-5xl text-center font-semibold leading-7">Career Guidance</p>
          </section>
        </section>
      </section>
      {/* why stayfit learning

      {/* faq */}
      <h3 className="text-center text-dark font-sans  text-29xl my-36 font-semibold leading-[133%]">
        Frequently Asked Questions
      </h3>

      <section className="flex items-center m-16 ">
<section className="w-2/5 space-y-12"> 
    
      <section className=" bg-whitesmoke border border-solid border-stroke-green-color rounded-3xl flex items-center justify-between h-24 px-5">
        <p className=" leading-7 text-9xl font-semibold">
          How do enroll in a course?
        </p>
        <p
          className="text-13xl leading-[133%] font-sans"
          onClick={toggleExpansion1}
        >
          {expanded ? "-" : "+"}
        </p>
      </section>
      <section className=" bg-whitesmoke border border-solid border-stroke-green-color rounded-3xl  flex items-center justify-between h-24 px-5">
        <p className=" leading-7 text-9xl font-semibold">
          Are the courses suitable for beginners?
        </p>
        <p
          className=" text-13xl leading-[133%] font-sans"
          onClick={toggleExpansion2}
        >
          {expanded ? "-" : "+"}
        </p>
      </section>
      <section className="bg-whitesmoke border border-solid border-stroke-green-color rounded-3xl  flex items-center justify-between h-24 px-5">
        <p className=" text-9xl  leading-7 font-semibold">
          Can I access the course materias at any time?
        </p>
        <p
          className=" text-13xl leading-7 font-sans"
          onClick={toggleExpansion3}
        >
          {expanded ? "-" : "+"}
        </p>
      </section>
    
    
      </section>
{/* Dropdown ends */}

{/* img */}
<img
        className="ml-36 object-cover "
        alt=""
        src="/rectangle-344@2x.png"
        width={645}
        height={653}
      />
{/* img */}
</section>
      
      {/* faq */}

      {/* why stayfit learning */}
      {/* Footer */}

      {/* <Footer /> */}
      {/* Footer */}
    </div>
  );
};

export default COURCES;
