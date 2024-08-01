import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

const font = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "techcave",
  description: "A website about tech and programming",
  icons: {
    icon: "/logo/logoipsum-245.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* TypeScript may not recognize metadata.icons as an object with an icon property.
            i used a type assertion to handle the type safely. */}
        <link rel="icon" href={(metadata.icons as { icon?: string }).icon ?? ""} />
      </head>
      <body className={font.className}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
