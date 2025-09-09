import Header from "@/components/Header";
import "./globals.css";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={robotoMono.variable}>
      <body className="px-8 md:px-10 lg:px-12 xl:px-32">
        <Header />

        {children}
      </body>
    </html>
  );
}
