import { Poppins, Elsie, Waterfall, Rochester } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ weight: ['400', '700'], subsets: ["latin"], variable: '--font-poppins' });
const elsie = Elsie({ weight: ['400', '900'], subsets: ["latin"], variable: '--font-elsie' });
const waterfall = Waterfall({ weight: ['400'], subsets: ["latin"], variable: '--font-waterfall' });
const rochester = Rochester({ weight: ['400'], subsets: ["latin"], variable: '--font-rochester' });

export const metadata = {
  title: "Wedding Farhan & Putri",
  description: "Undangan Nikahan Farhan & Putri",
};

export default function RootLayout({children}) {
  return (
    <html lang="en" className={`${poppins.variable} ${elsie.variable} ${waterfall.variable} ${rochester.variable}`}>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
