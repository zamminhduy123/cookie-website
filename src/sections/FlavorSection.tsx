import React from "react";

/**
 * Data describing each flavour card.
 * Swap the image paths for your real assets.
 */
interface Flavor {
  id: string;
  name: string;
  color: string; // text colour
  imgDefault: string;
  imgHover: string;
}

const FLAVORS: Flavor[] = [
  {
    id: "matcha",
    name: "MATCHAAAAA",
    color: "#6B7B1E",
    imgDefault: "/flavors/matcha-1.png",
    imgHover: "/flavors/matcha-2.png",
  },
  {
    id: "chocochip",
    name: "CHOCOCHIP",
    color: "#6B3A20",
    imgDefault: "/flavors/choco-1.png",
    imgHover: "/flavors/choco-2.png",
  },
  {
    id: "cinnamon",
    name: "CINAMONNNN",
    color: "#E8A55B",
    imgDefault: "/flavors/cinnamon-1.png",
    imgHover: "/flavors/cinnamon-2.png",
  },
];

const FlavorCard: React.FC<Flavor> = ({
  name,
  color,
  imgDefault,
  imgHover,
}) => {
  return (
    <div className="relative w-full h-full cursor-pointer">
      {/* Image wrapper */}
      <div className="flex flex-col items-center">
        {/* Default image */}
        <img
          src={imgDefault}
          alt={name}
          className="w-full object-contain"
        />
        {/* Label */}
        <p
          className="my-4 font-extrabold text-2xl md:text-3xl apple-peach"
          style={{ color }}
        >
          {name}
        </p>
      </div>

      {/* Hover image that slides up & covers the default */}
      <img
        src={imgHover}
        alt={`${name} open`}
        className="absolute bottom-0 w-full h-full object-contain hover:z-50 hover:opacity-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </div>
  );
};

const FlavorSection: React.FC = () => {
  return (
    <section
      id="flavors"
      className="pt-16 flex flex-col items-center bg-white overflow-hidden h-50vh"
    >
      {/* Heading */}
      <h2 className="apple-peach text-5xl md:text-7xl text-[#FEB9CC] mb-14">
        OUR&nbsp;FLAVOR
      </h2>

      {/* Cards */}
      <div className="w-full flex flex-col gap-10 md:flex-row md:gap-16">
        {FLAVORS.map((flavor) => (
          <FlavorCard key={flavor.id} {...flavor} />
        ))}
      </div>
    </section>
  );
};

export default FlavorSection;
