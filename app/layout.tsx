import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DeepScan — AI Deepfake & Content Verification",
  description: "Detect AI. Verify Reality. Advanced Deepfake & AI Content Detection for a Safer Digital World.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col bg-[#f4f5fd] text-slate-800">
        {children}
      </body>
    </html>
  );
}

