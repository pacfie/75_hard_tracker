import { Geist, Geist_Mono } from "next/font/google";
import { Menu } from "./components/Menu";
import "./globals.css";
import "@/styles/menu.css";
import "@/styles/footer.css";
import "@/styles/window.css";
import "@/styles/dashboard.css";
import "@/styles/rules.css";
import "@/styles/banner.css";
import "@/styles/dayList.css";
import "@/styles/daily.css";
import "@/styles/newChallenge.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as config from "@/app/utils/config";
import { ChallengeProvider } from "./utils/contexts/ChallengeContext";
import { RulesProvider } from "./utils/contexts/RulesContext";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "75 hard tracker",
  description: "75 hard tracker for you to achieve your goals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ChallengeProvider>
          <RulesProvider>
            <Menu />
            <div className="py-3 py-md-5 px-3">{children}</div>
          </RulesProvider>
        </ChallengeProvider>
        <Footer/>
      </body>
    </html>
  );
}
