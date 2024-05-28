import { useCallback  } from "react";
import Nav from "../Top_Nav/Nav";
import { Link, Navigate } from "react-router-dom";

import full_screen from "../../asset/full_screen.png";
import yt_setting from "../../asset/yt_setting.png";
import yt_caption from "../../asset/yt_caption.png";
import yt_progress_bar from "../../asset/yt_progress_bar.png";
import right_hide from "../../asset/right_hide.png";
import yt_course from "../../asset/yt_course.png";
import yt_play from "../../asset/yt_play.png";
import yt_bg from "../../asset/yt_bg.png";



const Course = () => {
  const onVectorIcon2Click = useCallback(() => {
    // Please sync "Courses" to the project
  }, []);

  const onRightIconClick = useCallback(() => {
    // Please sync "Courses" to the project
    // Navigate("../../Screens/Course_overview.jsx");
  }, []);

  return (
    <div className="relative bg-whitesmoke w-full h-[1767px] overflow-hidden text-left text-[48px] text-stroke-green-color font-sans">
      {/* header */}
      <header
        className="absolute top-[0px] left-[0px] shadow-[0px_2px_8px_rgba(0,_0,_0,_0.07)] w-[1512px] h-32 text-left text-5xl text-dark-green-color font-sans"
        id="top_nav"
      >
        <Nav />
      </header>
      {/* header */}
      {/* main */}
      <h1
        className="m-0 absolute top-[208px] left-[calc(50%_-_396px)] text-inherit tracking-[0.53em] leading-[133%] font-inherit"
        id="stayfit_learning"
      >
        <i className="font-semibold">StayFIT</i>
        <span className="font-semibold"> Learning</span>
      </h1>
      <p
        className="m-0 absolute top-[392px] left-[calc(50%-_289px)] text-[46px] leading-[156.23%] font-bold font-sans text-black  text-center"
        id="Intro_to_nutrition"
      >
        Introduction to Nutrition
      </p>
      <div className="absolute top-[564px] left-[109px] shadow-[0px_0px_23.86px_rgba(0,_0,_0,_0.05)] w-[1294px] h-[676.02px]">
        <img
          className="absolute top-[-1.33px] left-[-1.33px] rounded-[10.6px] w-[1296.65px] h-[678.68px] object-cover"
          alt="yt_course"
          src={yt_course}
        />
        <section
          className="absolute top-[596px] left-[0px] w-[1294px] h-20 text-left text-[15.91px] text-white font-open-sans"
          id="yt_bar"
        >
          <div className="absolute top-[0px] left-[0px] w-[1294px] h-20">
            <img
              className="absolute top-[0px] left-[0px] w-[1294px] h-20 object-cover"
              alt="yt_controls_back"
              src={yt_bg}
            />
            <img
              className="absolute top-[22.68px] left-[55.5px] w-[34.5px] h-[34.64px] object-cover"
              alt="yt_play"
              src={yt_play}
            />
            <div className="absolute top-[29.63px] left-[139.07px] w-[972.16px] h-[19.88px]">
              <div
                className="absolute top-[0px] left-[0px] rounded-[7.95px] bg-silver box-border w-[972.16px] h-[19.88px] border-[1.3px] border-solid border-darkgray"
                id="yt_progress_bar"
              />
              <div className="absolute top-[0px] bg-purple left-[0px] rounded-[7.95px] bg-mediumslateblue box-border w-[107.28px] h-[19.88px] border-[1.3px] border-solid border-darkgray" />
              <img
                className="absolute top-[0px] left-[96.69px] rounded-[50%] w-[19.87px] h-[19.88px] object-cover"
                alt="yt_progress_bar"
                src={yt_progress_bar}
              />
            </div>
            <img
              className="absolute h-2/5 w-[2.78%] top-[31.25%] right-[9.89%] bottom-[28.75%] left-[87.33%] max-w-full overflow-hidden max-h-full object-cover"
              alt="yt_caption"
              src={yt_caption}
            />
          </div>
          <Link to="/fullscreens">     <img
            className="absolute h-[43.75%] w-[2.7%] top-[29.38%] right-[1.12%] bottom-[26.88%] left-[96.17%] max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
            alt="full_screen"
            src={full_screen}
            // onClick={onVectorIcon2Click}
          /></Link> 
          <p
            className="m-0 absolute top-[54.81px] left-[139.07px] leading-[156.23%] font-semibold inline-block w-[42.38px] h-[21.21px]"
            id="start_timestamp"
          >
            04:16
          </p>
          <p
            className="m-0 absolute top-[54.81px] left-[1066.19px] leading-[156.23%] font-semibold inline-block w-[45.03px] h-[21.21px]"
            id="end_timestamp"
          >
            24:30
          </p>
          <img
            className="absolute h-[43.32%] w-[2.99%] top-[29.59%] right-[5.31%] bottom-[27.09%] left-[91.71%] max-w-full overflow-hidden max-h-full object-cover"
            alt="yt_setting"
            src={yt_setting}
          />
        </section>
      </div>
      <p
        className="m-0 absolute top-[1268px] left-[1308px] text-5xl leading-[156.23%] font-semibold text-blue"
        id="next_lecture"
      >{`Next    >`}</p>
   <img
        className="absolute top-[564px] left-[30px] w-[42px] h-[42px] object-cover cursor-pointer"
        alt="right_side_hide"
        src={right_hide}
        // onClick={onRightIconClick}
      />
      {/* main */}
    </div>
  );
};

export default Course;
