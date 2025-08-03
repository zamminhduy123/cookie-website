import { motion } from "framer-motion";

const reviews = [
  {
    id: 1,
    content: "“These cookies are insanely good. I swapped out my bars!”",
    author: "— Taylor R.",
  },
  {
    id: 2,
    content: "“Real texture, real flavor. The hype is real.”",
    author: "— Jamal K.",
  },
  {
    id: 3,
    content: "“I’ve tried them all. Chunky is the only one I repurchase.”",
    author: "— Anika S.",
  },
  {
    id: 4,
    content: "“Soft, satisfying, and nothing like a dry protein bar.”",
    author: "— Mark D.",
  },{
    id: 1,
    content: "“These cookies are insanely good. I swapped out my bars!”",
    author: "— Taylor R.",
  },
  {
    id: 2,
    content: "“Real texture, real flavor. The hype is real.”",
    author: "— Jamal K.",
  },
  {
    id: 3,
    content: "“I’ve tried them all. Chunky is the only one I repurchase.”",
    author: "— Anika S.",
  },
  {
    id: 4,
    content: "“Soft, satisfying, and nothing like a dry protein bar.”",
    author: "— Mark D.",
  },{
    id: 1,
    content: "“These cookies are insanely good. I swapped out my bars!”",
    author: "— Taylor R.",
  },
  {
    id: 2,
    content: "“Real texture, real flavor. The hype is real.”",
    author: "— Jamal K.",
  },
  {
    id: 3,
    content: "“I’ve tried them all. Chunky is the only one I repurchase.”",
    author: "— Anika S.",
  },
  {
    id: 4,
    content: "“Soft, satisfying, and nothing like a dry protein bar.”",
    author: "— Mark D.",
  },{
    id: 1,
    content: "“These cookies are insanely good. I swapped out my bars!”",
    author: "— Taylor R.",
  },
  {
    id: 2,
    content: "“Real texture, real flavor. The hype is real.”",
    author: "— Jamal K.",
  },
  {
    id: 3,
    content: "“I’ve tried them all. Chunky is the only one I repurchase.”",
    author: "— Anika S.",
  },
  {
    id: 4,
    content: "“Soft, satisfying, and nothing like a dry protein bar.”",
    author: "— Mark D.",
  },
];

export default function ReviewSection() {
  return (
    <section className="py-20 bg-white overflow-hidden min-h-[70vh]">
      <motion.h2
        className="text-3xl sm:text-4xl font-extrabold text-center text-crimson mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        Real People. Real Reviews. Real Good.
      </motion.h2>
      <motion.p className="text-center text-crimson max-w-2xl mx-auto mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        Don’t just take our word for it—see why thousands of snackers are ditching dry bars and going Chunky.
      </motion.p>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee-left space-x-6 px-4 py-4 w-max">
          {[...reviews, ...reviews].map((review, index) => (
            <motion.div
              key={`${review.id}-${index}`}
              className="flex-shrink-0 w-[280px] sm:w-[320px] bg-vanilla p-6 rounded-2xl shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 1.5 + (index * 0.2), duration: 0.6, ease: "easeOut" }}
            >
              <p className="text-base text-crimson font-medium mb-4">
                {review.content}
              </p>
              <div className="text-sm font-semibold text-choco">{review.author}</div>
            </motion.div>
          ))}
        </div>
        <div className="flex animate-marquee-right space-x-6 px-4 py-4 w-max">
          {[...reviews, ...reviews].map((review, index) => (  
            <motion.div
              key={`${review.id}-2-${index}`}
              className="flex-shrink-0 w-[280px] sm:w-[320px] bg-vanilla p-6 rounded-2xl shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: (index * 0.1), duration: 0.6, ease: "easeOut" }}
            >
              <p className="text-base text-crimson font-medium mb-4">
                {review.content}
              </p>
              <div className="text-sm font-semibold text-choco">{review.author}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}