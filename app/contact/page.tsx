import { MagicContainer } from "@/components/ui/magic-container";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact - Modern Blog",
  description: "Get in touch with us",
};

export default function ContactPage() {
  return (
    <MagicContainer>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
        
        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
          Have a question or want to get in touch? Fill out the form below and we'll get back to you as soon as possible.
        </p>
        
        <ContactForm />
      </div>
    </MagicContainer>
  );
}