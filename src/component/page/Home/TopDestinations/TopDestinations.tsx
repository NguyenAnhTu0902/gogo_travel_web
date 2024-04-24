/* eslint-disable @next/next/no-img-element */
"use client";

import { Tour } from "@/models/tour";
import DestinationItem from "./DestinationItem";

type Props = {
  tourList?: Tour[];
};

export default function TopDestinations({ tourList }: Props) {
  return (
    <div className="bg-white dark:bg-gray-800 py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 flex  text-center items-center justify-center gap-8 sm:mb-8 md:mb-12">
          <div>
            <b className="text-emerald-700 text-lg">Top điểm đến</b>
            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">
              Có thể bạn thích
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {tourList?.slice(0, 6).map((tour, index) => (
            <DestinationItem key={index} tour={tour} />
          ))}
        </div>
      </div>
    </div>
  );
}
