import React, { useState } from "react";
import Sidebar from "../ProPic/Sidebar";
import Above from "../../asset/Above.png";
// import rating from "../../asset/rating.png";
import Profile_picture from "../../asset/Profile_picture.png";
const UnitMeasurement = () => {
  const [rotation, setRotation] = useState(0);
  const [showDetails, setShowDetails] = useState(true);
  const [isChecked, setIsChecked] = useState(true);

  const onBtnClick = () => {
    // Toggle between original position (0 degrees) and top position (180 degrees)
    const newRotation = rotation === 0 ? -180 : 0;
    setRotation(newRotation);
    setShowDetails(!showDetails);
  };
  return (
    <>
      {/* main section */}

       {/* sidebar */}
       {/* <Sidebar /> */}
      {/* sidebar */}

      <section className="main w-[calc(100%_-_20%)] float-right ">

{/* </PersonalHeader> */}

          {/* main section */}

          <section className=" flex items-center justify-between flex-row px-1 my-3 md:px-3 md:mx-auto mx-3  md:w-[852px] md:leading-10 md:h-[72px]  border border-strokegreen-color rounded-md md:rounded-xl">
          <h1 className="text-lg md:text-13xl font-semibold font-inherit leading-7 md:leading-10">
            Units of Measurement
          </h1>
          <img
            src={Above}
            alt=""
            className="w-5 h-5 md:w-7 md:h-7 object-contain"
            onClick={onBtnClick}
            style={{ transform: `rotate(${rotation}deg)` }}
          />
        </section>
      {/* main section */}
      {showDetails && (
        <section className="mx-3 md:mx-auto my-2 px-3 md:w-[852px] leading-10 md:h-[380px]  border border-strokegreen-color rounded-xl">
          {/* first section */}
          <section>
          <p className=" text-[#333] text-xl md:text-5xl font-sans leading-7 md:leading-10 font-semibold">
            Energy
          </p>
          <section className="flex items-center justify-between">
          <p className=" left-[18px] top-[73px] text-[#333] font-sans tsemibold md:text-5xl  leading-7  md:leading-10 font-semibold">
            Calories (Kcal)
          </p>
          <input
            type="radio"
            name="energy"
            className=" top-[76px] left-[804px]  accent-dark-green-color w-5 h-5 md:w-7 md:h-7"
            required={true}
            onClick={() => setIsChecked(!isChecked)}
          />
          </section>
          <section className="flex items-center justify-between">
          {/* leading 7 */}
          <p className=" left-[18px] top-[118px] text-[#333] font-sans text-lg md:text-5xl leading-7  md:leading-10 font-semibold">
            Kilo Joules (Kj)
          </p>
          <input
            type="radio"
            name="energy"
            className=" top-[121px] left-[804px]  accent-dark-green-color w-5 h-5 md:w-7 md:h-7"
            required={true}
            onClick={() => setIsChecked(!isChecked)}
          />
          </section>
          </section>
          <hr className="mt-2 top-[167px] left-3 w-64 md:w-[828px] stroke-gray" />
          {/* first section */}

          {/* second section */}
          <p className=" left-[18px] top-[179px] text-[#333] text-xl md:text-5xl font-sans leading-7  md:leading-10 font-semibold">
            Length
          </p>
          <section className="flex items-center justify-between">
          <p className=" left-[18px] top-[228px] text-[#333] font-sans text-lg md:text-5xl leading-7  md:leading-10 font-semibold">
            Inch (in)
          </p>
          <input
            type="radio"
            name="measure"
            className=" top-[231px] left-[804px]  accent-dark-green-color w-5 h-5 md:w-7 md:h-7"
            required={true}
            onClick={() => setIsChecked(!isChecked)}
          />
          </section>
          <section className="flex items-center justify-between">
          {/* leading 7 */}
          <p className="left-[18px] top-[273px] text-[#333] font-sans text-lg md:text-5xl leading-7  md:leading-10 font-semibold">
            Centimeters (cm)
          </p>
          <input
            type="radio"
            name="measure"
            className="top-[276px] left-[804px]  accent-dark-green-color w-5 h-5 md:w-7 md:h-7"
            required={true}
            onClick={() => setIsChecked(!isChecked)}
          />
          </section>
          <hr className="top-[322px] left-3 mt-2 w-64 md:w-[828px] stroke-gray" />
          {/* second section */}

          {/* third section */}
          <p className=" left-[18px] top-[334px] text-[#333] text-xl md:text-5xl font-sans leading-7  md:leading-10 font-semibold">
            Serving
          </p>
          <section className="flex items-center justify-between">
          <p className=" left-[18px] top-[383px] text-[#333] font-sans text-lg md:text-5xl leading-7  md:leading-10 font-semibold">
            Gram (g) ; Milliliters (ml) ; Liters (L)
          </p>
          <input
            type="radio"
            name="serve"
            className=" top-[386px] left-[804px]  accent-dark-green-color w-6 h-6 md:w-7 md:h-7"
            required={true}
            onClick={() => setIsChecked(!isChecked)}
          />
</section>

          <section className="flex items-center justify-between">
         
          {/* leading 7 */}
          <p className=" left-[18px] top-[428px] text-[#333] font-sans text-lg md:text-5xl leading-7  md:leading-10 font-semibold">
            Ounces (oz); Fluid Ounce 
          </p>
          <input
            type="radio"
            name="serve"
            className=" top-[431px] left-[804px]  accent-dark-green-color w-5 h-5 md:w-7 md:h-7"
            required={true}
            onClick={() => setIsChecked(!isChecked)}
          />
 </section>
          {/* third section */}
        </section>
      )}
      {/* main section */}
      </section>
    </>
  );
};
export default UnitMeasurement;
