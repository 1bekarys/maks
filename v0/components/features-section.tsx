import { ShieldCheck, Layers, Truck } from "lucide-react"

const features = [
  {
    icon: ShieldCheck,
    title: "Гарантия качества",
    description: "Весь товар сертифицирован",
  },
  {
    icon: Layers,
    title: "Оптимальный выбор",
    description: "Широкий ассортимент",
  },
  {
    icon: Truck,
    title: "Доставка в срок",
    description: "Оперативная доставка товара",
  },
]

export function FeaturesSection() {
  return (
    <section className="bg-card py-12 md:py-16">
      <div className="mx-auto w-[90%] max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div key={feature.title} className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-[#1e4f8a]/10 rounded-lg flex items-center justify-center">
              <feature.icon className="h-6 w-6 text-[#1e4f8a]" />
            </div>
            <div>
              <h3 className="font-bold text-[#1e4f8a] text-lg mb-1">
                {feature.title}
              </h3>
              <p className="text-[#6b7b8d] text-sm">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
