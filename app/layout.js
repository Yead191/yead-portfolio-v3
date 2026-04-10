import "./globals.css";

export const metadata = {
  title: "Asadur Rahaman Yead — Frontend Developer",
  description: "Portfolio of Asadur Rahaman Yead, Frontend Developer specializing in React, Next.js, and modern UI/UX",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
