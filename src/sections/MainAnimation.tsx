import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimationComponent() {
    const [isRising, setIsRising] = useState(false);
  const [isSpreading, setIsSpreading] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const images = [
    '/flavors/choco-1.png',
    '/flavors/matcha-1.png',
    '/flavors/cinnamon-1.png',
    '/flavors/choco-1.png',
    '/flavors/matcha-1.png',
    '/flavors/cinnamon-1.png',
  ];
  const texts = ['A place to display', 'your', 'masterpiece.'];

  useEffect(() => {
    setIsRising(true);
    const riseTimer = setTimeout(() => setIsSpreading(true), 1000); // Rise for 1 second
    return () => clearTimeout(riseTimer);
  }, []);

  useEffect(() => {
    if (isSpreading && textIndex < texts.length) {
      const textTimer = setTimeout(() => setTextIndex((prev) => prev + 1), 500);
      return () => clearTimeout(textTimer);
    }
  }, [isSpreading, textIndex]);

  return (
    <div className="relative w-full h-screen bg-white flex items-center justify-center overflow-hidden">
      <AnimatePresence>
        {(isRising || isSpreading) && (
          <motion.div
            className="absolute flex space-x-4"
            initial={{ y: '50%', opacity: 0 }}
            animate={{
              y: isSpreading ? 0 : '50%',
              opacity: 1,
              transition: { duration: 1, ease: "easeOut" },
            }}
            exit={{ opacity: 0 }}
          >
            {images.map((src, index) => (
              <motion.img
                key={index}
                src={src}
                alt={`Artwork ${index + 1}`}
                className="w-48 h-72 rounded-lg shadow-lg"
                initial={{ x: 0, rotate: 0, zIndex: images.length - index }}
                animate={{
                  x: isSpreading ? (index - 2) * 100 : 0,
                  rotate: isSpreading ? index * 15 : 0,
                  transition: { delay: isSpreading ? index * 0.2 : 0, duration: 0.8 },
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div className="text-center">
        {texts.slice(0, textIndex).map((text, index) => (
          <motion.h1
            key={index}
            className="text-5xl font-bold mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2 + index * 0.5 } }}
          >
            {text}
          </motion.h1>
        ))}
      </motion.div>
    </div>
  );
  };