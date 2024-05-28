import { useState, useCallback } from "react";
import Search from "../../asset/search.png";
import Bag from "../../asset/Bag.png";
import Liked from "../../asset/Liked.png";
import star from "../../asset/star.png";
import rating from "../../asset/rating.png";
import ratings_full from "../../asset/ratings_full.png";
import img_3 from "../../asset/img_3.png";
import rating_4 from "../../asset/rating_4.png";
import upward_arrow from "../../asset/upward_arrow.png";
import sam from "../../asset/sam.png"
import Cindy from "../../asset/Cindy.png"
import blue_inverted from "../../asset/blue_inverted.png"
import Next_arrow from "../../asset/Next_arrow.png"
import Footer from "../Footer/Footer"
import Nav from "../Top_Nav/Nav"
import { Link } from "react-router-dom";




const Product_Overview = () => {

  return (
    <div className="relative bg-whitesmoke w-[1512px] h-[188.25rem] overflow-hidden text-left text-[2.5rem] text-black-color font-sans xl:w-full">
<Nav/>

      <h1
        className="m-0 absolute top-[13.38rem] left-[calc(50%_-_113px)] text-[3rem] tracking-[0.53em] leading-[133%] font-semibold font-inherit text-stroke-green-color inline-block w-[14.13rem]"
        id="store"
      >
        Store
      </h1>
      <div className="absolute top-[22.63rem] left-[calc(50%_-_488px)] w-[61rem] h-[4.88rem] text-[1.13rem] text-gray font-body-main">
      <input
          className="placeholder:italic text-black text-5xl placeholder:font-sans rounded-xl outline-none pl-[100px] placeholder:text-lg bg-whitesmoke absolute top-[-1px] left-[calc(50%_-_489px)] rounded-3xs box-border w-[978px] h-20 border-[1px] border-solid border-stroke-green-color"
          name="Product_name"
          placeholder="Search Products"
          type="text"
        />

        <div className="absolute top-[-0.06rem] left-[-0.06rem] rounded-e-lg bg-whitesmoke box-border w-[5.5rem] h-[5rem] border-[1px] border-solid border-stroke-green-color" />
        <div className="absolute h-[38.46%] w-[3.07%] top-[30.77%] right-[94.06%] bottom-[30.77%] left-[2.87%] flex items-center justify-center">
          <img
            className="h-full w-full max-w-full overflow-hidden max-h-full object-contain absolute left-[0rem] top-[0rem] [transform:scale(1.1)]"
            alt="search"
            src={Search}
          />
        </div>
      </div>
     
      <img
        className="absolute h-[0.93%] w-[1.95%] top-[12.85%] right-[9.77%] bottom-[86.22%] left-[88.28%] max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
        alt="liked"
        src={Liked}
        // onClick={onVectorIcon2Click}
      />
      <img
        className="absolute h-[1%] w-[1.95%] top-[12.82%] right-[4.69%] bottom-[86.19%] left-[93.36%] max-w-full overflow-hidden max-h-full object-cover"
        alt="bag"
        src={Bag}
      />
      <div className="absolute top-[33.75rem] left-[8.25rem] rounded-xl w-[31.63rem] h-[37rem] flex items-center justify-center">
        <img
          className="w-full h-full object-contain absolute left-[0rem] top-[0rem] [transform:scale(1.04)]"
          alt="Product-IMG"
          src={img_3}
        />
      </div>
      <p
        className="m-0 absolute top-[33.75rem] left-[calc(50%_-_44px)] leading-[156.23%] inline-block w-[36rem]"
        id="product_name"
      >
        <span className="block">{`Muscle Blaze - Snack Bars with `}</span>
        <span className="block">{`Rice Crispy, rolled Oats & Dry fruits, Pack of 6 (180 g)`}</span>
      </p>
      <p
        className="m-0 absolute top-[51.88rem] left-[calc(50%_-_44px)] leading-[156.23%] font-semibold"
        id="PRICE"
      >
        Rs. 399.00
      </p>
      <p
        className="m-0 absolute top-[58.25rem] left-[calc(50%_-_44px)] leading-[156.23%] font-semibold"
        id="QUANTITY"
      >
        Quantity
      </p>
      <img
        className="absolute h-[0.93%] w-[1.95%] top-[17.93%] right-[4.69%] bottom-[81.14%] left-[93.36%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={rating}
      />
      <img
        className="absolute top-[47.88rem] left-[45.25rem] w-[8.25rem] h-[1.5rem] object-cover"
        alt="RATING_HALF"
        src={rating_4}
      />
      <div className="absolute top-[64rem] left-[45.25rem] w-[9.13rem] h-[6.75rem] text-black bg-[#7087FB] rounded-[20px]">
        <button
          className="cursor-pointer [border:none] p-0 bg-royalblue absolute top-[0rem] left-[0rem] rounded-xl w-[9.13rem] h-[6.75rem]"
          id="180G"
        />
        <button className="absolute top-[1.44rem] left-[calc(50%_-_51px)] leading-[156.23%] font-semibold">
          180 g
        </button>
      </div>
      <div className="absolute top-[64rem] left-[56.25rem] w-[9.13rem] h-[6.75rem]">
        <button
          className="cursor-pointer p-0 bg-[transparent] absolute top-[0rem] left-[0rem] rounded-xl border w-[9.13rem] h-[6.75rem]  border-solid border-[#7087FB]"
          id="240G"
        />
        <button className="absolute top-[1.44rem] left-[calc(50%_-_51px)] leading-[156.23%] font-semibold">
          240 g
        </button>
      </div>
      <div className="absolute top-[91.06rem] left-[8.25rem] w-[83.25rem] h-[8rem]">
        <section
          className="absolute top-[0rem] left-[0rem] rounded-xl bg-whitesmoke shadow-[0px_0px_8px_rgba(0,_0,_0,_0.15)] w-[83.25rem] h-[8rem]"
          id="ACCORDION"
        />
        <p
          className="m-0 absolute top-[2.06rem] left-[calc(50%_-_636px)] leading-[156.23%] font-semibold"
          id="PRODUCT_DETAILS"
        >
          Product Details
        </p>
        <img
          className="absolute top-[3.25rem] left-[78.38rem] w-[2.38rem] h-[1.5rem] object-cover"
          alt="ARROW"
          src={upward_arrow}
        />
      </div>
      <section
        className="absolute top-[106.56rem] left-[calc(50%_-_111px)] w-[13.88rem] h-[4.5rem] text-left text-[2.88rem] text-text-black-color font-sans"
        id="REV_SEC"
      >
        <p
          className="m-0 absolute top-[0rem] left-[calc(50%_-_111px)] leading-[156.23%] font-semibold"
          id="REVIEWS"
        >
          Reviews
        </p>
        <img
          className="absolute h-[33.33%] w-[10.81%] top-[33.33%] right-[0%] bottom-[33.33%] left-[89.19%] max-w-full overflow-hidden max-h-full object-cover"
          alt="STAR"
          src={star}
        />
      </section>
      <section
        className="absolute top-[117.31rem] left-[5.13rem] w-[85.75rem] h-[29.13rem] text-left text-[1.75rem] text-text-black-color font-sans"
        id="rev_sec_content"
      >
        <section
          className="absolute top-[0rem] left-[0rem] w-[33.5rem] h-[25.75rem] text-left text-[1.75rem] text-text-black-color font-sans"
          id="rev_1"
        >
          <div className="absolute top-[4.06rem] left-[4rem] rounded-17xl bg-whitesmoke box-border w-[29.56rem] h-[21.75rem] border-[1px] border-solid border-grey-color" />
          <div className="absolute top-[0rem] left-[0rem] rounded-54xl w-[14.5rem] h-[12.31rem] flex items-center justify-center">
            <img
              className="w-full h-full object-contain absolute left-[0.81rem] top-[0.69rem] [transform:scale(1.112)]"
              alt="sam"
              src={sam}
            />
          </div>
          <div className="absolute top-[6.25rem] left-[18rem] leading-[133%] font-semibold">
            Sam Smith
          </div>
          <div className="absolute top-[16rem] left-[7.31rem] text-[1.25rem] tracking-[0.01em] leading-[120%] whitespace-pre-wrap inline-block w-[22.25rem]">
            I've been on the Classic Plan for a month now, and it has made
            healthy eating so effortless!
          </div>
          <img
            className="absolute top-[14.88rem] left-[5.06rem] w-[1.5rem] h-[1.5rem] object-cover"
            alt="blue"
            src={blue_inverted}
          />
          <img
            className="absolute top-[10.06rem] left-[18rem] w-[5.38rem] h-[0.88rem] object-cover"
            alt="full_rev"
            src={ratings_full}
          />
        </section>
        <div className="absolute top-[0rem] left-[47.25rem] w-[33.5rem] h-[25.75rem]">
          <div className="absolute top-[4.06rem] left-[4rem] rounded-17xl bg-whitesmoke box-border w-[29.56rem] h-[21.75rem] border-[1px] border-solid border-grey-color" />
          <div className="absolute top-[0rem] left-[0rem] rounded-54xl w-[14.5rem] h-[12.31rem] flex items-center justify-center">
            <img
              className="w-full h-full object-contain absolute left-[0.81rem] top-[0.69rem] [transform:scale(1.112)]"
              alt="cindy"
              src={Cindy}
            />
          </div>
          <div className="absolute top-[6.25rem] left-[18rem] leading-[133%] font-semibold">
            Cindy Hart
          </div>
          <p
            className="m-0 absolute top-[16rem] left-[7.31rem] text-[1.25rem] tracking-[0.01em] leading-[120%] inline-block w-[24.19rem]"
            id="cindy"
          >
            The Classic meal plans provided by StayFIT have made healthy eating
            easy and enjoyable for me. Thank you!
          </p>
          <img
            className="absolute top-[14.88rem] left-[5.06rem] w-[1.5rem] h-[1.5rem] object-cover"
            alt=""
            src={blue_inverted}
          />
          <img
            className="absolute top-[10.06rem] left-[18rem] w-[5.38rem] h-[0.88rem] object-cover"
            alt="partial_star"
            src={rating_4}
          />
        </div>
        <div className="absolute top-[28.63rem] left-[40.56rem] w-[4.63rem] h-[0.5rem]">
          <div className="absolute top-[0rem] left-[0rem] rounded-10xl bg-lightgreen w-[1.63rem] h-[0.5rem]" />
          <div className="absolute top-[0rem] left-[2.13rem] rounded-10xl bg-honeydew w-[0.5rem] h-[0.5rem]" />
          <div className="absolute top-[0rem] left-[3.13rem] rounded-10xl bg-honeydew w-[0.5rem] h-[0.5rem]" />
          <div className="absolute top-[0rem] left-[4.13rem] rounded-10xl bg-honeydew w-[0.5rem] h-[0.5rem]" />
        </div>
        {/* <img
          className="absolute top-[13.63rem] left-[81.75rem] w-[4rem] h-[4rem] object-cover"
          alt=""
          src={Next_arrow}
        /> */}
      </section>
      <div className="absolute top-[78.25rem] left-[calc(50%_-_139px)] rounded-2xl [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))] overflow-hidden flex flex-row items-center justify-center py-[1.75rem] px-[4.56rem] text-[1.5rem] text-dark-green-color border-[1px] border-solid border-dark-green-color">
 <Link to="/Payment"><div className="relative leading-[120%] font-semibold">Add to Cart</div></Link>
      </div>
      <img
        className="absolute top-[46.63rem] left-[44.25rem] max-h-full w-[46.75rem] object-cover"
        alt=""
        src="/vector-196@2x.png"
      />
      <img
        className="absolute top-[50.63rem] left-[44.25rem] max-h-full w-[46.75rem] object-cover"
        alt=""
        src="/vector-197@2x.png"
      />
      <img
        className="absolute top-[57rem] left-[44.25rem] max-h-full w-[46.75rem] object-cover"
        alt=""
        src="/vector-198@2x.png"
      />
     
        
          <Footer/>
          
            
           
           
        
          
     
      
        
       
    
      
    </div>
  );
};

export default Product_Overview;



// const Product_Overview = () => {
//   return (
//     <div className="relative bg-whitesmoke w-[1536px] h-[3012px] overflow-hidden text-left text-[2.5rem] text-text-black-color font-sans xl:w-full">
//       {/* Nav */}
//       <Nav/>
//       {/* Nav */}
     
//       {/* Footer */}
//       {/* <Footer/> */}
//       {/* Footer */}
      
//     </div>
//   )
// }

// export default Product_Overview
