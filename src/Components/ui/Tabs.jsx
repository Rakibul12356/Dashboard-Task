import React from 'react';

const Tabs = ({ tabs, activeTab, onTabChange, className = '' }) => {
  return (
    <div className={`flex gap-1 border-b border-white/10 ${className}`}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-4 py-3 text-sm font-medium transition-all relative ${
            activeTab === tab.id
              ? 'text-white'
              : 'text-white/50 hover:text-white/80'
          }`}
        >
          {tab.label}
          {activeTab === tab.id && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500" />
          )}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
