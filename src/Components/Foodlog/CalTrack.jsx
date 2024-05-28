import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const CalTrack = () => {
  
  


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

 class Example extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="50%" outerRadius="80%" barSize={10} data={data}>
          <RadialBar minAngle={50} label={{ position: 'insideStart' }} background clockWise dataKey="uv" />
          {/* Remove Legend component */}
        </RadialBarChart>
      </ResponsiveContainer>
    );
  }
}
  

}

export default CalTrack
