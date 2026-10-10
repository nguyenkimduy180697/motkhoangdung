import Image from 'next/image';
import { gifts } from '@/data/gifts';

export default function Gifts() {
  return (
    <section className="relative overflow-hidden bg-peachnum">
      {/* Decorative outline circles */}
      <div
        className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full border-[3px] border-terracotta/30 select-none"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full border-[3px] border-terracotta/30 select-none"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="reveal visible">
          <div className="text-center">
            <span className="inline-block rounded-full border border-terracotta-deep/25 bg-cream/75 px-5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-terracotta-deep">
              Dành tặng người tham dự
            </span>
            <h2 className="mt-4 font-display text-2xl font-bold text-terracotta-deep sm:text-4xl">
              Quà tặng từ chương trình
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-10">
            {gifts.map((gift) => (
              <article
                key={gift.id}
                className="flex min-w-0 flex-col items-center text-center transition-transform hover:-translate-y-1"
              >
                <div className="aspect-square w-full max-w-32 overflow-hidden rounded-full bg-white p-2 shadow-[0_8px_20px_rgba(74,63,53,0.1)] ring-1 ring-inset ring-terracotta-deep/10 sm:max-w-36 sm:p-2.5 lg:max-w-40 flex items-center justify-center">
                  <Image
                    src={gift.image}
                    alt={gift.title}
                    width={160}
                    height={160}
                    loading="lazy"
                    className="h-full w-full rounded-full object-contain"
                  />
                </div>

                <h3 className="mt-3 max-w-52 font-body text-sm font-medium leading-tight text-terracotta-deep sm:mt-4 sm:text-base">
                  {gift.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
