"use client";

import { ContactFormSchema } from "@/schemas/contact-form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export const ContactForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
    },
  });

  const submitHandler = async (values: z.infer<typeof ContactFormSchema>) => {
    try {
      const response = await fetch("/api/v1/ticket", {
        method: "POST",
        body: JSON.stringify(values),
      });

      await response.json();

      if (response.status !== 200) {
        toast.error("Error while submission. Please retry!");
        return;
      }

      toast.success(
        "Ticket submitted successfully! Redirecting to homepage..."
      );
      form.reset();
      router.push("/");
    } catch (error: any) {
      console.error(error?.message);
      toast.error("Error while submission. Please retry!");
    }
  };

  return (
    <Form {...form}>
      <form
        className="mt-4 w-full space-y-4"
        onSubmit={form.handleSubmit(submitHandler)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Enter your name..."
                  disabled={form.formState.isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Enter your email..."
                  disabled={form.formState.isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Enter your phone number..."
                  disabled={form.formState.isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Enter your subject line..."
                  disabled={form.formState.isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  disabled={form.formState.isSubmitting}
                  placeholder="Any question or concern.."
                  className="resize-none"
                  rows={10}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="flex items-center justify-center text-center gap-2"
        >
          {form.formState.isSubmitting && (
            <Loader2 className="w-4 h-4 animate-spin duration-700 ease-in-out repeat-infinite" />
          )}
          {form.formState.isSubmitting ? "Please wait..." : "Send now"}
        </Button>
      </form>
    </Form>
  );
};
