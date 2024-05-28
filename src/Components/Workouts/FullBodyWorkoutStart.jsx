// import { useCallback } from "react";
import Full_body from "../../asset/Full_body.png"

// import progress_bar from "../../asset/progress_bar.png"
import { Line , Circle} from 'rc-progress';
import time from "../../asset/time.png"
// import timer_display from "../../asset/timer_display.png"
import pause from "../../asset/pause.png"
import Next_arrow from "../../asset/Next_arrow.png"
import jumping_jacks from "../../asset/jumping_jacks.gif";
import Nav from "../../Components/Top_Nav/Nav"
import { Link } from "react-router-dom";


const Workout_fullbody = () => {
//   const onGroupContainer4Click = useCallback(() => {
//     // Please sync "LANDING" to the project
//   }, []);

//   const onGroupSectionClick = useCallback(() => {
//     // Please sync "WORKOUT full body START" to the project
//   }, []);

//   const onGroupIcon1Click = useCallback(() => {
//     // Please sync "WORKOUT full body paused" to the project
//   }, []);

  return (
    <div className="relative bg-whitesmoke w-[1512px] h-[1889px] overflow-hidden text-left text-17xl text-black font-sans xl:w-full">
      <div
        className="absolute top-[392px] left-[156px] w-[1284px] h-[411px] text-xl"
        id="Home_workout"
      >
        <section
          className="absolute top-[0px] left-[0px] w-[1284px] h-[411px] text-left text-[32px] text-gray font-sans"
          id="Full_body_workout_section"
        >
          <img
            className="absolute top-[-25px] left-[369px] rounded-[30px] w-[948px] h-[469px] object-cover"
            alt="Full_body"
            id="pushup_img"
            src={Full_body}
            />
          <p
            className="m-0 absolute top-[0px] left-[0px] leading-[160%] font-semibold font-sans text-black inline-block w-72 h-[52px]"
            id="full_body_workout"
          >
            Full Body workout
          </p>
          <div className="absolute top-[158px] left-[0px] w-[250px] h-[52px] text-xl">
            <div className="absolute top-[0px] left-[0px] rounded-lg bg-snow shadow-[2px_2px_9px_rgba(0,_0,_0,_0.25)] w-[250px] h-[52px]" />
            <div className="absolute top-[10px] left-[8px] w-[131px] h-8">
              <p
                className="m-0 absolute top-[0px] left-[43.72px] leading-[156.23%] inline-block w-[87.28px] h-8"
                id="exercise_duration"
              >
                30 mins
              </p>
              <img
                className="absolute h-[75.71%] w-[19.46%] top-[13.91%] right-[81.54%] bottom-[10.38%] left-[-1%] max-w-full overflow-hidden max-h-full object-cover"
                alt="time_period"
                src={time}
              />
            </div>
          </div>
        </section>
        <div className="absolute top-[88px] left-[0px] w-[250px] h-[52px]">
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-snow shadow-[2px_2px_9px_rgba(0,_0,_0,_0.25)] w-[250px] h-[52px]" />
          <p
            className="m-0 absolute top-[9px] left-[8px] leading-[160%]"
            id="18 exercise"
          >
            <span className="font-semibold">{`18   `}</span>
            <span className="font-semibold">Exercises</span>
          </p>
        </div>
        <div className="absolute top-[228px] left-[calc(50%_-_642px)] w-[250px] h-[31px] text-darkslategray">
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
            <Line percent={30} strokeWidth={7} strokeColor="#F9AEAE" trailColor="#FFEBEB" trailWidth={8} className="absolute top-[8px] left-[93px]" />
        </div>
      </div>
      <h1
        className="m-0 absolute top-[208px] left-[calc(50%_-_207px)] text-[48px] tracking-[0.53em] leading-[133%] font-semibold font-inherit text-stroke-green-color inline-block w-[414.13px]"
        id="Workouts"
      >
        Workouts
      </h1>
      <header
        className="absolute top-[0px] left-[0px] shadow-[0px_2px_8px_rgba(0,_0,_0,_0.07)] w-[1512px] h-32 text-left text-5xl text-dark-green-color font-sans"
        id="top_nav"
      >
      <Nav/>
      </header>
      <h3
        className="m-0 absolute top-[923px] left-[calc(50%_-_121px)] text-inherit leading-[160%] font-semibold font-inherit"
        id="highstepping"
      >
        High Stepping
      </h3>
      <p
        className="m-0 absolute top-[923px] left-[calc(50%_+_589px)] leading-[160%]"
        id="time_duration_1_min"
      >
        1 min
      </p>
      <img
        className="absolute top-[1075px] left-[calc(50%_-_230px)] w-[460px] h-[415px]"
        alt="exercise_high_stepping"
        src={jumping_jacks}
      />
      <p
        className="m-0 absolute top-[1794px] left-[calc(50%_-_73px)] leading-[156.23%] text-darkslategray"
        id="total_time_duration"
      >
        1:00 min
      </p>
      {/* circle progress */}
      <Circle percent={0} strokeWidth={9} strokeColor="#F9AEAE" trailColor="#FFEBEB" trailWidth={8} className="absolute top-[1567px]  left-[calc(50%_-_107px)]  w-[200px] h-[200px]"/ >
        <p className=" text-17xl text-black font-semibold leading-[156.227%] mt-[1641px] ml-[704px]">Start</p>
      
      {/* circle progress */}
      <section
        className="absolute top-[1794px] left-[calc(50%_+_542px)] w-[142px] h-14 cursor-pointer text-left text-17xl text-darkslategray font-sans"
        id="next_exercise_section"
        // onClick={onGroupSectionClick}
      >
        <p
          className="m-0 absolute top-[0px] left-[calc(50%_-_71px)] leading-[156.23%] cursor-pointer"
          id="Next_exercise"
        >
          Next
        </p>
        <Link to="/Workout_Fullbody2">
        <img
          className="absolute top-[12.5px] left-[116.5px] w-[27px] h-[31px] "
          alt="next_exercise_arrow"
          src={Next_arrow}
        /></Link>
      </section>
     
      {/* <img
        className="absolute top-[1629.5px] left-[737.5px] w-[37px] h-[49px] object-cover cursor-pointer"
        alt="pause_icon"
        src={pause}
        // onClick={onGroupIcon1Click}
      />
      <p
        className="m-0 absolute top-[1584px] left-[725px] text-5xl leading-[156.23%] font-semibold text-darkslategray"
        id="timer_start"
      >
        00:15
      </p>
      <p
        className="m-0 absolute top-[1687px] left-[722px] text-5xl leading-[156.23%] text-darkslategray"
        id="pause"
      >
        Pause
      </p>
      <img
        className="absolute top-[1547px] left-[calc(50%_-_107px)] w-[214px] h-[214px] object-cover"
        alt="timer_display"
        src={timer_display}
      /> */}



    </div>
  );
};

export default Workout_fullbody;
