import React from "react";
import Nav from "../Top_Nav/Nav";
import Privacy from "../../asset/Privacy.png";

const PrivacyPolicy = () => {
  // const onStoreTextClick = useCallback(() => {
  //   // Please sync "STORE" to the project
  // }, []);

  // const onWhoWeAreClick = useCallback(() => {
  //   // Please sync "ABOUT US" to the project
  // }, []);

  // const onWhoWeAre1Click = useCallback(() => {
  //   // Please sync "ABOUT US" to the project
  // }, []);

  // const onFAQsTextClick = useCallback(() => {
  //   // Please sync "FAQs" to the project
  // }, []);

  // const onStoreText1Click = useCallback(() => {
  //   // Please sync "STORE" to the project
  // }, []);

  // const onTermsOfUseClick = useCallback(() => {
  //   // Please sync "terms of services" to the project
  // }, []);

  // const onPrivacyPolicyText1Click = useCallback(() => {
  //   navigate("/");
  // }, [navigate]);

  // const onContactUsTextClick = useCallback(() => {
  //   // Please sync "CONTACTUS" to the project
  // }, []);

  return (
    <div className="relative bg-whitesmoke min-w-[1512px] min-h-[4258px] overflow-hidden text-left text-5xl text-black font-sans cursor-pointer">
      <Nav />
      {/* <div className=" top-[0px] left-[756px] bg-beige w-[756px] h-[4258px]" /> */}

      {/* navbar ends here  */}

      {/* main content starts here */}

      {/* heading */}
      <h1 className="my-36 text-center  text-29xl tracking-[0.3em] leading-7 font-semibold text-stroke-green-color">
        Privacy Policy
      </h1>
      {/* upper*/}
      <div className="flex flex-col bg-whitesmoke md:flex md:flex-row md:justify-between items-center md:px-32 px-5  ">
        <div className="md:w-2/4 text-5xl text-center">
          <p className="text-5xl text-black font-sans  leading-7  mb-6 ">
            Welcome to <span className="font-semibold">Stay</span>
            <span className="italic text-black font-semibold leading-[156.227%]">
              FIT
            </span>{" "}
            Your privacy and the security of your personal information are of
            utmost importance to us.
          </p>
          <p className="text-5xl text-black font-sans  leading-7  mb-6 ">
            By using our website and services, you agree to the terms outlined
            in this Privacy Policy.
          </p>
          <p className="text-5xl text-black font-sans  leading-7  mb-6 ">
            This Privacy Policy outlines how we collect, use, and safeguard your
            data when you access and interact with our website or use our
            services.
          </p>
        </div>

        <div className="md:w-2/4 w-full ">
          <img src={Privacy} alt="" className="mx-auto "/>
        </div>
      </div>
      <h2 className="text-29xl text-center my-28 text-strokegreen-color tracking-[0.3em] leading-7 font-semibold">
        Information{" "}
        <span className="bg-beige px-2 py-5 leading-7">we Collect</span>
      </h2>

      <div className="middle flex items-center flex-wrap justify-between  md:items-center md:px-12 px-16  pt-10">
        <div className="md:w-2/4 text-5xl  text-left md:pr-10 border border-black ">
          <section className="border border-black ">
            <ol className="list-inside list-decimal text-5xl px-5" start="1">
              <li >
                <b>Personal Information:</b> When you sign up for an account or
                use our services, we may collect personal information, including
                your name, email address, contact information, and any other
                information you provide to us voluntarily.
              </li>
            </ol>
          </section>
          <section className="border border-black my-3 px-5">
            <ol className="list-inside list-decimal text-5xl" start="3">
              <li>
                {" "}
                <b>Usage Data:</b> We may collect information about your
                interactions with our website, such as the pages you visit, the
                links you click, and your usage patterns.
              </li>
            </ol>
          </section>
        </div>
        <div className="md:w-2/4  text-5xl  border border-black md:pl-10 ">
          <section className="border border-black px-5">
            <ol className="list-inside list-decimal text-5xl" start="2">
              <li>
                <b>Health Data:</b> To provide personalized nutrition and
                fitness solutions, we may collect health-related data, such as
                weight, height, dietary preferences, and fitness activities.
              </li>
            </ol>
          </section>

          <section className="border border-black my-3 px-5">
            <ol className="list-inside list-decimal text-5xl" start="4">
              <li>
                <b>Cookies and Similar Technologies:</b>
                Like many websites, we use cookies and similar technologies to
                enhance your browsing experience and gather information about
                how our website is used. You can adjust your browser settings to
                manage cookies preferences.
              </li>
            </ol>
          </section>
        </div>
      </div>

      <h2 className="text-29xl text-center my-28 text-strokegreen-color tracking-[0.3em] leading-7 font-semibold">
        How we <span className="bg-beige px-2 py-5 leading-7">use it</span>
      </h2>
      <div className="middle flex items-center flex-wrap space-y-20 justify-between  md:items-center md:px-12 px-16 pt-10">
        <div className="md:w-2/4 text-5xl  text-left md:pr-10 space-y-20 ">
          <section className="border border-black   ">
            <ol className="list-inside list-none text-5xl px-5" start="1">
              <li>
                <b>Personalization: </b>We use the information you provide to
                personalize your experience and deliver tailored nutrition and
                fitness recommendations.
              </li>
            </ol>
          </section>
          <section className="border border-black">
            <ol className="list-inside px-5 text-5xl" start="3">
              <li>
                {" "}
                <b>Improve our Services:</b> Your data helps us analyze user
                behavior and preferences to improve our services and website
                performance.
              </li>
            </ol>
          </section>
        </div>
        <div className="md:w-2/4  text-5xl md:pl-10 space-y-20">
          <section className="border border-black px-4">
            <ol className="list-inside list-none px-5 text-5xl" start="2">
              <li>
                <b>Communication:</b> We may use your contact information to
                send you relevant updates, newsletters, or promotional
                materials. You can opt-out of marketing communications at any
                time.
              </li>
            </ol>
          </section>

          <section className="border border-black">
            <ol className="list-inside list-none px-5 text-5xl" start="4">
              <li>
                <b>Security:</b>
                We take data security seriously and implement measures to
                protect your personal information from unauthorized access or
                disclosure.
              </li>
            </ol>
          </section>
        </div>
      </div>

      {/* data Sharing */}
      <h2 className="text-29xl text-center my-28 text-strokegreen-color tracking-[0.3em] leading-7 font-semibold">
        Data S<span className="bg-beige px-2 py-5 leading-7">haring</span>
      </h2>
      <p className="leading-10 tracking-normal text-3xl text-black mt-20 px-20 text-left h-auto md:text-5xl font-sans">
        We do not sell or rent your personal information to third parties.
        However, we may share certain data with trusted service providers who
        assist us in delivering our services, such as nutritionists and fitness
        experts, to fulfill your requests and improve your experience on our
        platform.
      </p>
      {/* data Sharing */}

{/* legal requirements */}
<h2 className="text-29xl text-center my-28 text-strokegreen-color tracking-[0.3em] leading-7 font-semibold">
        Legal Req<span className="bg-beige px-2 py-5 leading-7">uirements</span>
      </h2>
      <p className="leading-10 tracking-normal text-3xl text-black mt-20 px-20 text-center h-auto md:text-5xl font-sans">
      We may disclose your information if required by law or to protect our rights, privacy, safety, or property.
      </p>
{/* legal requirements */}

      {/* datasharing section ends  */}

      {/* legal section starts here */}
   

      {/* laga-section ends here */}

      {/*main-section ends here  */}
      {/* footer section starts here */}
    </div>
  );
};

export default PrivacyPolicy;
