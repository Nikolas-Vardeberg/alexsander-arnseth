"use client";

import { useDraftModeEnvironment } from "next-sanity/hooks";

export function DisableDraftMode() {
  const environment = useDraftModeEnvironment();

  if (environment !== "live" && environment !== "unknown") {
    return null;
  }

  return (
    <a
      href="/api/draft-mode/disable"
      className="fixed bottom-4 right-4 bg-primary text-black uppercase border-2 border-secondary-green shadow-lg px-4 py-2"
    >
      Skru Av Draft Mode
    </a>
  );
}