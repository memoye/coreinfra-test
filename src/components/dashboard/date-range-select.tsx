import CalendarIcon from "@/assets/icons/calendar.svg?react";
import { addDays, format, isSameDay, isToday } from "date-fns";
import type { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { Separator } from "../ui/separator";

export function DateRangeSelect({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = useState<DateRange | undefined>({
    from: undefined,
    to: addDays(new Date(), 20),
  });

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "h-[1.875rem]! w-fit justify-start border py-2 text-left text-xs font-normal",
              !date && "text-muted-foreground",
            )}
          >
            <CalendarIcon className="mr-0.5 size-4" />
            {date?.from ? (
              date.to ? (
                isSameDay(date.to, date?.from) ? (
                  format(date.from, "d MMM yyyy")
                ) : (
                  <>
                    {format(date.from, "d MMM yyyy")} -{" "}
                    {format(date.to, "d MMM yyyy")}
                  </>
                )
              ) : isToday(date.from) ? (
                <span className="flex items-center gap-2.5">
                  <span className="font-medium">Today</span>
                  <Separator className="h-2.5!" orientation="vertical" />
                  {format(new Date(), "d MMM yyyy")}
                </span>
              ) : (
                format(date.from, "d MMM yyyy")
              )
            ) : (
              <span className="flex items-center gap-2.5">
                <span className="font-medium">Today</span>
                <Separator className="h-2.5!" orientation="vertical" />
                {format(new Date(), "d MMM yyyy")}
              </span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
