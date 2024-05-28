import React from "react";
import Nav from "../Top_Nav/Nav";
import Search from "../../asset/search.png";
import Saved from "../../asset/Saved.png";
import unsaved from "../../asset/unsaved.png";
import grocery_icon from "../../asset/grocery_icon.png";
import Chicken_tikka from "../../asset/Chicken_tikka.png";
import rating from "../../asset/rating.png";

const Recipe_main = () => {
  return (
    <>
      <div className="absolute top-[356px] left-[calc(50%_-_488px)] w-[976px] h-[78px]">
        <input
          className="bg-whitesmoke outline-none  pl-28 font-medium text-2xl rounded-[10px] absolute top-[-1px] left-[calc(50%_-_489px)] rounded-3xs box-border w-[978px] h-20 border-[1px] border-solid border-stroke-green-color placeholder:text-gray-500 placeholder:text-[18px] placeholder:h-6 placeholder:w-[127px] placeholder:italic  "
          name="text"
          placeholder="Select Recipes"
          type="text"
        />
        <div className="absolute top-[-1px] left-[-1px] rounded-3xs bg-whitesmoke box-border w-[88px] h-20 border-[1px] border-solid border-stroke-green-color" />
        <img
          className="absolute h-[42.31%] w-[3.38%] top-[28.85%] rounded-[10px] right-[93.9%] bottom-[28.85%] left-[2.72%] max-w-full overflow-hidden max-h-full object-cover"
          alt="searchhh"
          id="search"
          src={Search}
        />
      </div>
      <h1
        className="m-0 absolute top-[208px] left-[calc(50%_-_165px)] text-[48px] tracking-[0.53em] leading-[133%] font-semibold font-inherit text-stroke-green-color"
        id="Recipes"
      >
        Recipes
      </h1>
      <header
        className="absolute top-[0px] left-[0px] shadow-[0px_2px_8px_rgba(0,_0,_0,_0.07)] w-[1512px] h-32 text-left text-5xl text-dark-green-color font-open-sans"
        id="top_nav"
      >
        <Nav />
      </header>
      {/* top section */}

      <img
        className="absolute top-[375.4px] left-[1420.5px] w-[33px] h-[33px] object-cover"
        alt="Saved"
        src={Saved}
      />
      <img
        className="absolute h-[1.27%] w-[1.98%] top-[12.75%] right-[9.26%] bottom-[84.48%] left-[88.76%] max-w-full overflow-hidden max-h-full object-cover"
        alt="Grocery_icon"
        src={grocery_icon}
      />
      <div className="absolute top-[554px] left-[100px] w-[1352px] h-[1616px]">
        <img
          className="absolute top-[66px] left-[1325px] w-[30px] h-[30px] object-cover"
          alt="unsaved"
          src={unsaved}
        />
        <img
          className="absolute top-[-14px] left-[-37px] rounded-[60px] w-[706px] h-[412px] object-cover"
          alt="Chicken_tikka"
          src={Chicken_tikka}
        />
        <p
          className="m-0 absolute top-[57px] left-[714px] text-[40px] tracking-[0.03em] leading-[120.23%] font-semibold"
          id="Chicken_tikka_masala"
        >
          Chicken tikka masala
        </p>

        <p
          className="m-0 absolute top-[181px]  border-2 rounded border-solid border-red-color px-[25px] py-[10px] left-[713px] tracking-[0.03em] leading-[120.23%] font-semibold text-rose-500"
          id="total_calories"
        >
          396 kcal
        </p>
        <p
          className="m-0 absolute top-[255px] left-[713px] border-2 rounded border-solid border-amber-600 px-[50px] py-[10px] tracking-[0.03em] leading-[120.23%] font-semibold  text-amber-600"
          id="total_Fats"
        >
          10 g
        </p>
        <p
          className="m-0 absolute top-[308px] left-[763px] tracking-[0.03em] leading-[120.23%] font-semibold text-dark-grey-color"
          id="Fats"
        >
          Fats
        </p>
        <p
          className="m-0 absolute top-[308px] left-[926px] tracking-[0.03em] leading-[120.23%] font-semibold text-text-dark-grey-color"
          id="Carbs"
        >
          Carbs
        </p>
        <p
          className="m-0 absolute top-[308px] left-[1082px] tracking-[0.03em] leading-[120.23%] font-semibold text-text-dark-grey-color"
          id="Proteins"
        >
          Proteins
        </p>
        <p
          className="m-0 absolute top-[255px] left-[884px] tracking-[0.03em] border-2 border-solid border-blue px-[50px] py-[10px] rounded leading-[120.23%] font-semibold text-blue"
          id="total_carbs"
        >
          33 g
        </p>
        <p
          className="m-0 absolute top-[255px] left-[1058px] rounded tracking-[0.03em] leading-[120.23%] font-semibold border-2 border-solid border-[#D170CD] px-[50px] py-[10px] text-[#D170CD]"
          id="total_protein"
        >
          45 g
        </p>
        <img
          className="absolute top-[122.25px] left-[713.8px] w-[132.4px] h-[24.75px] object-cover"
          alt="rating"
          src={rating}
        />
      </div>
      <div className="absolute top-[974px] left-[376px] w-[760px] h-[34px]">
        <p
          className="m-0 absolute top-[0px] left-[0px] leading-[156.23%] inline-block w-[279px] h-[34px]"
          id="Prep_time"
        >
          <b>{`Prep time: `}</b>
          <span>60 mins</span>
          <b>{` `}</b>
        </p>
        <p
          className="m-0 absolute top-[0px] left-[626px] leading-[156.23%] inline-block w-[134px] h-[34px]"
          id="serves"
        >
          <b>{`Serves: `}</b>
          <span>4</span>
          <b>{` `}</b>
        </p>
        <p
          className="m-0 absolute top-[0px] left-[calc(50%_-_41px)] leading-[156.23%] inline-block w-[228px] h-[34px]"
          id="difficulty"
        >
          <b>{`Difficulty:  `}</b>
          <span>{`Easy `}</span>
        </p>
      </div>
      {/* top section */}
    </>
  );
};

export default Recipe_main;
