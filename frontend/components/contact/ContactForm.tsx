"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import { fadeInUp } from "@/animations";
import { Send, Loader2, CheckCircle } from "lucide-react";

const serviceOptions = [
  "Construction",
  "Architecture",
  "Interior Design",
  "Infrastructure",
  "Commercial",
  "Renovation",
  "Project Management",
  "Other",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", service: "", subject: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const inputClasses =
    "w-full px-5 py-3.5 rounded-[10px] bg-muted border border-border text-dark text-sm placeholder:text-gray-400 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all duration-300";

  return (
    <Section className="bg-muted/30">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          <Heading
            title="Send Us a Message"
            subtitle="Fill out the form and our team will get back to you within 24 hours."
            highlight="Message"
            centered={false}
          />

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4 mt-8"
          >
            <div className="p-5 rounded-[14px] bg-white border border-border/50">
              <h4 className="font-[Poppins] font-semibold text-dark text-sm mb-2">Quick Response</h4>
              <p className="text-gray-500 text-sm">We respond to all inquiries within 24 hours on business days.</p>
            </div>
            <div className="p-5 rounded-[14px] bg-white border border-border/50">
              <h4 className="font-[Poppins] font-semibold text-dark text-sm mb-2">Free Consultation</h4>
              <p className="text-gray-500 text-sm">Get a free initial consultation for your construction project.</p>
            </div>
            <div className="p-5 rounded-[14px] bg-white border border-border/50">
              <h4 className="font-[Poppins] font-semibold text-dark text-sm mb-2">Transparent Pricing</h4>
              <p className="text-gray-500 text-sm">No hidden costs. We provide detailed, honest quotations.</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-3"
        >
          <form onSubmit={handleSubmit} className="bg-white rounded-[28px] p-8 md:p-10 premium-shadow border border-border/30">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-xs font-semibold text-dark uppercase tracking-wider mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className={inputClasses}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-dark uppercase tracking-wider mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-xs font-semibold text-dark uppercase tracking-wider mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className={inputClasses}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-dark uppercase tracking-wider mb-2">
                  Service Needed
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-5">
              <label className="block text-xs font-semibold text-dark uppercase tracking-wider mb-2">
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Project inquiry"
                className={inputClasses}
              />
            </div>

            <div className="mb-6">
              <label className="block text-xs font-semibold text-dark uppercase tracking-wider mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell us about your project..."
                className={inputClasses + " resize-none"}
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-primary text-white text-sm font-semibold uppercase tracking-[0.15em] rounded-[10px] hover:bg-primary-light transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
            >
              {isSubmitting ? (
                <Loader2 size={18} className="animate-spin" />
              ) : isSubmitted ? (
                <>
                  <CheckCircle size={18} /> Message Sent!
                </>
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
