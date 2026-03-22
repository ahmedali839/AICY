import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { LoadingProvider } from "../components/Header";
import { UserDataProvider } from "../stores/userContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AICY",
  description: "AICY Digital-Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${robotoMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LoadingProvider>
          <UserDataProvider>{children}</UserDataProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
