import { Metadata } from 'next';

export const metadata = {
  title: 'Photographer Portfolio',
  description: 'Professional photography portfolio showcasing my work',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
