import type { Metadata, Viewport } from "next";
import "./globals.css";
import { personalData } from "@/data/personal";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: `${personalData.name} — ${personalData.title}`,
  description: `${personalData.name} is an ${personalData.title} and Computer Science student at ${personalData.university}. Explore 3D interactive portfolio, projects, and skills.`,
  keywords: [
    "Khorsed Alam",
    "AI Engineer",
    "Machine Learning",
    "Portfolio",
    "United International University",
    "Next.js",
    "Three.js",
    "Software Developer",
    "Bangladesh",
  ],
  authors: [{ name: personalData.name, url: personalData.github }],
  creator: personalData.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://khorsed-alam.com",
    title: `${personalData.name} | ${personalData.title}`,
    description: personalData.bio,
    siteName: `${personalData.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalData.name} | ${personalData.title}`,
    description: personalData.bio,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#111923",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('portfolio-theme');
                if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                  document.documentElement.style.colorScheme = 'light';
                } else {
                  document.documentElement.classList.remove('light');
                  document.documentElement.classList.add('dark');
                  document.documentElement.style.colorScheme = 'dark';
                }
              } catch (_) {}
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-text-white antialiased min-h-screen selection:bg-primary selection:text-white font-sans transition-colors duration-300">
        <ThemeProvider>
          {/* Subtle background ambient overlay */}
          <div className="fixed inset-0 pointer-events-none film-grain z-0 opacity-40" />
          <div className="relative z-10">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
