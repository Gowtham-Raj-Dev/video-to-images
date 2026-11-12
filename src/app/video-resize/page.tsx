import type { Metadata } from "next";
import { getTool } from "@/lib/tools";
import { pageMetadata } from "@/lib/seo";
import { ToolPageLayout } from "@/components/ToolPageLayout";
import { VideoResizeWorkspace } from "@/components/VideoResizeWorkspace";

const tool = getTool("video-resize")!;

export const metadata: Metadata = pageMetadata({
  title: `${tool.name} — Scale to 1080p & 720p`,
  description: tool.metaDescription,
  path: `/${tool.slug}`,
});

export default function Page() {
  return (
    <ToolPageLayout tool={tool}>
      <VideoResizeWorkspace />
    </ToolPageLayout>
  );
}
