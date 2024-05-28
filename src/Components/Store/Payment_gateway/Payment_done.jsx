import { useCallback } from "react";
import Logo from "../../../asset/Logo.png"
import Done from "../../../asset/Done.png"

import { Link } from "react-router-dom";

const Payment_Done = () => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "LANDING" to the project
  }, []);

  return (
    <div
      className=" bg-whitesmoke max-w-screen min-h-screen overflow-hidden  text-black "
      id="payment_done"
    >
      <div>
        <img src={Logo} alt="Logo" width={100} height={100} className="mx-3" />
      </div>
      <section className="mt-20">
      <section className="flex items-center justify-center">
        <img src={Done} alt="done" width={160} height={160} />
      </section>

      <p className="text-4xl leading-7 mt-7 font-semibold text-center text-black">Done!</p>
      <p className=" text-5xl leading-7 my-10 font-semibold text-gray text-center">
        Payment Successful
      </p>
      {/* button */}

      <Link to="/Course_main">
        <button className="text-5xl font-sans rounded-2xl mx-auto block  text-dark-green-color font-semibold py-7 px-[73px] [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))]  border border-solid border-[#CFF7AA]">
          Continue
        </button>
      </Link>
      {/* button */}
      </section>
    </div>

  );
};

export default Payment_Done;
