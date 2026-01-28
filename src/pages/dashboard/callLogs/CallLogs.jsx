import React, { useState } from 'react';

// Sample call data
const callsData = [
  {
    id: 1,
    phoneNumber: '+1 (555) 345-6789',
    date: '2025-12-16',
    time: '09:42 AM',
    duration: '5:23',
    outcome: 'Quote Provided',
    issueType: 'Screen',
    status: 'AI Resolved',
    statusColor: 'bg-green-500',
  },
  {
    id: 2,
    phoneNumber: '+1 (555) 345-6789',
    date: '2025-12-16',
    time: '09:42 AM',
    duration: '5:23',
    outcome: 'Escalated to technician',
    issueType: 'Software',
    status: 'Warm Transfer',
    statusColor: 'bg-yellow-500',
  },
  {
    id: 3,
    phoneNumber: '+1 (555) 345-6789',
    date: '2025-12-16',
    time: '09:42 AM',
    duration: '5:23',
    outcome: 'Appointment Booked',
    issueType: 'Battery',
    status: 'Appointment',
    statusColor: 'bg-blue-500',
  },
  {
    id: 4,
    phoneNumber: '+1 (555) 345-6789',
    date: '2025-12-16',
    time: '09:42 AM',
    duration: '0:20',
    outcome: 'Call Dropped',
    issueType: 'Unknown',
    status: 'Dropped',
    statusColor: 'bg-red-500',
  },
  {
    id: 5,
    phoneNumber: '+1 (555) 345-6789',
    date: '2025-12-16',
    time: '09:42 AM',
    duration: '5:23',
    outcome: 'Quote Provided',
    issueType: 'Screen',
    status: 'AI Resolved',
    statusColor: 'bg-green-500',
  },
];

const transcriptMessages = [
  { speaker: 'AI Assistant', message: 'Thank you for calling UBreakiFix! How can I help you today?', isAI: true },
  { speaker: 'Customer', message: 'Hi, my iPhone 13 screen is cracked. How much would it cost to repair?', isAI: false },
  { speaker: 'AI Assistant', message: 'I can help you with that! For an iPhone 13 screen repair, our price is $199. This includes parts, labor, and comes with a 90-day warranty. Would you like to book an appointment?', isAI: true },
  { speaker: 'Customer', message: 'Yes, please! When are you available?', isAI: false },
  { speaker: 'AI Assistant', message: 'Great! I have availability today at 2:00 PM or tomorrow at 10:00 AM. Which works better for you?', isAI: true },
];

