import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyPetiteSection from "@/components/WhyPetiteSection";
import CategoriesSection from "@/components/CategoriesSection";
import BundlesSection from "@/components/BundlesSection";
import BuildBagSection from "@/components/BuildBagSection";
import BrandsSection from "@/components/BrandsSection";
import BrandPartnerSection from "@/components/BrandPartnerSection";
import EmailCaptureSection from "@/components/EmailCaptureSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhyPetiteSection />
      <CategoriesSection />
      <BundlesSection />
      <BuildBagSection />
      <BrandsSection />
      <BrandPartnerSection />
      <EmailCaptureSection />
      <Footer />
    </div>
  );
};

export default Index;
