import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";

import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

interface FlavorItem {
  id: string;
  image: string;
  bgColor: string;
}

interface FlavorCardProps {
  item: FlavorItem;
  index: number;
  hoverIndex: number | null;
  setHoverIndex: (n: number | null) => void;
}

export default function FlavorCard({
  item,
  index,
  hoverIndex,
  setHoverIndex,
}: FlavorCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const isActive = hoverIndex === index;
  const navigate = useNavigate();

  /* GSAP scroll-based “active” toggle  */
  useLayoutEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const trig = ScrollTrigger.create({
      trigger: el,
      start: "center 50%", // element-center hits viewport-center
      end: "center 50%", // same position (acts like a point)
      onEnter: () => setHoverIndex(index),
      onLeaveBack: () => setHoverIndex(null),
    });

    return () => trig.kill();
  }, [index, setHoverIndex]);

  const onClick = () => {
    navigate(`/products/${item.id}`);
  };

  return (
    <div
      ref={cardRef}
      className={`group relative rounded-3xl my-4 transition-all duration-300 flex ${
        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
      } items-center p-4 sm:p-6 lg:p-12`}
      style={{
        backgroundColor: isActive ? item.bgColor : "transparent",
        color: isActive ? "#fff" : item.bgColor,
      }}
      onMouseEnter={() => setHoverIndex(index)}
      onMouseLeave={() => setHoverIndex(null)}
    >
      {/* Image */}
      <div className="flex-shrink-0 w-1/2 relative h-40 sm:h-52 lg:h-64">
        <img
          src={item.image}
          alt={t(`${item.id}.name`)}
          className={`absolute ${
            index % 2 === 0 ? "left-0" : "right-0"
          } top-1/2 -translate-y-1/2 w-[100%] sm:w-[90%] lg:w-[80%] object-contain transition-transform duration-300 ${
            isActive ? "scale-110" : ""
          }`}
        />
      </div>

      {/* Text */}
      <div className="w-1/2 pl-4">
        <h3
          className={`font-extrabold apple-peach text-xl sm:text-5xl lg:text-6xl mb-2 ${
            index % 2 === 0 ? "text-left" : "text-right"
          }`}
        >
          {t(`${item.id}.name`)}
        </h3>

        <p
          className={`block sm:text-sm text-xs mt-3 max-w-xl ${
            index % 2 === 0 ? "text-left" : "text-right"
          } ${isActive ? "text-white" : "text-gray-600"}`}
        >
          {t(`${item.id}.desc`)}
        </p>

        <div
          className={`mt-1 sm:mt-5 flex ${
            index % 2 === 0 ? "justify-start" : "justify-end"
          } gap-3`}
        >
          <button onClick={onClick} className="hidden sm:inline-block sm:border sm:border-current sm:px-6 py-2 rounded-full text-sm font-semibold">
            {t("product.learnMore")}
          </button>
          <button onClick={onClick}
            className={`px-6 py-2 rounded-lg sm:rounded-full text-sm font-semibold ${
              isActive
                ? "bg-black text-white"
                : "bg-white text-black group-hover:bg-black group-hover:text-white"
            }`}
          >
            {t("product.orderNow")}
          </button>
        </div>
      </div>
    </div>
  );
}
