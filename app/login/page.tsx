'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/generate');
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-dark font-display text-white">
      <div className="flex h-full min-h-screen grow flex-col">
        <div className="flex flex-1 items-stretch">
          {/* Form Side */}
          <div className="flex w-full max-w-full flex-col items-center justify-center p-6 md:w-1/2 md:p-10 lg:p-16">
            <div className="flex w-full max-w-md flex-col items-start gap-8">
              <div className="flex flex-col items-start gap-2">
                <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <span className="material-symbols-outlined text-primary text-4xl">auto_awesome</span>
                  <h1 className="text-2xl font-bold">ImageGen AI</h1>
                </Link>
                <h2 className="text-4xl font-black text-white mt-4">Welcome Back</h2>
                <p className="text-base text-gray-400">Enter your credentials to access your gallery and create new images.</p>
              </div>
              <form className="flex w-full flex-col gap-4" onSubmit={handleSubmit}>
                <label className="flex flex-col w-full">
                  <p className="text-base font-medium pb-2 text-white">Email or Username</p>
                  <div className="flex w-full flex-1 items-stretch rounded-lg">
                    <div className="text-gray-500 flex border border-gray-700 bg-background-dark items-center justify-center pl-4 rounded-l-lg border-r-0">
                      <span className="material-symbols-outlined">person</span>
                    </div>
                    <input 
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-700 bg-background-dark focus:border-primary h-14 placeholder:text-gray-500 p-[15px] rounded-l-none border-l-0 text-base font-normal leading-normal" 
                      placeholder="your@email.com" 
                    />
                  </div>
                </label>
                <div className="flex flex-col w-full">
                  <div className="flex items-center justify-between pb-2">
                    <p className="text-base font-medium text-white">Password</p>
                    <a className="text-sm font-normal text-primary hover:underline" href="#">Forgot Password?</a>
                  </div>
                  <div className="flex w-full flex-1 items-stretch rounded-lg">
                    <div className="text-gray-500 flex border border-gray-700 bg-background-dark items-center justify-center pl-4 rounded-l-lg border-r-0">
                      <span className="material-symbols-outlined">lock</span>
                    </div>
                    <input 
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-700 bg-background-dark focus:border-primary h-14 placeholder:text-gray-500 p-[15px] rounded-r-none rounded-l-none border-x-0 text-base font-normal leading-normal" 
                      placeholder="Enter your password" 
                      type="password"
                    />
                    <button aria-label="Toggle password visibility" className="text-gray-500 flex border border-gray-700 bg-background-dark items-center justify-center pr-4 rounded-r-lg border-l-0" type="button">
                      <span className="material-symbols-outlined">visibility</span>
                    </button>
                  </div>
                </div>
                <button type="submit" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-5 w-full bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors duration-200">
                  <span className="truncate">Log In</span>
                </button>
              </form>
              <div className="flex w-full items-center gap-4">
                <hr className="w-full border-gray-700"/>
                <p className="text-sm text-gray-400">OR</p>
                <hr className="w-full border-gray-700"/>
              </div>
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 w-full bg-gray-800 text-white gap-2 pl-5 text-base font-bold leading-normal tracking-[0.015em] border border-gray-700 hover:bg-gray-700 transition-colors duration-200">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_105_22)"><path d="M22.5714 12.2727C22.5714 11.4545 22.5 10.6364 22.3571 9.81818H12V14.4545H18.1286C17.8571 15.9 17.0714 17.1364 15.8143 17.9545V20.5909H19.5857C21.4571 18.8182 22.5714 15.8182 22.5714 12.2727Z" fill="#4285F4"></path><path d="M12 23C15.2571 23 17.9571 21.9091 19.5857 20.5909L15.8143 17.9545C14.7429 18.6818 13.4571 19.0909 12 19.0909C9.21429 19.0909 6.85714 17.2273 6 14.8182H2.18571V17.5455C3.81429 20.7273 7.58571 23 12 23Z" fill="#34A853"></path><path d="M6 14.8182C5.78571 14.1818 5.64286 13.5 5.64286 12.7727C5.64286 12.0455 5.78571 11.3636 6 10.7273V8L2.18571 5.27273C1.41429 6.72727 1 8.36364 1 10.1818C1 12 1.41429 13.6364 2.18571 15.1818L6 12.4545V14.8182Z" fill="#FBBC05"></path><path d="M12 5.90909C13.6286 5.90909 15.0429 6.5 15.8143 7.22727L19.6714 3.40909C17.9571 1.77273 15.2571 1 12 1C7.58571 1 3.81429 3.27273 2.18571 6.45455L6 9.18182C6.85714 6.77273 9.21429 5.90909 12 5.90909Z" fill="#EA4335"></path></g><defs><clipPath id="clip0_105_22"><rect fill="white" height="24" width="24"></rect></clipPath></defs></svg>
                <span className="truncate">Continue with Google</span>
              </button>
              <p className="text-sm self-center text-gray-400">Need an account? <Link className="font-bold text-primary hover:underline" href="/signup">Sign Up</Link></p>
            </div>
          </div>
          
          {/* Image Side */}
          <div className="hidden w-1/2 flex-1 items-center justify-center p-4 md:flex">
            <div className="h-full w-full rounded-xl bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDEOsrWrmifZ8GiMH1lKPNM5xlxNvgWkUsRl7BHFKxK-oOdId8BiK8ZOc_5qruBjpCBt2Ux50zfxSwqJ4a3nECXunw8XUSCy_M1XovM_LK0LpKo8m3YSPK99UlF9vTv9vevwsK5G_UOa_bXMZpq9_m2Kzh9CVctFRw4mpaJp2J6qdgTzwZzoWV17Wn0EcoQaLYQk6QZ3wwsxm_IWexo0lyvluCHbPr6KOQXxsGV7yY3HLXgrSuRthHCtBYs9XQMK_PHyvEXoegqKlzf')"}}></div>
          </div>
        </div>
      </div>
    </div>
  );
}