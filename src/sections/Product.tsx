import { useState } from "react";
import FlavorCard from "./FlavorCard";
import { useTranslation } from "react-i18next";

import { COOKIE_DB } from "../db/cookies";  

export default function NationalFlavors() {
  const { t } = useTranslation();
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const items = Object.values(COOKIE_DB).map((cookie, _) => ({
    id: cookie.id,
    image: cookie.image,
    bgColor: cookie.color,
    inStock: cookie.inStock,
  }));

  return (
    <section className="py-12 px-4 sm:px-8 max-w-7xl mx-auto scroll-mt-[200px]" id="flavors" >
      {/* Header */}
      <div className="mb-12">
        <span className="inline-block px-4 py-1 text-sm font-medium bg-pink-200 text-pink-800 rounded-full mb-2">
          {t("product.week")}
        </span>
        <h2 className="text-4xl font-extrabold text-black">{t("product.title")}</h2>
      </div>

      {/* Flavor Cards */}
      <div className="flex flex-col gap-10 lg:gap-12 lg:mb-24 mb-0">
        {items.map((item, index) => (
          <FlavorCard
            key={item.id}
            item={item}
            index={index}
            hoverIndex={hoverIndex}
            setHoverIndex={setHoverIndex}
            isSelling={item.inStock}
          />
        ))}
      </div>
    </section>
  );
}