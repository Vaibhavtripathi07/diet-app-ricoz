import React, { useState } from "react";
// import Profile_picture from "../../asset/Profile_picture.png";
import Above from "../../asset/Above.png";
import Edit from "../../asset/Edit.png";
import { Link } from "react-router-dom";
import Nav from "../Top_Nav/Nav";
import Sidebar from "../ProPic/Sidebar";
import PersonalHeader from "../Pesonal_details/PersonalHeader";

const ChangePassword = () => {
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
    <div className="max-w-full min-h-screen overflow-hidden">
      {/* sidebar */}
      <Sidebar />
      {/* sidebar */}
      <section className="main w-[calc(100%_-_20%)] float-right ">
        <PersonalHeader />
        
        <section className=" flex items-center justify-between flex-row px-1  md:px-3 md:mx-auto mx-3  md:w-[852px] md:leading-10 md:h-[72px]  border border-strokegreen-color rounded-md md:rounded-xl">
          <h1 className="text-lg md:text-13xl font-semibold font-inherit leading-7 md:leading-10">
            Change Password
          </h1>
          <img
            src={Above}
            alt=""
            className="w-5 h-5 md:w-7 md:h-7 object-contain"
            onClick={onBtnClick}
            style={{ transform: `rotate(${rotation}deg)` }}
          />
        </section>

          {/* personal details */}
          {showDetails && (
            <section className="mx-3 md:mx-auto my-2  md:w-[852px]  md:h-fit  border border-strokegreen-color rounded-xl">
              {/* 1nd */}
              <section className="my-3">
              <section className="flex items-center justify-between px-2 md:gap-14 md:px-3">
                <h1 className=" text-lg md:text-13xl font-inherit font-semibold leading-7">
                  New Password
                </h1>
                <input
                  type="password"
                  className=" pl-1 rounded-sm md:pl-3 md:rounded-lg left-[268px]  md:leading-10 border border-grey-color w-28 md:w-[444px]  h-7 md:h-[51px] top-6 text-md md:text-5xl text-black font-normal font-inherit"
                />
              </section>

              {/* 2rd */}
              <section className="flex items-center justify-between gap-1 px-2 mt-2 md:gap-14 md:md:px-3">
                <h1 className=" text-lg md:text-13xl  font-inherit font-semibold leading-7">
                  Re-type password
                </h1>
                <input
                  type="password"
                  className=" pl-1 rounded-sm md:pl-3 md:rounded-lg left-[268px]  border border-grey-color w-28 md:w-[444px] h-7  md:h-[51px] top-[107px] text-md md:text-5xl text-black font-normal font-inherit"
                />
              </section>
              {/* make changes in bg */}
              <section className="">
                <button className=" text-dark-green-color px-3 md:px-16 py-2 md:py-5 block mx-auto [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))] text-xl md:text-5xl font-semibold leading-7  border-solid border border-Lightgreen my-5 rounded-lg md:rounded-2xl ">
                  Change Password
                </button>
              </section>
              {/* make changes in bg */}
            </section>
          </section>
          )}
        </section>
    </div>
  );
};

export default ChangePassword;
