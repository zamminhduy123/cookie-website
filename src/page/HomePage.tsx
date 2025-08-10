import DidYouKnow from "../sections/DidYouKnow";
import MainSection from "../sections/MainSection";
import Product from "../sections/Product";
import QASection from "../sections/Q&ASection";
import ReviewSection from "../sections/ReviewSection";
import SellingPointsSection from "../sections/SellingPointSection";

export default function HomePage() {
  return (
    <>
      <MainSection />
      <Product />
      <DidYouKnow />
      <SellingPointsSection />
      <QASection />
      <ReviewSection />
    </>
  );
}
