import { useState } from 'react';
import dayjs from 'dayjs';

const Dates = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  
  const prevDate1 = currentDate.subtract(1, 'day');
  const prevDate2 = currentDate.subtract(2, 'day');
  
  const nextDate1 = currentDate.add(1, 'day');
  const nextDate2 = currentDate.add(2, 'day');

  return (
    <section className="flex absolute w-[1034px] h-[242px]  ml-[436px] mt-[317px] justify-between">
      <section className="h-[128px] w-[132px] rounded-[12px] bg-base-green-lightcolors text-center font-sans text-5xl text-dark-green-color font-semibold py-5 px-2 leading-[37px] ">
        {prevDate2.format('DD MMM ddd')}  
      </section>
      <section className="h-[128px] w-[132px] rounded-[12px] bg-base-green-lightcolors text-center font-sans text-5xl text-dark-green-color font-semibold py-5 px-5 leading-[37px]">
        {prevDate1.format('DD MMM ddd')}
      </section>

{/* scale in pecentage */}
      <section className="w-[200px] h-[194px] rounded-[15px] bg-base-green-lightcolors text-center font-sans text-13xl  text-dark-green-color font-semibold py-5 px-8 leading-[37px]">
        {currentDate.format('DD MMM ddd')}

        <section className="w-[172px] h-[74px]  mt-[60px] -ml-[17px] rounded-[12px] border-none outline-none  bg-dark-green-color text-white py-[13px] text-center font-sans text-13xl font-semibold">Today</section>
      </section>
{/* only scale in pecentage */}

      <section className="h-[128px] w-[132px] rounded-[12px] bg-base-green-lightcolors text-center font-sans text-5xl text-dark-green-color font-semibold py-5 px-3 leading-[37px]">
        {nextDate1.format('DD MMM ddd')}
      </section>
      <section className="h-[128px] w-[132px] rounded-[12px] bg-base-green-lightcolors text-center font-sans text-5xl text-dark-green-color font-semibold py-5 px-2 leading-[37px]">
        {nextDate2.format('DD MMM ddd')}  
      </section>
    </section>
  );
}

export default Dates;