import { scheduleDays } from '@/data/schedule';
import { GlassWater } from 'lucide-react';

export default function Schedule() {
  const day1 = scheduleDays[0];
  const day2 = scheduleDays[1];

  return (
    <section id="lich-trinh" className="bg-cream">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="reveal visible">
          {/* Header */}
          <div className="text-center">
            <span className="inline-block rounded-full border border-terracotta/30 bg-peach px-7 py-2 text-xs font-bold uppercase tracking-[0.25em] text-terracotta">
              Lịch trình dự kiến
            </span>
            <h2 className="mt-6 font-display text-3xl font-bold text-teal sm:text-5xl">
              Lịch trình hai ngày
            </h2>
          </div>

          <div className="mt-14 border-t border-ink/15">
            {/* Day 1: 10/10 */}
            {day1.sessions.map((session) => (
              <article
                key={session.id}
                className="group grid grid-cols-[auto_1fr] items-start gap-5 border-b border-ink/15 py-8 sm:grid-cols-[10rem_1fr_1.5fr_auto] sm:gap-8 transition-colors hover:bg-peach/10"
              >
                <div className="shrink-0">
                  <div className="font-poster text-4xl italic leading-[0.9] tracking-tight text-teal sm:text-[4.25rem]">
                    {day1.date}
                  </div>
                  <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-ink/50">
                    {day1.dayLabel}
                  </div>
                  <div className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-terracotta">
                    {session.time}
                  </div>
                </div>

                <div className="min-w-0">
                  <div className="font-display text-base font-bold leading-snug text-ink sm:text-lg">
                    {session.speaker}
                  </div>
                </div>

                <div className="col-span-2 min-w-0 sm:col-span-1">
                  <div className="font-poster font-bold italic leading-snug text-terracotta sm:text-lg">
                    {session.title}
                  </div>
                  <div className="mt-2 text-justify font-poster text-base italic text-ink/70 leading-relaxed">
                    {session.description}
                  </div>
                </div>

                <div className="hidden select-none font-poster text-[4rem] font-bold leading-none text-peachnum/70 sm:block w-16" />
              </article>
            ))}

            {/* Day 2 Banner: 11/10 */}
            <article className="group grid grid-cols-[auto_1fr] items-start gap-5 border-b border-ink/15 py-8 sm:grid-cols-[10rem_1fr_1.5fr_auto] sm:gap-8 bg-peach/20">
              <div className="shrink-0">
                <div className="font-poster text-4xl italic leading-[0.9] tracking-tight text-teal sm:text-[4.25rem]">
                  {day2.date}
                </div>
              </div>

              <div className="min-w-0 self-center">
                <div className="font-display text-lg font-bold leading-snug text-ink sm:text-xl">
                  {day2.dayLabel}
                </div>
              </div>

              <div className="hidden sm:block" />
              <div className="hidden select-none font-poster text-[4rem] font-bold leading-none text-peachnum/70 sm:block w-16" />
            </article>

            {/* Day 2 Sessions 01 - 07 */}
            {day2.sessions.map((session) => (
              <article
                key={session.id}
                className="group grid grid-cols-[auto_1fr] items-start gap-5 border-b border-ink/15 py-8 sm:grid-cols-[10rem_1fr_1.5fr_auto] sm:gap-8 transition-colors hover:bg-peach/10"
              >
                <div className="shrink-0">
                  <div className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-terracotta">
                    {session.time}
                  </div>
                </div>

                <div className="min-w-0">
                  <div className="font-display text-base font-bold leading-snug text-ink sm:text-lg flex items-center gap-2">
                    {session.speaker}
                    {session.hasCocktailIcon && (
                      <span className="text-xl" title="Ăn mừng">
                        🍹
                      </span>
                    )}
                  </div>
                </div>

                <div className="col-span-2 min-w-0 sm:col-span-1">
                  <div className="font-poster font-bold italic leading-snug text-terracotta sm:text-lg">
                    {session.title}
                    {session.subtitle && (
                      <span className="block text-sm sm:text-base font-normal text-terracotta/80 mt-0.5">
                        {session.subtitle}
                      </span>
                    )}
                  </div>
                  <div className="mt-2 text-justify font-poster text-base italic text-ink/70 leading-relaxed">
                    {session.description}
                  </div>
                </div>

                <div className="hidden select-none font-poster text-[4rem] font-bold leading-none text-peachnum/70 sm:block w-16 text-right">
                  {session.sessionNumber}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
