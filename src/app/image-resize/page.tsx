import type { Metadata } from "next";
import { getTool } from "@/lib/tools";
import { ToolPageLayout } from "@/components/ToolPageLayout";
import { ImageResizeWorkspace } from "@/components/ImageResizeWorkspace";

const tool = getTool("image-resize")!;

export const metadata: Metadata = {
  title: `${tool.name} — Resize Images to Exact Pixels Free`,
  description: tool.description,
  alternates: { canonical: "/image-resize" },
};

export default function Page() {
  return (
    <ToolPageLayout tool={tool}>
      <ImageResizeWorkspace />
    </ToolPageLayout>
  );
}
