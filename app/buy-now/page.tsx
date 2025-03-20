import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

export default function Page() {
  return (
    <div className='p-4 min-h-screen flex flex-col gap-10 justify-center '>
      <h1 className='font-bold text-3xl'>
        Grab yourself a Digital copy of The Millionaire Fastlane today
      </h1>
      <div className='w-full md:w-1/2'>
        <form action='' className='flex flex-col gap-4'>
          <div>
            <label htmlFor='firstName'>First Name</label>
            <Input type='text' placeholder='First name' />
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <Input type='email' placeholder='Email' />
          </div>

          <div>
            <h1 className='text-sm'>
              *We will send an M-PESA prompt to your phone
            </h1>
            <label className='mb-2' htmlFor='phoneNumber'>
              Phone number
            </label>
            <Input type='tel' placeholder='Phone number' />
          </div>

          <Button type='submit' className='w-full md:inline-block'>
            Checkout
          </Button>
        </form>
        <div className='flex items-center justify-center gap-2'>
          <h1>Powered by</h1>
          <Image src='/Mpesa-Logo.png' width={100} height={100} alt='M-PESA' />
        </div>
      </div>
    </div>
  );
}
