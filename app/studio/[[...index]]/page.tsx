"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity.config";

export default function StudioPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <NextStudio config={config} />
    </div>
  );
}
