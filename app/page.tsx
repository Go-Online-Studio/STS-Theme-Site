import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TemplateGallery from "./components/TemplateGallery";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import NewsletterSection from "./components/NewsletterSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <TemplateGallery />
        {/* <ComparisonSection /> */}
        <ServicesSection />
        <TestimonialsSection />
        <FAQSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
