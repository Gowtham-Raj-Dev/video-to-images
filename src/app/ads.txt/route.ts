import { ADSENSE_CLIENT } from "@/lib/adsense";

export const dynamic = "force-static";

export function GET() {
  // ads.txt wants the bare publisher ID ("pub-…"), without the "ca-" prefix.
  const body = ADSENSE_CLIENT
    ? `google.com, ${ADSENSE_CLIENT.replace(/^ca-/, "")}, DIRECT, f08c47fec0942fa0\n`
    : "# Google AdSense publisher ID is not configured yet (see src/lib/adsense.ts).\n";

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
