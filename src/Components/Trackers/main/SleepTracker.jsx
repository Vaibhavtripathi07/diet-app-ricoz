// import React , { PureComponent , useState } from 'react'
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// import Date from "../../../asset/date.png"
// import previous from "../../../asset/previous.png"
// import sleep_chart from "../../../asset/sleep_chart.png"
// import Sidebar from '../../ProPic/Sidebar';
// import Nav from "../../Top_Nav/Nav"


// const StepsTracker = () => {
// // for modal
// const [modalOpen, setModalOpen] = useState(false);
// // for modal

//   // sleep chart data
//   const data = [
//     {
    
//     },
//     {
//       name: 'Sun',
//       pv: 6,
//     },
//     {
//       name: 'Mon',
//       pv: 3.8,
//     },
//     {
//       name: 'Tue',
//       pv: 4,
//     },
//     {
//       name: 'Wed',
//       pv: 6.2,
//     },
//     {
//       name: 'Thu',
//       pv: 7.8,
//     },
//     {
//       name: 'Fri',
//       pv: 6.2,
//     },
//     {
//       name: 'Sat',
//       pv: 5.9,
//     },
//     {
    
//     },
     
//   ];

//   const yTicks = [0, 2, 4, 6, 8]; // Your custom Y-axis values
//   // sleep chart data
//   return (
//     <div className='relative w-full h-[1286px] overflow-hidden font-sans bg-whitesmoke '>
// {/* Nav */}
// <Nav/>
// {/* Nav */}

// {/* sidebar */}
// <Sidebar/>
// {/* sidebar */}

//       {/* main */}
//       <img src={previous} alt="" className='absolute top-[178px] left-[436px]'/>
//        <h1 className='absolute left-[512px] top-[170px] text-dark-green-color font-semibold text-17xl font-inherit'>Sleep Tracker</h1>
//       <img src={Date} alt="date" height={40} width={40} className='absolute left-[1432px] top-[171px] w-[40px] h-[40px]' />
//         <p className='absolute left-[512px] top-[224px] font-normal text-5xl text-grey-color leading-[28.8px] '>Tuesday, July 25, 2023</p>

//         {/* sleep left section */}
//         <section>
// <p className='absolute left-[598px] top-[375px] text-black text-5xl leading-7 font-bold'>5h35m</p>
// <p className='absolute left-[600px] top-[408px] rounded-full bg-purple stroke-[#F7F5BD] stroke-1 w-[30px] h-[30px]'><span className='absolute text-black text-5xl font-normal leading-7 left-9'>Slept</span></p>
// <p className='absolute left-[582px] top-[489px] text-black text-5xl leading-7 font-bold'>2720 steps</p>
// <p className='absolute left-[566px] top-[522px] rounded-full bg-[#C8CFE9] stroke-[#2C48AB] stroke-1 w-[30px] h-[30px]'><span className='absolute text-black text-5xl font-normal leading-7 left-9 '>Remaining </span></p>
// </section>
//         {/* sleep left section */}

// {/* sleep midlle section */}
// <section>
  
//   <img src={sleep_chart} width={242} height={260} alt="" className='absolute  left-[841px] top-[317px] '/>
//   <p className='absolute left-[924px] top-[388px] text-purple text-center font-montserrat font-semibold leading-[68px] text-[57px]'>08</p>
//   <p className='absolute top-[474px] left-[922px] text-purple text-[28px] font-montserrat font-medium leading-8 text-center'>Hours</p>

// </section>


// {/* sleep midlle section */}


// {/* Sleep Line Chart */}

//   <section className='rounded-lg overflow-hidden bg-blue-200 shadow-md'>
//     {/* <p className='absolute left-[550px] top-[747px] text-[20px] font-sans leading-6 font-semibold text-[#2C48AB]'>Sleep Analytics</p> */}
//     {/* <p className='absolute left-[995px] top-[740px] text-[14px] font-sans leading-6 font-[400] text-[#2C48AB]'>Avg sleep hours: 7.4 hours </p> */}
//       <ResponsiveContainer width="50%" height="30%" className="absolute w-[476px] h-[288px] top-[735px] right-[321px]">
//         <LineChart
//           width={476}
//           height={278}
//           data={data}
//           margin={{
//             top: 5,
//             right: 20,
//             left: 40,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="1 1" />
//           <XAxis dataKey="name"  strokeWidth={1} stroke='#2C48AB'  />
//           <YAxis ticks={yTicks}   strokeWidth={1} stroke='#2C48AB' />
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey="pv" stroke="#2C48AB" strokeWidth={2}  activeDot={{ r: 8 }} />
//           {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
//         </LineChart>
//       </ResponsiveContainer>
    
