import { Check } from 'lucide-react';
import React from 'react';

const Pricing = () => {
    return (
        <div>
            <div className='text-center mt-40 mb-13'>
                <h1 className='text-5xl font-bold mb-3.5'>Simple, Transparent Pricing</h1>
                <p className='text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='grid grid-cols-3 gap-5 w-8/12 mx-auto mb-40 '>
                <div className='bg-[#F9FAFC] p-8 rounded-2xl border border-[#e2e2e2]'>
                    <div>
                        <h1 className='font-bold  text-3xl'>Starter</h1>
                        <p className='text-[16px] mb-6 text-[#627382]'>Perfect for getting started</p>
                    </div>
                    <div className='flex'>
                        <h1 className='text-4xl font-semibold'>$0</h1>
                        <p className='mt-3 text-xl mb-5 font-normal text-[#627382]'>/month</p>
                    </div>
                    <div>
                        <p className='font-normal items-center flex gap-1.5'> <Check size={20} color="#44ff00" /> Access to 10 free tools</p>
                        <p className='font-normal items-center flex gap-1.5'> <Check size={20} color="#44ff00" /> Basic templates</p>
                        <p className='font-normal items-center flex gap-1.5'> <Check size={20} color="#44ff00" /> Community support</p>
                        <p className='font-normal items-center flex gap-1.5'> <Check size={20} color="#44ff00" /> 1 project per month</p>
                    </div>
                    <div className='relative'>
                        <button className=' absolute mt-18 w-full text-[16px] font-normal text-white rounded-3xl 
                             bg-gradient-to-r from-[#4F39F6] to-[#9514FA] btn'>Get Started Free</button>
                </div>
                </div>

                <div className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white p-8 rounded-2xl relative'>
                    <div className='absolute -mt-11 ml-20'>
                        <h1 className='text-[#BB4D00] bg-[#FEF3C6] text-[12px] py-1 px-1.5 rounded-4xl'>Most Popular</h1>
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold'>Pro</h1>
                        <p className='text-[14px] mb-6'>Best for professionals</p>
                    </div>
                    <div className='flex'>
                        <h1 className='text-4xl font-semibold'>$29</h1>
                        <p className='mt-3 text-xl mb-5 font-normal'>/month</p>
                    </div>
                    <div className=''>
                        <p className='font-normal flex items-center gap-1.5'> <Check size={18} /> Access to all premium tools</p>
                        <p className='font-normal flex items-center gap-1.5'> <Check size={18} /> Unlimited templates</p>
                        <p className='font-normal flex items-center gap-1.5'> <Check size={18} /> Priority support</p>
                        <p className='font-normal flex items-center gap-1.5'> <Check size={18} /> Unlimited projects</p>
                        <p className='font-normal flex items-center gap-1.5'> <Check size={18} /> Cloud sync</p>
                        <p className='font-normal flex items-center gap-1.5'> <Check size={18} /> Advanced analytics</p>
                    </div>
                    <div><button className='btn w-full rounded-4xl text-[#4F39F6] mt-6 font-normal'>Start Pro Trial</button></div>
                </div>

                <div className='bg-[#F9FAFC] p-8 rounded-2xl border border-[#e2e2e2]'>
                    <div>
                        <h1 className='font-bold  text-3xl'>Enterprise</h1>
                        <p className='text-[14px] mb-6 text-[#627382]'>For teams and businesses</p>
                    </div>
                    <div className='flex'>
                        <h1 className='text-4xl font-semibold'>$99</h1>
                        <p className='mt-3 text-xl mb-5 font-normal text-[#627382]'>/month</p>
                    </div>
                    <div>
                        <p className='font-normal flex items-center gap-1.5'> <Check size={20} color="#44ff00" /> Everything in Pro</p>
                        <p className='font-normal flex items-center gap-1.5'> <Check size={20} color="#44ff00" /> Team collaboration</p>
                        <p className='font-normal flex items-center gap-1.5'> <Check size={20} color="#44ff00" /> Custom branding</p>
                        <p className='font-normal flex items-center gap-1.5'> <Check size={20} color="#44ff00" /> Custom integrations</p>
                        <p className='font-normal flex items-center gap-1.5'> <Check size={20} color="#44ff00" /> Dedicated support</p>
                        <p className='font-normal flex items-center gap-1.5'> <Check size={20} color="#44ff00" /> SLA guarantee</p>
                    </div>
                    <div className='relative'>
                        <button className=' absolute mt-6 w-full text-[16px] font-normal text-white rounded-3xl 
                             bg-gradient-to-r from-[#4F39F6] to-[#9514FA] btn'>Contact Sales</button></div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;