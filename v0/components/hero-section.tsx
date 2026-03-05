import Image from "next/image"

export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-[#e6ecf3] to-[#f4e7dc] py-16 md:py-24">
      <div className="mx-auto w-[90%] max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="max-w-lg text-center md:text-left">
          <p className="text-[#1e4f8a] font-semibold text-sm uppercase tracking-wider mb-3">
            Плунжерные насосы Danau
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1f2d3d] leading-tight text-balance mb-5">
            Плунжерные насосы
          </h1>
          <p className="text-[#6b7b8d] text-lg mb-8 text-pretty">
            Качество и надежность, проверенное временем!
          </p>
          <a
            href="#catalog"
            className="inline-block bg-[#1e4f8a] text-[#ffffff] font-bold px-8 py-4 hover:opacity-90 transition-opacity text-sm uppercase tracking-wider"
          >
            Выбрать
          </a>
        </div>

        <div className="relative w-full max-w-md md:max-w-lg">
          <Image
            src="/images/hero-pump.jpg"
            alt="Плунжерный насос"
            width={600}
            height={450}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  )
}
