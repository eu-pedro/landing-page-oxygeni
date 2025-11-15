/* eslint-disable @next/next/no-img-element */
"use client";

import { LinkTreeGrid } from "./_components/link-three";
import { CosmicHero } from "./_components/cosmic-hero";

import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/ui/shadcn-io/marquee";
import { ActivitiesGrid } from "./_components/activities-grid";
import { AppleLabSpace } from "./_components/apple-lab-space";
import { OxygeniHubSection } from "./_components/oxygeni-hub-section";
import { Spaces } from "./_components/spaces";
import { Footer } from "./_components/footer";
import ResetSpace from "./_components/reset-space";

export default function Home() {
  return (
    <main className="bg-white">
      <CosmicHero />

      <div className="flex size-full items-center justify-center bg-background">
        <Marquee>
          <MarqueeFade side="left" />
          <MarqueeFade side="right" />
          <MarqueeContent>
            {new Array(10).fill(null).map((_, index) => (
              <MarqueeItem className="h-32 w-32" key={index}>
                <img
                  alt={`Placeholder ${index}`}
                  className="overflow-hidden rounded-full"
                  src={`https://placehold.co/128x128?random=${index}`}
                />
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
      </div>

      <div className="max-w-7xl mx-auto">
        <section className="w-full bg-white px-4 mt-10">
          <h2 className="text-[#1A151E] text-3xl font-bold">Alguma coisa</h2>
          <LinkTreeGrid />
        </section>

        <section className="w-full bg-white px-4 mt-10">
          <h2 className="text-[#1A151E] text-3xl font-bold">Atividades</h2>
          <ActivitiesGrid />
        </section>
      </div>

      <OxygeniHubSection />

      <Spaces />

      <AppleLabSpace />

      <ResetSpace />

      <Footer />
    </main>
  );
}
