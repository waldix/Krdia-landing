import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Krdex - Administración de Tarjetas de Servicio Corporativas',
  description: 'Plataforma B2B para administración de pagos y consumos empresariales a través de tarjetas de servicio. Tecnología avanzada y seguridad premium.',
  keywords: 'tarjetas de servicio, administración de pagos, tarjetas corporativas, B2B, gestión empresarial',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
