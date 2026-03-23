import { Inter, Poppins, Roboto, Open_Sans } from "next/font/google";
import "./globals.css";
import { LoadingProvider } from "../components/Header";
import { UserDataProvider } from "../stores/userContext";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-open-sans',
});

export const metadata = {
  title: "AICY",
  description: "AICY Digital-Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${roboto.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background">
        <nav className="bg-white shadow-md">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <Link href="/" className="text-2xl font-bold text-text-primary font-heading">
                My Site
              </Link>
              <div className="flex space-x-4 font-sans">
                <Link href="/about" className="text-text-secondary hover:text-primary transition-transform duration-300 ease-in-out hover:scale-105">
                  About
                </Link>
                <Link href="/projects" className="text-text-secondary hover:text-primary transition-transform duration-300 ease-in-out hover:scale-105">
                  Projects
                </Link>
                <Link href="/contact" className="text-text-secondary hover:text-primary transition-transform duration-300 ease-in-out hover:scale-105">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="flex-grow animate-fadeIn">
          <LoadingProvider>
            <UserDataProvider>{children}</UserDataProvider>
          </LoadingProvider>
        </main>
      </body>
    </html>
  );
}
