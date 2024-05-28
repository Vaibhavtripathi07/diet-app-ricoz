import { useCallback, useState } from "react";
import Appoint_Doc from "../../asset/Appoint_Doc.png";
import rating from "../../asset/rating.png";
import date from "../../asset/date.png";
import time from "../../asset/time.png";
import Sidebar from "../ProPic/Sidebar";
import { Link } from "react-router-dom";


const Appointment_track = () => {
  const [isChecked, setIsChecked] = useState(true);

  const onGroupContainer3Click = useCallback(() => {
    // Please sync "Appinment overview" to the project
  }, []);

  return (
    <div className="max-w-full  min-h-screen bg-whitesmoke overflow-hidden font-sans">
      {/* sidebar */}
      <Sidebar />
      {/* sidebar */}

      {/* main */}
      <section className="main w-[calc(100%_-_20%)] float-right ">
        <section className=" flex flex-row mx-4 md:mx-8 justify-between items-center mt-24">
          <section>
            <h1 className="  font-inherit font-semibold text-dark-green-color text-xl md:text-13xl xl:text-17xl">
              My Appointments
            </h1>
            <p className="Date font-inherit  text-grey-color font-normal text-lg md:text-5xl xl:text-9xl ">
              Tuesday, July 25, 2023
            </p>
          </section>

          <section className="date">
            <img
              src={date}
              className=" w-6 h-6 md:h-10 md:w-10 object-contain "
              alt="date"
            />
          </section>
        </section>

        <section className="border-2 border-strokegreen-color mx-4 md:mx-0 bg-gray-200 shadow-md rounded-2xl my-10 md:m-10  px-1 h-fit md:h-56">
          <section className="Order_card flex flex-row items-center justify-start px-2 md:px-4 gap-2 md:gap-3  ">
            <section>
              <img
                src={Appoint_Doc}
                className=" w-20 h-16 rounded-lg md:rounded-2xl md:mt-2 md:h-[150px] object-contain md:w-[150px]"
                alt=""
              />
            </section>
            <section>
              <p className=" text-black text-center font-semibold font-inherit text-base leading-tight md:leading-10 overflow-hidden md:text-9xl xl:text-13xl ">
                Dr. Tony Chopper
              </p>
              <p className=" text-grey-color text-base leading-tight md:leading-7 md:text-9xl mt-2 xl:text-13xl font-normal ">
                Nutritionist
              </p>
              <img
                src={rating}
                className="w-20 h-5 md:w-20 md:h-7 xl:w-20 xl:h-10 object-contain"
                alt="rating"
              />
            </section>
          </section>
          <section className="flex my-5 flex-row items-center justify-around flex-wrap mt-2 md:mt-0  md:px-4  md:justify-between  md:float-right w-[calc(100%_-_23%) md:w-[calc(100%_-_15%)] xl:w-[calc(100%_-_15%)] ">
            {/* order placing date & put logic here */}
        
            <section className="flex flex-row gap-3 items-center">
              <img src={date} alt="date" />
              <p className="text-sm md:text-lg xl:text-xl  text-black font-inherit font-semibold">
                09/07/2023
              </p>
            </section>

            <section className="flex flex-row gap-3 items-center">
              <img src={time} alt="date" className=""  />
              <p className="text-sm md:text-lg xl:text-xl  text-black font-inherit font-semibold">
                13:30 PM
              </p>
            </section>


            {/* order placing date & put logic here */}
            {/* input_radio btn for confirm */}
            <Link to="/OrderOverview">
              <section className="flex items-center gap-2 mr-2">
                <input
                  className="cursor-pointer h-5 w-5 md:w-5 md:h-5 accent-dark-green-color "
                  required={true}
                  checked={isChecked}
                  id="confirm_radio"
                  type="radio"
                  onChange={() => setIsChecked(!isChecked)}
                />
                <p className="text-black font-inherit text-sm md:text-5xl xl:text-5xl font-normal  leading-7 cursor-pointer">
                  Confirmed
                </p>
                {/* input_radio btn for confirm */}
              </section>
            </Link>
          </section>
        </section>
      </section>

      {/* main */}
    </div>
  );
};

export default Appointment_track;
