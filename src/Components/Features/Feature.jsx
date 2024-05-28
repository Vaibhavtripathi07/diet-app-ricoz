import food_logger from "../../asset/food_logger.png";
import scanner from "../../asset/Scanner.png";
import smScanner from "../../asset/smScanner.png";

const Feature = () => {
  return (
    <>
      {/* features section starts here */}

      <div className="absolute top-[1151px] left-[10px] w-[1415px] h-[868px]">
        <div className="relative mx-auto left-9 w-[457px] h-[100px] text-stroke-green-color">
          <div className="absolute top-[0px] left-[0px] w-[457px] h-[100px]">
            <div className="absolute top-[0px] left-[229px] rounded-sm bg-beige w-[228px] h-[100px]" />
            <div className="absolute top-[0px] left-[0px] rounded-sm bg-whitesmoke w-[229px] h-[100px]" />
          </div>
          <h2 className="absolute top-[18px] px-11 text-29xl tracking-[25.44px] leading-[133%] font-semibold font-sans">
            Features
          </h2>
        </div>
        <div className="absolute top-[250px] left-[0px] w-[1415px] h-[568px] text-[5.33px] text-gray-200 font-montserrat">
          <div className="absolute top-[71px] left-[881px] w-[534px] h-[289px] text-[36px] font-open-sans">
            <p className="absolute top-[0px] text-[36px] left-[0px] text-[#1D1D1F] leading-[156.23%] font-semibold  w-[157px] h-[54px] font-sans">
              Food Log
            </p>
            <p className="absolute text-black top-[106px] left-[0px] text-5xl font-sans leading-[156.227%]  w-[534px] h-[183px]">
              Easily log your meals and track calorie & macros intake simply by
              scanning your meal or bar code of any product you consume to stay
              on top of your nutrition.
            </p>
          </div>

          {/* lefy images */}

          <div className="box relative">
            <div className="FOOD-LOG absolute top-300 left-0 w-1415 h-568" />
            <div className="overlap absolute top-0 left-[-10] w-815 h-591">

            <img src={food_logger} alt="" className="ml-[182px]" />
            <img src={scanner} alt="" className="ml-10 -mt-[194px] mr-[911px]" /> 
             <img src={smScanner} alt="" className="ml-[519px] -mt-36" />
            </div>
            <div className="food-logger absolute top-0 left-178 w-637 h-389"></div>
            <div className="sc-ANNER absolute top-194 left-0 w-521 h-316"></div>
            <div className="img absolute top-396 left-480 w-314 h-196"></div>
            <div className="FOOD-LOG-TEXT absolute top-71 left-881 w-538 h-289/"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
