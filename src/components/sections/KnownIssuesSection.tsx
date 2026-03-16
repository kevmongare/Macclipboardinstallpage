import { SectionLabel } from "@/components/ui";
import { InfoIcon } from "@/components/icons";
import { KNOWN_ISSUES } from "@/data/installData";

const KnownIssuesSection = () => (
  <section style={{ marginBottom: "3rem" }}>
    <SectionLabel text="Known issues" />

    <div
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: "12px",
        padding: "0 1.25rem",
      }}
    >
      {KNOWN_ISSUES.map((issue, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            gap: "10px",
            padding: "0.9rem 0",
            borderBottom:
              i < KNOWN_ISSUES.length - 1
                ? "1px solid var(--color-border-soft)"
                : "none",
            alignItems: "flex-start",
          }}
        >
          <span
            style={{
              color: "var(--color-warn)",
              marginTop: "1px",
              flexShrink: 0,
              lineHeight: 0,
            }}
          >
            <InfoIcon size={15} />
          </span>
          <p
            style={{
              fontSize: "13px",
              color: "var(--color-text-secondary)",
              lineHeight: 1.65,
              fontWeight: 300,
            }}
          >
            {issue}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default KnownIssuesSection;
