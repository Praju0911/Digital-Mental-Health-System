"use client";

import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterLevel, setFilterLevel] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userHistory, setUserHistory] = useState([]);
  const rowsPerPage = 10;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/admin/getUsers");
        const data = await res.json();
        setUsersData(data);
      } catch (err) {
        console.error("Error fetching admin data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const filteredData = usersData.filter((user) => {
    const searchMatch =
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.uid.toLowerCase().includes(search.toLowerCase());

    const levelMatch =
      filterLevel === "all"
        ? true
        : filterLevel === "low"
        ? user.stressLevel < 4
        : filterLevel === "medium"
        ? user.stressLevel >= 4 && user.stressLevel <= 7
        : filterLevel === "high"
        ? user.stressLevel > 7
        : filterLevel === "na"
        ? user.stressLevel === "N/A"
        : true;

    return searchMatch && levelMatch;
  });

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const getRowColor = (stressLevel) => {
    if (stressLevel === "N/A") return "bg-gray-200";
    if (stressLevel < 4) return "bg-green-100";
    if (stressLevel <= 7) return "bg-yellow-100";
    return "bg-red-100";
  };

  // Quick summary counts
  const lowCount = usersData.filter(u => u.stressLevel !== "N/A" && u.stressLevel < 4).length;
  const mediumCount = usersData.filter(u => u.stressLevel >= 4 && u.stressLevel <= 7).length;
  const highCount = usersData.filter(u => u.stressLevel > 7).length;
  const naCount = usersData.filter(u => u.stressLevel === "N/A").length;

  // Fetch stress history for selected user
  const handleUserClick = async (user) => {
    setSelectedUser(user);
    try {
      const res = await fetch(`/api/admin/getUserHistory?uid=${user.uid}`);
      const history = await res.json();
      setUserHistory(history.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)));
    } catch (err) {
      console.error("Error fetching user history:", err);
      setUserHistory([]);
    }
  };

  const closeModal = () => {
    setSelectedUser(null);
    setUserHistory([]);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">
        Admin Dashboard - Student Stress Levels
      </h1>

      {/* Quick Summary */}
      <div className="flex flex-wrap gap-4 mb-4">
        <div className="px-4 py-2 bg-green-200 rounded font-semibold">Low Stress: {lowCount}</div>
        <div className="px-4 py-2 bg-yellow-200 rounded font-semibold">Medium Stress: {mediumCount}</div>
        <div className="px-4 py-2 bg-red-200 rounded font-semibold">High Stress: {highCount}</div>
        <div className="px-4 py-2 bg-gray-200 rounded font-semibold">N/A: {naCount}</div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-4 items-center">
        <span className="flex items-center gap-2"><div className="w-4 h-4 bg-green-400 rounded-sm"></div> Low (0-3)</span>
        <span className="flex items-center gap-2"><div className="w-4 h-4 bg-yellow-400 rounded-sm"></div> Medium (4-7)</span>
        <span className="flex items-center gap-2"><div className="w-4 h-4 bg-red-400 rounded-sm"></div> High (8-10)</span>
        <span className="flex items-center gap-2"><div className="w-4 h-4 bg-gray-400 rounded-sm"></div> N/A</span>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by email or UID"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={filterLevel}
          onChange={(e) => setFilterLevel(e.target.value)}
          className="px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Levels</option>
          <option value="low">Low (0-3)</option>
          <option value="medium">Medium (4-7)</option>
          <option value="high">High (8-10)</option>
          <option value="na">N/A</option>
        </select>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-indigo-600 text-white">
                <tr>
                  <th className="py-3 px-6 text-left">Email</th>
                  <th className="py-3 px-6 text-left">UID</th>
                  <th className="py-3 px-6 text-left">Stress Level</th>
                  <th className="py-3 px-6 text-left">Last Updated</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((user) => (
                  <tr
                    key={user.uid}
                    className={`border-b hover:bg-gray-50 cursor-pointer ${getRowColor(user.stressLevel)}`}
                    onClick={() => handleUserClick(user)}
                  >
                    <td className="py-3 px-6">{user.email}</td>
                    <td className="py-3 px-6">{user.uid}</td>
                    <td className="py-3 px-6">{user.stressLevel} / 10</td>
                    <td className="py-3 px-6">{user.updatedAt ? new Date(user.updatedAt).toLocaleString() : "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-4">
            <button onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} disabled={currentPage === 1} className="px-3 py-1 rounded border disabled:opacity-50">Prev</button>
            <span>Page {currentPage} of {totalPages}</span>
            <button onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages} className="px-3 py-1 rounded border disabled:opacity-50">Next</button>
          </div>
        </>
      )}

      {/* Modal for user history */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-lg relative">
            <h2 className="text-xl font-bold mb-4">{selectedUser.email} - Stress History</h2>
            <button onClick={closeModal} className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 font-bold text-lg">×</button>
            {userHistory.length === 0 ? (
              <p>No stress entries yet.</p>
            ) : (
              <ul className="space-y-2 max-h-64 overflow-y-auto">
                {userHistory.map((entry, idx) => (
                  <li key={idx} className="border rounded p-2 flex justify-between bg-gray-50">
                    <span>Stress Level: {entry.stressLevel} / 10</span>
                    <span>{new Date(entry.timestamp).toLocaleString()}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
