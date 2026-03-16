import type { Feature } from "@/types";
import { SectionLabel } from "@/components/ui";
import {
  ClipboardIcon,
  LayersIcon,
  SearchIcon,
  ZapIcon,
  ImageIcon,
  ShieldIcon,
} from "@/components/icons";

const FEATURES: Feature[] = [
  { icon: <ClipboardIcon />, title: "Clipboard history",   desc: "Auto-tracks every text and image you copy, persistently." },
  { icon: <LayersIcon />,    title: "Always on top",       desc: "Floats over fullscreen apps and all macOS spaces." },
  { icon: <SearchIcon />,    title: "Instant search",      desc: "Find anything in your full clipboard history immediately." },
  { icon: <ZapIcon />,       title: "Auto-paste",          desc: "One-click paste directly into whichever app is active." },
  { icon: <ImageIcon />,     title: "Image support",       desc: "Works with screenshots and image copies, not just text." },
  { icon: <ShieldIcon />,    title: "Free & open source",  desc: "MIT license, no subscription, full source on GitHub." },
];

const FeaturesSection = () => (
  <section style={{ marginBottom: "3rem" }}>
    <SectionLabel text="Features" />

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
        gap: "10px",
      }}
    >
      {FEATURES.map((f, i) => (
        <div
          key={i}
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: "12px",
            padding: "1.1rem 1.25rem",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              background: "var(--color-accent-subtle)",
              border: "1px solid var(--color-accent-border)",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "10px",
              color: "var(--color-accent)",
            }}
          >
            {f.icon}
          </div>
          <h3
            style={{
              fontSize: "13px",
              fontWeight: 500,
              color: "var(--color-text-primary)",
              marginBottom: "4px",
            }}
          >
            {f.title}
          </h3>
          <p
            style={{
              fontSize: "12px",
              color: "var(--color-text-secondary)",
              lineHeight: 1.65,
              fontWeight: 300,
            }}
          >
            {f.desc}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturesSection;
