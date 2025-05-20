import { Link } from "@tanstack/react-router";
import { ChevronRightIcon } from "lucide-react";
import { quickAccessLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export function QuickAccessLinks({ className }: { className?: string }) {
  return (
    <section className={cn("bg-card rounded-lg border p-3.5", className)}>
      <h2 className="mb-3.5 text-base">Your Quick Access</h2>
      <ul className="grid gap-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]">
        {quickAccessLinks.map((q, key) => (
          <li key={key}>
            <Button
              variant="secondary"
              className="group h-[2.8125rem] w-full flex-1 shrink-0 justify-between"
              asChild
            >
              <Link to={q.url}>
                <span className="flex items-center gap-2">
                  <span className="bg-primary inline-flex size-7 items-center justify-center rounded-full">
                    <q.icon className="text-primary-foreground size-4" />
                  </span>
                  <span className="text-foreground text-sm">{q.title}</span>
                </span>
                <ChevronRightIcon className="text-secondary-foreground group-hover:text-foreground" />
              </Link>
            </Button>
          </li>
        ))}
      </ul>
    </section>
  );
}
