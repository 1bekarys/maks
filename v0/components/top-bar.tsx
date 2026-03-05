"use client"

import { Phone, Mail } from "lucide-react"
import { useState } from "react"
import { CallbackModal } from "./callback-modal"

export function TopBar() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className="bg-secondary text-foreground text-sm">
        <div className="mx-auto w-[90%] max-w-[1200px] flex items-center justify-between flex-wrap gap-3 py-3">
          <div className="text-muted-foreground">
            Широкий ассортимент насосного оборудования
          </div>
          <div className="flex items-center gap-6 flex-wrap">
            <a href="tel:+79052673080" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              +7 (905) 267-30-80
            </a>
            <a href="mailto:grndmx@yandex.ru" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <Mail className="h-4 w-4" />
              grndmx@yandex.ru
            </a>
            <button
              onClick={() => setShowModal(true)}
              className="border border-primary text-primary font-semibold px-5 py-2 bg-transparent hover:bg-primary hover:text-primary-foreground transition-colors text-sm cursor-pointer"
            >
              ЗАКАЗАТЬ ЗВОНОК
            </button>
          </div>
        </div>
      </div>
      <CallbackModal open={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}
