import HorizontalScrollText from "../components/HorizontalScroll";
import Cookie from "../assets/cookie.png";
import Cookie4 from "../assets/cookie-4.webp";
import Cookie5 from "../assets/cookie-5.png";

function TextRevealSection() {
  const class_name = "h-[40px] md:h-[80px] my-8 md:my-16 w-full";
  return (
    <div className="w-screen flex flex-col items-center justify-around h-[300vh] apple-peach px-8 relative">
      <img
        src={Cookie}
        alt="Cookies"
        style={{ left: "calc(50% - 17vw)", top: "calc(100vh - 45vh)" }}
        className="pointer-events-none absolute top-1/6 w-[30vw] max-w-none select-none "
      />
      <div className={class_name}>
        <HorizontalScrollText
          text="BOLD FLAVOR"
          subText="Enjoying a healthy treat"
          textAlign="left"
          duration={[0.1, 0.15]}
        />
      </div>
      <img
        src={Cookie4}
        alt="Cookies"
        style={{ left: "calc(50% - 20vw)",  top: "calc(200vh - 80vh)" }}
        className="pointer-events-none absolute w-[40vw] max-w-none select-none "
      />
      <div className={class_name}>
        <HorizontalScrollText
          duration={[0.15, 0.3]}
          text="PROTEIN PACKED"
          subText="16g of protein"
          textAlign="right"
        />
        {/* <HorizontalScrollText text="16g of protein" textAlign="right" /> */}
      </div>
      <div className={class_name}>
        <HorizontalScrollText
          duration={[0.3, 0.45]}
          text="LOW SUGAR"
          subText="less than 8g"
          textAlign="left"
        />
      </div>
      <img
        src={Cookie5}
        alt="Cookies 5"
        style={{ left: "calc(50% - 20vw)" }}
        className="pointer-events-none absolute bottom-0 left-1/3 w-[40vw] max-w-none select-none "
      />
      <div className="w-full h-[40px] md:h-[80px] my-8 md:my-16">
        <HorizontalScrollText
          duration={[0.45, 0.55]}
          text="TRY IT NOW"
          // subText="less than 8g"
          textAlign="center"
        />
      </div>
    </div>
  );
}

export default TextRevealSection;
