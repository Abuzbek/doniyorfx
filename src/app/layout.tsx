import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Videomontajni 0 dan o‘rganing",
  description:
    "Bu kurs video tahrirlash haqida. Trening davomida biz turli janrlar bilan ishlaymiz: reportaj, intervyu, shuningdek, treyler va reklama rolikini tahrirlaymiz. Materiallar bizdan, lekin agar sizda bo'lsa, ulardan foydalaning.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}
