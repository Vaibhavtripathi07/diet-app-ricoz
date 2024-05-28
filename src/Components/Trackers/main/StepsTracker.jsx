import React , { PureComponent ,useState} from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Date from "../../../asset/date.png"
import previous from "../../../asset/previous.png"
import steps_chart from "../../../asset/steps_chart.png"
import Sidebar from '../../ProPic/Sidebar';
import Nav from "../../Top_Nav/Nav"
import steps from "../../../asset/steps.png"

const StepsTracker = () => {

  const [modalOpen, setModalOpen] = useState(false);
// sleep chart data
const [stepsData, setStepsData] = useState([
  {
  
  },
  {
    name: 'Sun',
    pv: 6,
  },
  {
    name: 'Mon',
    pv: 3.9,
  },
  {
    name: 'Tue',
    pv: 4.1,
  },
  {
    name: 'Wed',
    pv: 6.3,
  },
  {
    name: 'Thu',
    pv: 7.9,
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
  
  }
])

const handleModalDone = () => {
  // Validate the input value (assuming it should be a number between 0 and 24)
  const hours = parseFloat(modalInputValue);
  if (!isNaN(hours) && hours >= 0 && hours <= 24) {
    // Update sleep data with the new value
    const updatedStepsData = [...stepsData];
    updatedStepsData.push({ name: 'New Day', pv: hours });
    setStepsData(updatedStepsData);
  }

  // Close the modal
  setModalOpen(false);
};

const yTicks = [0, 2, 4, 6, 8]; // Your custom Y-axis values

  return (
    <div className='relative w-full h-[1286px] overflow-hidden font-sans bg-whitesmoke '>
    {/* Nav */}
<Nav/>
{/* Nav */}

{/* sidebar */}
<Sidebar/>
{/* sidebar */}

      {/* main */}
      <img src={previous} alt="" className='absolute top-[178px] left-[436px]'/>
       <h1 className='absolute left-[512px] top-[170px] text-dark-green-color font-semibold text-17xl font-inherit'>Steps Trackers</h1>
      <img src={Date} alt="date" height={40} width={40} className='absolute left-[1432px] top-[171px] w-[40px] h-[40px]' />
        <p className='absolute left-[512px] top-[224px] font-normal text-5xl text-grey-color leading-[28.8px] '>Tuesday, July 25, 2023</p>

        {/* steps left section */}
        <section>
<p className='absolute left-[598px] top-[375px] text-black text-5xl leading-7 font-bold'>4280 steps</p>
<p className='absolute left-[600px] top-[408px] rounded-full bg-[#F08C0A] stroke-[#F7F5BD] stroke-1 w-[30px] h-[30px]'><span className='absolute text-black text-5xl font-normal leading-7 left-9'>Walked</span></p>
<p className='absolute left-[582px] top-[489px] text-black text-5xl leading-7 font-bold'>2720 steps</p>
<p className='absolute left-[566px] top-[522px] rounded-full bg-[#FBEAC9] stroke-[#F08C0A] stroke-1 w-[30px] h-[30px]'><span className='absolute text-black text-5xl font-normal leading-7 left-9 '>Remaining </span></p>
</section>
        {/* steps left section */}

{/* steps midlle section */}
<section>
  <img src={steps} width={96} height={88} alt=""className='absolute top-[290px] left-[1091px]'/>
  <img src={steps_chart} width={242} height={260} alt="" className='absolute  left-[841px] top-[317px] '/>
  <p className='absolute left-[900px] top-[386px] text-[#F08C0A] text-center font-montserrat font-semibold leading-[68px] text-[57px]'>7000</p>
  <p className='absolute top-[472px] left-[929px] text-[#F08C0A] text-[28px] font-montserrat font-medium leading-8 text-center'>Steps</p>
  <img src={steps} width={96} height={90} alt="" className='absolute  top-[547px] left-[789px]'/>
</section>


{/* steps midlle section */}


{/* sleep midlle section */}


{/* Steps Line Chart */}

  
<ResponsiveContainer width="50%" height="30%" className="absolute w-[476px] h-[288px] top-[735px] right-[321px]">
        <LineChart
          width={476}
          height={278}
          data={stepsData}
          margin={{
            top: 5,
            right: 20,
            left: 40,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="name" strokeWidth={1}/>
          <YAxis ticks={yTicks}  />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#F08C0A" strokeWidth={2}  activeDot={{ r: 8 }} />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
      </ResponsiveContainer>
    





{/* Steps Line Chart */}
{/* reset button */}

<button   onClick={() => setModalOpen(true)} className='absolute px-[73px] py-[28px] text-[#2C744D] font-sans font-semibold leading-7 rounded-[16px] border border-[#CFF7AA] right-[526px] text-5xl bg-gradient-to-r bg-gradient-[93deg] from-[#AFE47E] to [#D8FAB9] top-[1129px]' >Reset</button>

{modalOpen && (
  <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
    <section className="absolute w-[1030px] h-[341px] bg-white p-8 rounded-[18px] border-2 border-solid border-dark-green-color">
      <p className="absolute left-[24px] top-[59px] text-dark-green-color font-semibold text-3xl ">Add number of Steps</p>
      <p className="absolute left-[24px] top-[110px] text-dark-green-color text-lg ">(per day)</p>
      <input
        type="text"
        placeholder="0"
        className="w-[221px] h-[96px] left-[394px] top-[30px] absolute rounded border border-strokegreen-color shadow-md2 placeholder:text-center"
      />
        <p className="absolute left-[639px] top-[63px] text-dark-green-color text-lg ">Steps</p>
      <button 
        onClick={() => setModalOpen(false)}
        className="absolute left-[960px] top-[16px] rounded-md bg-dark-green-color text-white px-4 border py-2  hover:bg-dark-green-color-darker"
      >
        X
      </button>
      {/* <button 
        className="mt-4 bg-dark-green-color text-white px-4 border py-2 rounded hover:bg-dark-green-color-darker"
      >
        X
      </button> */}

      <button className='absolute px-[73px] py-[28px] text-[#2C744D] font-sans font-semibold leading-7 rounded-[16px] border border-[#CFF7AA] left-[411px]  text-5xl bg-gradient-to-r bg-gradient-[93deg] from-[#AFE47E] to [#D8FAB9] top-[226px]'>Reset</button>
    </section>
  </div>
)}


{/* reset button */}
      {/* main */}
    </div>
  )
}

export default StepsTracker


