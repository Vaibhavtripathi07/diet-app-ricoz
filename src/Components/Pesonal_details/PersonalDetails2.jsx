// import React, { useState, useRef } from "react";
// //  import Profile_picture from "../../asset/Profile_picture.png"
// import Above from "../../asset/Above.png";
// import Edit from "../../asset/Edit.png";

// import Sidebar from "../ProPic/Sidebar";
// import PersonalHeader from "./PersonalHeader";

// // import Nav from '../Top_Nav/Nav'
// // import Sidebar from '../ProPic/Sidebar'

// const PersonalDetails2 = () => {
//   const [rotation, setRotation] = useState(0);
//   const [showDetails, setShowDetails] = useState(true);
//   const initialFields = {
//     "Full Name": "Yor Loid Forger",
//     Contact: "1122339900",
//     "E-mail ID": "yorf123@abc.com",
//     "Birth date": "November 9,1999",
//     Weight: "55 kg",
//     Height: "165 cm",
//   };
//   const [fields, setFields] = useState(initialFields);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editingField, setEditingField] = useState(null);

//   const onBtnClick = () => {
//     // Toggle between original position (0 degrees) and top position (180 degrees)
//     const newRotation = rotation === 0 ? -180 : 0;
//     setRotation(newRotation);
//     setShowDetails(!showDetails);
//   };
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFields({ ...fields, [name]: value });
//   };

//   const handleEditClick = (field) => {
//     setIsEditing(true);
//     setEditingField(field);
//   };

//   const handleDoneClick = () => {
//     setIsEditing(false);
//     setEditingField(null);
//   };

//   return (
//     <div className="max-w-full  min-h-screen bg-whitesmoke overflow-hidden font-sans">
//       {/* sidebar */}
//       <Sidebar />
//       {/* sidebar */}
//       <section className="main w-[calc(100%_-_20%)] float-right ">
//         {/* upper Section */}
//         <PersonalHeader />
//         {/* upper Section */}

//         {/* main section */}
//         <section className=" flex items-center justify-between flex-row px-1  md:px-3 md:mx-auto mx-3  md:w-[852px] md:leading-10 md:h-[72px]  border border-strokegreen-color rounded-md md:rounded-xl">
//           <h1 className="text-lg md:text-13xl font-semibold font-inherit leading-7 md:leading-10">
//             Personal details
//           </h1>
//           <img
//             src={Above}
//             alt=""
//             className="w-5 h-5 md:w-7 md:h-7 object-contain"
//             onClick={onBtnClick}
//             style={{ transform: `rotate(${rotation}deg)` }}
//           />
//         </section>
//         {showDetails && (
//           <section className=" md:py-0  md:mb-10   mx-3 md:mx-auto mt-2  px-1 md:px-3  md:w-[852px] leading-10 mb-4  border border-strokegreen-color rounded-lg md:rounded-xl">
//             {Object.entries(initialFields).map(([fieldName, fieldValue]) => (
//               <section
//                 key={fieldName}
//                 className="flex items-center justify-between  md:my-3"
//               >
//                 <p className="text-md md:text-5xl font-semibold   font-sans">
//                   {fieldName}
//                 </p>
//                 {!isEditing || editingField !== fieldName ? (
//                   <p className="text-sm  text-start   md:text-xl w-32 md:w-[547px]">{fields[fieldName]}</p>
//                 ) : (
//                   <input
//                     type="text"
//                     name={fieldName}
//                     value={fields[fieldName]}
//                     onChange={handleInputChange}
//                     className="w-32 md:w-[547px] text-sm md:text-5xl   md:px-5 outline-black rounded-md md:rounded-lg bg-transparent"
//                     autoFocus
//                     onFocus={(e) => e.target.value()}
//                   />
//                 )}

//                 {!isEditing || editingField !== fieldName ? (
//                   <img
//                     src={Edit}
//                     alt="Edit"
//                     className="ml-2 cursor-pointer w-5 h-5 md:w-5 md:h-5 object-contain"
//                     onClick={() => handleEditClick(fieldName)}
//                   />
//                 ) : (
//                   <button
//                     className="text-md md:text-5xl text-dark-green-color font-sans font-semibold"
//                     onClick={handleDoneClick}
//                   >
//                     Done
//                   </button>
//                 )}
//               </section>
//             ))}

