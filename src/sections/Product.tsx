import { useState } from "react";
import FlavorCard from "./FlavorCard";
import { useTranslation } from "react-i18next";

const items = [
  {
    id: 1,
    name: "Double Chocolate Chip Cookie",
    desc:
      "A gooey cookie packed with milk chocolate chips, topped with semi-sweet chocolate chunks, and finished with a dash of sea salt.",
    image: "/flavors/choco-1.webp",
    bgColor: "#633625",
  },
  {
    id: 2,
    name: "Matcha Cheesecake",
    desc:
    "A gooey cookie packed with milk chocolate chips, topped with semi-sweet chocolate chunks, and finished with a dash of sea salt.",
    image: "/flavors/matcha-1.webp",
    bgColor: "#78793E",
  },
  {
    id: 3,
    name: "Cinammon Cookie",
    desc:
    "A gooey cookie packed with milk chocolate chips, topped with semi-sweet chocolate chunks, and finished with a dash of sea salt.",
    image: "/flavors/cinnamon-1.webp",
    bgColor: "#F6A661",
  },
];

export default function NationalFlavors() {
  const { t } = useTranslation();
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <div className="py-12 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <span className="inline-block px-4 py-1 text-sm font-medium bg-pink-200 text-pink-800 rounded-full mb-2">
          {t("product.week")}
        </span>
        <h2 className="text-4xl font-extrabold text-black">{t("product.title")}</h2>
      </div>

      {/* Flavor Cards */}
      <div className="flex flex-col gap-10 lg:gap-4 lg:mb-24 mb-0">
        {items.map((item, index) => (
          <FlavorCard
            key={item.id}
            item={item}
            index={index}
            hoverIndex={hoverIndex}
            setHoverIndex={setHoverIndex}
          />
        ))}
      </div>
    </div>
  );
}