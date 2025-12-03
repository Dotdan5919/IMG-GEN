// app/gallery/page.tsx
'use client';

import React from 'react';
import Navbar from '@/components/Navbar';

const GALLERY_ITEMS = Array(12).fill({
  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAz0l5PyoFM_pqa9J25tZd0_L01ATKxCmbtYlKXqSvOoxdpnCM7TEHvJvuXrTwViAqLTC0AXYdMPFcJunI4ApWUmGu6wQUGC5TeA_GVlxmaNqJTGzs21Mp8EhcgscnExnonIA07Vw50_EWRfSN5Vf7RBPRN7wTibbKlR_yg9J0Nw6Q7mTwVRBYbYo_X5nIZoNqlN36pZ6eCh-ajBTwO3JZxYSbEBsfr8PMvHWIxbq9XLxKP4ufYdQ7wsVQGbIjxEJFfB8ikZwChX0hR"
});

export default function GalleryPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-dark text-white font-display">
      <Navbar variant="app" />
      
      <main className="flex-1 mt-8 container mx-auto px-4 sm:px-6 md:px-8">
        {/* PageHeading */}
        <div className="flex flex-wrap justify-between items-center gap-4 py-4">
          <p className="text-4xl font-black leading-tight tracking-[-0.033em]">My Creations</p>
        </div>

        {/* ToolBar */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 py-4 border-b border-white/10 mb-6">
          <div className="relative w-full sm:max-w-xs">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="material-symbols-outlined text-gray-500">search</span>
            </div>
            <input 
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/5 border border-transparent focus:ring-2 focus:ring-primary focus:border-primary text-white placeholder-gray-500 transition" 
              placeholder="Search my creations..." 
              type="text"
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-gray-300 hover:bg-white/10 transition-colors text-sm font-medium">
              <span className="material-symbols-outlined text-base">filter_list</span>
              Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-gray-300 hover:bg-white/10 transition-colors text-sm font-medium">
              <span className="material-symbols-outlined text-base">sort</span>
              Sort
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors text-sm font-bold">
              <span className="material-symbols-outlined text-base">select_check_box</span>
              Select
            </button>
          </div>
        </div>

        {/* ImageGrid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 pb-12">
          {GALLERY_ITEMS.map((item, idx) => (
            <div key={idx} className="relative group rounded-xl overflow-hidden aspect-square bg-white/5">
              <div 
                className="bg-cover bg-center w-full h-full transition-transform duration-300 group-hover:scale-105" 
                style={{backgroundImage: `url("${item.src}")`}}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                <div className="flex justify-end gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <button className="flex items-center justify-center size-8 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                    <span className="material-symbols-outlined text-lg">download</span>
                  </button>
                  <button className="flex items-center justify-center size-8 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                    <span className="material-symbols-outlined text-lg">delete</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center pb-12">
          <button className="flex size-10 items-center justify-center text-gray-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="text-sm font-bold flex size-10 items-center justify-center text-white rounded-full bg-primary">1</button>
          <button className="text-sm font-normal flex size-10 items-center justify-center text-gray-300 rounded-full hover:bg-white/10 transition-colors">2</button>
          <button className="text-sm font-normal flex size-10 items-center justify-center text-gray-300 rounded-full hover:bg-white/10 transition-colors">3</button>
          <span className="text-sm font-normal flex size-10 items-center justify-center text-gray-400">...</span>
          <button className="text-sm font-normal flex size-10 items-center justify-center text-gray-300 rounded-full hover:bg-white/10 transition-colors">10</button>
          <button className="flex size-10 items-center justify-center text-gray-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </main>
    </div>
  );
}