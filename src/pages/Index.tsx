
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCategories from "@/components/ProductCategories";
import PopularListings from "@/components/PopularListings";
import Testimonials from "@/components/Testimonials";
import ValueProposition from "@/components/ValueProposition";
import FrequentlyShared from "@/components/FrequentlyShared";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ProductCategories />
      <PopularListings />
      <Testimonials />
      <ValueProposition />
      <FrequentlyShared />
      <Footer />
    </div>
  );
};

export default Index;
