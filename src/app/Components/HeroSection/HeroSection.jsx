import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
    return (
        <div className=''>
            <div
                className='flex items-center justify-between min-h-screen'
                style={{
                    background: "radial-gradient(50% 50% at 50% 50%, #1D1D1D 0%, #0A0A0A 100%)"
                }}
            >
                {/* text section */}
                <div className='space-y-3 w-[50%] ml-36'>
                    <h1 className='text-5xl font-semibold text-[#FFFF]'><span className='bg-gradient-to-r from-[#8A00CA] via-[#4394F0] via-[#F051FF] to-[#440064] bg-clip-text text-transparent'>কিউরিওসিটি</span> : যেখানে প্রতিটি <br /> প্রশ্নের জন্ম দেয় নতুন আবিষ্কার!</h1>
                    <p className='text-[#F3F3F7] text-xl'>“কিউরিওসিটি” হচ্ছে সেই বিখ্যাত মহাকাশযান, যা মঙ্গল গ্রহে জীবনের <br /> সন্ধানে প্রেরিত হয়েছিল। তার নামের মতোই, কিউরিওসিটি প্রতিফলিত করে <br /> সেই সীমাহীন কৌতূহল যা প্রত্যেক শিক্ষার্থীর শৈশবে প্রয়োজন।</p>
                    {/* button section  */}
                    <div className='flex items-center gap-3 pt-20'>
                        <button className='text-base font-semibold bg-[#8A00CA] px-5 py-3 rounded-xl flex items-center gap-2 text-[#FFF]'>
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4" d="M12.9993 1.0415C13.2916 1.0415 13.5448 1.24404 13.6091 1.52916L14.058 3.52214C14.3858 4.97716 15.522 6.11341 16.977 6.44117L18.97 6.89012C19.2551 6.95434 19.4577 7.20758 19.4577 7.49984C19.4577 7.7921 19.2551 8.04533 18.97 8.10956L16.977 8.5585C15.522 8.88626 14.3858 10.0225 14.058 11.4775L13.6091 13.4705C13.5448 13.7556 13.2916 13.9582 12.9993 13.9582C12.7071 13.9582 12.4539 13.7556 12.3896 13.4705L11.9407 11.4775C11.6129 10.0225 10.4767 8.88626 9.02165 8.5585L7.02867 8.10956C6.74355 8.04533 6.54102 7.7921 6.54102 7.49984C6.54102 7.20758 6.74355 6.95434 7.02867 6.89012L9.02165 6.44117C10.4767 6.11341 11.6129 4.97716 11.9407 3.52214L12.3896 1.52916C12.4539 1.24404 12.7071 1.0415 12.9993 1.0415Z" fill="white" />
                                <path d="M6.33268 9.37476C6.62494 9.37476 6.87818 9.57729 6.9424 9.86241L7.26308 11.286C7.48204 12.258 8.24111 13.0171 9.21314 13.236L10.6367 13.5567C10.9218 13.6209 11.1243 13.8742 11.1243 14.1664C11.1243 14.4587 10.9218 14.7119 10.6367 14.7761L9.21314 15.0968C8.24111 15.3158 7.48204 16.0749 7.26308 17.0469L6.9424 18.4704C6.87818 18.7556 6.62494 18.9581 6.33268 18.9581C6.04042 18.9581 5.78719 18.7556 5.72296 18.4704L5.40229 17.0469C5.18333 16.0749 4.42425 15.3158 3.45223 15.0968L2.02867 14.7761C1.74355 14.7119 1.54102 14.4587 1.54102 14.1664C1.54102 13.8742 1.74355 13.6209 2.02867 13.5567L3.45223 13.236C4.42425 13.0171 5.18333 12.258 5.40229 11.286L5.72296 9.86241C5.78719 9.57729 6.04042 9.37476 6.33268 9.37476Z" fill="white" />
                            </svg>
                            প্রশ্ন করে দেখো
                        </button>
                        <button className='text-base font-semibold bg-[#FFF] px-8 py-3 rounded-xl flex items-center gap-2 text-black'>
                            বিস্তারিত জানো
                        </button>
                    </div>
                </div>
                {/* image section */}
                <div className='w-[50%]'
                >
                    <img src="/Image/hero.png" alt="hero" className="w-full h-screen object-cover" />
                </div>
            </div>
            {/* sky section  */}
            <div className='bg-red-500 '>
                <img src="/Image/sky.png" alt="sky" className='w-full'/>
            </div>
        </div>
    );
};

export default HeroSection;