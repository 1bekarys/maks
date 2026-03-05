import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="bg-card py-16 md:py-20">
      <div className="mx-auto w-[90%] max-w-[1200px] flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <div className="rounded-xl overflow-hidden">
            <Image
              src="/images/about-warehouse.jpg"
              alt="Склад Грандмакс"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <p className="text-[#1e4f8a] font-semibold text-sm uppercase tracking-wider mb-3">
            Немного о нас
          </p>
          <h2 className="text-3xl font-bold text-[#1f2d3d] mb-4 text-balance">
            Уверенно смотрим в будущее!
          </h2>
          <p className="text-[#6b7b8d] leading-relaxed mb-6">
            {
              "ГРАНДМАКС — ведущий поставщик современного насосного оборудования и комплектующих на рынке. Наша компания специализируется на комплексных решениях для промышленного и бытового применения, предлагая широкий ассортимент продукции от ведущих мировых производителей."
            }
          </p>
          <a
            href="#info"
            className="inline-block bg-[#1e4f8a] text-[#ffffff] font-bold px-8 py-3 hover:opacity-90 transition-opacity text-sm uppercase tracking-wider"
          >
            Подробнее
          </a>
        </div>
      </div>
    </section>
  )
}
