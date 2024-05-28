// import { useCallback } from "react";
import Cookbook from "../../asset/Cookbook.png";
import Cooking from "../../asset/Cooking.png";
import Healthy_beverages from "../../asset/Healthy_beverages.png";
import superFoods from "../../asset/superFoods.png";
import fitness_equipment from "../../asset/fitness_equipment.png";
import Healthy_snacks from "../../asset/Healthy_snacks.png";

const Dropdown = () => {
  // const onGroupContainer1Click = useCallback(() => {
  //   // Please sync "LANDING" to the project
  // }, []);

  // const onVectorIcon2Click = useCallback(() => {
  //   // Please sync "Favs" to the project
  // }, []);

  // const onGroupContainer6Click = useCallback(() => {
  //   // Please sync "Prodct overView" to the project
  // }, []);

  return (
    <div className="relative bg-whitesmoke w-full h-[1244px] overflow-hidden text-left text-5xl text-gray-200 font-sans">
      {/* start from here */}
      <div
        className="absolute top-[0px] left-[0px] bg-gainsboro w-[1512px] h-[1244px]"
        id="masked_content"
      />
      <div
        className="absolute top-[535px] left-[calc(50%_-_494px)] rounded-[14px] bg-white w-[590px] h-[647px]"
        id="category_dropdown_list"
      />
      <p
        className="m-0 absolute top-[476px] left-[calc(50%_-_488px)] text-11xl leading-[156.23%] font-semibold"
        id="Category"
      >
        Category
      </p>
      <div className="absolute top-[575px] left-[calc(50%_-_450px)] w-[397px] h-[74px] text-darkslategray font-sans">
        <p
          className="m-0 absolute top-[22px] left-[calc(50%_-_84.5px)] tracking-[0.03em] leading-[120.23%] font-medium"
          id="Healthy_snacks"
        >{`Healthy Snacks & Bars`}</p>
        <img
          className="absolute top-[0px] left-[0px] rounded-[50%] w-[74px] h-[74px] object-cover"
          alt="Healthy_snacks"
          src={Healthy_snacks}
        />
      </div>
      <div className="absolute top-[672px] left-[calc(50%_-_450px)] w-[460px] h-[74px] text-darkslategray font-sans">
        <p
          className="m-0 absolute top-[23px] left-[calc(50%_-_116px)] tracking-[0.03em] leading-[120.23%] font-medium"
          id="superFood"
        >{`Superfoods & Supplements`}</p>
        <img
          className="absolute top-[0px] left-[0px] rounded-[50%] w-[74px] h-[74px] object-cover"
          alt="superFoods"
          src={superFoods}
        />
      </div>
      <div className="absolute top-[769px] left-[calc(50%_-_450px)] w-[374px] h-[74px] text-darkslategray font-sans">
        <p
          className="m-0 absolute top-[23px] left-[calc(50%_-_73px)] tracking-[0.03em] leading-[120.23%] font-medium"
          id="Cooking"
        >
          Cooking Ingredients
        </p>
        <img
          className="absolute top-[0px] left-[0px] rounded-[50%] w-[74px] h-[74px] object-cover"
          alt="cooking"
          src={Cooking}
        />
      </div>
      <div className="absolute top-[866px] left-[calc(50%_-_450px)] w-[352px] h-[74px] text-darkslategray font-sans">
        <p
          className="m-0 absolute top-[23px] left-[calc(50%_-_62px)] tracking-[0.03em] leading-[120.23%] font-medium"
          id="healthy_Beverages"
        >
          Healthy Beverages
        </p>
        <img
          className="absolute top-[0px] left-[0px] rounded-[50%] w-[74px] h-[74px] object-cover"
          alt="healthy_Beverages"
          src={Healthy_beverages}
        />
      </div>
      <div className="absolute top-[963px] left-[calc(50%_-_450px)] w-[466px] h-[74px] text-darkslategray font-sans">
        <p
          className="m-0 absolute top-[23px] left-[calc(50%_-_119px)] tracking-[0.03em] leading-[120.23%] font-medium"
          id="CookBook"
        >{`Cookbooks & Recipe guides`}</p>
        <img
          className="absolute top-[0px] left-[0px] rounded-[50%] w-[74px] h-[74px] object-cover"
          alt="cookbook"
          src={Cookbook}
        />
      </div>
      <div className="absolute top-[1060px] left-[calc(50%_-_450px)] w-[368px] h-[74px] text-darkslategray font-sans">
        <div className="absolute top-[0px] left-[calc(50%_-_184px)] w-[368px] h-[74px]">
          <p
            className="m-0 absolute top-[24px] left-[calc(50%_-_70px)] tracking-[0.03em] leading-[120.23%] font-medium"
            id="Fitness_Equipment"
          >
            Fitness Equipments
          </p>
          <img
            className="absolute top-[0px] left-[0px] rounded-[50%] w-[74px] h-[74px] object-cover"
            alt="fitness_equipment"
            src={fitness_equipment}
          />
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
