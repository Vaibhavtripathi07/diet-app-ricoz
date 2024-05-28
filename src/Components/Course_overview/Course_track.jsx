import { useCallback } from "react";
import Nav from "../Top_Nav/Nav"
import { Line } from "rc-progress";
import ratings_full from "../../asset/ratings_full.png";
import Course_Track from "../../asset/Course_Track.png";
import { Link } from "react-router-dom";

const Course_track = () => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "Appointment" to the project
  }, []);

  const onGroupContainer2Click = useCallback(() => {
    // Please sync "LANDING" to the project
  }, []);

  return (
    <div className=" bg-whitesmoke max-w-[1512px] min-h-[982px] overflow-hidden text-left text-5xl text-gray font-sans ">
        {/* nav */}
        <Nav/>
      {/* nav */}

     <h1 className="text-29xl font-sans text-center tracking-[0.53em] my-36 text-strokegreen-color leading-[133%] font-semibold">
        My Course
      </h1>
      {/* <section
        className="cursor-pointer"
        onClick={onGroupContainerClick}
      >
        <section className="  top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-whitesmoke shadow-[-6px_6px_25px_rgba(0,_0,_0,_0.2)] box-border border-[1px] border-solid border-base-red-color" />
      </section> */}
      {/* <p
        className=" top-[644px] left-[421px] leading-[156.23%] font-bold font-sans"
        id="progress"
      >
        Progress:
      </p>
      <p
        className=" top-[681px] left-[544px] text-[16px] leading-[156.23%] font-sans text-grey-color"
        id="percentage"
      >
        8% of 100%
      </p>
        <Line percent={8} strokeWidth={4} strokeColor="#88A0FB" trailColor="#D7DDF4" trailWidth={4} className="absolute top-[0px] left-[0px] box-border w-[42px] h-4 border-[1px] border-solid border-grey-color" />

       
     
      <img
        className=" top-[499px] left-[calc(50%_-_603px)] rounded-[84px] w-[220px] h-[220px] object-cover"
        alt=""
        src="/rectangle-362@2x.png"
      />
    
      <p className=" left-[421px] text-[32px] leading-[156.23%] font-semibold">
        Nutrition Fundamentals
      </p>
      <img
        className="absolute top-[595.25px] left-[420.8px] w-[132.4px] h-[24.75px] object-cover"
        id="star"
        alt=""
        src="/group-662@2x.png"
      />
      <div className="absolute top-[504px] left-[1095px] rounded-2xl [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))] box-border w-[293px] overflow-hidden flex flex-row items-center justify-center py-7 px-[73px] text-dark-green-color border-[1px] border-solid border-palegoldenrod">
        <div className="absolute leading-[120%] font-semibold">
          Continue Learning
        </div>
      </div> */}
<section className="mx-24 border border-black py-28">
<section className="  mx-auto justify-around shadow-xl border rounded-lg flex gap-[46px]  items-center border-red-600">
  <section className="flex items-center gap-">
  <img src={Course_Track} alt="" width={220} height={220} />

  <section>
  <p className="w-[455px] text-black text-4xl  font-extrabold font-sans leading-[56.24px]">
          Nutritional Fundamentals
        </p>
        <img src={ratings_full} alt="" />
        <section className="flex items-center">
        <p>Progress:</p>
        <section>
        <Line percent={8} strokeWidth={4} strokeColor="#88A0FB" trailColor="#D7DDF4" trailWidth={4} className="  border mt-1 h-4  border-solid border-grey-color" />
        <p className="text-sm ">8% of 100%</p>
        </section>
        </section>
  </section>
  </section>
  <Link to="/"><button className='text-dark-green-color mt-10 text-5xl  px-16 py-7 font-sans rounded-2xl border border-solid border-[#CFF7AA] [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))]'>Enroll now</button></Link> 
</section>
</section>
    </div>
  );
};

export default Course_track;
