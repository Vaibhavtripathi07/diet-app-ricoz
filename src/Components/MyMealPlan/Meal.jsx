import React from "react"
import Nav from "../Top_Nav/Nav";
import previous from "../../asset/previous.png"
import Date from "../../asset/Date.png"
import Sidebar from "../ProPic/Sidebar";
import Dates from "./Dates/Dates";
import macros2 from "../../asset/macros2.png"
import Breakfast from "../../asset/Breakfast.png"
import lunch from "../../asset/lunch.png"
import MyMealPlan from "./MyMealPlan";
import { Link } from "react-router-dom";
import Meal from "./MyMealPlan"


const MyMealPlan2 = () => {
  return (
    <div className="relative w-full bg-whitesmoke overflow-hidden h-[1490px] font-sans">
      {/* navbar */}
      <Nav />
      {/* navbar */}

      {/* sidebar */}
      <Sidebar />
      {/* sidebar */}

{/* upper section */}
      <section>
<Link to={MyMealPlan}>
        <img
          src={previous}
          alt=""
          className="absolute top-[178px] left-[436px]"
        /></Link>
        <h1 className="absolute left-[512px] top-[170px] font-sans text-dark-green-color text-17xl font-semibold">
        Classic Meal Plan
        </h1>
        <p className="absolute left-[512px] top-[224px] font-normal text-5xl text-grey-color leading-[28.8px] ">
          Tuesday, July 25, 2023
        </p>
        <img
          src={Date}
          alt="date"
          height={40}
          width={40}
          className="absolute left-[1430px] top-[170px] w-[40px] h-[40px]"
        />
      </section>
      {/* upper section */}

{/* date */}
<section className="absolute top-[23px]">
<Dates />
</section>
{/* date */}
      
{/* main content */}
<section className="meals absolute left-[480px] top-[623px] w-[990px] h-[380px] shadow-xl3 bg-whitesmoke">
  <h2 className="absolute left-6 text-black font-sans top-[21px] text-5xl font-semibold leading-[29px]">Breakfast</h2><span><img src={Breakfast} alt="" className="absolute left-[166px] top-[18px] w-[30px] h-[30px]" /></span>
 
  <ul className="list-disc ">
    <li className="absolute left-[46px] top-[74px] text-black font-sans text-[18px] font-semibold leading-[21.6px] ">Scrambled eggs with toast</li>
  </ul>
 
{/* calorie */}
<section className="flex gap-1 ml-[351px] mt-[74px]">
<p className="text-[#F55E5E] text-[18px] leading-[21.641px] font-semibold font-montserrat">320</p>
<p className="text-[#F55E5E] text-[15px] leading-[21.641px] font-medium font-montserrat">kCal</p>
</section>
{/* calorie */}

{/* macros need to change */}
<img src={macros2} alt="" className="w-[100px] h-[100px] absolute top-[50px] left-[839px]"/>
{/* macros */}
</section>
{/* main content */}

{/* calories contituents */}
{/* calories constituents */}

 {/* fats */}
 <section className="absolute left-[1292px] top-[803px]">
   <p className="text-[16px] font-sans font-semibold ">14.3 g</p>
   <p className="w-[10px] h-[10px] rounded-[5px] ml-3 bg-[#F9A322]"></p>
   <p className="text-[18px] font-sans font-semibold">Fats</p>
 </section>
 {/* fats */}

 {/* Carbs */}
 <section className="absolute left-[1341px] top-[803px]">
   <p className="text-[16px] font-sans font-semibold ">48.5 g</p>
   <p className="w-[10px] h-[10px] rounded-[5px] ml-3 bg-[#3473F7]"></p>
   <p className="text-[18px] font-sans font-semibold">carbs</p>
 </section>
 {/* Carbs */}

 {/* proteins */}
 <section className="absolute left-[1393px] top-[803px] right-[29px]">
   <p className="text-[16px] font-sans font-semibold ">29.4 g</p>
   <p className="w-[10px] ml-3 h-[10px] rounded-[5px] bg-[#FD9AF9]"></p>
   <p className="text-[18px] font-sans font-semibold">Proteins</p>
</section>


{/* second */}
<ul className="list-disc ">
    {/* <li className="absolute left-[46px] top-[74px] text-black font-sans text-[18px] font-semibold leading-[21.6px] ">Green tea</li> */}
  </ul>
 
{/* calorie */}
{/* <section className="flex gap-1 ml-[351px] mt-[74px]">
<p className="text-[#F55E5E] text-[18px] leading-[21.641px] font-semibold font-montserrat">90</p>
<p className="text-[#F55E5E] text-[15px] leading-[21.641px] font-medium font-montserrat">kCal</p>
</section> */}
{/* calorie */}

{/* macros need to change */}
{/* <img src={macros2} alt="" className="w-[100px] h-[100px] absolute top-[50px] left-[839px]"/> */}
{/* macros */}

{/* main content */}

{/* calories contituents */}
{/* calories constituents */}

 {/* fats */}
 <section className="absolute left-[1292px] top-[803px]">
   <p className="text-[16px] font-sans font-semibold ">14.3 g</p>
   <p className="w-[10px] h-[10px] rounded-[5px] ml-3 bg-[#F9A322]"></p>
   <p className="text-[18px] font-sans font-semibold">Fats</p>
 </section>
 {/* fats */}

 {/* Carbs */}
 <section className="absolute left-[1341px] top-[803px]">
   <p className="text-[16px] font-sans font-semibold ">48.5 g</p>
   <p className="w-[10px] h-[10px] rounded-[5px] ml-3 bg-[#3473F7]"></p>
   <p className="text-[18px] font-sans font-semibold">carbs</p>
 </section>
 {/* Carbs */}

 {/* proteins */}
 <section className="absolute left-[1393px] top-[803px] right-[29px]">
   <p className="text-[16px] font-sans font-semibold ">29.4 g</p>
   <p className="w-[10px] ml-3 h-[10px] rounded-[5px] bg-[#FD9AF9]"></p>
   <p className="text-[18px] font-sans font-semibold">Proteins</p>
</section>
{/* second */}

<hr className="absolute text-gray top-[300px] left-[494px]"/>

<ul className="list-disc ">
    <li className="absolute left-[504px] top-[844px] text-black font-sans text-[18px] font-semibold leading-[21.6px]  ml-6">Green tea</li>
  </ul>
 
{/* calorie */}
<section className="flex gap-1 absolute left-[840px] top-[844px]">
<p className="text-[#F55E5E] text-[18px] leading-[21.641px] font-semibold font-montserrat">90</p>
<p className="text-[#F55E5E] text-[15px] leading-[21.641px] font-medium font-montserrat">kCal</p>
</section>
{/* calorie */}

{/* macros need to change */}
{/* <img src={macros2} alt="" className="w-[100px] h-[100px] absolute top-[50px] left-[839px]"/> */}
{/* macros */}

{/* main content */}

{/* calories contituents */}
{/* calories constituents */}

 {/* fats */}
 {/* <section className="absolute left-[1292px] top-[1243px]">
   <p className="text-[16px] font-sans font-semibold ">14.3 g</p>
   <p className="w-[10px] h-[10px] rounded-[5px] ml-3 bg-[#F9A322]"></p>
   <p className="text-[18px] font-sans font-semibold">Fats</p>
 </section> */}
 {/* fats */}

 {/* Carbs */}
 {/* <section className="absolute left-[1341px] top-[1243px]">
   <p className="text-[16px] font-sans font-semibold ">48.5 g</p>
   <p className="w-[10px] h-[10px] rounded-[5px] ml-3 bg-[#3473F7]"></p>
   <p className="text-[18px] font-sans font-semibold">carbs</p>
 </section> */}
 {/* Carbs */}

 {/* proteins */}
 {/* <section className="absolute left-[1393px] top-[1243px] right-[29px]">
   <p className="text-[16px] font-sans font-semibold ">29.4 g</p>
   <p className="w-[10px] ml-3 h-[10px] rounded-[5px] bg-[#FD9AF9]"></p>
   <p className="text-[18px] font-sans font-semibold">Proteins</p>
</section> */}





{/* second */}





{/* lunch */}
{/* main content */}
<section className="meals absolute left-[480px] top-[1063px] w-[990px] h-[380px] shadow-xl3 bg-whitesmoke">
  <h2 className="absolute left-6 text-black font-sans top-[21px] text-5xl font-semibold leading-[29px]">Lunch</h2><span><img src={lunch} alt="" className="absolute left-[166px] top-[18px] w-[30px] h-[30px]" /></span>
 
  <ul className="list-disc ">
    <li className="absolute left-[46px] top-[74px] text-black font-sans text-[18px] font-semibold leading-[21.6px] ">Scrambled eggs with toast</li>
  </ul>
 
{/* calorie */}
<section className="flex gap-1 ml-[351px] mt-[74px]">
<p className="text-[#F55E5E] text-[18px] leading-[21.641px] font-semibold font-montserrat">320</p>
<p className="text-[#F55E5E] text-[15px] leading-[21.641px] font-medium font-montserrat">kCal</p>
</section>
{/* calorie */}

{/* macros need to change */}
<img src={macros2} alt="" className="w-[100px] h-[100px] absolute top-[50px] left-[839px]"/>
{/* macros */}
</section>
{/* main content */}

{/* calories contituents */}
{/* calories constituents */}

 {/* fats */}
 <section className="absolute left-[1292px] top-[803px]">
   <p className="text-[16px] font-sans font-semibold ">14.3 g</p>
   <p className="w-[10px] h-[10px] rounded-[5px] ml-3 bg-[#F9A322]"></p>
   <p className="text-[18px] font-sans font-semibold">Fats</p>
 </section>
 {/* fats */}

 {/* Carbs */}
 <section className="absolute left-[1341px] top-[803px]">
   <p className="text-[16px] font-sans font-semibold ">48.5 g</p>
   <p className="w-[10px] h-[10px] rounded-[5px] ml-3 bg-[#3473F7]"></p>
   <p className="text-[18px] font-sans font-semibold">carbs</p>
 </section>
 {/* Carbs */}

 {/* proteins */}
 <section className="absolute left-[1393px] top-[803px] right-[29px]">
   <p className="text-[16px] font-sans font-semibold ">29.4 g</p>
   <p className="w-[10px] ml-3 h-[10px] rounded-[5px] bg-[#FD9AF9]"></p>
   <p className="text-[18px] font-sans font-semibold">Proteins</p>
</section>


{/* second */}
<ul className="list-disc ">
    <li className="absolute left-[504px] top-[1283px] text-black font-sans text-[18px] font-semibold leading-[21.6px]  ml-5">Green tea</li>
  </ul>
 
{/* calorie */}
<section className="flex gap-1 absolute left-[840px] top-[1283px]">
<p className="text-[#F55E5E] text-[18px] leading-[21.641px] font-semibold font-montserrat">90</p>
<p className="text-[#F55E5E] text-[15px] leading-[21.641px] font-medium font-montserrat">kCal</p>
</section>
{/* calorie */}

{/* macros need to change */}
{/* <img src={macros2} alt="" className="w-[100px] h-[100px] absolute top-[50px] left-[839px]"/> */}
{/* macros */}

{/* main content */}

{/* calories contituents */}
{/* calories constituents */}

 {/* fats */}
 <section className="absolute left-[1292px] top-[1243px]">
   <p className="text-[16px] font-sans font-semibold ">14.3 g</p>
   <p className="w-[10px] h-[10px] rounded-[5px] ml-3 bg-[#F9A322]"></p>
   <p className="text-[18px] font-sans font-semibold">Fats</p>
 </section>
 {/* fats */}

 {/* Carbs */}
 <section className="absolute left-[1341px] top-[1243px]">
   <p className="text-[16px] font-sans font-semibold ">48.5 g</p>
   <p className="w-[10px] h-[10px] rounded-[5px] ml-3 bg-[#3473F7]"></p>
   <p className="text-[18px] font-sans font-semibold">carbs</p>
 </section>
 {/* Carbs */}

 {/* proteins */}
 <section className="absolute left-[1393px] top-[1243px] right-[29px]">
   <p className="text-[16px] font-sans font-semibold ">29.4 g</p>
   <p className="w-[10px] ml-3 h-[10px] rounded-[5px] bg-[#FD9AF9]"></p>
   <p className="text-[18px] font-sans font-semibold">Proteins</p>
</section>

{/* lunch */}
    </div>
  );
};
export default MyMealPlan2;


