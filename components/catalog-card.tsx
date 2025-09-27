// components/catalog-card.tsx
"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import type { CatalogItem } from "@/lib/data";

export function CatalogCard({ item }: { item: CatalogItem }) {
  return (
    <Card className="group overflow-hidden shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:ring-1 hover:ring-primary/20">
      <div className="relative h-40 w-full">
        <Image
          src={
            item.imageUrl ||
            "/placeholder.svg?height=160&width=320&query=club image"
          }
          alt={item.imageAlt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(min-width: 768px) 320px, 100vw"
        />
      </div>
      <CardHeader className="gap-2">
        <Badge variant="secondary" className="w-fit capitalize">
          {item.type}
        </Badge>
        <CardTitle className="text-balance text-base">{item.title}</CardTitle>
        <CardDescription>{item.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <p className="text-xs text-muted-foreground">Leader: {item.leader}</p>
        <Button
          type="button"
          size="sm"
          className="transition-transform hover:-translate-y-0.5 active:translate-y-0"
          aria-label={`Join ${item.title}`}
          onClick={() =>
            toast({
              // 🚨 UPDATED: Toast message to include the club's title for clarity
              description: `Join request for "${item.title}" has been sent — You will be notified shortly.`,
            })
          }
        >
          Join Club
        </Button>
      </CardContent>
    </Card>
  );
}
