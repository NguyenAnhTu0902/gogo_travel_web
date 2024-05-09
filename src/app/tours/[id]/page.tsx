"use client";

import Footer from "@/component/layout/Footer";
import Navbar from "@/component/layout/Navbar";
import TourDetail from "@/component/page/TourDetail";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense>
      <Navbar />
      <TourDetail />
      <Footer />
    </Suspense>
  );
}
