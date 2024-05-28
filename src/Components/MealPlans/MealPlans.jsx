import { useCallback } from "react";
import { Link } from "react-router-dom";

const MEALPLANS = () => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "LANDING" to the project
  }, []);

  const onHomeTextClick = useCallback(() => {
    // Please sync "LANDING" to the project
  }, []);

  const onWhoWeAre1Click = useCallback(() => {
    // Please sync "ABOUT US" to the project
  }, []);

  const onFAQsTextClick = useCallback(() => {
    // Please sync "FAQs" to the project
  }, []);

  const onStoreText1Click = useCallback(() => {
    // Please sync "STORE" to the project
  }, []);

  const onTermsOfUseClick = useCallback(() => {
    // Please sync "terms of services" to the project
  }, []);

  const onPrivacyPolicyTextClick = useCallback(() => {
    // Please sync "PRIVACY POLICY" to the project
  }, []);

  const onContactUsTextClick = useCallback(() => {
    // Please sync "CONTACTUS" to the project
  }, []);

  return (
    <div className="relative bg-whitesmoke w-[1512px] h-[5619px] overflow-hidden text-left text-9xl text-gray-200 font-sans xl:w-full">
      <div className="absolute top-[208px] left-[calc(50%_-_240px)] w-[480px] h-16 text-[48px] text-stroke-green-color">
        <h1 className="absolute top-[0px] left-[calc(50%_-_240px)] tracking-[0.53em] leading-[133%] font-semibold">
          Meal Plans
        </h1>
      </div>
      <div className="absolute top-[355px] left-[calc(50%_-_489px)] rounded-3xs bg-whitesmoke box-border w-[978px] h-20 border-[1px] border-solid border-stroke-green-color" />
      <i className="absolute top-[384px] left-[378px] text-lg tracking-[0.03em] leading-[120.23%] font-medium font-body-main text-gray-100">{`Search Plan (low-carb, gluten-free, etc.) `}</i>
      <div className="absolute top-[355px] left-[267px] rounded-3xs bg-whitesmoke box-border w-[88px] h-20 border-[1px] border-solid border-stroke-green-color" />
      <img
        className="absolute h-[0.57%] w-[2.12%] top-[6.74%] right-[78.37%] bottom-[92.69%] left-[19.51%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/search.svg"
      />
      <div className="absolute top-[0px] left-[0px] shadow-[0px_2px_8px_rgba(0,_0,_0,_0.07)] w-[1512px] h-32 text-5xl text-dark-green-color">
        <div className="absolute top-[0px] left-[0px] bg-whitesmoke w-[756px] h-32" />
        <div className="absolute top-[0px] left-[756px] bg-beige w-[756px] h-32" />
        <div
          className="absolute top-[17px] left-[56px] w-[132px] h-[94px] cursor-pointer text-center text-[35.22px] text-black font-roboto-flex"
          onClick={onGroupContainerClick}
        >
          <div className="absolute top-[0px] left-[0px] leading-[150.19%] inline-block w-[124.67px] h-[59.68px]">
            <i>stay</i>
            <i className="text-[52.83px] font-body-main">FIT</i>
          </div>
          <img
            className="absolute top-[65.65px] left-[5.87px] w-[126.13px] h-[28.35px]"
            alt=""
            src="/vector-5.svg"
          />
          <img
            className="absolute top-[55.47px] left-[108.26px] w-[11.68px] h-[20.58px]"
            alt=""
            src="/vector-6.svg"
          />
          <img
            className="absolute top-[73.66px] left-[109.59px] w-[22.52px] h-[10.04px]"
            alt=""
            src="/vector-7.svg"
          />
        </div>
        <div className="absolute top-[47px] left-[calc(50%_+_584px)] leading-[156.23%] font-semibold">
          My Account
        </div>
        <div className="absolute top-[47px] left-[calc(50%_-_298px)] w-[595px] h-[37px]">
          <div className="absolute top-[0px] left-[calc(50%_-_297.5px)] w-[595px] h-[37px]">
            <div className="absolute top-[0px] left-[calc(50%_+_235.5px)] leading-[156.23%] font-semibold">
              Store
            </div>
            <div
              className="absolute top-[0px] left-[calc(50%_-_297.5px)] leading-[156.23%] font-semibold cursor-pointer"
              onClick={onHomeTextClick}
            >
              Home
            </div>
            <div className="absolute top-[0px] left-[calc(50%_+_38.5px)] leading-[156.23%] font-semibold">
              Who we are
            </div>
            <div className="absolute top-[0px] left-[130px] w-[146px] h-[37px]">
              <div className="absolute top-[0%] left-[0%] leading-[156.23%] font-semibold">
                Our Services
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[3495px] left-[70px] w-[1372px] h-[647px]">
        <div className="absolute top-[0px] left-[0px] w-[1372px] h-[647px]">
          <div className="absolute top-[181px] left-[0px] w-[536px] h-[412px]">
            <div className="absolute top-[65px] left-[64px] rounded-17xl bg-whitesmoke box-border w-[473px] h-[348px] border-[1px] border-solid border-grey-color" />
            <img
              className="absolute top-[0px] left-[0px] rounded-54xl w-[258px] h-[218px] object-cover"
              alt=""
              src="/rectangle-332@2x.png"
            />
            <div className="absolute top-[100px] left-[288px] leading-[133%] font-semibold">
              Sam Smith
            </div>
            <div className="absolute top-[256px] left-[117px] text-xl tracking-[0.01em] leading-[120%] inline-block w-[356px]">
              I've been on the Classic Plan for a month now, and it has made
              healthy eating so effortless!
            </div>
            <img
              className="absolute top-[238px] left-[81px] w-6 h-6"
              alt=""
              src="/group-581.svg"
            />
            <img
              className="absolute top-[161px] left-[288px] w-[86px] h-3.5"
              alt=""
              src="/group-438.svg"
            />
          </div>
          <div className="absolute top-[181px] left-[756px] w-[536px] h-[412px]">
            <div className="absolute top-[65px] left-[64px] rounded-17xl bg-whitesmoke box-border w-[473px] h-[348px] border-[1px] border-solid border-grey-color" />
            <img
              className="absolute top-[0px] left-[0px] rounded-54xl w-[258px] h-[218px] object-cover"
              alt=""
              src="/rectangle-3321@2x.png"
            />
            <div className="absolute top-[100px] left-[288px] leading-[133%] font-semibold">
              Cindy Hart
            </div>
            <div className="absolute top-[256px] left-[117px] text-xl tracking-[0.01em] leading-[120%] inline-block w-[387px]">
              The Classic meal plans provided by StayFIT have made healthy
              eating easy and enjoyable for me. Thank you!
            </div>
            <img
              className="absolute top-[238px] left-[81px] w-6 h-6"
              alt=""
              src="/group-581.svg"
            />
            <img
              className="absolute top-[161px] left-[288px] w-[86px] h-3.5"
              alt=""
              src="/group-4381.svg"
            />
          </div>
          <div className="absolute top-[639px] left-[649px] w-[74px] h-2">
            <div className="absolute top-[0px] left-[0px] rounded-10xl bg-lightgreen w-[26px] h-2" />
            <div className="absolute top-[0px] left-[34px] rounded-10xl bg-honeydew w-2 h-2" />
            <div className="absolute top-[0px] left-[50px] rounded-10xl bg-honeydew w-2 h-2" />
            <div className="absolute top-[0px] left-[66px] rounded-10xl bg-honeydew w-2 h-2" />
          </div>
          <img
            className="absolute top-[399px] left-[1308px] w-16 h-16"
            alt=""
            src="/arrow.svg"
          />
          <div className="absolute top-[0px] left-[calc(50%_-_673px)] text-27xl leading-[133%] font-semibold text-text-dark-grey-color">
            Hear from our satisfied users who have tried our Meal Plans!
          </div>
        </div>
      </div>
      <div className="absolute top-[1288px] left-[calc(50%_-_726px)] w-[1452px] h-[2007px] text-center text-5xs font-sans-hebrew">
        <div className="absolute top-[0px] left-[calc(50%_-_125px)] shadow-[8px_8px_26px_rgba(0,_0,_0,_0.3)] w-[250px] h-96 text-xs">
          <img
            className="absolute top-[0px] left-[calc(50%_-_125px)] rounded-3xs w-[250px] h-96 object-cover"
            alt=""
            src="/rectangle-362@2x.png"
          />
          <img
            className="absolute top-[188px] left-[calc(50%_-_126px)] w-[252px] h-[197px]"
            alt=""
            src="/rectangle-367.svg"
          />
          <b className="absolute top-[208px] left-[64px] text-lg leading-[156.23%] inline-block w-[123px]">
            Classic Meal Plan
          </b>
          <div className="absolute top-[270px] left-[35px] leading-[156.23%] inline-block w-[180px]">
            Balanced and varied eating plan with a focus on whole foods.
          </div>
          <div className="absolute top-[320px] left-[86px] leading-[156.23%] text-dimgray">
            <span>{`Starts @ `}</span>
            <b>599/-</b>
            <span>{` `}</span>
          </div>
        </div>
        <img
          className="absolute top-[508px] left-[calc(50%_-_656px)] rounded-3xs w-[280px] h-[280px] object-cover"
          alt=""
          src="/rectangle-3621@2x.png"
        />
        <div className="absolute top-[508px] left-[390px] w-[461px] h-[236px] text-left text-lg font-sans">
          <div className="absolute top-[0px] left-[6px] w-[455px] h-48">
            <div className="absolute top-[80px] left-[0px] leading-[156%] inline-block w-[455px]">
              Our Classic Meal Plan offers a balanced selection of meals
              designed to meet your nutritional needs. Enjoy a variety of
              delicious and healthy dishes carefully curated by our team of
              experts.
            </div>
            <div className="absolute top-[0px] left-[0px] text-[36px] leading-[156.23%] font-extrabold font-sans-hebrew text-center inline-block w-[333.76px]">
              Classic Meal Plan
            </div>
          </div>
          <div className="absolute top-[208px] left-[0px] leading-[156.23%] text-dimgray text-center font-sans-hebrew">
            <span>{`Starts @ `}</span>
            <b>599/-</b>
            <span>{` `}</span>
          </div>
        </div>
        <img
          className="absolute top-[45px] left-[calc(50%_+_173px)] rounded-3xs w-[190px] h-[294px] object-cover"
          alt=""
          src="/rectangle-363@2x.png"
        />
        <img
          className="absolute top-[45px] left-[calc(50%_+_425px)] rounded-3xs w-[190px] h-[294px] object-cover"
          alt=""
          src="/rectangle-366@2x.png"
        />
        <img
          className="absolute top-[45px] left-[calc(50%_-_363px)] rounded-3xs w-[190px] h-[294px] object-cover"
          alt=""
          src="/rectangle-364@2x.png"
        />
        <img
          className="absolute top-[178px] left-[calc(50%_-_364px)] w-48 h-[162px]"
          alt=""
          src="/rectangle-368.svg"
        />
        <img
          className="absolute top-[178px] left-[calc(50%_+_172px)] w-48 h-[162px]"
          alt=""
          src="/rectangle-368.svg"
        />
        <img
          className="absolute top-[178px] left-[calc(50%_+_424px)] w-48 h-[162px]"
          alt=""
          src="/rectangle-371.svg"
        />
        <img
          className="absolute top-[45px] left-[calc(50%_-_615px)] rounded-3xs w-[190px] h-[294px] object-cover"
          alt=""
          src="/rectangle-365@2x.png"
        />
        <div className="absolute top-[295px] left-[967px] leading-[156.23%]">
          <span>{`Starts @ `}</span>
          <b>599/-</b>
          <span>{` `}</span>
        </div>
        <div className="absolute top-[283px] left-[431px] leading-[156.23%]">
          <span>{`Starts @ `}</span>
          <b>599/-</b>
          <span>{` `}</span>
        </div>
        <div className="absolute top-[283px] left-[1220px] leading-[156.23%]">
          <span>{`Starts @ `}</span>
          <b>599/-</b>
          <span>{` `}</span>
        </div>
        <img
          className="absolute top-[160px] left-[1388px] w-16 h-16"
          alt=""
          src="/arrow.svg"
        />
        <img
          className="absolute top-[160px] left-[0px] w-16 h-16"
          alt=""
          src="/arrow1.svg"
        />
        <b className="absolute top-[197px] left-[422px] text-sm leading-[156.23%] inline-block w-[72px]">
          Keto Meal Plan
        </b>
        <b className="absolute top-[197px] left-[933px] text-sm leading-[156.23%] inline-block w-[121px]">
          Gluten-free Meal Plan
        </b>
        <b className="absolute top-[197px] left-[1191px] text-sm leading-[156.23%] inline-block w-[110px]">
          Low- Fat Meal Plan
        </b>
        <img
          className="absolute top-[178px] left-[calc(50%_-_616px)] w-48 h-[162px]"
          alt=""
          src="/rectangle-368.svg"
        />
        <b className="absolute top-[197px] left-[166px] text-sm leading-[156.23%] inline-block w-[81px]">
          Vegan Meal Plan
        </b>
        <div className="absolute top-[247px] left-[380px] leading-[156.23%] inline-block w-[156px]">
          Low-carb, high-fat diet to promote ketosis and fat burning.
        </div>
        <div className="absolute top-[247px] left-[141px] leading-[156.23%] inline-block w-[130px]">
          Plant-based proteins, healthy fats, vitamins, and minerals
        </div>
        <div className="absolute top-[247px] left-[920px] leading-[156.23%] inline-block w-[148px]">
          Avoidance of gluten-containing foods for individuals with gluten
          sensitivities or celiac disease.
        </div>
        <div className="absolute top-[247px] left-[1174px] leading-[156.23%] inline-block w-36">
          Emphasis on low-fat foods for heart health and weight management.
        </div>
        <div className="absolute top-[283px] left-[180px] leading-[156.23%]">
          <span>{`Starts @ `}</span>
          <b>599/-</b>
          <span>{` `}</span>
        </div>
        <div className="absolute top-[508px] left-[calc(50%_+_154px)] w-[502px] h-[681px] text-left text-5xl font-sans">
          <img
            className="absolute top-[-9px] left-[calc(50%_-_260px)] rounded-3xs w-[520px] h-[699px]"
            alt=""
            src="/rectangle-3671.svg"
          />
          <b className="absolute top-[42px] left-[148px] text-13xl leading-[156.23%] inline-block font-sans-hebrew text-center w-52">
            Key Features
          </b>
          <div className="absolute top-[155px] left-[52px] w-[368px] h-[74px]">
            <div className="absolute top-[0px] left-[65px] leading-[156%] inline-block w-[303px]">
              Get a variety of meal plans everyday
            </div>
            <div className="absolute top-[36px] left-[-1px] rounded-md bg-whitesmoke box-border w-[26px] h-[26px] [transform:_rotate(-44.71deg)] [transform-origin:0_0] border-[1px] border-solid border-stroke-green-color" />
          </div>
          <div className="absolute top-[363px] left-[52px] w-[359px] h-[74px]">
            <div className="absolute top-[0px] left-[65px] leading-[156.23%] inline-block w-[294px]">
              Portion Control and Calorie Guidance
            </div>
            <div className="absolute top-[36px] left-[-1px] rounded-md bg-whitesmoke box-border w-[26px] h-[26px] [transform:_rotate(-45deg)] [transform-origin:0_0] border-[1px] border-solid border-stroke-green-color" />
          </div>
          <div className="absolute top-[467px] left-[52px] w-[397px] h-[70px]">
            <div className="absolute top-[0px] left-[65px] leading-[156.23%] inline-block w-[332px] h-[70px]">
              Professional guidance from Nutritionists or dietitians
            </div>
            <div className="absolute top-[34px] left-[-1px] rounded-md bg-whitesmoke box-border w-[26px] h-[26px] [transform:_rotate(-44.71deg)] [transform-origin:0_0] border-[1px] border-solid border-stroke-green-color" />
          </div>
          <div className="absolute top-[567px] left-[52px] w-[368px] h-[70px]">
            <div className="absolute top-[0px] left-[65px] leading-[156.23%] inline-block w-[303px] h-[70px]">
              Convenient and Easy-to-Follow
            </div>
            <div className="absolute top-[34px] left-[-1px] rounded-md bg-whitesmoke box-border w-[26px] h-[26px] [transform:_rotate(-44.71deg)] [transform-origin:0_0] border-[1px] border-solid border-stroke-green-color" />
          </div>
          <div className="absolute top-[259px] left-[52px] w-[397px] h-[74px]">
            <div className="absolute top-[0px] left-[65px] leading-[156%] inline-block w-[332px]">{`Breakfast, lunch, snacks & dinner `}</div>
            <div className="absolute top-[36px] left-[-1px] rounded-md bg-whitesmoke box-border w-[26px] h-[26px] [transform:_rotate(-45deg)] [transform-origin:0_0] border-[1px] border-solid border-stroke-green-color" />
          </div>
        </div>
        <div className="absolute top-[1891px] left-[calc(50%_-_165px)] rounded-2xl [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))] box-border w-[331px] h-[116px] overflow-hidden flex flex-row items-center justify-center py-7 px-[73px] text-left text-13xl text-dark-green-color font-sans border-[1px] border-solid border-palegoldenrod">
          <div className="relative leading-[120%] font-semibold">Get Plan</div>
        </div>
        <div className="absolute top-[1273px] left-[70px] w-[280px] h-[534px] text-left text-inherit font-sans">
          <div className="absolute top-[0px] left-[0px] w-[280px] h-[534px] text-center text-13xl text-whitesmoke">
            <div className="absolute top-[-1px] left-[-1px] rounded-lg bg-whitesmoke box-border w-[282px] h-[536px] border-[1px] border-solid border-grey-color" />
            <div className="absolute top-[8.83px] left-[8px] rounded-lg [background:linear-gradient(105.9deg,_#9bc6ee,_#a79bee)] w-[264px] h-[154.46px]" />
            <div className="absolute top-[58.48px] left-[76px] leading-[156.23%] font-semibold inline-block w-[129px] h-[55.17px]">
              1 Month
            </div>
          </div>
          <img
            className="absolute top-[186px] left-[122px] w-[37px] h-8"
            alt=""
            src="/group-27.svg"
          />
          <div className="absolute top-[261px] left-[12px] leading-[156.23%] font-inherit inline-block w-[209px]">
            <ul className="m-0 pl-6">Flexibility of monthly renewal.</ul>
          </div>
          <div className="absolute top-[335px] left-[12px] leading-[156.23%] font-inherit inline-block w-[216px]">
            <ul className="m-0 pl-6">
              Try out the plan with minimal commitment.
            </ul>
          </div>
          <div className="absolute top-[476px] left-[97px] text-lg leading-[156.23%] font-semibold">
            Rs. 599.00
          </div>
        </div>
        <div className="absolute top-[1273px] left-[416px] w-[280px] h-[534px] text-left text-inherit font-sans">
          <div className="absolute top-[0px] left-[0px] w-[280px] h-[534px] text-center text-13xl text-whitesmoke">
            <div className="absolute top-[-1px] left-[-1px] rounded-lg bg-whitesmoke box-border w-[282px] h-[536px] border-[1px] border-solid border-grey-color" />
            <div className="absolute top-[8px] left-[8px] rounded-lg [background:linear-gradient(105.9deg,_#83bef5,_#838ef5)] w-[264px] h-[140px]" />
            <div className="absolute top-[53px] left-[72px] leading-[156.23%] font-semibold">
              3 Month
            </div>
          </div>
          <img
            className="absolute top-[182.83px] left-[119px] w-[43.17px] h-[37.33px]"
            alt=""
            src="/group-612.svg"
          />
          <div className="absolute top-[263px] left-[12px] leading-[156.23%] font-inherit inline-block w-[244px]">
            <ul className="m-0 pl-6">
              Additional savings compared to the 1-month plan.
            </ul>
          </div>
          <div className="absolute top-[476px] left-[44px] text-lg leading-[156.23%]">
            <span>
              <span className="font-semibold font-sans">Rs. 1,299.00</span>
              <span className="text-red">{`    `}</span>
            </span>
            <span className="text-red">
              <span className="[text-decoration:line-through]">1,797.00</span>
              <span className="text-gray-200">{`  `}</span>
            </span>
          </div>
          <div className="absolute top-[365px] left-[12px] leading-[156.23%] font-inherit inline-block w-[246px]">
            <ul className="m-0 pl-6">{`Continued convenience and access to the plan `}</ul>
          </div>
        </div>
        <div className="absolute top-[1273px] left-[758px] w-[280px] h-[534px] text-left text-inherit font-sans">
          <div className="absolute top-[0px] left-[0px] w-[280px] h-[534px] text-center text-13xl text-whitesmoke">
            <div className="absolute top-[-1px] left-[-1px] rounded-lg bg-whitesmoke box-border w-[282px] h-[536px] border-[1px] border-solid border-grey-color" />
            <div className="absolute top-[8px] left-[8px] rounded-lg [background:linear-gradient(103.46deg,_#64b1f7,_#7064f7)] w-[264px] h-[140px]" />
            <div className="absolute top-[53px] left-[77px] leading-[156.23%] font-semibold">
              6 Month
            </div>
          </div>
          <img
            className="absolute top-[178.53px] left-[114px] w-[53.46px] h-[46.93px]"
            alt=""
            src="/group-613.svg"
          />
          <div className="absolute top-[268px] left-[13px] leading-[156.23%] font-inherit inline-block w-[244px]">
            <ul className="m-0 pl-6">{`Additional savings compared to the 1-month & 3-month plan`}</ul>
          </div>
          <div className="absolute top-[476px] left-[44px] text-lg leading-[156.23%]">
            <span>
              <span className="font-semibold font-sans">Rs. 2,499.00</span>
              <span className="text-red">{`    `}</span>
            </span>
            <span className="text-red">
              <span className="[text-decoration:line-through]">3,594.00</span>
              <span className="text-gray-200">{`  `}</span>
            </span>
          </div>
          <div className="absolute top-[370px] left-[12px] leading-[156.23%] font-inherit inline-block w-[262px]">
            <ul className="m-0 pl-6">
              Consistent support for your 6-month plan duration.
            </ul>
          </div>
        </div>
        <div className="absolute top-[1273px] left-[1102px] w-[280px] h-[534px] text-left text-inherit font-sans">
          <div className="absolute top-[0px] left-[0px] w-[280px] h-[534px] text-center text-13xl text-whitesmoke">
            <div className="absolute top-[-1px] left-[-1px] rounded-lg bg-whitesmoke box-border w-[282px] h-[536px] border-[1px] border-solid border-grey-color" />
            <div className="absolute top-[8px] left-[8px] rounded-lg [background:linear-gradient(103.46deg,_#378fe0,_#5937e0)] w-[264px] h-[140px]" />
            <div className="absolute top-[53px] left-[67px] leading-[156.23%] font-semibold">
              12 Month
            </div>
          </div>
          <img
            className="absolute top-[173.23px] left-[109px] w-[63.76px] h-[56.53px]"
            alt=""
            src="/group-614.svg"
          />
          <div className="absolute top-[272px] left-[12px] leading-[156.23%] font-inherit inline-block w-[233px]">
            <ul className="m-0 pl-6">
              Maximum savings than shorter duration plans.
            </ul>
          </div>
          <div className="absolute top-[476px] left-[44px] text-lg leading-[156.23%]">
            <span>
              <span className="font-semibold font-sans">Rs. 5,090.00</span>
              <span className="text-red">{`    `}</span>
            </span>
            <span className="text-red">
              <span className="[text-decoration:line-through]">7,188.00</span>
              <span className="text-gray-200">{`  `}</span>
            </span>
          </div>
          <div className="absolute top-[346px] left-[12px] leading-[156.23%] font-inherit inline-block w-[220px]">
            <ul className="m-0 pl-6">{`Enjoy consistent meal support. No payment hassle for an year `}</ul>
          </div>
        </div>
      </div>
      <div className="absolute top-[554px] left-[140px] w-[1232px] h-[143px] text-27xl">
        <div className="absolute top-[0px] left-[0px] tracking-[0.02em] leading-[156.23%] inline-block w-[774px] h-[143px]">
          <span>
            <span>Get a</span>
          </span>
          <span className="font-semibold text-dark-green-color">
            <span>{` `}</span>
            <span>Personalized Meal Plan</span>
          </span>
          <span>
            <span className="font-semibold text-dark-green-color">{` `}</span>
            <span className="font-sans">and</span>
            <span className="font-semibold font-sans">{` `}</span>
            <span>get a plan that’s right for you.</span>
          </span>
        </div>
        <Link to="/MealPlans" className="absolute top-[29px] left-[946px] rounded-2xl [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))] overflow-hidden flex flex-row items-center justify-center py-7 px-[73px] text-5xl text-dark-green-color border-[1px] border-solid border-palegoldenrod">
          <button className="relative leading-[120%] font-semibold">
            Take Survey
          </button>
        </Link>
      </div>
      <div className="absolute top-[4342px] left-[calc(50%_-_615px)] w-[1189px] h-[617px]">
        <div className="absolute top-[0px] left-[calc(50%_-_311.5px)] text-27xl leading-[156.23%] font-semibold">
          Frequently Asked Questions
        </div>
        <img
          className="absolute top-[200px] left-[819px] w-[370px] h-[374px] object-cover"
          alt=""
          src="/rectangle-344@2x.png"
        />
        <div className="absolute top-[191px] left-[-1px] rounded-7xl bg-whitesmoke box-border w-[598px] h-[99px] overflow-hidden border-[1px] border-solid border-stroke-green-color">
          <div className="absolute top-[30px] left-[30px] leading-[133%] font-semibold">
            How do I enroll in a course?
          </div>
          <div className="absolute top-[27px] left-[546px] text-13xl leading-[133%] font-tsukimi-rounded">
            +
          </div>
        </div>
        <div className="absolute top-[318px] left-[-1px] rounded-7xl bg-whitesmoke box-border w-[598px] h-[136px] overflow-hidden border-[1px] border-solid border-stroke-green-color">
          <div className="absolute top-[30px] left-[30px] leading-[133%] font-semibold inline-block w-[436px]">
            Are the courses suitable for beginners?
          </div>
          <div className="absolute top-[45.5px] left-[546px] text-13xl leading-[133%] font-tsukimi-rounded">
            +
          </div>
        </div>
        <div className="absolute top-[482px] left-[-1px] rounded-7xl bg-whitesmoke box-border w-[598px] h-[136px] overflow-hidden border-[1px] border-solid border-stroke-green-color">
          <div className="absolute top-[30px] left-[30px] leading-[133%] font-semibold inline-block w-[436px]">
            Can I access the course materials at any time?
          </div>
          <div className="absolute top-[45.5px] left-[546px] text-13xl leading-[133%] font-tsukimi-rounded">
            +
          </div>
        </div>
      </div>
      <div className="absolute top-[897px] left-[calc(50%_-_320px)] w-[640px] h-[271px] text-center text-[40px]">
        <div className="absolute top-[0px] left-[calc(50%_-_320px)] rounded-2xl bg-ivory shadow-[4px_4px_17px_rgba(0,_0,_0,_0.25)] box-border w-[640px] h-[271px] border-[1px] border-solid border-grey-color" />
        <div className="absolute top-[42px] left-[46px] w-[548px] h-[189px]">
          <div className="absolute top-[0px] left-[0px] leading-[156.23%] font-semibold">
            Try out Free 7-day Meal plan
          </div>
          <div className="absolute top-[104px] left-[152px] rounded-2xl [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))] overflow-hidden flex flex-row items-center justify-center py-7 px-[73px] text-left text-5xl text-dark-green-color border-[1px] border-solid border-palegoldenrod">
            <div className="relative leading-[120%] font-semibold">Try Now</div>
          </div>
        </div>
      </div>
      <div className="absolute top-[5219px] left-[0px] w-[1512px] h-[400px] text-xl text-dark-green-color font-body-main">
        <div className="absolute top-[0px] left-[0px] bg-whitesmoke shadow-[0px_-3px_11px_1px_rgba(231,_231,_231,_0.59)] w-[1512px] h-[400px]" />
        <div className="absolute top-[0px] left-[756px] bg-beige w-[756px] h-[400px]" />
        <div className="absolute top-[82px] left-[82px] w-[205px] h-[184px] text-center text-[37.87px] text-black font-roboto-flex">
          <div className="absolute top-[0px] left-[0px] w-[142px] h-[100px]">
            <div className="absolute top-[0px] left-[0px] leading-[150.19%] inline-block w-[134.11px] h-[63.49px]">
              <i>stay</i>
              <i className="text-[56.8px] font-body-main">FIT</i>
            </div>
            <img
              className="absolute top-[69.84px] left-[6.31px] w-[135.69px] h-[30.16px]"
              alt=""
              src="/vector-51.svg"
            />
            <img
              className="absolute top-[59px] left-[116.46px] w-[12.56px] h-[21.91px]"
              alt=""
              src="/vector-61.svg"
            />
            <img
              className="absolute top-[78.36px] left-[117.89px] w-[24.24px] h-[10.69px]"
              alt=""
              src="/vector-71.svg"
            />
          </div>
          <div className="absolute top-[130px] left-[0px] text-lg leading-[150%] font-sans text-grey-color text-left">
            <p className="m-0">Copyright © StayFIT LLC.</p>
            <p className="m-0">All rights reserved.</p>
          </div>
        </div>
        <div className="absolute top-[92px] left-[380px] w-[252px] h-[164px]">
          <img
            className="absolute top-[0px] left-[0px] rounded-xl w-[252px] h-[164px] object-cover"
            alt=""
            src="/rectangle-347@2x.png"
          />
        </div>
        <div className="absolute top-[82px] left-[899px] w-[104px] h-[104px]">
          <div className="absolute top-[0px] left-[0px] leading-[150%]">
            Home
          </div>
          <div
            className="absolute top-[74px] left-[0px] leading-[150%] cursor-pointer"
            onClick={onWhoWeAre1Click}
          >
            Who we are
          </div>
        </div>
        <div className="absolute top-[82px] left-[1071px] w-[106px] h-[178px]">
          <div
            className="absolute top-[148px] left-[0px] leading-[150%] cursor-pointer"
            onClick={onFAQsTextClick}
          >
            FAQs
          </div>
          <div className="absolute top-[74px] left-[0px] leading-[150%]">
            My Account
          </div>
          <div
            className="absolute top-[0px] left-[0px] leading-[150%] cursor-pointer"
            onClick={onStoreText1Click}
          >
            Store
          </div>
        </div>
        <div className="absolute top-[82px] left-[1245px] w-[124px] h-[178px]">
          <div
            className="absolute top-[0px] left-[0px] leading-[150%] cursor-pointer"
            onClick={onTermsOfUseClick}
          >
            Terms of use
          </div>
          <div
            className="absolute top-[74px] left-[0px] leading-[150%] cursor-pointer"
            onClick={onPrivacyPolicyTextClick}
          >
            Privacy Policy
          </div>
          <div
            className="absolute top-[148px] left-[5px] leading-[150%] cursor-pointer"
            onClick={onContactUsTextClick}
          >
            Contact us
          </div>
        </div>
      </div>
    </div>
  );
};

export default MEALPLANS;
