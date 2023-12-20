import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import classNames from "classnames";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={classNames(montserrat.className)}
      >
        {children}
      </body>
    </html>
  );
}
