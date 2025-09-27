// app/my-clubs/page.tsx
"use client";

import { useMemo } from "react";
import Link from "next/link";
import { CatalogCard } from "@/components/catalog-card";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/hooks/use-auth";
import { catalogItems } from "@/lib/data";

export default function MyClubsPage() {
  const { user } = useAuth();

  
  const myClubs = useMemo(() => {
    if (!user) {
      return [];
    }

    
    return catalogItems.filter((item) => item.leaderId === user.id);
  }, [user]);

  if (!user) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-3xl font-bold">Please Log In</h1>
        <p className="text-muted-foreground">
          Log in to view the clubs you have joined.
        </p>
        <Link
          href="/login"
          className="mt-4 inline-block text-primary hover:underline"
        >
          Go to Login
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold">My Clubs</h1>
      <p className="text-muted-foreground">
        The clubs you are currently a leader of or have joined.
      </p>
      <Separator className="my-6" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {myClubs.length > 0 ? (
          // Use item.id as the key
          myClubs.map((item) => <CatalogCard key={item.id} item={item} />)
        ) : (
          <div className="col-span-full text-center py-10">
            <p className="text-lg text-muted-foreground">
              You haven't joined any clubs yet.
            </p>
            <p className="mt-2">
              <Link href="/cards" className="text-primary hover:underline">
                Browse all clubs
              </Link>{" "}
              to find one!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
