import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rayaconstruction.com"),
  title: {
    default: "Raya Construction and Solutions | Premium Construction Company in India",
    template: "%s | Raya Construction and Solutions",
  },
  description:
    "India's premier construction company delivering luxury residential, commercial, and industrial projects with engineering excellence. 25+ years of trust and innovation.",
  keywords: [
    "construction company India",
    "luxury construction",
    "residential construction",
    "commercial construction",
    "architecture firm India",
    "interior design",
    "infrastructure development",
    "Raya Construction",
    "premium builders",
    "civil engineering",
  ],
  authors: [{ name: "Raya Construction and Solutions" }],
  creator: "Raya Construction and Solutions",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rayaconstruction.com",
    siteName: "Raya Construction and Solutions",
    title: "Raya Construction and Solutions | Building Tomorrow with Precision",
    description:
      "India's premier construction company delivering luxury residential, commercial, and industrial projects with engineering excellence.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Raya Construction and Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raya Construction and Solutions",
    description:
      "India's premier construction company delivering luxury projects with engineering excellence.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Raya Construction and Solutions",
    url: "https://rayaconstruction.com",
    logo: "https://rayaconstruction.com/logo.png",
    description:
      "India's premier construction company delivering luxury residential, commercial, and industrial projects.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-98765-43210",
      contactType: "customer service",
    },
    sameAs: [
      "https://facebook.com/rayaconstruction",
      "https://twitter.com/rayaconstruction",
      "https://instagram.com/rayaconstruction",
      "https://linkedin.com/company/rayaconstruction",
    ],
  };

  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
