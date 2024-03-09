import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import { GoogleTagManager } from '@next/third-parties/google'
import { Metadata } from 'next'

import { notFound } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: {
    default: 'TugTek Elektronik Danışmanlık Ajansı',
    template: '%s | TugTek '
  },
  description:
    "TugTek, Konya'da elektronik dünyasında lider konumunda bulunuyor. Müşterilerimize en son teknoloji ürünleri ve çözümleriyle benzersiz deneyimler sunarak elektronik projelerinizde güvenilir bir ortak olmaktadır. Elektronik çözümleriniz için Konya'nın önde gelen ismi TugTek'i tercih edin ve işinizi en iyi şekilde optimize edin.",

  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://tugtek.com',
    siteName: 'TugTek Elektronik Danışmanlık Ajansı',
    images: [
      {
        url: '/logo.png',
        width: 120,
        height: 120,
        alt: 'TugTek Logo'
      }
    ]
  }
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='tr'>
      <head>
        <meta charSet='utf-8' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='manifest' href='/manifest.json' />
        <meta name='theme-color' content='#000000' />
        <link rel='icon' href='/favicon.ico' sizes='any' />

        <meta
          name='description'
          content="TugTek, Konya'da elektronik dünyasında lider konumunda bulunuyor. Müşterilerimize en son teknoloji ürünleri ve çözümleriyle benzersiz deneyimler sunarak elektronik projelerinizde güvenilir bir ortak olmaktadır. Elektronik çözümleriniz için Konya'nın önde gelen ismi TugTek'i tercih edin ve işinizi en iyi şekilde optimize edin."
        />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@tugtek' />
        <meta name='twitter:creator' content='@tugtek' />
        <meta name='twitter:title' content='TugTek' />
        <meta
          name='twitter:description'
          content="TugTek, Konya'da elektronik dünyasında lider konumunda bulunuyor. Müşterilerimize en son teknoloji ürünleri ve çözümleriyle benzersiz deneyimler sunarak elektronik projelerinizde güvenilir bir ortak olmaktadır. Elektronik çözümleriniz için Konya'nın önde gelen ismi TugTek'i tercih edin ve işinizi en iyi şekilde optimize edin."
        />
        <meta name='twitter:image' content='logo.png' />
        <meta property='og:title' content='TugTek' />
        <meta
          property='og:description'
          content="TugTek, Konya'da elektronik dünyasında lider konumunda bulunuyor. Müşterilerimize en son teknoloji ürünleri ve çözümleriyle benzersiz deneyimler sunarak elektronik projelerinizde güvenilir bir ortak olmaktadır. Elektronik çözümleriniz için Konya'nın önde gelen ismi TugTek'i tercih edin ve işinizi en iyi şekilde optimize edin."
        />
        <meta property='og:image' content='logo.png' />
        <meta property='og:url' content='https://tugtek.com' />
        <meta
          property='og:site_name'
          content='TugTek Elektronik Danışmanlık Ajansı'
        />

        <meta
          property='og:description'
          content="TugTek, Konya'da elektronik dünyasında lider konumunda bulunuyor. Müşterilerimize en son teknoloji ürünleri ve çözümleriyle benzersiz deneyimler sunarak elektronik projelerinizde güvenilir bir ortak olmaktadır. Elektronik çözümleriniz için Konya'nın önde gelen ismi TugTek'i tercih edin ve işinizi en iyi şekilde optimize edin."
        />
        <meta
          property='og:locale'
          content='tr_TR
        '
        />
        <meta property='og:type' content='website' />
        <link rel='apple-touch-icon' href='logo.png' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
      </head>

      <body className='w-screen h-full bg-white dark:bg-white overflow-x-hidden'>
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-P4BSM87L'
            height='0'
            width='0'
            className='hidden'
          ></iframe>
        </noscript>
        <div>
          <Navbar />
        </div>
        <div className=''>
          {children}
          <GoogleTagManager gtmId='G-G0KR9Y068Y' />
          <SpeedInsights />
          <Analytics />
        </div>
        <div className='mt-32'>
          <Footer />
        </div>
      </body>
    </html>
  )
}
