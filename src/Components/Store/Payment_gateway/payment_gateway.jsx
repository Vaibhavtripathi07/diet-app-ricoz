import { useState } from "react";
import Logo from "../../../asset/Logo.png";
// import Line from "../../asset/Line.png";
import Line from "../../../asset/Line.png";
import White_diamond from "../../../asset/White_diamond.png";
import Outlined_diamond from "../../../asset/Outlined_diamond.png";
import circle from "../../../asset/circle.png";
import upi from "../../../asset/upi.png";
import apple_pay from "../../../asset/apple_pay.png";
import paypal from "../../../asset/paypal.png";
import Debit_cards from "../../../asset/Debit_cards.png";
import { Link } from "react-router-dom";


const payment_gateway = () => {
  //   const [paymentMethod, setPaymentMethod] = useState("card");
  const [CardNumber, setCardNumber] = useState("");
  const [CardName, setCardName] = useState("");
  const [ExpiryDate, setExpiryDate] = useState("");
  const [Cvv, setCVV] = useState("");

  //   for handelling payment
  const handlePayment = (e) => {
    e.preventDefault();

    // You would typically send the payment data to your payment gateway here.
    // For demonstration purposes, we'll just log the data.
    console.log({
      CardNumber,
      CardName,
      ExpiryDate,
      Cvv,
    });
  };

  return (
    <div
      className=" bg-whitesmoke max-w-full min-h-[982px] overflow-hidden    font-sans placeholder:font-sans"
      id="payment_gateway"
    >
      {/* paymeny left section */}

      <div
        className=" top-[0px] left-[0px] [background:linear-gradient(191.3deg,_#e7ffd1,_#fef7b7)] w-1/4 h-screen"
        id="payment_left_side"
      >

          <img src={Logo} alt="logo" width={100} height={100} className="mx-auto" />

        <section className=" text-center text-darkgray">
          <h1
            className="  text-29xl tracking-[0.53em] leading-7 mx-3 mt-28 font-semibold font-inherit text-stroke-green-color "
            id="payment"
          >
            Payment
          </h1>
          <p
            className="top-[148px] left-[24px] font-semibold text-sm text-ellipsis mx-3 mt-36"
            id="about_payment"
          >
            We utilize industry-leading encryption and secure payment gateways
            to ensure that your payment information is protected at all times
          </p>
          <p
            className="text-sm text-ellipsis mx-10 font-semibold mt-16"
            id="about_pay_"
          >
            Your financial data is transmitted securely, keeping your
            transactions safe and confidential.
          </p>
        </section>
      </div>
      {/* paymeny left section */}

      {/* product_details_right_section */}

      {/* top 141 */}

      <div className="absolute top-[141px] left-[1022px] w-[400px] h-[700px]">
        <div className="relative [background:linear-gradient(165.17deg,_#2ea3c9,_#8870ce)] w-[400px] h-[700px]">
          <section
            className="absolute top-[141px] left-[1022px] rounded-2xl bg-seagreen w-[400px] h-[700px]"
            id="product_detail_section"
          />
          <img
            className="absolute top-[651.77px] left-[987px] rounded-[50%] w-[70px] h-[70px] object-cover"
            alt="half_circle_left"
            src={circle}
          />
          <img
            className="absolute top-[651.77px] left-[1387px] rounded-[50%] w-[70px] h-[70px] object-cover"
            alt="half_circle_right"
            src={circle}
          />
        </div>
        <div className="absolute h-[2.29%] w-[86%] top-[4.15%] right-[7%] bottom-[93.56%] left-[7%]">
          <img
            className="absolute h-[12.48%] w-[33.72%] top-[37.51%] right-[66.57%] bottom-[50.01%] left-[-0.29%] max-w-full overflow-hidden max-h-full object-cover"
            alt="line"
            src={Line}
          />
          <img
            className="absolute h-[12.48%] w-[33.72%] top-[37.51%] right-[-0.29%] bottom-[50.01%] left-[66.57%] max-w-full overflow-hidden max-h-full"
            alt="line"
            src={Line}
          />
          <img
            className="absolute h-[85.4%] w-[4.02%] top-[6.64%] right-[61.2%] bottom-[7.96%] left-[34.78%] rounded-sm max-w-full overflow-hidden max-h-full object-cover"
            alt="fill_diamond"
            src={White_diamond}
          />
          <img
            className="absolute h-[85.4%] w-[4.02%] top-[6.64%] right-[56.05%] bottom-[7.96%] left-[39.93%] rounded-sm max-w-full overflow-hidden max-h-full object-cover"
            alt="unfill_diamond"
            src={Outlined_diamond}
          />
          <img
            className="absolute h-[85.4%] w-[4.02%] top-[9.46%] right-[40%] bottom-[5.14%] left-[55.99%] rounded-sm max-w-full overflow-hidden max-h-full object-cover"
            alt="unfilled_diamond"
            src={Outlined_diamond}
          />
          <img
            className="absolute h-[85.4%] w-[4.02%] top-[5.14%] right-[34.92%] bottom-[9.46%] left-[61.07%] rounded-sm max-w-full overflow-hidden max-h-full object-cover"
            alt="filled_diamond"
            src={White_diamond}
          />
          <img
            className="absolute h-[31.25%] w-[1.45%] top-[37.5%] right-[53.2%] bottom-[31.25%] left-[45.35%] rounded-[50%] max-w-full overflow-hidden max-h-full object-cover"
            alt="circle"
            src={circle}
          />
          <img
            className="absolute h-[31.25%] w-[1.45%] top-[37.5%] right-[50.58%] bottom-[31.25%] left-[47.97%] rounded-[50%] max-w-full overflow-hidden max-h-full object-cover"
            alt="circle"
            src={circle}
          />
          <img
            className="absolute h-[31.25%] w-[1.45%] top-[37.5%] right-[47.67%] bottom-[31.25%] left-[50.87%] rounded-[50%] max-w-full overflow-hidden max-h-full object-cover"
            alt="circle"
            src={circle}
          />
          <img
            className="absolute h-[31.25%] w-[1.45%] top-[37.5%] right-[45.06%] bottom-[31.25%] left-[53.49%] rounded-[50%] max-w-full overflow-hidden max-h-full object-cover"
            alt="circle"
            src={circle}
          />
        </div>
        <p
          className="m-0 absolute top-[74px] left-[132px] leading-[156.23%] font-semibold inline-block w-[137px] h-7"
          id="order_No."
        >
          Order #: xyz123
        </p>
        <p
          className="m-0 absolute top-[140px] left-[18px] leading-[156.23%]"
          id="product_name"
        >
          MBlaze - Snack bar
        </p>
        <p
          className="m-0 absolute top-[592px] left-[136px] text-base leading-[156.23%] font-semibold text-whitesmoke-200 inline-block w-32 h-[25px]"
          id="payable_amount"
        >{`Payable Amount `}</p>
        <p
          className="m-0 absolute top-[140px] left-[286px] leading-[156.23%] text-right inline-block w-[102px] h-7"
          id="product_price"
        >{`Rs. 399.00 `}</p>
        <p
          className="m-0 absolute top-[629px] left-[132px] text-5xl leading-[156.23%] inline-block w-[136px] h-[37px]"
          id="payment_money"
        >
          <span className="font-semibold">Rs. 1,299.00</span>
          <span>{` `}</span>
        </p>
        <div className="absolute top-[481px] left-[98px] w-[204px] h-[31px]">
          <p
            className="m-0 absolute top-[1px] left-[0px] leading-[156.23%] inline-block w-[76px] h-7"
            id="you_save"
          >
            You save
          </p>
          <p
            className="m-0 absolute top-[0px] left-[91px] text-xl leading-[156.23%]"
            id="saved_money"
          >
            <span className="font-semibold">Rs. 2,200.00</span>
            <span>{` `}</span>
          </p>
        </div>
        <img
          className="absolute top-[551.5px] left-[51.5px] w-[297px] h-px"
          alt=""
          src="/vector-152.svg"
        />
      </div>
      {/* product_details_right_section */}

      {/* payment_section */}
      {/* payment_section */}
      <form
    //   top 189px
        className="absolute top-[189px] left-[494px] w-[428px] h-[652px] text-xl text-text-black-color"
        onSubmit={handlePayment}
      >
        <div className="absolute top-[123px] left-[2px] w-[426px] h-[57px]">
          <div className="absolute top-[0px] left-[0px] w-[84px] h-[57px]">
            <div className="absolute top-[0px] left-[0px] rounded-6xs bg-whitesmoke-100 box-border w-[84px] h-[57px] border-[2px] border-solid border-slateblue" />
            {/* pay with cards */}
            <p
              className="m-0 absolute -top-3/4 left-[2px] leading-[156.23%] font-semibold"
              id="pay_with_cards"
            >
              Pay with
            </p>
            {/* pay with card  */}
            <img
              className="absolute top-[12.95px] left-[18.4px] rounded-md w-[47.2px] h-[31.95px] object-cover"
              alt="debit_card"
              src={Debit_cards}
            />
          </div>
          <div className="absolute top-[0px] left-[114px] w-[84px] h-[57px]">
            <div className="absolute top-[0px] left-[0px] rounded-6xs bg-whitesmoke-100 box-border w-[84px] h-[57px] border-[1px] border-solid border-silver" />
            <img
              className="absolute top-[9px] left-[11px] rounded-md w-16 h-10 object-cover"
              alt="pay_pal"
              src={paypal}
            />
          </div>
          <div className="absolute top-[0px] left-[228px] w-[84px] h-[57px]">
            <div className="absolute top-[0px] left-[0px] rounded-6xs bg-whitesmoke-100 box-border w-[84px] h-[57px] border-[1px] border-solid border-silver" />
            <img
              className="absolute top-[9px] left-[10px] rounded-md w-16 h-10 object-cover"
              alt="Phone_upi"
              src={upi}
            />
          </div>
          <div className="absolute top-[0px] left-[342px] w-[84px] h-[57px]">
            <div className="absolute top-[0px] left-[0px] rounded-6xs bg-whitesmoke-100 box-border w-[84px] h-[57px] border-[1px] border-solid border-silver" />
            <img
              className="absolute top-[9px] left-[10px] rounded-md w-16 h-10 object-cover"
              alt="apple_pay"
              src={apple_pay}
            />
          </div>
        </div>
        <label
          className="cursor-pointer absolute top-[230px] left-[0px] leading-[156.23%] font-semibold"
          htmlFor="Your_Card_Details"
        >
          Your Card Details
        </label>
        {/* EXPIRY DATE */}
        <p
          className="m-0 absolute top-[428px] left-[0px] text-base leading-[156.23%] font-medium font-montserrat"
          id="expiry_date"
        >
          Expiry Date
        </p>
        <input
          className="[border:none] bg-[transparent] absolute top-[457px] left-[0px] w-[94px] h-[54px] placeholder:pl-3 rounded-md pl-3"
          placeholder="03 / 23"
          type="text"
          value={ExpiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          required
        />
        {/* EXPIRY DATE */}
        {/* CVV */}
        <input
          className="pl-3 bg-[transparent] absolute top-[457px] left-[228px]  box-border w-[91px] h-[54px] border-[1px] border-solid border-slateblue placeholder:pl-3 rounded-md"
          placeholder="CVV"
          type="password"
          value={Cvv}
          onChange={(e) => setCVV(e.target.value)}
          required
          pattern="[0-9]{3}" // Pattern for 3 digits
          maxLength="3" // Maximum length of 3
        />
        {/* CVV */}
        <div className="absolute top-[0px] left-[calc(50%_-_214px)] w-[428px] h-[398px]">
          {/* coupen code */}
          <input
            className=" pl-3 bg-whitesmoke-100 absolute top-[-1px] left-[calc(50%_-_215px)] rounded-8xs box-border w-[430px] h-14 border-[1px] border-solid border-slateblue placeholder:pl-3 rounded-md"
            id="Coupen_code"
            placeholder="Coupen code"
            type="text"
          />
          {/* coupen code  */}

          {/* card holder name */}
          <input
            className="bg-whitesmoke-100 absolute pl-3 top-[343px] left-[calc(50%_-_215px)] rounded-8xs box-border w-[430px] h-14 border-[1px] border-solid border-slateblue placeholder:pl-3 rounded-md"
            placeholder="Enter the Name on Card"
            type="text"
            value={CardName}
            onChange={(e) => setCardName(e.target.value)}
            required
          />
          {/* card holder name */}

          {/* 16-digit card number */}
          <input
            className="bg-whitesmoke-100 absolute  pl-3 top-[273px] bg-transparent left-[calc(50%_-_215px)] rounded-8xs box-border w-[430px] h-14 border-[1px] border-solid border-slateblue placeholder:pl-3 rounded-md"
            placeholder="Enter 16-digit Card Number"
            type="text"
            value={CardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
          {/* 16-digit card number */}

          {/* for coupen apply to get discounts */}
          <div className="absolute outline-none top-[-1px] left-[calc(50%_+_129px)] rounded-8xs [background:linear-gradient(111.07deg,_#5193ca,_#6753ca)] box-border w-[86px] h-14 border-[1px] border-solid border-slateblue" />
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[16px] left-[362px] text-base leading-[156.23%] font-semibold font-montserrat text-whitesmoke-100 text-left inline-block w-12"
            id="Copen_apply_btn"
          >
            Apply
          </button>
        </div>
        {/* for coupen apply to get discounts */}
        <div
          className="  cursor-pointer bg-[transparent] absolute top-[596px] left-[120px] rounded-[10px] [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))] box-border w-44 h-14 overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-palegoldenrod"
          // autoFocus={true}
        >
     <Link to="/Payment_Done">     <button
            className="font-sans cursor-pointer [border:none] p-0 bg-[transparent] relative text-5xl leading-[120%] font-semibold  text-dark-green-color text-left inline-block"
            //   autoFocus={true}
            id="Pay_Now"
          >
            Pay Now
          </button></Link>
        </div>
      </form>
      {/* payment section */}
    </div>

  );
};

export default payment_gateway;
