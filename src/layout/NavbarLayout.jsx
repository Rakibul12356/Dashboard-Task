import React from 'react';
import { useLocation } from 'react-router';
import Avatar from '../Components/ui/Avatar';

const NavbarLayout = ({ onMenuClick }) => {
  const location = useLocation();
  
  // Get page title based on current route
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Dashboard Overview';
      case '/call-logs':
        return 'Call Logs & History';
      case '/appointments':
        return 'Appointments';
      case '/settings':
        return 'Settings';
      default:
        return 'Dashboard';
    }
  };

  return (
    <div className='flex justify-between items-center px-4 sm:px-6 py-4 bg-stat-bg'>
      <div className="flex items-center gap-3">
        {/* Mobile menu button */}
        <button 
          onClick={onMenuClick}
          className="lg:hidden text-white/60 hover:text-white transition-colors p-2 -ml-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h1 className='text-white text-xl sm:text-2xl lg:text-[32px] font-normal tracking-wide'>{getPageTitle()}</h1>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <button className="text-white/60 hover:text-white transition-colors">
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
        <Avatar size="md" />
      </div>
    </div>
  );
};

export default NavbarLayout;