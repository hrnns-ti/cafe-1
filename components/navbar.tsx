'use client'

import { notoSerifJP } from "@/fonts/fonts"

export default function Navbar() {
  return (
    <nav className="my-4 z-20 absolute flex text-white w-full justify-between">
      <div className="px-12 py-6 gap-6 flex items-center"> 
        <a href="" className={`${notoSerifJP.className} hover:bg-gray-950 transition-all duration-500 py-1.5 px-13 border rounded-full`}>製品</a>
        <a href="" className={`${notoSerifJP.className} hover:bg-gray-950 transition-all duration-500 py-1.5 px-13 border rounded-full`}>製品</a>
        <a href="" className={`${notoSerifJP.className} hover:bg-gray-950 transition-all duration-500 py-1.5 px-13 border rounded-full`}>製品</a>
        <a href="" className={`${notoSerifJP.className} hover:bg-gray-950 transition-all duration-500 py-1.5 px-13 border rounded-full`}>製品</a>
      </div>

      <h1 className={`${notoSerifJP.className}  text-4xl font-black px-12 py-6`}>キズカフェ</h1>
    </nav>
  )
}
