// app/cards/page.tsx

import { catalogItems } from "@/lib/data";
import { CatalogCard } from "@/components/catalog-card";

export default function CardsPage() {
  return (
    <div className="grid gap-6">
      <header>
        <h1 className="text-xl font-semibold text-balance">
          All Clubs, Sports, Events, and Competitions
        </h1>
        <p className="text-sm text-muted-foreground">
          Browse everything available right now.
        </p>
      </header>

      <section
        aria-label="All cards"
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
      >
        
        {catalogItems.map((item) => (
          <CatalogCard key={item.id} item={item} />
        ))}
      </section>
    </div>
  );
}
