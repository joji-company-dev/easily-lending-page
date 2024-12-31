import "./globals.css";
import Nav from "./features/easilyMain/nav";


export const metadata = {
  title: "이즐리 렌딩페이지",
  description: "이즐리 렌딩페이지 입니다. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
      <Nav/>
      {children}
      </body>
    </html>
  );
}
