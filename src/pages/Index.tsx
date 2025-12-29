import Navbar from "@/components/Navbar";
import Hero3D from "@/components/Hero3D";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import WhyDimova from "@/components/WhyDimova";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero3D />
      <Services />
      <Projects />
      <WhyDimova />
      <Process />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
