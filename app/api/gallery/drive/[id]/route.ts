import { NextResponse } from "next/server";

import { fetchDriveImage } from "@/lib/google-drive";

export const revalidate = 86400;

const DRIVE_FILE_ID_PATTERN = /^[A-Za-z0-9_-]{10,128}$/;

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(_request: Request, context: RouteContext) {
  const { id } = await context.params;

  if (!DRIVE_FILE_ID_PATTERN.test(id)) {
    return NextResponse.json({ error: "Invalid image id" }, { status: 400 });
  }

  try {
    const response = await fetchDriveImage(id);

    if (!response) {
      return NextResponse.json({ error: "Drive gallery is not configured" }, { status: 404 });
    }

    const contentType = response.headers.get("content-type") ?? "image/jpeg";

    if (!contentType.startsWith("image/")) {
      return NextResponse.json({ error: "Unsupported media type" }, { status: 415 });
    }

    const arrayBuffer = await response.arrayBuffer();

    return new NextResponse(arrayBuffer, {
      headers: {
        "content-type": contentType,
        "cache-control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
      },
    });
  } catch (error) {
    console.error(`Failed to proxy Drive image ${id}`, error);
    return NextResponse.json({ error: "Unable to load image" }, { status: 502 });
  }
}
