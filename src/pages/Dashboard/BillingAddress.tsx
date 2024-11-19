
import { MdLocationOn } from 'react-icons/md';
import React from "react";
import { FaUserEdit } from 'react-icons/fa';

const BillingAddress: React.FC = () => {
  return (
    <div className="bg-white shadow-xl p-8 rounded-lg">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Billing Address</h3>
      <div className="flex items-center">
        <MdLocationOn className="mr-2 text-gray-600" />
        <p className="text-sm text-gray-600">Dianne Russell</p>
      </div>
      <p className="text-sm text-gray-600">3517 W. Gray St. Utica, New Mexico</p>
      <p className="text-sm text-gray-600">dianne.russell@example.com</p>
      <p className="text-sm text-gray-600">(211) 684-9901</p>
      <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200 flex items-center">
        <FaUserEdit className="mr-2" />
        Edit Address
      </button>
    </div>
  );
};

export default BillingAddress;
