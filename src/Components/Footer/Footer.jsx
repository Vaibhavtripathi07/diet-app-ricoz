
// import vector-61 from "../../asset/vector-61.svg"
import Logo from "../../asset/Logo.png";
import Footer_img from "../../asset/Footer_img.png";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";


const Footer = () => {

  return (
    <>
      <div className="absolute top-[8858px]  w-[1512px] h-[400px] text-xl text-dark-green-color font-body-main xl:w-full">
        <div className="absolute top-[0px] left-[0px] bg-whitesmoke shadow-[0px_-3px_11px_1px_rgba(231,_231,_231,_0.59)] w-[1512px] h-[400px]" />
        <div className="absolute top-[0px] left-[756px] bg-beige w-[756px] h-[400px]" />
        <div className="absolute top-[82px] left-[82px] w-[205px] h-[184px] text-center text-[37px] text-text-black-color font-roboto-flex">
          <div className="absolute top-[0px] left-[0px] w-[142px] h-[100px]">
            <div className="absolute top-[0px] left-[0px] leading-[150%] inline-block w-[134.11px] h-[63px]">
              <img src={Logo} alt="" />
            </div>
          </div>
          <div className="absolute top-[130px] left-[0px] text-[18px] leading-[150%] font-open-sans text-grey-color text-left">
            <p className="m-0">Copyright © StayFIT LLC.</p>
            <p className="m-0">All rights reserved.</p>
          </div>
        </div>
        <div className="absolute top-[92px] left-[380px] w-[240px] h-[164px]">
          <img
            className="absolute top-[0px] left-[0px] rounded-xl w-[252px] h-[164px] object-cover"
            alt=""
            src={Footer_img}
          />
        </div>
        <div className="absolute top-[82px] left-[899px] w-[104px] h-[104px]">
          <div className="absolute top-[0px] left-[0px] leading-[150%]">
            Home
          </div>
          <Link to="/WhoWeAre">
            <div
              className="absolute top-[74px] left-[0px] leading-[150%] cursor-pointer"
              // onClick={onWhoWeAre1Click}
            >
              Who we are
            </div>
          </Link>
        </div>
        <div className="absolute top-[82px] left-[1071px] w-[106px] h-[178px]">
          <Link to="/FAQ">
            <div
              className="absolute top-[148px] left-[0px] leading-[150%] cursor-pointer"
              // onClick={onFAQsTextClick}
            >
              FAQs
            </div>
          </Link>
          <Link to="/MyAccount">
            <div className="absolute top-[74px] left-[0px] leading-[150%]">
              My Account
            </div>
          </Link>

          <Link to="/Store">
            <div
              className="absolute top-[0px] left-[0px] leading-[150%] cursor-pointer"
              // onClick={onStoreText1Click}
            >
              Store
            </div>
          </Link>
        </div>
        <div className="absolute top-[82px] left-[1245px] w-[120px] h-[178px]">
          <Link to="/TermsOfUse">
            <div
              className="absolute top-[0px] left-[0px] leading-[150%] cursor-pointer"
              // onClick={onTermsOfUse1Click}
            >
              Terms of use
            </div>
          </Link>

          <Link to="/PrivacyPolicy">
            <div
              className="absolute top-[74px] left-[0px] leading-[150%] cursor-pointer"
              // onClick={onPrivacyPolicyTextClick}
            >
              Privacy Policy
            </div>
          </Link>
          <Link to="/ContactUs">
            <div
              className="absolute top-[148px] left-[5px] leading-[150%] cursor-pointer"
              // onClick={onContactUsText1Click}
            >
              Contact us
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Footer;
