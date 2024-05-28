import React, { useState, useRef } from "react";
//  import Profile_picture from "../../asset/Profile_picture.png"
import Above from "../../asset/Above.png";
import Edit from "../../asset/Edit.png";
import Editable from "../Pesonal_details/Editable";
import rating from "../../asset/rating.png";
import UnitMeasurement from "../UnitMeasurement/UnitMeasurement";
import { Link } from "react-router-dom";

// import Nav from '../Top_Nav/Nav'
// import Sidebar from '../ProPic/Sidebar'

const Accordion = () => {
  const [rotation, setRotation] = useState(0);
  const [rotat, setRotat] = useState(0);
  const [rotate, setRotate] = useState(0);
  const [showDetails, setShowDetails] = useState(true);
  const [showDetail, setShowDetail] = useState(false);
  const [show, setShow] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const inputRef = useRef(null); //We use the useRef hook to create a reference to the input element (inputRef) ,
  //When the button is clicked (handleButtonClick), it sets isInputFocused to true and focuses on the input element using inputRef.current.focus().
  const [isEditing, setIsEditing] = useState(false);
  const [weight, setWeight] = useState("55 kg");
  const [height, setHeight] = useState("170 cm");
  const [Email, setEmail] = useState(" yorf123@abc.com");
  const [name, setName] = useState("Yor Forger");
  const [editedHeight, setEditedHeight] = useState("");
  const [editedEmail, setEditedEmail] = useState("");
  const [editedWeight, setEditedWeight] = useState("");
  const [editedName, setEditedName] = useState("");
  const [isChecked, setIsChecked] = useState(true);
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const weightInputRef = useRef(null);
  const heightInputRef = useRef(null);

  const onBtnClick = () => {
    // Toggle between original position (0 degrees) and top position (180 degrees)
    const newRotation = rotation === 0 ? 180 : 0;
    setRotation(newRotation);
    setShowDetails(!showDetails);
    // Show/hide details based on the rotation
    //  setShowDetails(!showDetails);
    // }, [rotation, showDetails];
  };
  const onBtnClick1 = () => {
    // Toggle between original position (0 degrees) and top position (180 degrees)
    const newRotate = rotate === 0 ? 180 : 0;
    setRotate(newRotate);
    setShow(!show);
    // Show/hide details based on the rotation
    //  setShowDetails(!showDetails);
    // }, [rotation, showDetails];
  };
  const onBtnClick2 = () => {
    // Toggle between original position (0 degrees) and top position (180 degrees)
    const newRotat = rotat === 0 ? -180 : 0;
    setRotat(newRotat);
    setShowDetail(!showDetail);
    // Show/hide details based on the rotation
    //  setShowDetails(!showDetails);
    // }, [rotation, showDetails];
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setEditedWeight(weight);
    setEditedHeight(height);
    setEditedEmail(Email);
    setEditedName(name);
    setIsInputFocused(true);
    nameInputRef.current.focus(); // Focus on the name input field
  };

  const handleDoneClick = () => {
    setIsEditing(false);
    setWeight(editedWeight);
    setHeight(editedHeight);
    setName(editedName);
    setEmail(editedEmail);
    setIsInputFocused(false);
  };
  return (
    <div className="overflow-hidden w-[1512px] h-[1286px]   text-left text-5xl  font-sans xl:w-full">
      {/* section personal */}
      {/* Personal details section */}
      <section>
        <section className="absolute w-[852px] leading-[48px] h-[72px] left-[515px] top-[689px] border border-strokegreen-color rounded-xl">
          <h1 className="absolute left-[18px] top-[11px] text-13xl font-semibold font-inherit leading-[50px]">
            Personal details
          </h1>
          <img
            src={Above}
            alt=""
            className="absolute left-[808px] top-[24px]"
            onClick={onBtnClick}
            style={{ transform: `rotate(${rotation}deg)` }}
          />
        </section>

        {/* personal details */}
        {showDetails && (
          <section className="absolute w-[852px] leading-[48px] h-auto left-[515px] top-[773px] border border-strokegreen-color rounded-xl">
            {/* 1st */}
            <section>
              <h1 className="absolute left-[18px] top-6 text-[26px] font-inherit font-semibold leading-[40px]">
                Full Name
              </h1>
              {/* <p className='absolute left-[177px] leading-[37px] top-[26px] text-5xl text-black font-normal font-inherit' >Yor Forger</p>
        <img src={Edit} alt="" className='absolute left-[811px] w-[23px] h-[18px] top-[37px] '  /> */}
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={editedName}
                    ref={inputRef}
                    onChange={(e) => setEditedName(e.target.value)}
                    className={
                      isInputFocused
                        ? " absolute focus:border focus:border-black left-[177px] leading-[37px] top-[26px] text-5xl text-black font-normal font-inherit"
                        : "border-2"
                    }
                  />
                  <button
                    onClick={handleDoneClick}
                    className="absolute left-[778px] top-[37px] text-dark-green-color font-inherit font-5xl font-semibold leading-[37px]"
                  >
                    Done
                  </button>
                </>
              ) : (
                <>
                  <p className="absolute left-[177px] leading-[37px] top-[26px] text-5xl text-black font-normal font-inherit">
                    {name}
                  </p>
                  <img
                    src={Edit}
                    alt=""
                    className="absolute left-[811px] w-[23px] h-[18px] top-[37px] "
                    onClick={handleEditClick}
                  />
                </>
              )}
            </section>
            {/* 2nd */}
            <section>
              <h1 className="absolute left-[18px] top-[97px] text-[26px] font-inherit font-semibold leading-[40px]">
                Contact
              </h1>
              <p className="absolute left-[165px] leading-[37px] top-[99px] text-5xl text-black font-normal font-inherit">
                <Editable initialValue="+91 1122339900" />
              </p>
              <img
                src={Edit}
                alt=""
                className="absolute left-[811px] w-[23px] h-[18px] top-[110px] "
                onClick={handleEditClick}
              />
            </section>

            {/* 3rd */}
            <section>
              <h1 className="absolute left-[18px] top-[170px] text-[26px] font-inherit font-semibold leading-[40px]">
                Email ID
              </h1>
              {isEditing ? (
                <>
                  {/* <input
                  type="text"
                  value={editedEmail}
                  ref={emailInputRef}
                  onChange={(e) => setEditedEmail(e.target.value)}
                  className={
                    isInputFocused
                      ? "absolute focus:border focus:border-black left-[177px] leading-[37px] top-[172px] text-5xl text-black font-normal font-inherit"
                      : "border-2"
                  }
                />
                <button
                  onClick={handleDoneClick}
                  className="absolute left-[778px] w-[23px] h-[18px] top-[183px] text-dark-green-color font-semibold"
                >
                  Done
                </button>
              </>
            ) : (
              <>
                <p className="absolute left-[177px] leading-[37px] top-[172px] text-5xl text-black font-normal font-inherit">
                  {Email}
                </p>
                <img
                  src={Edit}
                  alt=""
                  className="absolute left-[811px] w-[23px] h-[18px] top-[183px] "
                  onClick={handleEditClick}
                /> */}

                  <input
                    type="text"
                    value={editedEmail}
                    ref={inputRef}
                    onChange={(e) => setEditedEmail(e.target.value)}
                    className={
                      isInputFocused
                        ? "absolute focus:border focus:border-black left-[177px] leading-[37px] top-[183px] text-5xl text-black font-normal font-inherit"
                        : "border-2"
                    }
                  />
                  <button
                    onClick={handleDoneClick}
                    className="absolute left-[778px] top-[172px] text-dark-green-color font-inherit font-5xl font-semibold leading-[37px]"
                  >
                    Done
                  </button>
                </>
              ) : (
                <>
                  <p className="absolute left-[177px] leading-[37px] top-[172px] text-5xl text-black font-normal font-inherit">
                    {Email}
                  </p>
                  <img
                    src={Edit}
                    alt=""
                    className="absolute left-[811px] w-[23px] h-[18px] top-[183px]  "
                    onClick={handleEditClick}
                  />
                </>
              )}
            </section>
            {/* 4th */}
            <section>
              <h1 className="absolute left-[18px] top-[243px] text-[26px] font-inherit font-semibold leading-[40px]">
                Birth date
              </h1>
              <p className="absolute left-[177px] leading-[37px] top-[245px] text-5xl text-black font-normal font-inherit">
                November 9,1999
              </p>
              <img
                src={Edit}
                alt=""
                className="absolute left-[811px] w-[23px] h-[18px] top-[256px] "
              />
            </section>
            {/* 5th */}
            <section>
              <h1 className="absolute left-[18px] top-[316px] text-[26px] font-inherit font-semibold leading-[40px]">
                Weight
              </h1>
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={editedWeight}
                    ref={inputRef}
                    onChange={(e) => setEditedWeight(e.target.value)}
                    className={
                      isInputFocused
                        ? "absolute focus:border focus:border-black left-[177px] leading-[37px] top-[318px] text-5xl text-black font-normal font-inherit"
                        : "border-2"
                    }
                  />
                  <button
                    onClick={handleDoneClick}
                    className="absolute left-[778px] top-[318px] text-dark-green-color font-inherit font-5xl font-semibold leading-[37px]"
                  >
                    Done
                  </button>
                </>
              ) : (
                <>
                  <p className="absolute left-[177px] leading-[37px] top-[318px] text-5xl text-black font-normal font-inherit">
                    {weight}
                  </p>
                  <img
                    src={Edit}
                    alt=""
                    className="absolute left-[811px] w-[23px] h-[18px] top-[329px]  "
                    onClick={handleEditClick}
                  />
                </>
              )}
            </section>

            {/* 6th */}
            <section>
              <h1 className="absolute left-[18px] top-[389px] text-[26px] font-inherit font-semibold leading-[40px]">
                Height
              </h1>
              {isEditing ? (
                <>
                  {/* <input
                  type="text"
                  value={editedHeight}
                  ref={heightInputRef}
                  onChange={(e) => setEditedHeight(e.target.value)}
                  className={
                    isInputFocused
                      ? "absolute left-[177px] leading-[37px] top-[391px] text-5xl text-black font-normal font-inherit"
                      : "border-2"
                  }
                />
                <button
                  onClick={handleDoneClick}
                  className="absolute focus:border focus:border-black left-[778px] w-[23px] h-[18px] top-[402px] text-dark-green-color font-semibold"
                >
                  Done
                </button>
              </>
            ) : (
              <>
                <p className="absolute left-[177px] leading-[37px] top-[391px] text-5xl text-black font-normal font-inherit">
                  {height}
                </p>
                <img
                  src={Edit}
                  alt=""
                  className="absolute left-[811px] w-[23px] h-[18px] top-[402px] "
                  onClick={handleEditClick}
                /> */}

                  <input
                    type="text"
                    value={editedHeight}
                    ref={inputRef}
                    onChange={(e) => setEditedHeight(e.target.value)}
                    className={
                      isInputFocused
                        ? "absolute focus:border focus:border-black left-[177px] leading-[37px] top-[391px] text-5xl text-black font-normal font-inherit"
                        : "border-2"
                    }
                  />
                  <button
                    onClick={handleDoneClick}
                    className="absolute left-[778px] top-[402px] text-dark-green-color font-inherit font-5xl font-semibold leading-[37px]"
                  >
                    Done
                  </button>
                </>
              ) : (
                <>
                  <p className="absolute left-[177px] leading-[37px] top-[391px] text-5xl text-black font-normal font-inherit">
                    {height}
                  </p>
                  <img
                    src={Edit}
                    alt=""
                    className="absolute left-[811px] w-[23px] h-[18px] top-[402px]  "
                    onClick={handleEditClick}
                  />
                </>
              )}
            </section>
          </section>
        )}
      </section>
      {/* section personal */}

      {/* change pass */}
      {/* Personal details section */}
      <section className="absolute w-[852px] leading-[48px] h-[72px] left-[515px] top-[803px] border border-strokegreen-color rounded-xl">
        <h1 className="absolute left-[18px] top-[11px] text-13xl font-semibold font-inherit leading-[50px]">
          Change Password
        </h1>
        <img
          src={Above}
          alt=""
          className="absolute left-[808px] top-[24px]"
          onClick={onBtnClick1}
          style={{ transform: `rotate(${rotate}deg)` }}
        />
      </section>

      {/* personal details */}
      {show && (
        <section className="absolute w-[852px] leading-[48px] h-[454px] left-[515px] top-[885px] border border-strokegreen-color rounded-xl">
          {/* 1st */}
          <section>
            <h1 className="absolute left-[18px] top-[29px] text-[26px] font-inherit font-semibold leading-[40px]">
              Current Password
            </h1>
            <input
              type="text"
              className="absolute pl-3 rounded-lg left-[268px] leading-[37px] border border-grey-color w-[444px] h-[51px] top-[24px] text-5xl text-black font-normal font-inherit"
            />
            {/* <img src={Edit} alt="" className='absolute left-[811px] w-[23px] h-[18px] top-[37px] '  /> */}
            <Link to="/changePass">
              <p className="absolute text-dark-green-color text-5xl font-semibold leading-[37px] top-[31px] left-[747px] font-inherit ">
                Forgot?
              </p>
            </Link>
          </section>

          {/* 2nd */}
          <section>
            <h1 className="absolute left-[18px]  text-[26px] top-28 font-inherit font-semibold leading-[40px]">
              New Password
            </h1>
            <input
              type="text"
              className="absolute pl-3 rounded-lg left-[268px] leading-[37px] border border-grey-color w-[444px] h-[51px] top-[107px] text-5xl text-black font-normal font-inherit"
            />
          </section>

          {/* 3rd */}
          <section>
            <h1 className="absolute left-[18px]  text-[26px] top-[195px] font-inherit font-semibold leading-[40px]">
              Re-type password
            </h1>
            <input
              type="text"
              className="absolute pl-3 rounded-lg left-[268px] leading-[37px] border border-grey-color w-[444px] h-[51px] top-[190px] text-5xl text-black font-normal font-inherit"
            />
          </section>
          {/* make changes in bg */}
          <section>
            <button className="absolute text-dark-green-color px-[73px] py-[28px] bg-gradient-to-r bg-gradient-[93deg] from-[#AFE47E] to [#D8FAB9] text-5xl font-semibold leading-7 left-[324px] border-solid border border-[#CFF7AA] rounded-2xl  top-[329px]">
              Change Password
            </button>
          </section>
          {/* make changes in bg */}
        </section>
      )}
      {/* change pass */}

      {/* meal plan */}

      <section className="absolute w-[852px] leading-[48px] h-[72px] left-[515px] top-[917px] border border-strokegreen-color rounded-xl">
        <h1 className="absolute left-[18px] top-[11px] text-13xl font-semibold font-inherit leading-[50px]">
          Active Meal Plan
        </h1>
        <img
          src={Above}
          alt=""
          className="absolute left-[808px] top-[24px]"
          onClick={onBtnClick2}
          style={{ transform: `rotate(${rotat}deg)` }}
        />
      </section>
      {/* main section */}
      {showDetail && (
        <section className="absolute w-[852px] leading-[48px] h-[119px] left-[515px] top-[1000px] border border-strokegreen-color rounded-xl">
          <p className="absolute left-[18px] top-[24px] text-[26px] font-sans leading-10 font-semibold">
            Classic Meal Plan
          </p>
          <img
            src={rating}
            alt=""
            className="absolute left-[18px] top-[77px]"
          />
          <input
            type="radio"
            name="radio"
            id="radio"
            className="absolute top-[29px] left-[804px]  accent-dark-green-color w-[30px] h-[30px]"
            checked={isChecked}
            required={true}
            onChange={() => setIsChecked(!isChecked)}
          />
        </section>
      )}
      {/* meal plan */}
      {/*  */}

      {/* unit measurement */}

      {/* <UnitMeasurement /> */}
      {/* unit measurement */}
    </div>
  );
};

export default Accordion;



