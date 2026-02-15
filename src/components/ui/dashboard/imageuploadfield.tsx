"use client";

import { useState } from "react";
import { Image, Group, Stack } from "@mantine/core";
import { useSupabaseUpload } from "@/app/hooks/useFileUpload";

interface Props {
  name: string;
  bucket: string;
  multiple?: boolean;
  defaultValue?: string | string[] | null;
}

export default function ImageUploadField({
  name,
  bucket,
  multiple = false,
  defaultValue,
}: Props) {
  const [images, setImages] = useState<string[]>(
    Array.isArray(defaultValue)
      ? defaultValue
      : defaultValue
      ? [defaultValue]
      : []
  );

  const { uploadFile, loading } = useSupabaseUpload(bucket);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files) return;

    for (const file of Array.from(files)) {
      const url = await uploadFile(file);
      if (!url) continue;

      setImages((prev) =>
        multiple ? [...prev, url] : [url]
      );
    }
  }

  return (
    <Stack>
      <input
        type="file"
        accept="image/*"
        multiple={multiple}
        onChange={handleUpload}
      />

      <Group>
        {images.map((url, index) => (
          <Image key={index} src={url} alt="Uploaded" w={120} radius="md" />
        ))}
      </Group>

      {multiple ? (
        <input type="hidden" name={name} value={images.join(",")} />
      ) : (
        <input type="hidden" name={name} value={images[0] ?? ""} />
      )}
    </Stack>
  );
}
