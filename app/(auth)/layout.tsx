import type { Metadata } from "next";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Inter } from "next/font/google";

import "../globals.css";

// search engine optimisation
export const metadata: Metadata = {
  title: "Auth",
  description: "A Next.js 13 Social Media application",
};

// font
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en">
        <body
          className={`${inter.className} bg-dark-1 flex justify-center items-center mt-40`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

