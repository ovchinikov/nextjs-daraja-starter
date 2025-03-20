import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='p-4'>
      <section className=''>
        <div className='flex flex-col md:flex-row gap-10'>
          <div>
            <h1 className='text-4xl font-bold'>
              Have you been duped by all the fake financial gurus out there?{' '}
            </h1>
            <p className='text-lg mt-4 leading-7'>
              They say, sacrifice that $5 on coffee and invest it in the stock.
              What they don&apos;t is the they didn&apos;t get rich using the
              methods they preach!
            </p>

            <Link href='/buy-now' className='mt-4 inline-block'>
              <Button>Buy now</Button>
            </Link>
          </div>

          <Image
            src='/millionaire-fastlane-composite.webp'
            width={500}
            height={500}
            alt='Millionaire Fastlane'
          />
        </div>
      </section>

      <section className='mt-16'>
        <h1 className='text-2xl font-bold'>What is your financial strategy?</h1>
        <p className='mt-2 text-lg leading-7'>
          Does any of these apply to you to currently?
        </p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
          <div>
            <h2 className='text-xl font-bold'>The sidewalk financial plan</h2>
            <p>
              You the YOLO type of guy. You spend whatever you get, instant
              gratification is your best friend. You hardly think abouut
              tomorrow, well in as much as tomorrow is not promised, you still
              need to plan for it. You live paycheck to paycheck, you are always
              broke. You are always in debt. You are always looking for the next
              quick fix to your financial problems.
            </p>
          </div>

          <div>
            <h2 className='text-xl font-bold'> The Slowlane financial plan</h2>
            <p>
              You are the type of person that believes in the 40-40-40 plan. You
              work 40 hours a week, for 40 years and retire on 40% of your
              income. You believe in saving every penny you get, you believe in
              investing in the stock market, you believe in the 401k, you
              believe in the IRA. You believe in the slowlane financial plan.
            </p>
          </div>

          <div>
            <h2 className='text-xl font-bold'>The Fastlane Financial Plane</h2>
            <p>
              You the type of person that believes in creating a business that
              can scale. You don&apos;t have the word budget in your vocubulary.
              Guess how many are in this category? They are the 1% of the
              population. They&apos;re the types of guys who don&apos;t follow
              convential advice.
              <br />
              <br />
              If you listen to the masses, you&apos;ll always get the masses
              results. If you want to be rich, you need to do what the rich do.
            </p>
          </div>
        </div>

        <Link href='/buy-now' className='mt-4 inline-block'>
          <Button>Buy now</Button>
        </Link>
      </section>

      <section className='mt-16'>
        <h1 className='text-2xl font-bold'>
          Join the million of others who&apos;ve rejected Financial mediocrity
          and gone Fastlane
        </h1>

        <div className=' mt-4'>
          <p className='font-bold'>Spoiler Alert!</p>
          <h2 className='mt-2 text-xl font-bold'>
            Your financial guru didn&apos;t get rich with the methods they
            preach about{' '}
          </h2>
          <p className='mt-4'>
            They got rich by selling you their books, their courses, their
            seminars. They got rich by selling you the dream of getting rich.
            They got rich by selling you the dream of getting rich fast. They
            got rich by selling you the dream of getting rich in a short period
            of time.
          </p>
          <p className='mt-4'>
            I call this the Paradox of practice in my book. Would you rather get
            advice from a person whose started multiple businesses or someone
            who preaches what they&apos;ve never done? I bet you guessed it
            right
          </p>
          <Link href='/buy-now' className='mt-4 inline-block'>
            <Button>Buy now</Button>
          </Link>
        </div>

        <Image
          src='/personal-finance-liar.png'
          width={500}
          height={500}
          alt='Personal Financial Liar'
        />
      </section>

      <section className='mt-16'>
        <h1 className='text-xl font-bold'>
          What you&apos;ll learn in this book
        </h1>
        <p className='mt-4'>
          Only unconvential wisdom in this great book. You&apos;ll never get
          this book on the bestseller list.... But guess what, those who read it
          willl tell you the impact this book has made.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
          <div>
            <h2 className='text-lg font-bold'>
              The 3 financial roads. Which one are you driving?
            </h2>
            <ul className='list-disc list-inside'>
              <li className='text-lg'>The Sidewalk</li>
              <li className='text-lg'>The Slowlane</li>
              <li className='text-lg'>The Fastlane</li>
            </ul>
          </div>

          <div>
            <h2 className='text-xl font-bold'>
              The CENTS framework for starting a business
            </h2>
            <ul className='list-disc list-inside'>
              <li className='text-lg'>The Commandment of Control</li>
              <li className='text-lg'>The Commandment of Entry</li>
              <li className='text-lg'>The Commandment of Need</li>
              <li className='text-lg'>The Commandment of Time</li>
              <li className='text-lg'>The Commandment of Scale</li>
            </ul>
          </div>
        </div>

        <Link href='/buy-now' className='mt-4 inline-block'>
          <Button>Buy now</Button>
        </Link>
      </section>

      <section>
        <h1>What others are saying... Including Chatgpt</h1>
        <div>
          <div>
            <blockquote>
              <p>
                I was skeptical at first, but after reading the book, I was
                convinced. I started my own business and I&apos;m on my way to
                financial freedom
              </p>
              <footer>John Doe</footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section>
        <h1>About the Author</h1>
        <div>
          <h2>I&apos;m MJ. DeMarco</h2>
          <p>
            A lifetime Entrepreneur and author of the bestseller, The
            Millionaire Fastlane. I&apos;ve started multiple businesses and
            failed multiple times. I&apos;ve been in the trenches and I know
            what it takes to be successful. I&apos;ve been where you are and I
            know what it takes to get to where you want to be.
          </p>
        </div>
      </section>
    </main>
  );
}
