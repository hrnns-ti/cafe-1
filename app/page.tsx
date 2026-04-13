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

const rowImage1 = [
  '/section-5/row-1.jpg',
  '/section-5/row-2.jpg',
  '/section-5/row-3.jpg',
  '/section-5/row-4.jpg',
  '/section-5/row-5.jpg',
]

const rowImage2 = [
  '/section-5/row-6.jpg',
  '/section-5/row-7.jpg',
  '/section-5/row-8.jpg',
  '/section-5/row-9.jpg',
  '/section-5/row-10.jpg',
]

export default function Home() {
  
  const [currentBG, setCurrentBG] = useState(0)

  const rows = [rowImage1, rowImage2]

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
                    sizes="full"
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
                    sizes="full"
                    className="object-cover rounded-sm relative" 
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* section 3 */}
        <section className="relative w-full h-[48vh] flex justify-center z-20 items-center">
          <Image 
            src={'/section-3/background.jpg'}
            alt="Background"
            fill={true}
            priority={true}

            className="saturate-80 object-cover"
          />
          <div className="absolute inset-0 bg-black/70 w-full h-full"></div>
          <div className="relative flex flex-row gap-18 w-fit items-center justify-center">
            <Image 
              src={'/section-3/content.jpg'}
              width={300}
              height={300}
              alt="content"

              className=""
            />
            <div className={`flex flex-col gap-6 ${notoSerifJP.className} text-white font-light text-xl w-3/8 bg-black/5`}>
              <p className="">日本のカフェにまつわる興味深い事実</p>
              <p className="">明るい挨拶「いらっしゃいませ」は、日本独特のおもてなしの伝統で、カフェに入る際に客は形式的な言葉で返答する必要はなく、にっこりとした笑顔や軽い会釈をするだけで礼を示す、というものです。</p>
            </div>
          </div>
        </section>

        {/* section 4 */}
        <section className="relative w-full h-4/7">
          <div className="h-full w-full">
            <h1 className={`text-[20rem] rotate-90 absolute top-10 -left-57 font-bold opacity-35 select-none ${notoSerifJP.className}`}>場所</h1>
            <div className="flex flex-col justify-between py-8 px-4 gap-92">
              <p className={`text-right ${notoSerifJP.className}`}>街の中心にある静かな一角。上質なコーヒーを一杯楽しむ、心を豊かに<br />する空間。私たちの扉はいつでもあなたに開かれています。</p>
              <div className="flex flex-col items-end gap-4">
                <p className={`flex ${notoSerifJP.className} items-center font-black`}>おはよう 02  
                  <span className="border-b-2 border-black h-0 mx-1 w-18"/> 03
                </p>
                <h1 className="text-4xl font-bold">RIVARNO JOURNAL</h1>
                <p className={`text-right w-2xl font-medium ${notoSerifJP.className}`}>一杯ごとに、献身と細部へのこだわりの物語が語られます。私たちは現代的な抽出技術と厳選したコーヒー豆を組み合わせ、訪れるたびに味わいと空間の芸術的な雰囲気の両面で心に残る印象を残します</p>
              </div>
            </div>
          </div>
        </section>

        {/* section 5 */}
        <section className="relative w-full h-3/7 overflow-hidden">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className={`${rowIndex %2 !== 0 ? '-ml-35' : ''} bg-black flex flex-row w-full h-full`}>
              {[...row, ...row].map((src, imgIndex) => (
                <Image
                  key={imgIndex}
                  src={src}
                  alt={`Image ${rowIndex}-${imgIndex}`}
                  width={200}
                  height={100}

                  className="object-cover w-70 h-50 shrink-0"
                />
              ))}
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
