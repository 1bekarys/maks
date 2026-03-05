import { Quote } from "lucide-react"

export function ReviewsSection() {
  return (
    <section className="bg-[#f5f6f8] py-16 md:py-20">
      <div className="mx-auto w-[90%] max-w-[1200px]">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-[#1f2d3d]">
            Отзывы наших клиентов
          </h2>
          <a
            href="#"
            className="text-sm font-semibold text-[#1e4f8a] hover:underline uppercase tracking-wider"
          >
            Все отзывы
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Николай Горностаев",
              text: "Приобрел насос высокого давления около месяца назад.",
            },
            {
              name: "Алексей Дмитриев",
              text: "Отличный насос, сосет каждый день.",
            },
            {
              name: "Марина Соколова",
              text: "Заказывала. Обязательно вернусь за новыми покупками!",
            },
          ].map((review) => (
            <div
              key={review.name}
              className="bg-card border border-border rounded-lg p-6 relative"
            >
              <Quote className="h-8 w-8 text-[#1e4f8a]/20 mb-4" />
              <p className="text-[#6b7b8d] leading-relaxed mb-6 text-sm">
                {review.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1e4f8a]/10 flex items-center justify-center">
                  <span className="text-[#1e4f8a] font-bold text-sm">
                    {review.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <p className="font-semibold text-[#1f2d3d] text-sm">{review.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
