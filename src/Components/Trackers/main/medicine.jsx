import React, { useState } from 'react';
import Medical from './MediCard.json';

const Medicine = () => {
  const [medicine, setMedicine] = useState("");

  return (
    <div>
      {Medical.data.map((data) => (
        <div key={data.id}>
          <h2>{data.name}</h2>
          <img src={data.image} alt={data.name} />
        </div>
      ))}
    </div>
  );
};

export default Medicine;
