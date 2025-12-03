'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const SignupPage: React.FC = () => {
  const router = useRouter();

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-dark font-display text-white">
      <div className="layout-container flex h-full grow flex-col">
        {/* Simple Nav */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-white/10 px-6 sm:px-10 lg:px-20 py-4">
          <div className="flex items-center gap-4 text-white">
            <Link href="/" className="size-6 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </Link>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">AI Image Generator</h2>
          </div>
          <div className="flex items-center gap-4">
            <p className="hidden sm:block text-sm text-gray-400">Already have an account?</p>
            <Link href="/login" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
              <span className="truncate">Log In</span>
            </Link>
          </div>
        </header>

        <main className="flex-1 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-full">
            {/* Promo Side */}
            <div className="hidden lg:flex flex-col items-center justify-center p-8 bg-primary/5 relative overflow-hidden">
              <div className="w-full max-w-lg aspect-square bg-center bg-no-repeat bg-cover rounded-xl" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB4_qT933VrJGelMhcJc9VOUt2HL0timbLA0VwbnJYl7jvl_VBILsNaMa-6D-itUqD-7ceXyWxYQM-cpvbUEeXbRgF5V5rLDsKmwPDsapt0p5YNFvaTq_ykDxYA7hJHWFcKL_5EP1uJSfgpDOou27WmsNz-Kk5MC9VLRxJGVUteYIY3yYCTnlSQlCcV2ScS6SFe0kxVNqS-bi3hyHc-Futbyew4SrHqAeN9kqZZYpqo_InZzonhaB9Pm_iWtXFic27QGD8MFV68ELmu")'}}></div>
              <div className="absolute bottom-8 left-8 right-8 text-center">
                <h3 className="text-2xl font-bold text-white">Bring Your Imagination to Life.</h3>
                <p className="text-gray-400 mt-2">Generate stunning visuals with the power of AI.</p>
              </div>
            </div>

            {/* Form Side */}
            <div className="w-full flex items-center justify-center p-6 sm:p-12">
              <div className="layout-content-container flex flex-col max-w-md flex-1">
                <div className="flex flex-col gap-3 mb-8">
                  <h1 className="text-3xl sm:text-4xl font-black leading-tight tracking-[-0.033em] text-white">Create Your Account</h1>
                  <p className="text-[#ad92c9] text-base font-normal leading-normal">Start generating incredible AI images in seconds.</p>
                </div>
                
                <div className="flex flex-col gap-3">
                  <button className="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#362348] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#4a2e5f] transition-colors">
                    <span className="truncate">Sign up with Google</span>
                  </button>
                  <button className="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#362348] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#4a2e5f] transition-colors">
                    <span className="truncate">Sign up with GitHub</span>
                  </button>
                </div>

                <p className="text-[#ad92c9] text-sm font-normal leading-normal py-4 px-4 text-center">OR</p>
                
                <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); router.push('/generate'); }}>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-gray-300" htmlFor="email">Email</label>
                    <input className="w-full h-12 px-4 rounded-lg bg-black/20 border border-white/20 focus:ring-primary focus:border-primary transition-colors text-white placeholder:text-gray-400" id="email" placeholder="you@example.com" type="email" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-gray-300" htmlFor="password">Password</label>
                    <input className="w-full h-12 px-4 rounded-lg bg-black/20 border border-white/20 focus:ring-primary focus:border-primary transition-colors text-white placeholder:text-gray-400" id="password" placeholder="Enter your password" type="password" />
                  </div>
                  
                  {/* Password Strength Indicator Mockup */}
                  <div className="flex items-center gap-2 mt-1">
                    <div className="h-1 flex-1 bg-gray-700 rounded-full overflow-hidden"><div className="h-1 w-1/4 bg-red-500"></div></div>
                    <div className="h-1 flex-1 bg-gray-700 rounded-full"></div>
                    <div className="h-1 flex-1 bg-gray-700 rounded-full"></div>
                    <div className="h-1 flex-1 bg-gray-700 rounded-full"></div>
                    <span className="text-xs text-red-500 ml-1">Weak</span>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-gray-300" htmlFor="confirm-password">Confirm Password</label>
                    <input className="w-full h-12 px-4 rounded-lg bg-black/20 border border-white/20 focus:ring-primary focus:border-primary transition-colors text-white placeholder:text-gray-400" id="confirm-password" placeholder="Confirm your password" type="password" />
                  </div>

                  <div className="flex items-start gap-3 mt-2">
                    <input className="h-4 w-4 mt-0.5 rounded border-gray-300 text-primary focus:ring-primary bg-transparent" id="terms" type="checkbox" />
                    <label className="text-sm text-gray-400" htmlFor="terms">
                      By signing up, you agree to our <Link className="font-medium text-primary hover:underline" href="/terms">Terms of Service</Link> and <Link className="font-medium text-primary hover:underline" href="/privacy">Privacy Policy</Link>.
                    </label>
                  </div>

                  <button className="flex mt-4 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] w-full hover:bg-primary/90 transition-colors" type="submit">
                    <span className="truncate">Create Free Account</span>
                  </button>
                </form>

                <p className="text-center text-sm text-gray-400 mt-8 sm:hidden">
                    Already have an account? <Link className="font-medium text-primary hover:underline" href="/login">Log In</Link>
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SignupPage;