import { useState } from "react";
import type { ReactNode } from "react";
import { SectionLabel, CodeSnip } from "@/components/ui";
import { AlertIcon, ChevronDownIcon } from "@/components/icons";
import { REPO_URL } from "@/data/installData";

interface AccordionItem {
  title: string;
  content: ReactNode;
}

const ITEMS: AccordionItem[] = [
  {
    title: "Why does macOS block the app?",
    content: (
      <p style={{ fontSize: "13px", color: "#777", lineHeight: 1.75, fontWeight: 300 }}>
        Apple's Gatekeeper blocks apps that aren't signed with a paid Apple Developer
        certificate ($99/year). MacClipboard is free and open-source, so it skips that
        cost. The app is completely safe — you can inspect every line of code{" "}
        <a
          href={REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--color-accent)", textDecoration: "underline" }}
        >
          on GitHub
        </a>
        .
      </p>
    ),
  },
  {
    title: "Method A — Right-click to open (recommended)",
    content: (
      <ol style={{ paddingLeft: "1.2rem", display: "flex", flexDirection: "column", gap: "10px" }}>
        {[
          <>Open <CodeSnip>Finder</CodeSnip> and navigate to your <CodeSnip>/Applications</CodeSnip> folder.</>,
          <>Locate <CodeSnip>Clipboard Manager</CodeSnip>.</>,
          <><strong style={{ color: "#d0d0d0", fontWeight: 500 }}>Right-click</strong> (or Control-click) the app icon and select <strong style={{ color: "var(--color-accent)", fontWeight: 500 }}>Open</strong> from the menu.</>,
          <>A dialog appears saying the developer cannot be verified. Click <strong style={{ color: "var(--color-accent)", fontWeight: 500 }}>Open</strong> to proceed.</>,
          <>The app launches normally. You only need to do this <em>once</em> — after that, open it like any other app.</>,
        ].map((item, i) => (
          <li key={i} style={{ fontSize: "13px", color: "#777", lineHeight: 1.7, fontWeight: 300 }}>
            {item}
          </li>
        ))}
      </ol>
    ),
  },
  {
    title: "Method B — Privacy & Security settings",
    content: (
      <ol style={{ paddingLeft: "1.2rem", display: "flex", flexDirection: "column", gap: "10px" }}>
        {[
          <>Try to open the app by double-clicking. macOS will show a blocked message and refuse to open it.</>,
          <>Open <CodeSnip>System Settings</CodeSnip> → <CodeSnip>Privacy & Security</CodeSnip>.</>,
          <>Scroll down to the <strong style={{ color: "#d0d0d0", fontWeight: 500 }}>Security</strong> section. You will see: <em>"Clipboard Manager was blocked from use because it is not from an identified developer."</em></>,
          <>Click <strong style={{ color: "var(--color-accent)", fontWeight: 500 }}>Open Anyway</strong> next to that message.</>,
          <>Enter your Mac password if prompted, then click <strong style={{ color: "var(--color-accent)", fontWeight: 500 }}>Open</strong> to confirm.</>,
        ].map((item, i) => (
          <li key={i} style={{ fontSize: "13px", color: "#777", lineHeight: 1.7, fontWeight: 300 }}>
            {item}
          </li>
        ))}
      </ol>
    ),
  },
  {
    title: "Method C — Terminal (advanced)",
    content: (
      <>
        <p style={{ fontSize: "13px", color: "#777", lineHeight: 1.7, fontWeight: 300, marginBottom: "12px" }}>
          If both methods above fail, remove the quarantine attribute using Terminal:
        </p>
        <div
          style={{
            background: "#0d0d0d",
            border: "1px solid #2a2a2a",
            borderRadius: "8px",
            padding: "14px 16px",
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            lineHeight: 1.8,
          }}
        >
          <div style={{ color: "#444", marginBottom: "2px" }}># Remove the quarantine flag</div>
          <div style={{ color: "#aef0d0" }}>
            xattr -cr "/Applications/Clipboard Manager.app"
          </div>
        </div>
        <p style={{ fontSize: "12px", color: "#555", marginTop: "10px", fontWeight: 300 }}>
          Then open the app normally from Finder or Spotlight. You only need to run this once.
        </p>
      </>
    ),
  },
];

const GatekeeperSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section style={{ marginBottom: "3rem" }}>
      <SectionLabel
        text="macOS security bypass"
        icon={<AlertIcon size={14} />}
        accentColor="var(--color-warn)"
      />

      {/* Warning banner */}
      <div
        style={{
          background: "var(--color-warn-subtle)",
          border: "1px solid var(--color-warn-border)",
          borderRadius: "10px",
          padding: "13px 16px",
          marginBottom: "14px",
          display: "flex",
          gap: "10px",
          alignItems: "flex-start",
        }}
      >
        <span style={{ color: "var(--color-warn)", marginTop: "1px", flexShrink: 0, lineHeight: 0 }}>
          <AlertIcon size={16} />
        </span>
        <p style={{ fontSize: "13px", color: "#c9a830", lineHeight: 1.65, margin: 0, fontWeight: 300 }}>
          macOS will show{" "}
          <em>"Apple cannot verify that this app is free from malware"</em> because
          the app is not notarized with an Apple Developer account. This is normal for
          free, open-source apps. The full source code is publicly available on GitHub.
        </p>
      </div>

      {/* Accordion */}
      <div
        style={{
          border: "1px solid var(--color-border)",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        {ITEMS.map((item, i) => (
          <div
            key={i}
            style={{
              borderBottom: i < ITEMS.length - 1 ? "1px solid var(--color-border-soft)" : "none",
            }}
          >
            <button
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              style={{
                width: "100%",
                background: openIdx === i ? "rgba(255,255,255,0.02)" : "transparent",
                border: "none",
                padding: "14px 18px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
                textAlign: "left",
                gap: "12px",
                transition: "background 0.12s",
              }}
            >
              <span style={{ fontSize: "13px", fontWeight: 500, color: "#d0d0d0" }}>
                {item.title}
              </span>
              <span style={{ color: "#555", flexShrink: 0, lineHeight: 0 }}>
                <ChevronDownIcon size={14} open={openIdx === i} />
              </span>
            </button>

            {openIdx === i && (
              <div style={{ padding: "2px 18px 18px" }}>{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default GatekeeperSection;
