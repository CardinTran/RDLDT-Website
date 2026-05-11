export type DriveGalleryImage = {
  id: string;
  title: string;
  createdTime?: string;
  imageUrl: string;
};

type DriveFile = {
  id: string;
  name: string;
  mimeType: string;
  createdTime?: string;
};

const DRIVE_API_BASE = "https://www.googleapis.com/drive/v3/files";

function getDriveConfig() {
  const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;
  const apiKey = process.env.GOOGLE_DRIVE_API_KEY;

  if (!folderId || !apiKey) {
    return null;
  }

  return { folderId, apiKey };
}

function buildListUrl(folderId: string, apiKey: string) {
  const params = new URLSearchParams({
    key: apiKey,
    q: `'${folderId}' in parents and mimeType contains 'image/' and trashed = false`,
    fields: "files(id,name,mimeType,createdTime)",
    orderBy: "createdTime desc,name",
    pageSize: "100",
    supportsAllDrives: "true",
    includeItemsFromAllDrives: "true",
  });

  return `${DRIVE_API_BASE}?${params.toString()}`;
}

export async function getDriveGalleryImages(): Promise<DriveGalleryImage[]> {
  const config = getDriveConfig();

  if (!config) {
    return [];
  }

  const response = await fetch(buildListUrl(config.folderId, config.apiKey), {
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    throw new Error(`Drive list request failed with status ${response.status}`);
  }

  const data = (await response.json()) as { files?: DriveFile[] };

  return (data.files ?? []).map((file) => ({
    id: file.id,
    title: file.name.replace(/\.[a-z0-9]+$/i, ""),
    createdTime: file.createdTime,
    imageUrl: `/api/gallery/drive/${file.id}`,
  }));
}

export async function fetchDriveImage(fileId: string) {
  const config = getDriveConfig();

  if (!config) {
    return null;
  }

  const url = `${DRIVE_API_BASE}/${encodeURIComponent(fileId)}?alt=media&key=${config.apiKey}&supportsAllDrives=true`;
  const response = await fetch(url, {
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    throw new Error(`Drive image request failed with status ${response.status}`);
  }

  return response;
}
