// import { useCallback, useState } from "react";
// import Logo from "../../asset/Logo.png";
// import { Link } from "react-router-dom";
// import Line from "../../asset/Line.png";
// import White_diamond from "../../asset/White_diamond.png";
// import Outlined_diamond from "../../asset/Outlined_diamond.png";
// import circle from "../../asset/circle.png";
// import Right_arrow from "../../asset/Right_arrow.png";
// const Nav = () => {
//   const [showDropdown, setShowDropdown] = useState(false);



//   return (
//     // <div className="fixed top-0 shadow-[0px_2px_26px_rgba(0,_0,_0,_0.09)]  w-[1512px] h-24  font-sans xl:w-full z-30">
//     //     <div className="absolute  bg-whitesmoke w-[756px] h-24" />

//     //   <div className="absolute left-[756px] bg-beige w-[760px] h-24" />

//     //   <div className="absolute -top-2 left-[56px] w-[132px] h-[94px] ">

//     //     <div className="absolute top-[0px] left-[0px] leading-[150.19%] inline-block "></div>
//     //     <Link to="/ProPic">
//     //       <img src={Logo} alt="Logo" className="w-24 h-24 object-contain"  />
//     //     </Link>
//     //   </div>

//     //   {/* list starts  */}
//     //   <div className="absolute top-[30px] left-[calc(50%_-_297px)] w-[595px] h-[37px] text-2xl text-green-700 ">
//     //     <ul className="absolute top-[-0px] left-[calc(50%_-_297px)] list-none w-[595px] h-[37px]">
//     //       <Link to="/">
//     //         <li className="absolute top-[0px] left-[calc(50%_-_297px)] leading-xl font-semibold">
//     //           Home
//     //         </li>
//     //       </Link>
//     //       <div className="absolute top-[0px] left-[130px] w-[146px] h-[37px]">
//     //         {/* link OurService */}

//     //         <li
//     //           className="absolute top-[0%] left-[0%] leading-xl font-sans font-semibold cursor-pointer"
//     //           onClick={toggleDropdown}
//     //         >
//     //           Our Services
//     //         </li>

//     //         {showDropdown && (
//     //           <div className="absolute w-[226px] h-[396px] mt-14 -left-[40px] fant-sans bg-dark-green-color/100 text-white text-center rounded-[10px]">
//     //             <div className="flex  absolute left-[14px] top-[16px] w-[226px]  ">
//     //               <img src={Line} alt="line" className="rounded-lg w-14 " />
//     //               <img
//     //                 src={White_diamond}
//     //                 height={0}
//     //                 alt="White_diamond"
//     //                 className="rounded-sm"
//     //               />
//     //               <img src={Outlined_diamond} alt="outline_diamond" />
//     //               <img
//     //                 src={circle}
//     //                 alt="circle"
//     //                 className="w-[8px] h-[8px] my-auto"
//     //               />
//     //               <img
//     //                 src={circle}
//     //                 alt="circle"
//     //                 className="w-[8px] h-[8px] my-auto"
//     //               />
//     //               <img
//     //                 src={circle}
//     //                 alt="circle"
//     //                 className="w-[8px] h-[8px] my-auto"
//     //               />
//     //               <img
//     //                 src={circle}
//     //                 alt="circle"
//     //                 className="w-[8px] h-[8px] my-auto"
//     //               />
//     //               <img src={Outlined_diamond} alt="outline_diamond" />
//     //               <img src={White_diamond} alt="White_diamond" />
//     //               <img
//     //                 src={Line}
//     //                 height={0}
//     //                 alt="Line"
//     //                 className="rounded-lg w-14"
//     //               />
//     //             </div>
//     //             <Link to="/MealPlans">
//     //               <div className="absolute top-[57px] left-[60px] cursor-pointer">
//     //                 Meal Plans
//     //               </div>
//     //             </Link>
//     //             <Link to="/Recipes">
//     //               <div className=" absolute top-[125px] left-[75px]  cursor-pointer">
//     //                 Recipes
//     //               </div>
//     //             </Link>
//     //             <Link to="/Consultation">
//     //               <div className="absolute top-[193px] left-[50px]  cursor-pointer">
//     //                 Consultation
//     //               </div>
//     //             </Link>
//     //             <Link to="/Courses">
//     //               <div className="absolute top-[261px] left-[70px]  cursor-pointer">
//     //                 Courses
//     //               </div>
//     //             </Link>
//     //             <Link to="/Workouts">
//     //               <div className="absolute top-[329px] left-[65px]  cursor-pointer">
//     //                 Workouts
//     //               </div>
//     //             </Link>
//     //           </div>
//     //         )}
//     //       </div>
//     //       {/* Link who We Are */}
//     //       <Link to="/WhoWeAre" className="text-inherit">
//     //         <li
//     //           className="absolute top-[0px] left-[calc(50%_+_38px)] leading-xl font-semibold cursor-pointer"
//     //           onClick={onWhoWeAreClick}
//     //         >
//     //           Who we are
//     //         </li>
//     //       </Link>
//     //       {/* Link who We Are */}
//     //       {/*link store */}
//     //       <Link to="/Store" className="text-inherit">
//     //         <li
//     //           className="absolute top-[0px] left-[calc(50%_+_235.5px)]  leading-xl font-semibold cursor-pointer"
//     //           onClick={onStoreTextClick}
//     //         >
//     //           Store
//     //         </li>
//     //       </Link>
//     //     </ul>
//     //   </div>

