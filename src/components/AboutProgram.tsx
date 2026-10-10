import { Laptop, Calendar, Heart, X, Check } from 'lucide-react';

export default function AboutProgram() {
  return (
    <section className="bg-peach">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="reveal visible">
          <h2 className="mb-10 text-center font-display text-2xl font-bold text-teal sm:text-3xl">
            Chuỗi hội thảo &quot;Một Khoảng Dừng&quot;
          </h2>

          {/* 3 Pillars */}
          <div className="mb-12 grid gap-8 border-y border-terracotta/20 py-10 sm:grid-cols-3">
            <div className="flex flex-col items-center px-4 text-center">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-cream shadow-sm">
                <Laptop className="h-6 w-6 text-terracotta" />
              </div>
              <p className="mt-5 font-poster text-base italic leading-snug text-teal">
                Là chuỗi hội thảo trực tuyến không thu phí
              </p>
            </div>

            <div className="flex flex-col items-center border-y border-terracotta/20 px-4 py-8 text-center sm:border-x sm:border-y-0 sm:py-0">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-cream shadow-sm">
                <Calendar className="h-6 w-6 text-terracotta" />
              </div>
              <p className="mt-5 font-poster text-base italic leading-snug text-teal">
                Diễn ra hàng năm do đội ngũ Cha Mẹ Trắc Ẩn Việt Nam (MCP) tổ chức
              </p>
            </div>

            <div className="flex flex-col items-center px-4 text-center">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-cream shadow-sm">
                <Heart className="h-6 w-6 text-terracotta" />
              </div>
              <p className="mt-5 font-poster text-base italic leading-snug text-teal">
                Mong muốn tạo ra một không gian để ba mẹ được tạm ngừng lại giữa cuộc sống bận rộn để được là chính mình, được hiện diện, được chăm sóc, được thấu hiểu.
              </p>
            </div>
          </div>

          {/* 2 Contrast Cards */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* What it is NOT */}
            <div className="rounded-3xl bg-cream p-8 shadow-[0_10px_30px_rgba(74,63,53,0.06)] border border-terracotta/10">
              <h3 className="font-display text-xl font-bold text-ink">Không phải là...</h3>
              <ul className="mt-6 space-y-4 text-ink/80">
                <li className="flex gap-3">
                  <span className="mt-0.5 text-lg font-bold text-ink/40">×</span>
                  <span>Hội thảo để bạn học thêm kỹ năng nuôi dạy con</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 text-lg font-bold text-ink/40">×</span>
                  <span>Những lý thuyết xa vời, khó áp dụng</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 text-lg font-bold text-ink/40">×</span>
                  <span>Nơi bạn về với danh sách dài hơn cần làm</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 text-lg font-bold text-ink/40">×</span>
                  <span>Con đường trở thành cha mẹ hoàn hảo</span>
                </li>
              </ul>
            </div>

            {/* What it IS */}
            <div className="rounded-3xl bg-teal p-8 text-white shadow-[0_16px_40px_rgba(59,125,115,0.25)]">
              <h3 className="font-display text-xl font-bold leading-snug">
                Mà là tâm huyết của đội ngũ Cha mẹ trắc ẩn Việt Nam tạo ra để bạn có:
              </h3>
              <ul className="mt-6 space-y-4">
                <li className="flex gap-3">
                  <span className="mt-0.5 text-lg font-bold text-peach">✓</span>
                  <span>
                    <strong className="font-bold">Không gian để bạn thực sự dừng lại</strong>{' '}
                    <span className="text-white/85">- hít thở, lắng nghe chính mình</span>
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 text-lg font-bold text-peach">✓</span>
                  <span>
                    <strong className="font-bold">Góc nhìn thực tiễn</strong>{' '}
                    <span className="text-white/85">từ tâm lý học, giáo dục, tỉnh thức và trải nghiệm sống</span>
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 text-lg font-bold text-peach">✓</span>
                  <span>
                    <strong className="font-bold">Cảm giác được thấu hiểu</strong>{' '}
                    <span className="text-white/85">- và nhận ra mình không đơn độc</span>
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 text-lg font-bold text-peach">✓</span>
                  <span>
                    <strong className="font-bold">Những thực hành nhỏ</strong>{' '}
                    <span className="text-white/85">có thể mang về áp dụng ngay trong cuộc sống hàng ngày</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Slogans */}
          <div className="mx-auto mt-14 max-w-3xl space-y-4 text-center">
            <p className="text-lg">
              Vì chúng tôi tin rằng:{' '}
              <strong className="text-teal font-semibold">
                điều con trẻ cần chưa bao giờ là những người cha mẹ hoàn hảo mà là sự hiện diện an ổn của bạn.
              </strong>
            </p>
            <p className="font-poster text-2xl italic text-terracotta sm:text-3xl">
              Khi cha mẹ có một khoảng dừng, con trẻ sẽ có thêm một điểm tựa.
            </p>
            <p className="font-poster text-2xl italic text-terracotta sm:text-3xl">
              Khi cha mẹ vững chãi, con trẻ sẽ an lành.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
