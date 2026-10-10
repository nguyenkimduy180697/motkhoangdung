'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = testimonials.length;

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  }, [total]);

  // Autoplay timer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  // Touch Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diffX = touchStartX.current - touchEndX.current;
    if (diffX > 50) {
      handleNext();
    } else if (diffX < -50) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const current = testimonials[currentIndex];

  return (
    <section id="cam-nhan" className="bg-peach">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="reveal visible">
          <h2 className="text-center font-display text-3xl font-bold text-teal sm:text-4xl">
            Những người đã tham gia các hoạt động của Cha mẹ Trắc ẩn chia sẻ…
          </h2>

          <div
            className="mx-auto mt-12 max-w-3xl"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="relative"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Card */}
              <article className="min-h-[16rem] rounded-[28px] bg-cream/80 p-8 text-center shadow-[0_10px_30px_rgba(74,63,53,0.07)] sm:min-h-[14rem] sm:p-12 transition-all duration-300">
                <div className="font-poster text-6xl leading-none text-peachnum/80 sm:text-7xl select-none" aria-hidden="true">
                  ”
                </div>
                <p className="relative z-10 -mt-3 text-base leading-relaxed text-ink/80 sm:text-lg min-h-[5rem]">
                  {current.quote}
                </p>
                <p className="mt-6 font-display text-sm font-bold uppercase tracking-[0.18em] text-teal">
                  - {current.author}
                </p>
                <p className="text-xs text-ink/50 mt-1">{current.role}</p>
              </article>

              {/* Controls */}
              <div className="mt-6 flex items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Cảm nhận trước"
                  className="grid h-10 w-10 place-items-center rounded-full bg-cream/80 text-terracotta shadow-[0_4px_12px_rgba(74,63,53,0.1)] transition hover:-translate-x-0.5 hover:bg-white active:scale-95"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <div className="flex gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentIndex(idx)}
                      aria-label={`Chuyển đến cảm nhận ${idx + 1}`}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        idx === currentIndex
                          ? 'w-6 bg-terracotta'
                          : 'w-2.5 bg-terracotta/30 hover:bg-terracotta/50'
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Cảm nhận sau"
                  className="grid h-10 w-10 place-items-center rounded-full bg-cream/80 text-terracotta shadow-[0_4px_12px_rgba(74,63,53,0.1)] transition hover:translate-x-0.5 hover:bg-white active:scale-95"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
