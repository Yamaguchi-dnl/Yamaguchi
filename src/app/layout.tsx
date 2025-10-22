import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";


export const metadata: Metadata = {
  title: 'Daniel Yamaguchi | Portfolio',
  description: 'Portfolio of Daniel Yamaguchi, Full-Stack Developer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased uppercase">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
