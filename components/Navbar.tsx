'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavbarProps {
  variant?: 'landing' | 'app';
}

const Navbar: React.FC<NavbarProps> = ({ variant = 'landing' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isLanding = variant === 'landing';
  
  // Base classes for header
  const headerClass = isLanding
    ? "sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-white/10 bg-background-dark/80 px-4 py-3 backdrop-blur-sm sm:px-6 lg:px-8"
    : "sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-white/10 bg-background-dark/80 px-4 py-3 text-white backdrop-blur-sm sm:px-6 lg:px-8";

  return (
    <header className={headerClass}>
      <div className="flex items-center gap-4 text-white">
        <Link href="/" className="size-6 text-primary">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_6_535)">
              <path clipRule="evenodd" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fill="currentColor" fillRule="evenodd"></path>
            </g>
            <defs>
              <clipPath id="clip0_6_535">
                <rect fill="white" height="48" width="48"></rect>
              </clipPath>
            </defs>
          </svg>
        </Link>
        <Link href="/" className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
          AI Image Gen
        </Link>
      </div>

      {isLanding ? (
        <>
          <nav className="hidden items-center gap-9 md:flex">
            <Link href="/creations" className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors">Gallery</Link>
            <Link href="/pricing" className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors">Pricing</Link>
            <Link href="/about" className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors">About</Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/login" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/20 text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/30 transition-colors">
              <span className="truncate">Log In</span>
            </Link>
            <Link href="/signup" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
              <span className="truncate">Sign Up</span>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="hidden flex-1 justify-end gap-8 md:flex">
            <div className="flex items-center gap-9">
               <Link href="/creations" className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors">Community Showcase</Link>
               <Link href="/creations" className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors">My Creations</Link>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ml-4 border border-white/10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBK68TbsYr6z_2HT2v4tJOb9vnPBJnrbDE2N8hf8uH1nDSLX3VB6a17qmW8HuZ4HRELATU8FryhN3VRxlY1R4q75uTOM2PAlvw_nTw2N_7XtOkjahlz-DCMWkOPdzRMbC0PU-DtspKcT3R4X57OvGG5PsMtkW9UiOpxLJ8Jpf2SrgdEUq7Sn1yAOA8PE90Hz4kk3vyv2KhFhBTgsCYBd7ImsJtJgQlNMyjGGp3KCCENgRGT9M8Ue_-1VfsxoXDK5dueZjYJ95pfA3Xg")'}}></div>
            </div>
          </div>
          <button className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span className="material-symbols-outlined text-white">menu</span>
          </button>
        </>
      )}
    </header>
  );
};

export default Navbar;