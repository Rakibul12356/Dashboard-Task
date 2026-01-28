import React from 'react';
import { Link, NavLink } from 'react-router';
import { AiOutlineHome } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { PiCalendarBlank } from "react-icons/pi";
import { TbSettings } from "react-icons/tb";
import { IoIosLogIn } from 'react-icons/io';

const Sidebar = ({ onClose }) => {
    return (
        <div className='w-56 bg-stat-bg h-screen relative border-r border-border'>
            {/* Close button for mobile */}
            <button 
                onClick={onClose}
                className="absolute top-4 right-4 lg:hidden text-white/60 hover:text-white"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            
            {/* logo */}
            <div className='flex justify-center pt-6 pb-4'>
                <img src="logo.png" alt="logo" />
            </div>

            {/* links */}
            <div className='mt-8 px-4'>
                <ul className='text-white text-sm space-y-2'>
                    <li>
                        <NavLink 
                            to={'/'} 
                            onClick={onClose}
                            className={({isActive}) => `flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${isActive ? 'bg-white/10 shadow-lg ring-1 ring-white/20' : 'hover:bg-white/5'}`}
                        >
                            <span className=" rounded-lg flex items-center justify-center">
                                <AiOutlineHome className='w-5 h-5' />
                            </span>
                            Dashboard Overview
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to={'/call-logs'} 
                            onClick={onClose}
                            className={({isActive}) => `flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${isActive ? 'bg-white/10 shadow-lg ring-1 ring-white/20' : 'hover:bg-white/5'}`}
                        >
                            <span className=" rounded-lg flex items-center justify-center">
                                <IoCallOutline className='w-5 h-5' />
                            </span>
                            Call Logs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to={'/appointments'} 
                            onClick={onClose}
                            className={({isActive}) => `flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${isActive ? 'bg-white/10 shadow-lg ring-1 ring-white/20' : 'hover:bg-white/5'}`}
                        >
                            <span className=" rounded-lg flex items-center justify-center">
                                <PiCalendarBlank className='w-5 h-5' />
                            </span>
                            Appointments
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to={'/settings'} 
                            onClick={onClose}
                            className={({isActive}) => `flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${isActive ? 'bg-white/10 shadow-lg ring-1 ring-white/20' : 'hover:bg-white/5'}`}
                        >
                            <span className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center">
                                <TbSettings className='w-5 h-5' />
                            </span>
                            Settings
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Log Out at bottom */}
            <div className="absolute bottom-8 left-4 right-4">
                <button className="flex items-center gap-2 text-red-400 text-base hover:text-red-300 px-3 py-2">
                    <IoIosLogIn className='w-7 h-7 text-black' />
                    Log Out
                </button>
            </div>
        </div>
    );
};

export default Sidebar;