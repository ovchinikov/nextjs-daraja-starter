import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section className=''>
        <div>
          <div>
            <h1>
              Have you been duped by all the fake financial gurus out there?{' '}
            </h1>
            <p>
              They say, sacrifice that $5 on coffee and invest it in the stock.
              What they don&apos;t is the they didn&apos;t get rich using the
              methods they preach!
            </p>

            <Link href='/buy-now'>
              <button>Buy now</button>
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

      <section>
        <h1>What is your financial strategy?</h1>
        <p>Does any of these apply to you to currently?</p>

        <div>
          <div>
            <h2>The sidewalk financial plan</h2>
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
            <h2>The Slowlane financial plan</h2>
            <p>
              You are the type of person that believes in the 40-40-40 plan. You
              work 40 hours a week, for 40 years and retire on 40% of your
              income. You believe in saving every penny you get, you believe in
              investing in the stock market, you believe in the 401k, you
              believe in the IRA. You believe in the slowlane financial plan.
            </p>
          </div>

          <div>
            <h1>The Fastlane Financial Plane</h1>
            <p>
              You the type of person that believes in creating a business that
              can scale. You don&apos;t have the word budget in your vocubulary.
              Guess how many are in this category? They are the 1% of the
              population. They&apos;re the types of guys who don&apos;t follow
              convential advice.
              <br></br>
              If you listen to the masses, you&apos;ll always get the masses
              results. If you want to be rich, you need to do what the rich do.
            </p>
          </div>
        </div>

        <Link href='/buy-now'>
          <button>Buy now</button>
        </Link>
      </section>

      <section>
        <h1>
          Join the million of others who&apos;ve rejected Financial mediocrity
          and gone Fastlane
        </h1>

        <div>
          <p>Spoiler Alert!</p>
          <h2>
            Your financial guru didn&apos;t get rich with the methods they
            preach about{' '}
          </h2>
          <p>
            They got rich by selling you their books, their courses, their
            seminars. They got rich by selling you the dream of getting rich.
            They got rich by selling you the dream of getting rich fast. They
            got rich by selling you the dream of getting rich in a short period
            of time.
          </p>
          <p>
            I call this the Paradox of practice in my book. Would you rather get
            advice from a person whose started multiple businesses or someone
            who preaches what they&apos;ve never done? I bet you guessed it
            right
          </p>

          <Link href='/buy-now'>
            <button>Buy now</button>
          </Link>
        </div>

        <Image
          src='/personal-finance-liar.png'
          width={500}
          height={500}
          alt='Personal Financial Liar'
        />
      </section>

      <section>
        <h1>What you&apos;ll learn in this book</h1>
        <p>
          Only unconvential wisdom in this great book. You&apos;ll never get
          this book the bestseller list.... But guess what, those who read it
          willl tell you themselves
        </p>

        <div>
          <div>
            <h2>The 3 financial roads. Which one are you driving?</h2>
            <ul>
              <li>The Sidewalk</li>
              <li>The Slowlane</li>
              <li>The Fastlane</li>
            </ul>
          </div>

          <div>
            <h2>The CENTS framework for starting a business</h2>
            <ul>
              <li>Control</li>
              <li>Entry</li>
              <li>Need</li>
              <li>Time</li>
              <li>Scale</li>
            </ul>
          </div>
        </div>

        <Link href='/buy-now'>
          <button>Buy now</button>
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
