// components/FileUpload.tsx
import { createClient } from '@/lib/supabase/client'
import { Button, FileButton, Group, Paper, Text, Title } from '@mantine/core';
import { IconExternalLink, IconUpload } from '@tabler/icons-react';
import { useState, useRef } from 'react'

const supabase = createClient();

interface FileUploadProps {
  onUploadComplete?: (url: string) => void
  allowedTypes?: string[]
  fileName?: string
  maxSize?: number // in MB
  bucket?: string
  publicUrl?: string
}

export default function FileUpload({
  onUploadComplete,
  allowedTypes = ['image/jpeg', 'image/png', 'image/webp'],
  fileName,
  maxSize = 5,
  bucket = 'uploads',
  publicUrl,
}: FileUploadProps) {
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<File | null>(null)
  
  const handleFileSelect = async (payload: File | null)  => {
    const {
        data: { user },
      } = await supabase.auth.getUser();
    
    if (!user) throw new Error("Unauthorized");
    
    const file = payload
    if (!file) return

    

    setError(null)

    // Validation
    if (!allowedTypes.includes(file.type)) {
      setError(`File type not allowed. Allowed: ${allowedTypes.join(', ')}`)
      return
    }

    if (file.size > maxSize * 1024 * 1024) {
      setError(`File too large. Maximum: ${maxSize}MB`)
      return
    }

    await uploadFile(file)
  }

  const uploadFile = async (file: File) => {
    const {
        data: { user },
      } = await supabase.auth.getUser();
    
    if (!user) throw new Error("Unauthorized");
    setUploading(true)
    setUploadProgress(0)

    try {
      // Generate unique filename
      const fileExt = file.name.split('.').pop()
      const fn = fileName ? fileName : `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`
      const filePath = `${fn}`

      // Upload with progress tracking
      const { data, error } = await supabase.storage
        .from(bucket)
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: true
        })

      if (error) {
        throw error
      }

      // Generate public URL
    //   const { data: { publicUrl } } = supabase.storage
    //     .from(bucket)
    //     .getPublicUrl(filePath)

    //   onUploadComplete(publicUrl)
      
      // Reset input
    //   if (fileInputRef.current) {
    //     fileInputRef.current.value = ''
    //   }

    } catch (error: any) {
      console.error('Upload error:', error)
      setError(error.message || 'Upload failed')
    } finally {
      setUploading(false)
      setUploadProgress(0)
    }
  }

  return (
    <div className="space-y-4">
      <Paper m="md" p="md" bdrs="lg" withBorder>
        <Title order={2}>{fileName}</Title>
            <p >
              {allowedTypes.join(', ')} (max. {maxSize}MB)
            </p>
            <Group grow>
        
                <FileButton
                    // ref={fileInputRef}
                    onChange={handleFileSelect}
                    accept={allowedTypes.join(',')}
                    disabled={uploading}
                >
                    {(props) => <Button leftSection={<IconUpload/>} size="lg" radius="xl" loading={uploading} loaderProps={{ type: 'dots' }} {...props}>Upload</Button>}
                </FileButton>
                <Button leftSection={<IconExternalLink/>} component="a" target="_blank" href={publicUrl} download="Andy Bao Le CV" variant="outline" size="lg" radius="xl" >Open</Button>
            </Group>
            {error && (
                <Text>
                    {error}
                </Text>
            )}

      </Paper>
    </div>
  )
}