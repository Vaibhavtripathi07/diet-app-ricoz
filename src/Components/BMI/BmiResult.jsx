
import orange_end from "../../asset/orange_end.png";
import red_start from "../../asset/red_start.png";
import sand_yellow from "../../asset/sand_yellow.png";
import light_green from "../../asset/light_green.png";
import dark_green from "../../asset/dark_green.png";
import light_yellow from "../../asset/light_yellow.png";
import orange_start from "../../asset/orange_start.png";
import red_end from "../../asset/red_end.png";
import Bmi_indicator_arrow from "../../asset/Bmi_indicator_arrow.png";
import meter_lower_circle from "../../asset/meter_lower_circle.png";
import Nav from "../Top_Nav/Nav";


const BmiResult = () => {

  // const onGroupContainerClick = useCallback(() => {
  //   // Please sync "LANDING" to the project
  // }, []);

    // Get the Bmi value from the URL parameters
    

  return (
    <div className="relative bg-whitesmoke w-[1512px] h-[982px] overflow-hidden text-center text-13xl text-black font-sans xl:w-full">
      <div className="absolute top-[326px] left-[634px] rounded-xl bg-whitesmoke box-border w-[243px] h-[74px] border-[1px] border-solid border-base-red-color" />
      <p
        className="m-0 absolute top-[172px] left-[calc(50%_-_60px)] leading-[174.53%] font-semibold fontsans"
        id="Result"
      >
        Result
      </p>
      <p
        className="m-0 absolute top-[254px] left-[calc(50%_-_161px)] text-[32px] leading-[150.19%]"
        id="your_body_mass_index"
      >{`Your body mass index is: `}</p>
      <p
        className="m-0 absolute top-[424px] left-[calc(50%_-_29px)] text-lg leading-[150.19%] text-dark-green-color"
        id="bmi_end_result"
      >
        Normal
      </p>
      <div className="absolute top-[829px] left-[calc(50%_-_104px)] rounded-2xl [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))] overflow-hidden flex flex-row items-center justify-center py-7 px-[73px] border-[1px] border-solid border-palegoldenrod">
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-5xl leading-[120%] font-semibold font-open-sans text-dark-green-color text-left inline-block"
          id="Done"
        >
          Done
        </button>
      </div>
     
        <Nav />
      
      <section
        className="absolute top-[508px] left-[calc(50%_-_270.97px)] w-[535.4px] h-[273px] text-center text-lg text-gray font-roboto-flex"
        id="Bmi_meter"
      >
        <section
          className="absolute top-[43.09px] left-[calc(50%_-_200.8px)] w-[424.82px] h-[219.68px]"
          id="bmi_inner_Meter"
        >
          <img
            className="absolute top-[132.18px] left-[calc(50%_-_236.41px)] w-[61.76px] h-[87.5px] object-cover"
            alt="red"
            src={red_start}
          />
          <img
            className="absolute top-[58.55px] left-[calc(50%_-_219.62px)] w-[82.96px] h-[92.59px] object-cover"
            alt="orange"
            src={orange_start}
          />
          <img
            className="absolute top-[9.48px] left-[calc(50%_-_172.79px)] w-[92.52px] h-[84.14px] object-cover"
            alt="light_yellow"
            src={light_yellow}
          />
          <img
            className="absolute top-[-9.74px] left-[calc(50%_-_100.24px)] w-[88.28px] h-[63.32px] object-cover"
            alt="green"
            src={dark_green}
          />
          <img
            className="absolute top-[-9px] left-[calc(50%_-_13.56px)] w-[88.03px] h-[59.82px] object-cover"
            alt="light_green"
            src={light_green}
          />
          <img
            className="absolute top-[5.88px] left-[calc(50%_+_56.95px)] w-[92.76px] h-[82.69px] object-cover"
            alt="sand"
            src={sand_yellow}
          />
          <img
            className="absolute top-[53.28px] left-[calc(50%_+_115.61px)] w-[85.7px] h-[93.75px] object-cover"
            alt="orangee"
            src={orange_end}
          />
          <img
            className="absolute top-[126.42px] left-[calc(50%_+_157.2px)] w-[64.4px] h-[93.63px] object-cover"
            alt="redd"
            src={red_end}
          />
        </section>
        <img
          className="absolute top-[112.92px] left-[213.91px] w-[66.16px] h-[153.06px] object-cover"
          alt="bmi_arrow_indicator"
          src={Bmi_indicator_arrow}
        />
        <img
          className="absolute top-[254.24px] left-[calc(50%_+_2.34px)] w-[18.78px] h-[18.76px] object-cover"
          alt="arrow_lower_circle"
          src={meter_lower_circle}
        />
        <p
          className="m-0 absolute top-[263.02px] left-[0px] leading-[106.19%] [transform:_rotate(-87.35deg)] [transform-origin:0_0]"
          id="underweight"
        >
          Under weight
        </p>
        <p
          className="m-0 absolute top-[0px] left-[calc(50%_-_34.52px)] leading-[106.19%] [transform:_rotate(0.64deg)] [transform-origin:0_0]"
          id="normal"
        >
          Normal
        </p>
        <p
          className="m-0 absolute top-[26px] left-[418.14px] leading-[106.19%] [transform:_rotate(39.77deg)] [transform-origin:0_0]"
          id="overweight"
        >
          Overweight
        </p>
        <p
          className="m-0 absolute top-[62.19px] left-[66.97px] leading-[106.19%] [transform:_rotate(-36.23deg)] [transform-origin:0_0]"
          id="mild_thin"
        >
          Mild thin
        </p>
        <p
          className="m-0 absolute top-[197.07px] left-[532.58px] leading-[106.19%] [transform:_rotate(87.26deg)] [transform-origin:0_0]"
          id="obesity"
        >
          Obesity
        </p>
      </section>
      <div className="absolute top-[328px] left-[calc(50%_-_75px)] w-[148px] h-[70px] text-dimgray">
        <p
          className="DISPLAY m-0 absolute top-[0px] left-[calc(50%_-_74px)] leading-[174.53%] font-semibold font-open-sans text-text-black-color"
          id="bmi_value"
        >
          {/* {`18.6 `} */}
          {/* {props.value} */}
          {/* {`${bmiValue} `} */}
        </p>
        <p
          className="m-0 absolute top-[31px] left-[98px] text-lg leading-[150.19%] font-bold"
          id="bmi_unit"
        >
          kg/m
        </p>
        <p
          className="m-0 absolute top-[24px] left-[138px] text-[16px] leading-[150.19%] font-bold inline-block w-2.5 h-[18px]"
          id="bmi_unit_power"
        >
          2
        </p>
      </div>
    </div>
  );
};

export default BmiResult;
