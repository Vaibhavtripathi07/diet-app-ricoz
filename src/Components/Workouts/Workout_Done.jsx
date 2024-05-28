import Full_body from "../../asset/Full_body.png";
import time from "../../asset/time.png";
import Search from "../../asset/Search.png";
import Workout_done from "../../asset/Workout_done.png";
import progress from "../../asset/progress.png";
import Nav from "../Top_Nav/Nav"
import Footer from "../Footer/Footer"

const Workout_Done = () => {
  return (
    <div className="relative font-sans  bg-white w-full h-[2002px] overflow-hidden text-left text-xl text-gray ">
      {/* nav */}
      <Nav/>
      {/* nav */}
      
      <div
        className="absolute top-[592px] left-[156px] w-[1284px] h-[411px] text-[32px]"
        id="Home_workout"
      >
        <div className="absolute top-[0px] left-[0px] w-[1284px] h-[411px]">
          <img
            className="absolute top-[-25px] left-[369px] rounded-[30px] w-[948px] h-[469px] object-cover"
            alt="full_body_workout"
            src={Full_body}
          />
          <h3
            className="m-0 absolute top-[0px] left-[0px] text-inherit leading-[160%] font-semibold font-inherit inline-block w-72 h-[52px]"
            id="full_body_workout"
          >
            Full Body workout
          </h3>
          <div className="absolute top-[158px] left-[0px] w-[250px] h-[52px] text-xl">
            <div
              className="absolute top-[0px] left-[0px] rounded-lg bg-snow shadow-[2px_2px_9px_rgba(0,_0,_0,_0.25)] w-[250px] h-[52px]"
              id="time_box"
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
      <div className="absolute top-[392px] left-[calc(50%_-_488px)] w-[976px] h-[78px]">
        <input
          className="bg-whitesmoke rounded-xl absolute top-[-1px] left-[calc(50%_-_489px)] rounded-3xs box-border w-[978px] h-20 border-[1px] border-solid border-stroke-green-color placeholder:italic placeholder:pl-[100px] text-lg "
          placeholder="Search workouts"
          type="text"
        />
        <div className="absolute top-[-1px] left-[-1px] rounded-3xs bg-whitesmoke box-border w-[88px] h-20 border-[1px] border-solid border-stroke-green-color" />
        <img
          className="absolute h-[42.07%] w-[3.38%] top-[25.89%]  right-[93.9%] bottom-[32.04%] left-[2.72%] max-w-full overflow-hidden max-h-full object-cover"
          alt="search"
          src={Search}
        />
      </div>
      <h1
        className="m-0 absolute top-[208px] left-[calc(50%_-_207px)] text-[48px] tracking-[0.53em] leading-[133%] font-semibold font-inherit text-stroke-green-color inline-block w-[414.13px]"
        id="workouts"
      >
        Workouts
      </h1>
      <div className="absolute top-[680px] left-[156px] w-[250px] h-[52px] text-black">
        <div
          className="absolute top-[0px] left-[0px] rounded-lg bg-snow shadow-[2px_2px_9px_rgba(0,_0,_0,_0.25)] w-[250px] h-[52px]"
          id="exercise_box"
        />
        <p
          className="m-0 absolute top-[9px] left-[8px] leading-[160%]"
          id="18_Exercise"
        >
          <span>{`18   `}</span>
          <span className="font-semibold">Exercises</span>
        </p>
      </div>
      <div className="absolute top-[820px] left-[calc(50%_-_600px)] w-[251px] h-[31px] text-darkslategray">
        <p
          className="m-0 absolute top-[0px] left-[calc(50%_-_125.5px)] leading-[156.23%] font-semibold"
          id="progress"
        >
          Progress
        </p>
        <img
          className="absolute top-[8px] left-[93px] w-[158px] h-4 object-cover"
          alt="progress_complete"
          src={progress}
        />
      </div>
      <img
        className="absolute top-[1123px] left-[calc(50%_-_320px)] rounded-[20px] w-[640px] h-[566px] object-cover"
        alt="workout_completed"
        src={Workout_done}
      />
      <div className="absolute top-[1809px] left-[calc(50%_-_93px)] rounded-2xl [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))] overflow-hidden flex flex-row items-center justify-center py-7 px-[73px] border-[1px] border-solid border-palegoldenrod">
        <button
          className="cursor-pointer outline-none [border:none] p-0 bg-[transparent] relative text-5xl leading-[120%] font-semibold font-open-sans text-dark-green-color text-left inline-block"
          // autoFocus={true}
        >
          Do it Again
        </button>
      </div>
      {/* Footer */}
      <Footer/>
      {/* Footer */}
    </div>
  );
};

export default Workout_Done;
