import Image from 'next/image';
import { Mail, Heart } from 'lucide-react';
import { teamMembers } from '@/data/team';
import { partners, mediaPartners } from '@/data/partners';

export default function Footer() {
  return (
    <footer className="bg-teal text-white">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
        {/* About MCP */}
        <h2 className="font-display text-2xl font-bold sm:text-3xl">
          Về dự án Cha Mẹ Trắc Ẩn
        </h2>
        <p className="mt-4 max-w-3xl text-white/85 leading-relaxed">
          Mindful Compassionate Parenting Vietnam (MCP) là chương trình với các thực hành tỉnh thức và trắc ẩn tự thân giúp cha mẹ nhận diện, hiểu và thay đổi các cách phản ứng trong vô thức hoặc phản ứng do căng thẳng gây ra.
        </p>
        <p className="mt-4 max-w-3xl text-white/85 leading-relaxed">
          Chúng tôi tin rằng sự chuyển hóa bền vững bắt đầu từ bên trong - không hướng đến sự hoàn hảo, mà giúp cha mẹ thêm sự tự tin và bình an để có mặt cùng con.
        </p>

        {/* Organizing Team */}
        <div className="mt-12">
          <h3 className="font-display text-xl font-bold sm:text-2xl">
            Đội ngũ Cha mẹ trắc ẩn Việt Nam
          </h3>
          <p className="mt-1 max-w-3xl text-white/85">
            Ban Tổ Chức Một khoảng dừng.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-4">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center group">
                <div className="mx-auto h-32 w-32 overflow-hidden rounded-full border-2 border-white/40 shadow-[0_8px_20px_rgba(0,0,0,0.15)] transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={member.avatar}
                    alt={`Chân dung ${member.name}`}
                    width={128}
                    height={128}
                    loading="lazy"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <p className="mt-4 font-display text-base font-semibold">
                  {member.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact info */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-8 text-white/90">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-peach" />
              <a
                href="mailto:mcpgoesvietnam@gmail.com"
                className="underline underline-offset-4 hover:text-peach transition-colors"
              >
                mcpgoesvietnam@gmail.com
              </a>
            </p>

            <a
              href="https://www.facebook.com/mcpgoesvietnam"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-opacity hover:opacity-80"
            >
              <Image
                src="/images/logo-mcp.png"
                alt="Logo Cha mẹ Trắc ẩn"
                width={80}
                height={32}
                className="h-8 w-auto shrink-0 sm:h-10 object-contain"
              />
              <span className="font-display font-semibold">Cha mẹ Trắc ẩn</span>
            </a>
          </div>
        </div>

        {/* Companion Partners */}
        <div className="mt-12 border-t border-white/15 pt-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">
            Các đối tác đồng hành
          </p>
          <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="group relative flex h-32 items-center justify-center rounded-2xl bg-white px-4 py-3 shadow-[0_8px_20px_rgba(0,0,0,0.08)] ring-1 ring-inset ring-black/[0.06] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={220}
                  height={80}
                  loading="lazy"
                  className={`max-h-20 w-auto max-w-[200px] object-contain mix-blend-multiply ${
                    partner.scale || ''
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Media Partners */}
        <div className="mt-12 border-t border-white/15 pt-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">
            Các đối tác truyền thông
          </p>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {mediaPartners.map((partner) => (
              <div
                key={partner.id}
                className="relative flex h-36 items-center justify-center rounded-2xl bg-white px-6 py-5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] ring-1 ring-inset ring-black/[0.06] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={320}
                  height={140}
                  loading="lazy"
                  className={
                    partner.id === 'media-trac-an'
                      ? 'max-h-32 w-auto max-w-[280px] object-contain mix-blend-multiply scale-[1.7] transition-transform duration-300'
                      : 'max-h-24 w-auto max-w-[240px] object-contain mix-blend-multiply transition-transform duration-300'
                  }
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="mt-16 border-t border-white/20 pt-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            {/* Left: Brand summary */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/logo-mkd.png"
                  alt="Một Khoảng Dừng Logo"
                  width={120}
                  height={50}
                  className="h-10 w-auto object-contain"
                />
                <span className="font-display font-bold text-lg text-peach">
                  Một Khoảng Dừng 2026
                </span>
              </div>
              <p className="text-sm text-white/70 max-w-md">
                Cha Mẹ vững chãi – Con Trẻ an lành · Diễn ra trực tuyến vào 10 &amp; 11/10/2026 trên Zoom.
              </p>
            </div>

            {/* Right: Quick Links */}
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
              <a href="#gioi-thieu" className="hover:text-peach transition-colors">
                Giới thiệu
              </a>
              <a href="#dien-gia" className="hover:text-peach transition-colors">
                Diễn giả
              </a>
              <a href="#lich-trinh" className="hover:text-peach transition-colors">
                Lịch trình
              </a>
              <a href="#qua-tang" className="hover:text-peach transition-colors">
                Quà tặng
              </a>
              <a href="#cam-nhan" className="hover:text-peach transition-colors">
                Cảm nhận
              </a>
              <a href="#dang-ky" className="hover:text-peach transition-colors font-semibold text-peach">
                Đăng ký
              </a>
            </nav>
          </div>

          {/* Copyright & Disclaimer */}
          <div className="mt-8 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
            <p>
              © 2026 Một Khoảng Dừng. Tổ chức bởi Ban Dự Án Cha Mẹ Trắc Ẩn Việt Nam (MCP).
            </p>
            <p className="flex items-center gap-1.5">
              <span>Được xây dựng với sự thấu cảm &amp; trân trọng</span>
              <Heart className="h-3.5 w-3.5 text-terracotta fill-terracotta inline" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
