// import React, {useState} from 'react'
// import previous from "../../asset/previous.png"
// import Profile_picture from "../../asset/Profile_picture.png"
// import Edit from "../../asset/Edit.png"
// import Remove from "../../asset/Remove.png"

// const ProfilePicture = () => {
//     const [profilePicture, setProfilePicture] = useState(Profile_picture);

//     const handleChangePicture = () => {
//       // Add logic to handle changing the profile picture, e.g., opening a file input dialog
//       // and updating the profilePicture state.
//       console.log('Change picture logic goes here');
//     };
  
//     const handleRemovePicture = () => {
//       // Add logic to handle removing the profile picture, e.g., setting a default picture.
//       setProfilePicture(Profile_picture); // Set it to the default picture or null
//       console.log('Remove picture logic goes here');
//     };

//   return (
//     <div className='relative w-full h-[1286px] overflow-hidden font-sans bg-whitesmoke'>
//         {/* main */}
//         <section>
//         <img src={previous} alt="" className='absolute top-[178px] left-[436px]'/>
//        <h1 className='absolute left-[512px] top-[170px] font-sans text-dark-green-color text-17xl font-semibold'>User Account</h1>
//          <p className='absolute left-[512px] top-[224px] font-normal text-5xl text-grey-color leading-[28.8px] '>Tuesday, July 25, 2023</p>

//          {/* profile picture  */}
// <section>
// <img src={Profile_picture} alt="" className=' justify-center absolute left-[753px] top-[317px] h-[400px] w-[400px] ' />
// <section className='btn flex gap-[14px]  absolute left-[836px] top-[747px]  py-7 px-[73px] border border-solid rounded-2xl border-Lightgreen bg-gradient-to-r bg-gradient-[93deg] from-[#AFE47E] to [#D8FAB9]'>
//     <p className='text-dark-green-color text-5xl font-inherit leading-7 font-semibold' onClick={handleChangePicture}>Change</p>
//     <img src={Edit} alt=""className='w-7' />
// </section>
// <section className='btn flex gap-6  absolute py-[27px] px-[68px] border-red-color font-semibold  left-[836px] top-[856px] border border-solid rounded-2xl' >
//     <img src={Remove} alt="" />
//     <p className='font-inherit items-center text-5xl leading-7 text-red-color font-semibold' onClick={handleRemovePicture}>Remove</p>
// </section>
// </section>

//          {/* profile picture  */}
//          {/* main */}
//          </section>
//     </div>
//   )
// }

// export default ProfilePicture



// import React, { useState } from 'react';
// import previous from "../../asset/previous.png";
// import Edit from "../../asset/Edit.png";
// import Remove from "../../asset/Remove.png";
// import skeleton_image from "../../asset/skeleton_image.png";

// const ProfilePicture = () => {
//   const defaultProfilePicture = "../../asset/skeleton_image.png";
//   const [profilePicture, setProfilePicture] = useState(defaultProfilePicture);

//   const handleChangePicture = (event) => {
//     const file = event.target.files[0];

//     if (file) {
//       // Assuming you are using FileReader to read the selected file
//       const reader = new FileReader();

//       reader.onloadend = () => {
//         setProfilePicture(reader.result);
//       };

//       reader.readAsDataURL(file);
//     }
//   };

//   const handleRemovePicture = () => {
//     setProfilePicture(defaultProfilePicture);
//   };

//   return (
//     <div className='relative w-full h-[1286px] overflow-hidden font-sans bg-whitesmoke'>
//       {/* main */}
//       <section>
//         <img src={previous} alt="" className='absolute top-[178px] left-[436px]' />
//         <h1 className='absolute left-[512px] top-[170px] font-sans text-dark-green-color text-17xl font-semibold'>User Account</h1>
//         <p className='absolute left-[512px] top-[224px] font-normal text-5xl text-grey-color leading-[28.8px] '>Tuesday, July 25, 2023</p>

