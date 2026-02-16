"use client";

import { useRouter } from "next/navigation";
import { Button } from "@mantine/core";

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/supersecretlogin");
    router.refresh(); 
  }

  return <Button variant="white" onClick={handleLogout}>Logout</Button>;
}
