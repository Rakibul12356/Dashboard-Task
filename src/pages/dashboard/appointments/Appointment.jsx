import React, { useState } from 'react';

// Sample appointments data
const appointmentsData = [
  { id: 1, clientName: 'Jane D', phone: '01960685765', email: 'admin@gmail.com', device: 'Apple/Iphone 13pro', repairType: 'Screen', date: '02/06/2026', slotNo: 1, startTime: '09:00' },
  { id: 2, clientName: 'Jane D', phone: '01960685765', email: 'admin@gmail.com', device: 'Apple/Iphone 13pro', repairType: 'Screen', date: '02/06/2026', slotNo: 1, startTime: '10:00' },
  { id: 3, clientName: 'Jane D', phone: '01960685765', email: 'admin@gmail.com', device: 'Apple/Iphone 13pro', repairType: 'Screen', date: '02/06/2026', slotNo: 1, startTime: '11:00' },
  { id: 4, clientName: 'Jane D', phone: '01960685765', email: 'admin@gmail.com', device: 'Apple/Iphone 13pro', repairType: 'Screen', date: '02/06/2026', slotNo: 1, startTime: '12:00' },
  { id: 5, clientName: 'Jane D', phone: '01960685765', email: 'admin@gmail.com', device: 'Apple/Iphone 13pro', repairType: 'Screen', date: '02/06/2026', slotNo: 1, startTime: '02:00' },
  { id: 6, clientName: 'Jane D', phone: '01960685765', email: 'admin@gmail.com', device: 'Apple/Iphone 13pro', repairType: 'Screen', date: '02/06/2026', slotNo: 1, startTime: '03:00' },
];

// Stat Card Component
const StatCard = ({ icon, label, value, subtext, subtextColor }) => (
  <div className="bg-[#0F172B80] rounded-xl p-5 border border-[#2B7FFF33] h-36.5">
    <div className="flex items-center gap-2 text-white/60  mb-2">
      {icon}
      <span className='text-sm'>{label}</span>
    </div>
    <p className="text-white text-3xl font-semibold">{value}</p>
    <p className={`text-sm mt-1 ${subtextColor || 'text-white/50'}`}>{subtext}</p>
  </div>
);

const Appointment = () => {
  const [currentPage, setCurrentPage] = useState(2);
  const [copied, setCopied] = useState(false);
  const totalPages = 11;
  const bookingLink = 'https://techstore.com/book?id=store123';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(bookingLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= 5; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm transition-colors ${currentPage === i
              ? 'bg-[#A6C8FF] text-white'
              : 'text-[#0F62FE]'
            }`}
        >
          {i}
        </button>
      );
    }
    pages.push(
      <span key="dots" className="text-white/40 px-2">...</span>
    );
    pages.push(
      <button
        key={totalPages}
        onClick={() => setCurrentPage(totalPages)}
        className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm transition-colors ${currentPage === totalPages
            ? 'bg-[#A6C8FF] text-white'
            : 'text-[#0F62FE]'
          }`}
      >
        {totalPages}
      </button>
    );
    return pages;
  };

  return (
    <div className="min-h-screen p-4 sm:p-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-6">
        <StatCard
          icon={
            <svg className="w-5 h-5" style={{ color: '#51A2FF' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          }
          label="Total Booked"
          value="34"
          subtext="+8 this week"
          subtextColor="text-green-400"
        />
        <StatCard
          icon={
            <svg className="w-5 h-5" style={{ color: '#05DF72' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
          label="AI Booked"
          value="28"
          subtext="82% of total"
          subtextColor="text-white/50"
        />
        <StatCard
          icon={
            <svg className="w-5 h-5" style={{ color: '#FDC700' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
          label="Pending"
          value="3"
          subtext="Awaiting confirmation"
          subtextColor="text-white/50"
        />
      </div>

      {/* Booking Link */}
      <div className="bg-gradient-to-br from-[#1A1A2E] to-[#16213E]
 rounded-xl p-4 sm:p-5 border border-white/5 mb-6">
        <p className="text-white text-sm mb-3">Booking Link</p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="flex-1 bg-[#0A0A0F80] border border-[#00FF8833] rounded-lg px-4 py-3">
            <p className="text-white text-sm truncate">{bookingLink}</p>
          </div>
          <button
            onClick={handleCopyLink}
            className="bg-white/10 hover:bg-white/20 text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors border border-white/10 whitespace-nowrap"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
            </svg>
            {copied ? 'Copied!' : 'Copy Link'}
          </button>
        </div>
      </div>

      {/* Appointments Table */}
      <div className="bg-[#111B3B] rounded-xl border border-[#2B7FFF33] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-200">
            <thead>
              <tr className="border-b border-[#2B7FFF33]">
                <th className="text-left text-white/60 text-sm font-medium px-4 sm:px-6 py-4 whitespace-nowrap">Client Name</th>
                <th className="text-left text-white/60 text-sm font-medium px-4 sm:px-6 py-4 whitespace-nowrap">Client Phone</th>
                <th className="text-left text-white/60 text-sm font-medium px-4 sm:px-6 py-4 whitespace-nowrap">Client mail</th>
                <th className="text-left text-white/60 text-sm font-medium px-4 sm:px-6 py-4 whitespace-nowrap">Device</th>
                <th className="text-left text-white/60 text-sm font-medium px-4 sm:px-6 py-4 whitespace-nowrap">Repair Type</th>
                <th className="text-left text-white/60 text-sm font-medium px-4 sm:px-6 py-4 whitespace-nowrap">Date</th>
                <th className="text-left text-white/60 text-sm font-medium px-4 sm:px-6 py-4 whitespace-nowrap">Slot no</th>
                <th className="text-left text-white/60 text-sm font-medium px-4 sm:px-6 py-4 whitespace-nowrap">Start Time</th>
              </tr>
            </thead>
            <tbody>
              {appointmentsData.map((appointment) => (
                <tr key={appointment.id} className="border-b border-[#2B7FFF33] hover:bg-white/5 transition-colors">
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <span className="text-[#51A2FF]">{appointment.clientName}</span>
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-[#CFCFCF] whitespace-nowrap">{appointment.phone}</td>
                  <td className="px-4 sm:px-6 py-4 text-[#CFCFCF] whitespace-nowrap">{appointment.email}</td>
                  <td className="px-4 sm:px-6 py-4 text-[#CFCFCF] whitespace-nowrap">{appointment.device}</td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <span className="text-[#CFCFCF]">{appointment.repairType}</span>
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-[#CFCFCF] whitespace-nowrap">{appointment.date}</td>
                  <td className="px-4 sm:px-6 py-4 text-[#CFCFCF] whitespace-nowrap">{appointment.slotNo}</td>
                  <td className="px-4 sm:px-6 py-4 text-[#CFCFCF] whitespace-nowrap">{appointment.startTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


      </div>
      {/* Pagination */}
      <div className="flex flex-wrap items-center justify-center gap-2 px-4 sm:px-6 py-4 border-t border-white/5">
        <button
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          className="flex items-center gap-1 text-white/60 hover:text-white px-2 sm:px-3 py-2 transition-colors text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Previous
        </button>

        <div className="flex items-center gap-1">
          {renderPageNumbers()}
        </div>

        <button
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          className="flex items-center gap-1 text-[#0F62FE] px-3 py-2 transition-colors"
        >
          Next
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Appointment;