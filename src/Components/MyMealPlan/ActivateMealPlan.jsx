import React, {useState} from "react";
import Nav from "../Top_Nav/Nav";
import Sidebar from "../ProPic/Sidebar";
import Profile_picture from "../../asset/Profile_picture.png";
import Above from "../../asset/Above.png";
import rating from "../../asset/rating.png";

const ActivateMealPlan = () => {
    const [rotation,setRotation]= useState(0)
    const [showDetails, setShowDetails] = useState(false);
    const [isChecked, setIsChecked] = useState(true);


        const onBtnClick=()=>{
        // Toggle between original position (0 degrees) and top position (180 degrees)
     const newRotation = rotation===0 ? -180 : 0;
   setRotation(newRotation);
 setShowDetails(!showDetails);
      // Show/hide details based on the rotation
     //  setShowDetails(!showDetails);
     // }, [rotation, showDetails];
 };

  return (
    <div className="absolute w-[1512px] overflow-hidden h-[1286px] font-sans xl:w-full">
      {/* navbar */}
      {/* <Nav /> */}
      {/* navbar */}

      {/* sidebar */}
      {/* <Sidebar /> */}
      {/* sidebar */}
{/* upper section */}
      {/* <h1 className="absolute left-[458px] top-[170px] font-sans text-dark-green-color text-17xl font-semibold">
        User Account
      </h1> */}
      {/* <p className="absolute left-[458px] top-[224px] font-normal text-5xl text-grey-color leading-[28.8px] ">
        Tuesday, July 25, 2023
      </p> */}
      {/* add border-2 to image    */}
      {/* <img
        src={Profile_picture}
        className="absolute w-[200px] h-[200px] left-[853px] top-[317px] rounded-3xl border-green  outline-none "
        alt=""
        /> */}
      {/* add border-2 to image    */}
      {/* <p className="absolute text-5xl font-inherit font-semibold left-[892px] top-[546px] text-black leading-[29px]">
        Yor Forger
      </p>
      <p className="absolute left-[860px] top-[581px] text-[18px] font-inherit font-normal leading-[28px] text-grey-color ">
        Joined on Jun 30, 2023
      </p>
      upper section */}


{/* main section */}

<section className='absolute w-[852px] leading-[48px] h-[72px] left-[515px] top-[917px] border border-strokegreen-color rounded-xl'>
 <h1 className='absolute left-[18px] top-[11px] text-13xl font-semibold font-inherit leading-[50px]'>Active Meal Plan</h1>
 <img src={Above} alt="" className='absolute left-[808px] top-[24px]' onClick={onBtnClick} style={{ transform: `rotate(${rotation}deg)` }} />
 </section>
{/* main section */}
{showDetails && (
     <section className='absolute w-[852px] leading-[48px] h-[119px] left-[515px] top-[1000px] border border-strokegreen-color rounded-xl'>
<p className="absolute left-[18px] top-[24px] text-[26px] font-sans leading-10 font-semibold">Classic Meal Plan</p>
<img src={rating} alt="" className="absolute left-[18px] top-[77px]"/>
<input type="radio" name="radio" id="radio" className="absolute top-[29px] left-[804px]  accent-dark-green-color w-[30px] h-[30px]" checked={isChecked} required={true}  onClick={() => setIsChecked(!isChecked)} />
     </section>
)}
    </div>
  );
};
export default ActivateMealPlan;
