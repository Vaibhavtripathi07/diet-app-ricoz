import Full_body from "../../asset/Full_body.png";
import Search from "../../asset/Search.png";
import { Line} from 'rc-progress';
import time from "../../asset/time.png";
import high_stepping from "../../asset/high_stepping.gif";
import jumping_jacks from "../../asset/jumping_jacks.gif";
import jump_squats from "../../asset/jump_squats.gif";
import { Link } from "react-router-dom"
import progress_bar from "../../asset/progress_bar.png";
// import Nav from "../Top_Nav/Nav";

const Home_workout = () => {
  return (
    <div className="relative bg-white w-full h-[2949px] overflow-hidden text-left text-17xl text-black font-sans">
      {/* Nav */}
      
      {/* Nav */}
      <div className="absolute top-[392px] left-[calc(50%_-_488px)] w-[976px] h-[78px]">
        <input
          className="bg-whitesmoke absolute placeholder:pl-[100px] top-[-1px] left-[calc(50%_-_489px)] rounded-3xs box-border w-[978px] h-20 border-[1px] border-solid border-stroke-green-color"
          placeholder="Search workouts"
          type="text"
        />
        <div className="absolute top-[-1px] left-[-1px] rounded-3xs bg-whitesmoke box-border w-[88px] h-20 border-[1px] border-solid border-stroke-green-color" />
        <img
          className="absolute h-[42.07%] w-[3.38%] top-[25.89%] right-[93.9%] bottom-[32.04%] left-[2.72%] max-w-full overflow-hidden max-h-full object-cover"
          alt="Search"
          src={Search}
        />
      </div>
      <h1
        className="m-0 absolute top-[208px] left-[calc(50%_-_207px)] text-[48px] tracking-[0.53em] leading-[133%] font-semibold font-inherit text-stroke-green-color inline-block w-[414.13px]"
        id="workouts"
      >
        Workouts
      </h1>
      <div className="absolute top-[592px] left-[114px] w-[1284px] h-[411px] text-[32px] text-gray">
        <div className="absolute top-[0px] left-[0px] w-[1284px] h-[411px]">
          <img
            className="absolute top-[-25px] left-[369px] rounded-[30px] w-[948px] h-[469px] object-cover"
            alt=""
            src={Full_body}
          />
          <h3
            className="m-0 absolute top-[0px] left-[0px] text-inherit leading-[160%] font-semibold font-inherit inline-block w-72 h-[52px]"
            id="Full_body_workout"
          >
            Full Body workout
          </h3>
          <div className="absolute top-[158px] left-[0px] w-[250px] h-[52px] text-xl">
            <div
              className="absolute top-[0px] left-[0px] rounded-lg bg-snow shadow-[2px_2px_9px_rgba(0,_0,_0,_0.25)] w-[250px] h-[52px]"
              id="workout_timer"
            />
            <div className="absolute top-[10px] left-[8px] w-[131px] h-8">
              <p
                className="m-0 absolute top-[0px] left-[43.72px] leading-[156.23%] inline-block w-[87.28px] h-8"
                id="workout_time"
              >
                30 mins
              </p>
              <img
                className="absolute h-[75.72%] w-[19.46%] top-[13.91%] right-[81.54%] bottom-[10.37%] left-[-1%] max-w-full overflow-hidden max-h-full object-cover"
                alt="time"
                src={time}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[680px] left-[156px] w-[250px] h-[52px] text-xl">
        <div
          className="absolute top-[0px] left-[0px] rounded-lg bg-snow shadow-[2px_2px_9px_rgba(0,_0,_0,_0.25)] w-[250px] h-[52px]"
          id="Exercise_box"
        />
        <p
          className="m-0 absolute top-[9px] left-[8px] leading-[160%]"
          id="Exercise"
        >
          <span>{`18   `}</span>
          <span className="font-semibold">Exercises</span>
        </p>
      </div>
      <h3
        className="m-0 absolute top-[1201px] left-[calc(50%_-_121px)] text-inherit leading-[160%] font-semibold font-inherit"
        id="High_stepping"
      >
        High Stepping
      </h3>
      {/* high stepping */}
      <p
        className="m-0 absolute top-[1201px] left-[calc(50%_+_589px)] leading-[160%]"
        id="timer"
      >
        1 min
      </p>
      {/* high stepping */}
      <h3
        className="m-0 absolute top-[1756px] left-[calc(50%_-_120px)] text-inherit leading-[160%] font-semibold font-inherit"
        id="jumping_jacks"
      >
        Jumping Jacks
      </h3>
      {/* jumping jacks */}
      <p
        className="m-0 absolute top-[1756px] left-[calc(50%_+_589px)] leading-[160%]"
        id="timer"
      >
        1 min
      </p>
      {/* jumping jacks */}
      <h3
        className="m-0 absolute top-[2311px] left-[calc(50%_-_109px)] text-inherit leading-[160%] font-semibold font-inherit"
        id="jump_squats"
      >
        Jump Squats
      </h3>
      {/* jump squats */}
      <p
        className="m-0 absolute top-[2311px] left-[calc(50%_+_589px)] leading-[160%]"
        id="timer"
      >
        1 min
      </p>
      {/* jump squats */}
      <div className="absolute top-[820px] left-[calc(50%_-_600px)] w-[250px] h-[31px] text-xl text-darkslategray">
        <p
          className="m-0 absolute top-[0px] left-[calc(50%_-_125px)] leading-[156.23%] font-semibold"
          id="progress"
        >
          Progress
        </p>
        {/* <img
          className="absolute top-[8px] left-[93px] w-[157px] h-4 object-cover"
          alt="progress_bar"
          src={progress_bar}
        /> */}

<Line percent={10} strokeWidth={7} strokeColor="#F9AEAE" trailColor="#FFEBEB" trailWidth={8} className="absolute top-[10px] w-[157px] h-[16px] left-[93px]" />
      </div>
      <img
        className="absolute top-[1291px] left-[calc(50%_-_229px)] w-[460px] h-[304px] object-cover"
        alt="high_stepping"
        src={high_stepping}
      />
      <img
        className="absolute top-[1814px] left-[calc(50%_-_132px)] w-[280px] h-[348px] object-cover"
        alt="jumping_jacks"
        src={jumping_jacks}
      />
      <img
        className="absolute top-[2379px] left-[calc(50%_-_137px)] w-[274px] h-[326px] object-cover"
        alt="jumping_squats"
        src={jump_squats}
      />
      {/* <img
        className="absolute top-[1674.5px] left-[calc(50%_-_692px)] w-[1384px] h-px"
        alt=""
        src="/vector-189.svg"
      />
      <img
        className="absolute top-[2229.5px] left-[calc(50%_-_692px)] w-[1384px] h-px"
        alt=""
        src="/vector-190.svg"
      /> */}
      <div
        className="cursor-pointer   bg-[transparent] absolute top-[917px] left-[156px] rounded-2xl [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))] overflow-hidden flex flex-row items-center justify-center "
        id="start"
      >
       <Link to="/WorkoutFullbody"> <button className="py-7 px-[73px] text-5xl leading-[120%] font-semibold font-sans text-dark-green-color text-left">
          Start
        </button></Link>
      </div>
    </div>
  );
};

export default Home_workout;
