 import React,{useRef,useEffect} from 'react'
 import Logo from "../../asset/Logo.png"
import { Link } from 'react-router-dom';
 

 const SentCode = () => {
//  const inputRefs = Array.from({ length: 6 }, () => useRef(null));
const inputRefs = Array.from({ length: 6 }, () => React.createRef());


 const handleInput = (e, index) => {
  const regex = /^[0-9]*$/;
  if (!regex.test(e.target.value)) {
    e.preventDefault();
    return;
  }

   if (index < inputRefs.length - 1 && e.target.value !== '') {
     inputRefs[index + 1].current.focus();
   }
 };



 // Function to generate a random 6-digit number
 const generateRandomOtp = () => {
  const randomOtp = Math.floor(100000 + Math.random() * 900000);
  return randomOtp.toString().split('');
};

useEffect(() => {
  const randomOtp = generateRandomOtp();
  inputRefs.forEach((ref, index) => {
    if (ref.current) {
      ref.current.value = randomOtp[index];
    }
  });
  // Alert the generated OTP
  alert(`Your OTP: ${randomOtp.join('')}`);
}, []); // Run only once on component mount


const handleKeyDown = (e, index) => {
  if (e.key === 'Enter' && index < inputRefs.length - 1) {
    e.preventDefault();
    inputRefs[index + 1].current.focus();
  }
};
const handleSubmit=()=>{
  alert("otp confirmed")
}



   return (
     <div className=' max-w-full min-h-screen overflow-hidden font-sans bg-whitesmoke'>
         <div>
        <img src={Logo} alt="Logo" width={100} height={100} className="mx-3" />
      </div>
     
      <section className='-mt-10'>
       {/* main section */}
       <section>
         <p className='  text-center leading-14 md:leading-14 text-black font-semibold  font-inherit mt-36 text-base\ md:text-13xl'>Enter the Code sent to your registered mobile number: <br className='mt-3'/ >******900</p>
         <p className=' text-grey-color leading-14  md:leading-14  font-semibold text-base md:text-13xl tracking-wide mt-3  text-center font-inherit '>Enter the 6-Digit code below</p>
       </section>

 {/* otp section */}
<section className="flex items-center justify-center gap-10 my-5 mx-3">
      {Array.from({ length: 6 }, (_, index) => (
        <input
        key={index}
        type="number"
        id={`otp-${index}`}
        maxLength={1}
        minLength={0}
        name="otp"
        // className="appearance-none border-2 border-solid border-dark-green-color"
        className='border-2 border-solid border-dark-green-color text-center text-5xl w-20 h-20 md:w-24 md:h-24 rounded-2xl no-number-spin'
        ref={inputRefs[index]}
        onInput={(e) => handleInput(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
        />
        ))}
{/* otp section */}
   
   </section> 
        {/* done button */}
<Link to="/changePassword"><button className=' mt-12 py-7 px-16  mx-auto block text-dark-green-color font-inherit text-5xl font-semibold leading-7 border border-solid border-Lightgreen [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))] rounded-2xl ' onClick={handleSubmit}>Done</button></Link>
</section>
{/* done button */}


      {/* main section */}
     </div>
   )
 }

 export default SentCode




