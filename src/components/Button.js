import Link from 'next/link';
import React from 'react';

export default function Button({ children, className, link, classNameIcon, onClick, disabled }) {
  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    if (onClick) {
      onClick(e);
    }
  };

  const buttonClass = `${className} px-4 py-2 rounded-2xl flex items-center justify-center gap-3 ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  }`;

  return link ? (
    <Link href={link} legacyBehavior>
      <button 
        className={buttonClass}
        onClick={handleClick}
        disabled={disabled}
      >
        {classNameIcon}
        {children}
      </button>
    </Link>
  ) : (
    <button 
      className={buttonClass}
      onClick={handleClick}
      disabled={disabled}
    >
      {classNameIcon}
      {children}
    </button>
  );
}
