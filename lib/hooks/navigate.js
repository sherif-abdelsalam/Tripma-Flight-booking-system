"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function useNavigateBackEsc() {
  const router = useRouter();

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        router.back();
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [router]);
}
