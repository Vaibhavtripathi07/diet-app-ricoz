import React, { useState } from "react";
// import Profile_picture from "../../asset/Profile_picture.png";
import Above from "../../asset/Above.png";
import Edit from "../../asset/Edit.png";
import Sidebar from "../ProPic/Sidebar";
import PersonalHeader from "../Pesonal_details/PersonalHeader";
import { Link } from "react-router-dom";


const Password = () => {
  const [rotation, setRotation] = useState(0);
  const [showDetails, setShowDetails] = useState(true);

  const onBtnClick = () => {
    // Toggle between original position (0 degrees) and top position (180 degrees)
    const newRotation = rotation === 0 ? -180 : 0;
    setRotation(newRotation);
    setShowDetails(!showDetails);
    //  // Show/hide details based on the rotation
    //  setShowDetails(!showDetails);
    // }, [rotation, showDetails];
  };

  // const handleEditClick = () => {};

  return (
  <>
      {/* sidebar */}
      {/* <Sidebar /> */}
      {/* sidebar */}
      <section className="main w-[calc(100%_-_20%)] float-right ">
        {/* <PersonalHeader /> */}
        
        <section className=" flex items-center justify-between flex-row px-1 my-3  md:px-3 md:mx-auto mx-3  md:w-[852px] md:leading-10 md:h-[72px]  border border-strokegreen-color rounded-md md:rounded-xl">
          <h1 className="text-lg md:text-13xl font-semibold font-inherit leading-7 md:leading-10">
            Change Password
          </h1>
          <img
            src={Above}
            alt=""
            className="w-5 h-5 md:w-7 md:h-7 object-contain "
            onClick={onBtnClick}
            style={{ transform: `rotate(${rotation}deg)` }}
          />
        </section>

          {/* personal details */}
          {showDetails && (
            <section className="mx-3 md:mx-auto my-2  md:w-[852px]  md:h-fit  border border-strokegreen-color rounded-xl">
              {/* 1nd */}
              <section className="my-3">
              <section className="flex items-center justify-between px-1 md:px-2 gap-2 md:gap-0 ">
                <h1 className=" text-lg md:text-13xl font-inherit font-semibold leading-7">
                Current password
                </h1>
                <input
                  type="password"
                  className=" pl-1 rounded-sm md:pl-3 md:rounded-lg left-[268px]  md:leading-10 border outline-none border-grey-color w-28 md:w-[444px]  h-7 md:h-[51px] top-6 text-md md:text-5xl text-black font-normal font-inherit"
                />
                <p className="font-sans text-md md:text-5xl leading-7 text-dark-green-color font-semibold">Forgot?</p>
              </section>

              {/* 2rd */}
              <section className="flex items-center  px-1 mt-2 md:gap-16 md:px-3 leading-7">
                <h1 className=" text-lg md:text-13xl  font-inherit font-semibold leading-7">
                  New password
                </h1>
                <input
                  type="password"
                  className="md:ml-0 ml-4 mr-16 md:mr-0 pl-1 rounded-sm md:pl-3 md:rounded-lg border border-grey-color w-28 md:w-[444px] h-7  md:h-[51px] text-md md:text-5xl text-black font-normal font-inherit"
                />
              </section>

              {/* 3rd */}
              <section className="flex items-center  gap-1 px-1 mt-2 md:gap-4 md:md:px-3">
                <h1 className=" text-lg  md:text-13xl  font-inherit font-semibold leading-7">
                  Re-type password
                </h1>
                <input
                  type="password"
                  className="md:ml-0 ml-4 mr-16 px-2 md:mr-0 pl-1 rounded-sm md:pl-3 md:rounded-lg border  border-grey-color w-28 md:w-[444px] h-7  md:h-[51px] text-md md:text-5xl text-black font-normal font-inherit"
                />
              </section>
              {/* make changes in bg */}
          <Link to="/SentCode">    <section className="">
                <button className=" text-dark-green-color px-3 md:px-16 py-2 md:py-5 block mx-auto [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))] text-xl md:text-5xl font-semibold leading-7  border-solid border border-Lightgreen my-5 rounded-lg md:rounded-2xl ">
                  Change Password
                </button>
              </section></Link>
              {/* make changes in bg */}
            </section>
          </section>
          )}
        </section>
    </>
  );
};

export default Password;
