import AboutSection from "../_components/about";
import ContactSection from "../_components/contact";
import Header from "../_components/Header";
import HomeSection from "../_components/hero";
import Navbar from "../_components/navbar";
import NewsSection from "../_components/news";
import WorkSection from "../_components/work";

export default function HomePage() {
  return (
    <>
      <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <HomeSection /></div>
    
     
      <AboutSection />
      <WorkSection />
      <NewsSection />
      <ContactSection />
    
    </>
  );
}