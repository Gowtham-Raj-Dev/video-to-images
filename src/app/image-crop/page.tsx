import type { Metadata } from "next";
import { getTool } from "@/lib/tools";
import { ToolPageLayout } from "@/components/ToolPageLayout";
import { ImageCropWorkspace } from "@/components/ImageCropWorkspace";

const tool = getTool("image-crop")!;

export const metadata: Metadata = {
  title: `${tool.name} — Crop Images to Any Ratio Free`,
  description: tool.description,
  alternates: { canonical: "/image-crop" },
};

export default function Page() {
  return (
    <ToolPageLayout tool={tool}>
      <ImageCropWorkspace />
    </ToolPageLayout>
  );
}
