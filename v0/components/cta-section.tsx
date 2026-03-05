"use client"

import { useState } from "react"
import { CallbackModal } from "./callback-modal"

export function CtaSection() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <section className="bg-[#1e4f8a] py-16 md:py-20">
        <div className="mx-auto w-[90%] max-w-[1200px] text-center">
          <h2 className="text-3xl font-bold text-[#ffffff] mb-4 text-balance">
            Остались вопросы?
          </h2>
          <p className="text-[#ffffff]/70 max-w-xl mx-auto mb-8 text-pretty">
            Напишите нам или закажите звонок — мы поможем. Выслушаем ваши задачи для бизнеса, и на их основе предложим варианты развития.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button
              onClick={() => setShowModal(true)}
              className="bg-[#ffffff] text-[#1e4f8a] font-bold px-8 py-3 hover:bg-[#ffffff]/90 transition-opacity text-sm uppercase tracking-wider cursor-pointer"
            >
              Заказать звонок
            </button>
            <a
              href="mailto:grndmx@yandex.ru"
              className="border border-[#ffffff] text-[#ffffff] font-bold px-8 py-3 hover:bg-[#ffffff]/10 transition-colors text-sm uppercase tracking-wider"
            >
              Задать вопрос
            </a>
          </div>
        </div>
      </section>
      <CallbackModal open={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}
