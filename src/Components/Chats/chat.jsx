import { useCallback } from "react";
import Nav from "../Top_Nav/Nav";
import online from "../../asset/online.png";
import send from "../../asset/Send.png";
import Mic from "../../asset/Mic.png";
import Previous from "../../asset/Previous.png";
import doctor from "../../asset/doctor.png";
import Next from "../../asset/Next.png";

const Chat = () => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "LANDING" to the project
  }, []);

  return (
    <div className="relative bg-whitesmoke-100 w-[1512px] h-[952px] overflow-hidden text-left text-5xl text-darkslategray font-sans xl:w-full">
      {/* <img
        className="absolute top-[calc(50%_-_359px)] left-[556px] w-[956px] h-[835px]"
        alt=""
        src={Previous}
      /> */}
      {/* <img
        className="absolute top-[298px] left-[0px] w-[551px] h-[196px]"
        alt=""
        src={Next}
      />  */}
      <div className="absolute h-[35.06%] w-[86.77%] top-[31.66%] right-[6.61%] bottom-[33.28%] left-[6.61%] rounded-xl bg-whitesmoke-100 shadow-[-6px_6px_25px_rgba(0,_0,_0,_0.2)] box-border hidden border-[1px] border-solid border-base-red-color" />
      <header
        className="absolute top-[0px] left-[0px] shadow-[0px_2px_8px_rgba(0,_0,_0,_0.07)] w-[1512px] h-32 text-left text-5xl text-dark-green-color font-sans"
        id="NAV"
      >
        <Nav />
      </header>
      <div className="absolute h-[14.08%] w-[24.87%] top-[34.56%] right-[73.15%] bottom-[51.37%] left-[1.98%] text-gray-200 font-sans">
        {/* doctor border */}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="551"
          height="196"
          viewBox="0 0 551 196"
          fill="none"
          className="absolute -top-[44px] -left-[29px] m-0"
        >
          <g filter="url(#filter0_d_1786_719)">
            <path
              d="M0 8H453C502.706 8 543 48.2944 543 98C543 147.706 502.706 188 453 188H0V8Z"
              fill="#F9F9F9"
            />
            <path
              d="M0.5 8.5H453C502.429 8.5 542.5 48.5705 542.5 98C542.5 147.429 502.429 187.5 453 187.5H0.5V8.5Z"
              stroke="#E1E1E1"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_1786_719"
              x="-8"
              y="0"
              width="559"
              height="196"
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
              <feGaussianBlur stdDeviation="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1786_719"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1786_719"
                result="shape"
              />
            </filter>
          </defs>
        </svg>

        <img
          className="absolute top-[50px] left-[475px] w-[12px] h-[20px]"
          alt=""
          src={Next}
        />
        {/* doctor border */}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="956"
          height="835"
          viewBox="0 0 956 835"
          fill="none"
          className=" ml-[530px] -mt-[220px]"
        >
          <g filter="url(#filter0_d_1786_705)">
            <path d="M11 11H956V835H11V11Z" fill="#F9F9F9" />
          </g>
          <defs>
            <filter
              id="filter0_d_1786_705"
              x="0"
              y="0"
              width="967"
              height="846"
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
              <feGaussianBlur stdDeviation="5.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.11 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1786_705"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1786_705"
                result="shape"
              />
            </filter>
          </defs>
        </svg>

        <img
          className="absolute h-[123.88%] w-[44.49%] top-[-8.21%] right-[61.09%] bottom-[-15.67%] left-[-5.58%]  max-w-full overflow-hidden max-h-full object-cover"
          alt="DR"
          src={doctor}
        />
        <div className="absolute h-[27.34%] w-[53.98%] top-[11.54%] left-[46.02%] leading-[156.23%] font-semibold inline-block">
          Dr. Tony Chopper
        </div>
        <div className="absolute h-[27.34%] w-[34.04%] top-[39.42%] left-[46.02%] leading-[156.23%] text-grey-color inline-block">
          Nutritionist
        </div>
        {/* <img
          className="absolute h-[12.11%] w-[23.05%] top-[82.61%] right-[31.04%] bottom-[5.29%] left-[45.91%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={Next}
        /> */}
      </div>
      <h3 className="absolute top-[170px] left-[calc(50%_-_544px)] text-[32px] tracking-[16.96px] leading-[133%] font-semibold font-sans text-stroke-green-color">
        Chats
      </h3>
      <div className="absolute top-[18.28%] left-[46.36%] leading-[156.23%] text-gray-200 font-sans">
        <span>{` `}</span>
        <span className="font-semibold">Dr. Tony Chopper</span>
      </div>
      <div className="absolute top-[862px] left-[649px] w-[827px] h-[60px] text-[18px] text-grey-color">
        <input
          className="bg-whitesmoke-200 absolute top-[-1px] pl-4 left-[-1px] rounded-lg box-border w-[829px] h-[62px] border-[1px] border-solid border-gainsboro"
          placeholder="type text"
          type="text"
        />

        <img
          className="absolute top-[8px] left-[775px] w-10 h-[44.44px] overflow-hidden object-cover"
          alt="send"
          src={send}
        />
      </div>
      <img
        className="absolute h-[4.2%] w-[1.59%] top-[91.6%] right-[58.53%] bottom-[4.2%] left-[39.88%] max-w-full overflow-hidden max-h-full object-cover"
        alt="mic"
        src={Mic}
      />

      <img
        className="absolute top-[180.5px] left-[38.5px] w-[15px] h-[23px]"
        alt=""
        src={Previous}
      />
      <div className="absolute h-[8.72%] w-[5.29%] top-[15.97%] right-[54.83%] bottom-[75.32%] left-[39.88%]">
        <img
          className="absolute h-[134.94%] w-[140%] top-[-13.25%] right-[-13.75%] bottom-[-21.69%] left-[-26.25%] rounded-61xl max-w-full overflow-hidden max-h-full object-cover"
          alt="dr"
          src={doctor}
        />
        <img
          className="absolute top-[40px] left-[30px] rounded-[50%] w-6 h-6 object-cover"
          alt="online"
          src={online}
        />
      </div>
      <div className="absolute h-[6.3%] w-[3.97%] top-[59.14%] right-[56.15%] bottom-[34.56%] left-[39.88%]">
        {/* <img
          className="absolute h-[149.72%] w-[153.33%] top-[-18.33%] right-[-18.33%] bottom-[-31.39%] left-[-35%] rounded-61xl max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={Next}
        /> */}
        {/* <div className="absolute top-[42.65px] left-[42px] rounded-[50%] bg-mediumseagreen box-border w-[18px] h-[17.35px] border-[1px] border-solid border-white" /> */}
      </div>
      {/* <div className="absolute top-[739px] left-[1131px] rounded-lg bg-base-green-light-colors w-[344px] h-[69px]" />
      <div className="absolute top-[421px] left-[958px] rounded-lg bg-base-green-light-colors w-[518px] h-[102px]" /> */}
      <p className="m-0 absolute top-[435px] left-[972px] text-5xl bg-base-green-lightcolors rounded-[18px] leading-[156.23%] font-medium font-inter w-[484px] p-2">
        Hi Dr. Tony. I am Yor Forger. I have booked an appointment for today.
      </p>
      <p
        className=" absolute top-[579px] text-[#333] left-[697px] rounded-[18px]  bg-base-green-lightcolors font-inter leading-[156.23%] font-medium text-5xl w-[500px] h-[120px]  pl-2 pt-1 pr-2  "
        id="drm"
      >
        Hi Yor. Yes. How would you like to have the session? Through chat or we
        can arrange call or video call as well.
      </p>
      <p
        className="m-0 absolute top-[755px] left-[1145px] text-5xl bg-base-green-lightcolors font-inter rounded-[18px] leading-[156.23%] font-medium p-2"
        id="pa"
      >
        A video call would be okay.
      </p>
      <p className="mt-[816px] top-[816px] text-[#828282] font-inter text-[14px] ml-[1365px]  rounded-[18px]  leading-[156.23%] font-medium text-gray-100 ">
        Seen 2 mins ago
      </p>
    </div>
  );
};

export default Chat;
