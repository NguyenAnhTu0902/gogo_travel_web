"use client";

import React, { FC, useState } from "react";
import { LayoutAdmin } from "@/component/page/admin/LayoutAdmin";
import MonthlyChart from "@/component/page/admin/Chart/bookingChart";
import TaskCompletionChart from "@/component/page/admin/Chart/taskChart";
import GuestChart from "@/component/page/admin/Chart/totalGuessChart";
import TopPlaceChart from "@/component/page/admin/Chart/topPlaceChart";

const Home: FC = () => {
  const [activeChart, setActiveChart] = useState<"booking" | "task" | "guest" | "place">("booking");

  return (
    <LayoutAdmin>
      <div className="flex justify-around mb-8 mt-8">
        <button
          className={`px-4 py-2 rounded ${activeChart === "booking" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"}`}
          onClick={() => setActiveChart("booking")}
        >
          Thống kê doanh thu
        </button>
        <button
          className={`px-4 py-2 rounded ${activeChart === "task" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"}`}
          onClick={() => setActiveChart("task")}
        >
          Thống kê tỉ lệ hoàn thành Task
        </button>
        <button
          className={`px-4 py-2 rounded ${activeChart === "guest" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"}`}
          onClick={() => setActiveChart("guest")}
        >
          Thống kê lượng khách
        </button>
        <button
          className={`px-4 py-2 rounded ${activeChart === "place" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"}`}
          onClick={() => setActiveChart("place")}
        >
          Thống kê top địa điểm hot
        </button>
      </div>
      {activeChart === "booking" && <MonthlyChart />}
      {activeChart === "task" && <TaskCompletionChart />}
      {activeChart === "guest" && <GuestChart />}
      {activeChart === "place" && <TopPlaceChart />}
    </LayoutAdmin>
  );
};

export default Home;
