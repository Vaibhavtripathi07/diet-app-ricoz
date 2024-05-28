import React,{useState} from "react";
import Nav from "../Top_Nav/Nav";
// import Footer from "../Footer/Footer";
import Logo from "../../asset/Logo.png"
import Footer_img from "../../asset/Footer_img.png"
import Search from "../../asset/Search.png";
import { Link } from "react-router-dom";
import blue_inverted from "../../asset/blue_inverted.png";
import ratings_full from "../../asset/ratings_full.png";
import sam from "../../asset/sam.png";
import Cindy from "../../asset/Cindy.png";
import Arrow from "../../asset/Arrow.png";
import MealFundamentals from "./MealFundamentals";
import MealFeatures from "./MealFeatures";
import MealPlanData from "./MealPlanData.json";
import Chinese from '../../asset/Chinese.png'


const MealPlans2 = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpansion = () => {
        setExpanded(!expanded);
      };

  return (
    <div className="relative w-[1512px] h-[5689px] overflow-hidden bg-whitesmoke xl:w-full">
      {/* Nav */}
      <Nav />
      {/* Nav */}
      {/* main sec */}
      <main>
        <h1
          className="  mt-[208px] text-center text-[48px] tracking-[0.53em] font-semibold leading-[133%] text-stroke-green-color whitespace-pre-wrap font-inherit "
          id="stayfit learning"
        >
          Meal Plans
        </h1>

        {/* input */}
        <section className="absolute top-[356px] left-[calc(50%_-_488px)] w-[976px] text-left text-5xs text-gray-200 font-sans h-[78px]">
          <input
            className="bg-whitesmoke outline-none pl-28 font-medium  text-2xl rounded-[10px] absolute top-[-1px] left-[calc(50%_-_489px)] rounded-3xs box-border w-[978px] h-20 border-[1px] border-solid border-stroke-green-color placeholder:text-gray-500 placeholder:text-[18px] placeholder:h-6 placeholder:w-[328px] placeholder:italic  "
            name="text"
            placeholder="Search Plan (low-carb, gluten-free, etc.) "
            type="text"
          />
          <section className="absolute top-[-1px] left-[-1px] rounded-[10px]  w-[88px] h-20 border-[1px] border-solid border-stroke-green-color" />
          <img
            className="absolute h-[42.31%] w-[3.38%] top-[28.85%] rounded-[10px] right-[93.9%] bottom-[28.85%] left-[2.72%] max-w-full overflow-hidden max-h-full object-cover"
            alt="searchhh"
            id="search"
            src={Search}
          />
        </section>

        <section className="flex mt-[330px] justify-evenly cursor-pointer ">
          <p className="font-sans text-[46px] text-black leading-[156.227%] font-semibold w-[774px] tracking-[0.92px]">
            Get a{" "}
            <span className="text-[46px] tracking-[0.92px] leading-[156.227%] text-dark-green-color font-sans">
              Personalized Meal Plan
            </span>{" "}
            and get a plan that’s right for you.
          </p>
          <Link to="/MealPlans">
            {" "}
            <button className="py-[28px] px-[73px] text-5xl border font-semibold border-solid border-[#CFF7AA] [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))] rounded-2xl  text-dark-green-color font-sans leading-[120%] ">
              Take Survey
            </button>
          </Link>
        </section>

        {/* try meal section */}
        <section className="w-[640px] h-[271px] bg-[#FCFFEA]  rounded-2xl shadow-xl6 border border-solid border-grey mx-auto mt-[200px] ">
          <p className="text-center text-5xl text-balck font-semibold font-sans leading-[156.227%] mt-[42px]">
            Try out Free 7-day Meal plan
          </p>
          <Link to="/TryNow">
            {" "}
            <button className="block py-[28px] px-[73px] mt-[42px] mx-auto text-5xl border font-semibold border-solid border-[#CFF7AA] [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))] rounded-2xl  text-dark-green-color font-sans leading-[120%] ">
              Take Survey
            </button>
          </Link>
        </section>

        {/* Meal  */}
        <section className="flex justify-evenly mt-[165px] ">
          {MealPlanData.Meal.map((Meal) => (
            <section key={Meal.id} className="text-center hover:transform hover:scale-125 transition-transform duration-300 ease-in-out cursor-pointer">
              <img
                src={Meal.img}
                className="w-[190px] h-[294px] rounded-[10px] object-fill "
                alt=""
              />
              <section className="inline-block -mt-20">
              <section className="p-2 bg-[#FEF4ED]  w-[190px] h-[160px] rounded-t-3xl -mt-[20px] hover:bg-[#F4FEEE] ">
                <p className="w-[97px] text-black mx-auto block font-sans text-[14px] font-bold leading-[156.227%] mt-[18px] ">
                  {Meal.name}
                </p>
                <p className="w-[148px] text-black font-sans font-normal justify-center block mx-auto text-[8px] leading-[156.227%]  mt-[6px]">
                  {Meal.desc}
                </p>
                <p className="mt-[12px] font-sans text-[8px] text-black font-bold leading-[156.227%] ">
                  {Meal.starts}
                  <span className="font-sans text-[8px] text-black font-bold leading-[156.227%] ">
                    {Meal.price}
                  </span>
                </p>
              </section>
              </section>
            </section>
          ))}
        </section>

        {/* Meal  */}

        <section>
          {/* nutritient fundamental */}
          <MealFundamentals />
          <MealFeatures />
          {/* nutritient fundamental */}
        </section>

        {/* plans */}
        <section className="flex justify-evenly mt-[1000px] ">
          {MealPlanData.Member.map((Member) => ( 
            <section
              key={Member.id}
              className=" border  rounded-[18px] w-[280px] h-[534px]  boder-2 border-solid border-[#A69DEE] "
            >
              <p
                className="text-white text-13xl font-medium m-2 pl-[68px] py-[49.65px] leading-[156.227%] border-2 border-solid border-[#6E6EF7] rounded-[18px]"
                style={{
                  background:
                    "linear-gradient(106deg, #9BC6EE 2.8%, #A79BEE 97.2%)",
                }}
              >
                {Member.month}
              </p>

              <img
                src={Chinese}
                className="w-[36px] h-[30px] mx-auto mt-5"
                alt="chinese "
              />
              <li className="ml-4 text-[18px] text-black font-sans font-normal leading-[156.227%] w-[244px] mt-[35px]">
                {Member.benifit1}
              </li>
              <li className="ml-4 text-[18px] text-black font-sans font-normal leading-[156.227%] w-[228px] mt-[18px]">
                {Member.benifit2}
              </li>
              <p className="text-black text-center text-[18px] font-sans mt-[50px] font-bold leading-[156.227%]">
                {Member.Cost}
                <span className="text-[#f00] text-center pl-2 text-[18px] line-through">{Member.Actual_Cost}</span>
              </p>
            </section>
          ))}
        </section>
        {/* plans */}
          <button className="py-7 px-[73px]  border border-solid [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))] mt-[84px] border-[#CFF7AA] text-5xl font-sans leading-[156.227%] block mx-auto rounded-2xl bg- text-dark-green-color">Get Plan</button>

        {/* feedback */}
        <section className="w-[1372px] h-[647px] -mt-[800px]  mx-auto ">
          <h3 className="text-center text-dark font-sans mt-[1000px]  text-[46px] font-semibold leading-[133%]">
            Hear from our satisfied users who have tried our Meal Plans!
          </h3>
          <section>
            <section className="absolute w-[536px] h-[412px] mt-[120px] z-20 ml-[50px]">
              <img src={sam} alt="" className=" -ml-16" />
              <section className=" border border-solid border-grey-color w-[471px] h-[346px] rounded-[36px] -mt-[155px]  ">
                <h5 className="absolute font-sans text-black text-9xl leading-[133%] ml-[223px] mt-[34px] font-semibold">
                  Saddie Warren
                </h5>
                <img
                  src={ratings_full}
                  alt=""
                  className="absolute w-[86px] h-[14px] ml-[223px] mt-[95px]"
                />
                <img
                  src={blue_inverted}
                  alt=""
                  className="absolute ml-4 mt-[172px] w-6 h-6 "
                />
                <p className="absolute w-[397px] font-sans text-xl leading-6 tracking-[0.6px] font-normal ml-[52px] mt-[190px]">
                  The Nutrition Fundamentals course exceeded my expectations! It
                  covered all the essential topics in a comprehensive yet
                  easy-to-understand manner. Highly recommended!
                </p>
              </section>
            </section>

            <section className="absolute w-[536px] h-[412px] mt-[120px] z-20 ml-[826px]">
              <img src={Cindy} alt="" className=" -ml-16" />
              <section className=" border border-solid border-grey-color w-[471px] h-[346px] rounded-[36px] -mt-[155px]  ">
                <h5 className="absolute font-sans text-black text-9xl leading-[133%] ml-[223px] mt-[34px] font-semibold">
                  Jade Williams
                </h5>
                <img
                  src={ratings_full}
                  alt=""
                  className="absolute w-[86px] h-[14px] ml-[223px] mt-[95px]"
                />
                <img
                  src={blue_inverted}
                  alt=""
                  className="absolute ml-4 mt-[172px] w-6 h-6 "
                />
                <p className="absolute w-[395px] font-sans text-xl leading-6 tracking-[0.6px] font-normal ml-[52px] mt-[190px]">
                  The course materials were top-notch and the interactive
                  exercises made learning enjoyable. I'm grateful for the
                  valuable insights I gained from this course.
                </p>
              </section>
            </section>
          </section>
          <img
            src={Arrow}
            alt=""
            className="mt-[338px] ml-[1310px] w-[64px] h-[64px]"
          />
        </section>
        {/* feedback */}

        {/* faq */}
        <h1 className="text-black text-[46px] mt-[150px] font-medium text-center font-sans leading-[156.227%]">Frequently Asked Questions</h1>
        <div className="absolute -mt-[270px] left-[150px] w-[1189px] h-[777px] text-9xl text-gray-300 cursor-pointer">
        <img
          className="absolute top-[360px] left-[819px] w-[370px] h-[374px] object-cover"
          alt=""
          src="/rectangle-344@2x.png"
        />
        <div className="absolute top-[351px] left-[-1px] rounded-7xl bg-whitesmoke-100  w-[598px] h-[99px] overflow-hidden border  text-black rounded-[26px] border-stroke-green-color">
          <div className="absolute top-[30px] left-[30px] leading-[133%] font-sans font-semibold text-black">
          How do I enroll in a course?
          </div>
          <p className="absolute top-[27px] left-[546px] font-normal  text-13xl leading-[133%] font-tsukimi-rounded text-black" onClick={toggleExpansion}>
          {expanded ? '-' : '+'}
          </p>
        </div>
        <div className={`absolute top-[478px] left-[-1px] rounded-7xl bg-whitesmoke-100  w-[598px] h-[136px] overflow-hidden border-[1px] border-solid rounded-[26px] border-stroke-green-color ${expanded ? 'expanded' : ''}`}>
          <p className="absolute top-[30px] left-[30px] leading-[133%] font-sans font-semibold inline-block w-[436px] text-black">
          Are the courses suitable for beginners?
          </p>
          <p className="absolute top-[45.5px] left-[546px] font-normal  text-13xl leading-[133%] font-tsukimi-rounded text-black" onClick={toggleExpansion}>
          {expanded ? '-' : '+'}
          </p>
        </div>
        <div className={`absolute top-[642px] left-[-1px] rounded-7xl bg-whitesmoke-100  w-[598px] h-[136px] overflow-hidden border-[1px] border-solid rounded-[26px] border-stroke-green-color ${expanded ? 'expanded' : ''}`}>
          <p className="absolute top-[30px] left-[30px] leading-[133%] font-sans font-semibold inline-block w-[436px] text-black">
          Can I access the course materials at any time?
          </p>
          <p className="absolute top-[45.5px] left-[546px] font-normal  text-13xl leading-[133%] font-tsukimi-rounded text-black" onClick={toggleExpansion}>
          {expanded ? '-' : '+'}
          </p>
        </div>
      </div>
      {/* FAQ */}

     
   
      </main>
      {/* main sec */}

      {/* Footer */}
      <div className="absolute mt-[800px]  w-[1512px] h-[400px] text-xl text-dark-green-color font-body-main xl:w-full">
        <div className="absolute top-[0px] left-[0px] bg-whitesmoke shadow-[0px_-3px_11px_1px_rgba(231,_231,_231,_0.59)] w-[1512px] h-[400px]" />
        <div className="absolute top-[0px] left-[756px] bg-beige w-[756px] h-[400px]" />
        <div className="absolute mt-[82px] left-[82px] w-[205px] h-[184px] text-center text-[37px] text-text-black-color font-roboto-flex">
          <div className="absolute top-[0px] left-[0px] w-[142px] h-[100px]">
            <div className="absolute top-[0px] left-[0px] leading-[150%] inline-block w-[134.11px] h-[63px]">
              <img src={Logo} alt="" />
            </div>
          </div>
          <div className="absolute top-[130px] left-[0px] text-[18px] leading-[150%] font-open-sans text-grey-color text-left">
            <p className="m-0">Copyright © StayFIT LLC.</p>
            <p className="m-0">All rights reserved.</p>
          </div>
        </div>
        <div className="absolute top-[92px] left-[380px] w-[240px] h-[164px]">
          <img
            className="absolute top-[0px] left-[0px] rounded-xl w-[252px] h-[164px] object-cover"
            alt=""
            src={Footer_img}
          />
        </div>
        <div className="absolute top-[82px] left-[899px] w-[104px] h-[104px]">
          <div className="absolute top-[0px] left-[0px] leading-[150%]">
            Home
          </div>
          <Link to="/WhoWeAre">
            <div
              className="absolute top-[74px] left-[0px] leading-[150%] cursor-pointer"
              // onClick={onWhoWeAre1Click}
            >
              Who we are
            </div>
          </Link>
        </div>
        <div className="absolute top-[82px] left-[1071px] w-[106px] h-[178px]">
          <Link to="/FAQ">
            <div
              className="absolute top-[148px] left-[0px] leading-[150%] cursor-pointer"
              // onClick={onFAQsTextClick}
            >
              FAQs
            </div>
          </Link>
          <Link to="/MyAccount">
            <div className="absolute top-[74px] left-[0px] leading-[150%]">
              My Account
            </div>
          </Link>

          <Link to="/Store">
            <div
              className="absolute top-[0px] left-[0px] leading-[150%] cursor-pointer"
              // onClick={onStoreText1Click}
            >
              Store
            </div>
          </Link>
        </div>
        <div className="absolute top-[82px] left-[1245px] w-[120px] h-[178px]">
          <Link to="/TermsOfUse">
            <div
              className="absolute top-[0px] left-[0px] leading-[150%] cursor-pointer"
              // onClick={onTermsOfUse1Click}
            >
              Terms of use
            </div>
          </Link>

          <Link to="/PrivacyPolicy">
            <div
              className="absolute top-[74px] left-[0px] leading-[150%] cursor-pointer"
              // onClick={onPrivacyPolicyTextClick}
            >
              Privacy Policy
            </div>
          </Link>
          <Link to="/ContactUs">
            <div
              className="absolute top-[148px] left-[5px] leading-[150%] cursor-pointer"
              // onClick={onContactUsText1Click}
            >
              Contact us
            </div>
          </Link>
        </div>
      </div>
      {/* Footer */}
    </div>
  );
};

export default MealPlans2;
