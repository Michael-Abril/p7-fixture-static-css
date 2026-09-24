import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const flowerCardVariants = cva(
  "rounded-xl border bg-card text-card-foreground shadow transition-colors hover:bg-accent hover:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "",
        outline: "border-2 border-transparent hover:border-ring/50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface FlowerCardProps
     extends
 VariantProps<typeof flowerCardVariants> {
  title: string;
  price: string;
  description: string;
  emoji: string;
}

export function FlowerCard({
  className,
  variant,
  title,
  price,
  description,
  emoji,
}: FlowerCardProps) {
  return (
    <div className={cn(flowerCardVariants({ variant }), className)}>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold leading-none tracking-tight">{title}</h3>
          <span className="text-2xl">{emoji}</span>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-xl font-bold">{price}</span>
          <button className="rounded-md bg-primary px-3 py-1 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
