import type { Metadata } from "next";
import { getTool } from "@/lib/tools";
import { ToolPageLayout } from "@/components/ToolPageLayout";
import { VideoResizeWorkspace } from "@/components/VideoResizeWorkspace";

const tool = getTool("video-resize")!;

export const metadata: Metadata = {
  title: `${tool.name} — Resize Video to 1080p, 720p, 480p Free`,
  description: tool.description,
  alternates: { canonical: "/video-resize" },
};

export default function Page() {
  return (
    <ToolPageLayout tool={tool}>
      <VideoResizeWorkspace />
    </ToolPageLayout>
  );
}