//       </section>




// {/* Sleep Line Chart */}

// {/* reset button */}

// {/* for modal to be open on onclick  */}
// <button  onClick={() => setModalOpen(true)}

//  className='absolute px-[73px] py-[28px] text-[#2C744D] font-sans font-semibold leading-7 rounded-[16px] border border-[#CFF7AA] right-[526px] text-5xl bg-gradient-to-r bg-gradient-[93deg] from-[#AFE47E] to [#D8FAB9] top-[1129px]'>Reset</button>
// {/* modal section */}
// {modalOpen && (
//   <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center overflow-x-hidden">
//     <section className=" w-[1030px] h-[341px] left-[244px] top-[321px] bg-white  rounded-[18px] border-2 border-solid border-dark-green-color absolute inset-0 overflow-auto">
//       <p className="absolute left-[64px] top-[59px] text-dark-green-color font-semibold text-5xl  tracking-[0.8px]">Add Hours of Sleep</p>
//       <p className="absolute left-[396px] top-[144px] text-dark-green-color text-lg font-normal">(0-24 hours)</p>
//       <input
//         type="text"
//         placeholder="0"
//         className="w-[221px] h-[96px] left-[394px] top-[30px] absolute rounded-[18px] border border-strokegreen-color text-center shadow-md2 placeholder:text-center"
//       />
//         <p className="absolute left-[639px] top-[63px] text-dark-green-color text-lg font-normal ">Hours</p>
//       <button 
//         onClick={() => setModalOpen(false)}
//         className="absolute left-[960px] top-[16px] rounded-md bg-dark-green-color  text-white px-4 border py-2  hover:bg-dark-green-color-darker"
//       >
//         X
//       </button>
    

//       <button className='absolute px-[73px] py-[28px] text-[#2C744D] font-sans font-semibold leading-7 rounded-[16px] border border-[#CFF7AA] left-[411px]  text-5xl bg-gradient-to-r bg-gradient-[93deg] from-[#AFE47E] to [#D8FAB9] top-[226px]'>Done</button>
//     </section>
//   </div>
// )}
// {/* modal section */}

// {/* reset button */}
//       {/* main */}
//     </div>
//   )
// }

// export default StepsTracker








import React, { useState } from 'react';
import { format, addDays } from 'date-fns';


import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import Date from '../../../asset/date.png';
import previous from '../../../asset/previous.png';
import sleep_chart from '../../../asset/sleep_chart.png';
import Sidebar from '../../ProPic/Sidebar';
import Nav from '../../Top_Nav/Nav';

