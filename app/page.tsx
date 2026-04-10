'use client'

import Image from "next/image";
import { inter, notoSerifJP } from "@/fonts/fonts";
import { useState, useEffect } from "react";

import Navbar from "@/components/navbar";

const backgroundImages = [
  '/section-1/1.png',
  '/section-1/2.jpg',
  '/section-1/3.jpg'
]

export default function Home() {
  
  const [currentBG, setCurrentBG] = useState(0)
  const nextBG = (currentBG + 1) % backgroundImages.length

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBG((prevBG) => (prevBG + 1) % backgroundImages.length)
    }, 3000)

    return () => clearInterval(timer)
  },[])
  
  return (
    <div className="flex flex-col flex-1 bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full flex-col bg-white dark:bg-black sm:items-start">
        <Navbar />
        <div className="flex flex-col w-full py-36 px-16">
          {backgroundImages.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={`Background ${index + 1}`} 
              fill={true}
              objectFit="cover"
              priority={index === 0}
              className={`
                saturate-50 transition-opacity duration-1000 ease-in-out 
                ${index === nextBG ? "opacity-100 z-0" : "opacity-0 z-0"}
                ${index === currentBG ? "opacity-100 z-10" : "opacity-0 z-10"}
              `}
            />
          ))}
          <div className="flex flex-col py-6 select-none z-20 text-white w-full">
            <p className={`${inter.className} py-3 text-xs tracking-[6]`}>VOL. XXIV —— TOKYO EDITION</p>
            <h1 className={`${notoSerifJP.className} text-9xl font-black`}>デイリー</h1>
            <h1 className={`${notoSerifJP.className} text-9xl font-black`}>ブリュー。</h1>
            <p className={`${notoSerifJP.className} py-12 text-xl`}>日本の新聞紙の触覚的な厳格さと、朝の静か<br/>な注ぎの儀式に敬意を表して。</p>
          </div>
        </div>


        <div className="absolute bottom-0 w-full overflow-hidden z-20">
          <div className={`flex flex-row gap-2 text-xs m-4 font-semibold ${notoSerifJP.className}`}>
            <p className="px-4 py-2 rounded-full bg-white z-20">以来 12.02.1995</p>
            <p className="px-4 py-2 rounded-full bg-white z-20">Kizu Cafe (キズカフェ) は2026年にこれまでで20万人の来店客に達しました。</p>
          </div>
          <div className="flex whitespace-nowrap w-max animate-marquee bg-gray-900">
            <p className={`text-white ${notoSerifJP.className}`}>本日のスペシャル：シングルオリジン 京都抹茶 • 在庫状況：エチオピア産豆（少）• 新入荷：季節のいちごスフレ • 本日のスペシャル：シングルオリジン 京都抹茶 • 在庫状況：エチオピア産豆（少）• 新入荷：季節のいちごスフレ • シングルオリジン 京都抹茶 • 在庫状況</p>
            <p className={`text-white ${notoSerifJP.className}`}>本日のスペシャル：シングルオリジン 京都抹茶 • 在庫状況：エチオピア産豆（少）• 新入荷：季節のいちごスフレ • 本日のスペシャル：シングルオリジン 京都抹茶 • 在庫状況：エチオピア産豆（少）• 新入荷：季節のいちごスフレ • シングルオリジン 京都抹茶 • 在庫状況</p>
          </div>
        </div>
      </main>
    </div>
  );
}
