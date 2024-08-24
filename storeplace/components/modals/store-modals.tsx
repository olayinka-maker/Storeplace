"use client";
import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "../modals";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  storename: z.string().min(2, {
    message: "Storename must be at least 2 characters.",
  }),
});

function onSubmit(values: z.infer<typeof formSchema>) {
  console.log(values);
}

export const StoreModals = () => {
  const storeModal = useStoreModal();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      storename: "",
    },
  });

  return (
    <Modal
      title="Create Store"
      description="Add a New Store"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="storename"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Storename</FormLabel>
                <FormControl>
                  <Input placeholder="E-commerce StoreName" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className=" flex   gap-4 justify-end">
            <Button
              className=" "
              variant={"outline"}
              onClick={storeModal.onClose}
            >
              Cancle
            </Button>
            <Button type="submit">Continue</Button>
          </div>
        </form>
      </Form>
    </Modal>
  );
};
