import React, { useState } from "react";
import Nav from "../Top_Nav/Nav";
import Sidebar from "../ProPic/Sidebar";
import previous from "../../asset/previous.png";
import Date from "../../asset/Date.png";
import search from "../../asset/search.png";
import Add_Items from "../../asset/Add_Items.png";
import { Line } from "rc-progress";
import Edit from "../../asset/Edit.png";
import macros from "../../asset/macros.png";

const Snacks = () => {
  const [modalOpen, setModalOpen] = useState(false);
  // const [value, setValue] = useState(0);
  const [foodName, setFoodName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [serving, setServing] = useState(0);
  const [addedItems, setAddedItems] = useState([]);

  const handleIncrementServing = () => {
    setServing(serving + 1);
  };

  const handleDecrementServing = () => {
    if (serving > 0) {
      setServing(serving - 1);
    }
  };

  const handleModalDone = () => {
    // Close the modal
    setModalOpen(false);
  };

  const handleAdd = () => {
    // Perform any logic you need with the values
       // Create a new item object
       const newItem = {
        foodName,
        quantity,
        serving,
      };
    // For now, let's just log them
    console.log("Food Name:", foodName);
    console.log("Quantity:", quantity);
    console.log("Serving:", serving);

    // Update the state with the new item
    setAddedItems([...addedItems, newItem]);

    // Optionally, you can reset the state after adding
    setFoodName("");
    setQuantity(0);
    setServing(0);

    // Close the modal
    handleModalDone();
  };

  return (
    <div className="relative w-full bg-whitesmoke overflow-hidden h-[1286px] font-sans">
      {/* navbar */}
      <Nav />
      {/* navbar */}

      {/* sidebar */}
      <Sidebar />
      {/* sidebar */}

      <section>
        <img
          src={previous}
          alt=""
          className="absolute top-[178px] left-[436px]"
        />
        <h1 className="absolute left-[512px] top-[170px] font-sans text-dark-green-color text-17xl font-semibold">
          Snacks
        </h1>
        <p className="absolute left-[512px] top-[224px] font-normal text-5xl text-grey-color leading-[28.8px] ">
          Tuesday, July 25, 2023
        </p>
        <img
          src={Date}
          alt="date"
          height={40}
          width={40}
          className="absolute left-[1430px] top-[170px] w-[40px] h-[40px]"
        />
      </section>

      <section className="absolute left-[553px] top-[375px]">
        <input
          type="text"
          placeholder="Search Food"
          className=" pl-28 w-[802px] h-[78px] outline-none border border-solid border-stroke-green-color bg-whitesmoke rounded-[10px]  accent-strokegreen-color placeholder:placeholder:italic  "
        />
        <img
          src={search}
          alt=""
          className="absolute top-[24px] left-[28px] w-[30px] h-[30px]   border-stroke-green-color rounded-[10px] bg-whitesmoke  "
        />
      </section>

{/* added items */}

{addedItems.map((item, index) => (
<section className="Added_items_section w-[814px] my-48 h-[356px] rounded-[12px]  shadow-xl2 absolute left-[546px] top-[553px] ">
          <div key={index}>
            <p className="absolute top-[28px] left-[30px] font-sans text-13xl font-semibold tracking-[0.8px] text-black">{item.foodName}</p> 
            <p className="absolute tetx-black font-sans font-semibold text-5xl leading-[28.8px] tracking-[0.6px] left-[390px] top-[30px]">Serving</p>
            <section className="flex border border-solid border-stroke-green-color rounded-[10px] w-[137px] h-[41px] ml-[494px] mt-[24px]"><p className="text-5xl text-dark-green-color mt-[2px] w-[12px] ml-[8px]  font-semibold"  onClick={handleDecrementServing}>-</p><input type ="text" value={item.serving} className="text-5xl placeholder:text-gray border-none outline-none w-8 pl-2 ml-[30px]"/><p className="text-5xl mt-[6px] ml-[26px] text-dark-green-color font-sans leading-[28px] tracking-[0.6px] font-semibold" onClick={handleIncrementServing}>+</p></section>
            <img src={Edit} width={23} height={18} alt="" className="absolute left-[767px] top-[24px]" />

{/* calorie section */}
 <section className="absolute left-[31px] top-[263px] w-[218px] h-[20px] bg-[#FAD9D9] rounded-[15px]">
        <section className="w-[73px] h-[20px] rounded-[15px] bg-[#F55E5E]">
          <section className="absolute w-[8px] h-[8px] rounded-full bg-[#fff] top-[6px] left-[5.5px]"></section>
        </section> 



        <section className="flex gap-[3px]">
          <p className=" text-[18px] mt-[11px] font-medium text-[#F55E5E]">208.4</p>
          <p className=" text-[15px] mt-[13px] font-medium text-[#F55E5E]">
            kCal
          </p>
        </section>
      </section>
{/* calorie section */}

{/* macros */}
<img src={macros} alt="" width={150} height={150}  className="absolute left-[349px] top-[190px]"/>

{/* macros */}

{/* calories constituents */}

{/* fats */}
<section className="absolute left-[563px] top-[253px]">
  <p className="text-[16px] font-sans font-semibold ">14 g</p>
  <p className="w-[10px] h-[10px] rounded-[5px] ml-3 bg-[#F9A322]"></p>
  <p className="text-[18px] font-sans font-semibold">Fats</p>
</section>
{/* fats */}

{/* Carbs */}
<section className="absolute left-[629px] top-[253px]">
  <p className="text-[16px] font-sans font-semibold ">6.8 g</p>
  <p className="w-[10px] h-[10px] rounded-[5px] ml-3 bg-[#3473F7]"></p>
  <p className="text-[18px] font-sans font-semibold">carbs</p>
</section>
{/* Carbs */}

{/* proteins */}
<section className="absolute left-[702px] top-[253px]">
  <p className="text-[16px] font-sans font-semibold ">20 g</p>
  <p className="w-[10px] ml-3 h-[10px] rounded-[5px] bg-[#FD9AF9]"></p>
  <p className="text-[18px] font-sans font-semibold">Proteins</p>
</section>
{/* proteins */}
{/* calories constituents */}


            <p>
              {/* Quantity: {item.quantity} */}
            </p>
          </div>
</section>
        ))}

{/* added items */}

      {/* input section */}

      {/* Add items section */}
      <section className="absolute w-[814px] h-[90px] left-[546px] top-[553px] rounded-xl shadow-xl2">
        <section className="flex gap-[35px] mt-7">
          <img
            src={Add_Items}
            alt=""
            className=" top-[20px] ml-[30px] left-[20px] w-[30px] h-[30px]  rounded-[10px] bg-transparent "
            onClick={() => setModalOpen(true)}
          />
          <p
            className=" top-[40px] left-[40px] font-normal text-5xl text-black  leading-[28.8px] cursor-pointer "
            onClick={() => setModalOpen(true)}
          >
            Add items
          </p>

          {/* modal section */}
          {modalOpen && (
            <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center overflow-x-hidden">
              <section className="absolute w-[1030px] h-[465px] rounded-[18px] border-2 border-solid border-dark-green-color bg-whitesmoke top-[312px] left-[241px]">
                <p className=" absolute text-dark-green-color font-sans text-13xl leading-[38px] left-[24px] top-[26px]">
                  Food/Product
                </p>
                {/* input field */}
                <input
                  type="text"
                  placeholder="Type food/product name"
                  value={foodName}
                  onChange={(e) => setFoodName(e.target.value)}
                  className="absolute pl-[25px] left-[24px] top-[82px] placeholder:text-5xl text-5xl placeholder:text-grey-color w-[910px] h-[96px] rounded-[18px] border border-solid border-strokegreen-color shadow-xl3 placeholder:italic "
                />
                <section className="flex mt-[240px] ml-[24px] gap-[30px]">
                  <p className="text-dark-green-color font-roboto-flex text-13xl -mt-1">
                    Quantity
                  </p>
                  <input
                    type="Number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-[221px] h-[96px] text-center border border-solid rounded-[18px] border-strokegreen-color -mt-1"
                  />
                  <p className="text-5xl text-dark-green-color Tracking-[0.6] font-normal -mt-0">
                    {" "}
                    Grams
                  </p>
                </section>
                {/* serving section */}
                <section>
                  <p className="text-dark-green-color font-sans text-13xl font-semibold leading-[38px] absolute left-[636px] top-[240px]">
                    Serving
                  </p>
                  <section className="w-[221px] h-[96px] rounded-[18px] border border-solid border-strokegreen-color bg-whitesmoke shadow-xl3 ml-[785px] -mt-[125px] flex justify-between">
                    <p
                      className="text-dark-green-color text-13xl font-semibold font-sans ml-[18px] mt-[22px] cursor-pointer"
                      onClick={handleDecrementServing}
                    >
                      -
                    </p>
                    {/* value */}
                    <input
                      type="Number"
                      placeholder="0"
                      className="w-[110px] placeholder:text-grey-color pl-[48px] h-[64px] mt-[15px] ml-[5px] outline-none  rounded-[18px] border border-solid border-strokegreen-color bg-whitesmoke "
                      value={serving}
                      onChange={(e) => setServing(e.target.value)}
                    />
                    {/* value */}
                    <p
                      className="text-dark-green-color text-13xl font-semibold font-sans mr-[18px] mt-[22px] cursor-pointer"
                      onClick={handleIncrementServing}
                    >
                      +
                    </p>
                  </section>

                  {/* remove  */}
                  <button
                    onClick={() => handleModalDone()}
                    className="absolute left-[960px] top-[16px] rounded-md bg-dark-green-color  text-white px-4 border py-2  hover:bg-dark-green-color-darker"
                  >
                    X
                  </button>
                  {/* remove  */}

                  {/* add btn */}
                  <button
                    onClick={() => handleAdd()}
                    className="Add absolute px-[46px] py-[29px] text-[#2C744D] font-sans  font-semibold leading-7 rounded-[16px] border border-[#CFF7AA] left-[492px]  text-5xl bg-gradient-to-r bg-gradient-[93deg] from-[#AFE47E] to [#D8FAB9] top-[360px]"
                  >
                    Add
                  </button>
                  {/* add btn */}
                </section>
                {/* serving section */}

                {/* input field */}
              </section>
            </div>
          )}
        </section>
      </section>
      {/* Add items Section */}

      {/* calories */}

      {/* <Line percent={100} strokeWidth={4} strokeColor="#FAD9D9" className='absolute left-[548px] top-[685px] w-[218px] h-[20px] ' />  */}
      <section className="absolute left-[548px] top-[685px] w-[218px] h-[20px] bg-[#FAD9D9] rounded-[15px]">
        <section className="w-[20px] h-[20px] rounded-[15px] bg-[#F55E5E]">
          <section className="absolute w-[8px] h-[8px] rounded-full bg-[#fff] top-[6px] left-[5.5px]"></section>
        </section>

        <section className="flex gap-[3px]">
          <p className=" text-[18px] font-medium text-[#F55E5E]">0.00</p>
          <p className=" text-[15px] font-medium text-[#F55E5E] mt-[2px]">
            kCal
          </p>
        </section>
      </section>
      {/* calories */}
    </div>
  );
};

export default Snacks;



// import React, { useState } from "react";

// const YourComponent = () => {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [foodName, setFoodName] = useState("");
//   const [quantity, setQuantity] = useState(0);
//   const [serving, setServing] = useState(0);
//   const [items, setItems] = useState([]);

//   const handleModalDone = () => {
//     setModalOpen(false);
//   };

//   const handleAdd = () => {
//     const newItem = {
//       foodName,
//       quantity,
//       serving
//     };

//     setItems([newItem, ...items]);
//     setModalOpen(false);
//   };

//   const renderItems = () => {
//     return items.map((item, index) => (
//       <div key={index} className="added-items ">
//         <p>{item.foodName}</p>
//         <p>{item.quantity} grams</p>
//         <p>Serving: {item.serving}</p>
//       </div>
//     ));
//   };

//   return (
//     <section>
//       {/* Your existing code */}
//  {/* Display added items */}
//  <div className="added-items-container">
//         {renderItems()}
//       </div>

//       {/* Add items Section */}
//       <section>
//         <p
//           className="top-[40px] left-[40px] pl-3 font-normal text-5xl text-black leading-[28.8px] cursor-pointer"
//           onClick={() => setModalOpen(true)}
//         >
//           Add items
//         </p>

//         {/* modal section */}
//         {modalOpen && (
//           <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center overflow-x-hidden">
          
//           <section className="absolute w-[1030px] h-[465px] rounded-[18px] border-2 border-solid border-dark-green-color bg-whitesmoke top-[312px] left-[241px]">
//                  <p className=" absolute text-dark-green-color font-sans text-13xl leading-[38px] left-[24px] top-[26px]">
//                    Food/Product
//                  </p>
//                  {/* input field */}
//                  <input
//                    type="text"
//                    placeholder="Type food/product name"
//                    value={foodName}
//                    onChange={(e) => setFoodName(e.target.value)}
//                    className="absolute pl-[25px] left-[24px] top-[82px] placeholder:text-5xl text-5xl placeholder:text-grey-color w-[910px] h-[96px] rounded-[18px] border border-solid border-strokegreen-color shadow-xl3 placeholder:italic "
//                  />
//                  <section className="flex mt-[240px] ml-[24px] gap-[30px]">
//                    <p className="text-dark-green-color font-roboto-flex text-13xl -mt-1">
//                      Quantity
//                    </p>
//                    <input
//                      type="Number"
//                      value={quantity}
//                      onChange={(e) => setQuantity(e.target.value)}
//                      className="w-[221px] h-[96px] text-center border border-solid rounded-[18px] border-strokegreen-color -mt-1"
//                    />
//                    <p className="text-5xl text-dark-green-color Tracking-[0.6] font-normal -mt-0">
//                      {" "}
//                      Grams
//                    </p>
//                  </section>
//                  {/* serving section */}
//                  <section>
//                    <p className="text-dark-green-color font-sans text-13xl font-semibold leading-[38px] absolute left-[636px] top-[240px]">
//                      Serving
//                    </p>
//                    <section className="w-[221px] h-[96px] rounded-[18px] border border-solid border-strokegreen-color bg-whitesmoke shadow-xl3 ml-[785px] -mt-[125px] flex justify-between">
//                      <p
//                        className="text-dark-green-color text-13xl font-semibold font-sans ml-[18px] mt-[22px] cursor-pointer"
//                       //  onClick={handleDecrementServing}
//                      >
//                        -
//                      </p>
//                      {/* value */}
//                      <input
//                        type="Number"
//                        placeholder="0"
//                        className="w-[110px] placeholder:text-grey-color pl-[48px] h-[64px] mt-[15px] ml-[5px] outline-none  rounded-[18px] border border-solid border-strokegreen-color bg-whitesmoke "
//                        value={serving}
//                        onChange={(e) => setServing(e.target.value)}
//                      />
//                      {/* value */}
//                      <p
//                        className="text-dark-green-color text-13xl font-semibold font-sans mr-[18px] mt-[22px] cursor-pointer"
//                       //  onClick={handleIncrementServing}
//                      >
//                        +
//                      </p>
//                    </section>

//                    {/* remove  */}
//                    <button
//                      onClick={() => handleModalDone()}
//                      className="absolute left-[960px] top-[16px] rounded-md bg-dark-green-color  text-white px-4 border py-2  hover:bg-dark-green-color-darker"
//                    >
//                      X
//                    </button>
//                    {/* remove  */}

//                    {/* add btn */}
//                    <button
//                      onClick={() => handleAdd()}
//                      className="Add absolute px-[46px] py-[29px] text-[#2C744D] font-sans  font-semibold leading-7 rounded-[16px] border border-[#CFF7AA] left-[492px]  text-5xl bg-gradient-to-r bg-gradient-[93deg] from-[#AFE47E] to [#D8FAB9] top-[360px]"
//                    >
//                      Add
//                    </button>
//                   {/* add btn */}
//                 </section>
//                  {/* serving section */}

//                  {/* input field */}
//                </section>



//           </div>
//         )}
//       </section>
//       {/* Add items Section */}

     

//       {/* Your existing code */}
//     </section>
//   );
// };

// export default YourComponent;
