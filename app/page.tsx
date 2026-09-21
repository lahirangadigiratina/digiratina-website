import { WhatSetsApart } from "@/components/apart/WhatSetsApart";
import { CompanyIntro } from "@/components/company/CompanyIntro";
import { CareerAdventure } from "@/components/careers/CareerAdventure";
import { Faq } from "@/components/faq/Faq";
import { Hero } from "@/components/hero/Hero";
import { StayUpdated } from "@/components/insights/StayUpdated";
import { QualitySecurity } from "@/components/security/QualitySecurity";
import { DiscoverServices } from "@/components/services/DiscoverServices";
import { ClientStories } from "@/components/testimonials/ClientStories";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <WhatSetsApart />
      <CompanyIntro />
      <DiscoverServices />
      <ClientStories />
      <CareerAdventure />
      <QualitySecurity />
      <Faq />
      <StayUpdated />
    </main>
  );
}
