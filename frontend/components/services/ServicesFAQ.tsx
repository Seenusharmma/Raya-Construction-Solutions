"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import { FAQItem } from "@/components/ui/Accordion";
import { faqs } from "@/constants";

export default function ServicesFAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <Section>
      <Heading
        title="Frequently Asked Questions"
        subtitle="Get answers to the most common questions about our construction services."
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
