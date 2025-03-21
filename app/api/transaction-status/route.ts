import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);

  const checkoutRequestId = searchParams.get('checkoutRequestId');

  if (!checkoutRequestId) {
    return NextResponse.json('CheckoutRequestId not found', { status: 400 });
  }

  try {
    const transaction = await prisma.mpesaTransaction.findUnique({
      where: { checkoutRequestId },
      select: {
        status: true,
        mpesaReceiptNumber: true,
        transactionDate: true,
        resultCode: true,
        resultDesc: true,
      },
    });

    if (!transaction) {
      return NextResponse.json('Transaction not found', { status: 404 });
    }

    return NextResponse.json(transaction);
  } catch (error) {
    console.error(error);
    return NextResponse.json('Failed to fetch transaction status', {
      status: 500,
    });
  }
};
