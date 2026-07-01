import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Authority } from "@/components/Authority";
import { Clients } from "@/components/Clients";
import { Challenges } from "@/components/Challenges";
import { Solutions } from "@/components/Solutions";
import { Plans } from "@/components/Plans";
import { Footer } from "@/components/Footer";
import { GlobalBackground } from "@/components/GlobalBackground";

export default function Home() {
  return (
    <>
      <GlobalBackground />
      <main className="min-h-screen text-white font-sans selection:bg-gold/30 flex flex-col">
        <Navbar />
        <Hero />
        <Authority />
        <Clients />
        <Challenges />
        <Solutions />
        <Plans />
        <Footer />
      </main>
    </>
  );
}
