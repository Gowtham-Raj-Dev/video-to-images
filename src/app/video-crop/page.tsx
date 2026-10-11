import type { Metadata } from "next";
import { getTool } from "@/lib/tools";
import { pageMetadata } from "@/lib/seo";
import { ToolPageLayout } from "@/components/ToolPageLayout";
import { VideoCropWorkspace } from "@/components/VideoCropWorkspace";

const tool = getTool("video-crop")!;

export const metadata: Metadata = pageMetadata({
  title: `${tool.name} — Crop Video to 1:1, 9:16, 16:9 Free`,
  description: tool.metaDescription,
  path: `/${tool.slug}`,
});

export default function Page() {
  return (
    <ToolPageLayout tool={tool}>
      <VideoCropWorkspace />
    </ToolPageLayout>
  );
}
