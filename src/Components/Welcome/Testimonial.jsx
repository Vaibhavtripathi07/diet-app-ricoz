import React from 'react';
import Robert from "../../asset/Robert.png";
import Andrea from "../../asset/Andrea.png"; 
import rating_4 from "../../asset/rating_4.png"; 
import blue_inverted from "../../asset/blue_inverted.png";
import Arrow from "../../asset/Arrow.png";

const Testimonial = () => {
  return (
    <div>
         {/* testimonials */}
         <div className="absolute top-[6160px] left-[110px] w-[1292px] h-[818px] text-9xl text-gray-300">
        <div className="absolute top-[0px] left-[320px] w-[651px] h-[100px] text-29xl text-stroke-green-color">
          <div className="absolute top-[0px] left-[0px] w-[651px] h-[100px]">
            <div className="absolute top-[0px] left-[325.11px] rounded-sm bg-beige-100 w-[325.89px] h-[100px]" />
            <div className="absolute top-[0px] left-[0px] rounded-sm bg-whitesmoke-100 w-[324.4px] h-[100px]" />
          </div>
          <div className="absolute top-[18px] left-[calc(50%_-_287.5px)] tracking-[0.53em] leading-[133%] font-semibold font-sans">
            Testimonials
          </div>
        </div>
        <div className="absolute top-[120px] left-[calc(50%_-_231px)] text-5xl leading-[133%] text-grey-color font-sans">
          Hear from our satisfied clients and users!
        </div>
        <div className="absolute top-[352px] left-[0px] w-[536px] h-[412px]">
          <div className="absolute top-[66px] left-[65px] rounded-17xl bg-whitesmoke-100 w-[471px] h-[346px]" />
          <img
            className="absolute top-[0px] left-[0px] rounded-54xl w-[258px] h-[218px] object-cover"
            alt=""
            src={Robert}
          />
          <p className="absolute top-[100px] left-[288px] text-black leading-[133%] font-semibold font-sans">
            Robert Fox
          </p>
          <p className="absolute top-[256px] left-[117px] text-black text-xl tracking-[0.01em] leading-[120%] inline-block w-[387px] font-sans">
            Working with the nutritionists at StayFIT has transformed my eating
            habits and helped me achieve my weight loss goals. Highly
            recommended!
          </p>
          <img
            className="absolute top-[238px] left-[81px] w-6 h-6"
            alt=""
            src={blue_inverted}
          />
          <img
            className="absolute top-[161px] left-[288px] w-[86px] h-3.5"
            alt=""
            src={rating_4}
          />
        </div>
        <div className="absolute top-[352px] left-[756px] w-[536px] h-[412px]">
          <div className="absolute top-[66px] left-[65px] rounded-17xl bg-beige-100 w-[471px] h-[346px]" />
          <img
            className="absolute top-[0px] left-[0px] rounded-54xl w-[258px] h-[218px] object-cover"
            alt=""
            src={Andrea}
          />
          <p className="absolute top-[100px] left-[288px] text-black leading-[133%] font-semibold font-sans">
            Andrea Carver
          </p>
          <p className="absolute top-[256px] left-[117px] text-black text-xl tracking-[0.01em] leading-[120%] inline-block w-[387px] font-sans">
            The personalized meal plans provided by StayFIT have made healthy
            eating easy and enjoyable for me. Thank you!
          </p>
          <img
            className="absolute top-[238px] left-[81px] w-6 h-6"
            alt=""
            src={blue_inverted}
          />
          <img
            className="absolute top-[161px] left-[288px] w-[86px] h-3.5"
            alt=""
            src={rating_4}
          />
        </div>
        <div className="absolute top-[810px] left-[615px] rounded-10xl bg-lightgreen w-[26px] h-2" />
        <div className="absolute top-[810px] left-[649px] rounded-10xl bg-honeydew-200 w-2 h-2" />
        <div className="absolute top-[810px] left-[665px] rounded-10xl bg-honeydew-200 w-2 h-2" />
        <div className="absolute top-[810px] left-[681px] rounded-10xl bg-honeydew-200 w-2 h-2" />
      </div>
      {/* slider arrow */}
      <img
        className="absolute top-[6730px] left-[1420px] w-16 h-16"
        alt=""
        src={Arrow}
       
      />
    </div>
  )
}

export default Testimonial



// import React, { useState } from 'react';
// import Robert from "../../asset/Robert.png";
// import Andrea from "../../asset/Andrea.png"; 
// import rating_4 from "../../asset/rating_4.png"; 
// import blue_inverted from "../../asset/blue_inverted.png";
// import Arrow from "../../asset/Arrow.png";

// const Testimonial = () => {
//   const testimonials = [
//     {
//       image: Robert,
//       name: 'Robert Fox',
//       text: 'Working with the nutritionists at StayFIT has transformed my eating habits and helped me achieve my weight loss goals. Highly recommended!',
//       ratingImage: rating_4,
//     },
//     {
//       image: Andrea,
//       name: 'Andrea Carver',
//       text: 'The personalized meal plans provided by StayFIT have made healthy eating easy and enjoyable for me. Thank you!',
//       ratingImage: rating_4,
//     },
//     // Add more testimonials as needed
//   ];

//   const [currentTestimonial, setCurrentTestimonial] = useState(0);

//   const handleNextTestimonial = () => {
//     setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
//   };

