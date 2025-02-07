import React from 'react';
import illustrationMobile from '/assets/images/illustration-sign-up-mobile.svg';
import illustration from '/assets/images/illustration-sign-up-desktop.svg';
import iconSuccess from '/assets/images/icon-success.svg';
import NewsLetterForm from './NewsLetterForm';


function Panel() {
    return (
        <>
            <div className='img rounded-b-lg sm:h-full sm:grow sm:basis-1/2'>
                <img src={illustrationMobile} alt='signup illustration' className='sm:hidden' />
                <img src={illustration} alt='signup illustration' className='hidden sm:block object-cover sm:h-full w-full rounded-lg' />
            </div>
            <div className='mx-6 py-8 pr-6 sm:basis-1/2'>
                <h1 className=' font-roboto-bold sm:text-5xl text-3xl'>Stay updated!</h1>
                <p className='sm:text-sm text-sm my-6'>Join 60,000+ product managers receiving monthly updates on:</p>
                <ul className=''>
                    <li className='flex mb-2 mt-4'> <img className='text-lg w-[24px] h-[24px] sm:w-[20px] sm:h-[20px] rounded-full' src={iconSuccess} alt="" /><span className='text-base sm:text-sm pl-4'>Product discovery and building what matters</span></li>
                    <li className='flex my-2'> <img className='text-lg w-[24px] h-[24px] sm:w-[20px] sm:h-[20px] rounded-full' src={iconSuccess} alt="" /><span className='text-base sm:text-sm pl-4'>Measuring to ensure updates are a success</span></li>
                    <li className='flex mt-2 mb-4'> <img className='text-lg w-[24px] h-[24px] sm:w-[20px] sm:h-[20px] rounded-full' src={iconSuccess} alt="" /><span className='text-base sm:text-sm pl-4'>And much more!</span></li>
                </ul>
                <NewsLetterForm />
            </div>
        </>
    )
}

export default Panel