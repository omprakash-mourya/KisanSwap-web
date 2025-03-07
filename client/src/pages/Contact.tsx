import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from 'react-helmet';

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const SHEET_API_URL = 'https://script.google.com/macros/s/AKfycbwIYWlDezmwP7OEhbTnc2FPNra08pqlHcMRB1xcBLLc9CB6amvzTMVxUCPHZ-OiHsGJFA/exec';

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("message", data.message);

      const response = await fetch(SHEET_API_URL, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        toast({
          title: "Message Sent",
          description: "Your message has been recorded successfully!",
        });
        form.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact Us - KisanSwap</title>
        <meta name="description" content="Get in touch with KisanSwap. We're here to help you with any questions about agricultural equipment trading." />
      </Helmet>

      <div className="container py-12 px-6">
        <div className="max-w-md mx-auto">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-muted-foreground mb-8">
            Have questions? We'd love to hear from you. Send us a message and we'll
            respond as soon as possible.
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
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
                      <Input placeholder="your@email.com" {...field} />
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
                        placeholder="Your message"
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full"
              >
                Send Message
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}
