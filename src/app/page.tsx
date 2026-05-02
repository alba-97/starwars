"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

interface Faction {
  id: string;
  name: string;
  leader: string;
  leaderImage: string;
  primaryColor: string;
  units: {
    name: string;
    image: string;
    roleKey: string;
  }[];
  vehicles: {
    name: string;
    image: string;
    nameKey: string;
  }[];
}

const factions: Faction[] = [
  {
    id: "imperio",
    name: "imperial",
    leader: "Darth Vader",
    leaderImage: "/images/darth_vader.png",
    primaryColor: "secondary",
    units: [
      { name: "Stormtrooper", image: "/images/stormtrooper.png", roleKey: "infantry" },
    ],
    vehicles: [
      { name: "Caminante", image: "/images/caminante.png", nameKey: "walker" },
      { name: "TIE Fighter", image: "/images/TIEfighter2-Fathead.png", nameKey: "tieFighter" },
    ],
  },
  {
    id: "rebeldes",
    name: "rebel",
    leader: "Luke Skywalker",
    leaderImage: "/images/skywalker.png",
    primaryColor: "primary",
    units: [
      { name: "R2-D2", image: "/images/r2d2.png", roleKey: "droid" },
      { name: "C-3PO", image: "/images/c3po.png", roleKey: "droid" },
      { name: "BB-8", image: "/images/bb8.png", roleKey: "droid" },
    ],
    vehicles: [
      { name: "Tanque", image: "/images/T3-B.jpg", nameKey: "tank" },
      { name: "Halcón Milenario", image: "/images/halcon_milenario.png", nameKey: "millenniumFalcon" },
      { name: "X-Wing", image: "/images/x_wing.png", nameKey: "xwing" },
    ],
  },
];

function FactionCard({ faction, index }: { faction: Faction; index: number }) {
  const t = useTranslations();
  const colorClasses = faction.primaryColor === "secondary"
    ? "border-secondary glow-secondary"
    : "border-primary glow-primary";

  return (
    <section
      className={`relative bg-card border border-border rounded-xl overflow-hidden animate-fade-up animate-delay-${index * 200}`}
    >
      <div className={`absolute inset-0 opacity-5 ${faction.primaryColor === 'secondary' ? 'bg-secondary' : 'bg-primary'}`} />
      
      <div className="relative p-8 space-y-8">
        <header className="text-center space-y-2">
          <h2 className={`text-3xl font-bold tracking-wider ${faction.primaryColor === 'secondary' ? 'text-secondary' : 'text-primary'}`}>
            {t(faction.name)}
          </h2>
          <div className="h-px bg-border w-32 mx-auto" />
        </header>

        <figure className="flex flex-col items-center gap-4">
          <div className="relative">
            <div className={`absolute inset-0 ${colorClasses} opacity-20 blur-2xl rounded-full`} />
            <Image
              src={faction.leaderImage}
              alt={faction.leader}
              width={280}
              height={400}
              className="relative z-10 w-auto h-auto max-h-96 object-contain"
            />
          </div>
          <figcaption className="text-center">
            <p className="text-sm text-gray-300 uppercase tracking-widest">{t("leaderLabel")}</p>
            <p className="text-xl font-semibold">{faction.leader}</p>
          </figcaption>
        </figure>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-300">{t("troopsTitle")}</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {faction.units.map((unit) => (
              <div key={unit.name} className="flex flex-col items-center gap-2 bg-background p-4 rounded-lg border border-border">
                <Image
                  src={unit.image}
                  alt={unit.name}
                  width={120}
                  height={160}
                  className="w-24 h-32 object-contain"
                />
                <p className="text-sm font-medium">{unit.name}</p>
                <p className="text-xs text-gray-500">{t(unit.roleKey)}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-300">{t("vehiclesTitle")}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {faction.vehicles.map((vehicle) => (
              <div key={vehicle.name} className="flex flex-col items-center gap-2 bg-background p-4 rounded-lg border border-border">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  width={200}
                  height={120}
                  className="w-full h-24 object-contain"
                />
                <p className="text-sm font-medium text-center">{t(vehicle.nameKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const t = useTranslations();

  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        <header className="text-center space-y-6 animate-fade-up">
          <div className="flex justify-center">
            <Image
              src="/images/starwars_logo.png"
              alt="Star Wars"
              width={500}
              height={200}
              className="w-full max-w-md md:max-w-lg lg:max-w-xl"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            {t("title")}
          </h1>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            {t("subtitle")}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {factions.map((faction, index) => (
            <FactionCard key={faction.id} faction={faction} index={index} />
          ))}
        </div>

        <footer className="text-center text-sm text-gray-500 py-8 border-t border-border">
          <p>{t("footer", { year: new Date().getFullYear() })}</p>
        </footer>
      </div>
    </main>
  );
}