import { useCallback } from "react";
import Nav from "../Top_Nav/Nav";
import mute from '../../asset/mute.png'
import patient from '../../asset/patient.gif'
import doctor from '../../asset/doctor.gif'
import endcall from '../../asset/endcall.png'
import chat from '../../asset/chat.png'
import voice_1 from '../../asset/voice_1.png'
import End_video from '../../asset/End_video.png'

const Videocall = () => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "LANDING" to the project
  }, []);

  const onEndCallImage2Click = useCallback(() => {
    // Please sync "Videocall" to the project
  }, []);

  return (
    <div className=" bg-[#2F2F2F] max-w-full overflow-hidden  min-h-screen  text-white font-sans">
{/* Nav */}
      <Nav/>
{/* Nav */}
<div className="my-8">
<div className=" mt-32 px-5  md:px-10 flex items-center justify-evenly gap-5 md:gap-10 flex-row md:flex-row">
      <div className="doctor">
      <img
        className="  rounded-xl "
    width={690}
    height={564}
        alt="doctor"
        src={doctor}
      />
      <div className=" flex justify-between items-center -mt-5 px-1  md:mx-3 md:-mt-14">
        <p className=" bg-[#000000]/60 w-14 md:w-28 text-center text-smi md:text-5xl rounded-full" id="dr Rin">
          Dr. Rin
        </p>

        <img
        className=" w-5 h-5 md:w-12 md:h-12 object-contain "
        alt="voice_1"
        src={voice_1}
      />
      </div>
      </div>


      <div className="patient">
        <img
          className=" rounded-xl  object-contain "
          width={690}
          height={564}
          alt="patient"
          src={patient}
        />
        <div className="flex justify-between -mt-5 px-1 md:-mt-14 md:mx-3 items-center">
         
        <p className=" bg-[#000000]/60 w-10 md:w-28 text-center text-smi md:text-5xl   rounded-full" id="patient">
          You
        </p>
        <img
          className=" w-5 h-5 md:w-12 md:h-12 object-contain"
          alt="voice_2"
          src={voice_1}
        />
        </div>
      </div>
</div>


<div className="flex items-center px-10 justify-center gap-3 md:gap-7 mt-3 md:mt-10">
      <img
        className="  object-contain w-8 h-8 md:w-12 md:h-12"
      
        
        alt="end call"
        src={endcall}
      />
      <img
        className=" object-contain  w-8 h-8 md:w-12 md:h-12"
      
        
        alt="mute"
        src={mute}
      />
      <img
        className="object-contain  w-8 h-8 md:w-12 md:h-12 "
      
        
        alt="chat"
        src={chat}
        onClick={onEndCallImage2Click}
      />
      <img
        className="object-contain  w-8 h-8 md:w-12 md:h-12"
      
        
        alt="video_off"
        src={End_video}
      />
  
  </div>
  </div>
    </div>
  );
};

export default Videocall;
