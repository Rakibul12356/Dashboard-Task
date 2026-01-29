
const activeStyle = {
  
  backgroundImage: `url('/Frame.png'), linear-gradient(135deg,#152252,#111B3C)`,
  backgroundSize: ' 100% 100%',
  backgroundPosition: ' center, center',
  backgroundRepeat: 'no-repeat, no-repeat',
  boxShadow: `
    0 3.71px 4.85px rgba(87,177,255,0.15),
    0 10.27px 13.4px rgba(87,177,255,0.22),
    0 24.72px 32.26px rgba(87,177,255,0.18),
    0 42px 107px rgba(87,177,255,0.34)
  `
};


import React from 'react';
import { NavLink } from 'react-router';
import { AiOutlineHome } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { PiCalendarBlank } from "react-icons/pi";
import { TbSettings } from "react-icons/tb";
import { IoIosLogIn } from 'react-icons/io';

const Sidebar = ({ onClose }) => {
  const links = [
    { to: '/', icon: <AiOutlineHome />, label: 'Dashboard Overview' },
    { to: '/call-logs', icon: <IoCallOutline />, label: 'Call Logs' },
    { to: '/appointments', icon: <PiCalendarBlank />, label: 'Appointments' },
    { to: '/settings', icon: <TbSettings />, label: 'Settings' },
  ];

  return (
    <div className="w-56 bg-[#111B3C] h-screen relative border-r border-[#2B7FFF33]">

      {/* Logo */}
      <div className="flex justify-center pt-6 pb-4">
        <img src="logo.png" alt="logo" />
      </div>

      {/* Links */}
      <div className="mt-8 px-4">
        <ul className="text-white text-sm space-y-2">

          {links.map(({ to, icon, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                onClick={onClose}
                className={({ isActive }) =>
                  `relative flex items-center gap-3 px-3 py-3 rounded-xl transition-all
                  ${isActive ? '' : 'hover:bg-white/5'}`
                }
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                {({ isActive }) => (
                  <>
                   
                    {isActive && (
                      <>
                        {/* Gradient border */}
                        <span
                          className="absolute inset-0 rounded-xl pointer-events-none"
                          style={{
                            border: '1px solid transparent',
                            background: 'linear-gradient(135deg,#0088FF,#77C0FF) border-box',
                            WebkitMask:
                              'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                            WebkitMaskComposite: 'xor'
                          }}
                        />

                        {/* Inner glow */}
                        <span
                          className="absolute inset-0 rounded-xl pointer-events-none"
                          style={{
                            boxShadow:
                              'inset 0 1px 4px #D2EAFF, inset 0 0 18px rgba(210,234,255,.4)'
                          }}
                        />
                      </>
                    )}

                    {/* Content */}
                    <span className="relative z-10 w-5 h-5 flex items-center justify-center">
                      {icon}
                    </span>
                    <span className="relative z-10">{label}</span>
                  </>
                )}
              </NavLink>
            </li>
          ))}

        </ul>
      </div>

      {/* Logout */}
      <div className="absolute bottom-8 left-4 right-4">
        <button className="flex items-center gap-2 text-red-400 hover:text-red-300 px-3 py-2">
          <IoIosLogIn className="w-6 h-6" />
          Log Out
        </button>
      </div>

    </div>
  );
};

export default Sidebar;
