export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="text-semibold"
      >
        {children}
      </body>
    </html>
  );
}
