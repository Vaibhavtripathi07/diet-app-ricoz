import React from 'react'
import {  Circle } from 'rc-progress';

const calorieProg = () => {
  return (
    <div>
        <Circle percent={50} strokeWidth={8} trailWidth={6} trailColor="#FFDCFE" strokeColor="#FD9AF9" className=' w-[260px] h-[248px] absolute left-[832px] top-[317px]' /> 
        <Circle percent={50} strokeWidth={8} trailWidth={6} trailColor="#FFDCFE" strokeColor="#FD9AF9" className=' w-[210px] h-[222px] absolute left-[832px] top-[317px]' /> 
    </div>
  )
}

export default calorieProg
