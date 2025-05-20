import { quickAccessLinks } from "@/lib/constants";
import { Button } from "../ui/button";
import { Link } from "@tanstack/react-router";
import { ChevronRightIcon } from "lucide-react";

export function QuickAccessLinks() {
  return (
    <section className="bg-card rounded-lg border p-3.5">
      <h2 className="mb-3.5 text-base">Your Quick Access</h2>
      <div className="flex flex-wrap gap-2">
        {quickAccessLinks.map((q) => (
          <Button
            variant="secondary"
            className="group h-[2.8125rem] w-full max-w-[278px] flex-1 shrink-0 justify-between"
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
        ))}
      </div>
    </section>
  );
}
