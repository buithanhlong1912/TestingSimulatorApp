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
        <div className="w-3/4 mt-10 mx-auto">
          <h1 className="title">Effective Margin Simulator</h1>
          {children}
        </div>
      </body>
    </html>
  );
}
