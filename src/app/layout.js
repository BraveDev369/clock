import "./globals.css";

export const metadata = {
  title: "Clock",
  icons: {
    icon: "/clock.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
