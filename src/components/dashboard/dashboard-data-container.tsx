import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import MaximizeIcon from "@/assets/icons/maximize.svg?react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export function DashboardDataContainer({
  title,
  content,
  className,
  hideDialog,
}: {
  content: React.ReactNode;
  title: string;
  className?: string;
  hideDialog?: boolean;
}) {
  return (
    <section
      className={cn("bg-card rounded-xl border lg:min-w-[300px]", className)}
    >
      <div className="mb-6 flex items-start justify-between gap-4 px-4 pt-4">
        <h2 className="text-card-foreground text-lg font-medium">{title}</h2>

        {!hideDialog && (
          <Dialog>
            <DialogTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                title="Maximize"
              >
                <MaximizeIcon className="text-input size-5" />
                <span className="sr-only">Maximize {title}</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="md:max-w-4xl">
              <DialogHeader className="mb-4">
                <DialogTitle className="text-card-foreground text-lg font-medium">
                  {title}
                </DialogTitle>
              </DialogHeader>
              {content}
            </DialogContent>
          </Dialog>
        )}
      </div>
      {content}
    </section>
  );
}
