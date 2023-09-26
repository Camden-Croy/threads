import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "../global.css";

export const metadata = {
  title: "Next.js 13 with Clerk",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
