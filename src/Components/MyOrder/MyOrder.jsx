import React from 'react'
import Sidebar from ".././ProPic/Sidebar"
import Nav from ".././Top_Nav/Nav"
import Order from "./Order"

const MyOrder = () => {
  return (
    <div className='relative h-[1286px] w-full overflow-hidden text-5xl font-sans '>
      {/* nav */}
      <Nav/>
      {/* nav */}
      {/* sidebar */}
      <Sidebar/>
      {/* sidebar */}

      {/* Order */}
      <Order/>
      {/* Order */}
    </div>
  )
}

export default MyOrder
