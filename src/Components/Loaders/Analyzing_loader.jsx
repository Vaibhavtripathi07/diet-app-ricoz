import React from "react";
import Logo from "../../asset/Logo.png";
import Analyzing from "../../asset/Analyzing.gif";

const AnalyzingLoader = () => {
  return (
    <div className="max-w-full min-h-screen  bg-whitesmoke">
      <img src={Logo} alt="" width={100} height={100} className="mx-3" />

      <section className="mx-auto  max-w-sm  my-0 md:my-0">
        <section>
          <img src={Analyzing} alt="" width={450} height={450} className="" />
          <br />
          <p className=" bg-white text-5xl -my-10 py-1 px-2 w-fit text-center mx-auto md:mx-auto  text-[#838383] font-semibold font-sans leading-7 tracking-wider">
          Preparing your meal plan...
          </p>
        </section>
      </section>
    </div>
  );
};

export default AnalyzingLoader;
