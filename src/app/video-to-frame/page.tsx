import type { Metadata } from "next";
import { getTool } from "@/lib/tools";
import { ToolPageLayout } from "@/components/ToolPageLayout";
import { VideoToImages } from "@/components/VideoToImages";

const tool = getTool("video-to-frame")!;

export const metadata: Metadata = {
  title: `${tool.name} — Extract Frames from Video Free`,
  description: tool.description,
  alternates: { canonical: "/video-to-frame" },
};

export default function Page() {
  return (
    <ToolPageLayout tool={tool}>
      <VideoToImages />
    </ToolPageLayout>
  );
}
