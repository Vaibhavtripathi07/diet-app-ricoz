import React, { useState } from "react";
import Date from "../../../asset/date.png";
import previous from "../../../asset/previous.png";
import Sidebar from "../../ProPic/Sidebar";
import Nav from "../../Top_Nav/Nav";
import next from "../../../asset/next.png";
import Delete from "../../../asset/Delete.png";

const data = [
  {
    id: 1,
    // morning: "",
    day: "../../../asset/morning.png",
    Edit: "../../../asset/Edit.png",
    label: "Morning",
    medicines: [],
  },
  {
    id: 2,
    day: "../../../asset/afternoon.png",
    Edit: "../../../asset/Edit.png",
    label: "Afternoon",
    medicines: [],
  },
  {
    id: 3,
    day: "../../../asset/evening.png",
    Edit: "../../../asset/Edit.png",
    label: "Evening",
    medicines: [],
  },
  {
    id: 4,
    day: "../../../asset/night.png",
    Edit: "../../../asset/Edit.png",
    label: "Night",
    medicines: [],
  },
];

// medicine card

const MedicineCard = ({ data, onEdit, onDelete }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [medicineName, setMedicineName] = useState("");
  // medicine card

  const handleEdit = () => {
    setModalOpen(true);
  };

  const handleAddMedicine = () => {
    // Add medicine to the list
    onEdit(data.id, medicineName);

    // Close the modal
    setModalOpen(false);

    // Clear the input
    setMedicineName("");
  };

  const handleDeleteMedicine = (index) => {
    // Delete medicine from the list
    onDelete(data.id, index);
  };

  // medicine return

  return (
    <div className=" relative w-[344px] h-[240px] right-[50px]">
      <div className="bg-white p-4 rounded-lg shadow-md ">
        <h2 className="font-sans text-13xl text-black leading-7 font-semibold ">
          <span>
            <img src={data.day} alt="" />
          </span>
          {data.label}
        </h2>

        {/* Display the day image */}
        {/* <img src={morning} alt={data.label} className="mb-2" /> */}

        <ul>
        {data.medicines.map((medicine, index) => (
    <li key={index} className="flex items-center justify-between mb-2">
      <span>{medicine}</span>
      <span>{}</span>
      <button
        onClick={() => handleDeleteMedicine(index)}
        className="text-red-500 hover:text-red-700"
      >
        <img src={Delete} className="w-[25px] h-[30px]" alt="" />
      </button>
    </li>
  ))}
        </ul>

        <button
          onClick={handleEdit}
          className="mt-4 bg-blue-500 text-black rounded-full"
        >
          Add Medicine
        </button>
        {/* medicine return */}

        {/* modal */}
        {/* modal */}
        {modalOpen && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-4">Add Medicine</h2>
              <input
                type="text"
                value={medicineName}
                onChange={(e) => setMedicineName(e.target.value)}
                placeholder="Medicine name"
                className="border border-gray-300 p-2 mb-4 w-full"
              />
              <button
                onClick={handleAddMedicine}
                className="bg-blue-500 text-black px-3 py-1 rounded-full"
              >
                Add
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
{
  /* modal */
}
const MedicineTracker = () => {
  const [medicinesData, setMedicinesData] = useState(data);

  const handleEdit = (id, medicine) => {
    const updatedData = medicinesData.map((item) =>
      item.id === id
        ? { ...item, medicines: [...item.medicines, medicine] }
        : item
    );
    setMedicinesData(updatedData);
  };

  const handleDelete = (id, index) => {
    const updatedData = medicinesData.map((item) =>
      item.id === id
        ? { ...item, medicines: item.medicines.filter((_, i) => i !== index) }
        : item
    );
    setMedicinesData(updatedData);
  };
  return (
    <div className="relative w-[1512px] h-[1286px] overflow-hidden font-sans bg-whitesmoke xl:w-full">
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
        Medicine Trackers
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
      {/* middle card section */}
      {/* <section classname="container mx-auto grid grid-cols-4 gap-5 w-[344px] h-[240px]"> */}
      <section className="container absolute left-[514px] top-[317px] mx-auto  ">
        <section className="grid grid-rows-2 grid-cols-2 ">
          {medicinesData.map((data) => (
            <MedicineCard
              key={data.id}
              data={data}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </section>
      </section>

      {/* middle card section */}

      {/* bottom section */}
      <section className=" absolute left-[660px] top-[939px] bg-[#E7FFE7] rounded-xl shadow-md w-[524px] h-[264px] ">
        <h2 className="absolute left-[179px] top-[12px] text-dark-green-color text-[20px] font-semibold leading-6 font-inherit">
          Medicine Tracker
        </h2>
        <section className="med_routine flex pt-[66px] justify-evenly ">
          <p className="font-inherit text-dark-green-color text-[18px]">
            Morning
          </p>
          <p className="font-inherit text-dark-green-color text-[18px]">
            Afternoon
          </p>
          <p className="font-inherit text-dark-green-color text-[18px]">
            Evening
          </p>
          <p className="font-inherit text-dark-green-color text-[18px]">
            Night
          </p>
        </section>
        <section className="took/skip flex pt-[24px] justify-evenly ">
          <p className="font-inherit text-dark-green-color text-base">Took</p>
          <p className="font-inherit text-dark-green-color text-base">Took</p>
          <p className="font-inherit text-dark-green-color text-base">
            <span>
              <input
                type="radio"
                id="med"
                name="med1"
                className="cursor-pointer accent-dark-greencolor"
              />
              Take
            </span>
            <br />
            <span>
              <input
                type="radio"
                name="med1"
                id="med"
                className="cursor-pointer"
              />
              Skip
            </span>
          </p>
          <p className="font-inherit text-dark-green-color text-base">
            <span>
              <input type="radio" name="med2" />
              Take
            </span>
            <br />
            <span>
              <input type="radio" name="med2" />
              Skip
            </span>
          </p>
        </section>
        {/* svg */}
        <section className="absolute left-[143px] top-[186px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="258"
            height="80"
            viewBox="0 0 258 80"
            fill="none"
          >
            <g filter="url(#filter0_d_1481_394)">
              <rect
                x="10"
                y="70"
                width="60"
                height="238"
                rx="16"
                transform="rotate(-90 10 70)"
                fill="#E1F9E1"
              />
              <rect
                x="10.5"
                y="69.5"
                width="59"
                height="237"
                rx="15.5"
                transform="rotate(-90 10.5 69.5)"
                stroke="#93BE79"
              />
            </g>
            <path
              d="M64.251 62.8574V17.1431"
              stroke="#E8E8E8"
              stroke-width="2.03676"
              stroke-linecap="round"
            />
            <path
              d="M129 62.8574V17.1431"
              stroke="#E8E8E8"
              stroke-width="2.03676"
              stroke-linecap="round"
            />
            <path
              d="M193.749 62.8574V17.1431"
              stroke="#E8E8E8"
              stroke-width="2.03676"
              stroke-linecap="round"
            />
            <path
              d="M36.498 61.4287C27.6615 61.4287 20.498 54.2653 20.498 45.4287L20.498 34.5716C20.498 25.735 27.6615 18.5716 36.498 18.5716H49.748C51.9572 18.5716 53.748 20.3624 53.748 22.5716V57.4287C53.748 59.6379 51.9572 61.4287 49.748 61.4287H36.498Z"
              fill="#3EAC71"
            />
            <path
              d="M82.749 61.4287C78.9778 61.4287 77.0922 61.4287 75.9206 60.2571C74.749 59.0856 74.749 57.1999 74.749 53.4287V26.5716C74.749 22.8003 74.749 20.9147 75.9206 19.7431C77.0922 18.5716 78.9778 18.5716 82.749 18.5716H110.499C114.27 18.5716 116.156 18.5716 117.327 19.7431C118.499 20.9147 118.499 22.8003 118.499 26.5716V53.4287C118.499 57.1999 118.499 59.0856 117.327 60.2571C116.156 61.4287 114.27 61.4287 110.499 61.4287H82.749Z"
              fill="#3EAC71"
            />
            <defs>
              <filter
                id="filter0_d_1481_394"
                x="0"
                y="0"
                width="258"
                height="80"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1481_394"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1481_394"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </section>
        {/* svg */}
        {/* <section className="absolute left-[143px] top-[186px] w-[60px] h-[238px] border-strokegreen-color"></section> */}
      </section>
      {/* bottom section */}
      {/* main */}
    </div>
  );
};

export default MedicineTracker;
