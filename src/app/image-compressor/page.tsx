import type { Metadata } from "next";
import { getTool } from "@/lib/tools";
import { pageMetadata } from "@/lib/seo";
import { ToolPageLayout } from "@/components/ToolPageLayout";
import ImageCompressor from "@/components/ImageCompressor";

const tool = getTool("image-compressor")!;

export const metadata: Metadata = pageMetadata({
  title: `${tool.name} — Compress JPG, PNG & WebP Free`,
  description: tool.metaDescription,
  path: `/${tool.slug}`,
});

export default function Page() {
  return (
    <ToolPageLayout tool={tool}>
      <ImageCompressor />
    </ToolPageLayout>
  );
}
