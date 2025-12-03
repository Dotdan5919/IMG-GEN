'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function GeneratePage() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleGenerate = () => {
    if (!prompt) return;
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedImage("https://images.unsplash.com/photo-1563206767-5b18f218e8de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfGFsbHx8fHx8fHx8fDE3MjE0MDg3Mjl8&ixlib=rb-4.0.3&q=80&w=1080");
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background-dark font-display text-white">
      <Navbar variant="app" />
      
      <main className="flex flex-1 flex-col lg:flex-row">
        {/* Sidebar Controls */}
        <aside className="w-full lg:w-[420px] lg:min-w-[420px] border-b lg:border-b-0 lg:border-r border-white/10 p-6 space-y-6 overflow-y-auto">
          <h1 className="text-white text-3xl font-black leading-tight tracking-[-0.033em]">Create Your Image</h1>
          
          <div className="space-y-4">
            <label className="flex flex-col">
              <p className="text-white text-base font-medium leading-normal pb-2">Prompt</p>
              <textarea 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="form-input flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-white/20 bg-white/5 focus:border-primary min-h-36 placeholder:text-white/40 p-4 text-base font-normal leading-normal" 
                placeholder="e.g., A majestic lion wearing a crown, sitting on a throne, cinematic lighting..."
              />
            </label>
            <label className="flex flex-col">
              <p className="text-white text-base font-medium leading-normal pb-2">Negative Prompt (what to avoid)</p>
              <textarea 
                className="form-input flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-white/20 bg-white/5 focus:border-primary min-h-24 placeholder:text-white/40 p-4 text-base font-normal leading-normal" 
                placeholder="e.g., blurry, extra limbs, text"
              />
            </label>
          </div>

          <div className="space-y-4">
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Style</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { name: 'Photorealistic', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqCTlbkQqXj52WQEHJ_u-OhBgPnqkxKB5HFGhmkeT8SXOQlePjoziLrt2aWNLEHCIJjXMPwKEQ6H51EKxuiasrVaYWLD3dP6xT8ZafFY_ws-AnatRsJqakC6B2-baJlV1BK7tg2Xlu6kpY4ylKMVTSrU6dkDkhSqRrwgKk1NtVRW9Kkhkl5jXEbMj8C7HBBMXMRPgxinLIp-TybkE9LFm1fwaXr16fu5vzSOIhTR9FAKVKsAHtw4w6kWbyeDAzku18k_nBSMQKqtyk', active: false },
                { name: 'Anime', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbNuRCTxEfQGwd18js0jgdA3sMNiIBsVwBWniPaTR27nhCXc4Cbv5m50Fz5X5sRox_QSCDNssIG2eU1EgR3LAKd4wBIpNiOINndL0FRYO0tsDsoPd2y-n1Hl63ilW7K3TMevml54kJQtWYkGDi7q14SAxAumIwvjsms3KF2NQo45ewl6v6K-C4o1FL6IJjWpdxLZ7leCq7fRfnp2RljuFpkbphD1PvWXNnJ-F4Jizc9Ao4bLj2wNIyFF6XVU1xTdJtoHsfEaTxxCGv', active: true },
                { name: 'Impressionist', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4t8zOGwiydUtcS6Ulo5NqqsZ6WTGtVAKug26hJKDrAOYsrqLLq4vLhJaSZLa1VmxaTxTESHPgRom3y_2dnRuOi3eIoohrAir-NOr5-3IcDQBY3eau-1NHkGXI9V_DAYVeHYmR76bfH-kyq1ifomCgGoT7Ela3O8W_eSzjtF2bvyZrkQc9SnU1HdVNH3Z3FlgP1LdkXWuXyq8ihKmEy-1ufIphokeLIR-narfx9_Q4AYxfLOq41NNyQV-aH-IeQeptsaUlE9_kfZe4', active: false },
              ].map((style) => (
                <div key={style.name} className="relative group cursor-pointer">
                  <img className={`aspect-square w-full rounded-lg object-cover transition-transform group-hover:scale-105 ${style.active ? 'ring-2 ring-primary' : ''}`} src={style.src} alt={style.name} />
                  <div className={`absolute inset-0 ${style.active ? 'bg-primary/30' : 'bg-black/50'} rounded-lg flex items-center justify-center`}>
                    <p className="text-white font-bold">{style.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Aspect Ratio</h3>
            <div className="grid grid-cols-4 gap-3">
              <button className="flex flex-col items-center justify-center gap-1 p-2 aspect-square rounded-lg bg-white/10 text-white/60 hover:bg-white/20 hover:text-white transition-colors">
                <span className="material-symbols-outlined">square</span>
                <span className="text-xs font-medium">1:1</span>
              </button>
              <button className="flex flex-col items-center justify-center gap-1 p-2 aspect-square rounded-lg bg-primary text-white">
                <span className="material-symbols-outlined">rectangle</span>
                <span className="text-xs font-medium">16:9</span>
              </button>
              <button className="flex flex-col items-center justify-center gap-1 p-2 aspect-square rounded-lg bg-white/10 text-white/60 hover:bg-white/20 hover:text-white transition-colors">
                <span className="material-symbols-outlined -rotate-90">rectangle</span>
                <span className="text-xs font-medium">9:16</span>
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Advanced Settings</h3>
            <label className="flex flex-col">
              <div className="flex justify-between items-center pb-2">
                <p className="text-white text-base font-medium leading-normal">Creativity Level</p>
                <span className="text-white font-bold">75</span>
              </div>
              <input className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary" type="range" min="0" max="100" defaultValue="75" />
            </label>
          </div>

          <button 
            onClick={handleGenerate}
            disabled={isGenerating || !prompt}
            className="w-full flex min-w-[84px] max-w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-4 bg-primary hover:bg-primary/80 disabled:opacity-50 disabled:cursor-not-allowed text-white text-lg font-bold leading-normal tracking-[0.015em] transition-colors"
          >
            {isGenerating ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Generating...</span>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined">auto_awesome</span>
                <span className="truncate">Generate</span>
              </>
            )}
          </button>
        </aside>

        {/* Main Viewport */}
        <section className="flex-1 p-6 lg:p-10 flex items-center justify-center bg-background-dark">
          <div className="w-full max-w-4xl aspect-[16/9] bg-white/5 rounded-xl flex items-center justify-center relative group overflow-hidden border border-white/10">
            {!generatedImage && !isGenerating && (
              <div className="text-center text-white/40 p-8">
                <span className="material-symbols-outlined text-6xl">image</span>
                <h3 className="text-xl font-bold mt-4 text-white/60">Your generated image will appear here</h3>
                <p className="mt-2 max-w-sm mx-auto">Describe what you want to see in the prompt panel. The more detail, the better!</p>
              </div>
            )}

            {isGenerating && (
               <div className="text-center text-white/60 p-8">
                  <svg className="animate-spin h-12 w-12 text-primary mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <h3 className="text-xl font-bold">Dreaming up your image...</h3>
               </div>
            )}

            {generatedImage && !isGenerating && (
              <>
                <img src={generatedImage} className="w-full h-full object-contain" alt="Generated result" />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                   <p className="text-white/80 text-sm line-clamp-1">{prompt}</p>
                </div>
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="flex items-center justify-center size-10 rounded-lg bg-black/60 text-white hover:bg-black/80 transition-colors">
                         <span className="material-symbols-outlined">download</span>
                    </button>
                     <button className="flex items-center justify-center size-10 rounded-lg bg-black/60 text-white hover:bg-black/80 transition-colors">
                         <span className="material-symbols-outlined">content_copy</span>
                    </button>
                </div>
              </>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}