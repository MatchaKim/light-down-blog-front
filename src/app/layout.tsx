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
      <head>
      <link rel="stylesheet" href="https://uicdn.toast.com/editor/latest/toastui-editor.min.css" />
      </head>
      <body>
        <div style={{position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000}}>
          <Header />
        </div>
        <div style={{display:'flex',width:'100%',justifyContent:'center'}}>
          <div style={{width:'100%',maxWidth:'1024px', minHeight:'100vh', paddingTop: '52px'}}>
            {children}
          </div>
        </div>
        <script src="https://uicdn.toast.com/editor/latest/toastui-editor-all.min.js"></script>
      </body>
    </html>
  );
}
