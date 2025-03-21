import { prisma } from '@/lib/prisma';
import { CallbackBody, MpesaUpdateData } from '@/types/stkpush';
import { NextResponse } from 'next/server';

export const POST = async (req: Request) => {
  try {
    const callBackData: CallbackBody = await req.json();

    console.log(callBackData.Body.stkCallback);

    const {
      Body: {
        stkCallback: {
          MerchantRequestID,
          CheckoutRequestID,
          ResultCode,
          ResultDesc,
          CallbackMetadata,
        },
      },
    } = callBackData;

    console.log('Received M-Pesa callback:', {
      MerchantRequestID,
      CheckoutRequestID,
      ResultCode,
      ResultDesc,
    });

    const transaction = await prisma.mpesaTransaction.findUnique({
      where: { checkoutRequestId: CheckoutRequestID },
    });

    if (!transaction) {
      console.error(
        'Transaction not found for CheckoutRequestID:',
        CheckoutRequestID,
      );
      // Still return success to M-Pesa
      return NextResponse.json({
        ResultCode: 0,
        ResultDesc: 'Callback received successfully',
      });
    }

    const updateData: MpesaUpdateData = {
      resultCode: ResultCode,
      resultDesc: ResultDesc,
      status: ResultCode === 0 ? 'COMPLETE' : 'FAILED',
    };

    if (ResultCode === 0 && CallbackMetadata) {
      const metaDataItems = CallbackMetadata.Item;

      const findMetadataValue = (name: string) => {
        const item = metaDataItems.find((item) => item.Name === name);
        return item ? item.Value : null;
      };

      const mpesaReceiptNumber = findMetadataValue(
        'MpesaReceiptNumber',
      ) as string;
      const transactionDate = findMetadataValue('TransactionDate') as number;

      if (transactionDate) {
        updateData.transactionDate = new Date(transactionDate);
        updateData.mpesaReceiptNumber = mpesaReceiptNumber;

        console.log('Payment successful:', {
          mpesaReceiptNumber,
          transactionDate,
        });
      } else {
        console.log('Payment failed', ResultDesc);
      }
    }

    await prisma.mpesaTransaction.update({
      where: { id: transaction.id },
      data: updateData,
    });

    return NextResponse.json({
      ResultCode: 0,
      ResultDesc: 'Callback received successfully',
    });
  } catch (error) {
    console.error('Something went wrong:', error);

    return NextResponse.json({
      ResultCode: 0,
      ResultDesc: 'Callback received successfully',
    });
  }
};
