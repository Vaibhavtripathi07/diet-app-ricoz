import { useState } from "react";
import search from "../../asset/search.png";
import unsaved from "../../asset/unsaved.png";
// import Chicken_tikka from "../../asset/Chicken_tikka.png";
import rating from "../../asset/rating.png";
import ratings_full from "../../asset/ratings_full.png";
import RecipeData from "./RecipeData.json"
// import nutty from "../../asset/nutty.png";
// import oats from "../../asset/oats.png";
// import Pesto_Pasta from "../../asset/Pesto_Pasta.png";
// import omlette_roll from "../../asset/omlette_roll.png";
// import Avacado_toast from "../../asset/Avacado_toast.png";
import saved from "../../asset/saved.png";
import grocery_icon from "../../asset/grocery_icon.png";
import Footer from "../Footer/Footer";
import Nav from "../Top_Nav/Nav";
import { Link } from "react-router-dom";

const Recipes = () => {
  // const [filter, setFilter] = useState('');

  // const handleFilterChange = (event) => {
  //   setFilter(event.target.value);
  // };

  //   const filteredRecipes = yourRecipesArray.filter((recipe) =>
  //   recipe.Course_Name.toLowerCase().includes(filter.toLowerCase())
  // );
  return (
    <div className="relative bg-whitesmoke w-[1512px] cursor-pointer h-full overflow-hidden text-left leading-[37.49px] font-semibold  font-sans xl:w-full">
      {/* navbar   */}
      {/* <Nav /> */}
      {/* navbar   */}
      {/* main concent */}
      <h1
        className="m-0 absolute top-[208px] left-[calc(50%_-_165px)] text-[48px] tracking-[0.53em] leading-[133%] font-semibold  text-stroke-green-color font-sans border-green"
        id="Recipes"
      >
        Recipes
      </h1>
      {/* input */}
      {/* <h1 className="text-center text-29xl text-dark-green-color font-semibold leading-[133%] tracking-[0.53em]">
        Recipes
      </h1>
      <section className="flex items-center justify-center">
        <input
          type="text"
          className="bg-whitesmoke outline-none  pl-28 font-medium text-2xl rounded-[10px] w-[978px] h-20 border-[1px] border-solid border-stroke-green-color placeholder:text-gray-500 placeholder:text-[18px] placeholder:h-6 placeholder:w-[127px] placeholder:italic "
          placeholder="Select Recipes"
        />
        <img className="-mt-4 object-cover " alt="searchhh" id="search" src={search}  />
      </section> */}

      <div className="absolute top-[356px] left-[calc(50%_-_488px)] w-[976px] h-[78px]">
        <input
          className="bg-whitesmoke outline-none pl-28 font-medium text-2xl rounded-[10px] absolute top-[-1px] left-[calc(50%_-_489px)] rounded-3xs box-border w-[978px] h-20 border-[1px] border-solid border-stroke-green-color placeholder:text-gray-500 placeholder:text-[18px] placeholder:h-6 placeholder:w-[127px] placeholder:italic  "
          name="text"
          placeholder="Select Recipes"
          type="text"
          // value={filter}
          // onChange={handleFilterChange}
        />
        <div className="absolute top-[-1px] left-[-1px] rounded-[10px] bg-whitesmoke box-border w-[88px] h-20 border-[1px] border-solid border-stroke-green-color" />
        <img
          className="absolute h-[42.31%] w-[3.38%] top-[28.85%] rounded-[10px] right-[93.9%] bottom-[28.85%] left-[2.72%] max-w-full overflow-hidden max-h-full object-cover"
          alt="searchhh"
          id="search"
          src={search}
        />
      </div>
      <img
        className="absolute top-[378.5px] left-[1420.5px] w-[33px] h-[33px]"
        alt=""
        src={saved}
      />
      <img
        className="absolute h-[1.05%] w-[1.98%] top-[11.71%] right-[9.13%] bottom-[87.24%] left-[88.89%] max-w-full overflow-hidden max-h-full"
        alt=""
        src={grocery_icon}
      />

<section className="">
      {/* popular recipes section */}
      <h1 className="text-center font-sans mt-[554px] text-black text-[46px] font-semibold leading-[156.227%]">
        Popular Recipes
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {RecipeData.popular.map((popular, index) => (
          <Link to="/Recipes2">
            {" "}
            <section
              className="w-[400px] h-[440px] mx-auto border mt-[100px]  shadow-[6px_6px_21px_rgba(0,_0,_0,_0.15)] border-solid rounded-xl border-[#FEB1B1]"
              key={index}
            >
              <img
                src={popular.Img}
                alt=""
                className="w-[422px] h-[242px] rounded-t-xl rounded-b-3xl object-cover"
              />
              <section className="flex  items-center justify-between ml-[30px]  mr-6 mt-6 ">
                <p className="leading-[120.227%] tracking-[0.6px] text-lg md:text-xl lg:text-5xl">
                  {popular.name}
                </p>
                <img src={unsaved} alt="" />
              </section>
              <p className="border-2 border-solid text-lg md:text-xl lg:text-5xl border-red-color mt-6 ml-6 h-[50px] text-center py-2 w-[148px] rounded-[4px] text-red-color">
                {popular.calorie}
              </p>
              <img
                src={rating}
                alt=""
                className="w-[132px] h-[24px] mt-[18px] ml-6"
              />
            </section>
          </Link>
        ))}
      </section>

      {/* popular recipes section */}

      {/* Loved recipes section */}
      <h1 className="text-center font-sans mt-[200px] text-black text-[46px] font-semibold leading-[156.227%]">
        Most Loved Recipes
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {RecipeData.Loved.map((Loved, index) => (
          <Link to="/Recipes2">
            {" "}
            <section
              className="w-[400px] mt-[100px] h-[440px] border mx-auto shadow-[6px_6px_21px_rgba(0,_0,_0,_0.15)] border-solid rounded-xl border-[#FEB1B1]"
              key={index}
            >
              <img
                src={Loved.Img}
                alt=""
                className="w-[422px] h-[242px] rounded-t-xl rounded-b-3xl object-cover"
              />
              <section className="flex  items-center justify-between ml-[30px]  mr-6 mt-6 ">
                <p className="leading-[120.227%]  tracking-[0.6px] text-lg md:text-xl lg:text-5xl">
                  {Loved.name}
                </p>
                <img src={unsaved} alt="" />
              </section>
              <p className="border-2 border-solid text-lg md:text-xl lg:text-5xl border-red-color h-[50px] mt-6 ml-6 text-center py-2 w-[148px] rounded-[4px] text-red-color">
                {Loved.calorie}
              </p>
              <img
                src={rating}
                alt=""
                className="w-[132px] h-[24px] mt-[18px] ml-6"
              />
            </section>
          </Link>
        ))}
      </section>
      </section>
    </div>
  );
};

