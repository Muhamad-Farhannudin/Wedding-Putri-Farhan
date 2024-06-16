import Link from 'next/link';
import React from 'react';

export default function Button({ children, className, link, classNameIcon, onClick, loading, disabled }) {
  return (
    link ? (
      <Link href={link}>
        <button 
        className={`${className} px-4 py-2 rounded-2xl flex items-center justify-center gap-3`}
        onClick={onClick}
        disabled={disabled}
        >
          {classNameIcon}
          {loading ? 'Mengirim...' : children}
        </button>
      </Link>
    ) : (
      <button className={`${className} px-4 py-2 rounded-2xl flex items-center justify-center gap-3`} onClick={onClick}>
        {classNameIcon}
        {children}
      </button>
    )
  );
}
