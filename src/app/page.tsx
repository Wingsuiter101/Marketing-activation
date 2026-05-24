import { deckData } from "@/data/deck";
import { SectionShell } from "@/components/SectionShell";
import { StatCard } from "@/components/StatCard";
import { VerticalCard } from "@/components/VerticalCard";
import { PhaseTimeline } from "@/components/PhaseTimeline";
import { RecommendationCard } from "@/components/RecommendationCard";
import { ProgressRail } from "@/components/ProgressRail";
import { GradientOrb } from "@/components/GradientOrb";
import Image from "next/image";

export default function Home() {
  const sections = [
    "hero",
    "campaign-journey",
    ...deckData.verticals.map(v => `vertical-${v.id}`),
    "recommendation"
  ];

  return (
    <main className="bg-background text-foreground relative selection:bg-dgo-pink/30">
      <ProgressRail sections={sections} />

      {/* 1. Hero */}
      <SectionShell id="hero" className="justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image 
            src="/fifa-world-cup-2026-1920x1080.png" 
            alt="FIFA World Cup 2026 Background" 
            fill
            className="object-cover opacity-30 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
        </div>

        <GradientOrb color="violet" className="top-1/4 left-1/4 w-[40vw] h-[40vw] z-0" />
        <GradientOrb color="pink" className="bottom-1/4 right-1/4 w-[30vw] h-[30vw] z-0" />
        
        <div className="text-center space-y-10 max-w-5xl mx-auto relative z-10">
          <div className="flex justify-center mb-8">
            <Image 
              src="/Himalaya-Dgo-Lockup.png" 
              alt="Himalaya Sports and DGO Lockup" 
              width={600} 
              height={180} 
              className="h-32 md:h-40 w-auto object-contain drop-shadow-2xl"
              priority
            />
          </div>
          
          <div className="inline-block px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-xs font-mono uppercase tracking-[0.2em] text-white/70">
            Confidential Strategy
          </div>
          
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 drop-shadow-2xl">
              {deckData.hero.title}
            </h1>
            <p className="text-2xl md:text-4xl text-dgo-pink font-light tracking-tight drop-shadow-lg">
              {deckData.hero.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-12">
            {deckData.hero.stats.map((stat, i) => (
              <StatCard key={i} label={stat.label} value={stat.value} delay={i * 0.1} />
            ))}
          </div>

          <div className="pt-16 text-sm font-semibold text-white/40 uppercase tracking-[0.3em]">
            {deckData.hero.conclusion}
          </div>
        </div>
      </SectionShell>

      {/* 3. Campaign Journey */}
      <SectionShell id="campaign-journey">
        <GradientOrb color="orange" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw]" />
        
        <div className="w-full max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">Campaign Journey</h2>
            <p className="text-xl text-foreground-muted font-light">{deckData.campaignJourney.conclusion}</p>
          </div>
          
          <PhaseTimeline phases={deckData.campaignJourney.phases} />
        </div>
      </SectionShell>

      {/* 4-8. Verticals */}
      {deckData.verticals.map((vertical, index) => (
        <SectionShell 
          key={vertical.id} 
          id={`vertical-${vertical.id}`}
        >
          <VerticalCard {...vertical} index={index} />
        </SectionShell>
      ))}

      {/* Final Recommendation */}
      <SectionShell id="recommendation">
        <GradientOrb color="violet" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw]" />
        
        <div className="w-full flex flex-col items-center gap-12 z-10">
          <RecommendationCard 
            headline={deckData.finalRecommendation.headline}
            copy={deckData.finalRecommendation.copy}
            cta={deckData.finalRecommendation.cta}
          />

          <Image 
            src="/Himalaya-Dgo-Lockup.png" 
            alt="Himalaya Sports and DGO Lockup" 
            width={500} 
            height={150} 
            className="h-24 md:h-32 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>
      </SectionShell>
    </main>
  );
}
