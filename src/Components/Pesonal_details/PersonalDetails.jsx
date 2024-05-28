


import { useCallback } from "react";
import profile_picture from "../../asset/profile_picture.png"
import Edit from "../../asset/Edit.png"
import upward_arrow from "../../asset/upward_arrow.png"
import Nav from "../Top_Nav/Nav";

const ProPic = () => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "LANDING" to the project
  }, []);

  const onGroupContainer3Click = useCallback(() => {
    // Please sync "Personal Details" to the project
  }, []);

  const onGroupContainer5Click = useCallback(() => {
    // Please sync "change passwrd" to the project
  }, []);

  const onGroupContainer7Click = useCallback(() => {
    // Please sync "activate meal plan" to the project
  }, []);

  const onGroupContainer9Click = useCallback(() => {
    // Please sync "unit measurement" to the project
  }, []);

  const onGroupClick = useCallback(() => {
    // Please sync "change pic?" to the project
  }, []);

  return (
    <div className="relative bg-whitesmoke w-full h-[1286px] overflow-hidden text-left text-xl text-text-black-color font-sans">
      <div className="absolute top-[0px] left-[0px] bg-beige w-[394px] h-[1286px]" />
      <img
        className="absolute top-[168px] left-[122px] rounded-3xl w-[150px] h-[150px] object-cover"
        alt=""
        src={profile_picture}
      />
      <img
        className="absolute top-[315px] left-[851px] rounded-3xl w-[204px] h-[204px] object-cover"
        alt=""
        src={profile_picture}
      />

      <div className="absolute top-[340px] left-[136px] text-5xl leading-[120%] font-semibold inline-block w-[122px]">
        Yor Forger
      </div>
      <div className="absolute top-[546px] left-[892px] text-5xl leading-[120%] font-semibold inline-block w-[122px]">
        Yor Forger
      </div>
      <div className="absolute top-[170px] left-[458px] text-[36px] leading-[120%] font-semibold text-dark-green-color">
        User Account
      </div>
      <div className="absolute top-[224px] left-[458px] text-5xl leading-[120%] text-grey-color">
        Tuesday, July 25, 2023
      </div>
      <div className="absolute top-[0px] left-[0px] shadow-[0px_2px_8px_rgba(0,_0,_0,_0.07)] w-[1512px] h-32 text-5xl text-dark-green-color">
        <div className="absolute top-[0px] left-[0px] bg-whitesmoke w-[756px] h-32" />
        <div className="absolute top-[0px] left-[756px] bg-beige w-[756px] h-32" />
        <div
          className="absolute top-[17px] left-[56px] w-[132px] h-[94px] cursor-pointer text-center text-[35.22px] text-black font-roboto-flex"
          onClick={onGroupContainerClick}
        >
          <div className="absolute top-[0px] left-[0px] leading-[150.19%] inline-block w-[124.67px] h-[59.68px]">
            <i>stay</i>
            <i className="text-[52.83px] font-roboto">FIT</i>
          </div>
          <img
            className="absolute top-[65.65px] left-[5.87px] w-[126.13px] h-[28.35px]"
            alt=""
            src="/vector-5.svg"
          />
          <img
            className="absolute top-[55.47px] left-[108.26px] w-[11.68px] h-[20.58px]"
            alt=""
            src="/vector-6.svg"
          />
          <img
            className="absolute top-[73.66px] left-[109.59px] w-[22.52px] h-[10.04px]"
            alt=""
            src="/vector-7.svg"
          />
        </div>
        {/* <div className="absolute top-[47px] left-[calc(50%_+_580px)] leading-[156.23%] font-semibold">
          My Account
        </div>
        <div className="absolute top-[47px] left-[calc(50%_-_298px)] w-[595px] h-[37px]">
          <div className="absolute top-[0px] left-[calc(50%_-_297.5px)] w-[595px] h-[37px]">
            <div className="absolute top-[0px] left-[calc(50%_+_235.5px)] leading-[156.23%] font-semibold">
              Store
            </div>
            <div className="absolute top-[0px] left-[calc(50%_-_297.5px)] leading-[156.23%] font-semibold">
              Home
            </div>
            <div className="absolute top-[0px] left-[calc(50%_+_38.5px)] leading-[156.23%] font-semibold">
              Who we are
            </div>
            <div className="absolute top-[0px] left-[130px] w-[146px] h-[37px]">
              <div className="absolute top-[0%] left-[0%] leading-[156.23%] font-semibold">
                Our Services
              </div>
            </div>
          </div>
        </div> */}
        {/* nav */}
        <Nav/>
        {/* nav */}
      </div>
      <div className="absolute top-[869px] left-[93px] rounded-[60px] bg-whitesmoke w-[342px] h-[74px]" />
      <div className="absolute top-[462px] left-[118px] leading-[120%] font-semibold inline-block w-[115px]">
        Overview
      </div>
      <div className="absolute top-[534px] left-[118px] leading-[120%] font-semibold inline-block w-[139px]">
        Food Log
      </div>
      <div className="absolute top-[678px] left-[118px] leading-[120%] font-semibold inline-block w-[91px]">
        Trackers
      </div>
      <div className="absolute top-[750px] left-[118px] leading-[120%] font-semibold inline-block w-[186px]">
        My Appointments
      </div>
      <div className="absolute top-[822px] left-[118px] leading-[120%] font-semibold inline-block w-[109px]">
        My Orders
      </div>
      <div className="absolute top-[606px] left-[118px] leading-[120%] font-semibold inline-block w-[173px]">
        My Meal Plan
      </div>
      <div className="absolute top-[894px] left-[118px] leading-[120%] font-semibold text-dark-green-color inline-block w-[139px]">
        User Account
      </div>
      <div className="absolute top-[581px] left-[calc(50%_+_104px)] text-[18px] leading-[156.23%] text-grey-color">
        Joined on Jun 30, 2023
      </div>
      <div className="absolute top-[689px] left-[515px] w-[852px] h-[72px] text-13xl">
        <div className="absolute top-[-1px] left-[-1px] rounded-xl bg-whitesmoke box-border w-[854px] h-[74px] border-[1px] border-solid border-darkseagreen" />
        <div className="absolute top-[15.28%] left-[2.11%] leading-[156.23%] font-semibold">
          Personal details
        </div>
        <div
          className="absolute top-[24px] left-[834px] w-[22px] h-[29px] [transform:_rotate(90deg)] [transform-origin:0_0] cursor-pointer"
          onClick={onGroupContainer3Click}
        >
          <div className="absolute top-[0px] left-[0px] bg-whitesmoke w-[22px] h-[29px] [transform:_rotate(90deg)] [transform-origin:0_0]" />
          {/* <img
            className="absolute top-[7.5px] left-[-22.5px] w-[15px] h-[11px]"
            alt=""
            src={upward_arrow}
          /> */}
        </div>
      </div>
      <div className="absolute top-[803px] left-[515px] w-[852px] h-[72px] text-13xl">
        <div className="absolute top-[-1px] left-[-1px] rounded-xl bg-whitesmoke box-border w-[854px] h-[74px] border-[1px] border-solid border-darkseagreen" />
        <div className="absolute top-[15.28%] left-[2.11%] leading-[156.23%] font-semibold">
          Change Password
        </div>
        <div
          className="absolute top-[24px] left-[834px] w-[22px] h-[29px] [transform:_rotate(90deg)] [transform-origin:0_0] cursor-pointer"
          onClick={onGroupContainer5Click}
        >
          <div className="absolute top-[0px] left-[0px] bg-whitesmoke w-[22px] h-[29px] [transform:_rotate(90deg)] [transform-origin:0_0]" />
          {/* <img
            className="absolute top-[7.5px] left-[-22.5px] w-[15px] h-[11px]"
            alt=""
            src={upward_arrow}
          /> */}
        </div>
      </div>
      <div className="absolute top-[917px] left-[515px] w-[852px] h-[72px] text-13xl">
        <div className="absolute top-[-1px] left-[-1px] rounded-xl bg-whitesmoke box-border w-[854px] h-[74px] border-[1px] border-solid border-darkseagreen" />
        <div className="absolute top-[15.28%] left-[2.11%] leading-[156.23%] font-semibold">
          Active Meal Plan
        </div>
        <div
          className="absolute top-[24px] left-[834px] w-[22px] h-[29px] [transform:_rotate(90deg)] [transform-origin:0_0] cursor-pointer"
          onClick={onGroupContainer7Click}
        >
          <div className="absolute top-[0px] left-[0px] bg-whitesmoke w-[22px] h-[29px] [transform:_rotate(90deg)] [transform-origin:0_0]" />
          {/* <img
            className="absolute top-[7.5px] left-[-22.5px] w-[15px] h-[11px]"
            alt=""
            src={upward_arrow}
          /> */}
        </div>
      </div>
      <div className="absolute top-[1031px] left-[515px] w-[852px] h-[72px] text-13xl">
        <div className="absolute top-[-1px] left-[-1px] rounded-xl bg-whitesmoke box-border w-[854px] h-[74px] border-[1px] border-solid border-darkseagreen" />
        <div className="absolute top-[15.28%] left-[2.11%] leading-[156.23%] font-semibold">
          Units of Measurement
        </div>
        <div
          className="absolute top-[24px] left-[834px] w-[22px] h-[29px] [transform:_rotate(90deg)] [transform-origin:0_0] cursor-pointer"
          onClick={onGroupContainer9Click}
        >
          <div className="absolute top-[0px] left-[0px] bg-whitesmoke w-[22px] h-[29px] [transform:_rotate(90deg)] [transform-origin:0_0]" />
          {/* <img
            className="absolute top-[7.5px] left-[-22.5px] w-[15px] h-[11px]"
            alt=""
            src={upward_arrow}
          /> */}
        </div>
      </div>
      <img
        className="absolute top-[479px] left-[1023px] w-[60px] h-[60px] cursor-pointer"
        alt=""
        src="/group-934.svg"
        onClick={onGroupClick}
      />
    </div>
  );
};

export default ProPic;
