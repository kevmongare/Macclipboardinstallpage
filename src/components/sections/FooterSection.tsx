import { CheckIcon, GitHubIcon } from "@/components/icons";
import { REPO_URL, MACOS_MIN, ELECTRON_VERSION } from "@/data/installData";

const FooterSection = () => (
  <footer
    style={{
      display: "flex",
      alignItems: "center",
      gap: "8px",
      color: "var(--color-text-muted)",
      fontSize: "12px",
      paddingTop: "2rem",
      borderTop: "1px solid var(--color-border-soft)",
      flexWrap: "wrap",
    }}
  >
    <CheckIcon size={14} />
    <span>{MACOS_MIN}</span>

    <span style={{ color: "#222" }}>·</span>
    <span>{ELECTRON_VERSION}</span>

    <span style={{ color: "#222" }}>·</span>
    <span>MIT License</span>

    <span style={{ color: "#222" }}>·</span>
    <a
      href={REPO_URL}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: "var(--color-text-muted)",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        gap: "5px",
        transition: "color 0.15s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#888")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-muted)")}
    >
      <GitHubIcon size={13} />
      kevmongare/MacClipboard
    </a>
  </footer>
);

export default FooterSection;
