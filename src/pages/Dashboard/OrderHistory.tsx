

import React from "react";
import { FaEye } from "react-icons/fa"; // Importing the eye icon from React Icons

const OrderHistory: React.FC = () => {
  const orders = [
    { id: "#125", date: "5 May, 2020", total: "$130.00", status: "Processing" },
    { id: "#126", date: "24 May, 2020", total: "$320.00", status: "On the way" },
    { id: "#127", date: "3 Mar, 2020", total: "$95.00", status: "Completed" },
    { id: "#128", date: "17 Mar, 2020", total: "$150.00", status: "Completed" },
    { id: "#129", date: "20 Oct, 2020", total: "$230.00", status: "Completed" },
    { id: "#130", date: "22 Nov, 2020", total: "$450.00", status: "Processing" },
    { id: "#131", date: "5 Jan, 2021", total: "$120.00", status: "On the way" },
    { id: "#132", date: "10 Feb, 2021", total: "$210.00", status: "Completed" },
    { id: "#133", date: "13 Mar, 2021", total: "$175.00", status: "Completed" },
    { id: "#134", date: "1 May, 2021", total: "$300.00", status: "On the way" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-3xl font-semibold text-gray-800">Recent Order History</h3>
          <button className="text-indigo-600 hover:text-indigo-700 font-medium transition duration-200">
            View All Orders
          </button>
        </div>

        {/* Table with horizontal scroll */}
        <div className="overflow-x-auto bg-gray-50 p-4 rounded-lg shadow-sm">
          <table className="min-w-full table-auto text-sm text-gray-700">
            <thead className="text-left text-gray-500 uppercase bg-gray-100 border-b">
              <tr>
                <th className="py-3 px-6 font-medium text-sm">Order ID</th>
                <th className="py-3 px-6 font-medium text-sm">Date</th>
                <th className="py-3 px-6 font-medium text-sm">Total</th>
                <th className="py-3 px-6 font-medium text-sm">Status</th>
                <th className="py-3 px-6 font-medium text-sm">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-indigo-50 transition duration-300">
                  <td className="py-4 px-6 max-w-xs truncate">{order.id}</td>
                  <td className="py-4 px-6 max-w-xs truncate">{order.date}</td>
                  <td className="py-4 px-6 font-medium">{order.total}</td>
                  <td className={`py-4 px-6 text-sm ${order.status === "Completed" ? "text-green-600" : order.status === "On the way" ? "text-yellow-500" : "text-blue-600"}`}>
                    {order.status}
                  </td>
                  <td className="py-4 px-6">
                    <button className="text-indigo-600 hover:text-indigo-700 transition duration-200 flex items-center gap-1">
                      <FaEye /> View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
