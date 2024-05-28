import React from 'react'
import Meal from "../../asset/Meal.png"
import Ingredients from "../../asset/Ingredients.png"
import RECIPES from "../../asset/RECIPES.png"

const Mealplan = () => {
  return (
    <div className="MealPlans absolute mt-[348px]">
      <section className='flex justify-between'>
        <section className="left">
          <img src={Meal} alt="" className='w-[392px] h-[291px] ml-[182px] '/>
          <img src={RECIPES} alt="" className='w-[392px] h-[341px] ml-[69px] mt-5' />
          <img src={Ingredients} alt="" className=' w-[332px] h-[306px] ml-[498px] -mt-[300px]'/>
        </section>
        <section className="right">
          <h1 className='mt-[115px]  text-17xl leading-[156.227%] font-semibold font-sans text-black  w-[618px] mr-[36px] '>Meal plans, Recipes & Grocery Lists</h1>
          <p className=' mt-[52px] left-[756px] leading-[156.227%] text-black font-sans text-5xl font-normal w-[651px] mr-9'>
            Receive personalized meal plans tailored to your dietary preferences
            and goals, browse thousands of delicious recipes and generate
            grocery lists based on your meals to shop for nutritious
            ingredients.
          </p>
        </section>
      </section>
    </div>
  );
}

export default Mealplan