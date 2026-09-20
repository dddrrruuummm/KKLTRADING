import type { Metadata } from "next";
import { ProductGrid } from "@/components/sections";

export const metadata: Metadata = {
  title: "Trade Index",
  description: "KKL TRADING focus areas for opportunity discovery, sourcing, quality, coordination, fulfillment, and commercial partnership."
};

export default function ShowcasePage() {
  return <ProductGrid />;
}
