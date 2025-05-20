import { quickAccessLinks } from "@/lib/constants";
import { Button } from "../ui/button";
import { Link } from "@tanstack/react-router";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export function QuickAccessLinks() {
  return (
    <section>
      <h2>Your Quick Access</h2>
      <div className="flex flex-wrap gap-2">
        {quickAccessLinks.map((q) => (
          <Button
            variant="secondary"
            className="group h-[2.8125rem] w-full max-w-[278px] flex-1 shrink-0"
            asChild
          >
            <Link to={q.url}>
              <span>
                <span className="bg-primary inline-flex size-7 items-center justify-center rounded-full">
                  <q.icon className="text-primary-foreground size-4" />
                </span>
                <span>{q.title}</span>
              </span>
              <ChevronRightIcon className="text-secondary-foreground group-hover:text-foreground" />
            </Link>
          </Button>
        ))}
      </div>
    </section>
  );
}
