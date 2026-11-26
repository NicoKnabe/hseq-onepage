import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ClientsMarquee } from "@/components/ClientsMarquee";
import { HowWeHelp } from "@/components/HowWeHelp";
import { HowWeWork } from "@/components/HowWeWork";
import { Plans } from "@/components/Plans";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ClientsMarquee />
        <HowWeHelp />
        <HowWeWork />
        <Plans />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
