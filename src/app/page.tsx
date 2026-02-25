import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Authority } from "@/components/Authority";
import { Challenges } from "@/components/Challenges";
import { Solutions } from "@/components/Solutions";
import { Plans } from "@/components/Plans";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-gold/30">
      <Navbar />
      <Hero />
      <Authority />
      <Challenges />
      <Solutions />
      <Plans />
      <Footer />
    </main>
  );
}
