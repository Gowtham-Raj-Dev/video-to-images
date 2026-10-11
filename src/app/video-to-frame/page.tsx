import type { Metadata } from "next";
import { getTool } from "@/lib/tools";
import { pageMetadata } from "@/lib/seo";
import { ToolPageLayout } from "@/components/ToolPageLayout";
import { VideoToImages } from "@/components/VideoToImages";

const tool = getTool("video-to-frame")!;

export const metadata: Metadata = pageMetadata({
  title: `${tool.name} — Extract Frames from Video Free`,
  description: tool.metaDescription,
  path: `/${tool.slug}`,
});

export default function Page() {
  return (
    <ToolPageLayout tool={tool}>
      <VideoToImages />
    </ToolPageLayout>
  );
}
