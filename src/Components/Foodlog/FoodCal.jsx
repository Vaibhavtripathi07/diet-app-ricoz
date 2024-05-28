import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import { Line } from "rc-progress";
import Next from "../../asset/Next.png";
import Add_Items from "../../asset/Add_Items.png";
import macros2 from "../../asset/macros2.png";
import { Link } from 'react-router-dom';


const FoodCal = () => {

  const data = [
    {
      uv: 31.47,
      pv: 2400,
      fill: '#8884d8',
    },
    {
      uv: 26.69,
      pv: 4567,
      fill: '#83a6ed',
    },
    {
      uv: 15.69,
      pv: 1398,
      fill: '#8dd1e1',
    },
  ];
  
  const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
  };
  return (
    <div>
      <main className="grid grid-cols-2 gap-4 ">
        {/* section1 */}
        <section className="absolute w-[28.75rem] h-[17.5rem] shadow-xl3 left-[458px] top-[677px]  bg-whitesmoke rounded-xl">
          {/* <h1 className="text-5xl text-black font-semibold leading-[120%] ml-6 mt-[18px] w-[112px] ">
            Breakfast
          </h1> */}

          <section className="flex justify-between ml-3 mr-3 mt-[18px]">
            <h1 className="text-5xl text-black font-semibold leading-[120%] w-[71px] ">
              Breakfast
            </h1>
            {/* next arrow img */}
      <Link to="/Snacks">     <img src={Next} alt="" className="" /></Link> 
            {/* next arrow img */}
          </section>

          <section className="flex items-center gap-3 ml-3 mt-3">
            <p className="w-[10px] h-[10px] rounded-[5px] bg-strokegreen-color"></p>
            <p className="text-[18px] text-black font-sans leading-[120%] font-semibold">
              Veggie Hummus wrap
            </p>
          </section>
          <Line
            percent={30}
            strokeWidth={2}
            strokeColor="#F9AEAE"
            trailColor="#FFEBEB"
            trailWidth={2}
            className="top-[211px] left-[24px] absolute w-[218px] h-[26px] rounded-2xl"
          />
          <section className="calcount flex items-center gap-1 ml-8 mt-40">
            <p className="text-[#F55E5E] font-montserrat text-lg font-semibold">
              506
            </p>
            <p className="text-[#F55E5E] font-montserrat text-[15px] font-normal ">
              kCal
            </p>
 {/* section */}

 {/* <ResponsiveContainer width="100%" height="100%" className="ml-[326px] mt-[79px]"> */}
        {/* <RadialBarChart cx="50%" cy="50%" innerRadius="50%" outerRadius="80%" barSize={10} data={data}> */}
          {/* <RadialBar minAngle={50} label={{ position: 'insideStart' }} background clockWise dataKey="uv" /> */}
          {/* Remove Legend component */}
        {/* </RadialBarChart> */}
      {/* </ResponsiveContainer> */}
 {/* section */}

 <img src={macros2} alt="" className='absolute left-[336px] top-[79px]'/>
            
          </section>

          {/* Content for section1 */}
        </section>
        {/* section1 */}

        {/* section2 */}
        <section className="absolute w-[28.75rem] h-[17.5rem] shadow-xl3 left-[978px] top-[677px] bg-whitesmoke rounded-xl">
          {/* <h1 className="text-5xl text-black font-semibold leading-[120%] ml-6 mt-[18px] w-[71px]  ">
            Lunch
          </h1> */}
          <section className="flex justify-between ml-3 mr-3 mt-[18px]">
            <h1 className="text-5xl text-black font-semibold leading-[120%] w-[71px]  ">
              Lunch
            </h1>
            {/* next arrow img */}
      <Link to="/Snacks">   <img src={Next} alt="" className="" /></Link>   

            {/* next arrow img */}
          </section>

          <section className="flex items-center gap-3 ml-3 mt-3">
            <p className="w-[10px] h-[10px] rounded-[5px] bg-strokegreen-color"></p>
            <p className="text-[18px] text-black font-sans leading-[120%] font-semibold">
              Chapati
            </p>
          </section>
          <section className="flex items-center gap-3 ml-3 mt-3">
            <p className="w-[10px] h-[10px] rounded-[5px] bg-strokegreen-color"></p>
            <p className="text-[18px] text-black font-sans leading-[120%] font-semibold">
              Cabbage
            </p>
          </section>

          <img src={macros2} alt="" className='absolute left-[336px] top-[79px]'/>
          <Line
            percent={30}
            strokeWidth={2}
            strokeColor="#F9AEAE"
            trailColor="#FFEBEB"
            trailWidth={2}
            className="top-[211px] left-[24px] absolute w-[218px] h-[26px] rounded-2xl "
          />
          <section className="calcount flex items-center gap-1 ml-8 mt-32">
            <p className="text-[#F55E5E] font-montserrat text-lg font-semibold">
              439
            </p>
            <p className="text-[#F55E5E] font-montserrat text-[15px] font-normal ">
              kCal
            </p>
          </section>

          {/* Content for section2 */}
        </section>
        {/* section2 */}

        {/* section3 */}
        <section className="absolute w-[28.75rem] h-[17.5rem] shadow-xl3 left-[458px] top-[1017px] bg-whitesmoke rounded-xl">
          {/* <h1 className="text-5xl text-black font-semibold leading-[120%] ml-6 mt-[18px] w-[80px] ">
            Snacks
          </h1> */}
          <section className="flex justify-between ml-3 mr-3 mt-[18px]">
            <h1 className="text-5xl text-black font-semibold leading-[120%] w-[71px]  ">
              Snacks
            </h1>
            {/* next arrow img */}
     <Link to="/Snacks">      <img src={Next} alt="" className="" /></Link> 
            {/* next arrow img */}
          </section>

          <section className="flex items-center gap-3 ml-3 mt-3">
            <p className="w-[10px] h-[10px] rounded-[5px] bg-strokegreen-color"></p>
            <p className="text-[18px] text-black font-sans leading-[120%] font-semibold">
              Chickpea Salad
            </p>
          </section>

          <img src={macros2} alt="" className='absolute left-[336px] top-[79px]'/>

          <Line
            percent={30}
            strokeWidth={2}
            strokeColor="#F9AEAE"
            trailColor="#FFEBEB"
            trailWidth={2}
            className="top-[211px] left-[24px] absolute w-[218px] h-[26px] rounded-2xl"
          />
          <section className="calcount flex items-center gap-1 ml-8 mt-40">
            <p className="text-[#F55E5E] font-montserrat text-lg font-semibold">
              208.4
            </p>
            <p className="text-[#F55E5E] font-montserrat text-[15px] font-normal ">
              kCal
            </p>
          </section>

          {/* Content for section3 */}
        </section>
        {/* section3 */}

        {/* section4 */}
        <section className="absolute w-[28.75rem] h-[17.5rem] shadow-xl3 left-[978px] top-[1017px] bg-whitesmoke rounded-xl">
          {/* <h1 className="text-5xl text-black font-semibold leading-[120%] ml-6 mt-[18px] w-[80px] ">
            Dinner
          </h1> */}

          <section className="flex justify-between ml-3 mr-3 mt-[18px]">
            <h1 className="text-5xl text-black font-semibold leading-[120%] w-[71px]  ">
              Dinner
            </h1>
            {/* next arrow img */}
      <Link to="/Snacks">     <img src={Add_Items} alt="" className="" /></Link> 
            {/* next arrow img */}
          </section>

          <img src={macros2} alt="" className='absolute left-[336px] top-[79px]'/>

          <Line
            percent={30}
            strokeWidth={2}
            strokeColor="#F9AEAE"
            trailColor="#FFEBEB"
            trailWidth={2}
            className="top-[211px] left-[24px] absolute w-[218px] h-[26px] rounded-2xl"
          />
          <section className="calcount flex items-center gap-1 ml-8 mt-48">
            <p className="text-[#F55E5E] font-montserrat text-lg font-semibold">
              0.00
            </p>
            <p className="text-[#F55E5E] font-montserrat text-[15px] font-normal ">
              kCal
            </p>
          </section>

          {/* Content for section4 */}
        </section>
        {/* section4 */}
      </main>
    </div>
  );
};

export default FoodCal;
