export default function MissionSection() {
  return (
    <section className="relative h-[60vh]">
      <img
        src={"/cookie-mid-2.png"}
        alt="brownie"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      <h2 className="max-w-7xl mx-auto absolute text-center text-white right-0 left-0 top-12 text-5xl font-extrabold uppercase leading-tight">
        LOW CALORIE <br className="sm:hidden" /> NO WORRIES
      </h2>

      <p className="max-w-7xl mx-auto absolute right-0 left-0 text-white bottom-12 text-xl font-extrabold text-center lg:px-32 px-4 sm:px-24">
        Our mission is to create the best tasting cookies that are
        macro-friendly—low in calories, high in protein, and made with real
        ingredients.
      </p>
    </section>
  );
}
