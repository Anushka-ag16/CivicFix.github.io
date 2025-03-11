import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReportTrackingPage from "./components/ReportTrackingPage";
import ProfilePage from "./components/ProfilePage";
import ContractorsPage from "./components/ContractorsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ReportTrackingPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/contractors" element={<ContractorsPage />} />
      </Routes>
    </Router>
  );
}

// Simple 404 Page Component
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-gray-600">
      <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
      <p className="text-lg mt-2">The page you're looking for doesn't exist.</p>
    </div>
  );
};

export default App;