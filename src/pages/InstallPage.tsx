import { Divider } from "@/components/ui";
import {
  HeroSection,
  FeaturesSection,
  InstallStepsSection,
  GatekeeperSection,
  PermissionsSection,
  ShortcutsSection,
  SourceSection,
  KnownIssuesSection,
  FooterSection,
} from "@/components/sections";

const InstallPage = () => (
  <div
    style={{
      minHeight: "100vh",
      background: "var(--color-bg)",
    }}
  >
    {/* Constrained content column */}
    <main
      style={{
        maxWidth: "820px",
        margin: "0 auto",
        padding: "3rem 1.5rem 5rem",
      }}
    >
      <HeroSection />

      <FeaturesSection />

      <Divider />

      <InstallStepsSection />

      <GatekeeperSection />

      <PermissionsSection />

      <ShortcutsSection />

      <Divider />

      <SourceSection />

      <KnownIssuesSection />

      <FooterSection />
    </main>
  </div>
);

export default InstallPage;