//     //   {/* my Account */}
//     //   <Link to="/MyAccount" className="text-2xl">
//     //     <div
//     //       className="absolute top-[33px]  text-green-700 left-[calc(50%_+_584px)] leading-xl font-semibold cursor-pointer"
//     //       onClick={onMyAccountTextClick}
//     //     >
//     //       My Account
//     //     </div>
//     //   </Link>
//     // </div>

//     <div className="fixed top-0 shadow-md w-full  bg-beige h-16 z-40 text-5xl  text-dark-green-color font-semibold leading-5  cursor-pointer ">
//       <div className="half bg-whitesmoke  w-1/2  h-16 z-40 cursor-pointer"/>
//       <section className="-mt-16 mx-6 md:mx-3">
//     <section className="flex items-center justify-between px-4">
//       {/* Logo on the left */}
      
//       <section className="logo">
//         <img src={Logo} alt="" className="h-16 w-20 -mt-1 sm:mr-3 object-contain" />
//       </section>
  
//       {/* Centered List */}
//       <section className="lists  md:block ">
//         <ul className="flex  items-center space-x-14 md:text-lg md:space-x-10 sm:text-base ml-3 ">
//           <Link to="/"><li>Home</li></Link>
//           <Link to=""><li>Our Services</li></Link>
//           <Link to="/WhoWeAre"><li>Who we are</li></Link>    
//           <Link to="/Store"><li>Store</li></Link>
//         </ul>
//       </section>
  
//       {/* My Account on the right */}
//       <section className=" md:block">
//         <ul className="flex items-center space-x-4 md:text-lg md:space-x-2 sm:text-base sm:ml-3 sm:space-x-1">
//         <Link to="/MyAccount"><li>My Account</li></Link>  
//         </ul>
//       </section>
//     </section>
//     </section>
//   </div>

//   //  <div className="fixed top-0 shadow-md w-full bg-beige h-16 z-40 cursor-pointer ">
//   //     <div className="half bg-whitesmoke w-1/2 h-16 z-40 cursor-pointer"/>
//   //     <section className="-mt-16">
//   //       <section className="flex items-center justify-between px-4">
//   //         {/* Logo on the left */}
//   //         <section className="logo">
//   //           <img src={Logo} alt="" className="h-16 w-20 object-contain" />
//   //         </section>
  
//   //         {/* Centered List */}
//   //         <section className="lists flex items-center flex-col md:flex-row md:justify-center lg:mx-auto">
//   //           {/* Displayed only on medium screens and larger */}
//   //           <ul className="flex items-center space-x-14">
//   //             <Link to="/"><li>Home</li></Link>
//   //             <Link to="/"><li>Our Services</li></Link>
//   //             <Link to="/"><li>Who we are</li></Link>
//   //             <Link to="/"><li>Store</li></Link>
//   //           </ul>
//   //         </section>
  
