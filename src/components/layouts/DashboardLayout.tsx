import { useState } from 'react';
import Navbar from '../ui/Navbar/Navbar';
import Sidebar from '../../pages/Dashboard/Sidebar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      {/* Toggle button for mobile screens */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 bg-yellow-500 hover:bg-yellow-400 text-white p-2 rounded-lg text-gray-900 hover:text-gray-700 focus:outline-none z-50 transition-all duration-300"
      >
        {isSidebarOpen ? '✖' : '☰'}
      </button>

      {/* Navbar */}
      <Navbar />

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <Sidebar
          userRole="admin"
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />

        {/* Main content */}
        <div
          className={`flex-1 p-4 sm:p-6 md:p-8 transition-all duration-300 ${
            isSidebarOpen ? 'ml-64' : 'ml-0'
          }`}
        >
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
