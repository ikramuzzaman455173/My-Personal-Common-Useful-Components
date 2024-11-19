
import { FaUserEdit } from 'react-icons/fa';
import React from "react";

const ProfileCard: React.FC = () => {
  return (
    <div className="flex items-center bg-white shadow-xl p-8 rounded-lg transition-transform transform hover:scale-105">
      <div className="relative w-24 h-24 mr-6">
        <img
          src="https://via.placeholder.com/80"
          alt="Profile"
          className="rounded-full cover object-fit"
        />
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">Dianne Russell</h2>
        <p className="text-sm text-gray-500">Customer</p>
        <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200 flex items-center">
          <FaUserEdit className="mr-2" /> {/* Edit Icon */}
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