//         {/* profile picture  */}
//         <section>
//           <img src={skeleton_image} alt="" className='justify-center absolute left-[753px] top-[317px] h-[400px] w-[400px]' />
//           <section className='btn flex gap-[14px] absolute left-[836px] top-[747px]  py-7 px-[73px] border border-solid rounded-2xl border-Lightgreen bg-gradient-to-r bg-gradient-[93deg] from-[#AFE47E] to [#D8FAB9]'>
//             <label htmlFor="upload" className='text-dark-green-color text-5xl font-inherit leading-7 font-semibold cursor-pointer'>Change</label>
//             <input
//               type="file"
//               id="upload"
//               accept="image/*"
//               className="hidden"
//               onChange={handleChangePicture}
//             />
//             <img src={Edit} alt="" className='w-7' />
//           </section>
//           <section className='btn flex gap-6 absolute py-[27px] px-[68px] border-red-color font-semibold left-[836px] top-[856px] border border-solid rounded-2xl' >
//             <img src={Remove} alt="" />
//             <p className='font-inherit items-center text-5xl leading-7 text-red-color font-semibold' onClick={handleRemovePicture}>Remove</p>
//           </section>
//         </section>

//         {/* profile picture  */}
//         {/* main */}
//       </section>
//     </div>
//   );
// }

// export default ProfilePicture;



import React, { useState } from 'react';
import previous from "../../asset/previous.png";
import Edit from "../../asset/Edit.png";
import Remove from "../../asset/Remove.png";
import skeleton_image from "../../asset/skeleton_image.png";
import Nav from ".././Top_Nav/Nav"
import Sidebar from '.././ProPic/Sidebar';

const ProfilePicture = () => {
  const [profilePicture, setProfilePicture] = useState(skeleton_image);

  const handleChangePicture = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleRemovePicture = () => {
    setProfilePicture(skeleton_image);
  };

  return (
    <div className='relative w-full h-[1286px] overflow-hidden font-sans bg-whitesmoke'>
{/* nav */}
<Nav/>
{/* nav */}

{/* sidebar */}
<Sidebar/>
{/* sidebar */}

      {/* main */}
      <section>
        <img src={previous} alt="" className='absolute top-[178px] left-[436px]' />
        <h1 className='absolute left-[512px] top-[170px] font-sans text-dark-green-color text-17xl font-semibold'>User Account</h1>
        <p className='absolute left-[512px] top-[224px] font-normal text-5xl text-grey-color leading-[28.8px] '>Tuesday, July 25, 2023</p>

        {/* profile picture  */}
        <section>
          <img src={profilePicture} alt="" className='justify-center absolute left-[753px] top-[317px] h-[400px] w-[400px]' />
          <section className='btn flex gap-[14px] absolute left-[836px] top-[747px]  py-7 px-[73px] border border-solid rounded-2xl border-Lightgreen bg-gradient-to-r bg-gradient-[93deg] from-[#AFE47E] to [#D8FAB9]'>
            <label htmlFor="upload" className='text-dark-green-color text-5xl font-inherit leading-7 font-semibold cursor-pointer'>Change</label>
            <input
              type="file"
              id="upload"
              accept="image/*"
              className="hidden"
              onChange={handleChangePicture}
            />
            <img src={Edit} alt="" className='w-7' />
          </section>
          {/* <section className='btn flex gap-6 absolute py-[27px] px-[68px] border-red-color font-semibold left-[836px] top-[856px] border border-solid rounded-2xl' > */}
          <section className='absolute flex gap-6 py-[27px] px-[68px] border top-[856px] left-[836px] border-red-color border-solid rounded-2xl'>
            <img src={Remove} alt="" />
            <p className='font-inherit items-center cursor-pointer text-5xl leading-7 text-red-color font-semibold' onClick={handleRemovePicture}>Remove</p>
          </section>
        </section>

        {/* profile picture  */}
        {/* main */}
      </section>
    </div>
  );
}

export default ProfilePicture;
