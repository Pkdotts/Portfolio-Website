"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export function useSupabaseUpload(bucket: string) {
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function uploadFile(file: File) {
    setLoading(true);
    setError(null);

    const fileName = `${Date.now()}-${file.name}`;

    const { error } = await supabase.storage
      .from(bucket)
      .upload(fileName, file);

    if (error) {
      setError(error.message);
      setLoading(false);
      return null;
    }

    const { data } = supabase.storage
      .from(bucket)
      .getPublicUrl(fileName);

    setUploadedUrl(data.publicUrl);
    setLoading(false);

    return data.publicUrl;
  }

  return { uploadedUrl, uploadFile, loading, error };
}
