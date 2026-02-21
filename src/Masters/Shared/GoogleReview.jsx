// import { useEffect } from "react";

// const GoogleReview = () => {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://elfsightcdn.com/platform.js";
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       const addedScript = document.querySelector(`script[src="${script.src}"]`);
//       if (addedScript) document.body.removeChild(addedScript);
//     };
//   }, []);

//   return (
//     <div className="w-full py-8 px-2 sm:px-4 bg-gray-50">a
//       <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-4 sm:p-6 md:p-8">
//         <div
//           className="elfsight-app-14f0fe9c-a595-4e7b-9a8d-4a111ff89340 w-full"
//           data-elfsight-app-lazy
//         />
//       </div>
//     </div>
//   );
// };

// export default GoogleReview;

import React, { useState } from "react";
import reviewsData from "../../../googleReviews.json";

const GoogleReviews = () => {
  const [current, setCurrent] = useState(0);
  // We use a percentage-based offset or visible count for better responsiveness
  const totalReviews = reviewsData.reviews.length;

  const next = () => {
    setCurrent((prev) => (prev === totalReviews - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? totalReviews - 1 : prev - 1));
  };

  return (
    <section className="py-16 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Widget Header Style */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100">
              <img
                src="/Google.png"
                alt="Google"
                className="w-8 h-8 object-contain"
              />
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-gray-900">
                Google Rating
              </h2>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-gray-800">
                  {reviewsData.overallRating}
                </span>
                <div className="flex text-[#fabb05] text-lg">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <span className="text-sm text-gray-500">
                  ({reviewsData.totalReviews} reviews)
                </span>
              </div>
            </div>
          </div>

          <a
            href="https://www.google.com/search?sca_esv=bd16726c6a722966&rlz=1C1JJTC_enIN1016IN1016&sxsrf=ANbL-n4xZNdfHAefUxlTZTIJNt5W7UWcCQ:1770362985690&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOUBXp_w3LELRx-rGvyeifYr9_Cp2j-PEdH3xwpaUuvVni-0apowiqU75T3_9SxO8xRAB_tFl7gZJVxYuQ18mMYvVaHLogz723jRVJl16ksjfSrHuwv62DZUOFuQrFc78T2r9-zKr-UOTclWAaHRsBQks4nLO&q=GURUKRUPA+COMPUTERIZED+TUNCH+%26+LASER+SOLDERING+CENTRE+Reviews&sa=X&ved=2ahUKEwjJwIqHrMSSAxXMS2wGHSwbF84Q0bkNegQIJRAF&biw=1366&bih=641&dpr=1"
            target="_blank"
            className="px-6 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-full font-medium hover:bg-gray-50 transition-all shadow-sm flex items-center gap-2"
          >
            Write a review
          </a>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          <div className="overflow-hidden py-4">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${current * (100 / (window.innerWidth < 768 ? 1 : 3))}%)`,
              }}
            >
              {reviewsData.reviews.map((item, index) => (
                <div
                  key={index}
                  className="min-w-full md:min-w-[33.333%] px-3 flex"
                >
                  <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col w-full relative">
                    {/* Google Icon on Card */}
                    <img
                      src="/Google.png"
                      className="absolute top-6 right-6 w-5 h-5 opacity-20"
                      alt=""
                    />

                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-11 h-11 rounded-full bg-gray-200 overflow-hidden flex-shrink-0 flex items-center justify-center text-gray-500 font-bold">
                        {item.name.charAt(0)}
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-sm font-bold text-gray-900 truncate flex items-center gap-1">
                          {item.name}
                          <svg
                            className="w-3.5 h-3.5 text-blue-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.64.3 1.248.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                          </svg>
                        </p>
                        <p className="text-[11px] text-gray-400">{item.date}</p>
                      </div>
                    </div>

                    <div className="flex text-[#fabb05] text-sm mb-3">
                      {"★★★★★".split("").map((star, i) => (
                        <span key={i}>{star}</span>
                      ))}
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed italic line-clamp-4">
                      "{item.review}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Styled Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute -left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-xl border border-gray-100 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <span className="text-xl">❮</span>
          </button>
          <button
            onClick={next}
            className="absolute -right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-xl border border-gray-100 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <span className="text-xl">❯</span>
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {reviewsData.reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 transition-all rounded-full ${current === i ? "w-6 bg-[#CFA04F]" : "w-1.5 bg-gray-300"}`}
              />
            ))}
          </div>
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/search?sca_esv=bd16726c6a722966&rlz=1C1JJTC_enIN1016IN1016&sxsrf=ANbL-n4xZNdfHAefUxlTZTIJNt5W7UWcCQ:1770362985690&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOUBXp_w3LELRx-rGvyeifYr9_Cp2j-PEdH3xwpaUuvVni-0apowiqU75T3_9SxO8xRAB_tFl7gZJVxYuQ18mMYvVaHLogz723jRVJl16ksjfSrHuwv62DZUOFuQrFc78T2r9-zKr-UOTclWAaHRsBQks4nLO&q=GURUKRUPA+COMPUTERIZED+TUNCH+%26+LASER+SOLDERING+CENTRE+Reviews&sa=X&ved=2ahUKEwjJwIqHrMSSAxXMS2wGHSwbF84Q0bkNegQIJRAF&biw=1366&bih=641&dpr=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 bg-[#b79654] text-white rounded-full font-medium hover:bg-[#967a42] transition-all shadow-lg hover:shadow-xl text-lg"
          >
            View All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
