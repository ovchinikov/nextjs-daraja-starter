'use client';

import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function CheckoutForm() {
  const [transactionStatus, setTransactionStatus] = useState('PENDING');
  const [checkoutRequestId, setCheckoutRequestId] = useState('');
  const [pollingActive, setPollingActive] = useState(false);

  const pollTransactionStatus = async (checkoutRequestId: string) => {
    const checkStatus = async () => {
      try {
        console.log('Checking transaction status for: ', checkoutRequestId);

        const response = await fetch(
          `/api/transaction-status?checkoutRequestId=${checkoutRequestId}`,
        );

        if (!response.ok) {
          console.error('Failed to fetch transaction status', response.status);
        }

        const data = await response.json();
        console.log('Transaction status:', data);

        if (data && typeof data.status === 'string') {
          console.log('Setting new status: ', data.status);
          setTransactionStatus(data.status);
          return ['COMPLETE', 'FAILED'].includes(data.status);
        }

        return false;
      } catch (error) {
        console.error('Error checking transaction status:', error);
        return false;
      }
    };

    const poll = async () => {
      if (!pollingActive) {
        return;
      }

      const isComplete = await checkStatus();

      if (!isComplete && pollingActive) {
        console.log('Polling again in 3 seconds...');
        setTimeout(poll, 3000);
      } else {
        console.log('Polling stopped');
        setPollingActive(false);
      }
    };

    poll();
  };

  useEffect(() => {
    return () => {
      setPollingActive(false);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const phone_number = e.currentTarget.phone_number.value;
    const first_name = e.currentTarget.first_name.value;

    try {
      const response = await fetch('/api/stk-push', {
        method: 'POST',
        body: JSON.stringify({
          phone_number,
          email,
          first_name,
        }),
      });

      const data = await response.json();
      console.log(`Response:`, data);

      //console checkoutRequestId

      console.log(data.data.checkoutRequestId);

      if (data.success) {
        setCheckoutRequestId(data.data.checkoutRequestId);

        pollTransactionStatus(data.data.checkoutRequestId);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <div>
          <label htmlFor='firstName'>First Name</label>
          <Input type='text' name='first_name' placeholder='First name' />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <Input type='email' name='email' placeholder='Email' />
        </div>

        <div>
          <h1 className='text-sm'>
            *We will send an M-PESA prompt to your phone
          </h1>
          <label className='mb-2' htmlFor='phoneNumber'>
            Phone number
          </label>
          <Input type='tel' name='phone_number' placeholder='Phone number' />
        </div>

        <Button type='submit' className='w-full md:inline-block'>
          Checkout
        </Button>
      </form>
      {checkoutRequestId && (
        <div className='mt-4'>
          <p>Transaction Status: {transactionStatus}</p>
          {transactionStatus === 'PENDING' && (
            <p>Please complete payment on your phone...</p>
          )}
          {transactionStatus === 'COMPLETE' && (
            <p>Payment successful! Thank you.</p>
          )}
          {transactionStatus === 'FAILED' && (
            <p>Payment failed. Please try again.</p>
          )}
        </div>
      )}
    </>
  );
}
