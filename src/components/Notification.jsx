import React, { useContext, useState } from 'react';
import { EmailContext, FormStatusContext } from '../App';
import iconSuccess from '/assets/images/icon-success.svg';
import ClipLoader from 'react-spinners/ClipLoader';

function Notification() {
  const { email, setEmail } = useContext(EmailContext);
  const { setFormStatus } = useContext(FormStatusContext);
  const [isLoading, setIsLoading ] = useState(false);
  function handleDismiss() {
    setIsLoading(isLoading => !isLoading);
    setTimeout(() => {
      setFormStatus(value => !value);
      setEmail('');
      setIsLoading(isLoading => !isLoading);
    }, 500);

  }

  return (
    <div className='h-dvh sm:h-full mx-6 py-12 grid justify-around sm:block sm:w-96'>
      <div className='my-8 self-center'>
        <img className='text-lg w-[54px] h-[54px] rounded-full' src={iconSuccess} alt="checkmark icon" />
        <h1 className='font-roboto-bold sm:text-5xl text-4xl mt-4'>Thanks for subscribing!</h1>
        <p className='sm:text-base text-md my-6'>A confirmation email has been sent to <b className='font-roboto-bold'>{email}</b>. Please open it and click the button inside to confirm your subscription.</p>
      </div>

      <div className='sm:mt-8 self-end'>
        <button onClick={handleDismiss} className="form-btn">
          {isLoading ? <ClipLoader loading={isLoading} size={24} speedMultiplier={2} color='#ffffff' aria-label="Loading Spinner" /> : <span>Dismiss message</span>}</button>
      </div>
    </div>
  )
}

export default Notification