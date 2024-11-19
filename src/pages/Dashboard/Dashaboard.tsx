const DashboardPage = () => {
    return (
      <div className="space-y-12">
        {/* User Info Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold">User Information</h2>
          <div className="mt-4 text-gray-600">
            <p>Name: John Doe</p>
            <p>Email: john.doe@example.com</p>
            <p>Role: Admin</p>
          </div>
        </div>
  
        {/* Analytics Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold">Analytics Overview</h2>
          <div className="mt-4">
            {/* Insert Chart or Graph Component */}
          </div>
        </div>
  
        {/* Recent Activity Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold">Recent Activity</h2>
          <div className="mt-4">
            <ul>
              <li>User John Doe logged in</li>
              <li>User Jane Smith updated profile</li>
              <li>Order #12345 completed</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default DashboardPage;
  