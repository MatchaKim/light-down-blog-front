import type { Metadata } from "next";
import Header from "./components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Light Down Blog",
  description: "Light Down Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <div style={{display:'flex',width:'100%',minHeight:'100vh'}}>
          {children}
        </div>
      </body>
    </html>
  );
}
