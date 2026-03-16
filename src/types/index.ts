import type { ReactNode } from "react";
export interface Feature {
  icon: ReactNode;
  title: string;
  desc: string;
}

export interface InstallStep {
  num: number;
  title: string;
  description: ReactNode;
  important?: boolean;
}

export interface ShortcutRow {
  action: string;
  keys: string[];
}

export interface Permission {
  label: string;
  labelColor: string;
  title: string;
  desc: string;
  path: string;
}

export interface GatekeeperMethod {
  title: string;
  content: ReactNode;
}

export interface SourceCommand {
  id: string;
  comment?: string;
  cmd: string;
}

export interface TechBadge {
  label: string;
  color: string;
}
