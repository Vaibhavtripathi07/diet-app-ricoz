import React from 'react';
import { Link } from 'react-router-dom';


const UserRegistrationForm = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">User Registration</h2>
      <div className="mb-4">
        <Link to="/Signup" className="block text-blue-600 hover:underline">
          Create User Account
        </Link>
      </div>
      <div>
        <Link to="/NutritionalistSignup" className="block text-blue-600 hover:underline">
          Create Nutritionalist Account
        </Link>
      </div>
    </div>
  );
};

export default UserRegistrationForm;
