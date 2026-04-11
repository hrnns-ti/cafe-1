'use client'

import { notoSerifJP } from "@/fonts/fonts"  
import { useEffect, useState } from "react";

export default function Navbar() {

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;

        if (currentScrollY > window.innerHeight - 100) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
        
        const scrollTolerance = 25; // Harus scroll min 15px baru bereaksi
        const scrollDelta = Math.abs(currentScrollY - lastScrollY);

        if (scrollDelta >= scrollTolerance) {
          if (currentScrollY > lastScrollY && currentScrollY > 50) {
            setIsVisible(false);
          } else if (currentScrollY < lastScrollY) {
            
            setIsVisible(true);
          }
        
          setLastScrollY(currentScrollY);
        }
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`
      z-50 flex text-white duration-300 w-full justify-between fixed top-0 left-0
      transition-all ease-in-out
      ${isVisible ? "translate-y-0" : "-translate-y-full"}
      ${isScrolled ? "bg-gray-950 backdrop-blur-md text-black" : "bg-transparent duration-700 text-white"}
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
