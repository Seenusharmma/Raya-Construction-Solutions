"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig, navLinks } from "@/constants";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  Send,
} from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const socialIcons = [
  { icon: FaFacebookF, href: siteConfig.social.facebook, label: "Facebook" },
  { icon: FaTwitter, href: siteConfig.social.twitter, label: "Twitter" },
  { icon: FaInstagram, href: siteConfig.social.instagram, label: "Instagram" },
  { icon: FaLinkedinIn, href: siteConfig.social.linkedin, label: "LinkedIn" },
  { icon: FaYoutube, href: siteConfig.social.youtube, label: "YouTube" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/assets/mainLogo.png"
                alt="Raya Construction and Solutions"
                width={160}
                height={45}
                className="h-11 w-auto"
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              India&apos;s premier construction company delivering luxury projects with
              engineering excellence since 1999. Building tomorrow with precision and trust.
            </p>
            <div className="flex gap-3">
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-[10px] bg-white/5 flex items-center justify-center text-white/50 hover:bg-secondary hover:text-white transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-[Poppins] font-bold text-sm uppercase tracking-wider mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/50 text-sm hover:text-secondary transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-[Poppins] font-bold text-sm uppercase tracking-wider mb-6">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-start gap-3 text-white/50 text-sm hover:text-secondary transition-colors"
                >
                  <Phone size={16} className="mt-0.5 flex-shrink-0" />
                  <span>{siteConfig.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 text-white/50 text-sm hover:text-secondary transition-colors"
                >
                  <Mail size={16} className="mt-0.5 flex-shrink-0" />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/50 text-sm">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                  <span>{siteConfig.address}</span>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-[Poppins] font-bold text-sm uppercase tracking-wider mb-6">
              Newsletter
            </h4>
            <p className="text-white/50 text-sm mb-4">
              Subscribe for project updates, industry insights, and exclusive offers.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="flex-1 px-4 py-3 rounded-[10px] bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-secondary/50 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-12 h-12 rounded-[10px] bg-secondary flex items-center justify-center text-white cursor-pointer hover:bg-secondary-light transition-colors"
                aria-label="Subscribe"
              >
                <Send size={16} />
              </motion.button>
            </form>
            {subscribed && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-secondary text-xs mt-2"
              >
                Thank you for subscribing!
              </motion.p>
            )}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Raya Construction and Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-white/30 text-xs hover:text-white/50 transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="text-white/30 text-xs hover:text-white/50 transition-colors cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
