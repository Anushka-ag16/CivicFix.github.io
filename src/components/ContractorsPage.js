import React from 'react';
import { Link } from 'react-router-dom';

const contractors = [
  { name: 'Contractor A', total: 91, completed: 76 },
  { name: 'Contractor B', total: 108, completed: 102 },
  { name: 'Contractor C', total: 36, completed: 27 },
  { name: 'Contractor D', total: 58, completed: 51 },
  { name: 'Contractor E', total: 72, completed: 68 }
];

const ContractorsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      {/* Header */}
<div className="flex justify-between items-center px-7 py-4 bg-[#86efac] shadow-md text-white">
  <div className="flex items-center">
    <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2 fill-current text-white">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
      <path d="M7 12h2v5H7v-5zm4-7h2v12h-2V5zm4 4h2v8h-2v-8z"/>
    </svg>
    <span className="font-bold">CivicFix Admin</span>
  </div>
  <div className="flex text-sm font-semibold">
    <Link to="/" className="mr-4 hover:underline text-white">Report Tracking</Link>
    <Link to="/contractors" className="mr-4 hover:underline text-white">Contractors</Link>
    <Link to="/profile" className="hover:underline text-white">Profile</Link>
  </div>
</div>
      {/* Main content */}
      <div className="flex-1 p-8">
        <h2 className="text-xl font-bold mb-6">Contractors Information</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {contractors.map((contractor, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg shadow p-6 text-center hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 rounded-full border-4 border-gray-500 flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.7 0 4.9-2.2 4.9-4.9S14.7 2.2 12 2.2 7.1 4.4 7.1 7.1 9.3 12 12 12zm0 2.4c-3.2 0-9.5 1.6-9.5 4.7v2.1h19v-2.1c0-3.1-6.3-4.7-9.5-4.7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-md font-semibold">{contractor.name}</h3>
              <p className="text-sm mt-2">Total Issues: {contractor.total}</p>
              <p className="text-sm">Completed Issues: {contractor.completed}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-3 bg-gray-50 text-xs text-gray-500 flex justify-between">
        <div>© 2025 CivicFix. All Rights Reserved.</div>
        <div className="flex space-x-4">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </div>
  );
};

export default ContractorsPage;