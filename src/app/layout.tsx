import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { GlobalLoader } from "@/components/ui/global-loader";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const pjs = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-pjs",
});

export const metadata: Metadata = {
  title: "Imagineering | Nuclear Medicine & Imaging Technology Pakistan",
  description: "Next-gen infrastructure for medical imaging, radiation safety, and nuclear diagnostics.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`${outfit.variable} ${pjs.variable} font-pjs bg-background text-foreground antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <GlobalLoader />
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
