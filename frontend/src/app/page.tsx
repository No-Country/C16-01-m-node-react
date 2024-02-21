"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    session?.user ? router.push("/dashboard") : router.push("/auth");
  }, [session, router]);
  return null;
}
