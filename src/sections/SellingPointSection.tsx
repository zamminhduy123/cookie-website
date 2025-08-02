import { FaHeart, FaLeaf, FaCube, FaFlask, FaTint } from "react-icons/fa";

const points = [
  {
    icon: <FaHeart className="text-2xl sm:text-3xl" />,
    title: "< 200 cals",
  },
  {
    icon: <FaLeaf className="text-2xl sm:text-3xl" />,
    title: "16g of protein",
  },
  {
    icon: <FaCube className="text-2xl sm:text-3xl" />,
    title: "Lower sugar",
  },
  {
    icon: <FaFlask className="text-2xl sm:text-3xl" />,
    title: "No colors/dyes",
  },
  {
    icon: <FaTint className="text-2xl sm:text-3xl" />,
    title: "Avocado oil",
  },
];

export default function SellingPointsSection() {
  return (
    <section className="bg-vanilla py-16 px-4 sm:px-8 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="w-full lg:w-1/3 text-left">
          <h2 className="text-4xl font-extrabold text-crimson leading-tight uppercase">
            Real Ingredients. <br /> Real Benefits.
          </h2>
          <p className="mt-4 text-crimson text-base max-w-lg">
            We built these cookies to do more than taste good—they're made with simple,
            smart ingredients so you can snack confidently.
          </p>

          {/* Icons Grid */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 gap-6 max-w-md">
            {points.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-row items-center gap-4 text-crimson"
              >
                <div className="bg-white rounded-full p-3 shadow">
                  {item.icon}
                </div>
                <span className="font-medium text-sm sm:text-base">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-2/3 flex justify-end">
          <div className="relative flex flex-row items-center">
            <img
              src="/poster.png"
              alt="Product pouring"
              className="rounded-2xl w-full max-w-sm shadow-lg"
            />
            <img
              src="/poster2.png"
              alt="Product pouring 2"
              className="rounded-2xl w-full max-w-sm shadow-lg -ml-10 z-0"
            />
            <div className="absolute inset-0 border-4 border-vanilla rounded-2xl scale-90 translate-x-4 translate-y-4 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}