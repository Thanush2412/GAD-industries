import { Header } from "@/components/gsa/Header";
import { Hero } from "@/components/gsa/Hero";
import { About } from "@/components/gsa/About";
import { Services } from "@/components/gsa/Services";
import { Products } from "@/components/gsa/Products";
import { SourcingPartners } from "@/components/gsa/SourcingPartners";
import { Contact } from "@/components/gsa/Contact";
import { Footer } from "@/components/gsa/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <SourcingPartners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
