import {
  Film,
  FileArchive,
  Crop,
  Maximize,
  Minimize,
  Image as ImageIcon,
  Video,
  Zap,
  Shield,
  Download,
  Gauge,
  Layers,
  Sparkles,
  MonitorSmartphone,
  Scissors,
  Music,
  type LucideIcon,
} from "lucide-react";

export type ToolCategory = "Video" | "Image";

export interface ToolFeature {
  title: string;
  desc: string;
  icon: LucideIcon;
}

export interface ToolFaq {
  q: string;
  a: string;
}

export interface Tool {
  slug: string;
  name: string;
  category: ToolCategory;
  icon: LucideIcon;
  color: string;
  popular?: boolean;
  /** short one-liner for cards & menus */
  short: string;
  /** hero sub-headline */
  tagline: string;
  /** long paragraph for hero + SEO */
  description: string;
  accept: string;
  inputFormats: string[];
  outputFormats: string[];
  features: ToolFeature[];
  steps: { title: string; desc: string }[];
  benefits: string[];
  faqs: ToolFaq[];
  related: string[];
}

export const TOOLS: Tool[] = [
  {
    slug: "video-to-frame",
    name: "Video to Frame",
    category: "Video",
    icon: Film,
    color: "bg-gradient-to-br from-indigo-500 to-purple-600",
    popular: true,
    short: "Extract high-quality frames from any video, natively.",
    tagline: "Turn any video into a sequence of crisp, high-quality images.",
    description:
      "Convert MP4, WebM and MOV videos into sequential image frames at exactly 10, 30 or 60 FPS. Every frame is rendered natively on the HTML5 canvas at your source resolution, then packaged into a tidy ZIP — no servers, no waiting, no watermarks.",
    accept: "video/*",
    inputFormats: ["MP4", "WebM", "MOV", "OGG"],
    outputFormats: ["JPG", "PNG", "WEBP", "ZIP"],
    features: [
      { title: "Native extraction", desc: "Frames are drawn directly on the canvas at your chosen FPS — no heavy uploads to any server.", icon: Zap },
      { title: "100% private", desc: "Your video never leaves your device. The entire process runs inside your local browser.", icon: Shield },
      { title: "Source-quality images", desc: "We keep the exact dimensions and quality of your original video for every extracted frame.", icon: ImageIcon },
      { title: "Organized ZIP output", desc: "Frames are sequentially numbered and packaged so you can download the whole set in one click.", icon: Download },
    ],
    steps: [
      { title: "Select a video", desc: "Drop in an MP4, WebM or MOV file — it stays on your device." },
      { title: "Pick FPS & format", desc: "Choose 10, 30 or 60 frames per second and JPG, PNG or WebP output." },
      { title: "Download the ZIP", desc: "Extract natively and grab every numbered frame in a single archive." },
    ],
    benefits: [
      "Native HTML5 canvas processing means blazing-fast extraction.",
      "Zero upload wait times and zero download bottlenecks.",
      "Custom FPS selector grabs 10, 30 or 60 frames per second.",
      "Sequential file naming keeps your exports perfectly structured.",
    ],
    faqs: [
      { q: "What video formats are supported?", a: "Any format your browser can play natively — MP4 and WebM work everywhere, and MOV/OGG work in most modern browsers." },
      { q: "Will the image quality drop?", a: "No. Frames are captured at your video's native resolution. JPG uses 90% quality; choose PNG for lossless output." },
      { q: "Is there a limit on video length?", a: "There's no hard limit. Because everything runs locally, it depends on your device's memory — most machines handle multi-minute clips easily." },
      { q: "Do you upload my video?", a: "Never. All extraction happens on your device using the canvas API. Nothing is sent anywhere." },
    ],
    related: ["video-crop", "video-compressor", "image-compressor"],
  },
  {
    slug: "video-compressor",
    name: "Video Compressor",
    category: "Video",
    icon: Minimize,
    color: "bg-gradient-to-br from-teal-400 to-emerald-500",
    popular: true,
    short: "Shrink video file size without losing visible quality.",
    tagline: "Make videos smaller and web-ready without the quality hit.",
    description:
      "Compress MP4 and WebM videos right in your browser using a WebAssembly build of FFmpeg (H.264 / x264). Dial in the exact quality-to-size balance with a CRF slider and export a lean, share-ready file — all processed locally on your machine.",
    accept: "video/*",
    inputFormats: ["MP4", "WebM", "MOV"],
    outputFormats: ["MP4 (H.264)"],
    features: [
      { title: "Adjustable CRF", desc: "A single slider trades quality for size, from near-lossless to ultra-compact.", icon: Gauge },
      { title: "WebAssembly FFmpeg", desc: "Industry-standard x264 compression runs entirely inside your browser.", icon: Zap },
      { title: "No server uploads", desc: "Your footage is processed locally — nothing is ever uploaded or stored.", icon: Shield },
      { title: "Instant preview", desc: "Play the compressed result back before you download it.", icon: MonitorSmartphone },
    ],
    steps: [
      { title: "Upload a video", desc: "Drop in an MP4, WebM or MOV file up to ~100MB for smooth browser processing." },
      { title: "Set compression level", desc: "Slide between high quality and small size — CRF 28 is a great default." },
      { title: "Download the result", desc: "Preview the output, then save your lighter MP4 in a click." },
    ],
    benefits: [
      "H.264 / x264 encoding produces broadly compatible MP4 files.",
      "The CRF slider gives you precise control over quality vs. size.",
      "The FFmpeg engine downloads once, then compresses fully offline.",
      "Great for email attachments, messaging apps and faster uploads.",
    ],
    faqs: [
      { q: "How much smaller will my video get?", a: "It depends on the source and the CRF you pick. A typical phone clip can shrink 40–70% at the balanced setting with no obvious quality loss." },
      { q: "Why does it load an engine the first time?", a: "The tool downloads the FFmpeg WebAssembly core (~30MB) once. After that, compression runs locally with nothing to upload." },
      { q: "What's the recommended file size?", a: "For a smooth in-browser experience we suggest videos under ~100MB. Larger files work but use more memory and time." },
      { q: "Is the output compatible everywhere?", a: "Yes — output is standard H.264 MP4, which plays on virtually every device, player and platform." },
    ],
    related: ["video-resize", "video-crop", "video-to-mp3"],
  },
  {
    slug: "video-to-mp3",
    name: "Video to MP3",
    category: "Video",
    icon: Music,
    color: "bg-gradient-to-br from-fuchsia-500 to-pink-500",
    popular: true,
    short: "Extract audio from any video and save as MP3.",
    tagline: "Strip the audio from your video files instantly.",
    description:
      "Convert MP4, WebM, and MOV videos into high-quality MP3 audio files right in your browser. Using WebAssembly-powered FFmpeg, the audio track is extracted locally without uploading your large video files to any server.",
    accept: "video/*",
    inputFormats: ["MP4", "WebM", "MOV"],
    outputFormats: ["MP3"],
    features: [
      { title: "Audio Extraction", desc: "Isolate the audio track from video files cleanly.", icon: Music },
      { title: "WebAssembly FFmpeg", desc: "Industry-standard conversion runs inside your browser.", icon: Zap },
      { title: "No server uploads", desc: "Your files are processed locally — nothing is uploaded.", icon: Shield },
      { title: "High Quality", desc: "Maintains the original audio bitrate where possible.", icon: Download },
    ],
    steps: [
      { title: "Upload a video", desc: "Drop in an MP4, WebM or MOV file." },
      { title: "Extract Audio", desc: "FFmpeg strips the video and converts the audio track to MP3." },
      { title: "Download", desc: "Save your lightweight MP3 audio file instantly." },
    ],
    benefits: [
      "No waiting for massive videos to upload.",
      "Extract music, podcasts, or speech perfectly.",
      "Private by design — files never leave your device.",
      "Produces widely compatible MP3 format.",
    ],
    faqs: [
      { q: "What formats can I upload?", a: "Any common video format like MP4, WebM, and MOV is supported." },
      { q: "Will I lose audio quality?", a: "The tool extracts and transcodes audio to a high-quality MP3 (usually ~192kbps), preserving most of the original fidelity." },
      { q: "Are my videos uploaded?", a: "No. Everything runs via WebAssembly in your browser. Your videos remain strictly on your device." },
    ],
    related: ["video-compressor", "video-crop", "video-to-frame"],
  },
  {
    slug: "video-crop",
    name: "Video Crop",
    category: "Video",
    icon: Crop,
    color: "bg-gradient-to-br from-blue-400 to-cyan-500",
    short: "Crop and reframe videos to any social aspect ratio.",
    tagline: "Reframe your footage for Reels, Shorts, feeds and YouTube.",
    description:
      "Crop any video to a perfect 1:1 square, 9:16 portrait or 16:9 landscape with a precise center crop, powered by FFmpeg in WebAssembly. Ideal for turning one clip into every social format — processed privately on your device.",
    accept: "video/*",
    inputFormats: ["MP4", "WebM", "MOV"],
    outputFormats: ["MP4 (H.264)"],
    features: [
      { title: "Social-ready ratios", desc: "One-tap presets for 1:1, 9:16 and 16:9 cover every major platform.", icon: Scissors },
      { title: "Smart center crop", desc: "Automatically crops from the center to keep your subject in frame.", icon: Crop },
      { title: "Local FFmpeg engine", desc: "All cropping and re-encoding happens in your browser via WebAssembly.", icon: Zap },
      { title: "Private by design", desc: "Nothing is uploaded — your footage stays entirely on your machine.", icon: Shield },
    ],
    steps: [
      { title: "Upload a video", desc: "Drop in your clip — a live crop overlay shows the target frame." },
      { title: "Choose an aspect ratio", desc: "Pick square, portrait or landscape for the platform you're targeting." },
      { title: "Crop & download", desc: "Re-encode locally and save your reframed MP4 instantly." },
    ],
    benefits: [
      "Turn a single landscape video into vertical Reels and Shorts.",
      "Center-crop logic keeps the important action in view.",
      "Re-encoded with x264 for clean, compatible MP4 output.",
      "No accounts, no watermarks and no server round-trips.",
    ],
    faqs: [
      { q: "Which aspect ratios can I crop to?", a: "Square (1:1) for feeds, portrait (9:16) for Reels/Shorts/TikTok, and landscape (16:9) for YouTube." },
      { q: "Can I choose exactly where it crops?", a: "The current version applies a smart center crop, which keeps centered subjects perfectly framed for most clips." },
      { q: "Does cropping reduce quality?", a: "Re-encoding uses a high-quality CRF of 23, so the result stays visually sharp while remaining compatible." },
      { q: "Are my files uploaded?", a: "No. FFmpeg runs in your browser via WebAssembly — your video never leaves your device." },
    ],
    related: ["video-resize", "video-compressor", "image-crop"],
  },
  {
    slug: "video-resize",
    name: "Video Resize",
    category: "Video",
    icon: Maximize,
    color: "bg-gradient-to-br from-blue-500 to-indigo-600",
    popular: true,
    short: "Change video resolution to 1080p, 720p, 480p or 360p.",
    tagline: "Scale videos to the exact resolution you need.",
    description:
      "Resize any video to 1080p, 720p, 480p or 360p while preserving the original aspect ratio, using FFmpeg compiled to WebAssembly. Perfect for hitting upload limits or saving bandwidth — all done locally, with no uploads.",
    accept: "video/*",
    inputFormats: ["MP4", "WebM", "MOV"],
    outputFormats: ["MP4 (H.264)"],
    features: [
      { title: "Preset resolutions", desc: "Jump to 1080p, 720p, 480p or 360p with a single click.", icon: Maximize },
      { title: "Ratio preserved", desc: "Width scales automatically to prevent any stretching or distortion.", icon: Layers },
      { title: "In-browser FFmpeg", desc: "Scaling and re-encoding run locally via WebAssembly — no servers.", icon: Zap },
      { title: "Fully private", desc: "Your video is processed on your device and never uploaded.", icon: Shield },
    ],
    steps: [
      { title: "Upload a video", desc: "Drop in an MP4, WebM or MOV file to get started." },
      { title: "Pick a target height", desc: "Select 1080p, 720p, 480p or 360p — the width adjusts automatically." },
      { title: "Resize & download", desc: "Re-encode locally and download your scaled MP4." },
    ],
    benefits: [
      "Hit strict upload size limits by dropping to a lower resolution.",
      "Aspect ratio is locked so your video never looks stretched.",
      "Even-width scaling avoids common x264 encoding errors.",
      "Ideal for saving storage and speeding up sharing.",
    ],
    faqs: [
      { q: "Does resizing keep the aspect ratio?", a: "Yes. You choose the target height and the width is calculated automatically to keep the original proportions." },
      { q: "Which resolutions are available?", a: "1080p (Full HD), 720p (HD), 480p (SD) and 360p — covering everything from quality archives to tiny shareables." },
      { q: "Can I upscale a video?", a: "The presets are aimed at downscaling, which is where quality is preserved. Upscaling can't add detail that isn't in the source." },
      { q: "Where does processing happen?", a: "Entirely in your browser through the FFmpeg WebAssembly engine — nothing is sent to a server." },
    ],
    related: ["video-compressor", "video-crop", "image-resize"],
  },
  {
    slug: "image-compressor",
    name: "Image Compressor",
    category: "Image",
    icon: FileArchive,
    color: "bg-gradient-to-br from-orange-400 to-red-500",
    short: "Compress JPG, PNG and WebP images intelligently.",
    tagline: "Cut image file sizes down while keeping them sharp.",
    description:
      "Reduce the size of JPG, PNG and WebP images directly in your browser with adjustable quality. Great for faster-loading websites, lighter email attachments and staying under upload limits — processed 100% locally, with nothing uploaded.",
    accept: "image/*",
    inputFormats: ["JPG", "PNG", "WEBP"],
    outputFormats: ["JPG"],
    features: [
      { title: "Quality presets", desc: "Choose high, medium or low to balance clarity against file size.", icon: Gauge },
      { title: "Instant results", desc: "Compression runs on the canvas in milliseconds — no waiting.", icon: Zap },
      { title: "Private processing", desc: "Images are compressed on your device and never uploaded.", icon: Shield },
      { title: "Big size savings", desc: "Typically shrink photos by 50–80% with barely visible difference.", icon: FileArchive },
    ],
    steps: [
      { title: "Select an image", desc: "Drop in a JPG, PNG or WebP file from your device." },
      { title: "Choose quality", desc: "Pick 90%, 70% or 50% depending on how small you need it." },
      { title: "Download", desc: "Save your optimized image instantly in one click." },
    ],
    benefits: [
      "Speed up website load times with lighter images.",
      "Stay under attachment and upload size limits with ease.",
      "Adjustable quality lets you fine-tune the size trade-off.",
      "No accounts, no watermarks and no uploads — ever.",
    ],
    faqs: [
      { q: "What formats can I compress?", a: "JPG, PNG and WebP images are all supported as input; the optimized file is exported as a compact JPG." },
      { q: "How much smaller will the file be?", a: "At the medium (70%) preset, most photos shrink by 50–80% with very little visible quality loss." },
      { q: "Will it change the dimensions?", a: "No. Compression keeps your original width and height — only the file size changes. Use Image Resize to change dimensions." },
      { q: "Are my images uploaded?", a: "No. Everything is compressed locally on the canvas, so your images never leave your browser." },
    ],
    related: ["image-resize", "image-crop", "video-compressor"],
  },
  {
    slug: "image-crop",
    name: "Image Crop",
    category: "Image",
    icon: Crop,
    color: "bg-gradient-to-br from-pink-400 to-rose-500",
    short: "Crop images to precise aspect ratios in seconds.",
    tagline: "Cut images to the exact shape you need.",
    description:
      "Crop images to a 1:1 square, 16:9 landscape, 4:3 standard or a custom inset, with a live preview overlay. A fast, private, canvas-based cropper for profile pictures, thumbnails and social posts — no uploads required.",
    accept: "image/*",
    inputFormats: ["JPG", "PNG", "WEBP"],
    outputFormats: ["JPG", "PNG", "WEBP"],
    features: [
      { title: "Preset ratios", desc: "1:1, 16:9 and 4:3 presets plus a custom inset for any need.", icon: Crop },
      { title: "Live crop overlay", desc: "See exactly what will be kept before you apply the crop.", icon: ImageIcon },
      { title: "Canvas-fast", desc: "Cropping happens instantly on the HTML5 canvas — no waiting.", icon: Zap },
      { title: "Private & local", desc: "Your image is cropped on your device and never uploaded.", icon: Shield },
    ],
    steps: [
      { title: "Upload an image", desc: "Drop in a JPG, PNG or WebP file to start." },
      { title: "Choose a ratio", desc: "Pick square, landscape, standard or a custom inset crop." },
      { title: "Crop & download", desc: "Apply the center crop and save your image in a click." },
    ],
    benefits: [
      "Perfect square crops for avatars and profile pictures.",
      "Landscape and standard ratios for thumbnails and banners.",
      "The overlay shows the kept area before you commit.",
      "Output preserves your source format and quality.",
    ],
    faqs: [
      { q: "Which aspect ratios are available?", a: "Square (1:1), landscape (16:9), standard (4:3) and a custom 20% inset crop." },
      { q: "Does it crop from the center?", a: "Yes. The current version applies a precise center crop based on your chosen ratio, which suits most images." },
      { q: "What format is the output?", a: "The cropped image is saved in your source format (JPG, PNG or WebP) at high quality." },
      { q: "Is my image uploaded anywhere?", a: "No. Cropping runs entirely on the canvas in your browser — nothing is uploaded." },
    ],
    related: ["image-resize", "image-compressor", "video-crop"],
  },
  {
    slug: "image-resize",
    name: "Image Resize",
    category: "Image",
    icon: Minimize,
    color: "bg-gradient-to-br from-emerald-400 to-green-500",
    short: "Resize images to exact pixel dimensions cleanly.",
    tagline: "Scale images to any width and height, precisely.",
    description:
      "Resize images to exact pixel dimensions with an optional aspect-ratio lock. Enter a width or height and get a clean, sharp result on the canvas — ideal for thumbnails, uploads and design assets, all processed privately in your browser.",
    accept: "image/*",
    inputFormats: ["JPG", "PNG", "WEBP"],
    outputFormats: ["JPG", "PNG", "WEBP"],
    features: [
      { title: "Exact dimensions", desc: "Type any width and height in pixels for pixel-perfect output.", icon: Maximize },
      { title: "Aspect-ratio lock", desc: "Keep proportions automatically, or unlock for a free resize.", icon: Layers },
      { title: "Canvas-fast", desc: "Resizing renders instantly with smooth, clean scaling.", icon: Zap },
      { title: "Private & local", desc: "Images are resized on your device — nothing is uploaded.", icon: Shield },
    ],
    steps: [
      { title: "Upload an image", desc: "Drop in a JPG, PNG or WebP file to load its dimensions." },
      { title: "Set width & height", desc: "Enter pixels with the ratio lock on to keep proportions." },
      { title: "Resize & download", desc: "Apply and save your resized image instantly." },
    ],
    benefits: [
      "Hit exact dimensions for uploads, thumbnails and assets.",
      "The aspect-ratio lock prevents accidental stretching.",
      "Original dimensions load automatically for quick tweaks.",
      "Output keeps your source format and stays crisp.",
    ],
    faqs: [
      { q: "Can I keep the aspect ratio?", a: "Yes. With the ratio lock enabled, changing width updates height automatically (and vice-versa) to avoid distortion." },
      { q: "Can I resize to any size?", a: "Absolutely — enter any pixel width and height. Turn off the ratio lock for full freedom over both values." },
      { q: "What format will I get back?", a: "The resized image is saved in your source format (JPG, PNG or WebP) at high quality." },
      { q: "Does resizing upload my image?", a: "No. All resizing happens on the canvas in your browser, so your image never leaves your device." },
    ],
    related: ["image-crop", "image-compressor", "video-resize"],
  },
];

export function getTool(slug: string): Tool | undefined {
  return TOOLS.find((t) => t.slug === slug);
}

export function getRelated(slug: string): Tool[] {
  const tool = getTool(slug);
  if (!tool) return [];
  return tool.related
    .map((s) => getTool(s))
    .filter((t): t is Tool => Boolean(t));
}

export const VIDEO_TOOLS = TOOLS.filter((t) => t.category === "Video");
export const IMAGE_TOOLS = TOOLS.filter((t) => t.category === "Image");
