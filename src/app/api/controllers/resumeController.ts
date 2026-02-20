import { getFilePathFromUrl } from "@/app/hooks/getFilePathFromUrl";
import { createClient } from "@/lib/supabase/server";

const bucket = "Resume";

export async function replaceSupabasePdf(
  publicUrl: string,
  file: File
) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("Unauthorized");

  const path = getFilePathFromUrl(publicUrl, bucket);
  if (!path) throw new Error("Invalid file path");

  const { error } = await supabase.storage
    .from(bucket)
    .upload(path, file, {
      upsert: true, 
      contentType: "application/pdf",
    });

  if (error) {
    console.error("Replace failed:", error);
    throw error;
  }

  return publicUrl;
}
