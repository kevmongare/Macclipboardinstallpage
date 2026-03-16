import { useState } from "react";
import { SectionLabel, CodeSnip } from "@/components/ui";
import { SOURCE_COMMANDS, TECH_BADGES } from "@/data/installData";

const SourceSection = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  return (
    <section style={{ marginBottom: "3rem" }}>
      <SectionLabel text="Build from source" />

      <div
        style={{
          background: "var(--color-surface)",
          border: "1px solid var(--color-border)",
          borderRadius: "12px",
          padding: "1.25rem",
        }}
      >
        <h3
          style={{
            fontSize: "13px",
            fontWeight: 500,
            color: "var(--color-text-primary)",
            marginBottom: "5px",
          }}
        >
          Clone &amp; build locally
        </h3>
        <p
          style={{
            fontSize: "12px",
            color: "var(--color-text-secondary)",
            lineHeight: 1.6,
            fontWeight: 300,
            marginBottom: "14px",
          }}
        >
          Requires Node.js. The compiled <CodeSnip>.dmg</CodeSnip> will appear
          in the <CodeSnip>release/</CodeSnip> folder after building.
        </p>

        {/* Code block */}
        <div
          style={{
            background: "#0d0d0d",
            border: "1px solid #1e1e1e",
            borderRadius: "10px",
            padding: "1rem 1.25rem",
            fontFamily: "var(--font-mono)",
            fontSize: "12.5px",
            lineHeight: 2,
            marginBottom: "16px",
          }}
        >
          {SOURCE_COMMANDS.map((item) => (
            <div key={item.id}>
              {item.comment && (
                <div style={{ color: "#3a5a4a", fontSize: "11px" }}>{item.comment}</div>
              )}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "12px",
                }}
              >
                <span style={{ color: "#aef0d0" }}>{item.cmd}</span>
                <button
                  onClick={() => copy(item.cmd, item.id)}
                  style={{
                    background: "transparent",
                    border: "1px solid #2a2a2a",
                    borderRadius: "5px",
                    padding: "2px 9px",
                    fontSize: "10px",
                    color: copiedId === item.id ? "var(--color-accent)" : "#555",
                    cursor: "pointer",
                    fontFamily: "var(--font-mono)",
                    flexShrink: 0,
                    transition: "color 0.15s",
                  }}
                >
                  {copiedId === item.id ? "✓ copied" : "copy"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {TECH_BADGES.map((badge, i) => (
            <span
              key={i}
              style={{
                fontSize: "10px",
                fontWeight: 500,
                background: badge.color + "14",
                color: badge.color,
                border: `1px solid ${badge.color}30`,
                borderRadius: "100px",
                padding: "3px 10px",
                letterSpacing: "0.05em",
              }}
            >
              {badge.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SourceSection;
