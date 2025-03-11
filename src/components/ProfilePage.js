import React from 'react';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-black flex flex-col">
      
      {/* Header */}
      <div className="bg-[#86efac] px-6 py-4 flex justify-between items-center text-white">
        <div className="flex items-center font-bold text-lg">
          <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2 fill-current">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
            <path d="M7 12h2v5H7v-5zm4-7h2v12h-2V5zm4 4h2v8h-2v-8z"/>
          </svg>
          CivicFix Admin
        </div>
        <div className="flex space-x-6 text-sm font-medium">
          <Link to="/" className="hover:underline">Report Tracking</Link>
          <Link to="/contractors" className="mr-4 hover:underline">Contractors</Link>
          <Link to="/profile" className="hover:underline">Profile</Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center py-10">
        <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl px-8 py-10 text-center">
          {/* Profile Picture */}
          <div className="w-28 h-28 mx-auto rounded-full border-4 border-gray-300 flex items-center justify-center mb-4 bg-gray-200">
            <svg viewBox="0 0 24 24" className="w-14 h-14 text-gray-700">
              <path d="M12 12c2.7 0 4.9-2.2 4.9-4.9S14.7 2.2 12 2.2 7.1 4.4 7.1 7.1 9.3 12 12 12zm0 2.4c-3.2 0-9.5 1.6-9.5 4.9v2.5h19v-2.5c0-3.3-6.3-4.9-9.5-4.9z"/>
            </svg>
          </div>

          {/* Name and ID */}
          <div className="bg-green-400 inline-block px-4 py-2 rounded-full text-black font-semibold text-lg mb-1">
            Anushka Agarwal
          </div>
          <div className="text-gray-700 text-sm font-medium mb-6">AdminID: 100428938</div>

          {/* Logout Button */}
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Log Out
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="text-xs text-gray-500 border-t border-gray-300 px-6 py-4 flex justify-between">
        <span>© 2025 CivicFix Dashboard. All Rights Reserved.</span>
        <div className="flex space-x-4">
          <span className="hover:underline cursor-pointer">Privacy Policy</span>
          <span className="hover:underline cursor-pointer">Terms of Service</span>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;