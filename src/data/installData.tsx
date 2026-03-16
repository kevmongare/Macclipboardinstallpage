import type {
  InstallStep,
  ShortcutRow,
  Permission,
  SourceCommand,
  TechBadge,
} from "@/types";

export const REPO_URL = "https://github.com/kevmongare/MacClipboard";
export const RELEASE_URL = "https://github.com/kevmongare/MacClipboard/releases/tag/v1.0.0";
export const DMG_NAME = "Clipboard Manager-1.0.0.dmg";
export const APP_VERSION = "v1.0.0";
export const MACOS_MIN = "macOS 10.15 Catalina or later";
export const ELECTRON_VERSION = "Electron 30.0.1";

export const INSTALL_STEPS: InstallStep[] = [
  {
    num: 1,
    title: "Download the DMG",
    description: "Click the Download button above to go to the GitHub releases page and download the DMG file.",
  },
  {
    num: 2,
    title: "Open the DMG file",
    description: "Double-click the downloaded file to mount it. A Finder window will open showing the app.",
  },
  {
    num: 3,
    title: "Drag to Applications",
    description: 'Drag "Clipboard Manager" into your /Applications folder as shown in the installer window.',
  },
  {
    num: 4,
    title: "Bypass Gatekeeper on first launch",
    description:
      'macOS blocks unverified apps by default. Right-click the app in Applications and choose Open — then click Open in the dialog. Do not double-click or you will only see the blocked error.',
    important: true,
  },
  {
    num: 5,
    title: "Grant permissions when prompted",
    description:
      "Allow Accessibility and Screen Recording access when prompted by macOS. See the permissions section below.",
  },
];

export const PERMISSIONS: Permission[] = [
  {
    label: "Required",
    labelColor: "var(--color-accent)",
    title: "Accessibility",
    desc: "Needed for the auto-paste feature to type into other applications on your behalf.",
    path: "System Settings → Privacy & Security → Accessibility",
  },
  {
    label: "Recommended",
    labelColor: "var(--color-blue)",
    title: "Screen Recording",
    desc: "Enables the app to float properly over fullscreen applications and all spaces.",
    path: "System Settings → Privacy & Security → Screen Recording",
  },
];

export const SHORTCUTS: ShortcutRow[] = [
  { action: "Show / hide the clipboard panel", keys: ["⌘", "⇧", "V"] },
  { action: "Hide the window",                 keys: ["Esc"] },
  { action: "Paste into active app",           keys: ["Auto Paste"] },
  { action: "Copy item to clipboard",          keys: ["Copy Text / Image"] },
];

export const SOURCE_COMMANDS: SourceCommand[] = [
  { id: "clone", comment: "# Clone the repository", cmd: "git clone https://github.com/kevmongare/MacClipboard.git" },
  { id: "cd",    cmd: "cd MacClipboard" },
  { id: "npm",   comment: "# Install dependencies",  cmd: "npm install" },
  { id: "build", comment: "# Build the app",         cmd: "npm run build:app" },
];

export const TECH_BADGES: TechBadge[] = [
  { label: "TypeScript 68%", color: "var(--color-blue)" },
  { label: "JavaScript 29%", color: "#f0c040" },
  { label: "Electron 30",    color: "#888" },
  { label: "React + Vite",   color: "var(--color-accent)" },
];

export const KNOWN_ISSUES: string[] = [
  "Auto-paste may require manually granting Accessibility in System Settings before it works.",
  "First-time Gatekeeper bypass is required — see the macOS security bypass section above.",
];
