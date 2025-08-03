import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import { motion } from "framer-motion";

const AUTOPLAY_SPEED = 4500;


export default function BrownieCarousel() {
  const { t } = useTranslation();

  const slides = [
    {
      img: "/main/cb2.webp",
      title: t("main.title"),
      desc: t("main.desc"),
      cta: t("main.cta"),
    },
    {
      img: "/main/cb1.webp",
    },
    {
      img: "/main/cb3.webp",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<any>(null);

  useEffect(() => {
    // Clear any existing interval when the component unmounts or activeIndex changes
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Reset progress and start a new interval
    setProgress(0);
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(intervalRef.current);
          return 100;
        }
        return prev + 100 / (AUTOPLAY_SPEED / 100); // Calculate progress increment
      });
    }, 100); // Update every 100ms for a smooth animation
    return () => clearInterval(intervalRef.current); // Cleanup on unmount
  }, [current]); // This effect re-runs every time the active slide changes

  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: "15%",
    autoplay: true,
    autoplaySpeed: AUTOPLAY_SPEED,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (_: number, next: number) => setCurrent(next),
    appendDots: (dots : any[]) => (
      <div>
        <ul className="custom-dots-container">
          {dots.map((dot, index) => (
            <li
              key={index}
              className={dot.props.className}
            >
              <div className={`custom-dot-wrapper ${index === current ? 'active' : ''}`}>
                {/* If this is the active dot, show the progress fill */}
                {index === current && (
                  <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    ),
  };

  return (
    <div className="w-full relative flex flex-col items-center mb-24">
      <Slider {...settings} className="w-full max-w-7xl h-[70vh] px-4 sm:px-8">
        {slides.map((slide, index) => (
          <div key={index} className="relative slide-content px-2">
            <img
              src={slide.img}
              alt="cookie"
              className="rounded-xl w-full h-[70vh] object-cover brightness-90 object-[center_35%]"
            />
            {slide.title && (
              <motion.div
                className="absolute inset-0 flex flex-col justify-center text-left text-crimson px-6"
                initial="hidden"
                animate={current === index ? "visible" : "hidden"}
                variants={{
                  visible: { transition: { staggerChildren: 0.3 } },
                  hidden: {},
                }}
              >
                <motion.p
                  className="text-sm"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {slide.desc}
                </motion.p>
                <motion.h2
                  className="text-4xl font-semibold apple-peach"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {slide.title}
                </motion.h2>
                <motion.a
                  href="https://www.instagram.com/lowkie_cookie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-crimson text-white px-6 py-3 rounded-full font-medium hover:bg-choco transition mt-4 max-w-[200px] text-center"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {slide.cta}
                </motion.a>
              </motion.div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
}
