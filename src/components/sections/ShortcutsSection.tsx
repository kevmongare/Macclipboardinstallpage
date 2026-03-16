import { SectionLabel, KeyCap } from "@/components/ui";
import { SHORTCUTS } from "@/data/installData";

const ShortcutsSection = () => (
  <section style={{ marginBottom: "3rem" }}>
    <SectionLabel text="Keyboard shortcuts & usage" />

    <div
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: "12px",
        padding: "0 1.25rem",
      }}
    >
      {SHORTCUTS.map((row, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0.9rem 0",
            borderBottom:
              i < SHORTCUTS.length - 1
                ? "1px solid var(--color-border-soft)"
                : "none",
            gap: "12px",
          }}
        >
          <span
            style={{
              fontSize: "13px",
              color: "var(--color-text-secondary)",
              fontWeight: 300,
            }}
          >
            {row.action}
          </span>

          <div
            style={{
              display: "flex",
              gap: "4px",
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            {row.keys.map((k, ki) => (
              <KeyCap key={ki}>{k}</KeyCap>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ShortcutsSection;
