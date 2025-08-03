import { useLayoutEffect, useRef } from "react";
import type { PropsWithChildren } from "react";

import { ScrollSmoother } from "gsap/ScrollSmoother";

function SmoothScrollLayout({ children }: PropsWithChildren<{}>) {
  const mainRef = useRef<HTMLDivElement>(null);
  const smootherRef = useRef<ScrollSmoother | null>(null);

  useLayoutEffect(() => {
    // 3. Create the smoother instance. This will now work correctly.
    smootherRef.current = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
      smoothTouch: 0.1,
    });

    // Cleanup function
    return () => {
      smootherRef.current?.kill();
    };
  }, []);

  return (
    // Make sure the IDs match what's in the create() method
    <div id="smooth-wrapper" ref={mainRef}>
      <div id="smooth-content">{children}</div>
    </div>
  );
}

export default SmoothScrollLayout;