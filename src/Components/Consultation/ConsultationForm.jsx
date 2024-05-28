// import { useState, useCallback } from "react";
// import Nav from "../Top_Nav/Nav";

// const CONSULTATION = () => {
//   const [rectangleInputValue, setRectangleInputValue] = useState("");
//   const [rectangleInput1Value, setRectangleInput1Value] = useState("");
//   const [rectangleInput2Value, setRectangleInput2Value] = useState("");
//   const [groupValue, setGroupValue] = useState("");
//   const [rectangleInput3Value, setRectangleInput3Value] = useState("");
//   const [rectangleInput4Value, setRectangleInput4Value] = useState("");
//   const [rectangleInput5Value, setRectangleInput5Value] = useState("");
//   const [rectangleInput6Value, setRectangleInput6Value] = useState("");
//   const [rectangleInput7Value, setRectangleInput7Value] = useState("");

//   const onGroupContainerClick = useCallback(() => {
//     // Please sync "LANDING" to the project
//   }, []);

//   return (
//     <div className="relative bg-whitesmoke w-full h-[2656px] font-sans overflow-hidden text-left text-13xl text-gray xl:w-full">
//       <img
//         className="absolute top-[392px] left-[calc(50%_-_293px)] w-[585px] h-[373px] object-cover"
//         alt="consulttion_image"
//         src="/rectangle-385@2x.png"
//       />
//       <h1
//         className="m-0 absolute top-[208px] left-[calc(50%_-_419px)] text-[48px] tracking-[0.53em] leading-[133%] font-semibold font-inherit text-stroke-green-color"
//         id="Consultation_Form"
//       >
//         Consultation Form
//       </h1>
// {/* Nav */}
// {/* <Nav/> */}
// {/* Nav */}
//       <div className="absolute top-[892px] left-[380px] w-[752px] h-[138px]">
//         <label
//           className="cursor-pointer absolute top-[0px] left-[0px] leading-[156.23%] font-bold inline-block w-[168px] h-[42px]"
//           htmlFor="FullName"
//         >
//           Full Name
//         </label>
//         <input
//           className="[outline:none] bg-[transparent] absolute top-[64.5px] left-[-1.5px] rounded-xl box-border w-[755px] h-[75px] border-[3px] border-solid border-lavender"
//           name="name"
//           type="text"
//           value={rectangleInputValue}
//           onChange={(event) => setRectangleInputValue(event.target.value)}
//         />
//       </div>
//       <div className="absolute top-[1084px] left-[380px] w-[752px] h-[146px]">
//         <div className="absolute top-[0px] left-[0px] w-[100px] h-[146px]">
//           <input
//             className="[outline:none] bg-[transparent] absolute top-[72.5px] left-[-1.5px] rounded-xl box-border w-[103px] h-[75px] border-[3px] border-solid border-lavender"
//             name="Age"
//             type="number"
//             value={rectangleInput1Value}
//             onChange={(event) => setRectangleInput1Value(event.target.value)}
//           />
//           <label
//             className="cursor-pointer absolute top-[0px] left-[0px] leading-[156.23%] font-bold"
//             htmlFor="Age"
//           >
//             Age
//           </label>
//         </div>
//         <div className="absolute top-[0px] left-[437px] w-[315px] h-[124px] text-center">
//           <label
//             className="cursor-pointer absolute top-[0px] left-[0px] leading-[156.23%] font-bold"
//             htmlFor="Gender"
//           >
//             Gender
//           </label>
//           <div className="absolute top-[74px] left-[0px] w-[121px] h-[50px]">
//             <input type="radio"  name="gender" 
//               className="absolute top-[10px] left-[0px] w-[30px] h-[30px]"
            
