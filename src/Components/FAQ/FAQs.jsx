import { useState} from "react";
import { Link, } from "react-router-dom";
import Nav from "../Top_Nav/Nav";
import Footer from "../Footer/Footer";
import logo from "../../asset/logo.png"
import Faqq from "../../asset/Faqq.png"

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };
  const toggleExpansion1 = () => {
    setExpanded(!expanded);
  };
  const toggleExpansion2 = () => {
    setExpanded(!expanded);
  };
  const toggleExpansion3 = () => {
    setExpanded(!expanded);
  };
  const toggleExpansion4 = () => {
    setExpanded(!expanded);
  };
  



  return (
    <div className="bg-whitesmoke min-w-[1512px] h-[2659px] overflow-hidden text-left text-9xl text-text-black-color font-sans cursor-pointer">
      <div className=" bg-beige w-1/2 " />
      {/* Nav */}
      <Nav />
      {/* Nav */}
      <h1 className="text-center my-40 text-29xl tracking-[0.3em] leading-7 font-semibold text-stroke-green-color">
        FAQs
      </h1>
{/* 
      <section className="flex items-center flex-wrap justify-around px-5">
        <section className="space-y-24 ">
          <p className="border border-black w-[calc(220px+22rem)]  font-sans font-normal leading-[156.227%] tracking-[0.48px] text-5xl">
            Welcome to our FAQ page! Here, we address some common queries and
            concerns to provide you with quick answers and helpful information.
          </p>
          <p className=" border border-black w-[calc(220px+22rem)] font-sans font-normal text-5xl leading-[156.227%] tracking-[0.48px] ">
            If you don't find the answer you're looking for, please feel free to
            contact our customer support team, and they'll be happy to assist
            you.
          </p>
        </section>

        <img
          className="hidden md:block border-black border  "
          alt=""
          src={Faqq}
          width={584}
          height={590}
        />
      </section> */}

<section className="flex items-center justify-around mx-16 ">
  <section className="space-y-8 md:space-y-24 w-4/5  ">
    <p className="border border-black text-5xl md:w-[calc(220px+22rem)]  font-sans font-normal  md:text-5xl leading-[156.227%] tracking-[0.48px] ">
      Welcome to our FAQ page! Here, we address some common queries and
      concerns to provide you with quick answers and helpful information.
    </p>
    <p className="border border-black  md:w-[calc(220px+22rem)] font-sans font-normal text-2xl md:text-5xl leading-[156.227%] tracking-[0.48px] text-start md:text-left">
      If you don't find the answer you're looking for, please feel free to
      contact our customer support team, and they'll be happy to assist you.
    </p>
  </section>

  <img
    className="hidden md:block border-black border"
    alt=""
    src={Faqq}
    width={584}
    height={590}
  />
</section>


      {/* dropdown section  */}
<section className="flex items-center m-16 ">
<section className="w-2/5 space-y-12"> 
      <section className=" bg-whitesmoke border border-solid border-stroke-green-color rounded-3xl  flex items-center justify-between h-24 px-5">
        <p className=" leading-7 text-9xl font-semibold">
          How do i get started with StayFIT?
        </p>
        <p
          className=" text-13xl leading-7 font-sans"
          onClick={toggleExpansion}
        >
          {expanded ? "-" : "+"}
        </p>
      </section>
      <section className=" bg-whitesmoke border border-solid border-stroke-green-color rounded-3xl flex items-center justify-between h-24 px-5">
        <p className=" leading-7  font-semibold">
          Are Meal Plans customizable?
        </p>
        <p
          className="text-13xl leading-[133%] font-sans"
          onClick={toggleExpansion1}
        >
          {expanded ? "-" : "+"}
        </p>
      </section>
      <section className=" bg-whitesmoke border border-solid border-stroke-green-color rounded-3xl  flex items-center justify-between h-24 px-5">
        <p className=" leading-7  font-semibold">
          Are Meal Plans customizable?
        </p>
        <p
          className=" text-13xl leading-[133%] font-sans"
          onClick={toggleExpansion2}
        >
          {expanded ? "-" : "+"}
        </p>
      </section>
      <section className="bg-whitesmoke border border-solid border-stroke-green-color rounded-3xl  flex items-center justify-between h-24 px-5">
        <p className=" text-9xl  leading-7 font-semibold">
          How can i track my progress?
        </p>
        <p
          className=" text-13xl leading-7 font-sans"
          onClick={toggleExpansion3}
        >
          {expanded ? "-" : "+"}
        </p>
      </section>
    
      <section className="bg-whitesmoke border border-solid border-stroke-green-color rounded-3xl  flex items-center justify-between h-24 px-5">
        <p className=" leading-7 text-9xl font-semibold inline-block w-[436px]">
          Are workout plans suitable for beginners?
        </p>
        <p
          className="top-[45.5px] left-[546px] text-13xl leading-7 font-sans"
          onClick={toggleExpansion4}
        >
          {expanded ? "-" : "+"}
        </p>
      </section>
      </section>
{/* Dropdown ends */}

{/* img */}
<img
        className="ml-36 object-cover border border-black"
        alt=""
        src="/rectangle-344@2x.png"
        width={645}
        height={653}
      />
{/* img */}
</section>


      <p className="mx-44 text-9xl font-sans border border-black text-center  tracking-wide font-semibold mt-48">
        We hope this FAQ section answers some of your questions. If you have
        additional inquiries, feel free to get in touch with us. Your health and
        satisfaction are our top priorities!
      </p>
      
     
        <button className="my-24 leading-7 py-7 px-[72px] font-sans block mx-auto rounded-2xl border border-solid border-dark-green-color text-dark-green-color hover:bg-dark-green-color hover:text-white  font-semibold [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))]"> <Link
        to="/ContactUs"
      >Contact Us
      </Link> 
      </button>
      
      {/* main end */}

      {/* footer */}
      
      <footer className="max-w-screen bg-beige shadow-md text-dark-green-color font-normal whitespace-nowrap min-h-[400px] space-y-24 my-40 flex items-start justify-between text-xl pr-20 ">
        <section className=" bg-whitesmoke" />
        {/* <section className=" top-[0px] left-[756px] bg-beige w-[756px] h-[400px]" /> */}
        <section className="cursor-pointer font-sans">
          <img src={logo} alt="" className="" />
          <section className=" text-lg leading-7 font-sans text-grey-color text-left">
            <p className="">Copyright © StayFIT LLC.</p>
            <p className="">All rights reserved.</p>
          </section>
        </section>
        <section className="">
          <img
            className=" rounded-xl w-64 h-40 object-contain"
            alt=""
            src="/rectangle-347@2x.png"
          />
        </section>
        <section className=" w-28 h-28 space-y-11">
          <section className="  leading-7">
            Home
          </section>
          <div
            className="  leading-7 cursor-pointer"
            // onClick={onWhoWeAre1Click}
          >
            Who we are
          </div>
        </section>
        <div className="  w-28 h-44 space-y-11">
          <div
            className=" leading-7 cursor-pointer"
            // onClick={onFAQsTextClick}
          >
            FAQs
          </div>
          <div className=" leading-7">
            My Account
          </div>
          <div
            className=" leading-7 cursor-pointer"
            // onClick={onStoreText1Click}
          >
            Store
          </div>
        </div>
        <div className="w-32 h-44 space-y-11">
          <div
            className="  leading-7 cursor-pointer"
            // onClick={onTermsOfUseClick}
          >
            Terms of use
          </div>
          <div
            className=" leading-7 cursor-pointer"
            // onClick={onPrivacyPolicyTextClick}
          >
            Privacy Policy
          </div>
          <Link to="/ContactUs">
          <div
            className=" leading-7 cursor-pointer"
            // onClick={onContactUsText1Click
          >
            Contact us
          </div>
          </Link>
        </div>
      </footer>

      {/* footer */}
    </div>
  );
};

export default FAQ;
