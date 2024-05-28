import React from "react";
import Nav from "../Top_Nav/Nav";
import healthicon from "../../asset/healthicon.png";
import Tbw_water from "../../asset/Tbw_water.png";
import twb_circle from "../../asset/twb_circle.png";

const TBWresult = ({ tbw }) => {
  return (
    <div className="relative bg-whitesmoke w-[1512px] h-[982px] overflow-hidden text-center text-21xl text-text-black-color font-sans xl:w-full">
      <div className="absolute top-[326px] left-[634px] rounded-xl bg-whitesmoke box-border w-[243px] h-[74px] border-[1px] border-solid border-steelblue" />
      <h2
        className=" absolute top-[172px] text-[40px] left-[calc(50%_-_60px)] text-inherit leading-[174.53%] font-semibold font-inherit "
        id="results"
      >
        Result
      </h2>
      <p
  className="absolute top-[254px] left-[calc(50%_-_250px)] text-[40px] leading-[150.19%] font-sans"
  id="tbw"
>
  Your Total body water %  is: 
</p>
      <button
        className="cursor-pointer py-7 px-[73px] bg-[transparent] absolute top-[829px] left-[calc(50%_-_104px)] rounded-2xl [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))] overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-palegoldenrod"
        id="submit"
      >
        <div className="relative text-5xl leading-[120%] font-semibold font-sans text-dark-green-color text-left">
          Done
        </div>
      </button>
      <header
        className="absolute top-[2px] left-[0px] shadow-[0px_2px_8px_rgba(0,_0,_0,_0.07)] w-[1512px] h-32 text-left text-5xl text-dark-green-color font-sans"
        id="nav"
      >
        <Nav />
      </header>
      <div
        className="absolute top-[503px] left-[calc(50%_-_151px)] w-[302px] h-[278px] overflow-hidden"
        id="health_outer"
      >
        <img
          className="absolute h-[67.59%] w-[60.17%] top-[30.85%] right-[19.94%] bottom-[1.56%] left-[19.9%] max-w-full overflow-hidden max-h-full object-cover"
          alt="body"
          src={healthicon}
        />
        <img
          className="absolute h-[45.11%] w-[22.52%] top-[50.93%] right-[38.71%] bottom-[3.96%] left-[38.78%] max-w-full overflow-hidden max-h-full object-cover"
          alt="water"
          src={Tbw_water}
        />
        <img
          className="absolute bottom-[192px] left-[calc(50%_-_28px)] rounded-[50%] w-14 h-14 object-cover"
          alt="healthiconCircle"
          src={twb_circle}
        />
      </div>
      {/* Tbw result */}
      <div className="absolute top-[328px] left-[calc(50%_-_36px)] w-[71px] h-[70px]">
        <div className="absolute top-[1px] text-4xl text-center left-[calc(50%_-_35.5px)] leading-[174.53%] font-semibold">
          {tbw ? tbw : 'N/A'}
        </div>
        <b className="absolute top-[20px]  text-center text-3xl left-[45px]  leading-[150.19%] font-roboto-flex text-dimgray">
          %
        </b>
      </div>
      <p
        className="m-0 absolute top-[424px] left-[calc(50%_-_62px)] text-lg leading-[108.23%] font-roboto text-dark-green-color inline-block w-[124px] h-[34px]"
        id="averange_range"
      >
        {`Average range: 50–60 `}
      </p>
    </div>
  );
};

export default TBWresult;
