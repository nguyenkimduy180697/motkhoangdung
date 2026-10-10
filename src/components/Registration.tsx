import { Gift, Video } from 'lucide-react';

export default function Registration() {
  return (
    <section id="dang-ky" className="bg-cream">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="reveal visible">
          <h2 className="text-center font-display text-3xl font-bold text-teal sm:text-4xl">
            Tham dự hoàn toàn miễn phí
          </h2>
          <p className="mt-4 text-center text-ink/75">
            Chúng tôi muốn không gian này mở ra cho tất cả mọi người.
          </p>

          {/* 2 Price Cards */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* Direct Participation */}
            <div className="rounded-[28px] bg-white p-8 text-center shadow-[0_16px_40px_rgba(74,63,53,0.08)] sm:p-10 border border-ink/5 transition-transform duration-300 hover:-translate-y-1">
              <div className="flex justify-center text-terracotta">
                <Gift className="h-10 w-10" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-teal sm:text-2xl">
                Tham dự trực tiếp
              </h3>
              <p className="mt-3 font-poster text-5xl italic text-terracotta sm:text-6xl">
                Miễn phí
              </p>
              <p className="mx-auto mt-4 max-w-[16rem] text-sm leading-relaxed text-ink/70">
                Hai ngày trọn vẹn trên Zoom, dành cho cộng đồng.
              </p>
            </div>

            {/* Recording Option */}
            <div className="rounded-[28px] bg-white p-8 text-center shadow-[0_16px_40px_rgba(74,63,53,0.08)] sm:p-10 border border-ink/5 transition-transform duration-300 hover:-translate-y-1">
              <div className="flex justify-center text-terracotta">
                <Video className="h-10 w-10" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-teal sm:text-2xl">
                Recording sau sự kiện
              </h3>
              <p className="mt-3 font-poster text-5xl italic text-terracotta sm:text-6xl">
                Tùy tâm
              </p>
              <p className="mx-auto mt-4 max-w-[16rem] text-sm leading-relaxed text-ink/70">
                Số tiền thu được để phục vụ vận hành các hoạt động cộng đồng không thu phí.
              </p>
            </div>
          </div>

          {/* Closing Invitation Banner */}
          <div className="mt-16 rounded-[28px] bg-peach px-6 py-14 text-center sm:px-12 shadow-sm border border-terracotta/10">
            <h3 className="font-display text-2xl font-bold text-teal sm:text-3xl">
              Hãy dành cho chính mình một khoảng dừng.
            </h3>

            <div className="mt-6 space-y-2 font-poster text-2xl italic text-ink/80 sm:text-3xl">
              <p>Để chậm lại.</p>
              <p>Để tự chăm sóc.</p>
              <p>Để kết nối.</p>
              <p>Để thêm vững chãi trên hành trình làm cha mẹ đầy ý nghĩa.</p>
            </div>

            <p className="mt-6 text-ink/70">Chỉ cần hiện diện, như bạn đang là.</p>

            <div className="mt-10">
              <a
                href="https://luma.com/2partqi8"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta px-12 py-5 text-lg"
              >
                Đăng ký ngay - miễn phí
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
