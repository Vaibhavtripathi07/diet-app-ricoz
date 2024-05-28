import { useCallback } from "react";
import Done_img from "../../asset/Done_img.png"
import Black_right from "../../asset/Black_right.png"
import Keto_meal from "../../asset/Keto_meal.png"
import logo from "../../asset/logo.png"
import { Link } from "react-router-dom";


const Result = () => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "LANDING" to the project
  }, []);

  const onGroupContainer3Click = useCallback(() => {
    // Please sync "MEAL PLANS" to the project
  }, []);

  return (
    <div className="bg-whitesmoke-200 w-[1512px] h-[982px] overflow-hidden text-center text-5xl text-black font-sans xl:w-full  ">
      {/* <div className="absolute top-[0px] left-[0px] bg-whitesmoke-100 w-[1512px] h-[982px]" /> */}
    <img src={logo} alt="logo"  className="mt-[17px] ml-[56px] w-[132px] h-[94px] "/>
    <div >
    <img
      className=" mx-auto w-[381px] h-[254px] object-cover "
      alt="Done_img"
      src={Done_img}
    />
      <h3
        className=" mt-[10px] text-center text-[40px] font-semibold font-inherit inline-block w-[129px]"
        id="done"
      >
        Done
      </h3>
      <p
        className=" mt-16 left-[calc(50%_-_292px)] font-medium"
        id="plan"
      >{`As per your response this is your ideal meal plan `}</p>
      <section className="mt-[22px] w-[665px] h-[236px] rounded-2xl [background:linear-gradient(97.1deg,_#def2fa,_#cae5f1)] mx-auto">
<h3 className="text-start p-1  text-13xl text-black font-sans font-semibold ml-6"> Keto Meal Plan</h3>
<section className="flex gap-3 ">
<p
          className="mt-[18px] text-start ml-6 font-sans text-[28px] font-normal leading-[156.227%] w-[461px] h-[81px] "
          id="low_carb"
        >
          Low-carb, high-fat diet to promote ketosis and fat burning.
        </p>
        <img
          className="-mt-[33px] mr-16  w-[144px] h-[144px] rounded-full  object-cover border-3 border-solid border-[#F9F9F9]"
          alt="ketomeal"
          src={Keto_meal}
        />
</section>
          <p
            className="text-start ml-6 text-base text-[#467D93] lesding-[156.227%] mt-[23px]"
            id="starts@599"
          >
            Starts @ 599/-
          </p>
      </section>

      <Link to="/ExploreMealPlan">
      <section 
        className="flex items-center justify-center mt-[64px] gap-[19px] cursor-pointer "
        onClick={onGroupContainer3Click}
      >
        <p
          className="text-5xl font-inherit font-medium text-black"
          id="explore_meal"
        >
          Explore more meal plans
        </p>
        <img
          className="mt-[2px]"
          alt="right"
          src={Black_right}
        />
      </section></Link>
      {/* <div className="absolute top-[556px] left-[calc(50%_-_332px)] w-[665px] h-[236px] text-left text-[32px]">
        <section
          className="absolute top-[0px] left-[calc(50%_-_332.5px)] rounded-2xl [background:linear-gradient(97.1deg,_#def2fa,_#cae5f1)] w-[665px] h-[236px]"
          id="meal_section"
        />
        <h3
          className="m-0 absolute top-[24px] left-[calc(50%_-_308.5px)] text-inherit leading-[156.23%] font-semibold font-inherit"
          id="keto_meal_plan"
        >
          Keto Meal Plan
        </h3>
        <img
          className="absolute top-[34px] left-[494px] rounded-[50%] w-[150px] h-[150px] object-cover"
          alt="ketomeal"
          src={Keto_meal}
        />
        <p
          className="m-0 absolute top-[92px] left-[24px] text-[28px] leading-[156.23%] inline-block w-[461px] h-[81px]"
          id="low_carb"
        >
          Low-carb, high-fat diet to promote ketosis and fat burning.
        </p>
        <div className="absolute top-[196px] left-[calc(50%_-_308.5px)] w-[120px] h-[17px] text-center text-[16px] text-slategray">
          <p
            className="m-0 absolute top-[0px] left-[calc(50%_-_60px)] text-blue leading-[156.23%] font-medium inline-block w-[120px] h-[17px]"
            id="starts@599"
          >
            Starts @ 599/-
          </p>
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default Result;
