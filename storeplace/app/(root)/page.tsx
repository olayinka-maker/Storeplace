"use client";
import { Modal } from "@/components/modals";
import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

export default function SetUpPage() {
  const isOpen = useStoreModal((state) => state.isOpen);
  const onOpen = useStoreModal((state) => state.onOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return <main>Root page</main>;
}
