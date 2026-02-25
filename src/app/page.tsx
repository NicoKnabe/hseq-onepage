import { Hero } from "@/components/Hero";
import { Authority } from "@/components/Authority";
import { Challenges } from "@/components/Challenges";
import { Solutions } from "@/components/Solutions";
import { Plans } from "@/components/Plans";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-50 font-sans selection:bg-cyan-500/30">
      <Hero />
      <Authority />
      <Challenges />
      <Solutions />
      <Plans />
      <Footer />
    </main>
  );
}
