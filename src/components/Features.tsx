import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export function Features() {
  const features = [
    { icon: Check, title: 'Fresh daily blooms', desc: 'Hand-picked every morning' },
    { icon: Check, title: 'Local & organic', desc: 'Grown with care nearby' },
    { icon: Check, title: 'Same-day delivery', desc: 'Free in city center' },
  ]

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Why choose us?</h2>
          <p className="text-muted-foreground">We care about every stem.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map(f => (
            <Card key={f.title} className="border-0 shadow-md">
              <CardContent className="pt-6 space-y-3">
                <f.icon className="h-8 w-8 text-teal-600" />
                <h3 className="font-semibold text-lg">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            View our catalog
          </Button>
        </div>
      </div>
    </section>
  )
}
