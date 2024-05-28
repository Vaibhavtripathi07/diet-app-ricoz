import React,{useState} from 'react'

const MealFeatures = () => {
  const [selectedRadio, setSelectedRadio] = useState(null);


  const handleRadioChange = (radioId) => {
    setSelectedRadio(radioId);
  };
  return (
    <section className='absolute w-[502px] h-[681px] bg-[#EEF0FE] left-[910px] mt-[260px]'>
       <h3
          className="m-0 absolute mt-[50px] text-black accent-strokegreen-color left-[110px] text-13xl leading-[156.23%] font-bold font-sans text-center inline-block w-[282px]"
          id="what you learn"
        >
          Key Features
        </h3>
        <section className="absolute flex items-center mt-[155px] ml-[51px] w-[368px] h-[74px]">
          <p
            className="m-0 absolute  text-5xl left-[65px] leading-[156%] inline-block w-[303px]"
            id="1"
          >
            Get a variety of meal plans everyday
          </p>
          <input
            className="cursor-pointer w-[24px] h-[24px] accent-[#4A5083] border-[#4A5083]"
            id="intro_radio"
            type="radio"
            checked={selectedRadio === '1'}
            onChange={() => handleRadioChange('1')}
            
          />
        </section>
        <section className="absolute flex items-center mt-[259px] ml-[51px] w-[368px] h-[74px]">
          <p
            className="m-0 absolute  text-5xl left-[65px] leading-[156%] inline-block w-[332px]"
            id="2"
          >
           Breakfast, lunch, snacks & dinner 
          </p>
          <input
            className="cursor-pointer w-[24px] h-[24px] accent-[#4A5083] border-[#4A5083]"
            id="intro_radio"
            type="radio"
            checked={selectedRadio === '2'}
            onChange={() => handleRadioChange('2')}
          />
        </section>
        <section className="absolute flex items-center mt-[363px] ml-[51px] w-[342px] h-[37px]">
          <p
            className="m-0 absolute -top-[10px] text-5xl left-[65px] leading-[156%] inline-block w-[294px]"
            id="3 build"
          >
            Portion Control and Calorie Guidance
          </p>
          <input
            className="cursor-pointer w-[24px] h-[24px] accent-[#4A5083] border-[#4A5083]"
            id="3"
            type="radio"
            checked={selectedRadio === '3'}
            onChange={() => handleRadioChange('3')}
          />
        </section>
        <section className="absolute flex items-center mt-[467px] ml-[51px] w-[368px] h-[70px]">
          <p
            className="m-0 absolute top-[0px] text-5xl left-[65px] leading-[156%] inline-block  h-[70px] w-[332xp]"
            id="4"
          >
        Professional guidance from Nutritionists or dietitians
          </p>
          <input
            className="cursor-pointer w-[24px] h-[24px] accent-[#4A5083] border-[#4A5083]"
            id="4 portion"
            type="radio"
            checked={selectedRadio === '4'}
            onChange={() => handleRadioChange('4')}
          />
        </section>
        <section className="absolute flex items-center mt-[567px] ml-[51px] w-[368px] h-[70px]">
          <p
            className="m-0 absolute top-[0px] text-5xl left-[65px] leading-[156%] inline-block w-[303px] h-[70px]"
            id="5"
          >
       Convenient and Easy-to-Follow
          </p>
          <input
            className="cursor-pointer w-[24px] h-[24px] accent-[#4A5083] border-[#4A5083]"
            id="4 portion"
            type="radio"
            checked={selectedRadio === '5'}
            onChange={() => handleRadioChange('5')}
          />
        </section>
    </section>
  )
}

export default MealFeatures
