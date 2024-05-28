import React from "react";

const Offers = () => {
  return (
    <div>
    <div className="absolute top-[2950px] left-[67px] w-[1378px] h-[1784px] text-inherit">
      <div className="absolute top-[0px] left-[317px] w-[744px] h-[100px] text-29xl text-stroke-green-color">
        <div className="absolute top-[0px] left-[0px] w-[744px] h-[100px]">
          <div className="absolute top-[0px] left-[371.16px] rounded-sm bg-beige w-[372.84px] h-[100px]" />
          <div className="absolute top-[0px] left-[0px] rounded-sm bg-whitesmoke w-[372.84px] h-[100px]" />
        </div>
        <h1
          className="m-0 absolute top-[18px] left-[calc(50%_-_308px)] text-inherit tracking-[0.53em] leading-[133%] font-semibold font-inherit inline-block w-[616px]"
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
              step of the way. Whether you need help with meal planning, weight
              management, or addressing specific health concerns, our experts
              are ready to support you.
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
    </div>
  );
};

export default Offers;