export default Recipes;


// import { useState } from "react";
// import search from "../../asset/search.png";
// import unsaved from "../../asset/unsaved.png";
// // import Chicken_tikka from "../../asset/Chicken_tikka.png";
// import rating from "../../asset/rating.png";
// import ratings_full from "../../asset/ratings_full.png";
// import RecipeData from "./RecipeData.json"
// // import nutty from "../../asset/nutty.png";
// // import oats from "../../asset/oats.png";
// // import Pesto_Pasta from "../../asset/Pesto_Pasta.png";
// // import omlette_roll from "../../asset/omlette_roll.png";
// // import Avacado_toast from "../../asset/Avacado_toast.png";
// import saved from "../../asset/saved.png";
// import grocery_icon from "../../asset/grocery_icon.png";
// import Footer from "../Footer/Footer";
// import Nav from "../Top_Nav/Nav";
// import { Link } from "react-router-dom";

// const Recipes = () => {
//   // const [filter, setFilter] = useState('');

//   // const handleFilterChange = (event) => {
//   //   setFilter(event.target.value);
//   // };

//   //   const filteredRecipes = yourRecipesArray.filter((recipe) =>
//   //   recipe.Course_Name.toLowerCase().includes(filter.toLowerCase())
//   // );
//   return (
//     <div className="relative bg-whitesmoke w-full sm:w-[90%] md:w-[80%] lg:w-[70%] 2xl:w-[50%] mx-auto cursor-pointer overflow-hidden text-left leading-[37.49px] font-semibold font-sans xl:w-full">
//       {/* navbar   */}
//       {/* <Nav /> */}
//       {/* navbar   */}
//       {/* main concent */}
//       <h1
//         className="m-0 absolute top-[208px] left-[calc(50%_-_165px)] text-[48px] tracking-[0.53em] leading-[133%] font-semibold  text-stroke-green-color font-sans border-green"
//         id="Recipes"
//       >
//         Recipes
//       </h1>
//       {/* input */}
//       {/* <h1 className="text-center text-29xl text-dark-green-color font-semibold leading-[133%] tracking-[0.53em]">
//         Recipes
//       </h1>
//       <section className="flex items-center justify-center">
//         <input
//           type="text"
//           className="bg-whitesmoke outline-none  pl-28 font-medium text-2xl rounded-[10px] w-[978px] h-20 border-[1px] border-solid border-stroke-green-color placeholder:text-gray-500 placeholder:text-[18px] placeholder:h-6 placeholder:w-[127px] placeholder:italic "
//           placeholder="Select Recipes"
//         />
//         <img className="-mt-4 object-cover " alt="searchhh" id="search" src={search}  />
//       </section> */}

