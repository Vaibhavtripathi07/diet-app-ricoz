
import React ,{useState} from 'react'
import Date from "../../asset/Date.png"
import img_3 from "../../asset/img_3.png"
import rating from "../../asset/rating.png"
import previous from "../../asset/previous.png"
import Sidebar from '../ProPic/Sidebar'


const OrderOverview = () => {
    const [isChecked, setIsChecked] = useState(true);

  return (
    <div className="max-w-full  min-h-screen bg-whitesmoke overflow-hidden font-sans">


    {/* sidebar */}
    <Sidebar />
    {/* sidebar */}

    {/* main */}
    <section className="main  w-[calc(100%_-_20%)] float-right ">
    <section className=" flex justify-between items-baseline m-5">
    <section className="flex  items-center justify-center mt-20  flex-row gap-5  ">
    <img
      src={previous}
      className="w-4 h-4 md:w-6 md:h-6 object-contain"
      alt="previous"
    />
    <section>
    <h1 className="  font-inherit font-semibold text-dark-green-color text-xl md:text-13xl xl:text-17xl">
      My Orders
    </h1>
    <p className="Date font-inherit  text-grey-color font-normal text-lg md:text-5xl xl:text-9xl ">
      Tuesday, July 25, 2023
    </p>
    </section>
    </section>
    <section className="date">
      <img
        src={Date}
        className=" w-5 h-5 md:h-7 md:w-7 object-contain "
        alt="date"
      />
    </section>
    </section>

    <section className="Order_card flex flex-row border border-grayColor  shadow-md items-center justify-start px-4 gap-3">
      <section>
      <img
        src={img_3}
        className=" w-28 h-28 rounded-2xl md:h-[150px] object-contain md:w-[150px] md:rounded-[60px] border border-grey-color shadow-md"
        alt=""
      />
      </section>
      <section>
      <p className=" text-black text-center font-semibold font-inherit text-sm leading-7 overflow-hidden  md:text-9xl xl:text-13xl ">
        Muscle Blaze - Snack Bar
      </p>
      <p className=" text-grey-color text-15xl md:text-9xl xl:text-13xl  font-normal ">
        Product
      </p>
      <img
        src={rating}
        className="w-20 h-5 md:w-20 md:h-7 xl:w-20 xl:h-10 object-contain"
        alt="rating"
      />
      </section>
        </section>
<section className="flex my-5 flex-row items-center justify-between md:px-4  md:justify-between    md:float-right w-[calc(100%_-_23%) md:w-[calc(100%_-_15%)] xl:w-[calc(100%_-_15%)] ">
      {/* order placing date & put logic here */}
      <p className=" flex gap-0 md:gap-3  items-center text-sm md:text-lg xl:text-xl  text-black font-inherit font-semibold">
        Order Placed on{" "}
        <span>
          <img src={Date} alt="date" className="hidden md:block md:w-6 md:h-6 object-contain" />{" "}
        </span>
        31/07/2023
      </p>
      {/* order placing date & put logic here */}
      {/* input_radio btn for confirm */}
      <section className="flex items-center gap-2 mr-2">

        <input
          className="cursor-pointer h-5 w-5 md:w-5 md:h-5 accent-dark-green-color "
          required={true}
          checked={isChecked}
          id="confirm_radio"
          type="radio"
          onChange={() => setIsChecked(!isChecked)}
        />
        <p className="text-black font-inherit text-sm md:text-5xl xl:text-5xl font-normal  leading-7 cursor-pointer" >
          Confirmed
        </p>
        {/* input_radio btn for confirm */}
      </section>
      </section>

   
    {/* main */}

    </section>
  </div>
  );
}

export default OrderOverview;
