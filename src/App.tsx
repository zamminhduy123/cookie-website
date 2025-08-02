import "./App.css";
import AnimationComponent from "./sections/MainAnimation";

import MainSection from "./sections/MainSection";
import MissionSection from "./sections/Mission";
import Mission2 from "./sections/Mission-2";
import Product from "./sections/Product";
import ReviewSection from "./sections/ReviewSection";
import SellingPointsSection from "./sections/SellingPointSection";

function App() {
  return (
    <>
      <main className="min-h-screen w-full relative bg-light">
        {/* <AnimationComponent/> */}
        <MainSection />
        <Product/>
        <MissionSection/>
        {/* <Mission2/> */}

        <SellingPointsSection/>
        <ReviewSection/>
        {/* <div
          id="hero-1"
          className="flex flex-col items-center justify-center h-screen w-full overflow-hidden bg-white relative"
        >
          <div className="flex flex-col items-center justify-center w-full pb-32">
            <h1 className="font-black text-[#FEB9CC] text-9xl tracking-wide apple-peach">
              LOWKIE
            </h1>

            <p className="font-black mt-4 text-center text-[#C41A1B] tracking-widest text-sm md:text-base lg:text-lg">
              LOW CALORIE
              COOKIE&nbsp;&nbsp;-&nbsp;&nbsp;SOFT&nbsp;BAKED&nbsp;&nbsp;-&nbsp;&nbsp;PROTEIN&nbsp;PACKED
            </p>
          </div>

          <img
            src={Cookie2}
            alt="Stack of Lowkie cookies"
            className="pointer-events-none absolute bottom-0 left-0 w-[40vw] max-w-none select-none "
          />
          <img
            src={Cookie3}
            alt="Stack of Lowkie cookies"
            className="pointer-events-none absolute bottom-0 right-15 w-[40vw] max-w-none select-none"
          />
          <img
            src={Cookie1}
            alt="Stack of Lowkie cookies"
            style={{ left: "calc(50% - 20vw)"}}
            className="pointer-events-none absolute bottom-0 2xl:-bottom-10 w-[35vw] max-w-none select-none"
          />
        </div>

        <ImageSection />
        <FlavorSection />
        <div className="flex flex-col items-center justify-center p-16 w-screen bg-[#4A3629]">
          <p className="text-6xl apple-peach text-white">
            guilty free snacking
          </p>
          <p className="text-4xl text-[#FEB9CC]">
            Enjoy your snack without worrying
          </p>
        </div> */}

        {/* <div className="w-screen flex flex-col items-center justify-between h-[20vh]"></div> */}
      </main>
    </>
  );
}

export default App;
