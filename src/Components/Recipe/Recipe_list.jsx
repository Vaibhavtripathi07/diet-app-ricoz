import { useCallback } from "react";
import Nav from "../Top_Nav/Nav";
import Search from "../../asset/search.png";
import Saved from "../../asset/Saved.png";
import unsaved from "../../asset/unsaved.png";
import grocery_icon from "../../asset/grocery_icon.png";
import Chicken_tikka from "../../asset/Chicken_tikka.png";
import rating from "../../asset/rating.png";
import { Link } from "react-router-dom";
import Recipe_main from "./Recipe_main";

const Recipe_list = () => {
  const onGroupContainer1Click = useCallback(() => {
    // Please sync "LANDING" to the project
  }, []);

  const onMethodClick = useCallback(() => {
    // Please sync "Recipes" to the project
  }, []);

  const Generatedlist = () => {
    alert('Your list has been generated');
  };

  return (
    
    <>

      <div className="absolute left-[100px] w-[1352px] h-[1616px]">
        {/* <p
          className="m-0 absolute top-[594px] left-[192px]  text-17xl tracking-[0.03em] leading-[120.23%]   border-lime-300 font-semibold inline-block w-[1000px] "
          id="Ingredients"
        >
          Ingredients
        </p> */}
        <p
          className="m-0 absolute top-[722px] left-[116px] text-17xl tracking-[0.03em] leading-[120.23%] font-bold"
          id="For_Marinade"
        >
          For Marinade
        </p>
        <p
          className="m-0 absolute top-[1309px] left-[116px] text-17xl tracking-[0.03em] leading-[120.23%] font-bold"
          id="For_Sauce"
        >
          For Sauce
        </p>
        <section
          className="absolute top-[789px] left-[116px] text-inherit tracking-[0.04em] leading-[200.23%] font-sans text-black font-semibold"
          id="Marinade_list"
        >
          <ul className="m-0 pl-8 font-sans font-semibold list-disc">
            <li className="mb-0">4-5 cm peeled Ginger</li>
            <li className="mb-0">4 Garlic cloves</li>
            <li className="mb-0">3-tbsp Yogurt</li>
            <li className="mb-0">2 tsp Lime juice</li>
            <li className="mb-0">1 tbsp finely chopped Coriander leaves</li>
            <li className="mb-0">
              2 tsp each hot Chilli powder, Paprika & Garam masala powder
            </li>
            <li className="mb-0">1/2 tsp turmeric</li>
            <li className="mb-0">1 tsp each Cumin & Coriander leaves</li>
            <li className="mb-0">1 tsp fenugreek seeds</li>
            <li>600g Chicken breasts (cut into 4 cm chunks)</li>
          </ul>
        </section>
        <section
          className="absolute top-[1376px] left-[116px] text-inherit tracking-[0.04em] leading-[200.23%] font-sans font-semibold text-black"
          id="For_Sauce_list"
        >
          <ul className="m-0 pl-8 font-sans text-black list-disc">
            <li className="mb-0">2 tbsp Rapeseed oil</li>
            <li className="mb-0">2 thin sliced Onions</li>
            <li className="mb-0">2tbsp tomato puree</li>
            <li className="mb-0">2 tbsp Yoghurt</li>
            <li>{`1 tsp each Chilli powder, turmeric, Paprika & Garam masala.`}</li>
          </ul>
        </section>
        {/* <p
          className="m-0 absolute top-[594px] left-[964px] text-17xl tracking-[0.03em] pb-[10px]  leading-[120.23%] font-semibold cursor-pointer "
          id="Method"
          onClick={onMethodClick}
        >
          Method
        </p> */}

        {/* generate list button */}
        <Link to="/Grocerylist">
          <button className=" text-5xl leading-[120%] font-semibold font-sans absolute top-[1800px] left-[calc(50%_-_196.5px)] text-dark-green-color text-left  cursor-pointer py-7 px-[73px] rounded-2xl [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))] overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-strokegreen-color" onClick={Generatedlist}>
            Generate Grocery list
          </button>
        </Link>
      </div>
      </>
  );
};

export default Recipe_list;
