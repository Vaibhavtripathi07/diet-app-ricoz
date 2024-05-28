// import { useCallback } from "react";
import Nav from "../Components/Top_Nav/Nav";
import Accordian_arrow from "../asset/Accordian_arrow.png";
import full_screen from "../asset/full_screen.png";
import yt_setting from "../asset/yt_setting.png";
import yt_caption from "../asset/yt_caption.png";
import yt_progress_bar from "../asset/yt_progress_bar.png";
import left_hide from "../asset/left_hide.png";
import yt_course from "../asset/yt_course.png";
import yt_play from "../asset/yt_play.png";
import yt_bg from "../asset/yt_bg.png";

const Course_overview = () => {
  // const onGroupContainerClick = useCallback(() => {
  //   // Please sync "LANDING" to the project
  // }, []);

  // const onVectorIcon2Click = useCallback(() => {
  //   // Please sync "Courses" to the project
  // }, []);

  // const onGroupIcon1Click = useCallback(() => {
  //   // Please sync "Courses" to the project
  // }, []);

  return (
    <div
      className="relative bg-whitesmoke-100 w-full h-[1767px] overflow-hidden text-left text-5xl text-gray font-sans"
      id="Course"
    >
      <section
        className="absolute top-[563px] left-[41px] rounded-lg bg-whitesmoke-200 box-border w-[393px] h-[62px] border-[1px] border-solid border-whitesmoke-300"
        id="accordion"
      />
      <header
        className="absolute top-[0px] left-[0px] shadow-[0px_2px_8px_rgba(0,_0,_0,_0.07)] w-[1512px] h-32 text-left text-5xl text-dark-green-color font-open-sans"
        id="top_nav"
      >
        <Nav />
      </header>
      <h1
        className="m-0 absolute top-[208px] left-[calc(50%_-_396px)] text-[48px] tracking-[0.53em] leading-[133%] text-stroke-green-color font-inherit"
        id="stayfit_learning"
      >
        <span className="font-semibold italic">StayFIT</span>
        <span className="font-semibold"> Learning</span>
      </h1>
      <p
        className="m-0 absolute top-[392px] left-[calc(50%_-_289px)] text-[46px] leading-[156.23%] font-bold font-sans text-black text-center"
        id="Introduction_to_nutrition"
      >
        Introduction to Nutrition
      </p>
      <div className="absolute top-[575px] left-[66px] w-[349px] h-[37px]">
        <img
          className="absolute top-[13.5px] left-[329.5px] w-[21px] h-[11px] object-cover cursor-pointer"
          alt="lower_yt_arrow"
          src={Accordian_arrow}
          // onClick={onVectorIcon2Click}
        />
        <p
          className="m-0 absolute top-[0px] left-[calc(50%_-_174.5px)] leading-[156.23%] font-semibold"
          id="course_overview"
        >
          Course Overview
        </p>
      </div>
      <div
        className="absolute top-[564px] left-[475px] shadow-[0px_0px_18px_rgba(0,_0,_0,_0.05)] w-[977px] h-[513px] text-xs text-white"
        id="nutrition_introduction_video"
      >
        <img
          className="absolute top-[-1px] left-[-1px] rounded-lg w-[979px] h-[512px] object-cover"
          alt="nutrition_img"
          src={yt_course}
        />
        <div className="absolute top-[453px] left-[0px] w-[977px] h-[60px]">
          <section
            className="absolute top-[0px] left-[0px] w-[977px] h-[60px]"
            id="youtube_setting"
          >
            <img
              className="absolute top-[0px] left-[0px] w-[977px] h-[60px]"
              alt=""
              src={yt_bg}
            />
            <img
              className="absolute top-[17.01px] left-[39.5px] w-[28.5px] h-[25.98px] object-cover"
              alt="yt_play"
              src={yt_play}
            />
            <div className="absolute top-[22px] left-[105px] w-[734px] h-[15px]">
              <div
                className="absolute top-[0px] left-[0px] rounded-md bg-silver box-border w-[734px] h-[15px] border-[1px] border-solid border-darkgray"
                id="progress_bar_track"
              />
              <div
                className="absolute top-[0px] bg-purple left-[0px] rounded-md bg-mediumslateblue box-border w-[81px] h-[15px] border-[1px] border-solid border-darkgray"
                id="timestamp_progress"
              />
              <img
                className="absolute top-[0px] left-[73px] rounded-[50%] w-[15px] h-[15px] object-cover"
                alt="progress_tracker"
                src={yt_progress_bar}
              />
            </div>
            <img
              className="absolute h-[33.33%] w-[2.46%] top-[33.33%] right-[10.24%] bottom-[33.33%] left-[87.31%] max-w-full overflow-hidden max-h-full object-cover"
              alt="yt_caption"
              src={yt_caption}
            />
            <img
              className="absolute h-[38.33%] w-[2.76%] top-[30.83%] right-[1.48%] bottom-[30.83%] left-[95.75%] max-w-full overflow-hidden max-h-full object-cover"
              alt="full_screen"
              src={full_screen}
            />
            <img
              className="absolute h-[37.75%] w-[2.73%] top-[31.12%] right-[5.8%] bottom-[31.12%] left-[91.47%] max-w-full overflow-hidden max-h-full object-cover"
              alt="yt_setting"
              src={yt_setting}
            />
          </section>
          <p
            className="m-0 absolute top-[41px] left-[105px] leading-[156.23%] font-semibold inline-block w-8 h-4"
            id="timestamp_start"
          >
            04:16
          </p>
          <p
            className="m-0 absolute top-[41px] left-[805px] leading-[156.23%] font-semibold inline-block w-[34px] h-4"
            id="timestamp_end"
          >
            24:30
          </p>
        </div>
      </div>
      <p
        className="m-0 absolute top-[1101px] left-[1357px] leading-[156.23%] font-semibold text-blue"
        id="Next"
      >{`Next    >`}</p>
      <img
        className="absolute top-[498px] left-[42px] w-[42px] h-[42px] object-cover cursor-pointer"
        alt="click_backward"
        src={left_hide}
        // onClick={onGroupIcon1Click}
      />
    </div>
  );
};

export default Course_overview;
