import { Button } from "@/components/ui/button"
import type { CtaText } from "@/types/product"

interface CtaSectionProps {
  ctaText: CtaText
  price: number
}

export default function CtaSection({ ctaText, price }: CtaSectionProps) {
  return (
    <section className="py-12 bg-blue-600">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <span className="text-3xl font-bold text-white">৳{price.toLocaleString()}</span>
          </div>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
            {ctaText.name}
          </Button>
        </div>
      </div>
    </section>
  )
}
