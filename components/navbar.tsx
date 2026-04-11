'use client'

import { notoSerifJP } from "@/fonts/fonts"  
import { useEffect, useState } from "react";

export default function Navbar() {

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      // Pastikan kode berjalan di sisi client (browser)
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;

        // Logika: Jika scroll ke bawah DAN sudah melewati 50px dari atas
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setIsVisible(false); // Sembunyikan Navbar
        } 
        // Logika: Jika scroll ke atas
        else if (currentScrollY < lastScrollY) {
          setIsVisible(true);  // Munculkan Navbar
        }

        // Simpan posisi scroll terakhir untuk dibandingkan di scroll berikutnya
        setLastScrollY(currentScrollY);
      }
    }

    // Tambahkan event listener saat komponen dimuat
    window.addEventListener("scroll", handleScroll);

    // Cleanup: Hapus event listener saat komponen dilepas (best practice!)
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[lastScrollY])

  return (
    <nav className={`
      my-4 z-50 flex text-white w-full justify-between fixed top-0 left-0
      transition-transform duration-500 ease-in-out
      ${isVisible ? "translate-y-0" : "-translate-y-full"}
      ${lastScrollY < 0 ? "mix-blend-normal" : "mix-blend-difference" }
    `}>
      <div className="px-12 py-6 gap-6 flex items-center"> 
        <a href="" className={`${notoSerifJP.className} hover:bg-white hover:text-black transition-all duration-500 py-1.5 px-13 border rounded-full`}>製品</a>
        <a href="" className={`${notoSerifJP.className} hover:bg-white hover:text-black transition-all duration-500 py-1.5 px-13 border rounded-full`}>製品</a>
        <a href="" className={`${notoSerifJP.className} hover:bg-white hover:text-black transition-all duration-500 py-1.5 px-13 border rounded-full`}>製品</a>
        <a href="" className={`${notoSerifJP.className} hover:bg-white hover:text-black transition-all duration-500 py-1.5 px-13 border rounded-full`}>製品</a>
      </div>

      <h1 className={`${notoSerifJP.className}  text-4xl font-black px-12 py-6`}>キズカフェ</h1>
    </nav>
  )
}
