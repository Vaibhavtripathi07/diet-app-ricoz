import { useCallback ,useState} from "react";
import Nav from "../Top_Nav/Nav";
import coursesData from './coursesData.json'
import { Link } from "react-router-dom";



const Courses = () => {
  const [rotation, setRotation] = useState(0);
  const [showDetails, setShowDetails] = useState(true);

  const onGroupContainerClick = useCallback(() => {
    // Please sync "LANDING" to the project
  }, []);

  const CourseOverview = () => {
    // Please sync "Courses" to the project
    const newRotation = rotation === 0 ? -180 : 0;
    setRotation(newRotation);
    setShowDetails(!showDetails);
  }

  const onGroupIcon1Click = useCallback(() => {
    // Please sync "Courses" to the project
  }, []);

  return (
    <div
      className="relative bg-whitesmoke-100 w-[1512px] h-[1767px] overflow-hidden text-left text-5xl text-black font-sans xl:w-full"
      id="Course"
    >
      <Nav />
      {/* <div className="absolute top-[563px] left-[41px] rounded-lg bg-whitesmoke-200 box-border w-[393px] h-[62px] shadow-xl3" > */}
      <div className="absolute top-[563px] left-[41px]  rounded-lg bg-whitesmoke w-[393px] h-[62px] border border-solid border-[#E9E9E9] ">
        <img
          className="absolute top-[30px] left-[329.5px] w-[21px] h-[11px] cursor-pointer"
          alt=""
          src="/vector-169.svg"
          onClick={CourseOverview}
          style={{ transform: `rotate(${rotation}deg)` }}
        />
        <h1 className="absolute top-[14px] left-[calc(50%_-_174.5px)]  leading-[156.23%] font-semibold text-black">
          Course Overview
        </h1>
      </div>
      {/* accordian */}
      {showDetails && (
        <section className="w-[391px] h-[1039px] shadow-xl4 rounded-lg bg-whitesmoke border border-black mt-[638px] ml-[42px]">
          {coursesData.courses.map((course) => (
            <div key={course.id}>
              <h2 className="font-sans text-[28px] font-semibold leading-[156.227%] ml-6 mt-[30px]">{course.name}</h2>
              <img src={course.img} alt="" />
              <ul>
                {course.modules.map((module) => (
                  <li key={module.id} className="flex items-center justify-between">
                    <label htmlFor={`module-${module.id}`} className="text-base ml-6 mt-4 font-normal">
                      {module.title}
                    </label>
                    <input
                      type="radio"
                      id={`module-${module.id}`}
                      name="courseModules"
                      className="w-6 h-[21px] mr-[18px] ml-2 accent-dark-green-color"
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}
      {/* accordian */}
      {/* </div> */}
      <h1
        className="m-0 absolute top-[208px] left-[calc(50%_-_396px)] text-[48px] tracking-[0.53em] leading-[133%] text-stroke-green-color font-inherit"
        id="stayfit_learning"
      >
        <i className="font-semibold">StayFIT</i>
        <span className="font-semibold"> Learning</span>
      </h1>
      <p
        className="m-0 absolute top-[392px] left-[calc(50%_-_289px)] text-[46px] leading-[156.23%] font-bold font-sans-hebrew text-center"
        id="Introduction_to_nutrition"
      >
        Introduction to Nutrition
      </p>

      <div
        className="absolute top-[564px] left-[475px] shadow-[0px_0px_18px_rgba(0,_0,_0,_0.05)]  w-[977px] h-[513px] text-xs text-white"
        id="nutrition_introduction_video"
      >
        <img
          className="absolute top-[-1px] left-[-1px] rounded-lg w-[979px] h-[512px] object-cover"
          alt="nutrition_img"
          src="/rectangle-224@2x.png"
        />
        <div className="absolute top-[453px] left-[0px] w-[977px] h-[60px]">
          <section
            className="absolute top-[0px] left-[0px] w-[977px] h-[60px]"
            id="youtube_setting"
          >
            <img
              className="absolute top-[0px] left-[0px] w-[977px] h-[60px]"
              alt=""
              src="/rectangle-226.svg"
            />
            <img
              className="absolute top-[17.01px] left-[39.5px] w-[28.5px] h-[25.98px]"
              alt=""
              src="/polygon-3.svg"
            />
            <div className="absolute top-[22px] left-[105px] w-[734px] h-[15px]">
              <div className="absolute top-[0px] left-[0px] rounded-md bg-silver box-border w-[734px] h-[15px] border-[1px] border-solid border-darkgray" />
              <div className="absolute top-[0px] left-[0px] rounded-md bg-mediumslateblue box-border w-[81px] h-[15px] border-[1px] border-solid border-darkgray" />
              <div className="absolute top-[0px] left-[73px] rounded-[50%] bg-white w-[15px] h-[15px]" />
            </div>
            <img
              className="absolute h-[33.33%] w-[2.46%] top-[33.33%] right-[10.24%] bottom-[33.33%] left-[87.31%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group.svg"
            />
     <Link to="fullscreenss">     <img
              className="absolute h-[38.33%] w-[2.76%] top-[30.83%] right-[1.48%] bottom-[30.83%] left-[95.75%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector.svg"
            /></Link>
            <img
              className="absolute h-[37.75%] w-[2.73%] top-[31.12%] right-[5.8%] bottom-[31.12%] left-[91.47%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/mask-group.svg"
            />
          </section>
          <div className="absolute top-[41px] left-[105px] leading-[156.23%] font-semibold inline-block w-8 h-4">
            04:16
          </div>
          <div className="absolute top-[41px] left-[805px] leading-[156.23%] font-semibold inline-block w-[34px] h-4">
            24:30
          </div>
        </div>
      </div>
      <p
        className="m-0 absolute top-[1101px] left-[1357px] leading-[156.23%] font-semibold text-blue"
        id="Next"
      >{`Next   >`}</p>
      <Link to="/fullscreen">  <img
        className="absolute top-[498px] left-[42px] w-[42px] h-[42px] object-cover cursor-pointer"
        alt="click_backward"
        src="/group-744@2x.png"
        onClick={onGroupIcon1Click}
      /></Link>
    </div>
  );
};

export default Courses;