const CallLogs = () => {
  const [selectedCall, setSelectedCall] = useState(callsData[0]);
  const [searchQuery, setSearchQuery] = useState('');

  const getStatusBadge = (status, statusColor) => {
    const colorMap = {
      'AI Resolved': 'bg-green-500/20 text-green-400 border-green-500/30',
      'Warm Transfer': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      'Appointment': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'Dropped': 'bg-red-500/20 text-red-400 border-red-500/30',
    };
    return colorMap[status] || 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  };

  const getIssueBadge = (issueType) => {
    const colorMap = {
      'Screen': 'bg-cyan-500/20 text-cyan-400',
      'Software': 'bg-purple-500/20 text-purple-400',
      'Battery': 'bg-yellow-500/20 text-yellow-400',
      'Unknown': 'bg-gray-500/20 text-gray-400',
    };
    return colorMap[issueType] || 'bg-gray-500/20 text-gray-400';
  };

  return (
    <div className="min-h-screen  p-4 sm:p-6">
      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-6">
        <div className="flex-1 min-w-0 sm:min-w-50">
          <div className="relative">
            <svg className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search by phone number, issue type..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0F172B80] border border-[#2B7FFF33] rounded-lg pl-10 pr-4 py-3 text-white placeholder:text-[#62748E] focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          <button className="bg-[#111B3D] border border-[#2B7FFF33] text-white/80 px-3 sm:px-4 py-2 sm:py-3 rounded-lg flex items-center gap-2 text-sm">
            All Type
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <button className="bg-[#111B3D] border border-[#2B7FFF33] text-white/80 px-3 sm:px-4 py-2 sm:py-3 rounded-lg flex items-center gap-2 text-sm">
            All Issues
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <button className="bg-[#111B3D] border border-[#2B7FFF33] text-white/80 px-3 sm:px-4 py-2 sm:py-3 rounded-lg flex items-center gap-2 text-sm">
            Today
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Call List */}
        <div className="bg-[#0d1a2d] rounded-xl border border-white/5 overflow-hidden">
          <div className="p-4 border-b border-white/5">
            <h2 className="text-white font-semibold">Call List</h2>
          </div>
          <div className="divide-y divide-white/5 max-h-[60vh] lg:max-h-none overflow-y-auto">
            {callsData.map((call) => (
              <div
                key={call.id}
                onClick={() => setSelectedCall(call)}
                className={`p-4 cursor-pointer hover:bg-white/5 transition-colors ${selectedCall?.id === call.id ? 'bg-white/5' : ''}`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">{call.phoneNumber}</p>
                      <p className="text-white/40 text-sm">{call.date} • {call.time}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs border ${getStatusBadge(call.status)}`}>
                    {call.status}
                  </span>
                </div>
                <div className="flex items-center gap-4 ml-13 pl-13">
                  <div className="flex items-center gap-1 text-white/50 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {call.duration}
                  </div>
                  <div className="flex items-center gap-1 text-white/50 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {call.outcome}
                  </div>
                  <span className={`px-2 py-0.5 rounded text-xs ${getIssueBadge(call.issueType)}`}>
                    {call.issueType}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call Details */}
        <div className="bg-[#0d1a2d] rounded-xl border border-white/5 overflow-hidden">
          <div className="p-4 border-b border-white/5">
            <h2 className="text-white font-semibold">Call Details</h2>
          </div>
          
          {selectedCall && (
            <div className="p-4">
              {/* Call Info Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-white/50 text-sm mb-1">Phone Number</p>
                  <p className="text-white">+1 (555) 123-4567</p>
                </div>
                <div>
                  <p className="text-white/50 text-sm mb-1">Duration</p>
                  <p className="text-white">4:32</p>
                </div>
                <div>
                  <p className="text-white/50 text-sm mb-1">Date & Time</p>
                  <p className="text-white">2025-12-16 10:45 AM</p>
                </div>
                <div>
                  <p className="text-white/50 text-sm mb-1">Issue Type</p>
                  <p className="text-white">Screen</p>
                </div>
                <div>
                  <p className="text-white/50 text-sm mb-1">Call Type</p>
                  <span className="px-3 py-1 rounded-full text-xs bg-green-500/20 text-green-400 border border-green-500/30">
                    AI Resolved
                  </span>
                </div>
                <div>
                  <p className="text-white/50 text-sm mb-1">Outcome</p>
                  <p className="text-white">Quote provided</p>
                </div>
              </div>

              {/* Audio Player */}
              <button className="w-full bg-linear-to-r from-[#AD46FF33] to-[#F6339A33] text-[#C27AFF] py-3 rounded-[14px] flex items-center justify-center gap-2 mb-6 hover:bg-blue-500/30 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Play Audio Recording
              </button>

              {/* Conversation Transcript */}
              <div>
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  Conversation Transcript
                </h3>
                <div className="space-y-4 max-h-64 overflow-y-auto">
                  {transcriptMessages.map((msg, index) => (
                    <div key={index}>
                      <p className={`text-sm font-medium mb-1 ${msg.isAI ? 'text-red-400' : 'text-cyan-400'}`}>
                        {msg.speaker}:
                      </p>
                      <p className="text-white/80 text-sm">{msg.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CallLogs;