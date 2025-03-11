import React, { useState } from 'react';

import { Link } from 'react-router-dom';



const ReportTrackingPage = () => {

  const initialReports = [

    {

      id: 1,

      title: "Report #003",

      submissionDate: "2025-04-16",

      status: "Pending",

      deadline: "",

      notes: "Pothole",

    },

    {

      id: 2,

      title: "Report #002",

      submissionDate: "2025-03-12",

      status: "In Progress",

      deadline: "2025-03-18",

      notes: "Garbage dump",

    },

    {

      id: 3,

      title: "Report #001",

      submissionDate: "2025-02-28",

      status: "Pending",

      deadline: "",

      notes: "Broken streetlight",

    },

  ];



  const [reports, setReports] = useState(initialReports);

  const [editingId, setEditingId] = useState(null);

  const [newDeadline, setNewDeadline] = useState("");



  const handleStatusChange = (id) => {

    const report = reports.find(r => r.id === id);

    const submissionDate = new Date(report.submissionDate);

    const deadlineDate = new Date(newDeadline);



    if (deadlineDate > submissionDate) {

      const updatedReports = reports.map(r =>

        r.id === id ? { ...r, status: "In Progress", deadline: newDeadline } : r

      );

      setReports(updatedReports);

      setEditingId(null);

      setNewDeadline("");

    } else {

      alert("Please enter a deadline after the submission date.");

    }

  };



  return (

    <div className="flex flex-col min-h-screen bg-gray-90 text-white">



      {/* Fixed Header */}

      <div className="fixed top-0 left-0 w-full z-50 bg-[#86efac] px-7 py-4 shadow-md flex justify-between items-center text-white">

        <div className="flex items-center">

          <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2 fill-current text-white">

            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />

            <path d="M7 12h2v5H7v-5zm4-7h2v12h-2V5zm4 4h2v8h-2v-8z" />

          </svg>

          <span className="font-bold">CivicFix Admin</span>

        </div>

        <div className="flex text-sm font-semibold">

          <Link to="/" className="mr-4 hover:underline text-white">Report Tracking</Link>

          <Link to="/contractors" className="mr-4 hover:underline text-white">Contractors</Link>

          <Link to="/profile" className="hover:underline text-white">Profile</Link>

        </div>
      </div>



      {/* Main Content - offset for fixed header */}

      <div className="flex-1 flex justify-center px-4 pb-8 mt-20">

        <div className="w-full">



          {/* Banner */}

          <div className="relative h-60 w-full mb-2 transition transform hover:scale-[1.015] hover:shadow-lg duration-300 ease-in-out rounded-md overflow-hidden">

            <div className="absolute inset-0 bg-cover bg-center filter blur-sm" style={{ backgroundImage: "url('/assets/logo.jpg')" }} />

            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">

              <div className="text-center">

                <h1 className="text-5xl font-extrabold text-white leading-tight">

                  <span className="text-white">Civic</span>

                  <span className="text-[#86efac]">Fix</span>

                </h1>

                <p className="text-xl text-white mt-1 tracking-wider">Admin</p>

              </div>

            </div>

          </div>



          {/* Report Table */}

          <div className="px-6 pt-1 pb-3 text-black">

            <h2 className="text-lg font-bold mb-2 text-green-700">Submitted Reports</h2>



            <div className="overflow-x-auto bg-white shadow-md rounded-lg">

              <table className="w-full rounded-lg overflow-hidden">

                <thead className="bg-white text-black text-sm uppercase tracking-wide group">

                  <tr className="border-b-2 border-transparent transition-all duration-300 group-hover:border-green-500">

                    <th className="px-4 py-3 text-left">Report Title</th>

                    <th className="px-4 py-3 text-left">Submission Date</th>

                    <th className="px-4 py-3 text-left">Status</th>

                    <th className="px-4 py-3 text-left">Deadline</th>

                    <th className="px-4 py-3 text-left">Notes</th>

                    <th className="px-4 py-3 text-left">Actions</th>

                  </tr>

                </thead>

                <tbody>

                  {reports.map((report) => (

                    <tr key={report.id} className="bg-green-50 border-t transition">

                      <td className="px-4 py-3 text-sm">{report.title}</td>

                      <td className="px-4 py-3 text-sm">{report.submissionDate}</td>

                      <td className="px-4 py-3 text-sm flex items-center space-x-2">

                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${report.status === "In Progress"

                            ? "bg-blue-200 text-blue-800"

                            : "bg-yellow-200 text-yellow-800"

                          }`}>

                          {report.status}

                        </span>

                        {report.status === "Pending" && editingId !== report.id && (

                          <button

                            onClick={() => setEditingId(report.id)}

                            className="text-xs text-green-600 underline hover:text-green-800"

                          >

                            Start

                          </button>

                        )}

                      </td>

                      <td className="px-4 py-3 text-sm text-red-500 font-medium">

                        {report.deadline || "—"}

                        {editingId === report.id && (

                          <div className="mt-1 flex items-center space-x-2">

                            <input

                              type="date"

                              className="text-xs border border-gray-300 rounded px-2 py-1"

                              onChange={(e) => setNewDeadline(e.target.value)}

                            />

                            <button

                              onClick={() => handleStatusChange(report.id)}

                              className="bg-green-500 text-white text-xs px-2 py-1 rounded hover:bg-green-600"

                            >

                              Confirm

                            </button>

                          </div>

                        )}

                      </td>

                      <td className="px-4 py-3 text-sm">{report.notes}</td>

                      <td className="px-4 py-3 text-sm">

                        <div className="flex space-x-2">

                          <button className="px-4 py-2 text-xs font-semibold text-white bg-green-500 hover:bg-green-600 transition rounded-md shadow-sm">Download</button>

                          <button className="px-4 py-2 text-xs font-semibold text-white bg-gray-500 hover:bg-gray-600 transition rounded-md shadow-sm">View</button>

                        </div>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>



          {/* Footer */}

          <div className="px-6 py-3 bg-gray-50 text-xs text-gray-500 flex justify-between">

            <div>© 2025 CivicFix. All Rights Reserved.</div>

            <div className="flex space-x-4">

              <Link to="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-blue-600 hover:underline">Terms of Service</Link>

            </div>

          </div>



        </div>

      </div>

    </div>

  );

};



export default ReportTrackingPage;