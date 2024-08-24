"use client";

import { Modal } from "@/components/modals";
import { StoreModals } from "@/components/modals/store-modals";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <StoreModals />;
};
