import React, { useState } from "react";
import upwardArrow from "../../asset/upwardArrow.png";

const OrderTracker = () => {
  const [rotation, setRotation] = useState(0);
  const [showDetails, setShowDetails] = useState(true);

  const onBtnClick = () => {
    const newRotation = rotation === 0 ? 180 : 0;
    setRotation(newRotation);
    setShowDetails(!showDetails);

       // Show/hide details based on the rotation
      //  setShowDetails(!showDetails);
      // }, [rotation, showDetails];
  };

  return (
    <div className=" font-sans ">
      
         <section className="flex items-center justify-between flex-row  px-2 md:px-4 border-b-2 mt-7 md:mt-36 border-b-grayColor mx-auto w-[calc(100%_-_15%)]  h-9  bg-whitesmoke">
            {/* track order */}
            <p className=" text-black  font-inherit text-base md:text-13xl xl:text-13xl font-semibold leading-4 md:leading-10 ">
              Track Order
            </p>
            <img
              src={upwardArrow}
              className=" transform object-contain w-5 h-5 md:w-8 md:h-8 "
              alt="previous"
              onClick={onBtnClick}
              style={{ transform: `rotate(${rotation}deg)` }}
            />
            {/* track order */}
          </section>
     {/* Conditionally render the details based on showDetails */}
     {showDetails && (
          <div className="mx-4 grid justify-center my-10" >
            <section className="bg-whitesmoke flex  items-center gap-5">
            <section className="  rounded-full w-3 h-3 md:w-5 md:h-5  bg-strokegreen-color" />
            <span className=" text-lg md:text-5xl font-inherit font-semibold">
              Confirm
            </span>{" "}
            <span className=" text-lg md:text-5xl  font-inherit font-normal text-grey-color leading-[37px]">
              31 July, 2023
            </span>
            </section>
            <section className=" w-1 h-10 md:h-20  bg-strokegreen-color  rounded-xl" />
            {/* 1 */}
            <section className="flex  items-center gap-5">
            <section className=" rounded-full w-3 h-3 md:w-5 md:h-5  bg-strokegreen-color" />
            <span className=" text-lg md:text-5xl font-inherit font-semibold">
              Packed
            </span>{" "}
            <p className="text-lg md:text-5xl  font-inherit font-normal text-grey-color leading-7 ">
              01 Aug, 2023
            </p>
            </section>
            <section className=" w-1 h-10 md:h-20 bg-strokegreen-color  rounded-xl" />
            {/* 2 */}
            <section className="flex  items-center gap-5">
            <section className=" rounded-full w-3 h-3 md:w-5 md:h-5  bg-strokegreen-color" />
            <span className=" text-lg md:text-5xl font-inherit font-semibold">
            Shipped
            </span>{" "}
            <p className="text-lg md:text-5xl  font-inherit font-normal text-grey-color leading-7 ">
            02 Aug, 2023
            </p>
            </section>
            <section className="w-1 h-10 md:h-20 bg-strokegreen-color  rounded-xl" />
            {/* 3 */}
            <section className="flex  items-center gap-5">
            <section className=" rounded-full w-3 h-3 md:w-5 md:h-5  bg-strokegreen-color" />
            <span className=" text-lg md:text-5xl font-inherit font-semibold">
            Out for Delivery
            </span>{" "}
            <p className="text-lg md:text-5xl  font-inherit font-normal text-grey-color leading-7 ">
            05 Aug, 2023
            </p>
            </section>
            <section className="w-1 h-10 md:h-20  border rounded-xl" />
            {/* 4 */}
            <section className="flex  items-center gap-1">
            <section className=" rounded-full w-3 h-3 md:w-5 md:h-5  bg-strokegreen-color" />
            <span className=" text-lg md:text-5xl font-inherit font-semibold">
            Delivered Successfully
            </span>{" "}
            <p className="text-lg md:text-5xl  font-inherit font-normal text-grey-color leading-7 ">
              01 Aug, 2023
            </p>
            </section>
            {/* <section className="w-1 h-10 md:h-20 border  rounded-xl" />.. */}
            {/* 5 */}
          </div>
        )}
        {/* Conditionally render the details based on showDetails */}
        <button className="flex mx-auto  my-4 items-center justify-center  font-inherit text-dark-green-color text-xl md:text-5xl font-semibold [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))] py-4 px-8 md:py-7 md:px-16 rounded-lg md:rounded-2xl h-7 border border-solid border-[#CFF7AA]"  onClick={onBtnClick}>
          Track
        </button>
    </div>
  );
};

export default OrderTracker;