//   //         {/* Hamburger Icon for Small Screens */}
//   //         <div className="md:hidden">
//   //           {/* Add your hamburger icon here */}
//   //         </div>
  
//   //         {/* My Account on the right */}
//   //         <section className="md:ml-4">
//   //           {/* Adjust margin for medium screens and larger */}
//   //           <ul className="flex items-center space-x-4">
//   //             <li>My Account</li>
//   //           </ul>
//   //         </section>
//   //       </section>
//   //     </section>
//   //   </div>
  
//   );
// };

// export default Nav;



import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../asset/Logo.png"
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Nav = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="fixed w-full h-16 z-10 bg-beige   text-dark-green-color font-semibold cursor-pointer shadow-md font-sans">
      <div className="h-16 bg-whitesmoke w-1/2" />
      <div className=" flex flex-row justify-between items-center px-5 -mt-16 ">
        <div className=" flex flex-row items-center cursor-pointer ">
          <img src={Logo} alt="" className="h-16 w-20 object-contain" />
        </div>

        <div className="hidden md:flex flex-row items-center text-xl ml-5 font-semibold gap-8 space-x-5">
          <Link
            to="/"

            // smooth={true}
            // duration={500}
            // className="group relative inline-block cursor-pointer "
          >
            Home
            {/* <span className="absolute inset-x-0 bottom-0 h-0.5 bg-strokegreen-color transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span> */}
          </Link>

          <Link
            to="/"

            // smooth={true}
            // duration={500}
            // className="group relative inline-block cursor-pointer "
          >
            Our Services
            {/* <span className="absolute inset-x-0 bottom-0 h-0.5 bg-strokegreen-color transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span> */}
          </Link>

          <Link
            to="/WhoWeAre"

            // smooth={true}
            // duration={500}
            // className="group relative inline-block cursor-pointer "
          >
            Who We Are
            {/* <span className="absolute inset-x-0 bottom-0 h-0.5 bg-strokegreen-color transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span> */}
          </Link>

          <Link
            to="/Store"

            // smooth={true}
            // duration={500}
            // className="group relative inline-block cursor-poin1ter "
          >
            Store
            {/* <span className="absolute inset-x-0 bottom-0 h-0.5 bg-strokegreen-color transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span> */}
          </Link>
        </div>
        <div className=" lg:flex hidden text-xl font-semibold">
          <Link
            to="/MyAccount">
             {/* smooth={true}
             duration={500}
             className="group relative  inline-block cursor-pointer" */}
          
            My Account
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          {menu ? (
            <AiOutlineClose size={25} onClick={handleChange} />
          ) : (
            <AiOutlineMenuUnfold size={25} onClick={handleChange} />
          )}
        </div>
      </div>
      <div
        className={` ${
          menu ? "translate-x-0" : "-translate-x-full"
        } lg:hidden md:hidden flex flex-col absolute bg-whitesmoke/70 text-dark-green-color left-0 top-16 font-semibold text-5xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
      >
        <Link
          to="/"
          smooth={true}
          duration={500}
          className="hover:text-brightColor transition-all cursor-pointer"
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link
          to="/"
          smooth={true}
          duration={500}
          className="hover:text-brightColor transition-all cursor-pointer"
          onClick={closeMenu}
        >
          Our Services
        </Link>
        <Link
          to="/WhoWeAre"
          smooth={true}
          duration={500}
          className="hover:text-brightColor transition-all cursor-pointer"
          onClick={closeMenu}
        >
          Who We Are
        </Link>
        <Link
          to="/Store"
          smooth={true}
          duration={500}
          className="hover:text-brightColor transition-all cursor-pointer"
          onClick={closeMenu}
        >
          Store
        </Link>

        {/* <button title="login" /> */}
        <Link
          to="/MyAccount"
          smooth={true}
          duration={500}
          className="hover:text-dark-green-color transition-all cursor-pointer"
        >
          My Account
        </Link>
      </div>
    </div>
  );
};

export default Nav;

