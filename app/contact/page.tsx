import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import SectionIntro from "@/components/ui/SectionIntro";

export const metadata: Metadata = {
  title: "Contact us | Engineering Horizons",
  description:
    "Send a message to Engineering Horizons at the University of Washington.",
};

export default function ContactPage() {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <SectionIntro
          variant="center"
          kicker="Contact"
          lede="Send a message and we will get back to you."
        />
        <div className="mx-auto mt-12 max-w-xl">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
