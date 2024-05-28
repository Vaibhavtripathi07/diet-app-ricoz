import React from 'react'
import Sidebar from "./Sidebar"
import Nav from '../Top_Nav/Nav'
import PersonalHeader from '../Pesonal_details/PersonalHeader'
// import Appointment_track from '../Appointment/Appointment_track'
// import Appinment_overview2 from '../Appointment/Appointment_overview2'
import Order from "../MyOrder/Order"
import PersonalDetails2 from '../Pesonal_details/PersonalDetails2'
import ChangePassword from '../Password/ChangePassword'
import Accordion from './Accordion'
import UnitMeasurement from '../UnitMeasurement/UnitMeasurement'

const ProPic = () => {
  return (
    <>
 <div className=" bg-whitesmoke  overflow-hidden w-[1512px] h-[1286px]   text-left text-5xl  font-sans xl:w-full">
   <Nav/>
   <Sidebar  />
   <PersonalHeader/>
   <ChangePassword/>
   {/* <UnitMeasurement/> */}


</div>

  </>
  )
}

export default ProPic;





