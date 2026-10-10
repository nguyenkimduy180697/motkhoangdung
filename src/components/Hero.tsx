import Image from 'next/image';
import { Calendar, Laptop, Gift } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-5xl px-5 pb-20 pt-8 sm:px-8 sm:pb-28 sm:pt-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12">
          {/* Left Column: Text & CTA */}
          <div className="text-center lg:text-left">
            <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-teal sm:text-sm">
              Chuỗi hội thảo trực tuyến không thu phí - dành cho cha mẹ &amp; người chăm sóc trẻ
            </p>

            <h1 className="mt-5 whitespace-normal font-display text-[clamp(2.2rem,7vw,3.75rem)] font-black leading-[1.05] tracking-tight text-terracotta lg:whitespace-nowrap lg:text-[3.25rem] xl:text-[3.75rem]">
              MỘT KHOẢNG DỪNG
              <br />
              2026
            </h1>

            <p className="mx-auto mt-3 font-poster text-[clamp(1.15rem,2.2vw,1.65rem)] italic leading-tight text-teal lg:mx-0">
              Cha Mẹ vững chãi – Con Trẻ an lành
            </p>

            {/* Badges */}
            <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-terracotta/40 bg-white/60 px-5 py-2.5 text-base font-semibold text-terracotta backdrop-blur-sm sm:px-6 sm:py-3 sm:text-lg shadow-sm">
                <Calendar className="h-5 w-5 text-terracotta" />
                10 &amp; 11/10/2026
              </span>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-terracotta/40 bg-white/60 px-5 py-2.5 text-base font-semibold text-terracotta backdrop-blur-sm sm:px-6 sm:py-3 sm:text-lg shadow-sm">
                <Laptop className="h-5 w-5 text-terracotta" />
                Zoom
              </span>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-terracotta/40 bg-white/60 px-5 py-2.5 text-base font-semibold text-terracotta backdrop-blur-sm sm:px-6 sm:py-3 sm:text-lg shadow-sm">
                <Gift className="h-5 w-5 text-terracotta" />
                Miễn phí
              </span>
            </div>

            {/* CTA Button */}
            <div className="mt-8 flex justify-center lg:justify-start">
              <a
                href="https://luma.com/2partqi8"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta px-10 py-5 text-lg"
              >
                Đăng ký giữ chỗ ngay
              </a>
            </div>
          </div>

          {/* Right Column: Brochure Visual with Blob */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
            <div className="absolute -inset-6 -z-10 blob-shape bg-gradient-to-br from-peach via-peachnum/40 to-peach/80 opacity-80" />
            <Image
              src="/images/brochure.png"
              alt="Minh hoạ ngôi nhà với trẻ nhỏ và cây cỏ"
              width={600}
              height={600}
              priority
              className="relative z-10 h-auto w-full object-contain drop-shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
