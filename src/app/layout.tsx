import type { Metadata } from 'next';
import { Playfair_Display, Be_Vietnam_Pro, Lora } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['vietnamese', 'latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const beVietnam = Be_Vietnam_Pro({
  subsets: ['vietnamese', 'latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-be-vietnam',
  display: 'swap',
});

const lora = Lora({
  subsets: ['vietnamese', 'latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://motkhoangdung.lovable.app'),
  title: 'Một Khoảng Dừng 2026 - Cha Mẹ vững chãi, Con Trẻ an lành',
  description:
    'Chuỗi hội thảo trực tuyến miễn phí cho cha mẹ & người chăm sóc trẻ, 10 & 11/10/2026 trên Zoom. Một khoảng dừng để chậm lại, tự chăm sóc và kết nối.',
  authors: [{ name: 'Cha Mẹ Trắc Ẩn Việt Nam' }],
  keywords: [
    'Một Khoảng Dừng 2026',
    'Cha Mẹ Trắc Ẩn',
    'MCP Vietnam',
    'Nuôi dạy con tỉnh thức',
    'Hội thảo làm cha mẹ',
    'Chăm sóc sức khỏe tinh thần gia đình',
  ],
  openGraph: {
    title: 'Một Khoảng Dừng 2026 - Cha Mẹ vững chãi, Con Trẻ an lành',
    description:
      'Chuỗi hội thảo trực tuyến miễn phí cho cha mẹ & người chăm sóc trẻ, 10 & 11/10/2026 trên Zoom. Một khoảng dừng để chậm lại, tự chăm sóc và kết nối.',
    url: 'https://motkhoangdung.lovable.app/',
    siteName: 'Một Khoảng Dừng 2026',
    images: [
      {
        url: '/images/og-speakers.jpg',
        width: 1200,
        height: 630,
        alt: 'Một Khoảng Dừng 2026 - Cha Mẹ vững chãi, Con Trẻ an lành',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Một Khoảng Dừng 2026 - Cha Mẹ vững chãi, Con Trẻ an lành',
    description:
      'Chuỗi hội thảo trực tuyến miễn phí cho cha mẹ & người chăm sóc trẻ, 10 & 11/10/2026 trên Zoom.',
    images: ['/images/og-speakers.jpg'],
  },
  icons: {
    icon: '/images/logo-mkd.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${playfair.variable} ${beVietnam.variable} ${lora.variable}`}
    >
      <body className="bg-cream font-body text-ink antialiased selection:bg-terracotta/20 selection:text-terracotta-deep">
        {children}
      </body>
    </html>
  );
}
