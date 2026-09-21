import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problems } from "@/components/Problems";
import { DS44 } from "@/components/DS44";
import { Diagnostic } from "@/components/Diagnostic";
import { Plans } from "@/components/Plans";
import { Accreditation } from "@/components/Accreditation";
import { Services } from "@/components/Services";
import { Digital } from "@/components/Digital";
import { Industry } from "@/components/Industry";
import { Trust } from "@/components/Trust";
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
        <Problems />
        <DS44 />
        <Diagnostic />
        <Plans />
        <Accreditation />
        <Services />
        <Digital />
        <Industry />
        <Trust />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
