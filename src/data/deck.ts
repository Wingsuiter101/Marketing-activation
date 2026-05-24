import { Users, Wallet, Newspaper, Landmark, Plane, Clapperboard, Bus, Trophy, Target, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

export const deckData = {
  hero: {
    title: "FIFA 2026 PPV",
    subtitle: "Marketing Activation Strategy",
    stats: [
      { label: "Ideas", value: "52" },
      { label: "Phases", value: "5" },
      { label: "Talent", value: "54" },
      { label: "Reach", value: "24M+" }
    ],
    conclusion: "Idea-first approval deck."
  },
  campaignJourney: {
    phases: [
      "Launch Burst",
      "Pre-Tournament Conversion",
      "Tournament Opening Push",
      "Match-Day Conversion",
      "Knockout & Final Stage"
    ],
    conclusion: "From awareness to match-day urgency."
  },
  verticals: [
    {
      id: "creators",
      title: "Creators & Talent",
      icon: "Users",
      bigNumber: "54",
      bigNumberLabel: "Talent Options",
      reach: "13M–24M+ Reach",
      breakdown: [
        { label: "Digital creators", value: 10 },
        { label: "Women players", value: 11 },
        { label: "Celebrities", value: 20 },
        { label: "Comedian", value: 4 },
        { label: "Gamers", value: 4 },
        { label: "Cricketers", value: 5 }
      ],
      conclusion: "Our biggest attention engine. Approve direction, shortlist anchors, and negotiate bulk packages."
    },
    {
      id: "wallets",
      title: "Wallets",
      icon: "Wallet",
      bigNumber: "12",
      bigNumberLabel: "Placements",
      breakdown: [
        { label: "Khalti (required)", value: 6 },
        { label: "eSewa (proposed)", value: 6 }
      ],
      keyIdeas: [
        "App banners",
        "Roadblocks",
        "Push notifications",
        "Offer sections"
      ],
      conclusion: "Highest-conversion vertical. Users are already inside a payment environment."
    },
    {
      id: "portals",
      title: "Online Portals",
      icon: "Newspaper",
      bigNumber: "12",
      bigNumberLabel: "Publications",
      include: [
        "Onlinekhabar", "Setopati", "Ratopati", "Baarakhari", "HamroKhelkud", "Kantipur"
      ],
      conclusion: "Scale, credibility, and repeated visibility for premium match pushes."
    },
    {
      id: "banks-aviation",
      title: "Banks & Aviation",
      icon: "Landmark",
      bigNumber: "4",
      bigNumberLabel: "Partners",
      breakdown: [
        { label: "Banks", value: 3 },
        { label: "Aviation", value: 1 }
      ],
      keyIdeasLabel: "Banks",
      keyIdeas: ["NIC Asia", "Global IME", "Nabil Bank"],
      includeLabel: "Aviation",
      include: ["Buddha Airlines"],
      conclusion: "Banks add transaction trust. Buddha Air adds premium, repeated offline visibility."
    },
    {
      id: "travel-cinema-community",
      title: "Culture & Community",
      icon: "Bus",
      bigNumber: "6",
      bigNumberLabel: "Activations",
      breakdown: [
        { label: "BusSewa", value: 2 },
        { label: "Cinemas", value: 3 },
        { label: "RONB / Futsal", value: 1 }
      ],
      keyIdeasLabel: "BusSewa",
      keyIdeas: ["Seat branding", "Video play"],
      includeLabel: "Cinemas",
      include: ["INI Cinemas", "QFX Cinemas", "Big Movies"],
      conclusion: "RONB and futsal add football-community energy. BusSewa and cinema chains extend visibility into travel and entertainment moments."
    }
  ],
  finalRecommendation: {
    headline: "Ready to Execute",
    copy: "Approve verticals. Shortlist partners. Finalize execution.",
    cta: "Approve Activation Map"
  }
};
