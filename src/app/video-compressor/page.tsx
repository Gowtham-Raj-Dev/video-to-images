import type { Metadata } from "next";
import { getTool } from "@/lib/tools";
import { pageMetadata } from "@/lib/seo";
import { ToolPageLayout } from "@/components/ToolPageLayout";
import { VideoCompressorWorkspace } from "@/components/VideoCompressorWorkspace";

const tool = getTool("video-compressor")!;

export const metadata: Metadata = pageMetadata({
  title: `${tool.name} — Compress Video Online Free`,
  description: tool.metaDescription,
  path: `/${tool.slug}`,
});

export default function Page() {
  return (
    <ToolPageLayout tool={tool}>
      <VideoCompressorWorkspace />
    </ToolPageLayout>
  );
}
