import { NextResponse } from "next/server";

import { getDriveGalleryImages } from "@/lib/google-drive";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const images = await getDriveGalleryImages();
    return NextResponse.json(
      { images },
      {
        headers: {
          "cache-control": "public, max-age=60, s-maxage=300, stale-while-revalidate=600",
        },
      },
    );
  } catch (error) {
    console.error("Failed to load Drive gallery images", error);
    return NextResponse.json(
      { images: [] },
      {
        status: 200,
        headers: {
          "cache-control": "public, max-age=60, s-maxage=300, stale-while-revalidate=600",
        },
      },
    );
  }
}
