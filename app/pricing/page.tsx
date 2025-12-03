// app/pricing/page.tsx
'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');

  return (
    <div className="flex flex-col min-h-screen bg-background-dark font-display">
      <Navbar variant="landing" />
      
      <main className="flex flex-col gap-8 py-10 flex-grow">
        <div className="flex flex-wrap justify-between gap-3 p-4 items-center container mx-auto">
          <div className="flex min-w-72 flex-col gap-3 mx-auto text-center">
            <p className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">Find the Perfect Plan for Your Creativity</p>
            <p className="text-[#ad92c9] text-base font-normal leading-normal">Choose a plan that scales with your needs, from casual hobbyists to enterprise teams.</p>
          </div>
        </div>

        <div className="flex px-4 py-3 justify-center">
          <div className="flex h-10 w-full max-w-sm items-center justify-center rounded-lg bg-[#362348] p-1">
            <button 
              onClick={() => setBillingCycle('monthly')}
              className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 text-sm font-medium leading-normal transition-colors ${billingCycle === 'monthly' ? 'bg-background-dark text-white shadow' : 'text-[#ad92c9]'}`}
            >
              <span className="truncate">Monthly</span>
            </button>
            <button 
               onClick={() => setBillingCycle('yearly')}
               className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 text-sm font-medium leading-normal transition-colors ${billingCycle === 'yearly' ? 'bg-background-dark text-white shadow' : 'text-[#ad92c9]'}`}
            >
              <span className="truncate">Yearly (Save 20%)</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 py-3 container mx-auto">
          {/* Basic */}
          <div className="flex flex-1 flex-col gap-6 rounded-xl border border-solid border-[#4d3267] bg-[#261933] p-6">
            <div className="flex flex-col gap-1">
              <h1 className="text-white text-base font-bold leading-tight">Basic</h1>
              <p className="flex items-baseline gap-1 text-white">
                <span className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">$10</span>
                <span className="text-slate-300 text-base font-bold leading-tight">per month</span>
              </p>
            </div>
            <button className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#362348] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#4a2e5f] transition-colors">
              <span className="truncate">Get Started</span>
            </button>
            <div className="flex flex-col gap-3">
              {['100 image credits/month', 'Standard generation speed', 'Personal use license', 'Community support'].map(item => (
                <div key={item} className="text-[13px] font-normal leading-normal flex gap-3 text-slate-200 items-center">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span> {item}
                </div>
              ))}
            </div>
          </div>

          {/* Pro */}
          <div className="flex flex-1 flex-col gap-6 rounded-xl border-2 border-solid border-primary bg-[#261933] p-6 relative">
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <h1 className="text-white text-base font-bold leading-tight">Pro</h1>
                <p className="text-white text-xs font-medium leading-normal tracking-[0.015em] rounded-full bg-primary px-3 py-1 text-center">Most Popular</p>
              </div>
              <p className="flex items-baseline gap-1 text-white">
                <span className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">$25</span>
                <span className="text-slate-300 text-base font-bold leading-tight">per month</span>
              </p>
            </div>
            <button className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
              <span className="truncate">Upgrade to Pro</span>
            </button>
            <div className="flex flex-col gap-3">
               {['500 image credits/month', 'Fast generation speed', 'Full commercial license', 'Private generations', 'Priority support'].map(item => (
                <div key={item} className="text-[13px] font-normal leading-normal flex gap-3 text-slate-200 items-center">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span> {item}
                </div>
              ))}
            </div>
          </div>

          {/* Business */}
          <div className="flex flex-1 flex-col gap-6 rounded-xl border border-solid border-[#4d3267] bg-[#261933] p-6">
            <div className="flex flex-col gap-1">
              <h1 className="text-white text-base font-bold leading-tight">Business</h1>
              <p className="flex items-baseline gap-1 text-white">
                <span className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">$60</span>
                <span className="text-slate-300 text-base font-bold leading-tight">per month</span>
              </p>
            </div>
            <button className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#362348] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#4a2e5f] transition-colors">
              <span className="truncate">Contact Sales</span>
            </button>
            <div className="flex flex-col gap-3">
              {['Unlimited generations', 'Fastest generation speed', 'Full commercial license', 'Team features & seats', 'API access', 'Dedicated support'].map(item => (
                <div key={item} className="text-[13px] font-normal leading-normal flex gap-3 text-slate-200 items-center">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span> {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="px-4 py-10 container mx-auto">
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-5 pt-5 text-center">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-4 max-w-3xl mx-auto">
            {[
                {q: "How do image credits work?", a: "Each plan comes with a set number of credits per month. One credit is used for generating one standard-resolution image. Higher-resolution images or advanced features may consume more credits."},
                {q: "Can I cancel my subscription at any time?", a: "Yes, you can cancel your subscription at any time from your account settings. You will retain access to your plan's features until the end of your current billing period."},
                {q: "What happens if I run out of credits?", a: "If you run out of credits, you can either upgrade to a higher plan with more credits or purchase a one-time credit pack to continue generating images."},
                {q: "What is the difference between personal and commercial licenses?", a: "A personal use license allows you to create images for non-commercial projects. A full commercial license, included in our Pro and Business plans, grants you the rights to use the images for any commercial purpose."}
            ].map((faq, i) => (
                <details key={i} className="group p-4 rounded-lg bg-[#261933]">
                    <summary className="flex items-center justify-between cursor-pointer text-white font-medium list-none">
                        {faq.q}
                        <span className="material-symbols-outlined transition-transform duration-200 group-open:rotate-180">expand_more</span>
                    </summary>
                    <p className="mt-2 text-slate-300">{faq.a}</p>
                </details>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}