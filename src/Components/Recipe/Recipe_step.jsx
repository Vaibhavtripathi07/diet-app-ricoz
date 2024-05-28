import { useCallback } from "react";
import Recipe_main from "./Recipe_main";
import Steps from "./Steps";

const Recipe_step = () => {
  const onGroupContainer1Click = useCallback(() => {
    // Please sync "LANDING" to the project
  }, []);

  const onMethodClick = useCallback(() => {
    // Please sync "Recipes" to the project
  }, []);

  return (
    <div className="relative bg-whitesmoke w-[1512px] h-[2687px] overflow-hidden text-left text-5xl text-black font-sans xl:w-full">
      {/* importes Recipe_main upper component */}
      <Recipe_main />
      {/* importes Recipe_main upper component */}
      <div className="absolute top-[554px] left-[100px] w-[1352px] h-[1616px]">
        <p
          className="m-0 absolute top-[594px] left-[192px]  text-17xl tracking-[0.03em] leading-[120.23%]  font-semibold  w-[1000px] "
          id="Ingredients"
        >
          Ingredients
        </p>

        <p
          className="m-0 absolute top-[594px]   left-[964px] text-17xl tracking-[0.03em]  leading-[120.23%] font-semibold cursor-pointer "
          id="Method"
          onClick={onMethodClick}
        >
          Method
        </p>
        {/* main */}
        <Steps />
        {/* main */}
      </div>
    </div>
  );
};

export default Recipe_step;
