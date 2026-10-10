export default function TargetAudience() {
  const points = [
    'Bạn là cha mẹ - dù con còn nhỏ hay đã lớn',
    'Bạn là thầy cô, người làm giáo dục, người chăm sóc trẻ',
    'Bạn đang chăm sóc trẻ có nhu cầu đặc biệt và cần thêm sự nâng đỡ',
    'Bạn quan tâm đến sức khỏe tinh thần - của chính mình và của gia đình',
  ];

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="reveal visible">
          <h2 className="text-center font-display text-3xl font-bold text-teal sm:text-4xl">
            “Một Khoảng Dừng” dành cho bạn nếu...
          </h2>

          <div className="mx-auto mt-12 max-w-3xl rounded-3xl bg-white p-8 shadow-[0_16px_40px_rgba(74,63,53,0.08)] sm:p-10 border border-ink/5">
            <ul className="space-y-5">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="text-xl text-terracotta select-none" aria-hidden="true">
                    ✿
                  </span>
                  <span className="text-base sm:text-lg text-ink/90">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-auto mt-10 max-w-2xl space-y-3 text-center font-semibold text-ink/80 text-base sm:text-lg">
            <p>Chỉ cần bạn sẵn sàng dành hai ngày cho chính mình.</p>
            <p>
              Chỉ cần bạn mong muốn kết nối và học hỏi từ những người tin rằng “cha mẹ vững chãi, con trẻ an lành”.
            </p>
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://luma.com/2partqi8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta px-9 py-4 text-base sm:text-lg"
            >
              Đăng ký ngay - miễn phí
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
