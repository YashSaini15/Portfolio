import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { personal } from "@/data/portfolio";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yashsaini.dev"),
  title: `${personal.name} — ${personal.title} | ${personal.subtitle}`,
  description: `Portfolio of ${personal.name}, a ${personal.title} (${personal.subtitle}) with ~3 years of experience building scalable web applications. Based in ${personal.location}.`,
  keywords: [
    "MERN Stack Developer",
    "React / Node.js Engineer",
    "ReactJS",
    "NextJS",
    "NodeJS",
    "ExpressJS",
    "MongoDB",
    "TypeScript",
    "Redux Toolkit",
    "Yash Saini",
    "Indore",
  ],
  authors: [{ name: personal.name }],
  creator: personal.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://yashsaini.dev",
    title: `${personal.name} — ${personal.title} | ${personal.subtitle}`,
    description: `MERN Stack Developer with ~3 years of experience building scalable web applications. Improved application speed by 20–30% while delivering features used by 200K+ users.`,
    siteName: `${personal.name} Portfolio`,
    images: [
      {
        url: "/avatar.jpg",
        width: 1200,
        height: 630,
        alt: `${personal.name} — ${personal.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} — ${personal.title} | ${personal.subtitle}`,
    description: `MERN Stack Developer with ~3 years of experience building scalable web applications.`,
    images: ["/avatar.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)",  color: "#05070f" },
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        {/* Preload LCP hero image — prevents warning from framer-motion opacity:0 delay */}
        <link
          rel="preload"
          as="image"
          href="/avatar.jpg"
          fetchPriority="high"
        />
      </head>
      <body className="font-[var(--font-inter)] antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
