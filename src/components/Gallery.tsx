import { cn } from '@/lib/utils';
import { Flower } from 'lucide-react';

export function Gallery() {
  const items = [
    { title: 'Fresh Blooms', desc: 'Locally sourced flowers', color: 'from-pink-400 to-rose-400' },
    { title: 'Custom Arrangements', desc: 'Made to order', color: 'from-teal-400 to-emerald-400' },
    { title: 'Same-Day Delivery', desc: 'Available in metro areas', color: 'from-purple-400 to-indigo-400' },
  ];

  return (
    <section id="gallery" className="py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">Our Collections</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={i}
              className={cn(
                'rounded-lg p-6 text-center text-white shadow-lg transition hover:scale-105',
                `bg-gradient-to-br ${item.color}`
              )}
            >
              <Flower className="mx-auto h-12 w-12" />
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="text-sm opacity-90">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
