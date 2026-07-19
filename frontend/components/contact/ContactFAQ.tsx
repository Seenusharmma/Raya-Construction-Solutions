"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import { FAQItem } from "@/components/ui/Accordion";
import { faqs } from "@/constants";

export default function ContactFAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <Section className="bg-muted/30">
      <Heading
        title="Frequently Asked Questions"
        subtitle="Find quick answers to common questions about our services and process."
        highlight="Questions"
      />

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq) => (
          <FAQItem
            key={faq.id}
            faq={faq}
            isOpen={openId === faq.id}
            onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
          />
        ))}
      </div>
    </Section>
  );
}
