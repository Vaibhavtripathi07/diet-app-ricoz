import React from 'react'
import Profile_picture from "../../asset/Profile_picture.png";
    import PEDIT from "../../asset/PEDIT.png";
import { Link } from 'react-router-dom';


const PersonalHeader = () => {
  return (
    <>
      <section className=' mt-24  mx-10 grid   '>
        <h1 className=" font-sans  text-dark-green-color text-center md:text-left text-5xl md:text-13xl xl:text-17xl font-semibold ">
          User Account
        </h1>
        <p className=" font-normal text-5xl text-center md:text-left text-grey-color leading-7 ">
          Tuesday, July 25, 2023
        </p>
        </section>
      {/* add border-2 to image    */}
      <section  className=" mx-auto my-4 md:my-8  grid place-items-center  text-center">
      <section className="relative  md:pt-8">
        <img
          src={Profile_picture}
          width={150}
          height={150}
          className="rounded-3xl border-green "
          alt=""
        />
        <Link to="/ProfilePic_edit" className="absolute -bottom-3 -right-4 ">
          <img src={PEDIT} alt="" width={45} height={45} />
        </Link>
      </section>
      <p className="text-5xl font-semibold text-black leading-7">Your Forger</p>
      <p className="text-lg text-gray-500">Joined on Jun 30, 2023</p>
    </section>
    </>
  );
}

export default PersonalHeader
