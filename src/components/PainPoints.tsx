export default function PainPoints() {
  const comparisons = [
    {
      wish: 'Bình tĩnh, dịu dàng với con',
      reality: 'Dễ nổi cáu hơn mình muốn',
    },
    {
      wish: 'Thực sự có mặt cùng con',
      reality: 'Ngồi cạnh nhau mà tâm trí ở nơi khác',
    },
    {
      wish: 'Hiểu con và kết nối sâu hơn',
      reality: 'Cảm thấy xa cách, không biết bắt đầu từ đâu',
    },
    {
      wish: 'Nghỉ ngơi và chăm sóc bản thân',
      reality: 'Luôn cảm thấy chưa làm đủ, chưa đủ tốt',
    },
  ];

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="reveal visible">
          <h2 className="text-center font-display text-3xl font-bold leading-snug text-teal sm:text-4xl">
            Làm cha mẹ giữa những bộn bề của cuộc sống, có khi nào bạn nhận ra...
          </h2>

          {/* Comparison Table */}
          <div className="mt-12 overflow-hidden rounded-3xl bg-white shadow-[0_16px_40px_rgba(74,63,53,0.08)] border border-ink/5">
            {/* Header */}
            <div className="grid grid-cols-2 bg-peach/70 text-center font-display text-base font-bold text-ink sm:text-lg">
              <div className="px-5 py-5">Điều mình mong muốn</div>
              <div className="border-l border-ink/10 px-5 py-5">Nhưng thực tế là</div>
            </div>

            {/* Rows */}
            {comparisons.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-2 border-t border-ink/10 text-sm sm:text-base transition-colors hover:bg-peach/10"
              >
                <div className="px-5 py-5 font-medium text-teal flex items-center justify-center text-center">
                  {item.wish}
                </div>
                <div className="border-l border-ink/10 px-5 py-5 text-ink/70 flex items-center justify-center text-center">
                  {item.reality}
                </div>
              </div>
            ))}
          </div>

          {/* Quote */}
          <blockquote className="mx-auto mt-12 max-w-2xl text-center font-poster text-2xl italic leading-relaxed text-terracotta sm:text-3xl">
            Làm cha mẹ vốn là một hành trình đầy ý nghĩa nhưng cũng không ít thử thách.
            <br />
            Và bạn không đơn độc trên hành trình này.
          </blockquote>
        </div>
      </div>
    </section>
  );
}
