import Footer from "../Components/Footer/Footer";
import Nav from "../Components/Top_Nav/Nav";
import Terms_main_section from ".././asset/Terms_main_section.png"

const Terms_of_service = () => {
  return (
    <>
      <div className="relative bg-beige w-[1512px] h-[5068px] overflow-hidden text-left text-5xl text-text-black-color font-sans xl:w-full">
        <div className="absolute top-[0px] left-[756px] bg-whitesmoke w-[756px] h-[5068px]" />
      
         <Nav/>
      
      {/* main section starts here */}
 <div className="absolute top-[170px] left-[calc(50%_-_231px)] text-29xl tracking-[0.3em] leading-[133%] font-semibold text-stroke-green-color">
        Terms of Use
      </div>
      <img
        className="absolute top-[354px] left-[857px] w-[554px] h-[466px] object-cover"
        alt=""
        src={Terms_main_section}
      />
      <div className="absolute top-[409px] left-[59px] tracking-[0.06em] leading-[156.23%] inline-block w-[669px]">
        <span>{`Welcome to `}</span>
        <span className="font-semibold">Stay</span>
        <i className="font-semibold">FIT</i>
        <span>{`! By accessing and using our website and services, you agree to comply with the terms and conditions outlined in this Terms of Use agreement. `}</span>
      </div>
      <div className="absolute top-[2311px] left-[286px] tracking-[0.06em] leading-[156.23%] inline-block w-[952px]">
        <span>{`Your use of `}</span>
        <span className="font-semibold">StayFIT</span>
        <span>
          {" "}
          is also governed by our Privacy Policy, which outlines how we collect,
          use, and protect your personal information.
        </span>
      </div>
      <div className="absolute top-[697px] left-[59px] tracking-[0.06em] leading-[156.23%] font-semibold inline-block w-[669px]">
        Please read these terms carefully before using our platform.
      </div>
      <div className="absolute top-[971px] left-[calc(50%_-_696px)] text-17xl tracking-[0.06em] leading-[156.23%] font-semibold">
        Acceptance of Terms
      </div>
      <div className="absolute top-[1503px] left-[calc(50%_-_696px)] text-17xl tracking-[0.06em] leading-[156.23%] font-semibold">
        Use of Services
      </div>
      <div className="absolute top-[971px] left-[calc(50%_+_85px)] text-17xl tracking-[0.06em] leading-[156.23%] font-semibold">
        Content
      </div>
      <div className="absolute top-[1503px] left-[calc(50%_+_85px)] text-17xl tracking-[0.06em] leading-[156.23%] font-semibold">
        Intellectual Property
      </div>
      <div className="absolute top-[1057px] left-[60px] tracking-[0.06em] leading-[156.23%] inline-block w-[654px]">
        <span>By accessing or using</span>
        <span className="font-semibold">{` StayFIT, `}</span>
        <span>
          you acknowledge that you have read, understood, and agree to be bound
          by these Terms of Use. If you do not agree with any part of these
          terms, please do not use our website or services.
        </span>
      </div>
      <div className="absolute top-[1057px] left-[841px] text-inherit tracking-[0.06em] leading-[156.23%] font-inherit flex items-center w-[586px]">
        <ul className="m-0 pl-8">
          <li className="mb-0">
            All content provided on [Your Diet Website Name] is for
            informational purposes only. We do not endorse or guarantee the
            accuracy, completeness, or usefulness of any content.
          </li>
          <li>
            You may not use our platform to post or transmit any content that is
            defamatory, offensive, or violates the rights of others.
          </li>
        </ul>
      </div>
      <div className="absolute top-[1589px] left-[841px] text-inherit tracking-[0.06em] leading-[156.23%] font-inherit flex items-center w-[586px]">
        <ul className="m-0 pl-8">
          <li className="mb-0">
            All trademarks, logos, and content on [Your Diet Website Name] are
            the property of their respective owners.
          </li>
          <li>
            You may not reproduce, distribute, modify, or otherwise use any
            content from our platform without prior written consent.
          </li>
        </ul>
      </div>
      <div className="absolute top-[1589px] left-[60px] text-inherit tracking-[0.06em] leading-[156.23%] font-inherit inline-block w-[672px] h-[332px]">
        <ul className="m-0 pl-8">
          <li className="mb-0">
            You must be at least 18 years old to use our services. If you are
            under 18, you may use our services only with the involvement of a
            parent or guardian.
          </li>
          <li className="mb-0">
            You agree not to use our platform for any unlawful, abusive, or
            fraudulent activities.
          </li>
          <li>
            You are responsible for maintaining the confidentiality of your
            account information and for all activities that occur under your
            account.
          </li>
        </ul>
      </div>
      <div className="absolute top-[2745px] left-[97px] text-inherit tracking-[0.06em] leading-[156.23%] inline-block w-[1318px] h-[113px]">
        <ul className="m-0 pl-8">
          <li className="mb-0">
            <span className="font-semibold font-sans">StayFIT</span>
            <span>
              {" "}
              provides general health and wellness information, but it should
              not be considered a substitute for professional medical advice.
            </span>
          </li>
          <li>
            <span>
              We do not guarantee the results of using our services, as
              individual outcomes may vary.
            </span>
          </li>
        </ul>
      </div>
      <div className="absolute top-[3218px] left-[118px] tracking-[0.06em] leading-[156.23%] inline-block w-[1276px] h-[81px]">
        <span className="font-semibold">{`StayFIT `}</span>
        <span>
          and its affiliates shall not be liable for any direct, indirect,
          incidental, special, or consequential damages arising out of or in any
          way connected with the use of our platform.
        </span>
      </div>
      <div className="absolute top-[3659px] left-[101px] tracking-[0.06em] leading-[156.23%] inline-block w-[1310px] h-[81px]">
        We may update these Terms of Use from time to time. The revised version
        will be posted on our website, and the date of the last update will be
        indicated at the top of the page.
      </div>
      <div className="absolute top-[4100px] left-[92px] tracking-[0.06em] leading-[156.23%] text-[inherit] inline-block w-[1328px] h-[191px]">
        <p className="m-0">
          <span className="font-sans">{`If you have any questions or concerns about these Terms of Use, please contact us at `}</span>
        </p>
        <p className="m-0">
          <span className="font-semibold font-sans">Email</span>
          <span>{`: `}</span>
          <a
            className="text-[inherit]"
            href="mailto:info@yourdietwebsite.com"
            target="_blank" rel="noreferrer"
          >
            <span>
              <span className="[text-decoration:underline]">
                info@stayfit.a
              </span>
            </span>
          </a>
          <span>bc</span>
        </p>
        <p className="m-0">
          <span className="font-semibold font-sans">Phone</span>
          <span className="font-sans">: +91 11 22 33 9900</span>
        </p>
        <p className="m-0">
          <span className="font-sans">Thank you for using</span>
          <i className="font-bold font-sans"> StayFIT</i>
          <span className="font-sans">
            . We hope you find our platform helpful and enjoy a positive
            experience on our site.
          </span>
        </p>
      </div>
      <div className="absolute top-[2151px] left-[494px] w-[524px] h-[100px] text-29xl text-stroke-green-color">
        <div className="absolute top-[0px] left-[0px] w-[524px] h-[100px]">
          <div className="absolute top-[0px] left-[261.41px] rounded-sm bg-beige w-[262.59px] h-[100px]" />
          <div className="absolute top-[0px] left-[0px] rounded-sm bg-whitesmoke w-[262.59px] h-[100px]" />
        </div>
        <div className="absolute top-[18px] left-[calc(50%_-_160px)] tracking-[0.53em] leading-[133%] font-semibold">
          Privacy
        </div>
      </div>
      <div className="absolute top-[2585px] left-[445px] w-[622px] h-[100px] text-29xl text-stroke-green-color">
        <div className="absolute top-[0px] left-[0px] w-[622px] h-[100px]">
          <div className="absolute top-[0px] left-[310.3px] rounded-sm bg-beige w-[311.7px] h-[100px]" />
          <div className="absolute top-[0px] left-[0px] rounded-sm bg-whitesmoke w-[311.7px] h-[100px]" />
        </div>
        <div className="absolute top-[18px] left-[calc(50%_-_211px)] tracking-[0.53em] leading-[133%] font-semibold">
          Disclaimer
        </div>
      </div>
      <div className="absolute top-[3499px] left-[258px] w-[996px] h-[100px] text-29xl text-stroke-green-color">
        <div className="absolute top-[0px] left-[0px] w-[996px] h-[100px]">
          <div className="absolute top-[0px] left-[496.88px] rounded-sm bg-beige w-[499.12px] h-[100px]" />
          <div className="absolute top-[0px] left-[0px] rounded-sm bg-whitesmoke w-[499.12px] h-[100px]" />
        </div>
        <div className="absolute top-[18px] left-[calc(50%_-_399px)] tracking-[0.53em] leading-[133%] font-semibold">
          Changes to Terms
        </div>
      </div>
      <div className="absolute top-[3940px] left-[377px] w-[758px] h-[100px] text-29xl text-stroke-green-color">
        <div className="absolute top-[0px] left-[0px] w-[758px] h-[100px]">
          <div className="absolute top-[0px] left-[378.14px] rounded-sm bg-beige w-[379.86px] h-[100px]" />
          <div className="absolute top-[0px] left-[0px] rounded-sm bg-whitesmoke w-[379.86px] h-[100px]" />
        </div>
        <div className="absolute top-[18px] left-[calc(50%_-_241px)] tracking-[0.53em] leading-[133%] font-semibold">
          Contact Us
        </div>
      </div>
      <div className="absolute top-[3058px] left-[163px] w-[1186px] h-[100px] text-29xl text-stroke-green-color">
        <div className="absolute top-[0px] left-[0px] w-[1186px] h-[100px]">
          <div className="absolute top-[0px] left-[591.66px] rounded-sm bg-beige w-[594.34px] h-[100px]" />
          <div className="absolute top-[0px] left-[0px] rounded-sm bg-whitesmoke w-[594.34px] h-[100px]" />
        </div>
        <div className="absolute top-[18px] left-[calc(50%_-_535px)] tracking-[0.53em] leading-[133%] font-semibold">
          Limitation of Liability
        </div>
      </div>
      <div className="absolute top-[4371px] left-[92px] tracking-[0.06em] leading-[156.23%]">
        <i className="font-semibold">StayFIT</i>
        <span> Team</span>
      </div>
      
      {/* main section ends here */}

      {/* footer section starts here */}
<Footer/>

      {/* footer section ends here */}
      
      
      
      </div>
    </>
  );
};

export default Terms_of_service;
