import { prisma } from '@/lib/prisma';
import { MpesaResponse } from '@/types/stkpush';
import { NextResponse } from 'next/server';

export const POST = async (req: Request) => {
  try {
    const { phone_number, email } = await req.json();

    const consumerKey = process.env.M_PESA_CONSUMER_KEY;
    const consumerSecret = process.env.M_PESA_CONSUMER_SECRET;

    const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString(
      'base64',
    );

    const response = await fetch(
      'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
      {
        method: 'GET',
        headers: {
          Authorization: `Basic ${auth}`,
        },
      },
    );

    const tokenData = await response.json();
    const accessToken = tokenData.access_token;

    console.log('Access Token:', accessToken);

    const date = new Date();
    const timestamp =
      date.getFullYear() +
      ('0' + (date.getMonth() + 1)).slice(-2) +
      ('0' + date.getDate()).slice(-2) +
      ('0' + date.getHours()).slice(-2) +
      ('0' + date.getMinutes()).slice(-2) +
      ('0' + date.getSeconds()).slice(-2);

    const passkey = process.env.M_PESA_PASSKEY;

    const password = Buffer.from('174379' + passkey + timestamp).toString(
      'base64',
    );

    const callbackUrl = `${process.env.NGROK_URL}/api/stk-push/callback`;

    const requestBody = {
      BusinessShortCode: '174379',
      Password: password,
      Timestamp: timestamp,
      TransactionType: 'CustomerBuyGoodsOnline',
      Amount: 1,
      PartyA: phone_number,
      PartyB: '174379',
      PhoneNumber: phone_number,
      CallBackURL: callbackUrl,
      AccountReference: 'Digital Product',
      TransactionDesc: 'Digital Product',
    };

    const stkPushResponse = await fetch(
      'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      },
    );

    const mpesaResponseData: MpesaResponse = await stkPushResponse.json();
    console.log('STK Push Response:', mpesaResponseData);

    //save to database

    await prisma.mpesaTransaction.create({
      data: {
        merchantRequestId: mpesaResponseData.MerchantRequestID,
        checkoutRequestId: mpesaResponseData.CheckoutRequestID,
        phoneNumber: phone_number,
        amount: 1,
        email,
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Payment initiated successfully',
      data: {
        checkoutRequestId: mpesaResponseData.CheckoutRequestID,
        merchantRequestId: mpesaResponseData.MerchantRequestID,
      },
    });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Payment initiation failed',
        error: error instanceof Error ? error.message : 'An error occurred',
      },
      { status: 500 },
    );
  }
};
