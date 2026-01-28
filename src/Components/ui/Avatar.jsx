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
          className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors"
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Avatar;
