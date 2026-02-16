export function getFilePathFromUrl(url: string, bucket: string) {
  try {
    const parsed = new URL(url);

    const decodedPath = decodeURIComponent(parsed.pathname);

    const parts = decodedPath.split("/");
    const bucketIndex = parts.findIndex((p) => p === bucket);
    if (bucketIndex === -1) return null;

    return parts.slice(bucketIndex + 1).join("/");
  } catch {
    return null;
  }
}