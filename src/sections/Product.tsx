import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const items = [
  {
    id: 1,
    name: "Double Chocolate Chip Cookie",
    desc:
      "A gooey cookie packed with milk chocolate chips, topped with semi-sweet chocolate chunks, and finished with a dash of sea salt.",
    image: "/flavors/choco-1.png",
    bgColor: "#633625",
  },
  {
    id: 2,
    name: "Matcha Cheesecake",
    desc:
    "A gooey cookie packed with milk chocolate chips, topped with semi-sweet chocolate chunks, and finished with a dash of sea salt.",
    image: "/flavors/matcha-1.png",
    bgColor: "#78793E",
  },
  {
    id: 3,
    name: "Cinammon Cookie",
    desc:
    "A gooey cookie packed with milk chocolate chips, topped with semi-sweet chocolate chunks, and finished with a dash of sea salt.",
    image: "/flavors/cinnamon-1.png",
    bgColor: "#F6A661",
  },
];

export default function NationalFlavors() {
  const { t } = useTranslation();
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <div className="py-12 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="sm:mb-0 mb-12">
        <span className="inline-block px-4 py-1 text-sm font-medium bg-pink-200 text-pink-800 rounded-full mb-2">
          {t("product.week")}
        </span>
        <h2 className="text-4xl font-extrabold text-black">{t("product.title")}</h2>
      </div>

      {/* Flavor Cards */}
      <div className="flex flex-col gap-10 lg:gap-4 lg:mb-24 mb-8">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className={`group relative overflow-visible rounded-3xl transition-all duration-300 flex flex-row ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            } items-center justify-between flex-nowrap p-4 sm:p-6 lg:p-12 sm:mt-12 lg:mt-24`}
            style={{ backgroundColor: hoverIndex === index ? item.bgColor : "transparent", color: hoverIndex === index ? "#fff" : item.bgColor }}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Image */}
            <div className="flex-shrink-0 w-1/2 relative h-40 sm:h-52 lg:h-64">
              <img
                src={item.image}
                alt={item.name}
                className={`absolute ${
                    index % 2 === 0 ? "left-0" : "right-0"
                  } top-1/2 -translate-y-1/2 w-[100%] sm:w-[90%] md:w-[80%] lg:w-[80%] max-w-none object-contain transition-transform duration-300 group-hover:scale-110`}
              />
            </div>

            {/* Text */}
            <div className="w-1/2 pl-4">
              <h3 className={`font-extrabold ${index % 2 == 0 ? "text-left" : "text-right" } transition-colors duration-300 text-2xl sm:text-4xl lg:text-6xl sm:mb-2`}>
                {t(`product.${item.id}.name`)}
              </h3>

              <div className="hidden sm:block">
                {item.desc && (
                  <p className={`mt-3 text-gray-600 group-hover:text-white transition-colors duration-300 ${index % 2 == 0 ?  "text-left" : "text-right"} text-base max-w-xl`}>
                    {t(`product.${item.id}.desc`)}
                  </p>
                )}
              </div>

              <div className={`sm:mt-5 flex ${index % 2 == 0 ? "justify-start" : "justify-end"} sm:gap-3`}>
                <button className="sm:border sm:border-black group-hover:border-white text-black group-hover:text-white sm:px-6 py-2 rounded-full text-sm sm:font-semibold transition-colors duration-300 ">
                  {t("product.learnMore")}
                </button>
                {item.desc && (
                  <button className="hidden sm:inline-block bg-white text-black group-hover:bg-black group-hover:text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300">
                    {t("product.orderNow")}
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}