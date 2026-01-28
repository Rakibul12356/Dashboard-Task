import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false
}) => {
  const baseClasses = 'font-medium rounded-lg transition-all flex items-center justify-center gap-2';
  
  const variantClasses = {
    primary: 'bg-green-500 hover:bg-green-600 text-white',
    secondary: 'bg-white/10 hover:bg-white/20 text-white border border-white/10',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
    ghost: 'bg-transparent hover:bg-white/5 text-white/60 hover:text-white'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  );
};

export default Button;
