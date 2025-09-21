import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Aura Lingerie - Elegance & Comfort",
  description: "Discover our exclusive collection of fine lingerie. Designed for the modern woman.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        {/* We would wrap this with a ThemeProvider, CartProvider, etc. */}
        <div className="relative flex min-h-screen flex-col bg-background">
          {/* Header/Navbar would go here */}
          <main className="flex-1">{children}</main>
          {/* Footer would go here */}
        </div>
      </body>
    </html>
  );
      }
    
