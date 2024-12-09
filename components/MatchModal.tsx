"use client";

import { z } from "zod";
import {
  Credenza,
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
} from "@/components/ui/credenza";
import { useState } from "react";
import { CheckIcon, ImageIcon, SendIcon } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const messageSchema = z.object({
  message: z
    .string()
    .min(1, { message: "Message is required" })
    .max(500, { message: "Message should be 500 characters at max" }),
});

const MatchModal = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const form = useForm<z.infer<typeof messageSchema>>({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof messageSchema>) => {
    console.log(data);
  };

  return (
    <>
      <CheckIcon
        className="size-16 text-green-600 border-2 border-gray-300 rounded-full p-2"
        strokeWidth={4}
        onClick={handleOpen}
      />
      <Credenza open={open} onOpenChange={setOpen}>
        <CredenzaContent className="w-full pb-12">
          <VisuallyHidden>
            <CredenzaHeader>
              <CredenzaTitle>Match</CredenzaTitle>
              <CredenzaDescription>You Match</CredenzaDescription>
            </CredenzaHeader>
          </VisuallyHidden>
          <CredenzaBody>
            <div className="flex flex-1 flex-col items-center justify-center w-full h-96 relative bg-gray-200 mt-3">
              <ImageIcon className="size-48 text-black p-2" strokeWidth={1} />
              <div className="absolute bottom-0 left-0 w-full p-4 flex items-center justify-center">
                <p className="text-black uppercase font-black text-4xl">
                  YOU MATCH!
                </p>
              </div>
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex gap-2"
              >
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="flex flex-col mt-8 w-full">
                      <FormLabel className="font-semibold">
                        Send a message
                      </FormLabel>
                      <FormControl>
                        <div className="flex gap-2">
                          <Textarea
                            {...field}
                            className="w-10/12 resize-none"
                            placeholder="Write a message..."
                          />
                          <Button type="submit" className="w-2/12 h-full">
                            <SendIcon className="size-4" />
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </CredenzaBody>
          <CredenzaFooter>
            <CredenzaClose asChild>
              <Button
                variant="link"
                size="lg"
                className="uppercase font-bold text-lg"
              >
                Back
              </Button>
            </CredenzaClose>
          </CredenzaFooter>
        </CredenzaContent>
      </Credenza>
    </>
  );
};

export default MatchModal;
