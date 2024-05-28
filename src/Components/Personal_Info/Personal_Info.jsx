import Nav from "../Top_Nav/Nav"
const Personal_Info = () => {
    return (
      <form
        className="relative bg-whitesmoke w-full h-[1797px] overflow-hidden"
        id="personal_details"
      >
        <Nav/>
        <h1
          className="m-0 absolute top-[208px] left-[calc(50%_-_378px)] text-[48px] tracking-[0.53em] leading-[133%] font-semibold font-open-sans text-stroke-green-color text-left"
          id="Heading"
        >
          Personal Details
        </h1>
        <div className="absolute top-[392px] left-[380px] w-[752px] h-[138px]">
          <label
            className="cursor-pointer absolute top-[0px] left-[0px] text-13xl leading-[156.23%] font-bold font-open-sans text-gray text-left inline-block w-[168px] h-[42px]"
            htmlFor="Full Name"
          >
            Full Name
          </label>
          <input
            className="bg-[transparent] absolute top-[64.5px] left-[-1.5px] rounded-xl box-border w-[755px] h-[75px] border-[3px] border-solid border-lavender"
            id="name"
            type="text"
          />
        </div>
        <div className="absolute top-[590px] left-[380px] w-[752px] h-[146px]">
          <input
            className="bg-[transparent] absolute top-[72.5px] left-[-1.5px] rounded-xl box-border w-[755px] h-[75px] border-[3px] border-solid border-lavender"
            id="contact"
            type="number"
          />
          <div className="absolute top-[72.5px] left-[-1.5px] rounded-xl box-border w-[103px] h-[75px] border-[3px] border-solid border-lavender" />
          <label
            className="cursor-pointer absolute top-[0px] left-[0px] text-13xl leading-[156.23%] font-bold font-open-sans text-gray text-left"
            htmlFor="Contact"
          >
            Contact
          </label>
          <p
            className="m-0 absolute top-[91px] left-[18px] text-5xl leading-[156.23%] font-open-sans text-lightsteelblue text-left"
            id="91"
          >
            +91
          </p>
          <img
            className="absolute top-[103.5px] left-[69.5px] w-[21px] h-[13.74px] object-cover"
            id="down_arrow"
            alt=""
            src="/vector-161@2x.png"
          />
        </div>
        <div className="absolute top-[796px] left-[380px] w-[752px] h-[244px]">
          <textarea className="bg-[transparent] absolute top-[72.5px] left-[-1.5px] rounded-xl box-border w-[755px] h-[173px] border-[3px] border-solid border-lavender" />
          <label
            className="cursor-pointer absolute top-[0px] left-[0px] text-13xl leading-[156.23%] font-bold font-open-sans text-gray text-left"
            htmlFor="Address"
          >
            Address
          </label>
        </div>
        <div className="absolute top-[1100px] left-[380px] w-[752px] h-[352px]">
          <div className="absolute top-[0px] left-[0px] w-[378px] h-[146px]">
            <label
              className="cursor-pointer absolute top-[0px] left-[0px] text-13xl leading-[156.23%] font-bold font-open-sans text-gray text-left"
              htmlFor="City"
            >
              City
            </label>
            <input
              className="bg-[transparent] absolute top-[72.5px] left-[-1.5px] rounded-xl box-border w-[381px] h-[75px] border-[3px] border-solid border-lavender"
              id="city"
              type="text"
            />
          </div>
          <div className="absolute top-[206px] left-[0px] w-[378px] h-[146px]">
            <label
              className="cursor-pointer absolute top-[0px] left-[0px] text-13xl leading-[156.23%] font-bold font-open-sans text-gray text-left"
              htmlFor="State"
            >
              State
            </label>
            <input
              className="bg-[transparent] absolute top-[72.5px] left-[-1.5px] rounded-xl box-border w-[381px] h-[75px] border-[3px] border-solid border-lavender"
              id="state"
              type="text"
            />
          </div>
          <div className="absolute top-[0px] left-[453px] w-[299px] h-[146px]">
            <label
              className="cursor-pointer absolute top-[0px] left-[0px] text-13xl leading-[156.23%] font-bold font-open-sans text-gray text-left"
              htmlFor="Pin-code"
            >
              Pin-code
            </label>
            <input
              className="bg-[transparent] absolute top-[72.5px] left-[-1.5px] rounded-xl box-border w-[302px] h-[75px] border-[3px] border-solid border-lavender"
              id="pincode"
              type="number"
            />
          </div>
        </div>
        <a className="[text-decoration:none] absolute top-[1592px] left-[calc(50%_-_173px)] rounded-2xl [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))] box-border w-[346px] overflow-hidden flex flex-row items-center justify-center py-7 px-[73px] border-[1px] border-solid border-palegoldenrod">
          <a className="[text-decoration:none] absolute text-5xl leading-[120%] font-semibold font-open-sans text-dark-green-color text-left">
            Proceed to Payment
          </a>
        </a>
      </form>
    );
  };
  
  export default Personal_Info;
  