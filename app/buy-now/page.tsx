import { CheckoutForm } from '@/components/Checkout';
import Image from 'next/image';

export default function Page() {
  return (
    <div className='p-4 min-h-screen flex flex-col gap-10 justify-center items-center '>
      <h1 className='font-bold text-3xl'>
        Grab yourself a Digital copy of The Millionaire Fastlane today
      </h1>
      <div className='w-full md:w-1/2'>
        <CheckoutForm />
        <div className='flex items-center justify-center gap-2'>
          <h1>Powered by</h1>
          <Image src='/Mpesa-Logo.png' width={100} height={100} alt='M-PESA' />
        </div>
      </div>
    </div>
  );
}
