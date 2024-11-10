import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import Sidebar from "@/components/sidebar/page";
import Image from "next/image";
import Loader from "@/components/Loader";
// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Бат-Ирээдүй",
  description:
    "МУИС-ийн Монгол судлалын сургуулийн багш, ОХУ-д хэл бичгийн шинжлэх ухааны доктор, эрдэмтэн Жанцангийн Бат-Ирээдvйн албан ёсны цахим хуудас",
  keywords: "batireedui.com, www.batireedui.com",
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/static/assets/main.css" />
        <link rel="stylesheet" href="/static/css/reset.css" />
        <link rel="stylesheet" href="/static/css/styles.css" />
        <link rel="stylesheet" href="/static/css/style.css" />
        <link rel="stylesheet" href="/static/css/gallery_styles.css" />

        <link rel="stylesheet" href="/static/css/gerege/gerege-codes.css" />
        <link rel="stylesheet" href="/static/css/gerege/gerege-embedded.css" />
        <link rel="stylesheet" href="/static/css/gerege/gerege-ie7-codes.css" />
        <link rel="stylesheet" href="/static/css/gerege/gerege-ie7.css" />
        <link rel="stylesheet" href="/static/css/gerege/gerege.css" />
      </head>
      <body className={inter.className}>
        <Header />
        <div
          className="fixed"
          style={{
            width: 1000,
            height: 69,
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          <Image alt="" width={550} height={69} src="/images/logo.jpg" />
        </div>

        <div
          id="wrapper"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Loader>{children}</Loader>
          <Sidebar />
        </div>

        <Footer />
      </body>
      <script src="/static/js/scripts.js" async />
      <script src="/static/js/cufon/cufon-arial.js" async />
      <script src="/static/js/cufon/cufon-yui.js" async />
      <script src="/static/js/cufon/graublau.js" async />
      <script src="/static/js/cufon/HeliosCondLight_Mon_400.font.js" async />
      <script
        src="/static/js/cufon/Agenda_Medium_500_alldomains.font.js"
        async
      />
    </html>
  );
}
