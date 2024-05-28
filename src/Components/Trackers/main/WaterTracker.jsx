/* The code is a React component called `WaterTracker` that represents a water tracking feature in a
web application. It imports various images and components from different file paths. */
import React, { useState } from "react";
import Date from "../../../asset/date.png";
import previous from "../../../asset/previous.png";
import water_meter from "../../../asset/water_meter.png";
import Sidebar from "../../ProPic/Sidebar";
import filled_water from "../../../asset/filled_water.png";
import unfilled_water from "../../../asset/unfilled_water.png";
import Nav from "../../Top_Nav/Nav";

const WaterTracker = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [filledCups, setFilledCups] = useState(Array(6).fill(true));

  const handleReset = () => {
    setFilledCups(Array(6).fill(false));
  };
  return (
    <div className="relative w-full h-[1286px] overflow-hidden font-sans bg-whitesmoke ">
      {/* Nav */}
      <Nav />
      {/* Nav */}

      {/* sidebar */}
      <Sidebar />
      {/* sidebar */}

      {/* main */}
      <img
        src={previous}
        alt=""
        className="absolute top-[178px] left-[436px]"
      />
      <h1 className="absolute left-[512px] top-[170px] text-dark-green-color font-semibold text-17xl font-inherit">
        Water Tracker
      </h1>
      <img
        src={Date}
        alt="date"
        height={40}
        width={40}
        className="absolute left-[1432px] top-[171px] w-[40px] h-[40px]"
      />
      <p className="absolute left-[512px] top-[224px] font-normal text-5xl text-grey-color leading-[28.8px] ">
        Tuesday, July 25, 2023
      </p>

      {/* steps left section */}
      <section>
        <p className="absolute left-[598px] top-[375px] text-black text-5xl leading-7 font-bold">
          1.6 litres
        </p>
        <p className="absolute left-[600px] top-[408px] rounded-full bg-[#3CD5F0] stroke-[#E3F5F4] stroke-1 w-[30px] h-[30px]">
          <span className="absolute text-black text-5xl font-normal leading-7 left-9">
            Drank
          </span>
        </p>
        <p className="absolute left-[582px] top-[489px] text-black text-5xl leading-7 font-bold">
          1.2 litres
        </p>
        <p className="absolute left-[566px] top-[522px] rounded-full bg-[#E3F5F4] border-[#3CD5F0] border w-[30px] h-[30px]">
          <span className="absolute text-black text-5xl font-normal leading-7 left-9 ">
            Remaining{" "}
          </span>
        </p>

        {/* water meter */}
        <img
          src={water_meter}
          alt=""
          className="absolute w-[260px] h-[260px] left-[823px] top-[317px] "
        />

        {/* water meter */}

        {/* water cup iteration */}

        {/* section 1 filled water */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 96px)",
            gap: "34px",
            position: "absolute",
            left: "580px",
            top: "735px",
          }}
        >
          {/* {filledCups.map((isFilled, index) => (
            <img
              key={index}
              src={isFilled ? filled_water : unfilled_water}
              alt={`water-cup-${index + 1}`}
              style={{ width: "96px", height: "118px" }}

              
            />
            
            
          ))} */}

          {filledCups.map((isFilled, index) => (
            <div key={index} style={{ position: "relative" }}>
              <img
                src={isFilled ? filled_water : unfilled_water}
                alt={`water-cup-${index + 1}`}
                style={{ width: "96px", height: "118px" }}
              />
              {!isFilled && (
                <span
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "24px",
                    color: "#1A92A7",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  +
                </span>
              )}
            </div>
          ))}

          {Array.from({ length: 6 }).map((_, index) => (
            <img
              key={index}
              src={filled_water}
              alt={`water-cup-${index + 1}`}
              style={{ width: "96px", height: "118px" }}
            />
          ))}
          {/* section 1 filled water */}
        </section>

        {/*section to display empty glass with plus  */}

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 96px)",
            gap: "34px",
            position: "absolute",
            left: "580px",
            top: "887px",
          }}
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={unfilled_water}
                alt={`water-cup-${index + 1}`}
                style={{ width: "96px", height: "118px" }}
              />
              <span
                style={{
                  marginTop: "-80px",
                  fontSize: "24px",
                  color: "#1A92A7",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                +
              </span>
            </div>
          ))}
        </section>

        {/* section 2 unfilled_water */}

        {/* water cup iteration */}

        <button
          className="absolute px-[73px] py-[28px] text-[#2C744D] font-sans font-semibold leading-7 rounded-[16px] border border-[#CFF7AA] left-[847px]  text-5xl bg-gradient-to-r bg-gradient-[93deg] from-[#AFE47E] to [#D8FAB9] top-[1101px]"
          onClick={handleReset}
        >
          Reset
        </button>
      </section>
      {/* steps left section */}

      {/* main */}
    </div>
  );
};
export default WaterTracker;
