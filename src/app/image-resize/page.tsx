import type { Metadata } from "next";
import { getTool } from "@/lib/tools";
import { pageMetadata } from "@/lib/seo";
import { ToolPageLayout } from "@/components/ToolPageLayout";
import { ImageResizeWorkspace } from "@/components/ImageResizeWorkspace";

const tool = getTool("image-resize")!;

export const metadata: Metadata = pageMetadata({
  title: `${tool.name} — Resize Images to Exact Pixels Free`,
  description: tool.metaDescription,
  path: `/${tool.slug}`,
});

export default function Page() {
  return (
    <ToolPageLayout tool={tool}>
      <ImageResizeWorkspace />
    </ToolPageLayout>
  );
}
