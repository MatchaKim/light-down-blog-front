import type { Metadata } from "next";
import Header from "./components/Header";

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
          {children}
      </body>
    </html>
  );
}
