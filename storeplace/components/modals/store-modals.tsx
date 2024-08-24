import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "../modals";

export const StoreModals = () => {
  const storeModal = useStoreModal();

  return (
    <Modal
      title="Create Store"
      description="Add a New Store"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      {" "}
      Future Create Store Forms
    </Modal>
  );
};
