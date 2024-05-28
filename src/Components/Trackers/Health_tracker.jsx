import liquid from "../../asset/liquid.png";
import water from "../../asset/water.png";
import medicine from "../../asset/medicine.png";
import walk from "../../asset/walk.png";
import Health from "../../asset/Health.png";
import sleep from "../../asset/sleep.png";

const Health_tracker = () => {
  return (
    <>
      <div className="relative w-[1331px] h-[346px] ml-4 mt-[2200px] text-right text-17xl">
        <h1 className="absolute top-[85px] left-[400px] text-4xl text-black leading-[156.23%] font-semibold font-sans">
          Health Trackers
        </h1>
        <div className="absolute top-[193px] left-[0px] text-5xl ml-[105px] leading-[156.23%] text-black font-sans font-semibold inline-block w-[546px] h-[111px]">{`Monitor your water intake, medications, steps count, sleep cycle, BMI & Body water percentage to maintain a healthy lifestyle.  `}</div>
        <div className="absolute top-[0px] left-[820px] w-[604px] h-[346px]  text-left text-29xl text-lightseagreen font-montserrat">
          <div className="absolute top-[212px] left-[470px] drop-shadow-[-18px_9px_9px_rgba(0,_0,_0,_0.17)] w-[134px] h-[134px]">
            <div className="absolute top-[0px] left-[0px] w-[134px] h-[134px]">
              <img
                className="absolute top-[0px] left-[0px] w-[134px] h-[134px]"
                alt=""
                src={liquid}
              />
              <div className="absolute top-[13.4px] left-[47px] leading-[156.23%] font-semibold inline-block w-[40.2px] h-[73.7px]">
                %
              </div>
            </div>
          </div>
          <img
            className="absolute top-[212px] left-[208px] w-[161px] h-[152px]"
            alt=""
            src={Health}
          />
          <img
            className="absolute top-[0px] left-[-27px] w-[161px] h-[152px]"
            alt=""
            src={sleep}
          />
          <img
            className="absolute top-[0px] left-[208px] w-[161px] h-[152px]"
            alt=""
            src={medicine}
          />
          <img
            className="absolute top-[0px] left-[443px] w-[161px] h-[152px]"
            alt=""
            src={walk}
          />
          <img
            className="absolute top-[212px] left-[-27px] w-[161px] h-[152px]"
            alt=""
            src={water}
          />
        </div>
      </div>
    </>
  );
};

export default Health_tracker;
