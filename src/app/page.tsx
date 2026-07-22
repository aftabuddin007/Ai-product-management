import HeroSection from "@/components/canvas/HeroCanvas";
import SignatureCanvas from "@/components/canvas/SignatureCanvas";
import DashboardPreview from "@/components/sections/DashboardPreview";
import InsightFlow from "@/components/sections/InsightFlow";


export default function Home() {
  return (
  <div className="">
   <main className="bg-slate-950 min-h-screen text-white">
      <HeroSection />
      <InsightFlow></InsightFlow>
      <DashboardPreview></DashboardPreview>
      <SignatureCanvas></SignatureCanvas>
    </main> 
  </div>

  );
}
