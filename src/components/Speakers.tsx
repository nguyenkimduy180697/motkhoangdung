import Image from 'next/image';
import { speakers } from '@/data/speakers';

export default function Speakers() {
  return (
    <section id="dien-gia" className="bg-peach">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="reveal visible">
          <h2 className="text-center font-display text-3xl font-bold text-teal sm:text-4xl">
            Bạn sẽ được đồng hành bởi các diễn giả
          </h2>

          <div className="mt-12 grid gap-6 [grid-template-columns:repeat(auto-fill,minmax(260px,1fr))]">
            {speakers.map((speaker) => (
              <article
                key={speaker.id}
                className="rounded-3xl bg-cream/80 p-7 text-center shadow-[0_10px_30px_rgba(74,63,53,0.07)] transition-transform duration-300 hover:-translate-y-1.5 hover:bg-cream"
              >
                <div className="mx-auto h-28 w-28 overflow-hidden rounded-full border-2 border-terracotta/30 shadow-[0_8px_20px_rgba(74,63,53,0.12)]">
                  <Image
                    src={speaker.avatar}
                    alt={`Chân dung diễn giả ${speaker.name}`}
                    width={112}
                    height={112}
                    loading="lazy"
                    className="h-full w-full object-cover object-top"
                  />
                </div>

                <h3 className="mt-5 font-display text-base font-bold text-terracotta sm:text-lg">
                  {speaker.name}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-ink/75">
                  {speaker.bio}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
