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
      <body>{children}</body>
    </html>
  );
}
