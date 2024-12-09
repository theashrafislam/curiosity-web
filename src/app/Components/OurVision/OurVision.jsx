import React from 'react';

const OurVision = () => {
    return (
        <div className='py-14'>
            {/* header text section  */}
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-[#1C1C1C] text-[40px] font-semibold'>জিজ্ঞাসা কর তোমার</h1>
                <h1 className='text-[#8A00CA] text-[40px] font-semibold'>আগ্রহের প্রশ্নগুলি</h1>
                <p className='text-[#475467] text-xl mt-4'>Ai ভিত্তিক পড়াশোনার মাধ্যমে নিজেকে এগিয়ে রাখো</p>
            </div>
            {/* rocket and text section  */}
            <div className='w-11/12 mx-auto'>
                <img src="/Image/roket&text.png" alt="hello" />
            </div>
            {/* card section  */}
            <div className='flex justify-between w-10/12 mx-auto my-12 gap-4'>
                {/* card 1 */}
                <div className='w-[70%] grid grid-cols-2 gap-3'>
                    {/* four cards */}
                    {
                        [1, 2, 3, 4].map(card => (
                            <div key={card} className='flex flex-col gap-4 p-4 rounded-3xl border-2 border-[#6a4c93]'>
                                <img src="/Image/icons/icon1.png" alt="" className='w-10 h-10' />
                                <p className='text-[#1C1C1C] text-xl font-medium'>প্রস্তুত হও তোমার কৌতূহলকে উজ্জীবিত করতে, নতুন ধারণা আবিষ্কার করতে এবং শেখার আনন্দকে বাড়াতে ?</p>
                            </div>
                        ))
                    }

                </div>
                {/* card 2 */}
                <div className='w-[30%] rounded-3xl border-2 border-[#6a4c93] p-4'>
                    <img src="/Image/icons/icon1.png" alt="" className='w-10 h-10' />
                    <p className='text-xl text-[#1C1C1C] font-medium py-4'>হাতের লিখা প্রশ্নের সমাধান</p>
                    <img src="/Image/writeInPaper.png" alt="" className='w-full rounded-3xl border-1.5 border-[#6a4c93]'/>
                </div>
            </div>
        </div>
    );
};

export default OurVision;