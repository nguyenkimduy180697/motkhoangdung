'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-[0_4px_20px_rgba(74,63,53,0.08)] border-b border-terracotta/15 py-2.5 sm:py-3'
          : 'bg-cream py-4 sm:py-6'
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 sm:px-8">
        {/* Logos container */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-8">
          <a href="#" className="transition-transform hover:scale-105">
            <Image
              src="/images/logo-mkd.png"
              alt="Logo Một Khoảng Dừng"
              width={140}
              height={70}
              priority
              className={`w-auto object-contain transition-all duration-300 ${
                isScrolled ? 'h-10 sm:h-12' : 'h-14 sm:h-18'
              }`}
            />
          </a>

          <div className="hidden items-center gap-4 sm:flex sm:gap-6 border-l border-ink/10 pl-4 sm:pl-6">
            <Image
              src="/images/logo-mcp.png"
              alt="Logo Cha Mẹ Trắc Ẩn Việt Nam"
              width={100}
              height={40}
              priority
              className={`w-auto object-contain transition-all duration-300 ${
                isScrolled ? 'h-8 sm:h-9' : 'h-9 sm:h-11'
              }`}
            />
            <Image
              src="/images/lean-in-vietnam.png"
              alt="Logo Lean In VietNam"
              width={100}
              height={40}
              priority
              className={`w-auto object-contain transition-all duration-300 ${
                isScrolled ? 'h-8 sm:h-9' : 'h-9 sm:h-11'
              }`}
            />
            <Image
              src="/images/pisel.png"
              alt="Logo PiSEL"
              width={100}
              height={40}
              priority
              className={`w-auto object-contain transition-all duration-300 ${
                isScrolled ? 'h-8 sm:h-9' : 'h-9 sm:h-11'
              }`}
            />
          </div>
        </div>

        {/* Quick Nav & CTA */}
        <div className="flex items-center gap-3 sm:gap-6">
          <nav className="hidden lg:flex items-center gap-5 text-sm font-semibold text-teal">
            <a href="#gioi-thieu" className="hover:text-terracotta transition-colors">
              Giới thiệu
            </a>
            <a href="#dien-gia" className="hover:text-terracotta transition-colors">
              Diễn giả
            </a>
            <a href="#lich-trinh" className="hover:text-terracotta transition-colors">
              Lịch trình
            </a>
            <a href="#qua-tang" className="hover:text-terracotta transition-colors">
              Quà tặng
            </a>
            <a href="#cam-nhan" className="hover:text-terracotta transition-colors">
              Cảm nhận
            </a>
          </nav>

          <a
            href="https://luma.com/2partqi8"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-cta whitespace-nowrap text-xs font-bold transition-all duration-300 sm:text-sm ${
              isScrolled ? 'px-4 py-2 sm:px-6 sm:py-2.5' : 'px-4 py-2 sm:px-5 sm:py-2.5'
            }`}
          >
            Đăng ký ngay
          </a>
        </div>
      </div>
    </header>
  );
}
