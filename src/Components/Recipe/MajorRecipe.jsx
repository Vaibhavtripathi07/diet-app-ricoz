// import React from "react";
// import Recipe_main from "./Recipe_main";
// import Steps from "./Steps";
// import Recipe_list from "./Recipe_list";

// const MajorRecipe = () => {
//   return (
//     <div className="relative bg-whitesmoke w-[1512px] h-[2926px] overflow-hidden text-left text-5xl text-black font-sans xl:w-full">
//       <Recipe_main />
//       <div className="absolute top-[554px] left-[100px] w-[1352px] h-[1616px]">
//         <p
//           className="m-0 absolute top-[594px] left-[192px]  text-17xl tracking-[0.03em] leading-[120.23%]  font-semibold  w-[1000px] "
//           id="Ingredients"
//         >
//           Ingredients
//         </p>

//         <p
//           className="m-0 absolute top-[594px]   left-[964px] text-17xl tracking-[0.03em]  leading-[120.23%] font-semibold cursor-pointer "
//           id="Method"
//         >
//           Method
//         </p>
//         {/* main */}
//         <section className="flex">
//           <Steps />
//           <Recipe_list />
//         </section>
//         {/* main */}
//       </div>
//     </div>
//   );
// };

// export default MajorRecipe;


import React, { useState } from "react";
import Recipe_main from "./Recipe_main";
import Steps from "./Steps";
import Recipe_list from "./Recipe_list";

const MajorRecipe = () => {
  const [activeSection, setActiveSection] = useState("Ingredients");

  const showIngredients = () => {
    setActiveSection("Ingredients");
  };

  const showMethod = () => {
    setActiveSection("Method");
  };

  return (
    <div className="relative bg-whitesmoke w-[1512px] h-[2926px] overflow-hidden text-left text-5xl text-black font-sans xl:w-full">
      <Recipe_main />
      <div className="absolute top-[554px] left-[100px] w-[1352px] h-[1616px]">
        <p
          className={`m-0 absolute top-[594px] left-[192px]  text-17xl tracking-[0.03em] leading-[120.23%]  font-semibold  w-[1000px] ${
            activeSection === "Ingredients" ? "text-blue-500" : "cursor-pointer"
          }`}
          onClick={showIngredients}
        >
          Ingredients
        </p>

        <p
          className={`m-0 absolute top-[594px]   left-[964px] text-17xl tracking-[0.03em]  leading-[120.23%] font-semibold ${
            activeSection === "Method" ? "text-blue-500 cursor-default" : "cursor-pointer"
          }`}
          onClick={showMethod}
        >
          Method
        </p>

        {/* main */}
        <section className="flex">
          {activeSection === "Ingredients" && <Steps />}
          {activeSection === "Method" && <Recipe_list />}
        </section>
        {/* main */}
      </div>
    </div>
  );
};

export default MajorRecipe;



// import React, { useState } from "react";
// import Recipe_main from "./Recipe_main";
// import Steps from "./Steps";
// import Recipe_list from "./Recipe_list";

// const MajorRecipe = () => {
//   const [activeSection, setActiveSection] = useState(null);

//   const toggleSection = (section) => {
//     setActiveSection((prev) => (prev === section ? null : section));
//   };

//   return (
//     <div className="relative bg-whitesmoke w-[1512px] h-[2926px] overflow-hidden text-left text-5xl text-black font-sans xl:w-full">
//       <Recipe_main />
//       <div className="absolute top-[554px] left-[100px] w-[1352px] h-[1616px]">
//         <p
//           className={`m-0 absolute top-[594px] left-[192px]  text-17xl tracking-[0.03em] leading-[120.23%] cursor-pointer  font-semibold  w-[1000px] ${
//             activeSection === "Ingredients" ? "text-blue-500 cursor-pointer" : ""
//           }`}
//           onClick={() => toggleSection("Ingredients")}
//         >
//           Ingredients
//         </p>

//         <p
//           className={`m-0 absolute top-[594px]   left-[964px] text-17xl tracking-[0.03em] cursor-pointer leading-[120.23%] font-semibold ${
//             activeSection === "Method" ? "text-blue-500 cursor-pointer" : ""
//           }`}
//           onClick={() => toggleSection("Method")}
//         >
//           Method
//         </p>

//         {/* main */}
//         <section className="flex">
//           {activeSection === "Ingredients" && <Steps />}
//           {activeSection === "Method" && <Recipe_list />}
//         </section>
//         {/* main */}
//       </div>
//     </div>
//   );
// };

// export default MajorRecipe;
