import React from 'react';

const Avatar = ({ 
  size = 'md', 
  className = '',
  showEditBadge = false,
  onEditClick 
}) => {
  const sizeClasses = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  };

  return (
    <div className={`relative inline-block ${className}`}>
      <div className={`${sizeClasses[size]} rounded-full overflow-hidden ring-2 ring-blue-400/30`}>
        <img 
          src="/avatar.png" 
          alt="User" 
          className="w-full h-full object-cover" 
        />
      </div>
      {showEditBadge && (
        <button 
          onClick={onEditClick}
          className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#7AA3CC] rounded-lg flex items-center justify-center text-white  transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-pen-icon lucide-square-pen"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/></svg>
        </button>
      )}
    </div>
  );
};

export default Avatar;
