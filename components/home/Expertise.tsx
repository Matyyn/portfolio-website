/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import SectionTitle from "../global/SectionTitle";
import { expertise } from "@/data/content/home";

function Testimonials() {
  return (
    <div className="flex flex-col text-left max-w-md md:max-w-full w-full m-auto">
      <SectionTitle title="My Expertise!" />
      <div className="max-w-5xl m-auto md:max-h-[200px] grid grid-cols-1 gap-10 md:gap-10 md:grid-cols-3 items-start">
        {expertise.map((item, index) => {
          return (
            // <div
            //   key={index}
            //   className="relative bg-fun-pink-darker border border-fun-pink-light p-5 rounded-lg h-full flex flex-col justify-between"
            // >
            //   {index === 0 && (
            //     <>
            //       <img
            //         alt="yay"
            //         className="sqD top-[-50px] left-0 bottom-auto right-auto md:bottom-[-50px] md:top-auto md:right-[-25px] md:left-auto w-20 z-[-100]"
            //         src={`static/doodles/testimonials/yay.svg`}
            //       />
            //     </>
            //   )}
            // <h2 className="text-center font-bolder">
            //     {item.service}
            //   </h2>
            //   <p className="text-center relative testimonialQuote  mt-2">
            //   {item.explanation}
            //   </p>
            //   {/* {item.job && (
            //     <p className="mt-4 text-xs text-fun-gray">
            //       <b className="text-fun-pink font-monospace">{item.name}</b> -{" "}
            //       {item.job}
            //     </p>
            //   )}
            //   {index === 2 && (
            //     <img
            //       alt="squiggle2"
            //       className="sqD top-[-30px] right-[-15px] w-11"
            //       src={`${process.env.NEXT_PUBLIC_BASE_URL}static/doodles/testimonials/squiggle2.svg`}
            //     />
            //   )} */}
            // </div>

            <div
              key={index}
              className="relative bg-[#7a88a8] border border-[#7a88a8] p-5 rounded-lg flex flex-col justify-between text-white transform transition-transform duration-300 hover:shadow-lg hover:scale-105"
            >
              <h2 className="text-2xl font-bold text-center">{item.service}</h2>
              <p className="mt-2 text-center">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Testimonials;
