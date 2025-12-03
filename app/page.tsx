'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const GRID_IMAGES = [
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFJKVnCioKBqgq1Ew7OSOJVP3NRfFSfQIikLjpksAbb_pxo_sttf6YzXFw8xrVr-HA4ftZEFxV_bngUTNTe0TOcMxFhxyRnfizhTX5Oi1dKAeyD1M-383PuJyRQw_DIzkyHHyni41_Py5BvpKWAivk0E95jT5L0C6aGKzbQlIIeDdZYQX40_XIlVNXDdoNjZOSdnu02b23XlrGxj3HDijDXzknpHBeQtDOgKeA2xjXCi9wjyl0H2bVMkGeMGWJjRHcr1nODzD-8Cyq", alt: "Astronaut riding a horse" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBo0NT9Ls7ja9DNKMDftVkCJt9SoEqAaKxpcjzl744KGXCSG6j7R3YqBqBakUS-w0dxJ0j9Ohj8ST0FeQYoTqaIq-tr8dAWnFUy61Svu43ey2iB-G6-VgJjAK5vEw6h0Qxw5PUu5U44QoJLV7oy37x_w3kFckyIMm4xejX3aN6svIS6i-3FX0sSRbIrWlruNd5kX5-3hHEt0ZPJBWCa8kbKc_EGX2NykZei_n_AuPBCwnmevAOB_wp5WhYTp_3sibiyZE45opc3DXA4", alt: "Magical forest" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPXeNSRJkYOB-govA7XedQsF16n_WA4qBDdq6IBaE8lNynBQEqrhPm7VUCXBSJHRXxmeZ9WmVglVnNyEcRsZ0y2YoCQ2TPZRRzXlMeHFPTddYffOiv5msCtyilQHoqxMv75Q46Dgs8nrOuHgBpzxB8sPTBrTYkjHG8gxJTqhq8XGFdZUhc-jMFsVJnP79mCJbO70wQea2dxQuzRrTwK_h9SBN3aZkLVB-TJSmXNm0xVAMYy950R5P576zS5JPVWf9DWIjXXRo2L430", alt: "Robot cat" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGLBl098Pjp527cOYPn4TeL6jGrqkWLvU6CYTZbrbzcOR0B0v3QjdUPGaqYX5vWTrTz45OrLhH246kDRMrUuxBuTSdK-ocJgnUW5TwjiNE29KFcq__nXeR4vfGx2oDgwC-99QYtSI29xmRvlAWp0q0C54KE7HPj2AY09WZeQEued-2hZBeop_lN-qtVcymRQg1bGBbvZDvIe2uQu1kaE3-mfcfdcLjVUT8zQqiBwSCMtdAglkGgD84VqeUv6N7BQyFzlyG67HWv1bH", alt: "Impressionist cafe" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnRjXHDO7Yjy61VIUR-zS1luICgePAIxFvN2zYgO9h9DwgO4__3HYP7aFY9YhMVvw6aTZAeIOX5KeN5r9GGqq9erIU1aNInYUoK5iBRRC1gC_5g5IFzzwdhwqw3aE_ELXydpkoOsJgDHNiwxkGCTBgW42HGOJFWBbGLdCJSjpnqx3tA9klsIf5jQrZSdLEBNjNeDAeZhm9n1UhS-Bn1mukD6dCnoAZ9HohyKE7zDL_FAjuocIwZuei1vw170SfPPbeo9U86gXm3tkN", alt: "Cyberpunk warrior" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuASzN6OqSAFrl4R1X191CgCnS5s0jUEpFX0ECn_JngMb0jw9-_fsJXJrjWQRUqeuDC9cg1mOUaUALLdcm1RbxgxibNV6b3dTQ0OLnXA7tNZFQ90zRpy2E2ge64dXceO1icSECEHj7CML_rZ0qEjqDQ5Ur-27IU_gmZa4m_hsTG0E81b784ZHTPvTPvBWH_0qX8ymGUyh7hNcF_cF7dZ0SMjXyqyfaLBCXnclNRAndCM9Zykk1kRpim4PmZD9M0JSjFV7m2yTfK81Yok", alt: "Treehouse" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzga9ky57hKM522Tos6wniSMpT361DyQWRqgP2s37ElKkdZ-MSooMb72C80aGPhJB87ifkSPV6RVkk-z4nQ9Vwm_KCgVMR1K8RodmgxLLsKM6vWhm41_-vutsRgySTDWiwkkW8MEl_E4FsZ5JVKhhMjjwFwDMpM2z0YcroUz2R6oLp1PxEeiRy8ziS6e5wC_gV_PasA24t38eQWV8KQOYa_uv5YrGHxNVWzJjUD159SrVmorbnsb7at8vn3iE6wjetVSGNbmE_ceGM", alt: "Liquid color" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuARfQmeBssr-IKdVHD7bpNNBKw-Hu78aUqHTwXtJhmciQudb8R9hxFdg-sS7n1GyWt3RP1og-2L-6foUCaKAi68wxDUYtZ1RAMNx-JZozeB1231l-p9-vlGZNAbuVxPc6PZhdCKdeqGOgpgJMLmIdyYuuUPcAJhMvFH6Fl69KAZVfRRC9sfLKnxv7ok5p6yriJbMm2on8n5iOKoIDFKROl8clytWtnAwDnwoTIJr0rjqMWBiIZCFPtBGRsgOyj72CVxuAIAbH3D94Ci", alt: "Vintage car" },
];

