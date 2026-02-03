import { Zalando_Sans_Expanded } from 'next/font/google';

const ZalandoFont = Zalando_Sans_Expanded({
  variable: '--font-zalando',
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <title>Backstage Split Screen</title>
      </head>
      <body className={`${ZalandoFont.variable}`}>{children}</body>
    </html>
  );
}
