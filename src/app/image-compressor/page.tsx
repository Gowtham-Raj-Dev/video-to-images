import type { Metadata } from "next";
import { getTool } from "@/lib/tools";
import { ToolPageLayout } from "@/components/ToolPageLayout";
import ImageCompressor from "@/components/ImageCompressor";

const tool = getTool("image-compressor")!;

export const metadata: Metadata = {
  title: `${tool.name} — Compress JPG, PNG & WebP Free`,
  description: tool.description,
  alternates: { canonical: "/image-compressor" },
};

export default function Page() {
  return (
    <ToolPageLayout tool={tool}>
      <ImageCompressor />
    </ToolPageLayout>
  );
}
