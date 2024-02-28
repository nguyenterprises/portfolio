import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/Provider";

const inter = Inter({ subsets: ["cyrillic"] });

export const metadata = {
  title: "Hanh Nguyen",
  description: "Hello I am Hanh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-slate-50 text-slate-900 dark:bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-700 via-slate-900 to-black dark:text-white selection:bg-slate-50 dark:selection:bg-slate-800 overflow-x-hidden`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