//             />
//             <div className="absolute top-[0px] left-[48px] leading-[156.23%] ">
//               Male
//             </div>
//           </div>
//           <div className="absolute top-[74px] left-[159px] w-[156px] h-[50px]">
//             <input type ="radio"  name="gender" 
//               className="absolute top-[10px] left-[0px] w-[30px] h-[30px]"
//             />
//             <div className="absolute top-[0px] left-[48px] leading-[156.23%]">
//               Female
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="absolute top-[1284px] left-[380px] w-[752px] h-[146px]">
//         <input
//           className="[outline:none] bg-[transparent] absolute top-[72.5px] left-[-1.5px] rounded-xl box-border w-[755px] h-[75px] border-[3px] border-solid border-lavender"
//           name="Number"
//           id="Number"
//           type="number"
//           value={rectangleInput2Value}
//           onChange={(event) => setRectangleInput2Value(event.target.value)}
//         />
//         <div className="absolute top-[72.5px] left-[-1.5px] rounded-xl box-border w-[103px] h-[75px] border-[3px] border-solid border-lavender" />
//         <label
//           className="cursor-pointer absolute top-[0px] left-[0px] leading-[156.23%] font-bold"
//           htmlFor="Contact"
//         >
//           Contact
//         </label>
//         <div className="absolute top-[91px] left-[18px] text-5xl leading-[156.23%] text-lightsteelblue-200">
//           +91
//         </div>
//         <img
//           className="absolute top-[105px] left-[71px] w-[18px] h-2.5 object-cover"
//           alt=""
//           src="/vector-161@2x.png"
//         />
//       </div>
//       <div className="absolute top-[1484px] left-[380px] w-[757px] h-[383px]">
//         <textarea
//           className="bg-[transparent] h-[312px] w-[755px] [outline:none] absolute top-[72.5px] left-[-1.5px] rounded-xl box-border border-[3px] border-solid border-lavender"
//           placeholder="Describe in 0 - 500 words"
//           rows={5}
//           cols={5}
//         />
//         <label
//           className="cursor-pointer absolute top-[0px] left-[0px] leading-[156.23%]"
//           htmlFor="reason"
//         >
//           <b>{`Reason for Consultation `}</b>
//           <span>(Include Medical history)</span>
//         </label>
//       </div>
//       <div className="absolute top-[1921px] left-[380px] w-[520px] h-[282px]">
//         <div className="absolute top-[227px] left-[270px] w-[63px] h-[31px] text-5xl text-lightsteelblue-100 font-montserrat">
//           <div className="absolute top-[0px] left-[0px] w-[63px] h-[31px]">
//             <img
//               className="absolute top-[19px] left-[49px] w-3.5 h-1.5 object-cover"
//               alt="downward_arrow"
//               src="/vector-74@2x.png"
//             />
//             <p className="m-0 absolute top-[0px] left-[0px] leading-[156.23%] font-medium inline-block w-[41px] h-[31px]">
//               AM
//             </p>
//           </div>
//         </div>
//         <input
//           className="[border:none] [outline:none] bg-cornflowerblue absolute h-[14.18%] w-[7.69%] top-[31.91%] right-[0%] bottom-[53.9%] left-[92.31%]"
//           name="date"
//           type="datetime-local"
//           value={groupValue}
//           onChange={(event) => setGroupValue(event.target.value)}
//         />
//         <label
//           className="cursor-pointer absolute top-[0px] left-[0px] leading-[156.23%] font-bold"
//           htmlFor={`date & Time`}
//         >{`Preferred Date & Time`}</label>
//         <input
//           className="[outline:none] bg-[transparent] absolute top-[72.5px] left-[-1.5px] rounded-xl box-border w-[103px] h-[75px] border-[3px] border-solid border-lavender"
//           name="date"
//           type="number"
//           value={rectangleInput3Value}
//           onChange={(event) => setRectangleInput3Value(event.target.value)}
//         />
//         <input
//           className="[outline:none] bg-[transparent] absolute top-[208.5px] left-[-1.5px] rounded-xl box-border w-[103px] h-[75px] border-[3px] border-solid border-lavender"
//           name="hour"
//           type="number"
//           value={rectangleInput4Value}
//           onChange={(event) => setRectangleInput4Value(event.target.value)}
//         />
//         <input
//           className="[outline:none] bg-[transparent] absolute top-[208.5px] left-[144.5px] rounded-xl box-border w-[103px] h-[75px] border-[3px] border-solid border-lavender"
//           type="number"
//           value={rectangleInput5Value}
//           onChange={(event) => setRectangleInput5Value(event.target.value)}
//         />
//         <input
//           className="[outline:none] bg-[transparent] absolute top-[72.5px] left-[176.5px] rounded-xl box-border w-[103px] h-[75px] border-[3px] border-solid border-lavender"
//           name="month"
//           type="number"
//           value={rectangleInput6Value}
//           onChange={(event) => setRectangleInput6Value(event.target.value)}
//         />
//         <input
//           className="[outline:none] bg-[transparent] absolute top-[72.5px] left-[354.5px] rounded-xl box-border w-[103px] h-[75px] border-[3px] border-solid border-lavender"
//           name="year"
//           type="number"
//           value={rectangleInput7Value}
//           onChange={(event) => setRectangleInput7Value(event.target.value)}
//         />
//         <img
//           className="absolute top-[90px] left-[124px] w-[30px] h-10 object-cover"
//           alt="slash"
//           src="/vector-162@2x.png"
//         />
//         <img
//           className="absolute top-[90px] left-[302px] w-[30px] h-10 object-cover"
//           id="slash"
//           alt=""
//           src="/vector-163@2x.png"
//         />
//         <p
//           className="m-0 absolute top-[221px] left-[118px] leading-[156.23%] font-bold"
//           id="semicolon:"
//         >
//           :
//         </p>
//       </div>
//       <div className="absolute top-[2343px] left-[calc(50%_-_173px)] rounded-2xl [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))] box-border w-[346px] overflow-hidden flex flex-row items-center justify-center py-7 px-[73px] text-5xl text-dark-green-color border-[1px] border-solid border-palegoldenrod">
//         <div className="relative leading-[120%] font-semibold">
//           Book Appointment
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CONSULTATION;





import React from 'react';

