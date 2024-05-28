import { useCallback } from "react";
import Nav from "../Top_Nav/Nav";
import Footer from "../Footer/Footer";
import Liked from "../../asset/Liked.png";
import Search from "../../asset/Search.png";
import Bag from "../../asset/Bag.png";
import Dumbell from "../../asset/Dumbell.png";
import Penut_butter from "../../asset/Penut_butter.png";
import Bag_red_outer from "../../asset/Bag_red_outer.png";
import img_1 from "../../asset/img_1.png";

const MyFavourite = () => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "LANDING" to the project
  }, []);

  const onGroupContainer4Click = useCallback(() => {
    // Please sync "Prodct overView" to the project
  }, []);

  const onGroupContainer5Click = useCallback(() => {
    // Please sync "Prodct overView" to the project
  }, []);

  const onGroupContainer8Click = useCallback(() => {
    // Please sync "Prodct overView" to the project
  }, []);

  const onWhoWeAre1Click = useCallback(() => {
    // Please sync "ABOUT US" to the project
  }, []);

  const onFAQsTextClick = useCallback(() => {
    // Please sync "FAQs" to the project
  }, []);

  const onStoreText1Click = useCallback(() => {
    // Please sync "STORE" to the project
  }, []);

  const onTermsOfUseClick = useCallback(() => {
    // Please sync "terms of services" to the project
  }, []);

  const onPrivacyPolicyTextClick = useCallback(() => {
    // Please sync "PRIVACY POLICY" to the project
  }, []);

  const onContactUsTextClick = useCallback(() => {
    // Please sync "CONTACTUS" to the project
  }, []);

  return (
    <div className="relative bg-whitesmoke w-full h-[1739px] overflow-hidden text-left text-5xl text-gray font-sans">
      <h1
        className="m-0 absolute top-[208px] left-[calc(50%_-_263px)] text-[48px] tracking-[0.53em] leading-[133%] font-semibold font-sans text-stroke-green-color"
        id="my_favourites"
      >
        My Favorites
      </h1>
      <header
        className="absolute top-[0px] left-[0px] shadow-[0px_2px_8px_rgba(0,_0,_0,_0.07)] w-[1512px] h-32 text-left text-5xl text-dark-green-color font-open-sans"
        id="top_nav"
      >
        <Nav />
      </header>
      <section>
      <div className="absolute top-[356px] left-[calc(50%_-_488px)] w-[976px] h-[78px]">
        <input
          className="placeholder:italic placeholder:pl-[100px] placeholder:text-lg bg-whitesmoke absolute top-[-1px] left-[calc(50%_-_489px)] rounded-3xs box-border w-[978px] h-20 border-[1px] border-solid outline-none border-stroke-green-color"
          name="Search_products"
          placeholder="Search Products"
          type="text"
        />
        <section
          className="absolute top-[-1px] left-[-1px] rounded-3xs bg-whitesmoke box-border w-[88px] h-20 border-[1px] border-solid border-stroke-green-color"
          id="outer_search"
        />
      </div>
      <img
        className="absolute h-[1.7%] w-[2.08%] top-[21.87%] right-[9.74%] bottom-[76.44%] left-[88.18%] max-w-full overflow-hidden max-h-full object-cover"
        alt="liked"
        src={Liked}
      />
      <div className="absolute h-[2.47%] w-[2.65%] top-[21.51%] right-[3.97%] bottom-[76.02%] left-[93.39%] text-xl text-white">
        <img
          className="absolute h-[76.74%] w-[82.5%] top-[26.74%] right-[21.25%] bottom-[-3.49%] left-[-3.75%] max-w-full overflow-hidden max-h-full object-cover"
          alt="add_to_cart"
          src={Bag}
        />
        <img
          className="absolute top-[3px] left-[20px] rounded-[50%] w-5 h-5 object-cover"
          alt="add_to_cart_red_color"
          src={Bag_red_outer}
        />
        <p
          className="m-0 absolute top-[0px] left-[26px] leading-[120%] font-semibold"
          id="product_number_in_cart"
        >
          1
        </p>
      </div>
      <img
        className="absolute h-[1.9%] w-[2.18%] top-[21.77%] right-[78.34%] bottom-[76.34%] left-[19.48%] max-w-full overflow-hidden max-h-full object-cover"
        alt="Search"
        src={Search}
      />
      </section>
      <section
        className="absolute top-[534px] left-[100px] w-[400px] h-[545px]"
        id="section_1"
      >
        <div
          className="absolute top-[0px] left-[0px] w-[400px] h-[545px] cursor-pointer"
          onClick={onGroupContainer4Click}
        >
          <div className="absolute top-[0px] left-[0px] rounded-md bg-whitesmoke shadow-[0px_0px_10px_rgba(0,_0,_0,_0.1)] w-[400px] h-[545px]" />
          <img
            className="absolute top-[0px] left-[0px] rounded-md w-[400px] h-[382px] object-cover"
            alt="Muscle_blaze-Snack-bars"
            src={img_1}
          />
        </div>
        <section
          className="absolute top-[406px] left-[calc(50%_-_182px)] w-[364px] h-[88px] text-left text-5xl text-gray font-sans"
          id="products_details_1"
        >
          <p
            className="m-0 absolute top-[0px] left-[calc(50%_-_182px)] leading-[156.23%]"
            id="muscleblaze"
          >
            Muscle Blaze - Snack Bars
          </p>
          <div className="absolute top-[51px] left-[calc(50%_-_182px)] leading-[156.23%] font-semibold">
            Rs. 399.00
          </div>
          <img
            className="absolute h-[33.52%] w-[8.65%] top-[4.83%] right-[-0.21%] bottom-[61.65%] left-[91.55%] max-w-full overflow-hidden max-h-full"
            alt=""
            src={Liked}
          />
        </section>
      </section>
      <section className="absolute top-[534px] left-[556px] w-[400px] h-[545px]">
        <div
          className="absolute top-[0px] left-[0px] w-[400px] h-[545px] cursor-pointer"
          onClick={onGroupContainer5Click}
        >
          <div className="absolute top-[0px] left-[0px] rounded-md bg-whitesmoke shadow-[0px_0px_10px_rgba(0,_0,_0,_0.1)] w-[400px] h-[545px]" />
          <img
            className="absolute top-[0px] left-[0px] rounded-md w-[400px] h-[382px] object-cover"
            alt=""
            src={Dumbell}
          />
        </div>
        <div className="absolute top-[406px] left-[calc(50%_-_182px)] w-[364px] h-[125px]">
          <div className="absolute top-[0px] left-[calc(50%_-_182px)] leading-[156.23%]">
            <p className="m-0">Leeway - Dumbbells</p>
            <p className="m-0">10 kgs each</p>
          </div>
          <div className="absolute top-[88px] left-[calc(50%_-_182px)] leading-[156.23%] font-semibold">
            Rs. 2,349.00
          </div>
          <div className="absolute text-red-700 top-[90px] left-[calc(50%_-_34px)] text-[22px] [text-decoration:line-through] leading-[156.23%] text-red">
            3,799.00
          </div>
          <img
            className="absolute h-[23.6%] w-[8.65%] top-[3.4%] right-[-0.21%] bottom-[73%] left-[91.55%] max-w-full overflow-hidden max-h-full"
            alt=""
            src={Liked}
          />
        </div>
      </section>
      <section className="absolute top-[534px] left-[1012px] w-[400px] h-[545px]">
        <div
          className="absolute top-[0px] left-[0px] w-[400px] h-[545px] cursor-pointer"
          onClick={onGroupContainer8Click}
        >
          <div className="absolute top-[0px] left-[0px] rounded-md bg-whitesmoke shadow-[0px_0px_10px_rgba(0,_0,_0,_0.1)] w-[400px] h-[545px]" />
          <img
            className="absolute top-[0px] left-[0px] w-[400px] h-[382px] object-cover"
            alt=""
            src={Penut_butter}
          />
        </div>
        <div className="absolute top-[406px] left-[calc(50%_-_182px)] w-[364px] h-[125px]">
          <div className="absolute top-[0px] left-[calc(50%_-_182px)] leading-[156.23%]">
            <p className="m-0">Chocolate Peanut Butter</p>
            <p className="m-0">1 kg</p>
          </div>
          <div className="absolute top-[88px] left-[calc(50%_-_182px)] leading-[156.23%] font-semibold">
            Rs. 799.00
          </div>
          <img
            className="absolute h-[23.6%] w-[8.65%] top-[3.4%] right-[-0.21%] bottom-[73%] left-[91.55%] max-w-full overflow-hidden max-h-full"
            alt=""
            src={Liked}
          />
        </div>
      <footer className="absolute z-9999 top-[1339px] left-[0px] w-[1512px] h-[400px] text-left text-xl text-dark-green-color font-sans">
        <Footer />
      </footer>
      </section>
    </div>
  );
};

export default MyFavourite;
