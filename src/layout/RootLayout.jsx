import { Outlet } from 'react-router';
import NavbarLayout from './NavbarLayout';
import FooterLayout from './FooterLayout';
import SmoothScroll from '../components/utility/SmoothScroll';
import Sidebar from './Sidebar';
import { useState } from 'react';

const RootLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#070d1f]">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed left-0 top-0 h-screen z-30
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
      `}>
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </aside>
      
      {/* Main content */}
      <div className="flex-1 lg:ml-56 flex flex-col min-w-0">
        <header className="sticky top-0 z-10 bg-[#070d1f]">
          <NavbarLayout onMenuClick={() => setSidebarOpen(true)} />
        </header>
        <main className="flex-1 overflow-auto">
          <SmoothScroll>
            <Outlet />
          </SmoothScroll>
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
