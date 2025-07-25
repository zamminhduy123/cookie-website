import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * A reusable component that reveals text on scroll with a "wipe" effect.
 * It layers a solid text over an outlined one and animates the clip-path.
 * @param {object} props - The component's props.
 * @param {string} props.text - The main text to be animated.
 * @param {string} [props.subText] - Optional secondary line to reveal after main text.
 */
type ScrollRevealTextProps = {
  text: string;                      // main line
  subText?: string;                  // optional small line
  textAlign?: string;
  duration: [number, number];

  /** Tailwind utility classes for font sizes */
  textSizeTitle?: string;            // e.g. 'md:text-8xl'
  textSizeTitleMobile?: string;      // e.g. 'text-4xl'
  textSizeSubText?: string;          // e.g. 'md:text-6xl'
  textSizeSubTextMobile?: string;    // e.g. 'text-2xl'
};
const ScrollRevealText = (
  {
    text,
    subText,
    textAlign = 'left',
    duration = [0, 0.8],
    textSizeTitle = 'md:text-8xl',
    textSizeTitleMobile = 'text-4xl',
    textSizeSubText = 'md:text-6xl',
    textSizeSubTextMobile = 'text-2xl',
  }: ScrollRevealTextProps
) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll();

  const time = (duration[1] - duration[0]) / 2

  // main text reveals from 0 → 80 % scroll
  const clipPath = useTransform(
    scrollYProgress,
    [duration[0], duration[0] + time],
    ['inset(0 100% 0 0)', 'inset(0 0% 0 0)']
  );

  // sub‑text waits until 85 % then finishes by 1.0
  const subClipPath = useTransform(
    scrollYProgress,
    [duration[0] + time, duration[1]],
    ['inset(0 100% 0 0)', 'inset(0 0% 0 0)']
  );

  console.log("Progress", scrollYProgress);
  
  const align = textAlign === 'center' ? 'text-center' : textAlign === 'right' ? 'text-right' : 'text-left';

  return (
    <div ref={containerRef} className="reveal-container">
      <div className="sticky-wrapper">
        {/* Layer 1: The outline text (always visible) */}
        <h1
          className={
            `text-outline ${align} ${textSizeTitleMobile} ${textSizeTitle} font-bold md:font-extrabold`
          }
          style={{ whiteSpace: "nowrap" }} /* prevent line wrap */
        >
          {text}
        </h1>

        {/* Layer 2: The solid text that gets revealed */}
        <motion.h1
          className={
            `text-solid ${align} ${textSizeTitleMobile} ${textSizeTitle} font-bold md:font-extrabold`
          }
          style={{
            clipPath,          /* Animate the clip-path property */
            whiteSpace: "nowrap" /* keep text on a single line so reveal timing stays consistent */
          }}
        >
          {text}
        </motion.h1>
      </div>

      {subText && (
        <div className="sticky-wrapper mt-2">
          {/* Layer 1: outline */}
          <h2
            className={
              `text-outline-sub ${align} ${textSizeSubTextMobile} ${textSizeSubText} font-light md:font-extrabold`
            }
            style={{ whiteSpace: "nowrap" }}
          >
            {subText}
          </h2>

          {/* Layer 2: solid reveal */}
          <motion.h2
            className={
              `text-solid-sub ${align} ${textSizeSubTextMobile} ${textSizeSubText} font-light md:font-extrabold`
            }
            style={{
              clipPath: subClipPath,
              whiteSpace: "nowrap",
            }}
          >
            {subText}
          </motion.h2>
        </div>
      )}
    </div>
  );
};

export default ScrollRevealText;