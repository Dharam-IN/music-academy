import FeatureCourses from "@/components/FeatureCourses";
import HeroSection from "@/components/HeroSection";
import WhyChoose from "@/components/WhyChoose";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.9] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeatureCourses/>
      <WhyChoose/>
    </main>
  );
}
