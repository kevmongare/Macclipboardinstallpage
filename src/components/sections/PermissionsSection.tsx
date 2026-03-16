import { SectionLabel } from "@/components/ui";
import { PERMISSIONS } from "@/data/installData";

const PermissionsSection = () => (
  <section style={{ marginBottom: "3rem" }}>
    <SectionLabel text="Required permissions" />

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "10px",
      }}
    >
      {PERMISSIONS.map((p, i) => (
        <div
          key={i}
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: "12px",
            padding: "1.1rem 1.25rem",
          }}
        >
          {/* Label badge */}
          <span
            style={{
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              background: p.labelColor + "18",
              color: p.labelColor,
              border: `1px solid ${p.labelColor}33`,
              borderRadius: "100px",
              padding: "3px 10px",
              display: "inline-block",
              marginBottom: "10px",
            }}
          >
            {p.label}
          </span>

          <h3
            style={{
              fontSize: "13px",
              fontWeight: 500,
              color: "var(--color-text-primary)",
              marginBottom: "5px",
            }}
          >
            {p.title}
          </h3>

          <p
            style={{
              fontSize: "12px",
              color: "var(--color-text-secondary)",
              lineHeight: 1.65,
              fontWeight: 300,
              marginBottom: "10px",
            }}
          >
            {p.desc}
          </p>

          <code
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10.5px",
              color: "var(--color-text-muted)",
              display: "block",
            }}
          >
            {p.path}
          </code>
        </div>
      ))}
    </div>
  </section>
);

export default PermissionsSection;
