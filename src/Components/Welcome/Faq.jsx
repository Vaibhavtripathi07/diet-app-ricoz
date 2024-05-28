import React,{useState} from 'react'

const Faq = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const toggleExpansion = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };
  return (
    <div>
      {/* FAQ */}
      <div className="absolute top-[7200px] left-[130px] w-[1189px] h-[777px] text-9xl text-gray-300">
        <div className="absolute top-[0px] left-[490px] w-[271px] h-[100px] text-29xl text-stroke-green-color">
          <div className="absolute top-[0px] left-[0px] w-[271px] h-[100px]">
            <div className="absolute top-[0px] left-[135px] rounded-sm bg-beige-100 w-[136px] h-[100px]" />
            <div className="absolute top-[0px] left-[0px] rounded-sm bg-whitesmoke-100 w-[136px] h-[100px]" />
          </div>
          {/* line-height 25.44px */}
          <p className="absolute top-[18px] left-[calc(50%_-_97.5px)] tracking-[0.53em] font-sans leading-[133%] font-semibold"> 
            FAQs
          </p>
        </div>
        <p className="absolute top-[120px] left-[calc(50%_-_163.5px)] text-5xl leading-[133%] text-grey-color font-sans">
          Have questions? We have answers!
        </p>
        <img
          className="absolute top-[360px] left-[819px] w-[370px] h-[374px] object-cover"
          alt=""
          src="/rectangle-344@2x.png"
        />
        <div className="absolute top-[351px] left-[-1px] rounded-7xl bg-whitesmoke-100  w-[598px] h-[99px] overflow-hidden border-[1px]  text-black rounded-[26px] border-stroke-green-color">
          <div className="absolute top-[30px] left-[30px] leading-[133%] font-sans font-semibold text-black">
            Can I customize my meal plans?
          </div>
          <p className="absolute top-[27px] left-[546px] font-normal cursor-pointer text-13xl leading-[133%] font-sans text-black" onClick={() => toggleExpansion(0)}>
          {expandedIndex === 0 ? '-' : '+'}
          </p>
        </div>
        <div className={`absolute top-[478px] left-[-1px] rounded-7xl bg-whitesmoke-100  w-[598px] h-[136px] overflow-hidden border-[1px] border-solid rounded-[26px] border-stroke-green-color`}>
          <p className="absolute top-[30px] left-[30px] leading-[133%] font-sans font-semibold inline-block w-[436px] text-black">
            Do you offer specialized meal plans for dietary restrictions?
          </p>
          <p className="absolute top-[45.5px] left-[546px] font-normal cursor-pointer text-13xl leading-[133%] font-sans text-black" onClick={() => toggleExpansion(1)}>
          {expandedIndex === 1 ? '-' : '+'}
          </p>
        </div>
        <div className={`absolute top-[642px] left-[-1px] rounded-7xl bg-whitesmoke-100  w-[598px] h-[136px] overflow-hidden border-[1px] border-solid rounded-[26px] border-stroke-green-color `}>
          <p className="absolute top-[30px] left-[30px] leading-[133%] font-sans font-semibold inline-block w-[436px] text-black">
            Is the consultation service available in my country?
          </p>
          <p className="absolute top-[45.5px] left-[546px] font-normal  text-13xl cursor-pointer leading-[133%] font- text-black" onClick={() => toggleExpansion(2)}>
          {expandedIndex === 2 ? '-' : '+'}
          </p>
        </div>
      </div>
      {/* FAQ */}

      {/* getting started */}
      <div className="absolute top-[8215px] left-[calc(50%_-_460px)] w-[920px] h-[283px] text-center text-13xl">
        <div className="absolute top-[0px] left-[calc(50%_-_460px)] leading-[152%] inline-block w-[920px]">
          <span className='font-sans text-dark-green-color'>Get started on your journey towards a healthier lifestyle with <br/></span>
          <span className="font-semibold font-sans text-dark-green-color">our 7-day FREE meal plan!</span>
        </div>
        <div className="absolute top-[198px] left-[calc(50%_-_137.5px)] rounded-2xl [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))] overflow-hidden flex flex-row items-center justify-center py-7 px-[73px] text-left text-5xl border-[1px] border-solid outline-none border-palegoldenrod-100">
          <button className="relative leading-[120%] font-semibold">
            Get Started
          </button>
        </div>
      </div>
      {/* getting started */}
    </div>
  )
}

export default Faq
