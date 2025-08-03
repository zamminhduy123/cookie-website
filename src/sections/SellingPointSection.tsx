import { FaHeart, FaLeaf, FaCube, FaFlask, FaTint } from "react-icons/fa";
import { motion } from "framer-motion";

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
    <motion.section
      className="bg-vanilla py-16 px-4 sm:px-8 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex flex-col flex-1">
          <motion.div
            className="w-full text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl w-full font-extrabold text-crimson leading-tight uppercase">
              Real Ingredients. <br /> Real Benefits.
            </h2>
          </motion.div>

          <motion.div
            className="w-full text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="mt-4 text-crimson text-base max-w-lg">
              We built these cookies to do more than taste good—they're made with simple,
              smart ingredients so you can snack confidently.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 gap-6 max-w-md">
              {points.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-row items-center gap-4 text-crimson"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + idx * 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white rounded-full p-3 shadow">
                    {item.icon}
                  </div>
                  <span className="font-medium text-sm sm:text-base">
                    {item.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        {/* Image */}
        <div className="flex justify-end flex-1 lg:flex-2">
          <div className="relative flex flex-row items-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="/poster.png"
                alt="Product pouring"
                className="rounded-2xl w-full max-w-sm shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.9, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="/poster2.png"
                alt="Product pouring 2"
                className="rounded-2xl w-full max-w-sm shadow-lg -ml-8 z-0"
              />
            </motion.div>
            {/* <div className="absolute inset-0 border-4 border-vanilla rounded-2xl scale-90 translate-x-4 translate-y-4 pointer-events-none" /> */}
          </div>
        </div>
      </div>
    </motion.section>
  );
}