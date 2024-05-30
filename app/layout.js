import { Inter } from "next/font/google";
import "./_styles/globals.css";
import Header from "./_components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "World wide",
  description: "World wide hotel booking",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}>
        <Header/>
        <div className="flex-1 px-8 py-12">
          <main className="max-w-7xl mx-auto">{children}</main>
        </div>
        </body>
    </html>
  );
}
