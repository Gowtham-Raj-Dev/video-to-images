import { ToolPageLayout } from "@/components/ToolPageLayout";
import { VideoToMp3Workspace } from "@/components/VideoToMp3Workspace";
import { TOOLS } from "@/lib/tools";

const tool = TOOLS.find((t) => t.slug === "video-to-mp3")!;

export const metadata = {
  title: tool.name,
  description: tool.description,
};

export default function VideoToMp3Page() {
  return (
    <ToolPageLayout tool={tool}>
      <VideoToMp3Workspace />
    </ToolPageLayout>
  );
}
