"use client";

import { useState, useRef } from "react";
import { Button, Group, Text, useMantineTheme, Stack, ActionIcon, Image, SimpleGrid, Container, Paper } from "@mantine/core";
import { Dropzone, MIME_TYPES } from "@mantine/dropzone";
import { IconCloudUpload, IconDownload, IconX } from "@tabler/icons-react";
import { supabase } from "@/lib/supabase";
import classes from './dropzonebutton.module.css';
import { getFilePathFromUrl } from "@/app/hooks/getFilePathFromUrl";

interface Props {
  name: string;
  bucket: string;
  sessionId: string;
  multiple?: boolean;
  imageColumns?: number;
  defaultValue?: string | string[] | null;
}

export function DropzoneButton({
  name,
  bucket,
  sessionId,
  multiple = false,
  imageColumns = 3,
  defaultValue,
}: Props) {
  const theme = useMantineTheme();
  const openRef = useRef<() => void>(null);

  const [files, setFiles] = useState<string[]>(
    Array.isArray(defaultValue) ? defaultValue : defaultValue ? [defaultValue] : []
  );

  async function uploadFile(file: File) {
    const fileName = `${sessionId}/${crypto.randomUUID()}-${file.name}`;
    const { error } = await supabase.storage.from(bucket).upload(fileName, file);
    if (error) {
      console.error("Upload error:", error);
      return null;
    }
    const { data } = supabase.storage.from(bucket).getPublicUrl(fileName);
    return data?.publicUrl || null;
  }

  async function handleDrop(droppedFiles: File[]) {
    for (const file of droppedFiles) {
      const url = await uploadFile(file);
      if (!url) continue;
      setFiles((prev) => (multiple ? [...prev, url] : [url]));
    }
  }

  async function removeFile(index: number, url: string) {
    try {
      const path = getFilePathFromUrl(url, bucket);
      console.log("Deleting path:", path);

      if (path) {
        const { error } = await supabase.storage.from(bucket).remove([path]);
        if (error) console.error("Delete error:", error);
      }
    } catch (err) {
      console.error(err);
    }

    setFiles((prev) => prev.filter((_, i) => i !== index));
  }


  return (
    <Paper className={classes.wrapper} withBorder p="lg">
      <Stack>
        {
          files.length > 0 ?
          
          <Group justify="center">
            <SimpleGrid cols={files.length < imageColumns ? files.length : imageColumns} spacing="sm" mt="md">
              {files.map((url, index) => (
                <div key={index} style={{ position: "relative" }}>
                  <Image src={url} alt="Uploaded" width="100%" radius="md" />
                  <ActionIcon
                    size="sm"
                    radius="xl"
                    style={{ position: "absolute", top: 4, right: 4 }}
                    onClick={() => removeFile(index, url)}
                  >
                    <IconX size={14} />
                  </ActionIcon>
                </div>
              ))}
            </SimpleGrid> 
          </Group>
            :
          <Dropzone
            openRef={openRef}
            onDrop={handleDrop}
            className={classes.dropzone}
            radius="md"
            accept={[MIME_TYPES.pdf, MIME_TYPES.png, MIME_TYPES.jpeg, MIME_TYPES.gif]}
            maxSize={30 * 1024 ** 2}
            multiple={multiple}
          >
            <div style={{ pointerEvents: "none", width: "100%" }}>
              <Group justify="center">
                <Dropzone.Accept>
                  <IconDownload size={50} color={theme.colors.blue[6]} stroke={1.5} />
                </Dropzone.Accept>
                <Dropzone.Reject>
                  <IconX size={50} color={theme.colors.red[6]} stroke={1.5} />
                </Dropzone.Reject>
                <Dropzone.Idle>
                  <IconCloudUpload size={50} stroke={1.5} className={classes.icon} />
                </Dropzone.Idle>
              </Group>

              <Text ta="center" fw={700} fz="lg" mt="xl">
                <Dropzone.Accept>Drop files here</Dropzone.Accept>
                <Dropzone.Reject>Invalid file</Dropzone.Reject>
                <Dropzone.Idle>Upload files</Dropzone.Idle>
              </Text>

              <Text className={classes.description} mt="sm">
                Drag & drop files here to upload. PDF, PNG, JPEG supported.
              </Text>
            </div>
          </Dropzone>
        }

        <Group justify="center">
          <Button className={classes.control} size="md" radius="xl" onClick={() => openRef.current?.()}>
            Select files
          </Button>
        </Group>
        
        <input type="hidden" name={name} value={files.join(",")} />
      </Stack>
    </Paper>
  );
}
