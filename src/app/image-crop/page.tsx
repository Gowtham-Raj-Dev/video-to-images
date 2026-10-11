import type { Metadata } from "next";
import { getTool } from "@/lib/tools";
import { pageMetadata } from "@/lib/seo";
import { ToolPageLayout } from "@/components/ToolPageLayout";
import { ImageCropWorkspace } from "@/components/ImageCropWorkspace";

const tool = getTool("image-crop")!;

export const metadata: Metadata = pageMetadata({
  title: `${tool.name} — Crop Images to Any Ratio Free`,
  description: tool.metaDescription,
  path: `/${tool.slug}`,
});

export default function Page() {
  return (
    <ToolPageLayout tool={tool}>
      <ImageCropWorkspace />
    </ToolPageLayout>
  );
}
