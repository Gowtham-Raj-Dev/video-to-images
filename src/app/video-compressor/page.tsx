import type { Metadata } from "next";
import { getTool } from "@/lib/tools";
import { ToolPageLayout } from "@/components/ToolPageLayout";
import { VideoCompressorWorkspace } from "@/components/VideoCompressorWorkspace";

const tool = getTool("video-compressor")!;

export const metadata: Metadata = {
  title: `${tool.name} — Compress Video Online Free`,
  description: tool.description,
  alternates: { canonical: "/video-compressor" },
};

export default function Page() {
  return (
    <ToolPageLayout tool={tool}>
      <VideoCompressorWorkspace />
    </ToolPageLayout>
  );
}