const DoctorConsultationPage = () => {
  return (
    <div className="min-h-screen bg-whitesmoke max-w-screen border border-black bg-gray-100 flex items-center justify-center ">
      <div className=" p-8  rounded-lg  max-w-3xl  w-full">
      <h2 className="text-17xl   border border-black tracking-[15px] text-dark-green-color leading-[133%] font-semibold text-gray-800 text-center mb-6
  xl:inline-block xl:whitespace-nowrap xl:ml-10
  sm:block sm:whitespace-normal sm:mr-0">
  Doctor Consultation
</h2>

        <form>
          <div className="mb-4">
            <img src="/rectangle-385@2x.png" alt="" />
          </div>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-13xl font-semibold font-sans  black">Full Name</label>
            <input type="text" id="fullName" name="fullName" className="mt-1 p-2 border text-5xl border-gray-300 rounded w-full" />
          </div>
<div className=' border border-black flex items-start justify-between px-2' >
          <div className="mb-4">
            <label htmlFor="age" className="block text-13xl font-semibold font-sans  text-black">Age</label>
            <input type="number" id="age" name="age" className="mt-1 p-2 border text-5xl border-gray-300 rounded w-20" />
          </div>

          <div className="mb-4 ">
            <label className="block text-13xl font-semibold font-sans  text-black ">Gender</label>
            <div className="mt-1 flex  sm:flex-row items-start sm:items-center gap-3">
              <div className="flex items-center gap-3">
                <input type="radio" id="male" name="gender" value="male" className="border-gray-300 w-7 h-7 accent-dark-green-color" />
                <label htmlFor="male" className="text-9xl font-sans font-normal ">Male</label>
              </div>
              <div className="flex items-center gap-3">
                <input type="radio" id="female" name="gender" value="female" className="border-gray-300 w-7 h-7" />
                <label htmlFor="female" className="text-9xl font-sans font-normal ">Female</label>
              </div>

            </div>
          </div>
</div>
<div className="mb-4">
  <label htmlFor="Mobile" className='block text-13xl font-semibold font-sans text-black'>Contact</label>
  <input type="number" name="contact" id="contact" className='mt-1 p-2 border border-gray-300 rounded text-5xl w-full' />
</div>
          <div className="mb-4">
            <label htmlFor="reason" className="block text-13xl font-semibold font-sans  text-black">Reason for Consultation<span className='font-normal'>(Include Medical history)</span></label>
            <textarea id="reason" name="reason" rows="5" placeholder='Describe in 0 - 500 words' className="mt-1 p-2 text-5xl border border-gray-300 rounded w-full placeholder:text-3xl "></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="preferredDateTime" className="block text-13xl font-semibold font-sans  text-black">Preferred Date and Time</label>
            <input type="datetime-local" id="preferredDateTime" name="preferredDateTime" className="mt-1 p-2 text-5xl border border-gray-300 rounded w-full" />
          </div>

          <div className="mt-6 ">
            <button type="submit" className="bg-blue text-3xl   text-white p-3 rounded-md w-full hover:bg-dark-greencolor">Submit Consultation</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DoctorConsultationPage;








// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import TimePicker from "react-time-picker";

// const ConsultationForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     age: "",
//     gender: "",
//     mobileNumber: "",
//     description: "",
//     date: new Date(),
//     time: "12:00",
//     amPm: "AM",
//   });

//   const handleChange = (field, value) => {
//     setFormData({ ...formData, [field]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log("Form submitted:", formData);
//   };

//   return (
//     <div>
//       <h2>Consultation Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Full Name</label>
//           <input
//             type="text"
//             value={formData.fullName}
//             onChange={(e) => handleChange("fullName", e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Age</label>
//           <input
//             type="number"
//             value={formData.age}
//             onChange={(e) => handleChange("age", e.target.value)}
//             required
//           />
//           <label>Gender</label>
//           <select
//             value={formData.gender}
//             onChange={(e) => handleChange("gender", e.target.value)}
//             required
//           >
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//             <option value="other">Other</option>
//           </select>
//         </div>
//         <div>
//           <label>Mobile Number</label>
//           <div>
//             <input
//               type="text"
//               placeholder="Country Code"
//               value={formData.mobileNumber}
//               onChange={(e) => handleChange("mobileNumber", e.target.value)}
//               required
//             />
//             <input
//               type="tel"
//               placeholder="Mobile Number"
//               value={formData.mobileNumber}
//               onChange={(e) => handleChange("mobileNumber", e.target.value)}
//               required
//             />
//           </div>
//         </div>
//         <div>
//           <label>Description</label>
//           <textarea
//             value={formData.description}
//             onChange={(e) => handleChange("description", e.target.value)}
//             required
//           ></textarea>
//         </div>
//         <div>
//           <label>Date</label>
//           <DatePicker
//             selected={formData.date}
//             onChange={(date) => handleChange("date", date)}
//             dateFormat="dd/MM/yyyy"
//           />
//         </div>
//         <div>
//           <label>Time</label>
//           <TimePicker
//             onChange={(time) => handleChange("time", time)}
//             value={formData.time}
//           />
//           <select
//             value={formData.amPm}
//             onChange={(e) => handleChange("amPm", e.target.value)}
//           >
//             <option value="AM">AM</option>
//             <option value="PM">PM</option>
//           </select>
//         </div>
//         <div>
//           <button type="submit">Book Appointment</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ConsultationForm;

