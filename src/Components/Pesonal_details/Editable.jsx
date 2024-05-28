import React, { useState } from 'react';
import Edit from "../../asset/Edit.png"

const EditableParagraph = ({ initialValue }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(initialValue);


  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleDoneClick = () => {
    setIsEditing(false);
    // Handle updating the value (you can use this function to update your state or send it to the parent component)
    console.log('Updated value:', editedValue);
  };

  return (
    <div className="flex items-center">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedValue}
            onChange={(e) => setEditedValue(e.target.value)}
            className="mr-2 px-2 py-1 border rounded"
          />
          <button
            onClick={handleDoneClick}
            className="bg-blue-500 text-white px-2 py-1 rounded"
          >
            Done
          </button>
        </div>
      ) : (
        <div>
          <p className="mr-2 text-5xl text-black font-normal font-inherit">{editedValue}</p>
          <img
            src={Edit}
            alt=""
            className="cursor-pointer w-[23px] h-[18px]"
            onClick={handleEditClick}
          />
        </div>
      )}
    </div>
  );
};

export default EditableParagraph;
