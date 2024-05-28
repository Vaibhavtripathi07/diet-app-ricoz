import { useCallback } from "react";
import Search from "../../asset/search.png"
import Mountain_climber from "../../asset/Montain_climber.png"
import Full_body from "../../asset/Full_body.png"
import Abs_workout from "../../asset/Abs_workout.png"
import arms_workout from "../../asset/arms_workout.png"
import Rectangle from "../../asset/Rectangle.png"
import Begginer_yoga from "../../asset/Begginer_yoga.png"
import yoga_2 from "../../asset/yoga_2.png"
import yoga_3 from "../../asset/yoga_3.png"
import yoga_b from "../../asset/yoga_b.png"
import legs_workout from "../../asset/legs_workout.png"
import time from "../../asset/time.png"
import Nav from "../Top_Nav/Nav";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
const Workoutss = () => {
  const onFullBodyWrkoutClick = useCallback(() => {
    // Please sync "WORKOut full body overview" to the project
  }, []);

  return (
    <div
      className="relative bg-whitesmoke w-full h-[4101px] overflow-hidden text-left text-21xl text-darkslategray font-sans"
      id="Workoutss">
    
      {/* nav */}
      <Nav />
      {/* nav */}
      <div className="absolute top-[208px] left-[calc(50%_-_756px)] w-[1512px] h-[796px] text-[22px] text-white">
        <div className="absolute top-[114px] left-[calc(50%_-_656px)] w-[1332px] h-[546px] font-sans">
          <img
            className="absolute top-[-44px] left-[calc(50%_-_718px)] rounded-3xs w-[1144px] h-[626px] object-cover"
            alt="Mountain_climber"
            src={Mountain_climber}
          />
          <div className="absolute top-[24px] left-[716px] w-[616px] h-[86px]">
            <img
              className="absolute top-[-11px] left-[337px] w-[298px] h-[116px]"
              alt="light_yellow_rect"
              src={Rectangle}
            />
            <img
              className="absolute top-[-11px] left-[-15px] w-[378px] h-[116px] object-cover"
              alt="light_outer_rect"
              src={Rectangle}
            />
            <p
              className="m-0 absolute top-[26px] left-[calc(50%_-_282px)] tracking-[0.1em] leading-[140%] font-bold inline-block w-[564px] h-[34px]"
              id="tagline"
            >
              <span>Unite Body and Mind for</span>
              <span className="text-gray"> Optimal Wellness.</span>
            </p>
          </div>
        </div>
        <h1
          className="m-0 absolute top-[0px] left-[calc(50%_-_188.1px)] text-[48px] tracking-[0.53em] leading-[133%] font-semibold font-inherit text-stroke-green-color inline-block w-[414.13px]"
          id="Workout"
        >
          Workouts
        </h1>
        <img
          className="absolute top-[287px] left-[1051px] rounded-3xs w-[389px] h-[503px] object-cover"
          alt="yoga"
          src={yoga_b}
        />
        <img
          className="absolute top-[169px] left-[0px] rounded-xl w-[262px] h-[161px] object-cover"
          alt="light_yellow_rect"
          src={Rectangle}
        />
        <img
          className="absolute top-[64px] left-[43px] rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-none w-[289px] h-[165px] object-cover"
          alt="yellow_rect"
          src={Rectangle}
        />
        <img
          className="absolute top-[657px] left-[1249px] rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl w-[263px] h-[139px] object-cover"
          alt="yellow_rect"
          src={Rectangle}
        />
        <img
          className="absolute top-[607px] left-[1344px] w-[168px] h-[100px]"
          alt="right_up_rect"
          src={Rectangle}
        />
        <p
          className="m-0 absolute top-[690px] left-[100px] text-[24px] leading-[140.23%] text-grey-color inline-block w-[815px]"
          id="about_workout"
        >
          Your one-stop destination for achieving your fitness goals. Whether
          you&aposre a seasoned fitness enthusiast or just starting your fitness
          journey, we have everything you need to take your workouts to the next
          level.
        </p>
      </div>
      <div className="absolute top-[1149px] left-[calc(50%_-_488px)] w-[976px] h-[78px]">
        <input
          className="bg-whitesmoke absolute top-[-1px] left-[calc(50%_-_489px)] rounded-3xs box-border w-[978px] h-20 border-[1px] border-solid border-stroke-green-color placeholder:text-lg placeholder:pl-[100px] placeholder:font-italics"
          placeholder="Search workouts"
          type="text"
        />
        <div className="absolute top-[-1px] left-[-1px] rounded-3xs bg-whitesmoke box-border w-[88px] h-20 border-[1px] border-solid border-stroke-green-color" />
        <img
          className="absolute h-[42.07%] w-[3.38%] top-[25.89%] right-[93.9%] bottom-[32.04%] left-[2.72%] max-w-full overflow-hidden max-h-full"
          alt="search"
          src={Search}
        />
      </div>
      <div className="absolute top-[1347px] left-[64px] w-[1384px] h-[982px] text-white">
        <h1
          className="m-0 absolute text-black top-[0px] left-[calc(50%_-_182px)] text-[46px] leading-[156.23%] font-semibold font-inherit "
          id="Home_workout"
        >
          Home-Workouts
        </h1>
        <div className="absolute top-[172px] left-[0px] w-[642px] h-[370px]">
          <img
            className="absolute top-[-3.27px] left-[-3.27px] rounded-11xl w-[648.53px] h-[376.53px] object-cover"
            alt="abs_workout"
            src={Abs_workout}
          />
          <p
            className="m-0 absolute top-[18.6px] left-[18.64px] leading-[120%] font-semibold"
            id="abs_workout"
          >
            <span className="block">
              <span className="text-[40px]">Abs</span>
            </span>
            <span className="block text-17xl">
              <span>workout</span>
            </span>
          </p>
          <div className="absolute top-[319px] left-[18px] w-[132.51px] h-[32.84px] text-[20.97px] font-montserrat">
            <p
              className="m-0 absolute top-[0px] left-[44.23px] leading-[156.23%] font-medium inline-block w-[88.28px] h-[32.84px]"
              id="workout_time"
            >
              30 mins
            </p>
            <img
              className="absolute h-[75.51%] w-[19.44%] top-[14.01%] right-[81.55%] bottom-[10.48%] left-[-0.99%] max-w-full overflow-hidden max-h-full"
              alt="time"
              src={time}
            />
          </div>
        </div>
        <div className="absolute top-[612px] left-[0px] w-[642px] h-[370px] text-darkslategray">
          <img
            className="absolute top-[-3.27px] left-[-3.27px] rounded-11xl w-[648.53px] h-[376.53px] object-cover"
            alt="Toned_arms_workout"
            src={arms_workout}
          />
          <p
            className="m-0 absolute top-[19px] left-[19px] leading-[120%] font-semibold"
            id="Toned_arms"
          >
            <span className="block text-18xl">
              <span className=" text-[40px]">Toned Arms</span>
            </span>
            <span className="block text-17xl">
              <span>workout</span>
            </span>
          </p>
          <div className="absolute top-[319px] left-[18px] w-[132.51px] h-[32.84px] text-[20.97px] font-montserrat">
            <p
              className="m-0 absolute top-[0px] left-[44.23px] leading-[156.23%] font-medium inline-block w-[88.28px] h-[32.84px]"
              id="workout_time"
            >
              30 mins
            </p>
            <img
              className="absolute h-[75.51%] w-[19.44%] top-[14.01%] right-[81.55%] bottom-[10.48%] left-[-0.99%] max-w-full overflow-hidden max-h-full"
              alt=""
              src={time}
            />
          </div>
        </div>
        <div
          className="absolute top-[612px] left-[742px] w-[642px] h-[370px] cursor-pointer"
          onClick={onFullBodyWrkoutClick}
        >
        <Link to="/FullBody">
          <img
            className="absolute top-[-3.27px] left-[-3.27px] rounded-11xl w-[648.53px] h-[376.53px] object-cover"
            alt="Full_body_workout"
            src={Full_body}
          />
          <p
            className="m-0 absolute top-[18px] left-[18px] leading-[120.23%] font-semibold"
            id="full_body"
          >
            <span className="block text-18xl">
              <span className=" text-[40px]">Full Body</span>
            </span>
            <span className="block text-17xl">
              <span>workout</span>
            </span>
          </p>
          </Link>
          <div className="absolute top-[319px] left-[18px] w-[132.51px] h-[32.84px] text-[20.97px] font-montserrat">
            <p
              className="m-0 absolute top-[0px] left-[44.23px] leading-[156.23%] font-medium inline-block w-[88.28px] h-[32.84px]"
              id="workout_time"
            >
              30 mins
            </p>
            <img
              className="absolute h-[75.51%] w-[19.44%] top-[14.01%] right-[81.55%] bottom-[10.48%] left-[-0.99%] max-w-full overflow-hidden max-h-full"
              alt=""
              src={time}
            />
          </div>
        </div>
        <div className="absolute top-[172px] left-[742px] w-[642px] h-[370px] text-darkslategray">
          <img
            className="absolute top-[-3.27px] left-[-3.27px] rounded-11xl w-[648.53px] h-[376.53px] object-cover"
            alt="leg_workout"
            src={legs_workout}
          />
          <p
            className="m-0 absolute top-[18px] left-[18px] leading-[120%] font-semibold"
            id="legs_workout"
          >
            <span className="block text-18xl">
              <span className=" text-[40px]">Legs</span>
            </span>
            <span className="block text-17xl">
              <span>workout</span>
            </span>
          </p>
          <div className="absolute top-[319px] left-[18px] w-[132.51px] h-[32.84px] text-[20.97px] font-montserrat">
            <p
              className="m-0 absolute top-[0px] left-[44.23px] leading-[156.23%] font-medium inline-block w-[88.28px] h-[32.84px]"
              id="workout_time"
            >
              30 mins
            </p>
            <img
              className="absolute h-[75.51%] w-[19.44%] top-[14.01%] right-[81.55%] bottom-[10.48%] left-[-0.99%] max-w-full overflow-hidden max-h-full"
              alt=""
              src={time}
            />
          </div>
        </div>
        
      </div>
      <p
        className="m-0 absolute top-[2551px] left-[calc(50%_-_146px)] text-black text-[46px] leading-[156.23%] font-semibold font-inherit "
        id="MINDFUL_YOGA"
      >
        Mindful Yoga
      </p>
      <div
        className="absolute top-[2723px] left-[60px] shadow-[4px_4px_15px_rgba(0,_0,_0,_0.1)] w-[444px] h-[718px]"
        id="card_1"
      >
        <img
          className="absolute top-[0px] left-[0px] rounded-t-3xs rounded-b-none w-[444px] h-[546px] object-cover"
          alt="YOGA_1"
          src={yoga_2}
        />
        {/* <img
          className="absolute top-[546px] left-[0px] w-[444px] h-[172px]"
          alt=""
          src="/rectangle-460.svg"
        /> */}
        <p
          className="m-0 absolute top-[558px] left-[12px] leading-[156.23%] font-semibold"
          id="advance_yoga"
        >
          Advance Yoga
        </p>
        <div className="absolute top-[652px] left-[12px] w-[133px] h-8 text-[20.97px] font-montserrat">
          <p
            className="m-0 absolute top-[0px] left-[44.39px] leading-[156.23%] font-medium inline-block w-[88.61px] h-8"
            id="workout_time"
          >
            30 mins
          </p>
          <img
            className="absolute h-[75.72%] w-[19.43%] top-[13.91%] right-[81.56%] bottom-[10.37%] left-[-0.99%] max-w-full overflow-hidden max-h-full"
            alt=""
            src={time}
          />
        </div>
      </div>
      <div
        className="absolute top-[2723px] left-[534px] shadow-[4px_4px_15px_rgba(0,_0,_0,_0.1)] w-[444px] h-[718px]"
        id="card_2"
      >
        <img
          className="absolute top-[0px] left-[0px] rounded-t-3xs rounded-b-none w-[444px] h-[546px] object-cover"
          alt="yoga_2"
          src={yoga_3}
        />
        {/* <img
          className="absolute top-[546px] left-[0px] w-[444px] h-[172px]"
          alt=""
          src={yoga_2}
        /> */}
        <p
          className="m-0 absolute top-[558px] left-[12px] leading-[156.23%] font-semibold"
          id="meditation"
        >
          Meditation
        </p>
        <div className="absolute top-[652px] left-[12px] w-[133px] h-8 text-[20.97px] font-montserrat">
          <p
            className="m-0 absolute top-[0px] left-[44.39px] leading-[156.23%] font-medium inline-block w-[88.61px] h-8"
            id="workout_time"
          >
            30 mins
          </p>
          <img
            className="absolute h-[75.72%] w-[19.43%] top-[13.91%] right-[81.56%] bottom-[10.37%] left-[-0.99%] max-w-full overflow-hidden max-h-full"
            alt=""
            src={time}
          />
        </div>
      </div>
      <div
        className="absolute top-[2723px] left-[1008px] shadow-[4px_4px_15px_rgba(0,_0,_0,_0.1)] w-[444px] h-[718px]"
        id="card_3"
      >
        <img
          className="absolute top-[0px] left-[0px] rounded-t-3xs rounded-b-none w-[444px] h-[546px] object-cover"
          alt="yoga_3"
          src={Begginer_yoga}
        />
        {/* <img
          className="absolute top-[546px] left-[0px] w-[444px] h-[172px]"
          alt=""
          src={Begginer_yoga}
        /> */}
        <p
          className="m-0 absolute top-[558px] left-[12px] leading-[156.23%] font-semibold"
          id="Begginer_yoga"
        >
          Beginner Yoga
        </p>
        <div className="absolute top-[652px] left-[12px] w-[133px] h-8 text-[20.97px] font-montserrat">
          <p
            className="m-0 absolute top-[0px] left-[44.39px] leading-[156.23%] font-medium inline-block w-[88.61px] h-8"
            id="workout_time"
          >
            30 mins
          </p>
          <img
            className="absolute h-[75.72%] w-[19.43%] top-[13.91%] right-[81.56%] bottom-[10.37%] left-[-0.99%] max-w-full overflow-hidden max-h-full"
            alt=""
            src={time}
          />
        <Footer/>
        </div>
      </div>
    </div>
  );
};

export default Workoutss;
