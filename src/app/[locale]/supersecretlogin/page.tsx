"use client";
import { useRouter } from 'next/navigation'
import { Button, Container, Group, Input, Stack, Title } from '@mantine/core';
import ContentPaper from '@/components/common/contentpaper';
 
export default function LoginPage() {
  const router = useRouter()
 
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const email = String(formData.get('email') || '')
    const password = String(formData.get('password') || '')

    const response = await fetch('/api/auth/supersecretlogin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })

    if (response.ok) {
      router.push('/supersecretdashboard/projects')
      router.refresh()

    }
  }

 
  return (
    <Container size="xs" p="lg" h="80vh">
      <Group grow h="100%">
        <ContentPaper>
          <form onSubmit={handleSubmit}>
            <Stack>
              <Title>Login</Title>
              <Input type="email" name="email" placeholder="Email" required />
              <Input type="password" name="password" placeholder="Password" required />
              <Button type="submit">Login</Button>
            </Stack>
          </form>
        </ContentPaper>
      </Group>
    </Container>
  )
}
