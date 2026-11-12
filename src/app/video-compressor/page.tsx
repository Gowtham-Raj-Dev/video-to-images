import type { Metadata } from "next";
import { getTool } from "@/lib/tools";
import { pageMetadata } from "@/lib/seo";
import { ToolPageLayout } from "@/components/ToolPageLayout";
import { VideoCompressorWorkspace } from "@/components/VideoCompressorWorkspace";

const tool = getTool("video-compressor")!;

export const metadata: Metadata = pageMetadata({
  title: `${tool.name} — Reduce Video Size Free`,
  description: tool.metaDescription,
  path: `/${tool.slug}`,
  keywords: tool.keywords,
});

export default function Page() {
  return (
    <ToolPageLayout tool={tool}>
      <VideoCompressorWorkspace />
    </ToolPageLayout>
  );
}
