import "./globals.css";
import "../styles/custom.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <h1 className="title">Effective Margin Simulator</h1>
          {children}
        </div>
      </body>
    </html>
  );
}
