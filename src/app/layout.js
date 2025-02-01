import { Geist, Geist_Mono } from "next/font/google";
import { Menu } from "./components/Menu";
import "./globals.css";
import "@/styles/menu.css";
import "@/styles/rules.css";
import "@/styles/banner.css";
import "@/styles/dayList.css";
import "@/styles/daily.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as config from "@/app/utils/config";
import { ChallengeProvider } from "./utils/contexts/ChallengeContext";

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
          <Menu content={children} challengeSize={config.challengeSize} />
          <div className="py-3 py-md-5 px-3">{children}</div>
        </ChallengeProvider>
      </body>
    </html>
  );
}
