import { useEffect, useRef, useState } from "react";

const slides = [
  {
    img: "/main/cb2.png",
    title: "LOWKIE",
    desc: "FOR DELIVERY",
    cta: "SHOP Cookie",
  },
  {
    img: "/main/cb1.png", // Replace with your image paths
  },
  {
    img: "/main/cb3.png", // Replace with your image paths
    // title: "Brownies",
    // desc: "FOR DELIVERY",
    // cta: "SHOP BROWNIES",
  },
];

export default function BrownieCarousel() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<any>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1)),
      5000 // 5 seconds delay
    );
    return () => resetTimeout();
  }, [current]);

  return (
    <div className="w-full overflow-hidden snap-x snap-mandatory scroll-smooth relative">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 snap-center relative min-h-[70vh] flex items-center"
          >
            <img
              src={slide.img}
              alt="brownie"
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />
            {/* Text Section */}
            {slide.title ? <div className="relative z-10 flex flex-col justify-center text-crimson p-6 text-left h-fullw-full sm:w-fit px-0 sm:px-4 lg:px-12">
              <p className="text-sm">{slide.desc}</p>
              <h2 className="text-4xl font-semibold apple-peach">{slide.title}</h2>
              <button className="bg-crimson text-white px-6 py-3 rounded-full font-medium hover:bg-choco transition mt-4 max-w-[200px]">
                {slide.cta}
              </button>
            </div> : null}
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === idx ? "bg-crimson" : "bg-strawberry"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}