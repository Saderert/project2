
import './globals.scss';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: '',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        {children}
        <footer style={{ textAlign: 'center', padding: '2rem 0' }}>
          <p>© 2025 Все права защищены.</p>
        </footer>
      </body>
    </html>
  );
}


