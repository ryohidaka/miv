"use client";

import { LoginContent } from "@/components/Auth/LoginContent";
import { hasCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const hasToken = hasCookie("token");
  const router = useRouter();

  useEffect(() => {
    if (hasToken) {
      router.push("/dashboard");
    }
  }, [hasToken, router]);

  return <LoginContent />;
}
