import { useCallback } from "react";

import full_screen_off from "../../asset/full_screen_off.png";
import yt_setting from "../../asset/yt_setting.png";
import yt_caption from "../../asset/yt_caption.png";
import yt_progress_bar from "../../asset/yt_progress_bar.png";

import yt_course from "../../asset/yt_course.png";
import yt_play from "../../asset/yt_play.png";
import yt_bg from "../../asset/yt_bg.png";

const Course_fullscreen = () => {
  const onVectorIconClick = useCallback(() => {
    // Please sync "Courses" to the project
  }, []);

  return (
    // <div
    //   className="relative  rounded-[13px] bg-whitesmoke w-full h-[982px] overflow-hidden text-left text-[18.58px] text-white font-sans"
    //   id="full_screen_video"
    // >
    //   <div className="absolute top-[0px] left-[0px] shadow-[0px_0px_27.87px_rgba(0,_0,_0,_0.05)] w-[1512px] h-[982px]">
    //     <img
    //       className="absolute top-[0px] left-[0px]  w-[1512px] h-[982px] object-cover"
    //       alt="yt-course"
    //       src={yt_course}
    //     />
    //     <div className="absolute top-[868px] left-[0px] w-[1512px] h-[114px]">
    //       <div className="absolute top-[0px] left-[0px] w-[1512px] h-[114px]">
    //         <img
    //           className="absolute top-[0px] left-[0px] w-[1512px] h-[114px] object-cover"
    //           alt="yt_controls_back"
    //           src={yt_bg}
    //         />
    //         <img
    //           className="absolute top-[37.68px] left-[79.5px] w-[34.5px] h-[34.64px] object-cover"
    //           alt="yt_play"
    //           src={yt_play}
    //         />
    //         <div className="absolute top-[40px] left-[161px] w-[1136px] h-[30px]">
    //           <div
    //             className="absolute top-[0px] left-[0px] rounded-[9.29px] bg-silver box-border w-[1136px] h-[28.71px] border-[1.5px] border-solid border-darkgray"
    //             id="progress_bar"
    //           />
    //           <div className="absolute top-[0px] bg-purple   left-[0px] rounded-[9.29px] bg-mediumslateblue box-border w-[125.36px] h-[28.71px] border-[1.5px] border-solid border-darkgray" />
    //           <img
    //             className="absolute top-[0px] left-[111.98px] rounded-[50%] w-[30.02px] h-[30px] object-cover"
    //             alt="yt_progress_bar"
    //             src={yt_progress_bar}
    //           />
    //         </div>
    //         <img
    //           className="absolute h-[33.33%] w-[2.78%] top-[31.58%] right-[9.99%] bottom-[35.09%] left-[87.24%] max-w-full overflow-hidden max-h-full object-cover"
    //           alt="yt_caption"
    //           src={yt_caption}
    //         />
    //       </div>
    //       <img
    //         className="absolute h-[31.58%] w-[2.38%] top-[32.89%] right-[1.22%] bottom-[35.53%] left-[96.4%] max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
    //         alt="full_screen_off"
    //         src={full_screen_off}
    //         onClick={onVectorIconClick}
    //       />
    //       <p
    //         className="m-0 absolute top-[77.91px] left-[162.5px] leading-[156.23%] font-semibold inline-block w-[49.52px] h-[30.4px]"
    //         id="yt_track_start"
    //       >
    //         04:16
    //       </p>
    //       <p
    //         className="m-0 absolute top-[77.91px] left-[1245.81px] leading-[156.23%] font-semibold inline-block w-[52.62px] h-[30.4px]"
    //         id="yt_track_end"
    //       >
    //         24:30
    //       </p>
    //       <img
    //         className="absolute h-[36.05%] w-[2.98%] top-[30.22%] right-[5.25%] bottom-[33.73%] left-[91.76%] max-w-full overflow-hidden max-h-full object-cover"
    //         alt="yt_setting"
    //         src={yt_setting}
    //       />
    //     </div>
    //   </div>
    // </div>
    <div>
      <section>
        
        <video src="https://youtu.be/R3NxAR60jlo?si=YmUtKQmIkiDFqD0-" className="w-screen h-screen" alt="video" controls autoPlay loop 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  <track kind="captions" src="captions.vtt" srcLang="en" label="English captions" default />
</video>

      </section>
    </div>
  );
};

export default Course_fullscreen;
