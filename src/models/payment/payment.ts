export type PaymentRequest = {
  bookingId: string;
  total: number;
  bankCode: string;
  language: string;
  returnUrl: string;
};

export interface GetPaymentResponse {
  code: number;
  message: string;
  data: Payment;
}
export interface Payment {
  code: string;
  message: string;
  paymentUrl: string;
}

export type PaymentCheckRequest = {
  bookingId: string;
  vnp_Amount: string;
  vnp_BankCode: string;
  vnp_BankTranNo: string;
  vnp_CardType: string;
  vnp_OrderInfo: string;
  vnp_PayDate: string;
  vnp_ResponseCode: string;
  vnp_TmnCode: string;
  vnp_TransactionNo: string;
  vnp_TransactionStatus: string;
  vnp_TxnRef: string;
  vnp_SecureHash: string;
};
