import { DownloadIcon, GitHubIcon } from "@/components/icons";
import { RELEASE_URL, REPO_URL, APP_VERSION, MACOS_MIN } from "@/data/installData";

const HeroSection = () => (
  <section style={{ marginBottom: "3.5rem" }}>
    {/* Version badge */}
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "7px",
        fontSize: "11px",
        fontWeight: 600,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "var(--color-accent)",
        background: "var(--color-accent-subtle)",
        border: "1px solid var(--color-accent-border)",
        borderRadius: "100px",
        padding: "5px 14px",
        marginBottom: "1.5rem",
      }}
    >
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "var(--color-accent)",
          flexShrink: 0,
          display: "inline-block",
        }}
      />
      {APP_VERSION} — Latest Release
    </div>

    {/* Heading */}
    <h1
      style={{
        fontSize: "clamp(2.2rem, 5.5vw, 3.5rem)",
        fontWeight: 600,
        lineHeight: 1.1,
        letterSpacing: "-0.03em",
        marginBottom: "1.1rem",
        color: "var(--color-text-primary)",
      }}
    >
      Clipboard Manager
      <br />
      <span style={{ color: "var(--color-accent)" }}>for macOS</span>
    </h1>

    {/* Subtitle */}
    <p
      style={{
        fontSize: "1rem",
        color: "var(--color-text-secondary)",
        lineHeight: 1.75,
        maxWidth: "500px",
        marginBottom: "2.5rem",
        fontWeight: 300,
      }}
    >
      A free, open-source floating clipboard history manager that stays on top
      of every window — including fullscreen apps. Built because most clipboard
      managers are either paid or not robust enough.
    </p>

    {/* CTA buttons */}
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        alignItems: "center",
        marginBottom: "0.75rem",
      }}
    >
      <a
        href={RELEASE_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          background: "var(--color-accent)",
          color: "var(--color-accent-darkest)",
          border: "none",
          borderRadius: "10px",
          padding: "14px 26px",
          fontSize: "15px",
          fontWeight: 600,
          fontFamily: "var(--font-sans)",
          textDecoration: "none",
          transition: "background 0.15s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-accent-dark)")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "var(--color-accent)")}
      >
        <DownloadIcon size={18} /> Download DMG — Free
      </a>

      <a
        href={REPO_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          background: "transparent",
          color: "var(--color-text-secondary)",
          border: "1px solid var(--color-border)",
          borderRadius: "10px",
          padding: "12px 20px",
          fontSize: "13px",
          fontWeight: 500,
          fontFamily: "var(--font-sans)",
          textDecoration: "none",
          transition: "border-color 0.15s, color 0.15s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "#444";
          e.currentTarget.style.color = "#ccc";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--color-border)";
          e.currentTarget.style.color = "var(--color-text-secondary)";
        }}
      >
        <GitHubIcon size={16} /> View on GitHub
      </a>
    </div>

    {/* Meta line */}
    <p
      style={{
        fontSize: "11px",
        color: "var(--color-text-muted)",
        letterSpacing: "0.02em",
      }}
    >
      Clipboard Manager-1.0.0.dmg &nbsp;·&nbsp; {MACOS_MIN} &nbsp;·&nbsp; MIT License
    </p>
  </section>
);

export default HeroSection;