//   const handlePrevTestimonial = () => {
//     setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   return (
//     <div>
//       {/* ... Testimonials code ... */}

//       {/* Slider arrows */}
//       <img
//         className="absolute top-[6730px] left-[1420px] w-16 h-16 cursor-pointer"
//         alt=""
//         src={Arrow}
//         onClick={handlePrevTestimonial}
//       />
//       {/* <img
//         className="absolute top-[6730px] left-[1440px] w-16 h-16 cursor-pointer"
//         alt=""
//         src={Arrow}
//         onClick={handleNextTestimonial}
//         style={{ transform: 'rotate(180deg)' }} // Rotate the arrow for next
//       /> */}
      
//       {/* Display current testimonial */}
//       <div className="absolute top-[352px] left-[0px] w-[536px] h-[412px]">
//         <div className="absolute top-[66px] left-[65px] rounded-17xl bg-whitesmoke-100 w-[471px] h-[346px]" />
//         <img
//           className="absolute top-[0px] left-[0px] rounded-54xl w-[258px] h-[218px] object-cover"
//           alt=""
//           src={testimonials[currentTestimonial].image}
//         />
//         <p className="absolute top-[100px] left-[288px] text-black leading-[133%] font-semibold font-sans">
//           {testimonials[currentTestimonial].name}
//         </p>
//         <p className="absolute top-[256px] left-[117px] text-black text-xl tracking-[0.01em] leading-[120%] inline-block w-[387px] font-sans">
//           {testimonials[currentTestimonial].text}
//         </p>
//         <img
//           className="absolute top-[238px] left-[81px] w-6 h-6"
//           alt=""
//           src={blue_inverted}
//         />
//         <img
//           className="absolute top-[161px] left-[288px] w-[86px] h-3.5"
//           alt=""
//           src={testimonials[currentTestimonial].ratingImage}
//         />
//       </div>
//     </div>
//   );
// };

// export default Testimonial;


// import React, { useState } from 'react';
// import Robert from '../../asset/Robert.Png'; // Replace with the actual path to your images
// import Andrea from '../../asset/Andrea.png'; // Replace with the actual path to your images
// import rating_4 from "../../asset/rating_4.png"; 
// import Arrow from '../../asset/Arrow.png'; // Replace with the actual path to your arrow image
// import blue_inverted from "../../asset/blue_inverted.png";

// const testimonials = [
//   {
//     id: 1,
//     name: 'Robert Fox',
//     image: Robert,
//     text: 'Working with the nutritionists at StayFIT has transformed my eating habits and helped me achieve my weight loss goals. Highly recommended!',
//     rating: 4,
//   },
//   {
//     id: 2,
//     name: 'Andrea Carver',
//     image: Andrea,
//     text: 'The personalized meal plans provided by StayFIT have made healthy eating easy and enjoyable for me. Thank you!',
//     rating: 4,
//   },
//   // Add more testimonials as needed
// ];

// const Testimonial = () => {
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);

//   const nextTestimonial = () => {
//     setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevTestimonial = () => {
//     setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   return (
//     <div>
//       {/* testimonials */}
//       <div className="absolute top-[6160px] left-[110px] w-[1292px] h-[818px] text-9xl text-gray-300">
//         {testimonials.map((testimonial, index) => (
//           <div
//             key={testimonial.id}
//             className={`absolute top-[${352 + index * 412}px] left-[${index % 2 === 0 ? '0px' : '756px'}] w-[536px] h-[412px]`}
//           >
//             <div className={`absolute top-[66px] left-[65px] rounded-17xl ${index % 2 === 0 ? 'bg-whitesmoke-100' : 'bg-beige-100'} w-[471px] h-[346px]`} />
//             <img
//               className="absolute top-[0px] left-[0px] rounded-54xl w-[258px] h-[218px] object-cover"
//               alt=""
//               src={testimonial.image}
//             />
//             <p className="absolute top-[100px] left-[288px] text-black leading-[133%] font-semibold font-sans">
//               {testimonial.name}
//             </p>
//             <p className="absolute top-[256px] left-[117px] text-black text-xl tracking-[0.01em] leading-[120%] inline-block w-[387px] font-sans">
//               {testimonial.text}
//             </p>
//             <img
//               className="absolute top-[238px] left-[81px] w-6 h-6"
//               alt=""
//               src={blue_inverted}
//             />
//             <img
//               className="absolute top-[161px] left-[288px] w-[86px] h-3.5"
//               alt=""
//               src={rating_4}
//             />
//           </div>
//         ))}
//         <div className="absolute top-[810px] left-[615px] rounded-10xl bg-lightgreen w-[26px] h-2" />
//         <div className="absolute top-[810px] left-[649px] rounded-10xl bg-honeydew-200 w-2 h-2" />
//         <div className="absolute top-[810px] left-[665px] rounded-10xl bg-honeydew-200 w-2 h-2" />
//         <div className="absolute top-[810px] left-[681px] rounded-10xl bg-honeydew-200 w-2 h-2" />
//       </div>
//       {/* slider arrow */}
//       <img
//         className="absolute top-[6730px] left-[1420px] w-16 h-16 cursor-pointer"
//         alt=""
//         src={Arrow}
//         onClick={nextTestimonial}
//       />
//     </div>
//   );
// };

// export default Testimonial;







