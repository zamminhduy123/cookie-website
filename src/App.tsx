import "./App.css";

import MainSection from "./sections/MainSection";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Product from "./sections/Product";
import QASection from "./sections/Q&ASection";
import ReviewSection from "./sections/ReviewSection";
import SellingPointsSection from "./sections/SellingPointSection";
import SmoothScrollLayout from "./components/SmoothScrollLayout.tsx";

function App() {
  return (
    <>
      <Header />
      <SmoothScrollLayout>
        <main className="min-h-screen w-full relative bg-light">
          <MainSection />
          <Product />
          <QASection />
          <SellingPointsSection />
          <ReviewSection />
        </main>
        <Footer />
      </SmoothScrollLayout>
    </>
  );
}

export default App;
