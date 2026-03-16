import type { CSSProperties, ReactNode } from "react";

// ── Tag / badge pill ─────────────────────────────────────────────────────────

interface TagProps {
  children: ReactNode;
  color?: string;
}

export const Tag = ({ children, color = "var(--color-accent)" }: TagProps) => (
  <span
    style={{
      fontSize: "10px",
      fontWeight: 600,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      background: color + "22",
      color,
      border: `1px solid ${color}44`,
      borderRadius: "var(--radius-pill)",
      padding: "3px 10px",
      display: "inline-block",
    }}
  >
    {children}
  </span>
);

// ── Keyboard keycap ──────────────────────────────────────────────────────────

export const KeyCap = ({ children }: { children: ReactNode }) => (
  <span
    style={{
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      background: "#1a1a1a",
      border: "1px solid #333",
      borderBottom: "2px solid #444",
      borderRadius: "5px",
      padding: "3px 9px",
      color: "#e0e0e0",
      fontWeight: 500,
      display: "inline-block",
    }}
  >
    {children}
  </span>
);

// ── Inline code snippet ──────────────────────────────────────────────────────

export const CodeSnip = ({ children }: { children: ReactNode }) => (
  <code
    style={{
      fontFamily: "var(--font-mono)",
      fontSize: "12px",
      background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.10)",
      borderRadius: "4px",
      padding: "1px 7px",
      color: "#aef0d0",
    }}
  >
    {children}
  </code>
);

// ── Section label ────────────────────────────────────────────────────────────

interface SectionLabelProps {
  text: string;
  icon?: ReactNode;
  accentColor?: string;
  style?: CSSProperties;
}

export const SectionLabel = ({
  text,
  icon,
  accentColor = "var(--color-accent)",
  style,
}: SectionLabelProps) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "7px",
      marginBottom: "14px",
      ...style,
    }}
  >
    {icon && (
      <span style={{ color: accentColor, opacity: 0.7, lineHeight: 0 }}>{icon}</span>
    )}
    <span
      style={{
        fontSize: "10px",
        fontWeight: 600,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "var(--color-text-muted)",
      }}
    >
      {text}
    </span>
  </div>
);

// ── Divider ──────────────────────────────────────────────────────────────────

export const Divider = ({ style }: { style?: CSSProperties }) => (
  <hr
    style={{
      border: "none",
      borderTop: "1px solid var(--color-border-soft)",
      margin: "2.5rem 0",
      ...style,
    }}
  />
);
