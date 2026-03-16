import { SectionLabel, Tag, CodeSnip } from "@/components/ui";
import { INSTALL_STEPS } from "@/data/installData";

const InstallStepsSection = () => (
  <section style={{ marginBottom: "3rem" }}>
    <SectionLabel text="Installation" />

    <div
      style={{
        border: "1px solid var(--color-border)",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      {INSTALL_STEPS.map((step, i) => (
        <div
          key={step.num}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "16px",
            padding: "1.1rem 1.25rem",
            borderBottom:
              i < INSTALL_STEPS.length - 1
                ? "1px solid var(--color-border-soft)"
                : "none",
          }}
        >
          {/* Step number bubble */}
          <div
            style={{
              width: "26px",
              height: "26px",
              borderRadius: "50%",
              background: "var(--color-accent-subtle)",
              color: "var(--color-accent)",
              fontSize: "11px",
              fontWeight: 600,
              fontFamily: "var(--font-mono)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              marginTop: "1px",
            }}
          >
            {step.num}
          </div>

          {/* Content */}
          <div style={{ flex: 1 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "4px",
              }}
            >
              <h3
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "var(--color-text-primary)",
                }}
              >
                {step.title}
              </h3>
              {step.important && <Tag color="var(--color-warn)">Important</Tag>}
            </div>

            <p
              style={{
                fontSize: "13px",
                color: "var(--color-text-secondary)",
                lineHeight: 1.7,
                fontWeight: 300,
              }}
            >
              {/* Enrich step 3 and 4 with inline code */}
              {step.num === 3 ? (
                <>
                  Drag <CodeSnip>Clipboard Manager</CodeSnip> into your{" "}
                  <CodeSnip>/Applications</CodeSnip> folder as shown in the
                  installer window.
                </>
              ) : step.num === 4 ? (
                <>
                  macOS blocks unverified apps by default.{" "}
                  <strong style={{ color: "var(--color-warn)", fontWeight: 500 }}>
                    Right-click
                  </strong>{" "}
                  the app in Applications and choose{" "}
                  <strong style={{ color: "var(--color-warn)", fontWeight: 500 }}>
                    Open
                  </strong>{" "}
                  — then click{" "}
                  <strong style={{ color: "var(--color-warn)", fontWeight: 500 }}>
                    Open
                  </strong>{" "}
                  in the dialog. Do <em>not</em> double-click or you will only
                  see the blocked error. See the full guide below.
                </>
              ) : (
                step.description
              )}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default InstallStepsSection;
