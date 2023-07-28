import "./globals.css";
import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const open = Raleway({ subsets: ["latin"] , weight:'300'});
export const metadata: Metadata = {
  title: "Home |  MEXADU CONCEPTS LTD",
  description:
    " We provide solutions to many companies, Industries and Governmental Organizations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={open.className}>{children}</body>
    </html>
  );
}
