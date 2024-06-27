import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IBPD",
  description: "Embark on a transformative experience with IBPD where expertise meets aspiration",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#EBEBEB] flex flex-col min-h-screen justify-between`}
      >
        <AppRouterCacheProvider>
          {/* <Navbar /> */}
          {children}
          <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
