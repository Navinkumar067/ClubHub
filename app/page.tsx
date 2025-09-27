// app/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { catalogItems } from "@/lib/data";
import { CatalogCard } from "@/components/catalog-card";
import { Users, Trophy, Layers } from "lucide-react";

export default function HomePage() {
  const firstRow = catalogItems.slice(0, 3);
  const secondRow = catalogItems.slice(3, 5);

  const heroImage = "/images/hero.jpg";

  return (
    <div className="grid gap-12">
      <section
        className="relative overflow-hidden rounded-lg text-white"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(74, 0, 224, 0.7), rgba(142, 45, 226, 0.7)), url('${heroImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto grid max-w-4xl gap-4 p-10 md:p-16 min-h-[320px] md:min-h-[440px] place-content-center">
          <h1 className="text-pretty text-3xl font-semibold md:text-5xl">
            Connect, Engage, Belong
          </h1>
          <p className="text-pretty text-sm md:text-lg opacity-95">
            Discover clubs, sports, events, and competitions. Find your
            community and grow your skills.
          </p>
          <div className="pt-2">
            
            <Button asChild>
              <Link href="/cards">Join Today</Link>
            </Button>
          </div>
        </div>
      </section>
      <section aria-label="Featured cards" className="grid gap-6">
        <header className="grid gap-2">
          <h2 className="text-2xl font-semibold text-balance">
            Discover Clubs, Sports, Events, and Competitions
          </h2>
          <p className="text-muted-foreground text-pretty">
            Join a community, build skills, and explore new interests at your
            campus.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {firstRow.map((item) => (
            <CatalogCard key={item.id} item={item} />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {secondRow.map((item) => (
            <CatalogCard key={item.id} item={item} />
          ))}

          <div className="hidden md:block" aria-hidden="true" />
        </div>

        <div className="flex justify-center pt-2">
          <Button asChild>
            <Link href="/cards" aria-label="View more clubs and events">
              View More
            </Link>
          </Button>
        </div>
      </section>

      {/* Stats section */}
      <section aria-label="Stats" className="bg-card rounded-lg p-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex items-center gap-4 rounded-lg border p-4 transition-all hover:-translate-y-1 hover:shadow-md hover:ring-1 hover:ring-primary/20">
            <div className="rounded-md bg-secondary p-3 text-primary">
              <Layers className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xl font-semibold">150+ Active Clubs</p>
              <p className="text-sm text-muted-foreground">
                Across interests and disciplines
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-lg border p-4 transition-all hover:-translate-y-1 hover:shadow-md hover:ring-1 hover:ring-primary/20">
            <div className="rounded-md bg-secondary p-3 text-primary">
              <Users className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xl font-semibold">5,000+ Members</p>
              <p className="text-sm text-muted-foreground">
                Students engaged and growing
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-lg border p-4 transition-all hover:-translate-y-1 hover:shadow-md hover:ring-1 hover:ring-primary/20">
            <div className="rounded-md bg-secondary p-3 text-primary">
              <Trophy className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xl font-semibold">300+ Events</p>
              <p className="text-sm text-muted-foreground">
                Workshops, meets, and fests
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section*/}
      <section
        id="cta"
        className="rounded-lg p-8 md:p-10 text-white"
        style={{
          background:
            "linear-gradient(90deg, rgba(74, 0, 224, 0.75) 0%, rgba(142, 45, 226, 0.75) 100%)",
        }}
      >
        <div className="mx-auto grid max-w-3xl gap-4">
          <h3 className="text-pretty text-2xl font-semibold">
            Stay in the loop
          </h3>
          <p className="text-sm md:text-base opacity-90">
            Get updates on new clubs and upcoming events straight to your inbox.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              className="h-10 w-full rounded-md px-3 text-foreground"
              placeholder="Enter your email"
              aria-label="Email address"
            />
            <Button className="shrink-0">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Contact section*/}
      <section
        id="contact"
        aria-label="Contact"
        className="rounded-lg border bg-card p-6 md:p-8"
      >
        <div className="mx-auto grid max-w-3xl gap-4">
          <header className="grid gap-2">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <p className="text-pretty text-sm text-muted-foreground">
              Have questions about clubs, events, or registration? Send us a
              message.
            </p>
          </header>
          <form className="grid gap-3">
            <div className="grid gap-2 sm:grid-cols-2">
              <input
                className="h-10 rounded-md border px-3"
                placeholder="Your name"
                aria-label="Your name"
              />
              <input
                type="email"
                className="h-10 rounded-md border px-3"
                placeholder="Email"
                aria-label="Email"
              />
            </div>
            <textarea
              className="min-h-28 rounded-md border p-3"
              placeholder="Message"
              aria-label="Message"
            />
            <div>
              <Button type="button">Send Message</Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
