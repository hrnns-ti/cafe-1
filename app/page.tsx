'use client'

import Image from "next/image";
import { inter, notoSerifJP, notoSans } from "@/fonts/fonts";
import { useState, useEffect } from "react";

import Navbar from "@/components/navbar";

const backgroundImages = [
  '/section-1/1.png',
  '/section-1/2.jpg',
  '/section-1/3.jpg'
]

const carouselCol1 = [
  '/section-2/carousel-5.jpg',
  '/section-2/carousel-1.jpg',
  '/section-2/carousel-2.jpg',
]

const carouselCol2 = [
  '/section-2/carousel-4.jpg',
  '/section-2/carousel-3.jpg',
  '/section-2/carousel-6.jpg',
]

export default function Home() {
  
  const [currentBG, setCurrentBG] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBG((prevBG) => (prevBG + 1) % backgroundImages.length)
    }, 5000)

    return () => clearInterval(timer)
  },[])

  return (
    <div className="flex flex-col flex-1 font-sans ">
      <main className="flex flex-1 w-full flex-col sm:items-start">
        <Navbar />
        {/* section 1 */}
        <section className="relative w-full min-h-screen overflow-hidden">
          <div className="absolute inset-0 -z-10">
            {backgroundImages.map((src, index) => (
              <Image
                key={src}
                src={src}
                alt={`Background ${index + 1}`} 
                fill={true}
                objectFit="cover"
                priority={true}
                className={`
                  inset-0 saturate-50 contrast-100 transition-opacity duration-1500 ease-in-out 
                  ${index === currentBG ? "opacity-100" : "opacity-0"}
                `}
              />
            ))}
          </div>

          <div className="relative flex flex-col px-12 py-36 select-none z-10 text-white w-full">
            <p className={`${inter.className} py-3 text-xs tracking-[6]`}>VOL. XXIV —— TOKYO EDITION</p>
            <h1 className={`${notoSerifJP.className} text-9xl font-black`}>デイリー</h1>
            <h1 className={`${notoSerifJP.className} text-9xl font-black`}>ブリュー。</h1>
            <p className={`${notoSerifJP.className} py-12 text-xl`}>日本の新聞紙の触覚的な厳格さと、朝の静か<br/>な注ぎの儀式に敬意を表して。</p>
          </div>

          <div className="absolute bottom-0 w-full overflow-x-hidden">
            <div className={`flex flex-row gap-2 text-xs m-4 font-semibold ${notoSerifJP.className}`}>
              <p className="px-4 py-2 rounded-full bg-white">以来 12.02.1995</p>
              <p className="px-4 py-2 rounded-full bg-white">Kizu Cafe (キズカフェ) は2026年にこれまでで20万人の来店客に達しました。</p>
            </div>
            <div className="flex whitespace-nowrap w-max animate-marquee bg-gray-900">
              <p className={`text-white ${notoSerifJP.className}`}>本日のスペシャル：シングルオリジン 京都抹茶 • 在庫状況：エチオピア産豆（少）• 新入荷：季節のいちごスフレ • 本日のスペシャル：シングルオリジン 京都抹茶 • 在庫状況：エチオピア産豆（少）• 新入荷：季節のいちごスフレ • シングルオリジン 京都抹茶 • 在庫状況</p>
              <p className={`text-white ${notoSerifJP.className}`}>本日のスペシャル：シングルオリジン 京都抹茶 • 在庫状況：エチオピア産豆（少）• 新入荷：季節のいちごスフレ • 本日のスペシャル：シングルオリジン 京都抹茶 • 在庫状況：エチオピア産豆（少）• 新入荷：季節のいちごスフレ • シングルオリジン 京都抹茶 • 在庫状況</p>
            </div>
          </div>
        </section>

        {/* section 2 */}
        <section className="w-full min-h-screen flex flex-row">
          <div className="min-h-screen w-3/5 pt-16 pb-8 px-6 justify-between flex flex-col">
            <div className="flex flex-col">
              <h1 className={`${notoSerifJP.className} font-bold text-9xl`}>製品</h1>
              <p className={`${notoSerifJP.className} font-bold py-8`}>新鮮で毎日手作りのアイテムと、あなたのフィードを確実に映え<br/>させる美的センスの完璧な組み合わせ。</p>
            </div>
            <div className="flex flex-col w-auto">
              <p className={`flex ${notoSerifJP.className} items-center font-black`}>おはよう 01  
                <span className="border-b-2 border-black h-0 mx-1 w-18"/> 03
              </p>
              <h1 className={`font-bold text-4xl tracking-wider ${notoSans.className} pb-8`}>DAILY LEDGER</h1>
              <p className={`${notoSerifJP.className} font-medium`}>毎朝、フレッシュで新しい日次台帳をお届けすることにこだわっています<br />—目に楽しいモダンな美学で丁寧に作られており、フォロワー全員と共有<br />したくなるほど忘れられない体験を提供します。</p>
            </div>
          </div>
          
          <div className="relative w-2/5 h-screen flex flex-row gap-4 overflow-hidden">
            <div className="w-1/2 flex flex-col gap-4 h-max pb-4 animate-carousel-up">
              {[...carouselCol1, ...carouselCol1].map((src, index) => (
                <div key={`col2-${index}`} className="relative w-full aspect-3/4 shrink-0">
                  <Image 
                    src={src} 
                    alt={`Product Col 1 - ${index}`} 
                    fill={true}
                    sizes="100vw"
                    className="object-cover rounded-sm relative" 
                  />
                </div>
              ))}
            </div>
            <div className="w-1/2 flex flex-col gap-4 animate-carousel-down h-max -mt-50">
              {[...carouselCol2, ...carouselCol2].map((src, index) => (
                <div key={`col1-${index}`} className="relative w-full aspect-3/4 shrink-0">
                  <Image 
                    src={src} 
                    alt={`Product Col 2 - ${index}`} 
                    fill ={true}
                    sizes="100vw"
                    className="object-cover rounded-sm relative" 
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full min-h-screen bg-black">

        </section>
      </main>
    </div>
  );
}
