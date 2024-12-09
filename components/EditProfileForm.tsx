"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  about: z
    .string()
    .min(10, "About must be at least 10 characters")
    .max(1000, "About must be less than 1000 characters"),
  formation: z
    .string()
    .min(10, "Formation must be at least 10 characters")
    .max(100, "Formation must be less than 100 characters"),
  job: z
    .string()
    .min(10, "Job must be at least 10 characters")
    .max(100, "Job must be less than 100 characters"),
  location: z
    .string()
    .min(3, "Location must be at least 3 characters")
    .max(100, "Location must be less than 100 characters"),
});

const EditProfileForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      about: "",
      formation: "",
      job: "",
      location: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-1 flex-col gap-2"
      >
        <FormField
          control={form.control}
          name="about"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">About you</FormLabel>
              <FormControl>
                <div className="relative">
                  <Textarea
                    {...field}
                    placeholder="Write about yourself..."
                    className="resize-none text-sm h-20"
                  />
                  <div className="absolute bottom-0 right-0 text-xs text-gray-500 p-2">
                    0/500
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="formation"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">Formation</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Your formation"
                  className="text-sm"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="job"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">Job</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Your job" className="text-sm" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">Location</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Your location"
                  className="text-sm"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="absolute bottom-0 w-full left-0 p-4 mb-12">
          <Button
            type="submit"
            className="w-full uppercase font-semibold rounded-full h-12"
          >
            Confirm changes
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default EditProfileForm;
