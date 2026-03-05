"use client"

import { X } from "lucide-react"
import { useState } from "react"

interface CallbackModalProps {
  open: boolean
  onClose: () => void
}

export function CallbackModal({ open, onClose }: CallbackModalProps) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [submitted, setSubmitted] = useState(false)

  if (!open) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setName("")
      setPhone("")
      onClose()
    }, 2000)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#000000]/50 p-4">
      <div className="bg-card rounded-lg shadow-2xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#6b7b8d] hover:text-[#1f2d3d] transition-colors cursor-pointer"
          aria-label="Закрыть"
        >
          <X className="h-5 w-5" />
        </button>

        <h3 className="text-xl font-bold text-[#1f2d3d] mb-2">Заказать звонок</h3>

        {submitted ? (
          <div className="py-8 text-center">
            <p className="text-green-600 font-semibold">Заявка отправлена!</p>
            <p className="text-[#6b7b8d] text-sm mt-2">
              Мы перезвоним вам в ближайшее время.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
            <div>
              <label htmlFor="cb-name" className="block text-sm font-medium text-[#1f2d3d] mb-1">
                Ваше имя
              </label>
              <input
                id="cb-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full border border-border rounded px-3 py-2.5 text-sm text-[#1f2d3d] bg-card focus:outline-none focus:ring-2 focus:ring-[#1e4f8a]"
                placeholder="Иван Иванов"
              />
            </div>
            <div>
              <label htmlFor="cb-phone" className="block text-sm font-medium text-[#1f2d3d] mb-1">
                Телефон
              </label>
              <input
                id="cb-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full border border-border rounded px-3 py-2.5 text-sm text-[#1f2d3d] bg-card focus:outline-none focus:ring-2 focus:ring-[#1e4f8a]"
                placeholder="+7 (___) ___-__-__"
              />
            </div>
            <button
              type="submit"
              className="bg-[#1e4f8a] text-[#ffffff] font-bold py-3 rounded hover:opacity-90 transition-opacity text-sm uppercase tracking-wider cursor-pointer"
            >
              Отправить
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
