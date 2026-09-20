import Link from "next/link";
import { ArrowUpRight, Compass } from "lucide-react";
import { navItems, site } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/15 bg-pearl/95 backdrop-blur">
      <div className="container-page flex min-h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 font-serif text-xl font-bold text-ink">
          <span className="grid size-9 place-items-center border border-ink bg-ink text-pearl">
            <Compass size={18} aria-hidden="true" />
          </span>
          <span>{site.name}</span>
          <span className="hidden border-l border-ink/20 pl-3 font-sans text-[10px] font-bold uppercase text-ink/55 lg:inline">Ontario Trade Office</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-ink/75 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-wine">
              {item.label}
            </Link>
          ))}
        </nav>
        <Button href="/contact" className="hidden md:inline-flex">
          Open Desk <ArrowUpRight size={16} />
        </Button>
        <Button href="/contact" variant="secondary" className="md:hidden">
          Contact
        </Button>
      </div>
    </header>
  );
}
