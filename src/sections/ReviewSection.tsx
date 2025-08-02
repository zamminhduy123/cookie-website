import React from "react";

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
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-crimson mb-4">
        Real People. Real Reviews. Real Good.
      </h2>
      <p className="text-center text-crimson max-w-2xl mx-auto mb-12">
        Don’t just take our word for it—see why thousands of snackers are ditching dry bars and going Chunky.
      </p>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee-left space-x-6 px-4 py-4 w-max">
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={`${review.id}-${index}`}
              className="flex-shrink-0 w-[280px] sm:w-[320px] bg-vanilla p-6 rounded-2xl shadow transition duration-300"
            >
              <p className="text-base text-crimson font-medium mb-4">
                {review.content}
              </p>
              <div className="text-sm font-semibold text-choco">{review.author}</div>
            </div>
          ))}
        </div>
        <div className="flex animate-marquee-right space-x-6 px-4 py-4 w-max">
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={`${review.id}-${index}`}
              className="flex-shrink-0 w-[280px] sm:w-[320px] bg-vanilla p-6 rounded-2xl shadow transition duration-300"
            >
              <p className="text-base text-crimson font-medium mb-4">
                {review.content}
              </p>
              <div className="text-sm font-semibold text-choco">{review.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}