const StepsTracker = () => {
  // for modal
  const [modalOpen, setModalOpen] = useState(false);
  const [sleepData, setSleepData] = useState([
    {
    
          },
          {
            name: 'Sun',
            pv: 6,
          },
          {
            name: 'Mon',
            pv: 3.8,
          },
          {
            name: 'Tue',
            pv: 4,
          },
          {
            name: 'Wed',
            pv: 6.2,
          },
          {
            name: 'Thu',
            pv: 7.8,
          },
          {
            name: 'Fri',
            pv: 6.2,
          },
          {
            name: 'Sat',
            pv: 5.9,
          },
          {
          
          },
           
  ]);

  const [sleepNumber, setSleepNumber] = useState('5h35m');
  const [sleepUnit, setSleepUnit] = useState('Hours');
  const [modalInputValue, setModalInputValue] = useState('');

  
  const handleModalDone = () => {
    // Validate the input value (assuming it should be a number between 0 and 24)
    const hours = parseFloat(modalInputValue);
    if (!isNaN(hours) && hours >= 0 && hours <= 24) {
      // Update sleep data with the new value
      const updatedSleepData = [...sleepData];
      updatedSleepData.push({ name: 'New Day', pv: hours });
      setSleepData(updatedSleepData);
    }

    // Close the modal
    setModalOpen(false);
  };

  // sleep chart data
  const yTicks = [0, 2, 4, 6, 8]; // Your custom Y-axis values

  return (
    <div className='relative w-full h-[1286px] overflow-hidden font-sans bg-whitesmoke'>
      {/* Nav */}
      <Nav />
      {/* Nav */}

      {/* sidebar */}
      <Sidebar />
      {/* sidebar */}

      {/* main */}
      <img src={previous} alt='' className='absolute top-[178px] left-[436px]' />
      <h1 className='absolute left-[512px] top-[170px] text-dark-green-color font-semibold text-17xl font-inherit'>
        Sleep Tracker
      </h1>
      <img
        src={Date}
        alt='date'
        height={40}
        width={40}
        className='absolute left-[1432px] top-[171px] w-[40px] h-[40px]'
      />
      <p className='absolute left-[512px] top-[224px] font-normal text-5xl text-grey-color leading-[28.8px] '>
        Tuesday, July 25, 2023
      </p>

      {/* sleep left section */}
      <section>
        <p className='absolute left-[598px] top-[375px] text-black text-5xl leading-7 font-bold'>5h35m</p>
        <p className='absolute left-[600px] top-[408px] rounded-full bg-purple stroke-[#F7F5BD] stroke-1 w-[30px] h-[30px]'>
          <span className='absolute text-black text-5xl font-normal leading-7 left-9'>Slept</span>
        </p>
        <p className='absolute left-[582px] top-[489px] text-black text-5xl leading-7 font-bold'>2720 steps</p>
        <p className='absolute left-[566px] top-[522px] rounded-full bg-[#C8CFE9] stroke-[#2C48AB] stroke-1 w-[30px] h-[30px]'>
          <span className='absolute text-black text-5xl font-normal leading-7 left-9 '>Remaining </span>
        </p>
      </section>
      {/* sleep left section */}

      {/* sleep middle section */}
      <section>
        <img src={sleep_chart} width={242} height={260} alt='' className='absolute left-[841px] top-[317px]' />
        <p className='sleep_hours absolute left-[924px] top-[388px] text-purple text-center font-montserrat font-semibold leading-[68px] text-[57px]'>
          08
        </p>
        <p className= ' sleep_hours_unit absolute top-[474px] left-[922px] text-purple text-[28px] font-montserrat font-medium leading-8 text-center'>
          Hours
        </p>
      </section>
      {/* sleep middle section */}

      {/* Sleep Line Chart */}
      <section className='rounded-lg overflow-hidden bg-blue-200 shadow-md'>
        <ResponsiveContainer width='50%' height='30%' className='absolute w-[476px] h-[288px] top-[735px] right-[321px]'>
          <LineChart
            width={476}
            height={278}
            data={sleepData}
            margin={{
              top: 5,
              right: 20,
              left: 40,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='1 1' />
            <XAxis dataKey='name' strokeWidth={1} stroke='#2C48AB' />
            <YAxis ticks={yTicks} strokeWidth={1} stroke='#2C48AB' />
            <Tooltip />
            <Legend />
            <Line type='monotone' dataKey='pv' stroke='#2C48AB' strokeWidth={2} activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </section>
      {/* Sleep Line Chart */}

      {/* reset button */}
      <button
        onClick={() => setModalOpen(true)}
        className='absolute px-[73px] py-[28px] text-[#2C744D] font-sans font-semibold leading-7 rounded-[16px] border border-[#CFF7AA] right-[526px] text-5xl bg-gradient-to-r bg-gradient-[93deg] from-[#AFE47E] to [#D8FAB9] top-[1129px]'>
        Reset
      </button>

      {/* modal section */}
      {modalOpen && (
        <div className='fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center overflow-x-hidden'>
          <section className=' w-[1030px] h-[341px] left-[244px] top-[321px] bg-white  rounded-[18px] border-2 border-solid border-dark-green-color absolute inset-0 overflow-auto'>
            <p className='absolute left-[64px] top-[59px] text-dark-green-color font-semibold text-5xl  tracking-[0.8px]'>
              Add Hours of Sleep
            </p>
            <p className='absolute left-[396px] top-[144px] text-dark-green-color text-lg font-normal'>(0-24 hours)</p>
            <input
              type='text'
              placeholder='0'
              value={modalInputValue}
              onChange={(e) => setModalInputValue(e.target.value)}
              className='w-[221px] h-[96px] left-[394px] top-[30px] absolute rounded-[18px] border border-strokegreen-color text-center shadow-md2 placeholder:text-center'
            />
            <p className='absolute left-[639px] top-[63px] text-dark-green-color text-lg font-normal '>Hours</p>
            <button
              onClick={() => handleModalDone()}
              className='absolute left-[960px] top-[16px] rounded-md bg-dark-green-color  text-white px-4 border py-2  hover:bg-dark-green-color-darker'>
              X
            </button>

            <button
              onClick={() => handleModalDone()}
              className='absolute px-[73px] py-[28px] text-[#2C744D] font-sans font-semibold leading-7 rounded-[16px] border border-[#CFF7AA] left-[411px]  text-5xl bg-gradient-to-r bg-gradient-[93deg] from-[#AFE47E] to [#D8FAB9] top-[226px]'>
              Done
            </button>
          </section>
        </div>
      )}
      {/* modal section */}
      {/* reset button */}
    </div>
  );
};

export default StepsTracker;
