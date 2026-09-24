import { cn } from "@/lib/utils";

interface Testimonial {
  quote: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "The flowers were stunning and arrived fresh. I will order again!",
    author: "— Sarah M.",
  },
  {
    quote: "Best arrangements in town. They made my anniversary special.",
    author: "— James K.",
  },
  {
    quote: "Friendly service and beautiful bouquets. Highly recommend!",
    author: "— Emily R.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 px-4 bg-neutral-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={cn(
                "p-6 bg-white rounded-lg shadow-sm border border-neutral-100"
              )}
            >
              <blockquote className="text-neutral-600 mb-4">{t.quote}</blockquote>
              <cite className="text-sm font-medium text-neutral-800 not-italic">{t.author}</cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
