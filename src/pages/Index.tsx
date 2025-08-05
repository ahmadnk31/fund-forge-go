import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { CategoryFilter } from "@/components/CategoryFilter";
import { FeaturedCampaigns } from "@/components/FeaturedCampaigns";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <CategoryFilter />
      <FeaturedCampaigns />
      <Footer />
    </div>
  );
};

export default Index;