const LandingPage: React.FC = () => {
  const router = useRouter();

  return (
    <div className="relative flex min-h-screen w-full flex-col  bg-background-dark font-display">
      <Navbar variant="landing" />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 sm:py-28 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-6 text-center">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl lg:text-6xl">
                Bring Your Imagination to Life
              </h1>
              <h2 className="max-w-2xl text-white/80 text-base font-normal leading-normal sm:text-lg">
                Transform your ideas into stunning, unique images with the power of artificial intelligence. Just describe what you want to see.
              </h2>
              <div className="mt-4 flex w-full max-w-xl flex-col gap-2 sm:flex-row">
                <label className="flex flex-col min-w-40 h-14 w-full">
                  <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                    <input 
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-white/20 bg-white/5 focus:border-primary h-full placeholder:text-white/50 px-4 text-base font-normal leading-normal" 
                      placeholder="A futuristic city skyline at sunset, cinematic..." 
                      defaultValue=""
                    />
                  </div>
                </label>
                <button 
                  onClick={() => router.push('/generate')}
                  className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
                >
                  <span className="truncate">Generate Your Image</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Image Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-white text-center text-3xl font-bold leading-tight tracking-[-0.015em] mb-8">Explore the Possibilities</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {GRID_IMAGES.map((img, idx) => (
                <div key={idx} className="group relative aspect-[3/4] overflow-hidden rounded-xl">
                  <img className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" src={img.src} alt={img.alt} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <p className="absolute bottom-4 left-4 text-white text-sm font-bold leading-tight w-4/5 line-clamp-3">{img.alt}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h4 className="text-primary text-sm font-bold uppercase leading-normal tracking-[0.015em] mb-2">How It Works</h4>
              <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em]">Create Your Vision in 3 Simple Steps</h2>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                { icon: "edit", title: "1. Describe Your Vision", text: "Type anything that comes to your mind. Be descriptive for the best results - think style, colors, and mood." },
                { icon: "auto_awesome", title: "2. Witness the Magic", text: "Our advanced AI interprets your words and generates a unique, high-quality image in just a few seconds." },
                { icon: "download", title: "3. Download & Share", text: "Love what you see? Save your creation in high resolution and share it with the world or use it in your projects." }
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-6 bg-white/5 rounded-xl border border-white/10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary mb-4">
                    <span className="material-symbols-outlined text-3xl">{step.icon}</span>
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-white/70 text-base">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-10">Limitless Possibilities</h2>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: "photo_camera", title: "Hyper-Realistic", text: "Generate images that are indistinguishable from real photographs." },
                { icon: "palette", title: "Multiple Styles", text: "From anime to abstract, explore a universe of artistic styles." },
                { icon: "bolt", title: "Fast Generation", text: "Go from idea to image in seconds, not hours." },
                { icon: "high_quality", title: "High Resolution", text: "Download your creations in stunning quality, ready for any use." }
              ].map((feat, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4">
                  <div className="flex-shrink-0 text-primary"><span className="material-symbols-outlined text-3xl">{feat.icon}</span></div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{feat.title}</h3>
                    <p className="text-white/70 mt-1">{feat.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Block */}
        <section className="py-20 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary to-purple-500 p-10 text-center shadow-lg">
              <div className="relative z-10">
                <h2 className="text-white text-3xl font-bold tracking-tight">Ready to Create Your Masterpiece?</h2>
                <p className="mt-3 text-lg text-white/90">Join thousands of creators and start bringing your ideas to life today.</p>
                <button 
                  onClick={() => router.push('/signup')}
                  className="mt-8 flex mx-auto min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-8 bg-white text-primary text-base font-bold leading-normal tracking-[0.015em] hover:bg-white/90 transition-colors"
                >
                  <span className="truncate">Get Started for Free</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LandingPage;