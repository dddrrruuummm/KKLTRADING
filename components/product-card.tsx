import Image from "next/image";
import { products } from "@/lib/site";

type Product = (typeof products)[number];

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden border border-ink/15 bg-pearl transition hover:bg-mist">
      <div className="relative aspect-[4/3] bg-mist">
        <Image src={product.image} alt={`${product.name} product category`} fill className="object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <p className="text-xs font-bold uppercase text-wine">{product.category}</p>
        <h3 className="mt-2 font-serif text-2xl text-ink">{product.name}</h3>
        <p className="mt-3 text-sm leading-6 text-ink/65">{product.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span key={tag} className="border border-ink/15 px-2.5 py-1 text-xs font-semibold text-ink/65">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