//             {/* main section */}
//           </section>
//         )}
//       </section>
//     </div>
//   );
// };

// export default PersonalDetails2;



import React, { useState } from "react";
//  import Profile_picture from "../../asset/Profile_picture.png"
import Above from "../../asset/Above.png";
import Edit from "../../asset/Edit.png";

import Sidebar from "../ProPic/Sidebar";
import PersonalHeader from "./PersonalHeader";

const PersonalDetails2 = () => {
  const [rotation, setRotation] = useState(0);
  const [showDetails, setShowDetails] = useState(true);
  const initialFields = {
    "Full Name": "Yor Loid Forger",
    Contact: "1122339900",
    "E-mail ID": "yorf123@abc.com",
    "Birth date": "November 9,1999",
    Weight: "55 kg",
    Height: "165 cm",
  };
  const [fields, setFields] = useState(initialFields);
  const [isEditing, setIsEditing] = useState(false);
  const [editingField, setEditingField] = useState(null);

  const onBtnClick = () => {
    const newRotation = rotation === 0 ? -180 : 0;
    setRotation(newRotation);
    setShowDetails(!showDetails);
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "Contact" && isNaN(value)) return; // Allow only numbers for Contact
    // if (name === "E-mail ID" && !isValidEmail(value)) return; // Validate email format for E-mail ID
    setFields({ ...fields, [name]: value });
  };

  const handleEditClick = (field) => {
    setIsEditing(true);
    setEditingField(field);
  };

  const handleDoneClick = () => {
    setIsEditing(false);
    setEditingField(null);
  };

  // Function to validate email format
  // const isValidEmail = (email) => {
  //   return (email);
  // };

  return (
    <>
      {/* <Sidebar /> */}
      <section className="main w-[calc(100%_-_20%)] float-right ">
        {/* <PersonalHeader /> */}
        <section className="flex items-center justify-between flex-row px-1  md:px-3 md:mx-auto mx-3  md:w-[852px] md:leading-10 md:h-[72px]  border border-strokegreen-color rounded-md md:rounded-xl">
          <h1 className="text-lg md:text-13xl font-semibold font-inherit leading-7 md:leading-10">
            Personal details
          </h1>
          <img
            src={Above}
            alt=""
            className="w-5 h-5 md:w-7 md:h-7 object-contain"
            onClick={onBtnClick}
            style={{ transform: `rotate(${rotation}deg)` }}
          />
        </section>
        {showDetails && (
          <section className="md:py-0  md:mb-10   mx-3 md:mx-auto mt-2  px-1 md:px-3  md:w-[852px] leading-10 mb-4  border border-strokegreen-color rounded-lg md:rounded-xl">
            {Object.entries(initialFields).map(([fieldName, fieldValue]) => (
              <section
                key={fieldName}
                className="flex items-center justify-between  md:my-3"
              >
                <p className="text-md md:text-5xl font-semibold   font-sans">
                  {fieldName}
                </p>
                {!isEditing || editingField !== fieldName ? (
                  <p className="text-sm  text-start   md:text-xl w-32 md:w-[547px]">{fields[fieldName]}</p>
                ) : (
                  <input
                    type={fieldName === "Contact" ? "number" : "text"} // Use type "tel" for Contact to allow only numbers
                    name={fieldName}
                    value={fields[fieldName]}
                    onChange={handleInputChange}
                    className="w-32 md:w-[547px] text-sm md:text-5xl   md:px-5 outline-black rounded-md md:rounded-lg bg-transparent"
                    autoFocus
                    onFocus={(e) => e.target.value()}
                  />
                )}

                {!isEditing || editingField !== fieldName ? (
                  <img
                    src={Edit}
                    alt="Edit"
                    className="ml-2 cursor-pointer w-5 h-5 md:w-5 md:h-5 object-contain"
                    onClick={() => handleEditClick(fieldName)}
                  />
                ) : (
                  <button
                    className="text-md md:text-5xl text-dark-green-color font-sans font-semibold"
                    onClick={handleDoneClick}
                  >
                    Done
                  </button>
                )}
              </section>
            ))}

          </section>
        )}
      </section>
    
    </>
  );
};

export default PersonalDetails2;
