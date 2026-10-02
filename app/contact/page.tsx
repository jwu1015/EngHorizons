import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/contact/ContactForm";
import SectionIntro from "@/components/ui/SectionIntro";
import { INTEREST_FORM_URL } from "@/lib/interestForm";

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
          <p className="mt-10 border-t border-border pt-6 text-body text-muted">
            Looking to join a team?{" "}
            <Link
              href={INTEREST_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent transition-colors hover:text-accent-hover"
            >
              Fill out the member interest form
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
