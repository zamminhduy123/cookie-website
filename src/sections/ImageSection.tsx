import { motion } from "framer-motion";
import { useRef } from "react";
import TextRevealSection from "./TextRevealSection";

function ImageSection() {
  const containerRef = useRef(null);

  // // useScroll will track the scroll progress within the containerRef
  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   // Start animation when container's top hits viewport top
  //   // End animation when container's bottom hits viewport bottom
  //   offset: ["center center", "end end"],
  // });

  // Transform the scroll progress (0 to 1) into a 'y' position for the sliding section.
  // It will move from 100% (completely below view) to 0% (covering the view).
  // const slideUp = useTransform(scrollYProgress, [0.5, 0.8], ["100%", "0%"]);
  // Optional: You can also fade or scale the pinned section as it gets covered
  // const scale = useTransform(scrollYProgress, [0.8, 1], [1, 0.9]);

  return (
    <div
      className="pin-container w-screen flex flex-col items-center justify-between z-10"
      ref={containerRef}
    >
      {/* SECTION 1: This is the section that gets pinned and overlapped */}
      <motion.div>
        {/* You can put any content here */}
        <TextRevealSection />
      </motion.div>

      {/* SECTION 2: This is the section that slides up */}
      <motion.div
        // style={{ y: slideUp }}
      >
        <div className="grid grid-cols-2 w-full text-left">
          {/* LEFT COLUMN — brown background with typography */}
          <div className="bg-[#4d3628] text-white py-10 px-5 flex flex-col justify-between">
            {/* Top block */}
            <div>
              <h2 className="font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6 tracking-wide apple-peach">
                WHAT’S&nbsp;INSIDE?
              </h2>
              <ul className="list-disc pl-6 space-y-4 font-medium text-lg md:text-xl leading-relaxed">
                <li>whey protein</li>
                <li>honey</li>
                <li>diet sugar (erythritol)</li>
                <li>chocolate</li>
                <li>salt</li>
                <li>other classic cookie ingredients</li>
              </ul>
            </div>
            {/* Middle slogan */}
            <div className="mb-10 text-left apple-peach">
              <h2 className="font-extrabold text-4xl md:text-5xl lg:text-6xl mb-2 tracking-wide">
                SOFT&nbsp;BAKED
              </h2>
              <p className="text-lg md:text-xl font-medium">
                Soft, chewy, and delicious
              </p>
            </div>
            {/* Bottom line */}
            <h3 className="font-extrabold text-3xl md:text-5xl text-left apple-peach">
              ONLY&nbsp;200&nbsp;<span className="font-outline">CALORIES</span>
            </h3>
          </div>
          {/* RIGHT COLUMN — two stacked images */}
          <div className="grid grid-rows-2 h-full">
            {/* Top image */}
            <img
              src="/open.png"
              alt="Hand holding soft-baked cookie"
              className="object-cover w-full h-full"
            />
            {/* Bottom image */}
            <img
              src="/black-open.png"
              alt="Chocolate filled cookie cut in half"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="relative w-full h-screen pl-10 overflow-hidden">
          {/* Background image (pink hand–box photo) */}
          <img
            src="/lowkie.png"
            alt="Hand holding colourful Lowkie box"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay content */}
          <div className="absolute bottom-8 left-8 flex flex-col items-start text-left">
            <h2 className="text-white apple-peach font-extrabold leading-tight text-4xl md:text-6xl lg:text-7xl">
              UNLOCK&nbsp;THE&nbsp;MAGIC
              <br />
              INSIDE&nbsp;THE&nbsp;BOX
            </h2>

            {/* CTA button */}
            <button className="mt-8 px-8 py-3 rounded-md bg-white/80 hover:bg-white transition-colors font-bold text-pink-600 text-lg shadow">
              BUY&nbsp;NOW
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ImageSection;
