import { MagicContainer } from "@/components/ui/magic-container";
import BlogHero from "@/components/BlogHero";
import BlogGrid from "@/components/BlogGrid";

export default function Home() {
  return (
    <MagicContainer>
      <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
        <BlogHero />
        <BlogGrid />
      </main>
    </MagicContainer>
  );
}