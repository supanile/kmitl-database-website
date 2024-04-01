import { Inter } from "next/font/google";
import { Kanit } from "next/font/google";
import "./ui/globals.css";

const inter = Inter({ subsets: ["latin"] });
const kanit = Kanit({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "KMITL Equipment Borrow System",
  description: "Next.js 14",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kanit.className}>{children}</body>
    </html>
  );
}
