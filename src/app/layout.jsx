import { Inter, Poppins, Roboto, Open_Sans, Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import { LoadingProvider } from "../components/Header";
import { UserDataProvider } from "../stores/userContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
});

export const metadata = {
  title: "AICY - Digital Solutions",
  description: "Transform your vision into exceptional digital experiences with AICY's professional web solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${roboto.variable} ${openSans.variable} ${playfair.variable} ${montserrat.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-white antialiased">
        <Navbar />
        <main className="flex-grow pt-16 lg:pt-20">
          <LoadingProvider>
            <UserDataProvider>{children}</UserDataProvider>
          </LoadingProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
