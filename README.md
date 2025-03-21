# Next.js Daraja Starter Kit

A modern Next.js application that integrates with Safaricom's Daraja API (M-Pesa) for mobile payments. This project serves as a starter template for building applications that require M-Pesa integration in Kenya.

## Features

- **M-Pesa Integration**: Ready-to-use STK Push functionality
- **Modern Tech Stack**: Next.js 15, React 19, TypeScript, Prisma
- **UI Components**: Built with Shadcn UI components
- **Dark Mode Support**: Via next-themes
- **Database**: PostgreSQL integration with Prisma ORM
- **Docker Ready**: Containerized setup for easy deployment

## Tech Stack

- [Next.js 15](https://nextjs.org/)
- [React 19](https://react.dev/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## Prerequisites

- Node.js 18 or newer
- pnpm (recommended) or npm
- Docker and Docker Compose (for containerized setup)
- Safaricom Daraja API credentials
- ngrok or similar tool for M-Pesa callbacks during local development

## Installation & Setup

### Using Docker

1. Clone the repository:

   ```bash
   git clone https://github.com/ovchinikov/nextjs-daraja-starter.git
   cd nextjs-daraja-starter
   ```

2. Create a `.env` file in the root directory with the following variables:

   ```
   M_PESA_CONSUMER_KEY=your_consumer_key
   M_PESA_CONSUMER_SECRET=your_consumer_secret
   M_PESA_PASSKEY=your_passkey
   NGROK_URL=your_ngrok_url
   ```

3. Start the application with Docker Compose:

   ```bash
   docker compose up
   ```

4. Access the application at http://localhost:3000

### On Localhost

1. Clone the repository:

   ```bash
   git clone https://github.com/ovchinikov/nextjs-daraja-starter.git
   cd nextjs-daraja-starter
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Create a `.env` file in the root directory with the following variables:

   ```
   DATABASE_URL=postgresql://postgres:password@localhost:5432/daraja-mpesa?sslmode=disable
   M_PESA_CONSUMER_KEY=your_consumer_key
   M_PESA_CONSUMER_SECRET=your_consumer_secret
   M_PESA_PASSKEY=your_passkey
   NGROK_URL=your_ngrok_url
   ```

4. Set up the database:

   ```bash
   pnpm db:generate
   pnpm db:migrate
   ```

5. Start the development server:

   ```bash
   pnpm dev
   ```

6. Access the application at http://localhost:3000

## Environment Variables

- `DATABASE_URL`: PostgreSQL connection string
- `M_PESA_CONSUMER_KEY`: Your Safaricom Daraja API consumer key
- `M_PESA_CONSUMER_SECRET`: Your Safaricom Daraja API consumer secret
- `M_PESA_PASSKEY`: Your M-Pesa passkey for transaction validation
- `NGROK_URL`: Public URL for receiving callbacks from M-Pesa (using ngrok or similar tool)

## Available Scripts

- `pnpm dev`: Start the development server with automatic database migrations
- `pnpm build`: Build the application for production
- `pnpm start`: Start the production server
- `pnpm lint`: Run ESLint
- `pnpm db:generate`: Generate Prisma client
- `pnpm db:migrate`: Run database migrations
- `pnpm db:deploy`: Deploy database migrations in production

## API Endpoints

- `/api/stk-push`: Initiates an M-Pesa STK push to a customer's phone

## Setting Up ngrok for M-Pesa Callbacks

For M-Pesa to send transaction callbacks to your local development environment, you'll need to set up a public URL:

1. Install ngrok: https://ngrok.com/download
2. Start ngrok on port 3000:
   ```bash
   ngrok http 3000
   ```
3. Copy the HTTPS URL provided by ngrok and set it as your `NGROK_URL` environment variable

## Postgres Database

By default, the PostgreSQL database runs on:

- Host: `localhost` (or `postgres` when using Docker)
- Port: 5432 (mapped to 5435 on host when using Docker)
- Username: postgres
- Password: password
- Database: daraja-mpesa

## Troubleshooting

- **Database Connection Issues**: Make sure PostgreSQL is running and the connection string is correct
- **M-Pesa API Errors**: Verify your Daraja API credentials and ensure your ngrok URL is set correctly
- **Docker Issues**: Ensure Docker and Docker Compose are installed and running

## License

[MIT](LICENSE)
