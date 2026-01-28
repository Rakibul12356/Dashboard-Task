import React from 'react';

const Input = ({ 
  label, 
  value, 
  onChange, 
  placeholder = '', 
  type = 'text',
  disabled = false,
  className = '' 
}) => {
  return (
    <div className={className}>
      {label && (
        <label className="block text-white/80 text-sm font-medium mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className="w-full bg-[#0a1628] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-blue-500 disabled:opacity-60 disabled:cursor-not-allowed"
      />
    </div>
  );
};

export default Input;
