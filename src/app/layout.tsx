import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./_components/Sidebar";
import { ChatProvider } from "./_contexts/ChatContext";
import { SearchProvider } from "./_contexts/SearchContext";
import AuthProvider from "./_components/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AntiGambling.ai",
  description: "A tool to help you stay away from gambling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950`}
      >
        <AuthProvider>
          <SearchProvider>
            <ChatProvider>
              <div className="flex h-screen">
                <Sidebar />
                <main className="flex-1 ml-64 h-full">
                  {children}
                </main>
              </div>
            </ChatProvider>
          </SearchProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
