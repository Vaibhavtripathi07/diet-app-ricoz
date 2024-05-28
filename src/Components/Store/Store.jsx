import { useState } from "react";
import Nav from "../Top_Nav/Nav";
import Unliked from "../../asset/Unliked.png";
import Search from "../../asset/search.png";
import Bag from "../../asset/Bag.png";
import Liked from "../../asset/Liked.png";
import star from "../../asset/star.png";
import img_3 from "../../asset/img_3.png";
import img_1 from "../../asset/img_1.png";
import StoreData from "./StoreData.json"
import img_2 from "../../asset/img_2.png";
import categoriesData from "./Categories.json";
import sort from "./Sort.json";
import { Link } from "react-router-dom";

const Store = () => {
  const [isCategoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [isSortDropdownOpen, setSortDropdownOpen] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("bg-whitesmoke");
  const [likedProducts, setLikedProducts] = useState({
    product1: false,
    product2: false,
    product3: false,
  });
  // const onVectorIconClick = useCallback(() => {
  //   // Please sync "Favs" to the project
  // }, []);

  // const onGroupContainer3Click = useCallback(() => {
  //   // Please sync "Prodct overView" to the project
  // }, []);

  const handleCategoryClick = () => {
    console.log("Category is clicked");
    setCategoryDropdownOpen(!isCategoryDropdownOpen);
    setBackgroundColor("bg-black");
  };
  const handleSortClick = () => {
    console.log("Category is clicked");
    setSortDropdownOpen(!isSortDropdownOpen);
    setBackgroundColor("bg-whitesmoke");
  };

  const handleLikeToggle = (productId) => {
    setLikedProducts((prevLikedProducts) => ({
      ...prevLikedProducts,
      [productId]: !prevLikedProducts[productId],
    }));
  };

  return (
    <div className="relative bg-whitesmoke w-[1512px] h-full  overflow-hidden text-left text-lg md:text-5xl font-sans text-gray xl:w-full">
      <Nav className="text-strokegreen-color" />
      {/* <h1 className="m-0 absolute top-[208px] left-[50%] transform -translate-x-1/2 text-3xl md:text-5xl tracking-wider font-semibold font-inherit text-stroke-green-color">
        Store
      </h1> */}
      <h1 className="text-center mt-[208px] text-29xl leading-[133%] font-sans text-strokegreen-color tracking-[25.44px]">
        Store
      </h1>
      <div className="absolute top-[356px] left-[calc(50%_-_488px)] w-[976px] h-[78px]">
        <input
          className="placeholder:italic text-black outline-none pl-[100px] rounded-[10px]  placeholder:text-lg bg-whitesmoke absolute top-[-1px] left-[calc(50%_-_489px)] rounded-3xs box-border w-[978px] h-20 border-[1px] border-solid border-stroke-green-color"
          name="Product_name"
          placeholder="Search Products"
          type="text"
        />
        <div className="absolute top-[-1px] left-[-1px] rounded-[10px] bg-whitesmoke box-border w-[88px] h-20 border-[1px] border-solid border-stroke-green-color" />
        <img
          className="absolute h-[42.31%] w-[3.38%] top-[28.85%] right-[93.9%] bottom-[28.85%] left-[2.72%] max-w-full overflow-hidden max-h-full object-cover"
          alt="search"
          src={Search}
        />
      </div>
      <img
        className="absolute h-[2.37%] w-[2.08%] top-[30.57%] right-[9.08%] bottom-[67.06%] left-[88.80%] max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
        alt="Liked"
        src={likedProducts.product ? Liked : Unliked}
        onClick={() => handleLikeToggle("product")}
        // onClick={onVectorIconClick}
      />
      <img
        className="absolute h-[2.65%] w-[2.18%] top-[30.43%] right-[3.87%] bottom-[66.92%] left-[93.95%] max-w-full overflow-hidden max-h-full object-cover"
        alt="Cart"
        src={Bag}
      />
      <button
        onClick={handleCategoryClick}
        className="m-0 absolute top-[476px] left-[calc(50%-_488px)] text-black text-11xl leading-[156.23%] font-semibold"
        id="categories"
      >
        Category
      </button>

      {/* {isCategoryDropdownOpen && (
        <div
          className="absolute top-[516px] left-[calc(50% - 488px)] text-black text-11xl leading-[156.23%] font-semibold"
          id="categories-dropdown"
        >
          <ul className="bg-white shadow-md p-2 rounded">
            {categories.map((Categories, id) => (
              <li key={id}>{Categories.img}{Categories.name}</li>
            ))}
          </ul>
        </div>
      )} */}

      {isSortDropdownOpen && (
        <ul
          className="relative text-center left-[813px] w-[468px] h-[470px]  py-10 z-20 rounded-[14px] top-[410px] font-sans font-semibold bg-whitesmoke shadow-[0px_0px_10px_rgba(0,0,0,0.1)]"
          id="categories-dropdown"
        >
          {sortData.sort.map((sort) => (
            <li key={sort.id} className="text-black">
              {sort.filter}
            </li>
          ))}
        </ul>
      )}

      <button
        onClick={handleSortClick}
        className="m-0 absolute top-[476px] left-[calc(50%_+_428px)] text-black text-11xl leading-[156.23%] font-semibold"
        id="Sort"
      >
        Sort
      </button>

      {isCategoryDropdownOpen && (
        <ul
          className="relative left-[255px] w-[550px] h-[570px] py-10 z-20 rounded-[14px] top-[410px] text-black font-sans font-semibold bg-whitesmoke shadow-[0px_0px_10px_rgba(0,0,0,0.1)]"
          id="categories-dropdown"
        >
          {categoriesData.categories.map((category) => (
            <li key={category.id}>
              <img
                src={category.Img}
                className="relative left-[44px] top-[26px] w-6 h-6 object-fit"
              />{" "}
              <span className=" relative text-black text-center top-[1px] gap-y-24 left-[100px]">
                {category.name}
              </span>
            </li>
          ))}
        </ul>
      )}

      {/* <div className="absolute top-[623px] left-[556px] w-[400px] h-[545px]">
      //   <section
      //     className="absolute top-[0px] left-[0px] rounded-md bg-whitesmoke shadow-[0px_0px_10px_rgba(0,0,0,0.1)] w-[400px] h-[545px]"
      //     id="card2"
      //   />
      //   <Link to="/ProdctOverView">
      //     <img
      //       className="absolute top-[0px] left-[0px] rounded-md w-[400px] h-[382px] object-cover"
      //       alt="img_1"
      //       src={img_1}
      //     />
      //   </Link>
      // </div>
      // <div className="absolute top-[623px] left-[1012px] w-[400px] h-[545px]">
      //   <section
      //     className="absolute top-[0px] left-[0px] rounded-md bg-whitesmoke shadow-[0px_0px_10px_rgba(0,0,0,0.1)] w-[400px] h-[545px]"
      //     id="card3"
      //   />
      //   <img
      //     className="absolute top-[0px] left-[0px] rounded-md w-[400px] h-[382px] object-cover"
      //     alt="img_2"
      //     src={img_2}
      //   />
      // </div>
      // <div className="absolute top-[623px] left-[100px] w-[400px] h-[545px]">
      //   <div
      //     className="absolute top-[0px] left-[0px] w-[400px] h-[545px] cursor-pointer"
      //     // onClick={onGroupContainer3Click}
      //   >
      //     <section
      //       className="absolute top-[0px] left-[0px] rounded-md bg-whitesmoke shadow-[0px_0px_10px_rgba(0,0,0,0.1)] w-[400px] h-[545px]"
      //       id="card_1"
      //     />
      //     <img
      //       className="absolute top-[0px] left-[0px] rounded-md w-[400px] h-[382px] object-cover"
      //       alt="img_3"
      //       src={img_3}
      //     />
      //   </div>
      //   <div className="absolute top-[406px] left-[calc(50%_-_182px)] w-[364px] h-[88px]">
      //     <Link to="/ProductOverView">
      //       <p
      //         className="m-0 absolute top-[0px] left-[calc(50%_-_182px)] text-black leading-[156.23%] cursor-pointer"
      //         id="product_name"
      //       >
      //         Muscle Blaze - Snack Bars
      //       </p>
      //     </Link>
      //     <p
      //       className="m-0 absolute text-black top-[51px] left-[calc(50%_-_182px)] leading-[156.23%] font-semibold"
      //       id="price"
      //     >
      //       Rs. 399.00
      //     </p>
      //     <img
      //       className="absolute h-[33.52%] w-[8.65%] top-[4.83%] right-[-0.21%] bottom-[61.65%] left-[91.55%] max-w-full overflow-hidden max-h-full object-cover"
      //       alt="Liked"
      //       src={likedProducts.product1 ? Liked : Unliked}
      //       onClick={() => handleLikeToggle("product1")}
      //     />
      //   </div>
      // </div>
      // <div className="absolute top-[1029px] left-[calc(50%_-_182px)] w-[364px] h-[88px]">
      //   <p
      //     className="m-0 absolute top-[0px] left-[calc(50%_-_182px)] text-black leading-[156.23%] cursor-pointer"
      //     id="product_titlt2"
      //   >
      //     Yogabar- Energy Bars
      //   </p>
      //   <p
      //     className="m-0 absolute text-black top-[51px] left-[calc(50%_-_182px)] leading-[156.23%] font-semibold"
      //     id="price"
      //   >
      //     Rs. 220.00
      //   </p>
      //   <img
      //     className="absolute h-[34.09%] w-[8.79%] top-[4.55%] right-[-0.27%] bottom-[61.36%] left-[91.48%] max-w-full overflow-hidden max-h-full object-cover"
      //     alt="Unlike"
      //     src={likedProducts.product2 ? Liked : Unliked}
      //     onClick={() => handleLikeToggle("product2")}
      //   />
      // </div>
      // <div className="absolute top-[1029px] left-[calc(50%_+_274px)] w-[364px] h-[88px]">
      //   <p
      //     className="m-0 absolute top-[0px] left-[calc(50%_-_182px)] text-black leading-[156.23%] cursor-pointer"
      //     id="product3"
      //   >
      //     Stay fit - Yoga Mat
      //   </p>
      //   <p
      //     className="m-0 absolute top-[51px]  left-[calc(50%_-_182px)] text-black leading-[156.23%] font-semibold"
      //     id="price"
      //   >
      //     Rs. 1.099.00
      //   </p>
      //   <img
      //     className="absolute h-[34.09%] w-[8.79%] top-[4.55%] right-[-0.27%] bottom-[61.36%] left-[91.48%] max-w-full overflow-hidden max-h-full object-cover"
      //     alt="Unlike"
      //     src={likedProducts.product3 ? Liked : Unliked}
      //     onClick={() => handleLikeToggle("product3")}
      //   />
      // </div>
      // <div className="absolute top-[1108px] left-[457px] w-5 h-[37px] text-xs">
      //   <img
      //     className="absolute top-[-0.08px] left-[0px] w-5 h-[20.08px] object-cover"
      //     alt="star"
      //     src={star}
      //   />
      //   <p
      //     className="m-0 absolute top-[22px] left-[1px] leading-[156.23%] inline-block w-[18px] h-[15px]"
      //     id="rate"
      //   >
      //     5.0
      //   </p>
      // </div>
      // <div className="absolute top-[1108px] left-[913px] w-5 h-[37px] text-xs">
      //   <img
      //     className="absolute top-[-0.08px] left-[0px] w-5 h-[20.08px] object-cover"
      //     alt="star"
      //     src={star}
      //   />
      //   <p
      //     className="m-0 absolute top-[22px] left-[1px] leading-[156.23%] inline-block w-[18px] h-[15px]"
      //     id="rate"
      //   >
      //     5.0
      //   </p>
      // </div>
      // <div className="absolute top-[1108px] left-[1369px] w-5 h-[37px] text-xs">
      //   <img
      //     className="absolute top-[-0.08px] left-[0px] w-5 h-[20.08px] object-cover"
      //     alt="star"
      //     src={star}
      //   />
      //   <p
      //     className="m-0 absolute top-[22px] left-[1px] leading-[156.23%] inline-block w-[18px] h-[15px]"
      //     id="rate"
      //   >
      //     5.0
      //   </p>
      // </div> */}

<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-[351px]  ">
      {StoreData.store.map((store, index) => (
        <section className="h-[545px] w-[400px] border border-black bg-whitesmoke mx-auto shadow-[0px_0px_10px_rgba(0,0,0,0.1)] rounded-md  " key={index}>
          <img
            src={store.img}
            alt=""
            className="w-[400px] h-[382px] rounded-md object-contain border border-black"
          />
          <section className="flex items-baseline justify-between mx-[18px] ">
            <p className="text-black font-sans text-5xl font-normal leading-[156.227%]  mt-6">
              {store.name}
            </p>
            <img src={Liked} alt="" className="w-[30px] h-[28px] " />
          </section>
          <section className="flex items-center justify-between ml-[18px]">
            <p className="text-black font-sans text-5xl font-semibold leading-[156.227%] ">{store.price}</p>
            <section  className="mr-[23px] mt-10">
              <img src={star} alt="" />
              <p className="text-black text-xs font-sans font-normal leading-[156.227%]">5.0</p>
            </section>
          </section>
        </section>
      ))}
      </section>
    </div>
  );
};

export default Store;
