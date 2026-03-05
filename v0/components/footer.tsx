import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer id="contacts" className="bg-[#1f2d3d] text-[#ffffff] py-12">
      <div className="mx-auto w-[90%] max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">Грандмакс</h3>
            <p className="text-[#ffffff]/60 text-sm leading-relaxed">
              Ведущий поставщик современного насосного оборудования и комплектующих на рынке.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              Навигация
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                { label: "Каталог", href: "/product" },
                { label: "Компания", href: "#about" },
                { label: "Оплата и доставка", href: "#delivery" },
                { label: "Контакты", href: "#contacts" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#ffffff]/60 hover:text-[#ffffff] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              Контакты
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="tel:+79052673080"
                  className="flex items-center gap-2 text-[#ffffff]/60 hover:text-[#ffffff] transition-colors text-sm"
                >
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  +7 (905) 267-30-80
                </a>
              </li>
              <li>
                <a
                  href="mailto:grndmx@yandex.ru"
                  className="flex items-center gap-2 text-[#ffffff]/60 hover:text-[#ffffff] transition-colors text-sm"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  grndmx@yandex.ru
                </a>
              </li>
              <li className="flex items-start gap-2 text-[#ffffff]/60 text-sm">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>{"г. санкт-петербург"}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#ffffff]/10 mt-10 pt-6 text-center">
          <p className="text-[#ffffff]/40 text-xs">
            {"© 2025 Грандмакс. Все права защищены."}
          </p>
        </div>
      </div>
    </footer>
  )
}
