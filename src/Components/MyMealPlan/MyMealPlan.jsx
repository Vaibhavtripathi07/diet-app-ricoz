import React, {useState} from "react"
import Date from "../../asset/date.png"
import MyMeals from "../../asset/MyMeals.png"
import rating from "../../asset/rating.png"
import Sidebar from '../ProPic/Sidebar';
import Nav from "../Top_Nav/Nav"
import { Link } from "react-router-dom";

const MyMealPlan=()=>{
  const [isChecked, setIsChecked] = useState(false);
    return(
        <div className='relative w-[1512px] h-[1286px] overflow-hidden font-sans bg-whitesmoke xl:w-full'>
        {/* Nav */}
    <Nav/>
    {/* Nav */}
    
    {/* sidebar */}
    <Sidebar/>
    {/* sidebar */}
    
          {/* main */}
          {/* upper section */}
          {/* <img src={previous} alt="" className='absolute top-[178px] left-[436px]'/> */}
           <h1 className='absolute left-[512px] top-[170px] text-dark-green-color font-semibold text-17xl font-inherit'>My Meal Plans</h1>
          <img src={Date} alt="date" height={40} width={40} className='absolute left-[1432px] top-[171px] w-[40px] h-[40px]' />
            <p className='absolute left-[512px] top-[224px] font-normal text-5xl text-grey-color leading-[28.8px] '>Tuesday, July 25, 2023</p>
          {/* upper section */}
{/* Activated meal section */}
<section className="absolute w-[962px] h-[318px] left-[458px] top-[317px] border bprder-solid border-strokegreen-color rounded-[12px] shadow-xl bg-whitesmoke">
<img src={MyMeals} alt="" className="absolute w-[160px] h-[160px] left-[42px] top-[64px]" />
<p className="absolute text-black font-inherit font-semibold text-13xl leading-[50px] left-[244px] top-[85px]">Classic Meal Plan</p>
<img src={rating} alt="" className="absolute left-[836px] top-[101px] w-[98px] h-[18px]"/>
<p className="absolute  font-inherit font-normal text-5xl text-grey-color leading-[50px] left-[244px] top-[143px]">Balanced and varied eating plan with a focus on whole foods.</p>
{/* input field */}
<Link to="/MealPlan2"><input type ="radio" id="activate" className="absolute cursor-pointer  left-[244px] top-[253px] w-[22px] h-[22px] accent-dark-green-color "   checked={isChecked} required={true}  onClick={() => setIsChecked(!isChecked)}/> <span id="activate" className=" cursor-pointer text-5xl text-normal font-inherit leading-9 absolute left-[279px] top-[245px] text-black">Activated</span></Link>
{/* input field */}
</section>

{/* Activated meal section */}
          {/*  */}
   
   {/* main */}
    </div>
    )
}
export default MyMealPlan;