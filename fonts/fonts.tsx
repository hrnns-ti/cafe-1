import { Noto_Serif_JP, Inter, Noto_Sans } from "next/font/google";

export const notoSerifJP = Noto_Serif_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const notoSans = Noto_Sans({
  subsets: ['latin'],
  display: 'swap'
})