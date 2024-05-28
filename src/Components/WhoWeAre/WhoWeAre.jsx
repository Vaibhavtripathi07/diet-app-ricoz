import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../Top_Nav/Nav";
import Logo from "../../asset/Logo.png";
import Footer_img from "../../asset/Footer_img.png";

const AboutUs = () => {
  const navigate = useNavigate();

  const onStoreTextClick = useCallback(() => {
    // Please sync "STORE" to the project
  }, []);

  const onWhoWeAre3Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFAQsClick = useCallback(() => {
    // Please sync "FAQs" to the project
  }, []);

  const onStoreClick = useCallback(() => {
    // Please sync "STORE" to the project
  }, []);

  const onTermsOfUseClick = useCallback(() => {
    // Please sync "terms of services" to the project
  }, []);

  const onPrivacyPolicyClick = useCallback(() => {
    // Please sync "PRIVACY POLICY" to the project
  }, []);

  const onContactUsClick = useCallback(() => {
    // Please sync "CONTACTUS" to the project
  }, []);

  return (
    <div className="relative bg-beige w-full h-[6990px] overflow-hidden text-left text-5xl text-darkslategray font-sans">
      <div className="absolute top-[0px] left-[756px] bg-whitesmoke w-[756px] h-[6990px]" />
      {/* Nav */}

      <Nav />
      {/* Nav */}
      <h1
        className="m-0 absolute top-[170px] left-[calc(50%_-_220px)] text-29xl tracking-[0.3em] leading-[133%] font-semibold font-inherit text-stroke-green-color"
        id="welcome"
      >
        Who we are?
      </h1>
      <div className="absolute top-[314px] left-[64px] w-[1447px] h-[607px] text-gray">
        <img
          className="absolute top-[356px] left-[526px] w-[921px] h-[150px]"
          alt="pickHealthyHabits"
          src="/rectangle-509.svg"
        />
        <img
          className="absolute top-[356px] left-[526px] w-[167px] h-[150px]"
          alt=""
          src="/rectangle-510.svg"
        />
        <img
          className="absolute top-[-19px] left-[884px] rounded-xl w-[386px] h-[657px] object-cover"
          id="welcome_img"
          alt=""
          src="/rectangle-506@2x.png"
        />
        <p
          className="m-0 absolute top-[120px] left-[0px] tracking-[0.06em] leading-[156.23%] inline-block w-[669px]"
          id="About_stayFit"
        >
          <span>{`At `}</span>
          <span className="font-semibold">Stay</span>
          <i className="font-semibold">FIT</i>
          <span>{`, we are passionate about empowering individuals to lead healthier and happier lives through personalized nutrition and fitness solutions. `}</span>
        </p>
        <p
          className="m-0 absolute top-[412px] left-[566px] tracking-[0.04em] leading-[156.23%] font-bold text-dark-green-color inline-block w-[252px] h-[38px]"
          id="pick_healthy_habit"
        >
          Pick Healthy Habits
        </p>
      </div>
      <div className="absolute top-[1151px] left-[64px] w-[1347px] h-[765px]">
        <div className="absolute top-[220px] left-[0px] w-[646px] h-[545px]">
          <p
            className="m-0 absolute top-[0px] left-[0px] tracking-[0.05em] leading-[156.23%] text-black inline-block w-[646px]"
            id="para_1"
          >
            We envision a world where everyone can make informed and sustainable
            choices about their diet and fitness, leading to improved overall
            well-being and a stronger sense of vitality.
          </p>
          <p
            className="m-0 absolute top-[397px] left-[calc(50%_-_323px)] tracking-[0.05em] leading-[156.23%] inline-block w-[624px]"
            id="para_3"
          >
            {" "}
            We believe that making informed choices about food and embracing a
            balanced approach to diet can lead to positive, sustainable changes
            in overall well-being.
          </p>
          <p
            className="m-0 absolute top-[217px] left-[calc(50%_-_323px)] tracking-[0.05em] leading-[156.23%] inline-block w-[634px]"
            id="para_2"
          >
            At StayFIT, our mission is to empower individuals to achieve their
            health and wellness goals through personalized nutrition and
            lifestyle guidance.
          </p>
        </div>
        <div className="absolute top-[0px] left-[410px] w-[564px] h-[100px] text-29xl text-stroke-green-color">
          <div className="absolute top-[0px] left-[0px] w-[564px] h-[100px]">
            <div className="absolute top-[0px] left-[281.36px] rounded-sm bg-beige w-[282.64px] h-[100px]" />
            <div className="absolute top-[0px] left-[0px] rounded-sm bg-whitesmoke w-[282.64px] h-[100px]" />
          </div>
          <h1
            className="m-0 absolute top-[18px] left-[calc(50%_-_236px)] text-29xl tracking-[0.53em] leading-[133%] font-semibold font-inherit inline-block w-[500px]"
            id="Our_vision"
          >
            Our Vision
          </h1>
        </div>
        <img
          className="absolute top-[260px] left-[793px] w-[554px] h-[466px] object-cover"
          alt="vision_img"
          src="/rectangle-511@2x.png"
        />
      </div>
      <div className="absolute top-[2146px] left-[105px] w-[1339px] h-[641.26px] text-29xl text-stroke-green-color">
        <div className="absolute top-[0px] left-[349px] w-[604px] h-[100px]">
          <div className="absolute top-[0px] left-[0px] w-[604px] h-[100px]">
            <div className="absolute top-[0px] left-[301.32px] rounded-sm bg-beige w-[302.68px] h-[100px]" />
            <div className="absolute top-[0px] left-[0px] rounded-sm bg-whitesmoke w-[302.68px] h-[100px]" />
          </div>
          <h1
            className="m-0 absolute top-[18px] left-[calc(50%_-_252px)] text-inherit tracking-[0.53em] leading-[133%] font-semibold font-inherit"
            id="who_we_are"
          >
            Who we are
          </h1>
        </div>
        <p
          className="m-0 absolute top-[320px] left-[calc(50%_+_45.5px)] text-5xl tracking-[0.05em] leading-[156.23%] text-black inline-block w-[624px]"
          id="whoWeAre"
        >
          <span className="font-semibold">Stay</span>
          <i className="font-semibold">FIT</i>
          <span>
            {" "}
            is a team of dedicated nutritionists, fitness experts, and
            technology enthusiasts who believe that optimal health is attainable
            for everyone. We blend the latest scientific research with
            practical, user-friendly technology to create a seamless and
            rewarding experience for our users.
          </span>
        </p>
        <img
          className="absolute top-[220px] left-[0px] w-[586px] h-[421.26px] object-cover"
          alt="Whoweare"
          src="/rectangle-512@2x.png"
        />
      </div>
      <div className="absolute top-[2950px] left-[67px] w-[1378px] h-[1784px] text-inherit">
        <div className="absolute top-[0px] left-[317px] w-[744px] h-[100px] text-29xl text-stroke-green-color">
          <div className="absolute top-[0px] left-[0px] w-[744px] h-[100px]">
            <div className="absolute top-[0px] left-[371.16px] rounded-sm bg-beige w-[372.84px] h-[100px]" />
            <div className="absolute top-[0px] left-[0px] rounded-sm bg-whitesmoke w-[372.84px] h-[100px]" />
          </div>
          <h1
            className="m-0 absolute top-[18px] left-[calc(50%_-_308px)] text-inherit tracking-[0.53em] leading-[133%] font-semibold font-inherit inline-block w-[650px]"
            id="WhatWeOffer"
          >
            What we Offer
          </h1>
        </div>
        <div className="absolute top-[220px] left-[calc(50%_-_689px)] w-[1152px] h-[301px]">
          <li
            className="absolute top-[40px] left-[calc(50%_-_576px)] tracking-[0.05em] leading-[156.23%] inline-block w-[623.56px]"
            id="Personalized_nutritiional_plan"
          >
            <ul className="m-0 pl-8">
              <span className="font-semibold font-sans">
                Personalized Nutrition Plans:
              </span>
              <span>
                {" "}
                We understand that every individual is unique, and there's no
                one-size-fits-all approach to diet. Our personalized nutrition
                plans are tailored to your specific needs, dietary preferences,
                and health objectives.
              </span>
            </ul>
          </li>
          <img
            className="absolute top-[0px] left-[772px] w-[380px] h-[301px] object-cover"
            alt="PersonalNutritionalPlans"
            src="/rectangle-5121@2x.png"
          />
        </div>
        <div className="absolute top-[641px] left-[calc(50%_-_689px)] w-[1368px] h-[301px]">
          <li
            className="absolute top-[40px] left-[calc(50%_-_684px)] tracking-[0.05em] leading-[156.23%] inline-block w-[623.56px]"
            id="Comprehensive Fitness Solution"
          >
            <ul className="m-0 pl-8">
              <span className="font-semibold font-sans">
                Comprehensive Fitness Solutions:
              </span>
              <span>
                {" "}
                Achieving your fitness goals is as essential as maintaining a
                healthy diet. That's why we offer a range of fitness solutions,
                from workout tracking to personalized exercise routines, to help
                you stay active and strong.
              </span>
            </ul>
          </li>
          <img
            className="absolute top-[0px] left-[988px] w-[380px] h-[301px] object-cover"
            alt="Comprehensive"
            src="/rectangle-514@2x.png"
          />
        </div>
        <div className="absolute top-[1062px] left-[calc(50%_-_457px)] w-[1146px] h-[301px]">
          <div className="absolute top-[40px] left-[calc(50%_-_49px)] tracking-[0.05em] leading-[156.23%] inline-block w-[622px]">
            <ul className="m-0 pl-8">
              <span className="font-semibold font-sans">Expert Guidance:</span>
              <span>
                {" "}
                Our team of certified nutritionists is here to guide you every
                step of the way. Whether you need help with meal planning,
                weight management, or addressing specific health concerns, our
                experts are ready to support you.
              </span>
            </ul>
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-[380px] h-[301px] object-cover"
            alt=""
            src="/rectangle-515@2x.png"
          />
        </div>
        <div className="absolute top-[1483px] left-[calc(50%_-_673px)] w-[1362px] h-[301px]">
          <li
            className="absolute top-[58px] left-[calc(50%_+_59px)] tracking-[0.05em] leading-[156.23%] inline-block w-[622px]"
            id="Engaging_courses"
          >
            <ul className="m-0 pl-8">
              <span className="font-semibold font-sans">Engaging Courses:</span>
              <span>
                {" "}
                Our in-depth courses cover various nutrition and fitness topics,
                providing you with valuable insights and practical knowledge to
                make informed choices about your well-being.
              </span>
            </ul>
          </li>
          <img
            className="absolute top-[0px] left-[0px] w-[380px] h-[301px] object-cover"
            alt=""
            src="/rectangle-516@2x.png"
          />
        </div>
      </div>
      <div className="absolute top-[4964px] left-[100px] w-[1350px] h-[897px]">
        <div className="absolute top-[0px] left-[293px] w-[726px] h-[100px]">
          <div className="absolute top-[0px] left-[362.18px] rounded-sm bg-beige w-[363.82px] h-[100px]" />
          <div className="absolute top-[0px] left-[0px] rounded-sm bg-whitesmoke w-[363.82px] h-[100px]" />
        </div>
        <h1
          className="m-0 absolute top-[18px] left-[calc(50%_-_172px)] text-29xl tracking-[0.53em] leading-[133%] font-semibold font-inherit text-stroke-green-color"
          id="Join_us"
        >
          Join us
        </h1>
        <div className="absolute top-[720px] left-[calc(50%_-_565px)] w-[1216px] h-[177px]">
          <p
            className="m-0 absolute top-[20px] left-[calc(50%_+_5px)] tracking-[0.05em] leading-[156.23%] inline-block w-[603px]"
            id="join_us_2"
          >
            For any inquiries or assistance, feel free to reach out to our
            friendly support team.
          </p>
          <div className="absolute h-[33.9%] w-[24.67%] top-[0%] right-[75.33%] bottom-[66.1%] left-[0%]">
            <a
              className="[text-decoration:none] absolute h-full w-1/5 top-[0%] right-[40%] bottom-[0%] left-[40%]"
              id="instagram"
            >
              <img
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector.svg"
              />
              <img
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector1.svg"
              />
              <img
                className="absolute h-[78.13%] w-[78.13%] top-[10.94%] right-[10.94%] bottom-[10.94%] left-[10.94%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector2.svg"
              />
            </a>
            <a className="[text-decoration:none] absolute h-full w-1/5 top-[0%] right-[0%] bottom-[0%] left-[80%]">
              <img
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector3.svg"
              />
              <img
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector4.svg"
              />
              <img
                className="absolute h-[57.13%] w-[70.31%] top-[21.48%] right-[14.84%] bottom-[21.38%] left-[14.84%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector5.svg"
              />
            </a>
            <img
              className="absolute h-[73.33%] w-1/5 top-[13.33%] right-[80%] bottom-[13.33%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/mail.svg"
            />
          </div>
          <img
            className="absolute h-[32.2%] w-[14.8%] top-[67.8%] right-[80.26%] bottom-[0%] left-[4.93%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group-906.svg"
          />
        </div>
        <div className="absolute top-[220px] left-[calc(50%_-_675px)] w-[1350px] h-[400px]">
          <p
            className="m-0 absolute top-[108px] left-[calc(50%_-_675px)] tracking-[0.05em] leading-[156.23%] inline-block w-[561px]"
            id="JOIN_US"
          >
            <span>{`Take the first step towards a healthier and happier you. Sign up for free and embark on a transformative health journey with `}</span>
            <span className="font-semibold">Stay</span>
            <i className="font-semibold">FIT</i>
            <span>
              . Together, we can achieve wellness, one step at a time.
            </span>
          </p>
          <img
            className="absolute top-[0px] left-[688px] w-[662px] h-[400px] object-cover"
            alt=""
            src="/rectangle-517@2x.png"
          />
        </div>
      </div>
      <p
        className="m-0 absolute top-[6091px] left-[calc(50%_-_318px)] text-[32px] tracking-[0.05em] leading-[156.23%] font-semibold text-center"
        id="embrace_health"
      >
        <span className="block">&nbsp;</span>
        <span className="block">Let's embrace better health together!</span>
      </p>
      <section
        className="absolute top-[6245px] left-[calc(50%_-_179px)] rounded-2xl [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))]   overflow-hidden flex flex-row items-center justify-center py-7 px-[73px] border-[1px] border-solid border-palegoldenrod"
        id="btn"
      >
        <button
          className="cursor-pointer  p-0 bg-[transparent]  text-5xl leading-[120%] font-semibold font-sans text-dark-green-color hover:text-strokegreen-color text-left inline-block"
          id="start_your_journey"
        >
          Start your Journey
        </button>
      </section>

      {/* footer */}

      <div className="absolute top-[6590px] left-[0px] w-[1512px] h-[400px] text-xl text-dark-green-color font-body-main">
        <div className="absolute top-[0px] left-[0px] bg-whitesmoke shadow-[0px_-3px_11px_1px_rgba(231,_231,_231,_0.59)] w-[1512px] h-[400px]" />
        <div className="absolute top-[0px] left-[756px] bg-beige w-[756px] h-[400px]" />
        <div className="absolute top-[82px] left-[82px] w-[205px] h-[184px] text-center text-[37px] text-text-black-color font-roboto-flex">
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

      {/* footer */}
    </div>
  );
};

export default AboutUs;
