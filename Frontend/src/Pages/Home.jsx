import HeroSection from "../components/HomePage/HeroSection";
import Work from "../components/HomePage/Work";
import Services from "../components/HomePage/Services";
import BlogSection from "../components/HomePage/BlogSection";
import Section1 from "../components/HomePage/Compliance";
import Section2 from "../components/HomePage/Videos";
import Testimonials from "../components/HomePage/Testimonials";
import TrainingProgram from "../components/HomePage/TrainingProgram";
import LegalResources from "../components/HomePage/LegalResources";

function Home() {
  return (
    <div>
      {/* Hero Section - First Impression */}
      <HeroSection />

      {/* Work Section - What We Do */}
      <Work />

      {/* Services - Showcasing Legal Expertise */}
      <Services />

      {/* Compliance Section - Legal Guidance */}
      <Section1 />

      {/* Legal Resources - Providing Valuable Information */}
      <LegalResources />

      {/* Blog Section - Engaging Content */}
      <BlogSection />

      {/* Videos Section - Interactive Learning */}
      <Section2 />

      {/* Training Program - Additional Services */}
      <TrainingProgram />

      {/* Testimonials - Social Proof */}
      <Testimonials />
    </div>
  );
}

export default Home;

