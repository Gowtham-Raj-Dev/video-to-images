import type { Metadata } from "next";
import { getTool } from "@/lib/tools";
import { pageMetadata } from "@/lib/seo";
import { ToolPageLayout } from "@/components/ToolPageLayout";
import { VideoToMp3Workspace } from "@/components/VideoToMp3Workspace";

const tool = getTool("video-to-mp3")!;

export const metadata: Metadata = pageMetadata({
  title: `${tool.name} — Extract Audio from Video Free`,
  description: tool.metaDescription,
  path: `/${tool.slug}`,
});

export default function VideoToMp3Page() {
  return (
    <ToolPageLayout tool={tool}>
      <VideoToMp3Workspace />
    </ToolPageLayout>
  );
}
