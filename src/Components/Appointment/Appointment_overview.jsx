import { useCallback , useState} from "react";
import doctor from "../../asset/doctor.png";
import rating from "../../asset/rating.png";
import date from "../../asset/date.png";
import time from "../../asset/time.png";
import Next from "../../asset/Next.png";
import call from "../../asset/call.png";
import videocall from "../../asset/videocall.png";
import chat from "../../asset/chat.png";
import previous from "../../asset/previous.png";
import Nav from "../Top_Nav/Nav";
import Sidebar from "../ProPic/Sidebar";

const Appinment_overview = () => {
  const [isChecked, setIsChecked] = useState(true);

  const onVectorIcon3Click = useCallback(() => {
    // Please sync "Appointment" to the project
  }, []);

  const onGroupIcon3Click = useCallback(() => {
    // Please sync "appinment oerview2" to the project
  }, []);

  return (
    <div className="relative bg-whitesmoke  min-h-screen h-[77.38rem] flex  overflow-hidden text-left text-[1.5rem] text-black font-sans xl:w-full ">
      <Nav/>
      <Sidebar/>
      <img
        className="absolute h-[3.11%] w-[2.65%] top-[13.3%] right-[2.65%] bottom-[83.59%] left-[94.71%] max-w-full overflow-hidden max-h-full object-cover"
        alt="date_img"
        src={date}
      />
      <section
        className="absolute top-[317px] left-[486px] w-[948px] h-[532px] text-left text-5xl text-gray font-sans"
        id="doctor_info"
      >
        <div className="absolute top-[28px] left-[188px] rounded-xl  box-border w-[395px] h-[103px] border-[1px] border-solid border-indianred" />
        <img
          className="absolute h-[36.09%] w-[20.25%] top-[-2.07%] right-[81.96%] bottom-[65.98%] left-[-2.22%] rounded-[60px] max-w-full overflow-hidden max-h-full object-cover"
          alt="doctor_img"
          src={doctor}
        />
        <div className="absolute h-[6.95%] w-[17.62%] top-[48.12%] right-[0%] bottom-[44.92%] left-[82.38%]">
          <p
            className="m-0 absolute top-[0%] left-[28.74%] leading-[156.23%]"
            id="confirm"
          >
            Confirmed
          </p>
          <input
            className="cursor-pointer absolute h-[59.41%] w-[14.27%] top-[18.92%] right-[85.73%] bottom-[21.67%] left-[0%]"
            required={true}
            checked={isChecked}
            id="confirm_radio"
            type="radio"
            onChange={() => setIsChecked(!isChecked)}
          />
        </div>
        <div className="absolute h-[6.95%] w-[18.57%] top-[48.12%] right-[61.5%] bottom-[44.92%] left-[19.94%]">
          <p
            className="m-0 absolute top-[0%] left-[27.27%] leading-[156.23%]"
            id="date"
          >
            09/07/2023
          </p>
          <img
            className="absolute h-[81.08%] w-[17.05%] top-[10.81%] right-[82.95%] bottom-[8.11%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt="date_img"
            src={date}
          />
        </div>
        <div className="absolute h-[6.95%] w-[16.03%] top-[48.12%] right-[31.54%] bottom-[44.92%] left-[52.43%]">
          <p
            className="m-0 absolute top-[0%] left-[31.58%] leading-[156.23%]"
            id="time"
          >
            13:30 PM
          </p>
          <img
            className="absolute h-[81.08%] w-[19.74%] top-[10.81%] right-[80.26%] bottom-[8.11%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt="time_img"
            src={time}
          />
        </div>
        <img
          className="absolute h-[4.65%] w-[13.97%] top-[32.19%] right-[66.12%] bottom-[63.16%] left-[19.92%] max-w-full overflow-hidden max-h-full object-cover"
          alt="rating"
          src={rating}
        />
        <div className="absolute top-[61px] left-[calc(50%_-_285px)] w-[447px] h-[471px] text-xl">
          <p
            className="m-0 absolute top-[332px] left-[calc(50%_-_223.5px)] text-5xl leading-[156.23%] text-black font-semibold"
            id="contact"
          >{`You can contact your nutritionist `}</p>
          <p
            className="m-0 absolute top-[0px] left-[calc(50%_-_199.5px)] text-5xl leading-[156.23%] font-semibold"
            id="doctor_name"
          >
            Dr Tony Chopper
          </p>
          <div className="absolute top-[406px] left-[0px] w-[34px] h-[65px]">
            <p
              className="m-0 absolute top-[38px] left-[0px] leading-[156.23%] font-sans font-semibold text-black inline-block w-[34px] h-[27px]"
              id="call"
            >
              Call
            </p>
            <img
              className="absolute h-[18.46%] w-[88.24%] top-[0%] right-[5.88%] bottom-[81.54%] left-[5.88%] max-w-full overflow-hidden max-h-full object-cover"
              alt="call_img"
              src={call}
            />
          </div>
          <div className="absolute top-[400px] left-[358px] w-[89px] h-[71px]">
            <div className="absolute top-[44px] left-[0px] w-[89px] h-[27px]">
              <p
                className="m-0 absolute top-[0px] left-[0px] leading-[156.23%] font-sans font-semibold text-black inline-block w-[89px] h-[27px]"
                id="video_call"
              >
                Video call
              </p>
            </div>
            <img
              className="absolute h-[34.65%] w-[34.38%] top-[-0.42%] right-[32.25%] bottom-[65.77%] left-[33.37%] max-w-full overflow-hidden max-h-full object-cover"
              alt="video_img"
              src={videocall}
            />
          </div>
          <div className="absolute top-[399px] left-[174px] w-11 h-[72px]">
            <p
              className="m-0 absolute top-[45px] left-[0px] leading-[156.23%] font-sans text-black font-semibold inline-block w-11 h-[27px]"
              id="chat"
            >
              Chat
            </p>
            <img
              className="absolute h-[36.11%] w-[68.18%] top-[0%] right-[15.91%] bottom-[63.89%] left-[15.91%] max-w-full overflow-hidden max-h-full object-cover"
              alt="chat_img"
              src={chat}
            />
          </div>
        </div>
      </section>
      <p
        className="m-0 absolute top-[170px] left-[512px] leading-[120%] font-semibold text-17xl text-dark-green-color"
        id="doctor_name"
      >
        Dr. Tony Chopper
      </p>
      <img
        className="absolute top-[176.5px] left-[433.88px] w-[15.62px] h-[27px] object-cover cursor-pointer"
        alt="previous"
        src={previous}
        onClick={onVectorIcon3Click}
      />
      <p
        className="m-0 absolute top-[224px] left-[512px] text-5xl leading-[120%] text-grey-color"
        id="appointment_time"
      >
        Tuesday, July 25, 2023
      </p>
      <img
        className="absolute top-[382px] left-[1028px] w-[22px] h-[29px] object-cover cursor-pointer"
        alt="next"
        src={Next}
        onClick={onGroupIcon3Click}
      />
    </div>
  );
};

export default Appinment_overview;
