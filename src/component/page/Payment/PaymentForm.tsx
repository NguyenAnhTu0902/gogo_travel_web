/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useEffect, useState } from "react";
import { PaymentRequest } from "@/models/payment/payment";
import { useParams, useRouter } from "next/navigation";
import { getBookingById } from "@/service/booking";
import { GetBookingDetailResponse } from "@/models/booking/get";
import { paymentVnPay } from "@/service/payment";
import { formatPrice } from "@/utils/price";

const PaymentForm = () => {
  const param = useParams();
  const id = typeof param.id === "string" ? param.id : "";
  const router = useRouter();

  const [bookingResponse, setBookingResponse] =
    useState<GetBookingDetailResponse>();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [language, setLanguage] = useState("vi");

  const methods = [
    {
      label: "Cổng thanh toán VNPAYQR",
      value: "",
    },
    {
      label: "Thanh toán qua ứng dụng hỗ trợ VNPAYQR",
      value: "VNPAYQR",
    },
    {
      label: "Thanh toán qua ATM-Tài khoản ngân hàng nội địa",
      value: "VNBANK",
    },
    {
      label: "Thanh toán qua thẻ quốc tế",
      value: "INTCARD",
    },
  ];

  const handleSubmit = useCallback(async () => {
    const request: PaymentRequest = {
      bookingId: bookingResponse?.data.id ?? "",
      total: bookingResponse?.data.total ?? 0,
      bankCode: paymentMethod,
      language,
      returnUrl: `${window.location.origin}/payment/check`,
    };

    const res = await paymentVnPay(request);
    router.push(res.data.paymentUrl);
  }, [
    bookingResponse?.data.id,
    bookingResponse?.data.total,
    language,
    paymentMethod,
    router,
  ]);

  const getBooking = useCallback(async () => {
    const res = await getBookingById(id);
    setBookingResponse(res);
  }, [id]);

  useEffect(() => {
    getBooking();
  }, [getBooking]);

  const booking = bookingResponse?.data;

  return (
    <div className="max-w-xl mx-auto p-5 bg-white shadow-md rounded-lg text-xl">
      <div className="text-center">
        <img
          src="/vnpay-logo.jpeg"
          alt="VNPAY Logo"
          width={200}
          height={50}
          className="mx-auto"
        />
      </div>
      <p className="p-3">Emai: {booking?.email}</p>
      <p className="p-3">Số điện thoại: {booking?.phone}</p>
      <p className="p-3">Tên tour: {booking?.tour.name}</p>
      <p className="p-3">Tên người đặt: {booking?.user.username}</p>
      <p className="p-3">Số người lớn:{booking?.numberOfAdults}</p>
      <p className="p-3">Số em bé: {booking?.numberOfBabies}</p>
      <p className="p-3">Số trẻ em: {booking?.numberOfChildren}</p>
      <p className="p-3">Ghi chú: {booking?.note}</p>
      <p className="p-3">Ngày bắt đầu: {booking?.startDate}</p>
      <p className="p-3">Ngày đặt tour: {booking?.bookingDate}</p>
      <p className="p-3">Trạng thái: {booking?.status}</p>
      <h1 className="text-2xl font-bold p-3 ">
        Tổng số tiền: {formatPrice(booking?.total ?? 0)}
      </h1>
      <h2 className="text-xl font-bold mb-4 mt-4">
        Chọn Phương thức thanh toán:
      </h2>
      <div className="space-y-2">
        {methods.map((item, index) => (
          <label key={index} className="flex items-center space-x-2">
            <input
              type="radio"
              name="paymentMethod"
              value={item.value}
              checked={paymentMethod === item.value}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="form-radio h-4 w-4"
            />
            <span>{item.label}</span>
          </label>
        ))}
      </div>
      <h2 className="text-xl font-bold mt-6 mb-4">Ngôn ngữ:</h2>
      <div className="flex items-center space-x-4">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="language"
            value="vi"
            checked={language === "vi"}
            onChange={() => setLanguage("vi")}
            className="form-radio h-4 w-4"
          />
          <span>Tiếng Việt</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="language"
            value="en"
            checked={language === "en"}
            onChange={() => setLanguage("en")}
            className="form-radio h-4 w-4"
          />
          <span>Tiếng Anh</span>
        </label>
      </div>
      <div className="flex items-center">
        <button
          className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmit}
        >
          Thanh toán
        </button>
        <button className="mt-6 mx-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          <a href="/">Thanh toán sau</a>
        </button>
      </div>
    </div>
  );
};

export default PaymentForm;
