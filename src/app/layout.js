import { Hind_Siliguri } from 'next/font/google'
import "./globals.css"


const hindSiliguri = Hind_Siliguri({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-hind-siliguri",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={hindSiliguri.className}>
      <body>{children}</body>
    </html>
  )
}