//       <div className="absolute top-[356px] left-1/2 transform -translate-x-1/2 w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%]">
//       <input
//       className="bg-whitesmoke outline-none pl-28 font-medium text-2xl rounded-[10px] absolute top-[-1px] left-0 rounded-3xs box-border w-full h-20 border-[1px] border-solid border-stroke-green-color placeholder:text-gray-500 placeholder:text-[18px] placeholder:h-6 placeholder:w-[127px] placeholder:italic"
//       name="text"
//       placeholder="Select Recipes"
//       type="text"
//     />
//     <div className="absolute top-[-1px] left-0 rounded-[10px] bg-whitesmoke box-border w-[88px] h-20 border-[1px] border-solid border-stroke-green-color" />
//     <img
//       className="absolute h-[42.31%] w-[3.38%] top-[28.85%] rounded-[10px] right-[93.9%] bottom-[28.85%] left-[2.72%] max-w-full overflow-hidden max-h-full object-cover"
//       alt="searchhh"
//       id="search"
//       src={search}
//     />
//   </div>

//       <img
//         className="absolute top-[378.5px] left-[1420.5px] w-[33px] h-[33px]"
//         alt=""
//         src={saved}
//       />
//       <img
//         className="absolute h-[1.05%] w-[1.98%] top-[11.71%] right-[9.13%] bottom-[87.24%] left-[88.89%] max-w-full overflow-hidden max-h-full"
//         alt=""
//         src={grocery_icon}
//       />

//       {/* popular recipes section */}
//       <h1 className="text-center font-sans mt-[554px] sm:mt-[400px] lg:mt-[554px] text-black text-[46px] font-semibold leading-[156.227%]">
//     Popular Recipes
//   </h1>
//       <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {RecipeData.popular.map((popular, index) => (
//           <Link to="/Recipes2">
//             {" "}
//             <section
//               className="w-[400px] h-[440px] mx-auto border mt-[100px] shadow-[6px_6px_21px_rgba(0,_0,_0,_0.15)] border-solid rounded-xl border-[#FEB1B1] col-span-1"
//               key={index}
//             >
//               <img
//                 src={popular.Img}
//                 alt=""
//                 className="w-[422px] h-[242px] rounded-t-xl rounded-b-3xl object-cover"
//               />
//               <section className="flex  items-center justify-between ml-[30px]  mr-6 mt-6 ">
//                 <p className="leading-[120.227%] tracking-[0.6px] text-lg md:text-xl lg:text-5xl">
//                   {popular.name}
//                 </p>
//                 <img src={unsaved} alt="" />
//               </section>
//               <p className="border-2 border-solid text-lg md:text-xl lg:text-5xl border-red-color mt-6 ml-6 h-[50px] text-center pt-[2px] w-[148px] rounded-[4px] text-red-color">
//                 {popular.calorie}
//               </p>
//               <img
//                 src={rating}
//                 alt=""
//                 className="w-[132px] h-[24px] mt-[18px] ml-6"
//               />
//             </section>
//           </Link>
//         ))}
//       </section>

//       {/* popular recipes section */}

//       {/* Loved recipes section */}
//       <h1 className="text-center font-sans mt-[200px] sm:mt-[100px] lg:mt-[200px] text-black text-[46px] font-semibold leading-[156.227%]">
//     Most Loved Recipes
//   </h1>
//       <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[150px] ">
//         {RecipeData.Loved.map((Loved, index) => (
//           <Link to="/Recipes2">
//             {" "}
//             <section
//               className="w-[400px] mt-[100px] h-[440px] border mx-auto shadow-[6px_6px_21px_rgba(0,_0,_0,_0.15)] border-solid rounded-xl border-[#FEB1B1]"
//               key={index}
//             >
//               <img
//                 src={Loved.Img}
//                 alt=""
//                 className="w-[422px] h-[242px] rounded-t-xl rounded-b-3xl object-cover"
//               />
//               <section className="flex  items-center justify-between ml-[30px]  mr-6 mt-6 ">
//                 <p className="leading-[120.227%]  tracking-[0.6px] text-lg md:text-xl lg:text-5xl">
//                   {Loved.name}
//                 </p>
//                 <img src={unsaved} alt="" />
//               </section>
//               <p className="border-2 border-solid text-lg md:text-xl lg:text-5xl border-red-color h-[50px] mt-6 ml-6 text-center pt-[2px] w-[148px] rounded-[4px] text-red-color">
//                 {Loved.calorie}
//               </p>
//               <img
//                 src={rating}
//                 alt=""
//                 className="w-[132px] h-[24px] mt-[18px] ml-6"
//               />
//             </section>
//           </Link>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default Recipes;
