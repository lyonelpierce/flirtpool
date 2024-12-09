"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  lookingFor: z.string().min(1, { message: "Looking for is required" }),
  maxDistance: z.string().min(1, { message: "Max distance is required" }),
  age: z.string().min(1, { message: "Age is required" }),
  isPublic: z.boolean(),
});

const PreferencesForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      age: "",
      lookingFor: "",
      maxDistance: "",
      isPublic: false,
    },
  });

  return (
    <Form {...form}>
      <form className="flex flex-1 flex-col gap-2">
        <FormField
          control={form.control}
          name="lookingFor"
          render={({ field }) => (
            <FormItem className="flex justify-between items-center border px-2 rounded-md h-12 space-y-0">
              <FormLabel className="font-semibold">Looking for</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-36 border-none">
                    <SelectValue placeholder="Select interest" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="women">Women</SelectItem>
                  <SelectItem value="men">Men</SelectItem>
                  <SelectItem value="non-binary">Non-binary</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="maxDistance"
          render={({ field }) => (
            <FormItem className="flex justify-between items-center border px-2 rounded-md h-12 space-y-0">
              <FormLabel className="font-semibold">Max distance</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-36 border-none">
                    <SelectValue placeholder="Select distance" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="50">50mi</SelectItem>
                  <SelectItem value="100">100mi</SelectItem>
                  <SelectItem value="100plus">100+mi</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem className="flex justify-between items-center border px-2 rounded-md h-12 space-y-0">
              <FormLabel className="font-semibold">Age</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-36 border-none">
                    <SelectValue placeholder="Select age" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="18">18-36</SelectItem>
                  <SelectItem value="37">37-50</SelectItem>
                  <SelectItem value="50">50+</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="isPublic"
          render={({ field }) => (
            <FormItem className="flex justify-between items-center border px-2 rounded-md h-12 space-y-0">
              <FormLabel className="font-semibold">Public Profile</FormLabel>
              <Switch onCheckedChange={field.onChange} defaultChecked={true} />
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="absolute bottom-0 w-full left-0 p-4 mb-12">
          <Button
            type="submit"
            className="w-full uppercase font-semibold rounded-full h-12"
          >
            Save Profile
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default PreferencesForm;
